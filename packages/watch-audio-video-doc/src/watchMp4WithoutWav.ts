import { compressConvert } from "ffmpeg-util";
import { temporaryConvertedSubextension } from "filename-conventions";
import { fs, path } from "fs-util";
import { getProjectRoot, getSubExtensions } from "get-path";
import { isLocked } from "lock-util";
import { ProjectWatcher } from "function-types";

/**
 * Find all mp4 everywhere without wav, add 16-bit wav
 */
export const watchMp4WithoutWav: ProjectWatcher = async (
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
    targetFormat: "wav",
    is16bitWav: true,
    keepOriginal: true,
  });

  return result;
};

watchMp4WithoutWav.config = {
  isHeavy: true,
  isInternetRequired: false,
  isBrowserRequired: false,
};

watchMp4WithoutWav.startupStrategy = "queue";

watchMp4WithoutWav.filter = (eventName, absolutePath) => {
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

  if (extension !== ".mp4") {
    return false;
  }

  if (getSubExtensions(absolutePath).includes(temporaryConvertedSubextension)) {
    // temporary
    return false;
  }

  if (isLocked(absolutePath)) {
    return false;
  }
  // ext is .mp4

  const potentialWavFile = path.join(parsedPath.dir, `${parsedPath.name}.wav`);
  const shouldConvert = !fs.existsSync(potentialWavFile);

  return shouldConvert;
};
