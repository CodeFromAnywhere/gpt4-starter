import { Queue } from "queue-types";
import { fs, path } from "fs-util";
import { getProjectRoot } from "get-path";
import { Creation } from "model-types";
import { db } from "database";
import { explore } from "k-explore";
import { makeRelative } from "fs-util-js";
import { FunctionContext } from "function-types";

/**
 * function that can execute `processPromptOnFile` for all files in a folder, by just upserting the executions to the queue.
 */

export const processPromptOnFolderWithContext = async (
  functionContext: FunctionContext,
  config: {
    projectRelativeFolderPath: string;
    promptSlug: string;
    isRecursive?: boolean;
    /**
     * File extension(s) to be searched for in the folder
     *
     * If not given, just finds all file extensions
     *
     * exension without dot
     */
    extension?: string | string[];
  }
) => {
  const { projectRelativeFolderPath, promptSlug, extension, isRecursive } =
    config;
  const projectRoot = getProjectRoot();
  if (!projectRoot) {
    return { isSuccessful: false, message: "No projectroot" };
  }
  const absoluteFolderPath = path.join(projectRoot, projectRelativeFolderPath);

  const exists = fs.existsSync(absoluteFolderPath);

  if (!exists) {
    return { isSuccessful: false, message: "Folder not found" };
  }

  const stats = await fs.stat(absoluteFolderPath);
  if (!stats.isDirectory()) {
    return { isSuccessful: false, message: "That's not a folder" };
  }

  // get files
  const projectRelativeFilePaths = (
    await explore({
      basePath: absoluteFolderPath,
      doNotExploreChildFolders: !isRecursive,
      extension,
      ignore: ".index",
    })
  ).map((x) => makeRelative(x.path, projectRoot));

  const queueItems: Creation<Queue>[] = projectRelativeFilePaths.map(
    (projectRelativeFilePath) => {
      return {
        executionAuthToken: functionContext.authToken,
        functionName: "processPromptOnFile",
        parameters: [projectRelativeFilePath, promptSlug],
        type: "puppeteer",
      };
    }
  );

  const upsertResult = await db.upsert("Queue", queueItems);

  return {
    isSuccessful: upsertResult.isSuccesful,
    message: upsertResult.isSuccesful ? "Added to queue" : upsertResult.message,
  };
};
