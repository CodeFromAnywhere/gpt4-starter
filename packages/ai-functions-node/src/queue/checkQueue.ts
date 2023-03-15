import { db } from "database";
import { oneByOne } from "one-by-one";
import { isOnline } from "is-online";
import { isSystemBusy } from "is-system-busy";
import { isSystemUsingBattery, getBatteryLevelPercentage } from "battery";
import { sdk } from "sdk-api";
import { mergeObjectParameters, mergeObjectsArray, notEmpty } from "js-util";
import { ProjectWatcher, QueueFunctionConfig } from "function-types";
import { StandardFunctionConfig } from "function-types";
import { fs, path, writeJsonToFile } from "fs-util";

export type QueueStatus = {
  updatedAt: number;
  serverStatus: {
    isOffline: boolean;
    isBusy: boolean;
    isUsingBattery: boolean;
  };
  totalQueueCount: number;
  queueSummary: {
    isDisabled?: number | undefined;
    isHeavy?: number | undefined;
    isInternetRequired?: number | undefined;
    isBrowserRequired?: number | undefined;
  };
  executableQueueCount: number;
};
export const MAX_REGULAR_ITEMS_AMOUNT = 300;
/**
Cron that runs every minute for executing queue items. 

Regular items: It will execute max `MAX_REGULAR_ITEMS_AMOUNT`

Browser items: You can set the amount of tabs it should have as a limit, and it will keep the tabs open afterwards, but after the thing is done it will just remove the item from the `Queue`.

Heavy items: functions with `.isHeavy: true` inside. Will execute max 1 every minute if the system isn't busy already.

- sort on priority high first
- filter out internet items if we are offline
- find single heavy item if it's there and if we're not busy
- find up to N (amount tabs available) queue items that require browser
 */
export const checkQueue = async () => {
  const batteryPercentage = await getBatteryLevelPercentage();

  if (batteryPercentage < 0.2) {
    console.log(`🔋 Battery level too low, not doing anything from queue`);
    return;
  }

  const allQueueItems = (await db.get("Queue"))
    .sort((a, b) => (a.priority === "high" ? 1 : -1))
    .map((item) => {
      const fn = sdk[item.functionName as keyof typeof sdk] as
        | ProjectWatcher
        | undefined;

      return { item, fn };
    });

  const isOffline = !(await isOnline());
  const isBusy = await isSystemBusy();
  const isUsingBattery = await isSystemUsingBattery();

  const keysToCount: (keyof StandardFunctionConfig)[] = [
    "isInternetRequired",
    "isHeavy",
    "isBrowserRequired",
    "isDisabled",
  ];
  const queueSummary: { [key in keyof QueueFunctionConfig]: number } =
    mergeObjectsArray(
      keysToCount.map((key) => ({
        [key]: allQueueItems.filter((x) => x.fn?.config?.[key]).length,
      }))
    );

  const queueAfterInternetStatus = isOffline
    ? allQueueItems.filter((x) => !x.fn?.config?.isInternetRequired)
    : allQueueItems;

  const startTime = Date.now();

  /**
   * Only get heavy items if system isn't busy and not using battery
   */
  const heavyItems =
    isBusy || isUsingBattery
      ? []
      : queueAfterInternetStatus.filter((x) => {
          return x.fn?.config?.isHeavy;
        });

  const regularQueueItems = queueAfterInternetStatus.filter((x) => {
    const config = x.fn?.config;
    if (config?.isBrowserRequired || config?.isHeavy) return false;
    return true;
  });

  const browserQueueItems = queueAfterInternetStatus.filter((x) => {
    return x.fn?.config?.isBrowserRequired;
  });

  // NB: later useful instead of 1:
  // const idlePages = (await db.get("BrowserPage")).filter((p) => p.isIdle);
  const browserRunnableNowAmount = 1; //idlePages.length
  const browserItemsToExecute =
    isBusy || isUsingBattery
      ? []
      : browserQueueItems.slice(0, browserRunnableNowAmount);

  const queueItemsToExecute = [
    ...heavyItems,
    ...browserItemsToExecute,
    ...regularQueueItems,
  ].filter(notEmpty);

  const executableQueueCount = queueItemsToExecute.length;

  const queueStatus: QueueStatus = {
    updatedAt: Date.now(),
    serverStatus: { isOffline, isBusy, isUsingBattery },
    totalQueueCount: allQueueItems.length,
    queueSummary,
    executableQueueCount,
  };

  await writeJsonToFile(
    path.join(__dirname, "../..", "assets", "queueStatus.json"),
    queueStatus
  );

  if (executableQueueCount === 0) {
    return;
  }

  const lateQueueItemsToNotify = allQueueItems.filter(
    (x) =>
      x.item.notifyLateAfterSeconds &&
      Date.now() - x.item.createdAt > x.item.notifyLateAfterSeconds * 1000 &&
      !x.item.hasNotifiedLate
  );

  // 1. check how many chrome tabs are available (according to OS settings / memory limit)

  if (browserRunnableNowAmount < lateQueueItemsToNotify.length) {
    //email the ones that won't be executed
    console.log(
      {
        browserRunnableNowAmount,
        lateQueueItemsToNotify: lateQueueItemsToNotify.length,
      },
      "SHOULD EMAIL SOME THAT CAN'T BE EXECUTED AND PUT THEM ON NOTIFIED WITH ETA"
    );
  }

  // 2. check how many queue items can be executed now, and sort by importancy
  // NB: limit to 1 for now to test if that works

  console.log(`Executing ${queueItemsToExecute.length} from queue, one by one`);

  // 3. take the ones that are most important and execute those, only for a minute!

  await oneByOne(queueItemsToExecute, async (queue) => {
    const fn = queue.fn as ((...parameters: any[]) => any) | undefined;

    if (!fn) {
      console.log("fn not found", queue.item?.functionName);
      return;
    }

    if (Date.now() > startTime + 60000) {
      // time's up! skip the rest, because this function starts again.
      return;
    }

    console.log(
      `run ${queue.item.functionName} ${queue.item.parameters?.[1] || ""}`
    );

    await fn(...queue.item.parameters);

    // after it's done, remove from queue
    const removeResult = await db.remove(
      "Queue",
      (item) => queue.item.id === item.id
    );
  });
};

checkQueue.config = {
  runEveryPeriod: "minute",
} satisfies StandardFunctionConfig;
