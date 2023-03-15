import { camelCase } from "convert-case";
import { ContextualPrompt } from "ai-types";
import { notEmpty } from "js-util";

export const writeCreatePromptCode = (contextualPrompt: ContextualPrompt) => {
  const parameters = [
    contextualPrompt.usesAnyContext ? `anyContext` : undefined,
    contextualPrompt.usesContext ? `contextContent` : undefined,
    contextualPrompt.usesSelection ? `selectionContent` : undefined,
    contextualPrompt.folderContentContext
      ? `prompt_projectRelativePath`
      : undefined,
  ].filter(notEmpty);

  const functionLineParametersString = parameters
    .map((x) => `${x}: string`)
    .join(", ");
  const objectParametersString = parameters.join(",\n");

  const { contextType, instantExecution, isFavorite, categoryStack } =
    contextualPrompt;
  const contextualPromptInfo = {
    contextType,
    instantExecution,
    isFavorite,
    categoryStack,
  };
  const functionName = camelCase(contextualPrompt.name);

  const functionLineFullString =
    parameters.length === 0 ? "" : `${functionLineParametersString}, `;
  return `
  ${
    contextualPrompt.title
      ? `/**
  ${contextualPrompt.title}
  */`
      : ""
  }
  export const ${functionName}: PromptFunction = async (${functionLineFullString}isDeferred?: boolean) => {

    const result = await processChatGptPrompt({
      isDeferred,
      contextualPromptSlug: "${contextualPrompt.slug}",
      ${objectParametersString}
    });

    return result;

  }

${functionName}.contextualPromptInfo = ${JSON.stringify(contextualPromptInfo)};

${
  contextualPrompt.isFavorite
    ? `${functionName}.domain = "${functionName}";`
    : ""
}`;
};
