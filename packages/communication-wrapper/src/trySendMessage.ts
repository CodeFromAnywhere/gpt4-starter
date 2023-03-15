import { StandardResponse } from "function-types";
import { Person } from "peer-types";
import { sendMail } from "./sendMail";
import { sendTwilioMessage } from "./sendTwilioMessage";
import { MessagingChannel, SendMessageConfig } from "./types";

/**
If you are certain about sending a message over a certain channel, you can use this function directly, but it's usually better to use `sendMessage` so all channels can be tried in the right order.

For email, the api of `sendEmail` is not fully used (it's simplified)
 */
export const trySendMessage = async (
  person: Person,
  message: string,
  messagingChannel: MessagingChannel,
  config?: Omit<SendMessageConfig, "preferredChannel">
): Promise<StandardResponse> => {
  if (messagingChannel === "email") {
    if (!person.email) {
      return { isSuccessful: false, message: "No email found" };
    }
    const result = await sendMail({
      to: person.email,
      subject: config?.emailConfig?.subject,
      text: message,
      // uses primary persona if not given
      from: config?.persona?.sendgridFromEmail,
    });

    const isSuccessful = result?.statusCode === 200;

    return { isSuccessful, message: "Sent email" };
  }

  if (person.phoneNumber) {
    const result = await sendTwilioMessage(person.phoneNumber, message, {
      channel: messagingChannel,
      persona: config?.persona,
    });

    return { isSuccessful: result.isSuccessful };
  }

  // no email, no phone number...
  return { isSuccessful: false };
  // actually try to send to `messagingChannel`
};
