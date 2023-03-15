///////////////////////////

import { db } from "database";
import { notEmpty } from "js-util";
import { explore } from "k-explore";
import { Creation } from "model-types";
import { oneByOne } from "one-by-one";
import { Queue } from "queue-types";
import { ProjectWatcher } from "function-types";

export const getQueueItems = async (
  projectWatchers: ProjectWatcher<any>[],
  basePath: string | string[]
) => {
  const queueItemsBefore = await db.get("Queue");

  // do everything at startup too, as long as a "startupStrategy" is declared
  const startupFiles = (
    await explore({
      basePath,
      ignore: [
        "node_modules",
        ".next",
        ".expo",
        "db",
        "public",
        ".git",
        ".turbo",
        "generated",
      ],
    })
  ).map((x) => x.path);

  console.log({
    startupFiles: startupFiles.length,
  });

  const queueItems = await oneByOne(projectWatchers, async (watcher) => {
    if (watcher.startupStrategy === "ignore" || !watcher.startupStrategy) {
      //console.log(`ignore ${watcher.name}`);
      return;
    }

    const thisQueueItemFilePaths = queueItemsBefore
      .filter((x) => x.functionName === watcher.name)
      .map((x) => x.parameters[1] as string);

    const realStartupFiles = startupFiles
      .filter((absolutePath) => {
        return watcher.filter("add", absolutePath);
      })
      .filter((x) => !thisQueueItemFilePaths.includes(x));

    // console.log({
    //   watcher: watcher.name,
    //   filesAlreadyInQueue: thisQueueItemFilePaths.length,
    //   filesToBeAddedToQueue: realStartupFiles.length,
    // });

    if (realStartupFiles.length === 0) {
      return;
    }

    const newQueueItems = realStartupFiles.map((absolutePath) => {
      const queue: Creation<Queue> = {
        functionName: watcher.name,
        parameters: ["add", absolutePath, true],
      };
      return queue;
    });

    return newQueueItems;
  });

  return queueItems.filter(notEmpty).flat();
};
