import { CategoryStack } from "model-types";
import { ReferenceParameterInfo } from "schema-util";
import { ReferencableModelData } from "./types";
export type ReferenceItem = {
    id: string;
    slug?: string;
    name?: string;
    categoryStack?: CategoryStack;
};
export type ReferenceItemsObject = {
    data?: ReferenceItem[];
    isLoading?: boolean;
};
export type ReferencedModelDataItem = ReferenceParameterInfo & ReferenceItemsObject;
export declare const getReferencedModelDataItem: (parameterName: string, referencedModelData?: ReferencableModelData) => ReferencedModelDataItem | undefined;
//# sourceMappingURL=getReferencedModelDataItem.d.ts.map