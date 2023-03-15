# Watch mp3 transcriptions

watch-mp3-transcriptions (`OperationClassification` undefined)



# Api reference

# Internal

<details><summary>Show internal (9)</summary>
    
  # getRecordingType()

Function that uses AI (LLM's mostly) that tries to determine the recording type from a transcription from an audio.

Uses `Transcription` file, then chunks the english text, and tries to determine the type as efficiently as possible.


| Input      |    |    |
| ---------- | -- | -- |
| absoluteTranscriptionFilePath | string |  |
| **Output** |    |    |



## transcriptionToGptChunks()

Chunkify an audio transcription text

Looks at the "." in the text and adds sentences together till a maximum token size per chunk.


| Input      |    |    |
| ---------- | -- | -- |
| transcriptionAbsoluteFilePath | string |  |,| maxGptNodeTokenSize | number |  |
| **Output** |    |    |



## watchMp3Transcriptions()

Add an automation (watcher that queues or does) to act on any `.mp3.txt` (which indicates a whisper is done) that doesn't have a `.clean.md`

There are many other things we can do with the spoken text transcription of an audio file, but these will be applied on any md file (which is much more general purpose)

Promises the path of the resulting converted cleaned-up file


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 CHUNK_TOKEN_SIZE (exported const)

## 📄 getRecordingType (exported const)

Function that uses AI (LLM's mostly) that tries to determine the recording type from a transcription from an audio.

Uses `Transcription` file, then chunks the english text, and tries to determine the type as efficiently as possible.


## 📄 TOKEN_COUNT_MARGIN (exported const)

## 📄 transcriptionToGptChunks (exported const)

Chunkify an audio transcription text

Looks at the "." in the text and adds sentences together till a maximum token size per chunk.


## 📄 watchMp3Transcriptions (exported const)

Add an automation (watcher that queues or does) to act on any `.mp3.txt` (which indicates a whisper is done) that doesn't have a `.clean.md`

There are many other things we can do with the spoken text transcription of an audio file, but these will be applied on any md file (which is much more general purpose)

Promises the path of the resulting converted cleaned-up file


## 📄 watchMp3Transcriptions (exported const)

Add an automation (watcher that queues or does) to act on any `.mp3.txt` (which indicates a whisper is done) that doesn't have a `.clean.md`

There are many other things we can do with the spoken text transcription of an audio file, but these will be applied on any md file (which is much more general purpose)

Promises the path of the resulting converted cleaned-up file
  </details>

