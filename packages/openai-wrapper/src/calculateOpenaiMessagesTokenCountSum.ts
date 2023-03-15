import { sum } from "js-util";
import { ChatCompletionRequestMessage } from "openai";
import { calculateOpenaiMessagesTokenCount } from "./calculateOpenaiMessagesTokenCount";

export const calculateOpenaiMessagesTokenCountSum = (
  messages: ChatCompletionRequestMessage[],
  isDavinci?: boolean
) => {
  const results = calculateOpenaiMessagesTokenCount(messages);

  const tokenCountSum = sum(results.map((x) => x.tokenCount));
  return tokenCountSum;
};
