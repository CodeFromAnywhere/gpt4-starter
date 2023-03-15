import { get_encoding } from "@dqbd/tiktoken";
import { ChatCompletionRequestMessage } from "openai";

export const calculateOpenaiMessagesTokenCount = (
  messages: ChatCompletionRequestMessage[]
): (ChatCompletionRequestMessage & { tokenCount: number })[] => {
  const encoding = get_encoding("cl100k_base");

  const extendedMessages = messages.map((item) => ({
    ...item,
    tokenCount: encoding.encode(`roleword ${item.name || ""} ${item.content}`)
      .length,
  }));
  return extendedMessages;
};
