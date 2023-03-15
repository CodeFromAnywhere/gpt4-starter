import { ProjectWatcher, StandardFunctionConfig } from "function-types";
import { fs, path } from "fs-util";
import { getProjectRoot, getSubExtensions } from "get-path";
import { speakerSeparation, speechToText } from "ai-models";
import { temporaryConvertedSubextension } from "filename-conventions";
import { isLocked } from "lock-util";
/**
Watch wav files anywhere. Every wav file that doesn't have a `.txt` file existing under the same name should be whispered. This way it's integrated on many more pipelines than just recording (also import, for example)

Besides using whisper, speaker separation can be applied as well
*/
export const watchWavToSpeech: ProjectWatcher = async (
  eventName,
  absolutePath,
  isStartup
) => {
  if (isLocked(absolutePath)) {
    console.log("mmm locked", absolutePath);
    return false;
  }
  if (!fs.existsSync(absolutePath)) {
    console.log("mmm doesn't exist", absolutePath);
    return { isSuccessful: false, message: "File doesn't exist (anymore)" };
  }
  const textResult = await speechToText(absolutePath);
};

watchWavToSpeech.config = {
  isInternetRequired: false,
  isHeavy: true,
  isBrowserRequired: false,
};

watchWavToSpeech.startupStrategy = "queue";
watchWavToSpeech.filter = (eventName, absolutePath) => {
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

  if (isLocked(absolutePath)) {
    // NB : also skips errored now :)
    return false;
  }

  const potentialTranscriptionFilePath = path.join(
    parsedPath.dir,
    `${parsedPath.name}.transcription.json`
  );
  if (fs.existsSync(potentialTranscriptionFilePath)) {
    // already converted into a .transcription.json
    return false;
  }
  // its a wav file, added into the project, without a .transcription.json tied to it
  return true;
};
