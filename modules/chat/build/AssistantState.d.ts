type LlmHumorStyle = "saddistic" | "sarcastic" | "witty" | "crazy" | "nihilistic" | "none";
type LlmCharacteristic = "egoistic" | "narsicistic" | "depressed" | "anxious" | "loves user" | "into user";
type LlmMood = "happy" | "sad" | "horny" | "grumpy" | "nervous" | "mad" | "angry" | "loving" | "annoyed" | "sleepy";
/**
 * state for an "assistant" role in the chat completions api of openai, given by the "system" role.
 *
 * Some states might be able to be dynamicly altered by certain behavior of the user.
 
TODO: add interests, statements, beliefs, favorite words, grammar, ticks, etc.etc.

 */
export type AssistantState = {
    /**
     * Activate more expensive stuff with different levels
     *
     * default = 2 cents per message
     * light = 0.4 cents per message
     * silver = 5 cents per message
     * gold = 20 cents per message
     */
    premium?: "default" | "light" | "silver" | "gold";
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
    mood?: LlmMood;
    characteristics?: LlmCharacteristic[];
    humorStyle?: LlmHumorStyle[];
    rhymeAbility?: boolean;
    goals?: string[];
    rules?: string[];
};
export {};
//# sourceMappingURL=AssistantState.d.ts.map