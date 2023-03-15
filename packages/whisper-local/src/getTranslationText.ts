import { fs } from "fs-util";
import { whisperLocalCpp } from "./whisperLocalCpp";

export const getTranslationText = async (
  audioFilePath: string
): Promise<string | undefined> => {
  // TODO: Optimise this with `detectLanguage` in case it's already in English
  const translationWhisperResult = await whisperLocalCpp({
    audioFilePath,
    translateToEnglish: true,
  });
  if (!translationWhisperResult) {
    console.log({
      isSuccessful: false,
      message: "TranslationResult couldn't be found",
    });
    return;
  }
  const [translationPaths] = translationWhisperResult;

  const translationText = fs.existsSync(translationPaths.txt)
    ? await fs.readFile(translationPaths.txt, "utf8")
    : undefined;

  return translationText;
};
