import { Creation } from "model-types";
import { ChatMessage } from "social-media-types";
import { StandardResponse } from "function-types";
/**
 * For performance reasons, exception model
 */
export declare const insertChatMessages: (personSlug: string, personaSlug: string, chatMessages: Creation<ChatMessage>[]) => Promise<StandardResponse>;
//# sourceMappingURL=insertChatMessages.d.ts.map