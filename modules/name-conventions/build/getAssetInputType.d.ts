import { SimplifiedSchemaType } from "schema-types";
export type AssetInputType = {
    type: "image" | "video" | "audio" | "file" | "asset";
    isMultiple: boolean;
};
export declare const getAssetInputType: (parameterName: string, valueType?: SimplifiedSchemaType) => AssetInputType | undefined;
//# sourceMappingURL=getAssetInputType.d.ts.map