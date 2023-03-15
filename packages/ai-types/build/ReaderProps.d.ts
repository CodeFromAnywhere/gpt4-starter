import { AuthorizationProperties } from "markdown-types";
import { CategoryChildObject } from "./CategoryChildObject";
import { ContextualPromptsObject } from "./ContextualPromptObject";
import { ContextualPromptResult } from "./ContextualPromptResult";
/**
 * This is what we need on the page level. There are many subtleties to it, but this is the core
 */
export type ReaderProps = {
    notFound?: boolean;
    notFoundReason?: string | null;
    /**
     * If true, the current path represents a folder, not a file.
     */
    isFolder?: boolean;
    canSeeContent?: boolean;
    unauthorizedWarningMessage?: string | null;
    markdown?: string | null;
    contextualPromptsObject?: Omit<ContextualPromptsObject, "databaseContextualPromptSlugs"> | null;
    contextualPromptResults?: ContextualPromptResult[] | null;
    /**
     * Project relative file path that is actually used
     */
    actualProjectRelativeFilePath?: string;
    navigation?: FolderContent[];
    /**
     * Should later be moved elsewhere
     */
    contextualPromptCategories?: CategoryChildObject;
};
export type FolderContent = {
    name: string;
    projectRelativePath: string;
    type: "folder" | "file" | "collection" | "link" | "unknown";
    /**
     * In case the type is a folder, this is either the only file in that folder, or the README, or the index.*, or blank.
     */
    firstFile?: string;
    canRead?: boolean;
} & AuthorizationProperties;
//# sourceMappingURL=ReaderProps.d.ts.map