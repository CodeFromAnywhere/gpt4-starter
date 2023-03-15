/**
 * I'll later probably find more things to add here, but until that time, it's simply an array of filenames, where the first one is the primary one
 */
export type FileCollection = string[];
export type FileCollectionObject = {
    [rootName: string]: FileCollection;
};
/**
For now, the first one is the primary one. May later change.
 */
export declare const getPrimaryFileFromFileCollection: (fileCollection: FileCollection) => string | undefined;
//# sourceMappingURL=FileCollection.d.ts.map