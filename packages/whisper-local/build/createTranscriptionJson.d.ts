/**

Whisper needs to be ran 2-3 times in order to have a good transcription

- once for regular timestamps
- once for word-level timestamps
- if the source isn't english, once extra for the english translation task

With whisper, I need everything in `[filename].transcription.json`

- default segment length stored in `.subtitles[]`
- the word-level segments `.words[]`.
- raw text in `.text: string`

 */
export declare const createTranscriptionJson: (audioFilePath: string) => Promise<{
    isSuccessful: boolean;
    message: string;
}>;
//# sourceMappingURL=createTranscriptionJson.d.ts.map