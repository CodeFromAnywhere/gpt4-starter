import { StandardResponse } from "function-types";
import { ChatCompletionRequestMessage } from "openai";
import { calculateOpenaiMessagesTokenCountSum } from "./calculateOpenaiMessagesTokenCountSum";
import { getOpenaiInstance } from "./getOpenaiInstance";
import { ChatCompletionConfig, openAiChatModels } from "./types";

/**
More direct way to interact with openai api chat completion

docs: https://platform.openai.com/docs/guides/chat/introduction
 */
export const chatCompletion = async (
  messages: ChatCompletionRequestMessage[],
  config?: ChatCompletionConfig
): Promise<
  StandardResponse & { tokensUsed?: number; chatResponse?: string }
> => {
  const { openai, isSuccessful, message } = await getOpenaiInstance();

  if (!openai) {
    return { isSuccessful, message };
  }

  // By default, create a delay depending on the tokens expected
  if (!config?.isInstant) {
    const inputTokensCalculated =
      config?.inputTokensCalculated ||
      calculateOpenaiMessagesTokenCountSum(messages);

    // NB: maybe limit differs per model
    const tokenLimitPerMinute = 250000;
    const expectedRoundtripMs = 500;
    const factorOfMinuteTokens = inputTokensCalculated / tokenLimitPerMinute;
    // wait the amount to never hit the limit, on average.
    const msToWait =
      Math.round(60000 * factorOfMinuteTokens) - expectedRoundtripMs;

    if (msToWait > 0) {
      await new Promise<void>((resolve) =>
        setTimeout(() => resolve(), msToWait)
      );
    }
  }

  const model = config?.model || openAiChatModels[0];

  // NB: I assume this is pretty efficient, but we could a/b test and if it's heavy, do our own http/fetch request.
  const response = await openai
    .createChatCompletion({
      model,
      messages,
      ...config?.openaiConfig,
    })
    .catch((e) => {
      // TODO: APPLY EXPONENTIAL BACKOFF HERE
      console.log({
        status: e.response?.status,
        statusText: e.response?.statusText,
        data: e.response?.data,
      });
    });

  const tokensUsed = response?.data?.usage?.total_tokens;

  //console.log({ usage: response?.data?.usage });
  const chatResponse = response?.data?.choices?.[0]?.message?.content;

  return {
    isSuccessful: true,
    message: "Successful",
    tokensUsed,
    chatResponse,
  };
};
