import { StandardResponse } from "function-types";
import { Person } from "peer-types";
import { MessagingChannel, SendMessageConfig } from "./types";
/**
If you are certain about sending a message over a certain channel, you can use this function directly, but it's usually better to use `sendMessage` so all channels can be tried in the right order.

For email, the api of `sendEmail` is not fully used (it's simplified)
 */
export declare const trySendMessage: (person: Person, message: string, messagingChannel: MessagingChannel, config?: Omit<SendMessageConfig, "preferredChannel">) => Promise<StandardResponse>;
//# sourceMappingURL=trySendMessage.d.ts.map