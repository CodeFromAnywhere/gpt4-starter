import { AuthorizationProperties } from "markdown-types";
export type FolderContent = {
    /**
     * basename including extension
     */
    name: string;
    absolutePath: string;
    projectRelativePath: string;
    type: "folder" | "file" | "link" | "unknown";
    canRead?: boolean;
    canWrite?: boolean;
    isFileCollection?: boolean;
    names?: string[];
} & AuthorizationProperties;
//# sourceMappingURL=FolderContent.d.ts.map