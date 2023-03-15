import { fs, path } from "fs-util";
import { getProjectRoot } from "get-path";

/**
 * Calculates path where the result json index is supposed to be
 */
export const getContextualPromptResultJsonFilePath = async (
  projectRelativePath?: string
) => {
  const projectRoot = getProjectRoot();
  if (!projectRoot) return;
  const prompt_absolutePath = projectRelativePath
    ? path.join(projectRoot, projectRelativePath)
    : undefined;

  const exists = prompt_absolutePath
    ? fs.existsSync(prompt_absolutePath)
    : undefined;

  const stats =
    exists && prompt_absolutePath
      ? await fs.stat(prompt_absolutePath)
      : undefined;
  const isFolder = stats ? stats.isDirectory() : false;
  const isFile = stats ? stats.isFile() : false;
  const pathParse = prompt_absolutePath
    ? path.parse(prompt_absolutePath)
    : undefined;

  const contextualPromptResultsJsonPath =
    pathParse && isFile
      ? path.join(
          pathParse.dir,
          ".index",
          pathParse.name,
          "prompt-results.json"
        )
      : isFolder && prompt_absolutePath
      ? path.join(prompt_absolutePath, ".index", "prompt-results.json")
      : undefined;

  return contextualPromptResultsJsonPath;
};
