import { oneByOne } from "one-by-one";
import { log } from "log";
import { schedule } from "node-cron";
import { sdk } from "sdk-api";
import {
  RunEveryPeriodEnum,
  StandardFunctionConfig,
  TsFunction,
} from "function-types";
import { getObjectKeysArray } from "js-util";
import { executeCronFunction } from "./executeCronFunction";

/**
 * For every `RunEveryPeriodEnum`, this object provides the interval `cronExpression` string for `node-cron`
 */
export const scheduleObject: { [interval in RunEveryPeriodEnum]: string } = {
  minute: "* * * * *",
  "5-minutes": "0,5,10,15,20,25,30,35,40,45,50,55 * * * *",
  "quarter-hour": "0,15,30,45 * * * *",
  hour: "0 * * * *",
  "6-hours": "0 0,6,12,18 * * *",
  midnight: "0 0 * * *",
  week: "0 0 * * 1",
  month: "0 0 1 * *",
  "3-months": "0 0 1 1,4,7,10 *",
  year: "0 0 1 1 *",
};

export const scheduleCronJobs = async (tsFunctions: TsFunction[]) => {
  const cronFunctions = tsFunctions
    .map((x) => {
      const fn = sdk[x.name as keyof typeof sdk] as any;
      const config = fn?.config as StandardFunctionConfig | undefined;
      return { ...x, config };
    })
    .filter((x) => !!x.config?.runEveryPeriod);

  log(
    `Scheduling ${cronFunctions.length} CRON jobs: ${cronFunctions
      .map((x) => `${x.name} (${x.config?.runEveryPeriod})`)
      .join(", ")}`,
    { type: "important" }
  );

  getObjectKeysArray(scheduleObject).map((interval) => {
    const cronExpression = scheduleObject[interval];
    const functionsToExecute = cronFunctions.filter(
      // should later be replaced with the thing you find on the actual function
      (x) => x.config?.runEveryPeriod === interval
    );
    if (functionsToExecute.length > 0) {
      schedule(
        cronExpression,
        () => {
          oneByOne(functionsToExecute, executeCronFunction);
        },
        { name: interval }
      );
    }
  });
};
