import { FunctionContext, StandardResponse } from "function-types";
export declare const getFileCollectionPathsWithContext: (functionContext: FunctionContext, queryPath: string) => Promise<StandardResponse & {
    absoluteFileCollectionPaths?: string[] | undefined;
    projectRelativeFilePath?: string | undefined;
    projectRelativeFolderPath?: string | undefined;
    queryIsFolder?: boolean | undefined;
}>;
//# sourceMappingURL=getFileCollectionPathsWithContext.d.ts.map