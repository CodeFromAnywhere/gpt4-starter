import { StandardFunctionConfig, StandardResponse } from "function-types";
import {
  calculateTokenCount,
  gpt3,
  OpenAiTextCompletionModelEnum,
  openAiTextCompletionModels,
} from "openai-wrapper";

export type TextToTextModelEnum =
  | OpenAiTextCompletionModelEnum
  | "bananadev/bloom-560m"
  | "bananadev/flan-t5"
  | "chatgpt"
  | "huggingface/gpt2"
  | "local/gpt2"
  | "local/gpt-j-6b";

/**
TODO: improve gpt3 api with good token calculation, aggresive exponential backoff, and preventing ratelimit at all times, to maximise stability. can I have gpt3 as fallback to browser automated ChatGPT?


For now it's `string -> string`

There are simply too many options to make this file -> file, it wouldn't be useful.

NB: use oneByOne for this if you don't want to hit the limit

`textToText` needs to have a warning for context size (or dynamically choose a LLM with a bigger context size, or warn and split it up based on sentence endings, paragraphs, and newlines. It always needs to work!)

Fix errors:

- ratelimit reached
- too many tokens used (more than 4k)

 */
export const textToText = async (
  text: string,
  config?: {
    personId?: string;
    /**
     * Model defaults to gpt default.
     */
    model?: TextToTextModelEnum;
    /**
     * By default, the query to the api is delayed to avoid the ratelimit from happening. If you want to avoid the delay, set this to true
     */
    isInstant?: boolean;
  }
): Promise<
  StandardResponse & {
    result?: string | undefined;
  }
> => {
  if (!config?.model || openAiTextCompletionModels.includes(config?.model)) {
    const gpt3result = await gpt3(text, {
      model: config?.model as OpenAiTextCompletionModelEnum | undefined,
    });

    const pagesCount = Math.ceil(calculateTokenCount(text) / 500);
    const priceCredit = pagesCount * 0.1;
    return {
      ...gpt3result,
      payment: {
        personId: config?.personId,
        priceCredit,
        priceDescription: `Estimated ${pagesCount} pages`,
      },
    };
  }
  const message = `${config?.model} not implemented yet`;
  console.log(message);
  return { isSuccessful: false, message };
};

textToText.config = {
  isPaid: true,
  priceDescription: "0.10 credit per page",
} satisfies StandardFunctionConfig;
