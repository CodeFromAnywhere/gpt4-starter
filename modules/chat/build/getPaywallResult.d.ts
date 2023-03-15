import { Creation } from "model-types";
import { FinalAssistantPersona, Person } from "peer-types";
import { ChatMessage } from "social-media-types";
export declare const getPaywallResult: (chatMessage: Creation<ChatMessage>, history: ChatMessage[], person: Person, persona: FinalAssistantPersona, config: {
    isFirstMessage?: boolean;
    newUsersAmount?: number;
}) => Promise<{
    isSuccessful: boolean;
    message?: string | undefined;
    isPaywallHit: boolean;
    tokensUsed?: number | undefined;
    chatResponse?: string | undefined;
}>;
//# sourceMappingURL=getPaywallResult.d.ts.map