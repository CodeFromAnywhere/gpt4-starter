import { ProjectWatcher, StandardFunctionConfig } from "function-types";
import { fs, path } from "fs-util";
import { kebabCase, slugify } from "convert-case";
import { getProjectRoot } from "get-path";
import { renameBadlyNamedFile } from "./renameBadlyNamedFile";

/**

Watcher for filenames/folders with capitalisation and spaces, to be renamed to the slugified version. ensure there is no overlap by other watchers.

TODO: the other watchers should ignore files if they have capitals or spaces. Maybe this can be fundamental part of the watcher with a prop like "isPrimary" which means it should be executed first, and a prop like "shouldOmitFromOtherWatchers" which means it will not be included in other watchers if it matches here.
*/
export const watchBadNaming: ProjectWatcher = (eventName, absolutePath) => {
  if (!fs.existsSync(absolutePath)) {
    return { isSuccessful: false, message: "File doesn't exist (anymore)" };
  }
  console.log(`Bad naming (${absolutePath}) not implemented yet`);
  //return renameBadlyNamedFile(absolutePath);
};

watchBadNaming.startupStrategy = "queue";

watchBadNaming.filter = (eventName, absolutePath) => {
  // only new files can potentially contain bad naming since their name was changed and we already should've done an initial check
  if (!["add", "addDir"].includes(eventName)) {
    return false;
  }

  const projectRoot = getProjectRoot();
  if (!projectRoot) {
    return false;
  }
  if (!absolutePath.startsWith(projectRoot)) {
    return false;
  }

  const parsedPath = path.parse(absolutePath);

  const folder = parsedPath.dir;
  const rightFolder = slugify(kebabCase(folder));

  if (folder !== rightFolder) {
    // there's something wrong with the folder, so that one needs to be done first (should be picked up by other listener)
    return false;
  }

  const name = parsedPath.name;
  const rightName = slugify(kebabCase(name));

  // name is already correct (assuming below folders are indiviually detected by the scrape/watcher)
  if (name === rightName) {
    return false;
  }

  // something can be improved on the filename
  return true;
};

watchBadNaming.config = {
  isHeavy: false,
  isInternetRequired: false,
  isBrowserRequired: false,
  // NB: Disabled for now until we are sure the `exploreRename` works. Then just use that
  isDisabled: true,
} satisfies StandardFunctionConfig;
