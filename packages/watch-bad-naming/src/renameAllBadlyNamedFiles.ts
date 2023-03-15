import { isAllTrue } from "js-util";
import { exploreBadNamingFiles } from "./exploreBadNamingFiles";
import { renameBadlyNamedFile } from "./renameBadlyNamedFile";

/**
 * Rename all badly named files in a folder
 */
export const renameAllBadlyNamedFiles = async (absoluteFolderPath: string) => {
  const filePaths = await exploreBadNamingFiles(absoluteFolderPath);

  const result = (
    await Promise.all(
      filePaths.map((filePath) => renameBadlyNamedFile(filePath))
    )
  ).map((x) => !!x);

  const isSuccessful = isAllTrue(result);

  return { isSuccessful };
};
