import { Creation } from "model-types";
import { FinalAssistantPersona, Person } from "peer-types";
import { ChatMessage } from "social-media-types";
/**
Assistant-specific chat result
 */
export declare const getChatResult: (config: {
    person: Person;
    persona: FinalAssistantPersona;
    /**
     * In fact this is ChatMessage, but need to concat the new one...
     */
    truncatedMessageHistory: Creation<ChatMessage>[];
    fullMessageHistory: Creation<ChatMessage>[];
    inputTokensCalculated: number;
    chatMessage: Creation<ChatMessage>;
}) => Promise<import("openai-wrapper").ChatReturnType>;
//# sourceMappingURL=getChatResult.d.ts.map