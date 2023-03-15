import { MarkdownIndex } from "markdown-types";
import { NestedPartial } from "js-util";
/**
also takes frontmatter into account and places it in the right file (.MarkdownIndex.json) using `edit-json-file` and parsefrontmatter

NB: removes frontmatter from md for now to avoid duplication, assuming there's never anything else besides `MarkdownIndex` there.
*/
export declare const updateMarkdownIndex: (projectRelativeMarkdownFilePath: string, partial: NestedPartial<MarkdownIndex>) => Promise<boolean>;
//# sourceMappingURL=updateMarkdownIndex.d.ts.map