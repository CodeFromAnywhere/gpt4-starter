import { FolderContent } from "ai-types";
/**
 * For a folder, this function gets all folders in there, then one file per collection, in an efficient manner.
 *
 * Also provides information on whether it's a filecollection and which other files are there.
 */
export declare const getFolderContents: (absoluteFolderPath: string) => Promise<FolderContent[] | undefined>;
//# sourceMappingURL=getFolderContents.d.ts.map