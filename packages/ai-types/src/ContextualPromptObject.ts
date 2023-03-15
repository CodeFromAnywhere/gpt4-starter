import { ContextualPrompt } from "./ContextualPrompt";

export type ContextualPromptsObject = {
  selectionContextualPrompts: ContextualPrompt[];
  pageContextualPrompts: ContextualPrompt[];
  folderContextualPrompts: ContextualPrompt[];
  databaseContextualPromptSlugs: string[];
};
