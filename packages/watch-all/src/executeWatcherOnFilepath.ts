import realFs from "fs";
///////////////////////////

import { db } from "database";
import { isOnline } from "is-online";
import { isSystemUsingBattery } from "battery";
import { isSystemBusy } from "is-system-busy";
import { oneByOne } from "one-by-one";
import { ProjectWatcher, WatchEventType } from "function-types";

export const executeWatcherOnFilepath = async (
  projectWatchers: ProjectWatcher<any>[],
  eventName: WatchEventType,
  path: string,
  stats?: realFs.Stats | undefined
) => {
  const startupWaitMs = 1000;
  const startTimeAt = Date.now();

  const isStartup = Date.now() < startTimeAt + startupWaitMs;
  if (isStartup) {
    return;
  }

  const isOffline = !(await isOnline());
  const isBusy = await isSystemBusy();
  const isUsingBattery = await isSystemUsingBattery();
  const relevantWatchers = projectWatchers.filter((watcher) => {
    const isApplicableWatcher = watcher.filter(eventName, path);
    if (!isApplicableWatcher) {
      return false;
    }

    if (watcher.config?.isInternetRequired && isOffline) {
      // add to queue because internet required but offline
      db.upsert("Queue", {
        functionName: watcher.name,
        parameters: [eventName, path, false],
      });
      return false;
    }

    if (watcher.config?.isHeavy && !isUsingBattery) {
      // add to queue because waste of battery
      db.upsert("Queue", {
        functionName: watcher.name,
        parameters: [eventName, path, false],
      });
      return false;
    }
    if (watcher.config?.isHeavy && isBusy) {
      // add to queue because busy

      db.upsert("Queue", {
        functionName: watcher.name,
        parameters: [eventName, path, false],
      });
      return false;
    }

    return true;
  });

  oneByOne(relevantWatchers, async (projectWatcher) => {
    console.log(`watchAll: executing ${projectWatcher.name} for ${path}`);
    await projectWatcher(eventName, path, false);
  });
};
