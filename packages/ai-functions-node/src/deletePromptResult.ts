import { alterJsonMultiple } from "fs-orm";
import { getContextualPromptResultJsonFilePath } from "./getContextualPromptResultJsonFilePath";

export const deletePromptResult = async (
  projectRelativePath: string,
  id: string
) => {
  const resultPath = await getContextualPromptResultJsonFilePath(
    projectRelativePath
  );

  if (!resultPath) return { isSuccessful: false };

  const result = await alterJsonMultiple(
    {
      absolutePath: resultPath,
      modelName: "ContextualPromptResult",
      projectRelativePath: resultPath,
      operationName: "",
    },
    (old) => {
      return {
        newStoredData: old.filter((item) => (item.id === id ? false : true)),
        amountRemoved: 1,
      };
    }
  );

  return { isSuccessful: result.amountRemoved === 1 };
};
