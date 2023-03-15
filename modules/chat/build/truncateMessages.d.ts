import { ChatMessage } from "social-media-types";
/**
 Simple algo to truncate chat messages.
 
 - omit everything from more than 24h ago except for the last 10 messages
 - also everything that makes our input larger than 3000 tokens.
 
 Can later be improved by analysing the messages, but this seems good enough for now to stay under the 3000 tokens...


 */
export declare const truncateMessages: (chatMessages: ChatMessage[]) => {
    truncatedMessageHistory: ChatMessage[];
    inputTokensCalculated: number;
};
//# sourceMappingURL=truncateMessages.d.ts.map