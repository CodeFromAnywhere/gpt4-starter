import { StandardResponse } from "function-types";
/**
General purpose function to go from a queryPath to an actual file and/or folder-path.
 */
export declare const getQueryInfo: (config: {
    /**
     * If defined, queryPath should be relative to this one. Should only be allowed for admin.
     */
    customProjectRelativeBaseFolderPath?: string | undefined;
    /**
     * QueryPath as in the URL, should be a relative path from the projectRoot (or to `customAbsoluteBaseFolderPath`, if defined)
     */
    queryPath: string;
}) => Promise<StandardResponse & {
    result?: {
        projectRelativeFilePath: string | undefined;
        projectRelativeFolderPath: string;
        queryIsFolder: boolean;
    } | undefined;
}>;
//# sourceMappingURL=getQueryInfo.d.ts.map