import { calculateTokenCount } from "./calculateTokenCount";
import {
  getNewPerformance,
  PerformanceItem,
  cleanupTimer,
  generateUniqueId,
} from "measure-performance";
import { getOpenaiInstance } from "./getOpenaiInstance";
export const openAiTextCompletionModelsReadonly = [
  "text-davinci-003",
  "text-curie-001",
  "text-babbage-001",
  "text-ada-001",
  "code-davinci-002",
  "code-cushman-001",
] as const;

export const openAiTextCompletionModels: string[] = [
  ...openAiTextCompletionModelsReadonly,
];
/**
Which model?

# text models

- gpt-3.5-turbo: ChatGPT MODEL! 10x cheaper
- text-davinci-003: Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.
- text-curie-001: Very capable, but faster and lower cost than Davinci.
- text-babbage-001: Capable of straightforward tasks, very fast, and lower cost.
- text-ada-001: Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.

# Code models

- code-davinci-002: Most capable Codex model. Particularly good at translating natural language to code. In addition to completing code, also supports inserting completions within code.
- code-cushman-001: Almost as capable as Davinci Codex, but slightly faster. This speed advantage may make it preferable for real-time applications.

 */
export type OpenAiTextCompletionModelEnum =
  typeof openAiTextCompletionModelsReadonly[number];

/**
 * Simplified api for gpt3 from open AI
 *
 * Rate limit reached for default-text-davinci-003 in organization org-Z2Wq1CTmyzHDI6SApqk5gBLs on tokens per min. Limit: 250000.000000 / min. Current: 275070.000000 / min. Contact support@openai.com if you continue to have issues.
 *
 * TODO: log all api calls
 */
export const gpt3 = async (
  input: string,

  config?: {
    /**
     * Defaults to the first in the list of text-models
     */
    model?: OpenAiTextCompletionModelEnum;
    isInstant?: boolean;
  }
): Promise<{ isSuccessful: boolean; message?: string; result?: string }> => {
  const tokensAmount = calculateTokenCount(input);
  // NB: can differ per model!
  const modelMaxTokens = 2048;

  if (tokensAmount > modelMaxTokens) {
    const message = `GPT3: Too long: ${tokensAmount} tokens`;
    console.log(message);
    return { isSuccessful: false, message };
  }

  const { openai, isSuccessful, message } = await getOpenaiInstance();

  if (!openai) {
    return { isSuccessful, message };
  }

  const maxTokens = 4097 - tokensAmount;
  // it's hard to estimate the amount of tokens used in the response, but it'd be good to take into account that the response takes some tokens too
  const expectedTokens = Math.round(tokensAmount * 1.5);

  // By default, create a delay depending on the tokens expected
  if (!config?.isInstant) {
    // NB: maybe limit differs per model
    const tokenLimitPerMinute = 250000;
    const expectedRoundtripMs = 500;
    const factorOfMinuteTokens = expectedTokens / tokenLimitPerMinute;
    // wait the amount to never hit the limit, on average.
    const msToWait =
      Math.round(60000 * factorOfMinuteTokens) - expectedRoundtripMs;
    /*
    console.log({
      tokensAmount,
      expectedTokens,
      tokenLimitPerMinute,
      expectedRoundtripMs,
      factorOfMinuteTokens,
      msToWait,
      msExplanation: `Math.round(60000 * factorOfMinuteTokens) - expectedRoundtripMs`,
    });*/
    if (msToWait > 0) {
      await new Promise<void>((resolve) =>
        setTimeout(() => resolve(), msToWait)
      );
    }
  }
  const executionId = generateUniqueId();
  const performance: (PerformanceItem | undefined)[] = [];
  getNewPerformance("start", executionId, true);

  const response = await openai
    .createCompletion({
      model: config?.model || openAiTextCompletionModels[0],
      prompt: input,
      max_tokens: maxTokens,
    })
    .catch((e) => {
      // TODO: APPLY EXPONENTIAL BACKOFF HERE

      console.log({
        status: e.response?.status,
        statusText: e.response?.statusText,
        data: e.response?.data,
      });
    });

  performance.push(getNewPerformance("openai-api", executionId));
  cleanupTimer(executionId);
  console.log({ performance });

  //console.log({ usage: response?.data?.usage });
  const result = response?.data?.choices?.[0]?.text;
  return { result, isSuccessful: true };
};
