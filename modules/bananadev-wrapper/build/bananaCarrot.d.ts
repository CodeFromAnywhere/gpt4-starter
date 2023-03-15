/**

 */
export declare const bananaCarrot: (modelParameters: {
    imageUrl: string;
    /**
     * text for QA / Similarity*/
    text?: string;
    /**
     * whether to return text-image similarity
     */
    similarity?: boolean;
    /**
     * max length of the generation
     */
    maxLength?: number;
    /**
     * min length of the generation
     */
    minLength?: number;
}) => Promise<{
    isSuccessful: boolean;
    message: string;
    result?: undefined;
} | {
    isSuccessful: boolean;
    message: string;
    result: object;
}>;
//# sourceMappingURL=bananaCarrot.d.ts.map