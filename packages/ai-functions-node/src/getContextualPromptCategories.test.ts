import { writeToAssets } from "write-to-assets";
import { getContextualPromptCategories } from "./getContextualPromptCategories";

export const getCategoriesTest = async () => {
  const result = await getContextualPromptCategories();

  writeToAssets(__filename, result, "contextual-prompt-categories.json");
};

getCategoriesTest();
