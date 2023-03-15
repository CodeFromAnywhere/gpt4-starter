import { textToMp3 } from "say";
import { fs, path } from "fs-util";
/**
 * Uses "say" on macbook (for now) until I need this on a higher quality level
 *
 * promises an absolute path to a generated mp3
 */
export const textToSpeech = async (config: {
  /**
   * either provide text or an inputTextFilePath
   */
  text?: string;
  /**
   * either provide text or an inputTextFilePath
   */
  inputTextFilePath?: string;
  /**
   * If you don't provide this, it will be stored as [inputTextFilePathFolder]/[inputFileName].mp3
   *
   * needed if you don't provide an inputTextFilePath
   */
  outputFilePath?: string;
}): Promise<{
  isSuccessful: boolean;
  message: string;
  outputFilePath?: string;
}> => {
  const { inputTextFilePath, outputFilePath, text } = config;

  const realText =
    inputTextFilePath && fs.existsSync(inputTextFilePath)
      ? await fs.readFile(inputTextFilePath, "utf8")
      : text;

  if (!realText) {
    return { isSuccessful: false, message: "Couldn't get text" };
  }

  const parsedPath = inputTextFilePath
    ? path.parse(inputTextFilePath)
    : undefined;

  const realOutputFilePath = outputFilePath
    ? outputFilePath
    : parsedPath
    ? path.join(parsedPath.dir, `${parsedPath.name}.mp3`)
    : undefined;

  if (!realOutputFilePath) {
    return { isSuccessful: false, message: "Don't know where to output mp3" };
  }

  const finalFilePath = await textToMp3(
    { message: text, showProgress: true },
    realOutputFilePath
  );

  return {
    isSuccessful: !!finalFilePath,
    message: finalFilePath ? "Successful, got mp3" : "Something went wrong",
    outputFilePath: finalFilePath,
  };
};
