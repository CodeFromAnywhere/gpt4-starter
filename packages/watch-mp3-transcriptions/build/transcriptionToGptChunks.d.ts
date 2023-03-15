export declare const TOKEN_COUNT_MARGIN = 1.1;
/**
 * Chunkify an audio transcription text
 *
 * Looks at the "." in the text and adds sentences together till a maximum token size per chunk.
 */
export declare const transcriptionToGptChunks: (transcriptionAbsoluteFilePath: string, maxGptNodeTokenSize: number) => Promise<string[] | undefined>;
//# sourceMappingURL=transcriptionToGptChunks.d.ts.map