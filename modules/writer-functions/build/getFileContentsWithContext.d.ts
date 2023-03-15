import { FunctionContext } from "function-types";
/**
Gets the contents of a file in the project
 */
export declare const getFileContentsWithContext: {
    (functionContext: FunctionContext, projectRelativeFilePath: string): Promise<{
        isSuccessful: boolean;
        message: string;
        fileContents?: string | undefined;
    }>;
    config: {
        isPublic: boolean;
    };
};
//# sourceMappingURL=getFileContentsWithContext.d.ts.map