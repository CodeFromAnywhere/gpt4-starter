import { StandardResponse } from "function-types";
/**
Zips an array of project relative file or folder paths into a zip, by making a folder, putting it there, and removing the folder after the zip is created
 */
export declare const zipFiles: (projectRelativePaths: string[]) => Promise<StandardResponse & {
    projectRelativeZipPath?: string | undefined;
}>;
//# sourceMappingURL=zipFiles.d.ts.map