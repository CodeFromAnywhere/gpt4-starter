import { path } from "fs-util";
import { readJsonFile } from "read-json-file";
import { QueueStatus } from "./checkQueue";

export const getQueueStatus = async () => {
  const status = await readJsonFile<QueueStatus>(
    path.join(__dirname, "../..", "assets", "queueStatus.json")
  );

  return status;
};
