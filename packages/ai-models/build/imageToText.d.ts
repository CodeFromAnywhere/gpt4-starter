/**
 * Image caption generation using banana.dev API with the carrot model
 *
 * Takes in a path to an image.
 * Returns a caption for that image.
 */
export declare const imageToText: (absoluteImagePath: string, config?: {
    text?: string;
    similarity?: boolean;
    maxLength?: number;
    minLength?: number;
}) => Promise<{
    isSuccessful: boolean;
    message: string;
    result?: object | undefined;
}>;
//# sourceMappingURL=imageToText.d.ts.map