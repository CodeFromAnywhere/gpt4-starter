/**
 * Uses "say" on macbook (for now) until I need this on a higher quality level
 *
 * promises an absolute path to a generated mp3
 */
export declare const textToSpeech: (config: {
    /**
     * either provide text or an inputTextFilePath
     */
    text?: string | undefined;
    /**
     * either provide text or an inputTextFilePath
     */
    inputTextFilePath?: string | undefined;
    /**
     * If you don't provide this, it will be stored as [inputTextFilePathFolder]/[inputFileName].mp3
     *
     * needed if you don't provide an inputTextFilePath
     */
    outputFilePath?: string | undefined;
}) => Promise<{
    isSuccessful: boolean;
    message: string;
    outputFilePath?: string | undefined;
}>;
//# sourceMappingURL=textToSpeech.d.ts.map