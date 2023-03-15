/**
 * Type for a single transcription line
 */
export type TranscribedText = {
    startAt: number;
    endAt: number;
    text: string;
    /**Scalar stating token confidence. May need to be on the token level though, not sure if it works like this. Don't know how to find this yet, as it's not output in one of the files. */
    confidenceLevel?: number;
};
//# sourceMappingURL=TranscribedText.d.ts.map