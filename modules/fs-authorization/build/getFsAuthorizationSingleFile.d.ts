import { AuthorizationProperties } from "markdown-types";
/**
General purpose function to see what the rights are for any user for any file in the file system (project relative only)

NB: checks just the one file! Doesn't take into account underlying folders!


*/
export declare const getFsAuthorizationSingleFile: (config: {
    projectRelativeFilePath: string;
    /**
     * groupSlugs of the user. Should include "public"
     */
    user_groupSlugs: string[];
    isDebug?: boolean | undefined;
}) => Promise<{
    canRead: boolean;
    canWrite: boolean;
    authorizationProperties?: AuthorizationProperties | undefined;
} | undefined>;
//# sourceMappingURL=getFsAuthorizationSingleFile.d.ts.map