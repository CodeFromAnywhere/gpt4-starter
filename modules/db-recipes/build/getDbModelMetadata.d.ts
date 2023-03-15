import { Dataset, TsInterface } from "code-types";
import { FunctionContext } from "function-context-type";
export declare const getDbModelMetadataWithContext: (functionContext: FunctionContext, modelName: string | undefined) => Promise<{
    tsInterface?: TsInterface | undefined;
    datasets?: Dataset[] | undefined;
    projectRelativeStorageFilePath?: string | undefined;
    isSuccessful?: boolean | undefined;
    message?: string | undefined;
}>;
//# sourceMappingURL=getDbModelMetadata.d.ts.map