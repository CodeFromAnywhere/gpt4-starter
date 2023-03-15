import { MarkdownIndex } from "markdown-types";
/**
provide a path to a folder or a markdown file, and it will give you the beloning `MarkdownIndex`.

Uses `readme.md` for a folder.

It sources from both frontmatter as well as .MarkdownIndex.json until we can make the complete transition to frontmatter or the other (but this may take some time!)

NB: can be any file, it will always search for a markdownindex for the basename for that file... but preferably a .md file
*/
export declare const getMarkdownIndex: (projectRelativePath: string) => Promise<MarkdownIndex | undefined>;
//# sourceMappingURL=getMarkdownIndex.d.ts.map