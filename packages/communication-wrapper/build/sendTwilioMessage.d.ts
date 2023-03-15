import { Persona } from "peer-types";
/**
sends a message with the primary persona (or specified persona) to a whatsapp number with a specific body

Twilio from/to works with or without a "whatsapp:" prefix for whatsapp and sms respectively

Must use E.164 formatting, e.g. +[country][phonenumber]
 */
export declare const sendTwilioMessage: (to: string, body: string, config?: {
    /**
     * If true, urls in the message are shortened by twilio
     */
    shortenUrls?: boolean | undefined;
    /**
     * Defaults to whatsapp
     */
    channel?: "whatsapp" | "sms" | undefined;
    persona?: Persona | undefined;
    /**
     * Urls to audio, video, images, vCard, or whatever media you want to send into the whatsapp message.
     *
     * NB: in some cases, body may be omitted.
     */
    mediaUrls?: string[] | undefined;
    /**
     * If given, will send a location into a whatsapp message.
     */
    location?: {
        label: string;
        latitude: number;
        longitude: number;
    } | undefined;
} | undefined) => Promise<{
    isSuccessful: boolean;
}>;
//# sourceMappingURL=sendTwilioMessage.d.ts.map