import { isOnline } from "is-online";
import twilio from "twilio";

import {
  MessageInstance,
  MessageListInstanceCreateOptions,
} from "twilio/lib/rest/api/v2010/account/message";
import { getPersona } from "persona-functions-node";
/**
 * DEPRECATED: to be merged with `sendMessage` since it also handles WhatsApp and more...
 *
 * Send sms
 *
 * Requires OS Config to have Twilio sid and auth token.
 *
 * Reqruired options: `to` and `body`
 *
 * `to` is not required, but will overwrite the one you specified in your `OsConfig`
 */
export const sendSms = async (
  options: MessageListInstanceCreateOptions
): Promise<MessageInstance | undefined> => {
  const { from: optionsFrom, ...otherOptions } = options;

  const persona = await getPersona();
  if (!persona) {
    return;
  }

  const isOnlineNow = await isOnline();

  if (!isOnlineNow) {
    console.log(
      `Not online, sms not sent. There are two possibilities. We should either add it to queue to send it once we are online, or we should just log the sms because it may be done on an offline PC and this is a dev purpose sms`,
      options
    );
    return;
  }

  const { twilioAccountSid, twilioAuthToken, twilioFromPhoneNumber } = persona;

  if (!twilioAccountSid || !twilioAuthToken) {
    console.log("Please setup your Twilio credentials first");
    return;
  }
  const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

  const from = optionsFrom || twilioFromPhoneNumber;

  if (!from) {
    console.log(
      "Please provide a phonenumber to sent from, either in your OsConfig or in the sendSms options"
    );
    return;
  }

  const message = await twilioClient.messages
    .create({ from, ...otherOptions })
    .catch((reason) => {
      console.log("Sending sms failed", { reason });

      return undefined;
    });

  return message;
};
