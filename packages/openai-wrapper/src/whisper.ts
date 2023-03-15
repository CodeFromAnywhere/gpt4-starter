import { fs } from "fs-util";
import { StandardResponse } from "function-types";
import { getOpenaiInstance } from "./getOpenaiInstance";

/**
Use whisper api...
 */
export const whisper = async (
  personaId?: string
): Promise<StandardResponse> => {
  //  should use the whisper api
  const { openai, ...standardResponse } = await getOpenaiInstance(personaId);

  if (!openai) {
    return standardResponse;
  }

  const file = await fs.readFile("");
  // 1 upload a file
  const rers = await openai.createFile(file, "");

  openai.createTranscription(
    file,
    "whisper-1",
    "omit music",
    "verbose_json",
    0,
    "jap"
  );

  openai.createTranslation(file, "whisper-1", undefined, "json", 1);

  openai.createImage({
    prompt: "some guy in an airplane",
    n: 1,
    response_format: "url",
    size: "1024x1024",
    user: "ididid",
  });

  // use openai.createImage for dall3
  return { isSuccessful: true, message: "Not implemented yet" };
};
