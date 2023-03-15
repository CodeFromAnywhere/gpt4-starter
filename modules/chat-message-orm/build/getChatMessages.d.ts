import { ChatMessage } from "social-media-types";
/**
Ensure the chat is stored per `Person.slug`, per `Persona.slug` and per date (`yyyy-mm-dd`). VERY IMPORTANT TO SCALE THIS.

Example location:

`os/knowledge/persons/[slug]/chat-messages/[persona-slug]/[yyyy-mm-dd].json`.

TODO: in case it's a message for a group:

`os/knowledge/groups/[slug]/chat-messages/[persona-slug]/[yyyy-mm-dd].json`.

*/
export declare const getChatMessages: (personSlug: string, personaSlug: string, fromDate?: number, untilDate?: number) => Promise<ChatMessage[]>;
//# sourceMappingURL=getChatMessages.d.ts.map