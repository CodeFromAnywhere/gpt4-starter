# Ai models

ai-models (`OperationClassification` undefined)



# Api reference

## textToText()

TODO: improve gpt3 api with good token calculation, aggresive exponential backoff, and preventing ratelimit at all times, to maximise stability. can I have gpt3 as fallback to browser automated ChatGPT?


For now it's `string -> string`

There are simply too many options to make this file -> file, it wouldn't be useful.

NB: use oneByOne for this if you don't want to hit the limit

`textToText` needs to have a warning for context size (or dynamically choose a LLM with a bigger context size, or warn and split it up based on sentence endings, paragraphs, and newlines. It always needs to work!)

Fix errors:

- ratelimit reached
- too many tokens used (more than 4k)


| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |,| config (optional) | { personId?: string, <br />model?: `TextToTextModelEnum`, <br />isInstant?: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 textToText (exported const)

TODO: improve gpt3 api with good token calculation, aggresive exponential backoff, and preventing ratelimit at all times, to maximise stability. can I have gpt3 as fallback to browser automated ChatGPT?


For now it's `string -> string`

There are simply too many options to make this file -> file, it wouldn't be useful.

NB: use oneByOne for this if you don't want to hit the limit

`textToText` needs to have a warning for context size (or dynamically choose a LLM with a bigger context size, or warn and split it up based on sentence endings, paragraphs, and newlines. It always needs to work!)

Fix errors:

- ratelimit reached
- too many tokens used (more than 4k)


## speakerSeparation()

Use huggingface inference with some speaker separation model

Should return a file again I guess, or does it return textual info? Let's see


| Input      |    |    |
| ---------- | -- | -- |
| absoluteAudioFilePath | string |  |
| **Output** |    |    |



## speechToText()

Uses local whisper, for now. Audiofile must be 16-bit wav

NB: I have the queueing on this layer, but if we later have faster ones that don't need a queue because they don't cost much processing power, we can add it on the individual stt level


| Input      |    |    |
| ---------- | -- | -- |
| absoluteAudioFilePath | string |  |
| **Output** |    |    |



## 📄 speakerSeparation (exported const)

Use huggingface inference with some speaker separation model

Should return a file again I guess, or does it return textual info? Let's see


## 📄 speechToText (exported const)

Uses local whisper, for now. Audiofile must be 16-bit wav

NB: I have the queueing on this layer, but if we later have faster ones that don't need a queue because they don't cost much processing power, we can add it on the individual stt level

# Tests

<details><summary>Show test information(2)</summary>
    
  # test()

Test all AI models with simple test functions.
Ensure they never block the thread

TODO: Also supply version for all AI models so it's stored on output correctly


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 test (unexported const)

Test all AI models with simple test functions.
Ensure they never block the thread

TODO: Also supply version for all AI models so it's stored on output correctly
  </details>

# Internal

<details><summary>Show internal (13)</summary>
    
  # getGroupOrPersonId()

calculate groupId/personId this based on the path (/knowledge/users/[email]/*, etc)


| Input      |    |    |
| ---------- | -- | -- |
| absoluteAudioFilePath | string |  |
| **Output** |    |    |



## imageToText()

Image caption generation using banana.dev API with the carrot model

Takes in a path to an image.
Returns a caption for that image.


| Input      |    |    |
| ---------- | -- | -- |
| absoluteImagePath | string |  |,| config (optional) | { text?: string, <br />similarity?: boolean, <br />maxLength?: number, <br />minLength?: number, <br /> } |  |
| **Output** |    |    |



## languageTranslation()

Might very well be using a LLM Prompt, but there are more niche models that might do a better job, more efficiently, more cheaply, more performantly.


| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |,| targetLanguage | string |  |
| **Output** |    |    |



## musicTrackSeparation()

separates the tracks (should be done with API for something like Spleeter)

TODO: should use the spleeter api somewhere (or similar) and return an object where the keys are track-names and the values are the absolute paths to these files.


| Input      |    |    |
| ---------- | -- | -- |
| absoluteMusicFilePath | string |  |
| **Output** |    |    |



## textToImage()

should use banana.dev Stable Diffusion
promises an absolute path of the resulting image


| Input      |    |    |
| ---------- | -- | -- |
| config | { text?: string, <br />inputTextFilePath?: string, <br />outputFilePath?: string, <br /> } |  |
| **Output** |    |    |



## textToSpeech()

Uses "say" on macbook (for now) until I need this on a higher quality level

promises an absolute path to a generated mp3


| Input      |    |    |
| ---------- | -- | -- |
| config | { text?: string, <br />inputTextFilePath?: string, <br />outputFilePath?: string, <br /> } |  |
| **Output** |    |    |



## 🔹 TextToTextModelEnum

## 📄 getGroupOrPersonId (exported const)

calculate groupId/personId this based on the path (/knowledge/users/[email]/*, etc)


## 📄 imageToText (exported const)

Image caption generation using banana.dev API with the carrot model

Takes in a path to an image.
Returns a caption for that image.


## 📄 languageTranslation (exported const)

Might very well be using a LLM Prompt, but there are more niche models that might do a better job, more efficiently, more cheaply, more performantly.


## 📄 musicTrackSeparation (exported const)

separates the tracks (should be done with API for something like Spleeter)

TODO: should use the spleeter api somewhere (or similar) and return an object where the keys are track-names and the values are the absolute paths to these files.


## 📄 textToImage (exported const)

should use banana.dev Stable Diffusion
promises an absolute path of the resulting image


## 📄 textToSpeech (exported const)

Uses "say" on macbook (for now) until I need this on a higher quality level

promises an absolute path to a generated mp3
  </details>

