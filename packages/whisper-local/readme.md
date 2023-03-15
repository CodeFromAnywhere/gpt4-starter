# Whisper local

whisper-local (`OperationClassification` undefined)



# Api reference

## createTranscriptionJson()

Whisper needs to be ran 2-3 times in order to have a good transcription

- once for regular timestamps
- once for word-level timestamps
- if the source isn't english, once extra for the english translation task

With whisper, I need everything in `[filename].transcription.json`

- default segment length stored in `.subtitles[]`
- the word-level segments `.words[]`.
- raw text in `.text: string`


| Input      |    |    |
| ---------- | -- | -- |
| audioFilePath | string |  |
| **Output** |    |    |



## 📄 createTranscriptionJson (exported const)

Whisper needs to be ran 2-3 times in order to have a good transcription

- once for regular timestamps
- once for word-level timestamps
- if the source isn't english, once extra for the english translation task

With whisper, I need everything in `[filename].transcription.json`

- default segment length stored in `.subtitles[]`
- the word-level segments `.words[]`.
- raw text in `.text: string`

# CLI

<details><summary>Show CLI information (2)</summary>
    
  # createTranscriptionJsonCli()

Run this CLI with a path (or it will use `cwd`) to a file or folder to recursively transcribe all wav's there.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 createTranscriptionJsonCli (unexported const)

Run this CLI with a path (or it will use `cwd`) to a file or folder to recursively transcribe all wav's there.
  </details>

# Tests

<details><summary>Show test information(2)</summary>
    
  # test()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (11)</summary>
    
  # getTranslationText()




| Input      |    |    |
| ---------- | -- | -- |
| audioFilePath | string |  |
| **Output** |    |    |



## isWav16bit()

| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** |    |    |



## readTranscriptionCsv()

| Input      |    |    |
| ---------- | -- | -- |
| csvPath | string |  |
| **Output** |    |    |



## whisperLocalCpp()

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


| Input      |    |    |
| ---------- | -- | -- |
| config | `WhisperConfig` |  |
| **Output** |    |    |



## whisper()

Executes Whisper (https://github.com/openai/whisper) via the CLI

NB: You need to install ffmpeg and the cli, see the github repo for instructions

NB: this is a way slower implementation than `whisper.cpp`

TODO: Check https://github.com/openai/whisper/discussions/categories/show-and-tell for other things we can do with whisper


| Input      |    |    |
| ---------- | -- | -- |
| config | `WhisperConfig` |  |
| **Output** |    |    |



## 📄 getTranslationText (exported const)

## 📄 isWav16bit (exported const)

## 📄 isWav16bit (exported const)

## 📄 readTranscriptionCsv (exported const)

## 📄 whisperLocalCpp (exported const)

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


## 📄 whisper (exported const)

Executes Whisper (https://github.com/openai/whisper) via the CLI

NB: You need to install ffmpeg and the cli, see the github repo for instructions

NB: this is a way slower implementation than `whisper.cpp`

TODO: Check https://github.com/openai/whisper/discussions/categories/show-and-tell for other things we can do with whisper
  </details>

