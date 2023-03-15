import { Person } from "peer-types";
import { SendMessageConfig } from "./types";
/**
General purpose function to send a person a message.
Can send a whatsapp message, email, or sms.
Based on your config, it determines the channels to try, and in which order to try them.
 */
export declare const sendMessage: (person: Person, message: string, config?: SendMessageConfig) => Promise<{
    isSuccessful: boolean;
}>;
//# sourceMappingURL=sendMessage.d.ts.map