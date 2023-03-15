import { WhisperConfig } from "ai-types";
/**
Executes Whisper (https://github.com/openai/whisper) via the CLI

NB: You need to install ffmpeg and the cli, see the github repo for instructions

NB: this is a way slower implementation than `whisper.cpp`

TODO: Check https://github.com/openai/whisper/discussions/categories/show-and-tell for other things we can do with whisper
   
 */
export declare const whisper: (config: WhisperConfig) => Promise<{
    txt: string;
    srt: string;
    vtt: string;
}[] | undefined>;
//# sourceMappingURL=whisper.d.ts.map