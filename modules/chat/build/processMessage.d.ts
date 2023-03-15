import { FinalAssistantPersona, Person } from "peer-types";
/**
 * All logic to process a general purpose message. This can be antying like a WhatsApp message, an email, an SMS, literally any form of communication between you (persona) and a person.
 */
export declare const processMessage: (config: {
    newUsersAmount?: number | undefined;
    person: Person;
    finalAssistantPersona: FinalAssistantPersona;
    message: string;
    /**
     * Should be true if the person didn't exist before.
     */
    isFirstMessage?: boolean | undefined;
    isFreeMessage?: boolean | undefined;
}) => Promise<{
    isSuccessful: boolean;
    message?: string | undefined;
    responseMessage?: string | undefined;
}>;
//# sourceMappingURL=processMessage.d.ts.map