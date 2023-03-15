import { CustomAssistantContext } from "./types";
/**
Any language teacher could use a dualprompt where one of the prompts has a chained additional prompt. Time to repsonse doubles, llm cost triples, but it will be far more useful:

- analyses your message, and gives tips on how to improve grammar, spelling, and vocabulary.
- responds to your message in whatever language you sent it in
    - after that: translates the response into your language if it was the target language, and vice versa.

After all results are in, they are combined into a response and sent back to whatsapp.

Additionally, a voice wrapper would be amazing for this! Whisper + Say would be enough. If we do this though, we need to ensure the server load stays low for scalability.

# *UPDATE*

Doesn't work so well! I think it's better with my own word matrix. Let's add some settings, the way I had it in the UI would be perfect.

It'd be great to have:

- known words in target language
- target language
- spoken language (detect)
- base language (should be english)

Then, we can do different prompts based on what is said

- if the spoken language is not target or base, reply with an error message
- if the spoken language is target language
  - analyse what the user is trying to say (target to base, GPT)
  - reply to that (base to base, GPT)
  - wordmatrix step
- if the spoken language is english
  - figure out if it's a question about language (JSON GPT)
  - if it's a question about language, assume it's about target language, and explain about grammar, spelling, and vocabulary with lots of examples
  - if not provide in multiple parts
    - provide 3 sentences in the target language that would accomplish the same goal in the format "base sentence = target sentence" (base to target, GPT)
    - reply to it (base to base, GPT)
    - wordmatrix step

# Wordmatrix step:

Input base language text. Based on the level and settings, translate some words into target language, with or without the original word in parenthesis (word matrix)

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