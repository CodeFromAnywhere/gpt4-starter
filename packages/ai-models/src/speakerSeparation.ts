import { huggingfaceSpeakerDiarization } from "huggingface-wrapper";
/**
 * Use huggingface inference with some speaker separation model
 *
 * Should return a file again I guess, or does it return textual info? Let's see
 */
export const speakerSeparation = async (absoluteAudioFilePath: string) => {
  const result = await huggingfaceSpeakerDiarization({ absoluteAudioFilePath });
  console.log({ speakerSeparation: result });
};
