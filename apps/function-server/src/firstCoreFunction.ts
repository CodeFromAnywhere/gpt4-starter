import { db } from "database";
import { watchAll } from "watch-all";
import { scheduleCronJobs } from "./scheduleCronJobs";
import { runChildProcess } from "run-child-process";
import { startSearchWebIfAvailable } from "./startSearchWebIfAvailable";
/**
 * Function that is supposed to be ran on the first core only
 *
 * NB: SHOULD NOT BE BLOCKING
 */
export const firstCoreFunction = async (
  port: number,
  isWatching?: boolean,
  isRestart?: boolean
) => {
  console.log(
    `Typerepo is now running on port ${port}. Your node functions are now available through the "api" object!`
  );
  const tsFunctions = await db.get("TsFunction");

  // only on the first core, schedule crons and initiate watchers
  await scheduleCronJobs(tsFunctions);

  if (isWatching) {
    watchAll(tsFunctions);
  }

  // startSearchWebIfAvailable(isWatching, isRestart);
};
