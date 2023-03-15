import { Creation } from "model-types";
import { ChatReturnType } from "openai-wrapper";
import { Person, Persona } from "peer-types";
import { ChatMessage } from "social-media-types";
/**
 * To be executed after chat. Needs to be separate because we need to return something within a 15s timeout
 */
export declare const processMessageAfterChat: (config: {
    isTimedOut: boolean;
    instantResponse: ChatReturnType;
    person: Person;
    persona: Persona;
    chatMessage: Creation<ChatMessage>;
    isFreeMessage?: boolean | undefined;
}) => Promise<{
    isSuccessful: boolean;
    message: string;
}>;
//# sourceMappingURL=processMessageAfterChat.d.ts.map