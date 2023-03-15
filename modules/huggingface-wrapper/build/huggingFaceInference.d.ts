export interface HuggingfaceConfig {
    text?: string;
    /**
     * If this is given, will be used instead of text
     */
    contentAbsoluteFilePath?: string;
    isAudio?: boolean;
    apiKey: string;
    model: string;
}
export declare const request: (config: HuggingfaceConfig) => Promise<any>;
//# sourceMappingURL=huggingFaceInference.d.ts.map