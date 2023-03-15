import { Persona } from "peer-types";
import { getPersona } from "persona-functions-node";
import twilio from "twilio";

/**
sends a message with the primary persona (or specified persona) to a whatsapp number with a specific body

Twilio from/to works with or without a "whatsapp:" prefix for whatsapp and sms respectively

Must use E.164 formatting, e.g. +[country][phonenumber]
 */
export const sendTwilioMessage = async (
  to: string,
  body: string,

  config?: {
    /**
     * If true, urls in the message are shortened by twilio
     */
    shortenUrls?: boolean;
    /**
     * Defaults to whatsapp
     */
    channel?: "whatsapp" | "sms";
    persona?: Persona;
    /**
     * Urls to audio, video, images, vCard, or whatever media you want to send into the whatsapp message.
     *
     * NB: in some cases, body may be omitted.
     */
    mediaUrls?: string[];
    /**
     * If given, will send a location into a whatsapp message.
     */
    location?: {
      label: string;
      latitude: number;
      longitude: number;
    };
  }
) => {
  const persona = config?.persona || (await getPersona());
  if (!persona) {
    return {
      isSuccessful: false,
    };
  }
  const {
    twilioAccountSid,
    twilioAuthToken,
    twilioFromPhoneNumber,
    twilioWhatsappFromPhoneNumber,
  } = persona;
  const client = twilio(twilioAccountSid, twilioAuthToken);

  const fromNumber =
    config?.channel === "sms"
      ? twilioFromPhoneNumber
      : `whatsapp:${twilioWhatsappFromPhoneNumber}`;

  const toNumber = config?.channel === "sms" ? to : `whatsapp:${to}`;

  const result = await client.messages.create({
    from: fromNumber,
    body,
    to: toNumber,

    // useful to shorten urls!
    shortenUrls: config?.shortenUrls,

    // to send an image, just pass an url here!
    mediaUrl: config?.mediaUrls,

    // to send a location, just use this:
    persistentAction: config?.location
      ? [
          `geo:${config.location.latitude},${config.location.longitude}|${config.location.label}`,
        ]
      : undefined,
  });

  // console.log({ result });
  return { isSuccessful: true };
};
