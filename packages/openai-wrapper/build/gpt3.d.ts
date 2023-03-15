export declare const openAiTextCompletionModelsReadonly: readonly ["text-davinci-003", "text-curie-001", "text-babbage-001", "text-ada-001", "code-davinci-002", "code-cushman-001"];
export declare const openAiTextCompletionModels: string[];
/**
Which model?

# text models

- gpt-3.5-turbo: ChatGPT MODEL! 10x cheaper
- text-davinci-003: Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.
- text-curie-001: Very capable, but faster and lower cost than Davinci.
- text-babbage-001: Capable of straightforward tasks, very fast, and lower cost.
- text-ada-001: Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.

# Code models

- code-davinci-002: Most capable Codex model. Particularly good at translating natural language to code. In addition to completing code, also supports inserting completions within code.
- code-cushman-001: Almost as capable as Davinci Codex, but slightly faster. This speed advantage may make it preferable for real-time applications.

 */
export type OpenAiTextCompletionModelEnum = typeof openAiTextCompletionModelsReadonly[number];
/**
 * Simplified api for gpt3 from open AI
 *
 * Rate limit reached for default-text-davinci-003 in organization org-Z2Wq1CTmyzHDI6SApqk5gBLs on tokens per min. Limit: 250000.000000 / min. Current: 275070.000000 / min. Contact support@openai.com if you continue to have issues.
 *
 * TODO: log all api calls
 */
export declare const gpt3: (input: string, config?: {
    /**
     * Defaults to the first in the list of text-models
     */
    model?: OpenAiTextCompletionModelEnum;
    isInstant?: boolean;
}) => Promise<{
    isSuccessful: boolean;
    message?: string | undefined;
    result?: string | undefined;
}>;
//# sourceMappingURL=gpt3.d.ts.map