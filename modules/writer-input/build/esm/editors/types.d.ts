/// <reference types="react" />
import { MarkdownParseRenderConfig } from "markdown";
import { marked } from "marked";
import { SubtextConfig, SubwordConfig } from "writer-types";
export type ContentEditableRenderProps<TToken extends marked.Token> = {
    /**
     * In the actual function you can overwrite t his to be more specific
     */
    markedToken: TToken;
    subtextConfig: SubtextConfig;
    subwordConfig: SubwordConfig;
    markdownFileConfig: MarkdownParseRenderConfig;
    testModeEnabled?: boolean;
};
/**
 *
 */
export type ContentEditableRenderComponentType<TToken extends marked.Token> = {
    /**
     * Your React Component
     */
    (props: ContentEditableRenderProps<TToken>): JSX.Element;
    /**
     * function that should take the HTML element and return the exact same `markdownString` that was initially supplied into the component
     *
     *
     */
    toMarkdownString: (
    /**
     *
     */
    element: HTMLSpanElement) => string;
    /**
     * Example inputs for testing
     */
    exampleInputs: TToken[];
};
//# sourceMappingURL=types.d.ts.map