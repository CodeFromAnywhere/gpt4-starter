import { get_encoding } from "@dqbd/tiktoken";
import { ChatMessage } from "social-media-types";

/**
NB: in this case, we could theoretically still use this with davinci.
NB: we are making the encoding in this function isntead of using `calculateTokenCount` because it might be more efficient like this
 */

export const calculateMessagesTokenCount = (
  messages: ChatMessage[],
  isDavinci?: boolean
): (ChatMessage & { tokenCount: number })[] => {
  const encoding = get_encoding(isDavinci ? "p50k_base" : "cl100k_base");

  const extendedMessages = messages.map((item) => ({
    ...item,
    tokenCount: encoding.encode(
      `roleword ${item.groupSlug || ""} ${item.message}`
    ).length,
  }));
  return extendedMessages;
};
