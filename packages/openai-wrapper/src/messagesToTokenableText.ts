import { ChatCompletionRequestMessage } from "openai";

export const messagesToTokenableText = (
  messages: ChatCompletionRequestMessage[]
): string => {
  return messages
    .map(
      (item) =>
        `${item.role} ${item.name ? `${item.name} ` : ""}${item.content}`
    )
    .join(" ");
};
