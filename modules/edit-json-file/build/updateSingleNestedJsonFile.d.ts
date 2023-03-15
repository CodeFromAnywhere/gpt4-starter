import { NestedPartial, O } from "js-util";
/**
 * Uses mergeNestedObject on a JSON file
 */
export declare const updateSingleNestedJsonFile: <T extends O>(path: string, partialNewObject: NestedPartial<T>, newObject?: T | undefined) => Promise<boolean>;
//# sourceMappingURL=updateSingleNestedJsonFile.d.ts.map