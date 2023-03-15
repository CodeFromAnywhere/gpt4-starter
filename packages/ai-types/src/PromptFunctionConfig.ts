import { StandardFunctionConfig } from "function-types";
import { ContextualPromptInfo } from "./ContextualPrompt";
import { ProcessPromptFunctionResult } from "./ProcessPromptFunctionResult";
/**
 * Special kind of function that executes a prompt with the use of a language model
 */
export type PromptFunctionConfig = {
  (...parameters: any[]): Promise<ProcessPromptFunctionResult>;
  contextualPromptInfo: ContextualPromptInfo;
  config: StandardFunctionConfig;
};
