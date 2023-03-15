import { compressConvert } from "ffmpeg-util";
import { temporaryConvertedSubextension } from "filename-conventions";
import { fs, path } from "fs-util";
import { getProjectRoot, getSubExtensions } from "get-path";
import { isLocked } from "lock-util";
import { ProjectWatcher } from "function-types";
/**
 * Find all wav everywhere without mp3, add mp3
 */
export const watchWavWithoutMp3: ProjectWatcher = async (
  eventName,
  absolutePath,
  isStartup
): Promise<string | undefined> => {
  if (isLocked(absolutePath)) {
    return;
  }
  if (!fs.existsSync(absolutePath)) {
    return;
  }
  const result = await compressConvert(absolutePath, {
    targetFormat: "mp3",
    keepOriginal: true,
  });

  return result;
};

watchWavWithoutMp3.config = {
  isHeavy: true,
  isInternetRequired: false,
  isBrowserRequired: false,
};

watchWavWithoutMp3.startupStrategy = "queue";

watchWavWithoutMp3.filter = (eventName, absolutePath) => {
  if (eventName !== "add") {
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
  const extension = parsedPath.ext;
  const subextensions = getSubExtensions(absolutePath);

  if (extension !== ".wav") {
    return false;
  }

  if (getSubExtensions(absolutePath).includes(temporaryConvertedSubextension)) {
    // temporary
    return false;
  }

  if (isLocked(absolutePath)) {
    return false;
  }
  // ext is .wav
  const potentialMp3File = path.join(parsedPath.dir, `${parsedPath.name}.mp3`);
  const shouldConvert = !fs.existsSync(potentialMp3File);

  return shouldConvert;
};
