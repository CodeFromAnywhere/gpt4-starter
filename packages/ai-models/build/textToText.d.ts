import { StandardResponse } from "function-types";
import { OpenAiTextCompletionModelEnum } from "openai-wrapper";
export type TextToTextModelEnum = OpenAiTextCompletionModelEnum | "bananadev/bloom-560m" | "bananadev/flan-t5" | "chatgpt" | "huggingface/gpt2" | "local/gpt2" | "local/gpt-j-6b";
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
export declare const textToText: {
    (text: string, config?: {
        personId?: string;
        /**
         * Model defaults to gpt default.
         */
        model?: TextToTextModelEnum;
        /**
         * By default, the query to the api is delayed to avoid the ratelimit from happening. If you want to avoid the delay, set this to true
         */
        isInstant?: boolean;
    }): Promise<StandardResponse & {
        result?: string | undefined;
    }>;
    config: {
        isPaid: true;
        priceDescription: string;
    };
};
//# sourceMappingURL=textToText.d.ts.map