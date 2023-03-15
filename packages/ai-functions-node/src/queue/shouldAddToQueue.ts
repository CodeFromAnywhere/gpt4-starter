import { isSystemBusy } from "is-system-busy";
import { db } from "database";
/**
 * Checks if system is busy and if so, adds the task to queue
 */
export const shouldAddToQueue = async (
  functionName: string,
  parameters: any[]
) => {
  const isBusy = await isSystemBusy();
  if (isBusy) {
    //add to the queue if the cpus/memory are too busy.
    const upsertResult = await db.upsert("Queue", {
      executionAuthToken: ".....", // what is the auth token if it's done by a watcher?
      functionName,
      parameters,
    });

    return true;
  }
  return false;
};
