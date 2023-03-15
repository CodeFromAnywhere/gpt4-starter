import { shouldAddToQueue } from "ai-functions-node";
import { StandardFunctionConfig, StandardResponse } from "function-types";
import { fs } from "fs-util";
import { lock, lockError } from "lock-util";
import { createTranscriptionJson } from "whisper-local";
import { getGroupOrPersonId } from "./util/getGroupOrPersonId";

/**
 * Uses local whisper, for now. Audiofile must be 16-bit wav
 *
 * NB: I have the queueing on this layer, but if we later have faster ones that don't need a queue because they don't cost much processing power, we can add it on the individual stt level
 */
export const speechToText = async (
  absoluteAudioFilePath: string
): Promise<StandardResponse> => {
  if (
    (await shouldAddToQueue("speechToText", [absoluteAudioFilePath])) === true
  ) {
    console.log("mmm added to queue", absoluteAudioFilePath);

    // it's been added to queue, to be done later.
    return { isSuccessful: false, message: "Added to queue" };
  }

  const mbs = fs.existsSync(absoluteAudioFilePath)
    ? (await fs.stat(absoluteAudioFilePath)).size / (1024 * 1024)
    : undefined;
  const hours = (mbs || 0) / 60;
  const priceCredit = hours;

  const { groupId, personId } = await getGroupOrPersonId(absoluteAudioFilePath);

  const result = await createTranscriptionJson(absoluteAudioFilePath);
  if (!result.isSuccessful) {
    lockError(
      absoluteAudioFilePath,
      result.message,
      undefined,
      "speechToText",
      [absoluteAudioFilePath]
    );
  }
  return {
    ...result,
    payment: {
      priceCredit,
      groupId,
      personId,
      priceDescription: `Your audio was around ${mbs} minutes`,
    },
  };
};

speechToText.config = {
  isPaid: true,
  priceDescription: "1 credit per hour",
} satisfies StandardFunctionConfig;
