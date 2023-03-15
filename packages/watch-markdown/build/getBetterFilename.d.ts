/**
- find all `.txt or .md` files in a folder
- send a gpt query about the filename and if it should be changed
- rename all of the versions to the preferred rootname

NB: use `oneByOne` for this if you don't want to hit the limit
*/
export declare const getBetterFilename: (config: {
    /**
     * Path to text or md file
     */
    projectRelativePath: string;
    /**
     * NB: cannot be too long
     */
    text: string;
    isDryrun?: boolean | undefined;
}) => Promise<void>;
//# sourceMappingURL=getBetterFilename.d.ts.map