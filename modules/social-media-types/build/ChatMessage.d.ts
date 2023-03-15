import { DefaultModelType } from "model-types";
/**
 Simplified model, until we are also going to include `MediaPost` and `MediaChannel`... For now, need nothing else than this for chat like WhatsApp, SMS, Email, etc...
 
 The message is always from a sender and goes to a receiver. Both the sender and receiver can be either a person or persona. In case it's a persona, the personId should be found for the persona.

 TODO: ensure this gets stored in the folder of the external person!
 */
export interface ChatMessage extends DefaultModelType {
    /**
     * admin (internal person)
     */
    personaId?: string;
    /**
     * external person
     */
    personId?: string;
    /**
     * If sent, the dicection is "persona -> person"
     * If received, the direction is "person -> persona"
     */
    direction: "sent" | "received";
    /**
     * Should be given in case the message occurred in a bigger channel. If not given, it is assumed the ChatMessage is a direct message between a person and a persona.
     *
     * The actual `MediaChannel` is a detail that is not important so I think we can get away with directly referencing to the group the MediaChannel belongs to.
     */
    groupSlug?: string;
    createdAt: number;
    message: string;
    /**
     * Used tokens by open ai (cost: 2$ per 1M tokens)
     */
    usedTokensAmount?: number;
    /**
     * If set to true, this means that this was sent by a user with less than 0 credit, indicating the user didn't pay for it.
     */
    isFree?: number;
    isPaywallMessage?: boolean;
}
//# sourceMappingURL=ChatMessage.d.ts.map