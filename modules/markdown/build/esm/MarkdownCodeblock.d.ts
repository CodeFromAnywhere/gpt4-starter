/// <reference types="react" />
export type CodeblockMode = "preview" | "scroll" | "full";
export declare const defaultExpandedMode: CodeblockMode;
export declare const defaultMinimalMode: CodeblockMode;
/**
 * Renders a markdown codeblock with a text as content and an optional extension
 *
 */
export declare const MarkdownCodeblock: (props: {
    /**
     * STRING! don't put a JSON object here,  first use JSON.stringify!
     */
    text: string;
    extension?: string | undefined;
    /**
     * If set, this is the mode when minimised
     */
    minimalMode?: CodeblockMode | undefined;
    /**
     * If set, this is the mode when expanded
     */
    expandedMode?: CodeblockMode | undefined;
    /**
     * if true, by default it's expanded
     */
    isInitiallyExpanded?: boolean | undefined;
    /**
     * if true, mode cannot be changed
     */
    isModeStatic?: boolean | undefined;
}) => JSX.Element;
//# sourceMappingURL=MarkdownCodeblock.d.ts.map