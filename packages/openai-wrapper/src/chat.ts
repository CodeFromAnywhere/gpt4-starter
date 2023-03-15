import { kebabCase, slugify } from "convert-case";
import { Creation } from "model-types";
import { ChatCompletionRequestMessage } from "openai";
import { Person } from "peer-types";
import { ChatMessage } from "social-media-types";
import { chatCompletion } from "./chatCompletion";
import { ChatCompletionConfig } from "./types";

export type ChatReturnType = {
  isSuccessful: boolean;
  message?: string;

  chatResponse?: string;
  /**
   * Total tokens used (and paid for).
   *
   * NB: current cost is 2$ per 1000000 tokens.
   */
  isPaywallHit?: boolean;
  tokensUsed?: number;
};
/**
 * wraps `chatCompletion` for it to work with our own `ChatMessage` model.
 */
export const chat = async (
  person: Person,
  allMessages: Creation<ChatMessage>[],
  config?: {
    /**
     * Supply `null` to omit the system-message.
     *
     * Defaults to the ChatGPT default systemMessage.
     */
    systemMessage?: string | null;
    postSystemMessage?: string;
  } & ChatCompletionConfig
): Promise<ChatReturnType> => {
  if (
    config?.inputTokensCalculated &&
    config?.inputTokensCalculated > 4096 - 256
  ) {
    return {
      isSuccessful: false,
      message: "Too many tokens in input. Truncation went wrong maybe!",
    };
  }

  if (allMessages.length === 0) {
    return { isSuccessful: false, message: "Empty chat" };
  }

  // get all messages from entire chat history
  const messages: ChatCompletionRequestMessage[] = allMessages.map((x) => ({
    role: x.direction === "sent" ? "assistant" : "user",
    name:
      x.direction === "received" ? slugify(kebabCase(person.name)) : undefined,
    content: x.message,
  }));

  if (config?.systemMessage) {
    messages.unshift({
      role: "system",
      content: config?.systemMessage,
    });
  }

  if (config?.postSystemMessage) {
    messages.push({ role: "system", content: config.postSystemMessage });
  }

  console.log({ config });

  // console.log({ messages });
  const chatCompletionResult = await chatCompletion(messages, config);

  return chatCompletionResult;
};
