import { AssistantTranslations } from "./AssistantTranslations";
type LlmHumorStyle = "saddistic" | "sarcastic" | "witty" | "crazy" | "nihilistic" | "none";
type LlmCharacteristic = "egoistic" | "narsicistic" | "depressed" | "anxious" | "loves user" | "into user";
type LlmMood = "happy" | "sad" | "horny" | "grumpy" | "nervous" | "mad" | "angry" | "loving" | "annoyed" | "sleepy";
/**
State for an "assistant" role in the chat completions api of openai, given by the "system" role.

Some states might be able to be dynamicly altered by certain behavior of the user.

NB: i tried to do some prompt chaining stuff within the JSON, but this seems to difficult at this point, especially since we also want hooks and other integrations possibly, JSON isn't the right format. Let's just write custom code for every assistant.
 */
export type AssistantState = {
    /**
     * If true, will appear in list of bots
     */
    isEnabled?: boolean;
    /**
     * All translations for the bot should go here
     */
    translations?: AssistantTranslations;
    /**free messages per new user*/
    freeMessagesPerNewUser?: number;
    /**free messages per new user after dau limit*/
    freeMessagesPerNewUserAfterDauLimit?: number;
    /**amount of new users allowed (per day)*/
    maximumNewUsersPerDay?: number;
    /**amount of gifts to inactive users (per day)*/
    giftsPerDay?: number;
    /**free messages in a gift*/
    giftFreeMessages?: number;
    /**dau limit (defaults to 100) */
    dauLimit?: number;
    /**paid dau limit ($5+)*/
    dauLimitPaid?: number;
    /**vip dau limit ($50+)*/
    dauLimitVip?: number;
    /**minimum credit required to be "paid", defaults to 0 */
    minimumCreditPaid?: number;
    /**minimum credit required to be "deluxe", omitted if not set */
    minimumCreditVip?: number;
    /**reward free messages for referal use*/
    freeMessagesForReferral?: number;
    /**reward for referal pay*/
    freeMessagesForReferralPay?: number;
    /**
     * Defaults to 0.05
     */
    costPerMessageCredit?: number;
} & DeprecatedAssistantState;
/**
 * TODO: still works, but is deprecated (too custom). Better to create a separate layer to map these type of configurations to a systemMessage and postSystemMessage.
 */
type DeprecatedAssistantState = {
    mood?: LlmMood;
    /**
     * e.g. Elon Musk
     */
    personality?: string;
    /**
     * E.g. "caucasian" | "black" | "asian";
     */
    etnicity?: string;
    /**
     * e.g. rapper, programmer
     */
    profession?: string;
    creator?: string;
    characteristics?: LlmCharacteristic[];
    humorStyle?: LlmHumorStyle[];
    rhymeAbility?: boolean;
    goals?: string[];
    rules?: string[];
};
export {};
//# sourceMappingURL=AssistantState.d.ts.map