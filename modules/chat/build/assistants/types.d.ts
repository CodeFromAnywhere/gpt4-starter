import { Creation } from "model-types";
import { ChatReturnType } from "openai-wrapper";
import { FinalAssistantPersona, Person } from "peer-types";
import { ChatMessage } from "social-media-types";
export type CustomAssistantContext = {
    person: Person;
    persona: FinalAssistantPersona;
    fullMessageHistory: Creation<ChatMessage>[];
    truncatedMessageHistory: Creation<ChatMessage>[];
    chatMessage: Creation<ChatMessage>;
    inputTokensCalculated: number;
};
export type CustomAssistantFunction = (context: CustomAssistantContext) => Promise<ChatReturnType>;
//# sourceMappingURL=types.d.ts.map