import { ChatCompletionRequestMessage } from "openai";
export declare const calculateOpenaiMessagesTokenCount: (messages: ChatCompletionRequestMessage[]) => (ChatCompletionRequestMessage & {
    tokenCount: number;
})[];
//# sourceMappingURL=calculateOpenaiMessagesTokenCount.d.ts.map