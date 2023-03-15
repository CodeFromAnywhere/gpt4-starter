import { Person } from "peer-types";
import { trySendMessage } from "./trySendMessage";
import { availableMessagingChannels, SendMessageConfig } from "./types";

/**
General purpose function to send a person a message.
Can send a whatsapp message, email, or sms.
Based on your config, it determines the channels to try, and in which order to try them.
 */
export const sendMessage = async (
  person: Person,
  message: string,
  config?: SendMessageConfig
) => {
  const preferredChannel = config?.preferredChannel || "whatsapp";

  // get the channels to try in the right order
  const channelsToTry = [
    preferredChannel,
    ...availableMessagingChannels.filter((x) => x === preferredChannel),
  ];

  const result = await channelsToTry.reduce(
    async (promiseSuccess, messageChannel) => {
      const isSuccessful = await promiseSuccess;

      if (isSuccessful) {
        return true;
      }

      // if not successful yet, try it.
      const newTry = await trySendMessage(
        person,
        message,
        messageChannel,
        config
      );

      return newTry.isSuccessful;
    },
    new Promise<boolean>((resolve) => resolve(false))
  );

  return { isSuccessful: result };
};
