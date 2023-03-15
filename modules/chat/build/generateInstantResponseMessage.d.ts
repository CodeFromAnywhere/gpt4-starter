import { Creation } from "model-types";
import { ChatReturnType } from "openai-wrapper";
import { FinalAssistantPersona, Person } from "peer-types";
import { ChatMessage } from "social-media-types";
/**
 * Based on a new incoming message and the found model instances, an instant response can be sent back.
 *
 * If not, just return undefined.
 */
export declare const generateInstantResponseMessage: (chatMessage: Creation<ChatMessage>, person: Person, persona: FinalAssistantPersona, config: {
    isFirstMessage?: boolean;
    newUsersAmount?: number;
}) => Promise<ChatReturnType>;
//# sourceMappingURL=generateInstantResponseMessage.d.ts.map