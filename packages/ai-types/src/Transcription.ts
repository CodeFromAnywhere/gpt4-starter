import { UpdatedTimeObject } from "model-types";
import { RecordingType } from "./RecordingType";
import { TranscribedText } from "./TranscribedText";
import { WhisperModelName } from "./variables";

export const speechToTextModelNames = ["whisper/small"];
/**
 * What a `[filename].transcription.json` file might look like
 */
export type Transcription = UpdatedTimeObject & {
  recordingType?: RecordingType;
  /**
   * Later, we can expand this further if there are other, better solutions. We also are going to be using other tools for transcription, like speaker separation and background removal, so we could use something like `usedSpeakerSeparationModelName?:string` and `usedBackgroundRemovalModelName?:string`
   */
  usedModelName?: WhisperModelName;
  words: TranscribedText[];
  /**
   * TODO: add some sort of splitter boolean in the sentences to indicate that a new topic starts so it becomes easier to split up the Transcription when doing transformations on it
   */
  sentences: TranscribedText[];
  /**
   * Text result from translation task (into english)
   *
   * (only if detected language of the first result wasn't english)
   */
  translationText: string;
  /**
   * Text result from the regular transcription task without translation
   */
  text: string;

  /**
   * Interesting standalone snippet finding in bigger video/audio
   *
   * TODO: ensure these are found after we have the transcription.
   */
  snippets?: { firstLine: string; lastLine: string }[];
  /**
   * super useful to have
   */
  speakerAmount?: number;
};
