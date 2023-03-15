/**
General purpose function to see what the rights are for any user for any folder in the file system (project relative only)

How it works:going from top of the fs (base folder path), to deepest folder, to file, checking authorization for every folder up until the file.


*/
export declare const getFsAuthorization: (config: {
    /**
     * Can be a file or folder
     */
    projectRelativePath: string;
    projectRelativeBaseFolderPath: string;
    /**
     * Groups the user belongs to
     */
    groupSlugs: string[];
    /**
     * Authorization for the user for the base path
     */
    baseAuthorization: {
        canRead: boolean;
        canWrite: boolean;
    };
}) => Promise<{
    canRead: boolean;
    canWrite: boolean;
} | undefined>;
//# sourceMappingURL=getFsAuthorization.d.ts.map