import { db } from "database";
import { writeCreatePromptCode } from "./writeCreatePromptCode";

export const writeContextualPromptSdk = async () => {
  const contextualPrompts = await db.get("ContextualPrompt");

  const functionStrings = contextualPrompts
    .map((contextualPrompt) => {
      return writeCreatePromptCode(contextualPrompt);
    })
    .join("\n\n\n");

  const codeString = `// this file is generated, you can edit it, but it will be re-generated based on the contextual prompts database
  
import { PromptFunction } from "ai-types";
import { processChatGptPrompt } from "./processChatGptPrompt";

${functionStrings}`;

  return codeString;
};
