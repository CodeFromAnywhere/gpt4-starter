import { fs, path, writeJsonToFile } from "fs-util";
import { detectLanguage } from "detect-language";
import { whisperLocalCpp } from "./whisperLocalCpp";
import { readTranscriptionCsv } from "./readTranscriptionCsv";
import { Transcription } from "ai-types";
import { getTranslationText } from "./getTranslationText";

/**

Whisper needs to be ran 2-3 times in order to have a good transcription

- once for regular timestamps
- once for word-level timestamps
- if the source isn't english, once extra for the english translation task

With whisper, I need everything in `[filename].transcription.json`

- default segment length stored in `.subtitles[]`
- the word-level segments `.words[]`.
- raw text in `.text: string`

 */
export const createTranscriptionJson = async (
  audioFilePath: string
): Promise<{ isSuccessful: boolean; message: string }> => {
  // 1) run whisper for word-level timestamp
  const wordWhisperResult = await whisperLocalCpp({
    audioFilePath,
    isWordSegments: true,
  });
  if (!wordWhisperResult) {
    return {
      isSuccessful: false,
      message: "No initial whisper result",
    };
  }
  const [wordPaths] = wordWhisperResult;

  const words = await readTranscriptionCsv(wordPaths.csv);
  if (!words) {
    return { isSuccessful: false, message: "Words couldn't be found" };
  }

  // 2) run whisper for regular timestamps
  const regularWhisperResult = await whisperLocalCpp({ audioFilePath });

  if (!regularWhisperResult) {
    return {
      isSuccessful: false,
      message: "No initial whisper result",
    };
  }
  const [regularPaths] = regularWhisperResult;
  const sentences = await readTranscriptionCsv(regularPaths.csv);

  if (!sentences) {
    return { isSuccessful: false, message: "Sentences couldn't be found" };
  }

  const text = fs.existsSync(regularPaths.txt)
    ? await fs.readFile(regularPaths.txt, "utf8")
    : undefined;
  if (!text) {
    return { isSuccessful: false, message: "Text couldn't be found" };
  }

  const language = detectLanguage(text);

  const translationText =
    language !== "english" ? await getTranslationText(audioFilePath) : text;

  if (!translationText) {
    return {
      isSuccessful: false,
      message: "Translation went wrong",
    };
  }

  const transcription: Transcription = {
    sentences,
    text,
    translationText,
    words,
    usedModelName: "small",
  };

  const parsedPath = path.parse(audioFilePath);

  const transcriptionPath = path.join(
    parsedPath.dir,
    `${parsedPath.name}.transcription.json`
  );

  const isSuccessful = await writeJsonToFile(transcriptionPath, transcription);

  if (!isSuccessful) {
    return {
      isSuccessful: false,
      message: "Failed",
    };
  }

  await fs.rm(regularPaths.csv);
  await fs.rm(regularPaths.txt);

  return {
    isSuccessful: true,
    message: "Done",
  };
};
