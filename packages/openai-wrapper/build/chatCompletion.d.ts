import { StandardResponse } from "function-types";
import { ChatCompletionRequestMessage } from "openai";
import { ChatCompletionConfig } from "./types";
/**
More direct way to interact with openai api chat completion

docs: https://platform.openai.com/docs/guides/chat/introduction
 */
export declare const chatCompletion: (messages: ChatCompletionRequestMessage[], config?: ChatCompletionConfig) => Promise<StandardResponse & {
    tokensUsed?: number | undefined;
    chatResponse?: string | undefined;
}>;
//# sourceMappingURL=chatCompletion.d.ts.map