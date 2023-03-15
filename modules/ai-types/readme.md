# Ai types

ai-types (`OperationClassification` cjs)



# Api reference

## 🔸 ContextualPromptResult

jsonMultiple model



A result from a contextual prompt. Doesn't include the full context, for that you can find all results for a certain thread





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| isValidCalculated (optional) | boolean |  |
| isFake (optional) | boolean |  |
| contextualPromptSlug  | string |  |
| prompt_projectRelativePath (optional) | string |  |
| prompt (optional) | string |  |
| selectionString (optional) | string |  |
| isFavorite (optional) | boolean |  |
| resultText (optional) | string |  |
| resultAssets  | array |  |
| thread (optional) | string |  |
| noteContent (optional) | string |  |



## 🔸 ContextualPrompt

jsonSingle model




Model for prompting information from third party sources





Properties: 

 | Name | Type | Description |
|---|---|---|
| contextType (optional) | array |  |
| instantExecution (optional) | boolean |  |
| isFavorite (optional) | boolean |  |
| categoryStack (optional) | array |  |
| pricing (optional) | string |  |
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| title (optional) | string |  |
| description (optional) | string |  |
| scopeProjectRelativePath (optional) | string |  |
| model (optional) | object |  |
| promptContent  | string |  |
| folderContentContext (optional) | string |  |
| usesContext (optional) | boolean |  |
| usesSelection (optional) | boolean |  |
| usesAnyContext (optional) | boolean |  |



## 🔹 ContextualPromptsObject

Properties: 

 | Name | Type | Description |
|---|---|---|
| selectionContextualPrompts  | array |  |
| pageContextualPrompts  | array |  |
| folderContextualPrompts  | array |  |
| databaseContextualPromptSlugs  | array |  |



## 🔹 FolderContent

Properties: 

 | Name | Type | Description |
|---|---|---|
| isPrivate (optional) | boolean | Only accessible to admin |
| isSecret (optional) | boolean | Don't show in the file explorer if you don't have access to this file. NB: only works in combination with pricing or `.isPrivate: true` |
| isAnonymous (optional) | boolean |  |
| isDraft (optional) | boolean | If true, will not show up for read-only people |
| isPublic (optional) | boolean | If true, this file/folder will be available to the public |
| canRead_groupSlugs (optional) | array | If set, file content will not be available for people that aren't part of this group. |
| canWrite_groupSlugs (optional) | array |  |
| isAvailableFromDateAt (optional) | number | If this is a date in the future, the file won't be available until that date |
| name  | string |  |
| absolutePath  | string |  |
| projectRelativePath  | string |  |
| type  | string |  |
| canRead (optional) | boolean |  |
| canWrite (optional) | boolean |  |
| isFileCollection (optional) | boolean |  |
| names (optional) | array |  |



## 🔹 ProcessPromptFunctionResult

Same result to be expected from executing prompt for any language model





Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccessful  | boolean |  |
| message  | string |  |
| result (optional) | object |  |



## 📄 fileTypePerExtension (exported const)

## 🔸 AiDemoApp

jsonSingle model









Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| domain (optional) | string |  |
| headerTitle  | string |  |
| hasImageBoolean (optional) | boolean |  |
| headerSubtitle (optional) | string |  |
| headerCtaHref (optional) | string |  |
| headerCtaText (optional) | string |  |



## 🔹 CategoryChildObject

Properties: 

 | Name | Type | Description |
|---|---|---|
| category (optional) | string |  |
| categoryStack  | array |  |
| count  | number |  |
| name (optional) | string |  |
| title (optional) | string |  |
| description (optional) | string |  |
| pricing (optional) | string |  |
| children (optional) | array |  |



## 🔹 ContextualContent

Properties: 

 | Name | Type | Description |
|---|---|---|
| contextContent  | string |  |
| contextSelection (optional) | string |  |
| context_projectRelativeFilePath (optional) | string |  |



## 🔹 Transcription

What a `[filename].transcription.json` file might look like





Properties: 

 | Name | Type | Description |
|---|---|---|
| recordingType (optional) | string |  |
| usedModelName (optional) | string |  |
| words  | array |  |
| sentences  | array |  |
| translationText  | string |  |
| text  | string |  |
| snippets (optional) | array |  |
| speakerAmount (optional) | number |  |
| updatedAt  | number |  |
| updatedDate (optional) | string |  |
| updatedTime (optional) | string |  |


# Internal

<details><summary>Show internal (14)</summary>
    
  # 🔸 AiDataset

jsonMultiple model



AI datasets
example: https://pile.eleuther.ai/





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| name  | string |  |
| company (optional) | string |  |
| dataType  | string |  |
| description (optional) | string |  |
| sizeGb (optional) | number |  |
| url (optional) | string |  |
| isPublic (optional) | boolean |  |



## 🔸 AiModel

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| name  | string |  |
| company  | string |  |
| task  | string |  |
| description (optional) | string |  |
| notes (optional) | string |  |
| trainingCostUsd (optional) | number |  |
| isOpenSource (optional) | boolean |  |
| isModelPublic (optional) | boolean |  |
| canRunLocally (optional) | boolean |  |
| isGpuRequired (optional) | boolean |  |
| systemRequirements (optional) | string |  |
| paperUrl (optional) | string |  |
| githubUrl (optional) | string |  |
| hasApi (optional) | boolean |  |
| apiUrls (optional) | array |  |



## 🔹 ContextualPromptInfo

To be appended to the generated typescript





Properties: 

 | Name | Type | Description |
|---|---|---|
| contextType (optional) | array |  |
| instantExecution (optional) | boolean |  |
| isFavorite (optional) | boolean |  |
| categoryStack (optional) | array |  |
| pricing (optional) | string |  |



## 🔸 GptIdeasUser

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| email  | string |  |
| tier  | string |  |
| newsletter  | string |  |



## 🔹 LanguageModelEnum

## 🔹 PromptFunctionConfig

Special kind of function that executes a prompt with the use of a language model





Properties: 

 | Name | Type | Description |
|---|---|---|
| contextualPromptInfo  | object |  |
| config  | object |  |



## 🔹 RecordingType

`RecordingType` specifies the type of recording that was found

`audiobook`: Audio is an audiobook. Probably not easy to detect. Also, it's probably very time consuming. However, we might get a lot of information from the first chunk, and can already see if it's an audiobook based on that one. Stuff like "this is Audible" gives away a lot. (single chunk needed)

`music`: Audio is music. probably easy to detect for a classifier. Could be harder for LLM's, unless whisper outputs something like `[Music]` multiple times. (single chunk needed)

`conversation`: At least two speakers. This can be detected based on the thing that was said because usually there are questions and answers and it follows a dynamic pattern typical to conversations. Other AI classifiers could also be used like "amount of speaker detection"

`monologue`: Single speaker that says something

`code`: Audio is about code. This probably requires more postprocessing in order to do stuff with it.

`voicemail`: Audio is a text that looks like it is meant for someone or multiple people. This can be detected by a LLM by looking for things like "you" or names, etc, especially in the beginning and end.

other: None of the above. Could be nature sounds for example, or silent audio where nothing is said.

`unknown`: If it can't be known for sure after going through the entire transcript. Also happens if api isn't working.








## 🔹 TranscribedText

Type for a single transcription line





Properties: 

 | Name | Type | Description |
|---|---|---|
| startAt  | number |  |
| endAt  | number |  |
| text  | string |  |
| confidenceLevel (optional) | number |  |



## 🔹 WhisperConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| isWordSegments (optional) | boolean |  |
| isRetry (optional) | boolean |  |
| isVttOutputAdded (optional) | boolean |  |
| isSrtOutputAdded (optional) | boolean |  |
| audioFilePath  | object |  |
| prompt (optional) | string |  |
| model (optional) | string |  |
| translateToEnglish (optional) | boolean |  |
| language (optional) | string |  |
| isDebug (optional) | boolean |  |
| outputFolderPath (optional) | string |  |



## 🔹 WhisperLanguage

## 🔹 WhisperModelName

## 📄 languageModels (exported const)

## 📄 speechToTextModelNames (exported const)

## 📄 whisperModelNames (exported const)

  </details>

