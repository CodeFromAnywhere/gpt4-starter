import { ContextualPromptResult } from "ai-types";
import { path, writeJsonToFile } from "fs-util";
import { getProjectRoot } from "get-path";
import { mapMany } from "js-util";
import { explore } from "k-explore";
import { readJsonFile } from "read-json-file";
export const removeAllFake = async (
  basePath?: string
): Promise<{ isSuccessful: boolean; message?: string }> => {
  console.log("removing all fake");
  const projectRoot = getProjectRoot();
  if (!projectRoot) {
    return { isSuccessful: false, message: "no projectroot" };
  }

  const absoluteBasePath = basePath
    ? path.join(projectRoot, basePath)
    : projectRoot;

  console.log({ absoluteBasePath });

  const absolutePaths = (
    await explore({
      basePath: absoluteBasePath,
      exact: true,
      search: "prompt-results.json",
      searchLevel: "fileName",
    })
  ).map((x) => x.path);

  const filtered = await mapMany(
    absolutePaths,
    async (absolutePath) => {
      // remove items with isFake

      const json = await readJsonFile<ContextualPromptResult[]>(absolutePath);

      if (!json) return false;

      const newJson = json.filter((item) => item.isFake !== true);

      if (newJson.length === json.length) return false;

      const writeResult = await writeJsonToFile(absolutePath, newJson);

      return writeResult;
    },
    100
  );

  console.log({ filtered: filtered });
  return { isSuccessful: true };
};
