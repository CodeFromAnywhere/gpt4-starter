import { CustomAssistantContext } from "./types";
/**
Any language teacher could use a dualprompt where one of the prompts has a chained additional prompt. Time to repsonse doubles, llm cost triples, but it will be far more useful:

- analyses your message, and gives tips on how to improve grammar, spelling, and vocabulary.
- responds to your message in whatever language you sent it in
    - after that: translates the response into your language if it was the target language, and vice versa.

After all results are in, they are combined into a response and sent back to whatsapp.

Additionally, a voice wrapper would be amazing for this! Whisper + Say would be enough. If we do this though, we need to ensure the server load stays low for scalability.
*/
export declare const languageTeacher: (context: CustomAssistantContext, config: {
    /**
     * Language level
     */
    level: "beginner" | "intermediate" | "advanced";
    targetLanguage: string;
}) => Promise<{
    isSuccessful: false;
    message: string;
    chatResponse?: undefined;
    isPaywallHit?: undefined;
    tokensUsed?: undefined;
} | {
    isSuccessful: true;
    chatResponse: string;
    isPaywallHit: false;
    tokensUsed: number;
    message?: undefined;
}>;
export declare const englishTeacher: (context: CustomAssistantContext) => Promise<{
    isSuccessful: false;
    message: string;
    chatResponse?: undefined;
    isPaywallHit?: undefined;
    tokensUsed?: undefined;
} | {
    isSuccessful: true;
    chatResponse: string;
    isPaywallHit: false;
    tokensUsed: number;
    message?: undefined;
}>;
export declare const bahasaTeacher: (context: CustomAssistantContext) => Promise<{
    isSuccessful: false;
    message: string;
    chatResponse?: undefined;
    isPaywallHit?: undefined;
    tokensUsed?: undefined;
} | {
    isSuccessful: true;
    chatResponse: string;
    isPaywallHit: false;
    tokensUsed: number;
    message?: undefined;
}>;
//# sourceMappingURL=englishTeacher.d.ts.map