import { compressConvert } from "ffmpeg-util";
import { fs, path } from "fs-util";
import { getProjectRoot, getSubExtensions } from "get-path";
import { ProjectWatcher } from "function-types";
import { temporaryConvertedSubextension } from "filename-conventions";
import { isLocked, lockError } from "lock-util";
/**
 * Find all mp3 everywhere without wav, add 16-bit wav
 */
export const watchMp3WithoutWav: ProjectWatcher = async (
  eventName,
  absolutePath,
  isStartup
): Promise<string | undefined> => {
  if (!fs.existsSync(absolutePath)) {
    console.log("doesn't exist", absolutePath);
    return;
  }
  if (isLocked(absolutePath)) {
    console.log("is locked", absolutePath);
    return;
  }
  const result = await compressConvert(absolutePath, {
    targetFormat: "wav",
    is16bitWav: true,
    keepOriginal: true,
  });

  return result;
};

watchMp3WithoutWav.config = {
  isHeavy: true,
  isInternetRequired: false,
  isBrowserRequired: false,
};

watchMp3WithoutWav.startupStrategy = "queue";

watchMp3WithoutWav.filter = (eventName, absolutePath) => {
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

  if (extension !== ".mp3") {
    return false;
  }

  if (getSubExtensions(absolutePath).includes(temporaryConvertedSubextension)) {
    // temporary
    return false;
  }

  if (isLocked(absolutePath)) {
    return false;
  }
  // ext is .mp3

  const potentialWavFile = path.join(parsedPath.dir, `${parsedPath.name}.wav`);
  const shouldConvert = !fs.existsSync(potentialWavFile);

  return shouldConvert;
};
