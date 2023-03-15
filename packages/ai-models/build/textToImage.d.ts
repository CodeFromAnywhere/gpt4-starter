/**
 * should use banana.dev Stable Diffusion
 * promises an absolute path of the resulting image
 */
export declare const textToImage: (config: {
    /**
     * either provide text or an inputTextFilePath
     */
    text?: string | undefined;
    /**
     * either provide text or an inputTextFilePath
     */
    inputTextFilePath?: string | undefined;
    /**
     * if you don't provide this, it will be stored as [inputTextFilePathFolder]/[inputFileName].png
     *
     * needed if you don't provide an inputTextFilePath
     */
    outputFilePath?: string | undefined;
}) => Promise<{
    isSuccessful: boolean;
    message: string;
    result?: object | undefined;
}>;
//# sourceMappingURL=textToImage.d.ts.map