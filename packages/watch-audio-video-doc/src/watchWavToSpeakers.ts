import { ProjectWatcher, StandardFunctionConfig } from "function-types";
import { fs, path } from "fs-util";
import { getProjectRoot, getSubExtensions } from "get-path";
import { speakerSeparation, speechToText } from "ai-models";
import { temporaryConvertedSubextension } from "filename-conventions";
import { isLocked } from "lock-util";

/**
Watch wav files anywhere and add speaker separation output if that isn't there yet
*/
export const watchWavToSpeakers: ProjectWatcher = async (
  eventName,
  absolutePath,
  isStartup
) => {
  if (isLocked(absolutePath)) {
    return false;
  }
  if (!fs.existsSync(absolutePath)) {
    return { isSuccessful: false, message: "File doesn't exist (anymore)" };
  }
  const speakerSeparationResult = await speakerSeparation(absolutePath);
  console.log({ speakerSeparationResult });
};

watchWavToSpeakers.config = {
  isInternetRequired: true,
  isHeavy: false,
  isBrowserRequired: false,
};

watchWavToSpeakers.startupStrategy = "queue";
watchWavToSpeakers.filter = (eventName, absolutePath) => {
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
  if (parsedPath.ext !== ".wav") {
    return false;
  }

  if (getSubExtensions(absolutePath).includes(temporaryConvertedSubextension)) {
    // temporary
    return false;
  }

  const potentialFilePath = `${absolutePath}.speakers.json`;
  if (fs.existsSync(potentialFilePath)) {
    // already converted
    return false;
  }

  if (isLocked(absolutePath)) {
    return false;
  }
  // its a wav file, added into the project, without a .speakers.json tied to it
  return true;
};

watchWavToSpeakers.config = {
  isHeavy: false,
  isInternetRequired: true,
  isBrowserRequired: false,
  isDisabled: true,
} satisfies StandardFunctionConfig;
