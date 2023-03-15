# Watch audio video doc

watch-audio-video-doc (`OperationClassification` undefined)



# Api reference

# Internal

<details><summary>Show internal (20)</summary>
    
  # watchAudioVideoDoc()

Watch all video file formats except mp4, and convert them all into a compressed .mp4 (10fps 480p) (remove original)

Find all audiofile formats in project except mp3 and wav, convert into 16 bit wav (remove original)

Find all image file formats in the project except png, convert to png, compress size if it seems to be able to be done without much loss.

Watch all doc formats (docx, rtf, pdf, what else?) and convert them into .md (keeping original)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## watchMp3WithoutWav()

Find all mp3 everywhere without wav, add 16-bit wav


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## watchMp4WithoutWav()

Find all mp4 everywhere without wav, add 16-bit wav


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## watchWavToSpeakers()

Watch wav files anywhere and add speaker separation output if that isn't there yet


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## watchWavToSpeech()

Watch wav files anywhere. Every wav file that doesn't have a `.txt` file existing under the same name should be whispered. This way it's integrated on many more pipelines than just recording (also import, for example)

Besides using whisper, speaker separation can be applied as well


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## watchWavWithoutMp3()

Find all wav everywhere without mp3, add mp3


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 audioFileExtensions (exported const)

## 📄 docFileExtensions (exported const)

## 📄 imageFileExtensions (exported const)

## 📄 readonlyDocFileExtensions (exported const)

## 📄 videoFileExtensions (exported const)

## 📄 watchAudioVideoDoc (exported const)

Watch all video file formats except mp4, and convert them all into a compressed .mp4 (10fps 480p) (remove original)

Find all audiofile formats in project except mp3 and wav, convert into 16 bit wav (remove original)

Find all image file formats in the project except png, convert to png, compress size if it seems to be able to be done without much loss.

Watch all doc formats (docx, rtf, pdf, what else?) and convert them into .md (keeping original)


## 📄 watchMp3WithoutWav (exported const)

Find all mp3 everywhere without wav, add 16-bit wav


## 📄 watchMp4WithoutWav (exported const)

Find all mp4 everywhere without wav, add 16-bit wav


## 📄 watchMp3WithoutWav (exported const)

Find all mp3 everywhere without wav, add 16-bit wav


## 📄 watchMp4WithoutWav (exported const)

Find all mp4 everywhere without wav, add 16-bit wav


## 📄 watchWavToSpeakers (exported const)

Watch wav files anywhere and add speaker separation output if that isn't there yet


## 📄 watchWavToSpeech (exported const)

Watch wav files anywhere. Every wav file that doesn't have a `.txt` file existing under the same name should be whispered. This way it's integrated on many more pipelines than just recording (also import, for example)

Besides using whisper, speaker separation can be applied as well


## 📄 watchWavWithoutMp3 (exported const)

Find all wav everywhere without mp3, add mp3


## 📄 watchWavWithoutMp3 (exported const)

Find all wav everywhere without mp3, add mp3
  </details>

