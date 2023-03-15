import { bananaStableDiffusion } from "bananadev-wrapper";

/**
 * should use banana.dev Stable Diffusion
 * promises an absolute path of the resulting image
 */
export const textToImage = async (config: {
  /**
   * either provide text or an inputTextFilePath
   */
  text?: string;
  /**
   * either provide text or an inputTextFilePath
   */
  inputTextFilePath?: string;
  /**
   * if you don't provide this, it will be stored as [inputTextFilePathFolder]/[inputFileName].png
   *
   * needed if you don't provide an inputTextFilePath
   */
  outputFilePath?: string;
}) => {
  const { text } = config;

  const response = await bananaStableDiffusion({ text });
  return response;
};
