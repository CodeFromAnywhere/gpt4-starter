import { FileFunction } from "function-types";
/**
 * Update frontmatter from a markdownfile by overwriting it, keeping old values that you don't change
 *
 * If you provide a folder as projectRelativePath, it stores it to readme.md in that folder, even if that doens't exist.
 */
export declare const updateFrontmatterWithContext: FileFunction<{
    [key: string]: string;
}>;
//# sourceMappingURL=updateFrontmatterWithContext.d.ts.map