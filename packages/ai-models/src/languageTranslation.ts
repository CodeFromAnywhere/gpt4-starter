import { textToText } from "./textToText";

/**
 * Might very well be using a LLM Prompt, but there are more niche models that might do a better job, more efficiently, more cheaply, more performantly.
 */
export const languageTranslation = async (
  text: string,
  targetLanguage: string
) => {
  return textToText(`Please translate the following text into ${targetLanguage}:
  
${text}`);
};
