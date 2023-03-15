import { TsFunction } from "code-types";
export type FileCollectionFile = {
    /**
     * name (with extension)
     */
    name: string;
    /**
     * type of the file. can be inferred from the extension
     */
    type?: string;
    /**
     * TODO: get an array of potential actions that are available for this file in the file collection. maybe here, maybe on the FileCollection level...
     */
    actions?: TsFunction[];
    /**
     * Raw file content if it's utf8
     */
    rawContent?: string;
};
//# sourceMappingURL=FileCollectionFile.d.ts.map