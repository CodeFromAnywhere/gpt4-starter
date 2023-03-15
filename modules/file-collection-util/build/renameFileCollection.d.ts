export type RenameResult = {
    absolutePath: string;
    status: string;
    newAbsolutePath?: string;
};
/**
Rename all files part of the collection of a file mentioned into something else (looks at all files with the same rootname in the same folder, ommitting (sub)extensions.


Functionality:

- dryrun capability; first dryrun the rename file collection stuff
- ensures the file names to rename to doesn't already exist, return with error otherwise.
- if there's a file collection where there's one of the files that's a codefile, don't rename, warning! (ts, tsx, js, jsx, php, etc.)

 */
export declare const renameFileCollection: (projectRelativeFilePath: string, newBaseName: string, config?: {
    isDryrun?: boolean | undefined;
} | undefined) => Promise<{
    isSuccessful: boolean;
    message: string;
    results?: RenameResult[] | undefined;
}>;
//# sourceMappingURL=renameFileCollection.d.ts.map