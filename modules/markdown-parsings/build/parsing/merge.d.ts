import { MarkdownParse } from "markdown-types";
export type MergedMarkdownOutlineUrl = {
    title: string;
    hashtagPath: string;
};
/**
 * Merges multiple markdown parses to create a new markdown parse
 */
export declare const mergeMarkdownParse: (markdownParses: MarkdownParse[], fileName?: string) => {
    merged: MarkdownParse;
    outline: MergedMarkdownOutlineUrl[];
};
//# sourceMappingURL=merge.d.ts.map