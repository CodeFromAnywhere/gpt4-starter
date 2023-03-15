import { BackendAsset } from "asset-type";
import { FunctionContext } from "function-types";
/**
 * Used for the markdown reader to immediately process a asset upload. If we want to validate this, it would be good to allow a second parameter that checks if you have access to the file
 */
export declare const processAssetUploadWithContext: (functionContext: FunctionContext, projectRelativeFolderPath?: string, assets?: BackendAsset[]) => Promise<{
    isSuccessful: boolean;
    message: string;
    processed?: BackendAsset[] | undefined;
}>;
//# sourceMappingURL=processAssetUploadWithContext.d.ts.map