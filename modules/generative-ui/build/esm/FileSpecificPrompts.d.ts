/// <reference types="react" />
import { ContextualPrompt, ContextualPromptsObject } from "ai-types";
/**
 * Component to render all the prompts under a file
 */
export declare const FileSpecificPrompts: (props: {
    contentString: string;
    actualProjectRelativeFilePath?: string | undefined;
    contextualPromptsObject?: Omit<ContextualPromptsObject, "databaseContextualPromptSlugs"> | null | undefined;
    isFolder?: boolean | undefined;
    thePrompts?: ContextualPrompt[] | undefined;
    markdown?: string | null | undefined;
}) => JSX.Element;
//# sourceMappingURL=FileSpecificPrompts.d.ts.map