import { getRootPath } from "get-path";
import { renameAllBadlyNamedFiles } from "./renameAllBadlyNamedFiles";
const p = getRootPath("assets");
if (p) {
  renameAllBadlyNamedFiles(p).then(console.log);
}
