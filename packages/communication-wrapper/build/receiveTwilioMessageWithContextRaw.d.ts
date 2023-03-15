import { Context } from "server/typings/common";
/**
 * This is where sms/whastapp messages are received via the twilio webhook.
 *
 * Set your twilio webhook to:
 *
 * `https://yourapi.com/function/receiveTwilioMessageWithContextRaw`
 *
 * What this does:
 * - receives the webhook input
 * - find the persona that this message is addressed to
 * - find or make a person based on the phone number
 * - call `generateResponse`
 *
 * What the `generateResponse` function does:
 * - store the sent message into the db
 * - generate a response
 * - deduct credit
 * - send a reply or not
 *
 */
export declare const receiveTwilioMessageWithContextRaw: (serverContext: Context) => Promise<void>;
//# sourceMappingURL=receiveTwilioMessageWithContextRaw.d.ts.map