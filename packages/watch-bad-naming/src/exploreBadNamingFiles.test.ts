//apply on everything in assets and text
import { getRootPath } from "get-path";
import { exploreBadNamingFiles } from "./exploreBadNamingFiles";

const main = async () => {
  const assetsPath = getRootPath("assets");
  const textPath = getRootPath("text");
  if (!assetsPath || !textPath) return;
  const assetsBadNamingPaths = await exploreBadNamingFiles(assetsPath);
  const textBadNamingPaths = await exploreBadNamingFiles(textPath);
};

main();
