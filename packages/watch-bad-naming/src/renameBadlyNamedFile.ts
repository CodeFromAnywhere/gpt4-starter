import { fileSlugify, kebabCase, slugify } from "convert-case";
import { fs, path } from "fs-util";

export const renameBadlyNamedFile = async (
  absoluteFilePath: string
): Promise<string | undefined> => {
  if (!fs.existsSync(absoluteFilePath)) {
    return;
  }
  const newPath = fileSlugify(absoluteFilePath);
  if (absoluteFilePath === newPath) {
    // already good
    console.log(`already good ${absoluteFilePath}`);
    return absoluteFilePath;
  }
  const newFolderPath = path.parse(newPath).dir;
  if (!fs.existsSync(newFolderPath)) {
    await fs.mkdir(newFolderPath, { recursive: true });
  }
  await fs.rename(absoluteFilePath, newPath);
  console.log(`renamed ${newPath}`);
  return newPath;
};
