import { FunctionContext } from "function-types";
/**
General purpose function to see what the rights are for any user for any folder in the file system (project relative only)

How it works: going from top of the fs (base folder path), to deepest folder, to file, checking authorization for every folder up until the file.
*/
export declare const getFsAuthorizationWithContext: (functionContext: FunctionContext, projectRelativePath: string, isDebug?: boolean) => Promise<{
    canRead: boolean;
    canWrite: boolean;
}>;
//# sourceMappingURL=getFsAuthorizationWithContext.d.ts.map