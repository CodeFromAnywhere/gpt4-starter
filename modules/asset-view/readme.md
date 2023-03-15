# Asset view

asset-view (`OperationClassification` ui-cjs)


## 📁 AssetView

`AssetView` shows an asset. Every file-format has a different way to be rendered.




# Api reference

## `<AssetView />`

Views an asset in the proper way.

If you also provide a Transcription, then:

- gets the play time from the player and match it with the sentence and word (hook audio time to the component, preferably 10fps minimum)
- highlights both the sentence and word in the text
- makes every word clickable, going to the right place in the video


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## itemGetBackendAssetUrl()

Get remote url for a `BackendAsset` in an `AugmentedAnyModelType` database model item.

If you provide an array it'll take the first asset.


| Input      |    |    |
| ---------- | -- | -- |
| config | { item: `AugmentedAnyModelType`, <br />backendAsset?: {  }, <br />isDownload?: boolean, <br /> } |  |
| **Output** | string   |    |



## `<ModelItemAssetView />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 AssetView (exported const)

Views an asset in the proper way.

If you also provide a Transcription, then:

- gets the play time from the player and match it with the sentence and word (hook audio time to the component, preferably 10fps minimum)
- highlights both the sentence and word in the text
- makes every word clickable, going to the right place in the video


## 📄 itemGetBackendAssetUrl (exported const)

Get remote url for a `BackendAsset` in an `AugmentedAnyModelType` database model item.

If you provide an array it'll take the first asset.


## 📄 ModelItemAssetView (exported const)

## getSrc()

| Input      |    |    |
| ---------- | -- | -- |
| asset | `Asset` |  |,| projectRelativeReferencingFilePath | string |  |,| isNextStaticProductionBuild (optional) | boolean |  |
| **Output** | { src?: string, <br />downloadUrl?: string, <br /> }   |    |



## `<InteractiveAsset />`

shows an `Asset` with interactivity

- Any file shows the name of the file, the size, and a link to open it in a new tab in the browser
- Images show thumbnail
- Audio show duration and amplitude
- Video/screen show thumbnail and duration


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## useAsset()

| Input      |    |    |
| ---------- | -- | -- |
| asset (optional) | `Asset` |  |,| projectRelativeReferencingFilePath (optional) | string |  |,| isNextStaticProductionBuild (optional) | boolean |  |
| **Output** | { rawText?: {  }, <br />type?: video / audio / image / text / other, <br />downloadUrl?: string, <br />src?: string, <br />extension?: string, <br /> }   |    |



## 📄 getSrc (exported const)

## 📄 InteractiveAsset (exported const)

shows an `Asset` with interactivity

- Any file shows the name of the file, the size, and a link to open it in a new tab in the browser
- Images show thumbnail
- Audio show duration and amplitude
- Video/screen show thumbnail and duration


## 📄 useAsset (exported const)

# Internal

<details><summary>Show internal (5)</summary>
    
  # `<TranscriptionSentence />`




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## useAssetInfo()

| Input      |    |    |
| ---------- | -- | -- |
| url (optional) | string |  |,| filename (optional) | string |  |
| **Output** | { rawText?: {  }, <br />type: video / audio / image / text / other, <br /> }   |    |



## 📄 defaultClassName (exported const)

## 📄 TranscriptionSentence (exported const)

## 📄 useAssetInfo (exported const)

  </details>

