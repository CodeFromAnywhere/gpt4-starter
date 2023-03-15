import { fileSlugify } from "convert-case";
/**
 * the path should not contain any spaces or other weird characters
 */
export const isBadName = (absolutePath: string) => {
  // const filename = path.parse(absolutePath).base;

  const left = absolutePath.toLowerCase();
  const right = fileSlugify(absolutePath).toLowerCase();

  return left !== right;
};
