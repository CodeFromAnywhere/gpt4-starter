import { FunctionContext } from "function-context-type";
import type { DbModels } from "sdk-db";
/**
 * Get referencableModelData for a single DbModel.
 *
 * NB: this does not get the items that can be referenced in that model!
 *
 * For getting all required `ReferencableModelData` for the prop in `SimplifiedSchemaForm`, use `useGetReferencableModelData`.
 */
export declare const getReferencableModelDataWithContext: (functionContext: FunctionContext, dbModelName: keyof DbModels) => Promise<{
    id: string;
    name: any;
    slug: any;
    categoryStack: any;
}[]>;
//# sourceMappingURL=getReferencableModelData.d.ts.map