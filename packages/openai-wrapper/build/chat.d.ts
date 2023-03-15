import { Creation } from "model-types";
import { Person } from "peer-types";
import { ChatMessage } from "social-media-types";
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
export declare const chat: (person: Person, allMessages: Creation<ChatMessage>[], config?: {
    /**
     * Supply `null` to omit the system-message.
     *
     * Defaults to the ChatGPT default systemMessage.
     */
    systemMessage?: string | null;
    postSystemMessage?: string;
} & ChatCompletionConfig) => Promise<ChatReturnType>;
//# sourceMappingURL=chat.d.ts.map