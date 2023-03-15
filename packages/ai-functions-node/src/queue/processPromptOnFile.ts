import { fs, path } from "fs-util";
import { getProjectRoot } from "get-path";
import { processChatGptPrompt } from "../processChatGptPrompt";

/**
 * 
 * function `processPromptOnFile` to execute `processChatGptPrompt` for a file, so we don't need to store the whole file content and it can be executed later and still have the most recent file contents

 * In order to keep the file itself as a source of truth for its content, it's useful to have this because you can add this to the queue
 */
export const processPromptOnFile = async (
  projectRelativeFilePath: string,
  contextualPromptSlug: string
) => {
  console.log("called processPromptOnFile", {
    projectRelativeFilePath,
    contextualPromptSlug,
  });
  const projectRoot = getProjectRoot();
  if (!projectRoot) {
    return { isSuccessful: false, message: "No projectroot" };
  }

  const absolutePath = path.join(projectRoot, projectRelativeFilePath);

  const exists = fs.existsSync(absolutePath);

  if (!exists) {
    return { isSuccessful: false, message: "File doesn't exist" };
  }

  const contextContent = await fs.readFile(absolutePath, "utf8");
  const result = await processChatGptPrompt({
    contextContent,
    contextualPromptSlug,
    isDeferred: true,
    prompt_projectRelativePath: projectRelativeFilePath,
  });

  return result;
};
