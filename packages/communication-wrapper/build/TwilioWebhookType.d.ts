/**
 * NB: couln't find this in the docs or api spec... Made myself, but it is probably not 100% accurate! just tested with a simple WhatsApp message.
 */
export type TwilioWebhookType = {
    MediaUrl0?: string;
    MediaContentType0?: string;
    /**
     * Location stuff
     */
    Latitude?: string;
    Longitude?: string;
    Address?: string;
    Label?: string;
    /**
     * instareply button, if clicked
     */
    ButtonText?: string;
    SmsMessageSid: string;
    /**
     * if there are media this is the number of media like '1'
     */
    NumMedia: string;
    /**
     * ProfileName of the sender (whatsapp?)
     */
    ProfileName: string;
    SmsSid: string;
    /**
     * seems to be the phone number without + (whatsapp)
     */
    WaId?: string;
    SmsStatus: string;
    /**
     * The message!
     */
    Body: string;
    /**
     * The phonenumber where the message should go
     */
    To: string;
    NumSegments: string;
    ReferralNumMedia: string;
    /**
     * Id of the message, to be stored because it is given for a reply
     */
    MessageSid: string;
    /**
     * If the message is a reply on some message, this is the id of the original message
     */
    OriginalRepliedMessageSid?: string;
    /**
     * `whatsapp:xxxxxx`
     */
    OriginalRepliedMessageSender?: string;
    /**
     * Useful to verify to the correct persona
     */
    AccountSid: string;
    /**
     * The phone number where the message came from
     */
    From: string;
    ApiVersion: string;
};
//# sourceMappingURL=TwilioWebhookType.d.ts.map