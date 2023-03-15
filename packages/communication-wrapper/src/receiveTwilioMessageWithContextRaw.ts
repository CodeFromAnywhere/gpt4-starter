import { processMessage } from "chat";
import { Context } from "server/typings/common";
import { twiml } from "twilio";
import { findOrCreatePerson } from "./findOrCreatePerson";
import { findPersona } from "./findPersona";
import { sendTwilioMessage } from "./sendTwilioMessage";
import { TwilioWebhookType } from "./TwilioWebhookType";
const { MessagingResponse } = twiml;

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

export const receiveTwilioMessageWithContextRaw = async (
  serverContext: Context
) => {
  const webhookInput: TwilioWebhookType = serverContext.data;
  //1) match toNumber to a `Persona` . also immediately match the twilioAcccountSid. persona must have a person connected to it (there must be a personId that matches to a person.id)
  const toNumber = webhookInput.To;
  const rawFromNumber = webhookInput.From;
  const fromName = webhookInput.ProfileName;
  const message = webhookInput.Body;
  const quickReply = webhookInput.ButtonText;

  if (quickReply) {
    //
  }

  if (
    webhookInput.OriginalRepliedMessageSid &&
    webhookInput.OriginalRepliedMessageSender
  ) {
    //it's a reply to a previous message. should include that in model.
    // look up all ChatMessages, find the replied message, get that text
    // in the message, insert something like "you said this, my reply is blabla" or if you replly on yourself, also something like this.
  }

  if (webhookInput.Latitude && webhookInput.Longitude) {
    //Latitude: '-8.65640926361084', Longitude: '115.13571166992188', Address, Label
  }

  if (webhookInput.NumMedia !== "0") {
    //images, files, audios, stickers, camera, contacts: (NumMedia, MediaUrl0, MediaContentType0)

    if (webhookInput.NumMedia !== "1") {
      console.log("More than 1 media, weird");
    }
    const url = webhookInput.MediaUrl0;
    const contentType = webhookInput.MediaContentType0;

    if (contentType === "text/vcard") {
      // contacts (save in user data)
    }

    if (contentType?.startsWith("image/")) {
      // image (blip2, Replicate)
    }

    if (
      contentType?.startsWith("audio/") ||
      contentType?.startsWith("video/")
    ) {
      // audio/ogg is the original, but other audio should be doable as well
      // should send to whisper directly (Replicate)
    }

    //    const mediasAmount = Number(webhookInput.NumMedia);
    // new Array(mediasAmount).fill(null).map((_,index)=>{}
  }

  /**
Detect and resond properly on:

- quickreplies: (ButtonText)

- images, files, audios, stickers, camera, contacts: (NumMedia, MediaUrl0, MediaContentType0)

- location: (Latitude: '-8.65640926361084', Longitude: '115.13571166992188', Address, Label)

- replies: OriginalRepliedMessageSid, OriginalRepliedMessageSender

- reactions (can't find these, no webhook event, also no info in the message resource I think. only available through the whatsapp api)

*/
  //console.log({ webhookInput });

  const twiml = new MessagingResponse();

  const { person, isFirstMessage, newUsersAmount } = await findOrCreatePerson({
    rawFromNumber,
    fromName,
  });

  if (!person) {
    console.log("ERROR: Person not created");
    //NB: shouldn't happen, person should always be created here...
    serverContext.res.type("text/xml").send(twiml.toString());
    return;
  }

  const finalAssistantPersona = await findPersona(
    person,
    toNumber,
    webhookInput.AccountSid
  );

  if (!finalAssistantPersona) {
    console.log("ERROR: Persona not found", { webhookInput });
    // NB: return early if there is no connected persona found to the Twilio number (or the twilioAccountSid doesn't match)
    // NB: not sure if I should send a message, as this has cost
    // twiml.message("This number is not active anymore");
    serverContext.res.type("text/xml").send(twiml.toString());
    return;
  }

  //NB: groups come later, may have different parameters I don't know about

  console.log(`received ${message}`);
  //just do it async from returning for ensuring we don't hit the limit
  const result = await processMessage({
    newUsersAmount,
    message,
    finalAssistantPersona,
    person,
    isFirstMessage,
  });

  if (result.responseMessage) {
    // NB: also, add it to the twiml instance.
    // TODO: fix bug of 1600 later!
    const chunk1 = result.responseMessage.substring(0, 1599);
    twiml.message(chunk1);
  }

  // NB: respond with xml to to twilio so it knows what to send back
  serverContext.res.type("text/xml").send(twiml.toString());
};
