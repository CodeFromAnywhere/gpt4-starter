import { Transcription } from "ai-types";
import { readJsonFile } from "read-json-file";
import { calculateTokenCount } from "openai-wrapper";

export const TOKEN_COUNT_MARGIN = 1.1;
/**
 * Chunkify an audio transcription text
 *
 * Looks at the "." in the text and adds sentences together till a maximum token size per chunk.
 */
export const transcriptionToGptChunks = async (
  transcriptionAbsoluteFilePath: string,
  maxGptNodeTokenSize: number
) => {
  const transcription = await readJsonFile<Transcription>(
    transcriptionAbsoluteFilePath
  );
  if (!transcription) {
    return;
  }

  const chunks = transcription.translationText.split(".").reduce(
    (chunks, currentSentence) => {
      const lastChunk = chunks[chunks.length - 1];

      const tokenCount =
        calculateTokenCount(`${lastChunk}${currentSentence}.`) *
        TOKEN_COUNT_MARGIN;

      if (tokenCount > maxGptNodeTokenSize) {
        // doesn't fit on previous chunk, make a new one
        chunks.push(currentSentence);
        return chunks;
      }
      // does fit, add to last one
      chunks[chunks.length - 1] = `${lastChunk}${currentSentence}.`;
      return chunks;
    },
    [""]
  );

  return chunks;
};
