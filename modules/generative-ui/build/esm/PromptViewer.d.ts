/// <reference types="react" />
import { ContextualPrompt, ContextualPromptResult } from "ai-types";
/**

Markdown files should have the ability to do prompts, like before...

- Fix PromptViewer
- Add PromptViewer to TextFile

 */
export declare const PromptViewer: (props: {
    markdown?: string | undefined;
    projectRelativeFilePath: string;
    contextualPromptResults?: ContextualPromptResult[] | undefined;
    contextualPrompts?: ContextualPrompt[] | undefined;
}) => JSX.Element;
//# sourceMappingURL=PromptViewer.d.ts.map