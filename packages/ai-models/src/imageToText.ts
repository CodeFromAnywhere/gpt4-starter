import { bananaCarrot } from "bananadev-wrapper";

/**
 * Image caption generation using banana.dev API with the carrot model
 *
 * Takes in a path to an image.
 * Returns a caption for that image.
 */
export const imageToText = async (
  absoluteImagePath: string,
  config?: {
    text?: string;
    similarity?: boolean;
    maxLength?: number;
    minLength?: number;
  }
): Promise<{ isSuccessful: boolean; message: string; result?: object }> => {
  /**
  use getassetdirectly
   */
  const imageUrl = ""; // TODO: should be available through our own server, preferably, based on absoluteImagePath.

  const result = await bananaCarrot({ imageUrl, ...(config || {}) });

  return result;
};
