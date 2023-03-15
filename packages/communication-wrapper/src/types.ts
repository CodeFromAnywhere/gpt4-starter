import { Persona } from "peer-types";

/**
 * Available messaging channels in order of preference
 */
export const availableMessagingChannels = ["whatsapp", "email", "sms"] as const;
export type MessagingChannel = typeof availableMessagingChannels[number];
export type SendMessageConfig = {
  /**
   * Only for email
   */
  emailConfig?: { subject?: string };

  /**
       always prefers "whatsapp" unless it's not available. Then prefers email and then SMS
       */
  preferredChannel?: MessagingChannel;
  persona?: Persona;
};
