import { alterJsonMultiple } from "fs-orm";
import { getContextualPromptResultJsonFilePath } from "./getContextualPromptResultJsonFilePath";

export const setIsFavoritePromptResult = async (
  projectRelativePath: string,
  id: string,
  isFavorite: boolean
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
        newStoredData: old.map((item) => {
          if (item.id !== id) return item;
          return { ...item, isFavorite };
        }),
        amountUpdated: 1,
      };
    }
  );

  return { isSuccessful: result.amountUpdated === 1 };
};
