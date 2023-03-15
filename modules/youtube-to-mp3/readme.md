# Youtube to mp3

youtube-to-mp3 (`OperationClassification` undefined)



# Api reference

## youtubeToMp4()

In order to download the youtube video into mp3 format ffmpeg packages must be install in your computer
for mac please try [brew install ffmpeg] to install ffmpeg


| Input      |    |    |
| ---------- | -- | -- |
| link | string |  |,| config (optional) | { isToMp3?: boolean, <br />destinationFolderPath?: string, <br />quality?: string, <br /> } |  |
| **Output** |    |    |



## 📄 youtubeToMp4 (exported const)

In order to download the youtube video into mp3 format ffmpeg packages must be install in your computer
for mac please try [brew install ffmpeg] to install ffmpeg

# Internal

<details><summary>Show internal (4)</summary>
    
  # youtubeToMp4_old()

Downloads a youtube mp4 onto a certain location.

Status will be stored in action-status file.


| Input      |    |    |
| ---------- | -- | -- |
| youtubeUrl | string |  |,| absoluteFolderPath | string |  |
| **Output** |    |    |



## youtubeToMp4WithContext()

Download youtubevideo for user. Also has action status support


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| youtubeUrl | string |  |,| projectRelativeFolderPath | string |  |
| **Output** |    |    |



## 📄 youtubeToMp4_old (exported const)

Downloads a youtube mp4 onto a certain location.

Status will be stored in action-status file.


## 📄 youtubeToMp4WithContext (exported const)

Download youtubevideo for user. Also has action status support
  </details>

