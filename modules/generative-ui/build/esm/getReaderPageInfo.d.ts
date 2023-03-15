import { ContextualPromptResult, ContextualPromptsObject } from "ai-types";
export declare const getReaderPageInfo: (isFolder: boolean | undefined, contextualPromptsObject: Omit<ContextualPromptsObject, "databaseContextualPromptSlugs"> | null | undefined, contextualPromptResults: ContextualPromptResult[] | null | undefined) => {
    thePrompts: import("ai-types").ContextualPrompt[];
    selectionContextualPromptResults: ContextualPromptResult[] | undefined;
    fileContextualPromptResults: ContextualPromptResult[] | undefined;
};
//# sourceMappingURL=getReaderPageInfo.d.ts.map