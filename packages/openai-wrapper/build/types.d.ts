import { CreateChatCompletionRequest } from "openai";
export declare const openAiChatModelsReadonly: readonly ["gpt-3.5-turbo", "gpt-3.5-turbo-0301"];
export declare const openAiChatModels: string[];
/**
  Which model?
  
  - gpt-3.5-turbo: ChatGPT MODEL! 10x cheaper
  
  Ensure it works the same and requires us to provide the chat-history (or not?). If not, history is only needed to determine whether or not we're going to answer in the first place. And also for extra chains of course, in some cases.
   */
export type OpenAiChatCompletionModelEnum = typeof openAiChatModels[number];
export type ChatCompletionConfig = {
    /**Provide amount of input tokens, if already calculated. Only used if not `isInstant` */
    inputTokensCalculated?: number;
    /**
     * If true, we won't wait (exponential backoff)
     */
    isInstant?: boolean;
    /**
     * Defaults to the first one
     */
    model?: OpenAiChatCompletionModelEnum;
    /**
     * Extra config to pass to the completions endpoint. Not all things supported (like streaming)
     */
    openaiConfig?: Omit<CreateChatCompletionRequest, "model" | "messages">;
};
//# sourceMappingURL=types.d.ts.map