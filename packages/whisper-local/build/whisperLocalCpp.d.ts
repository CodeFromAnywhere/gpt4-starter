import { WhisperConfig } from "ai-types";
/**

Uses https://github.com/ggerganov/whisper.cpp for a more performant implementation of whisper. Still doesn't use GPU, but the inference is much faster than with python on Macbooks.

NB: You need to install ffmpeg and the cpp program, see the github repo for instructions

Relevant cpp cli options:

  -tr,      --translate     [false  ] translate from source language to english
  -otxt,    --output-txt    [false  ] output result in a text file
  -ovtt,    --output-vtt    [false  ] output result in a vtt file
  -osrt,    --output-srt    [false  ] output result in a srt file
  -owts,    --output-words  [false  ] output script for generating karaoke video
  -ps,      --print-special [false  ] print special tokens
  -pc,      --print-colors  [false  ] print colors
  -nt,      --no-timestamps [true   ] do not print timestamps
  -l LANG,  --language LANG [en     ] spoken language
  -m FNAME, --model FNAME   [models/ggml-base.en.bin] model path
  -f FNAME, --file FNAME    [       ] input WAV file path
  --prompt PROMPT  [       ] initial prompt
*/
export declare const whisperLocalCpp: (config: WhisperConfig) => Promise<{
    txt: string;
    csv: string;
    srt: string | undefined;
    vtt: string | undefined;
}[] | undefined>;
//# sourceMappingURL=whisperLocalCpp.d.ts.map