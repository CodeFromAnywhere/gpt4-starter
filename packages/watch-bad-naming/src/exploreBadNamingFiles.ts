import { fileSlugify } from "convert-case";
import { generatedFolders } from "filename-conventions";
import { explore } from "k-explore";
import { isBadName } from "./isBadName";

/**
 * explore folder recursively, returning an array of filepaths that haven't applied the naming convention.
 *
 * NB: sometimes the folder has bad names. In that case new folders/files need to be created, recursively.
 */
export const exploreBadNamingFiles = async (
  absoluteFolderPath: string
): Promise<string[]> => {
  const exploreResult = await explore({
    basePath: absoluteFolderPath,
    ignore: generatedFolders,
  });

  const filePaths = exploreResult.map((x) => x.path).filter(isBadName);

  console.log({
    filePaths: filePaths.map((p) => ({ old: p, new: fileSlugify(p) })),
  });

  return filePaths;
};
