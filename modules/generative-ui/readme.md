# Generative ui

generative-ui (`OperationClassification` ui-esm)



# Api reference

## 📄 generativeWebInitialValues (exported const)

## `<FileCollectionPage />`

Whenever you come back to the browser, some weird shit happens


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 FileCollectionPage (exported const)

Whenever you come back to the browser, some weird shit happens

# Internal

<details><summary>Show internal (41)</summary>
    
  # `<ContextMenuItemComponent />`




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<Dataset />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<Details />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<FileActions />`

TODO: finish actions, ensure the refething is also working

Actions for every text-file

- Save
- Open in VSCode, TextEdit
- Copy text content
- Run ts file with node (if testfile) or to open terminal in folder (for any other file)


| Input      |    |    |
| ---------- | -- | -- |
| props | { projectRelativeFilePath: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<FileCollectionActions />`

All actions should refetch the required stuff

Permissions button

Rename/move button for file-collections

Delete entire file-collection


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<FileSpecificPrompts />`

Component to render all the prompts under a file


| Input      |    |    |
| ---------- | -- | -- |
| props | { contentString: string, <br />actualProjectRelativeFilePath?: string, <br />contextualPromptsObject?: {  }, <br />isFolder?: boolean, <br />thePrompts?: `ContextualPrompt`[], <br />markdown?: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<FileWriter />`

Can probably not stay like this if we want to place the save-button elsewhere.


| Input      |    |    |
| ---------- | -- | -- |
| props | { projectRelativeFilePath: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## getReaderPageInfo()

| Input      |    |    |
| ---------- | -- | -- |
| isFolder (optional) | boolean |  |,| contextualPromptsObject (optional) | {  } |  |,| contextualPromptResults (optional) | {  } |  |
| **Output** | { thePrompts: {  }, <br />selectionContextualPromptResults: {  }, <br />fileContextualPromptResults: {  }, <br /> }   |    |



## `<MyLayout />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { pageProps: {  }, <br />nextPage: {  }, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<NavButton />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## openDownload()

Download a file or folder


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string |  |
| **Output** |    |    |



## `<PromptButton />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { item: `ContextualPrompt`, <br />markdown?: string, <br />contextSelection?: string, <br />projectRelativeFilePath?: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<PromptViewer />`

Markdown files should have the ability to do prompts, like before...

- Fix PromptViewer
- Add PromptViewer to TextFile


| Input      |    |    |
| ---------- | -- | -- |
| props | { markdown?: string, <br />projectRelativeFilePath: string, <br />contextualPromptResults?: `ContextualPromptResult`[], <br />contextualPrompts?: `ContextualPrompt`[], <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<SelectionPrompts />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<TextFile />`

TODO: Add monaco editor


| Input      |    |    |
| ---------- | -- | -- |
| props | { item: `FileCollectionFile`, <br />index: number, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<TextWriter />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { height?: number, <br />text: string, <br />tooltip?: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<TranscriptionPlayer />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## useOnFocus()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## useVariantResult()

| Input      |    |    |
| ---------- | -- | -- |
| fileContextualPromptResults (optional) | {  } |  |
| **Output** |    |    |



## `<VariantSelector />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { projectRelativeFilePath?: string, <br />folderPath: string, <br />isFolder?: boolean, <br />filename?: string, <br />contextualPromptResults?: `ContextualPromptResult`[], <br /> } |  |
| **Output** | `JSX.Element`   |    |



## 📄 ContextMenuItemComponent (exported const)

## 📄 Dataset (exported const)

## 📄 Details (exported const)

## 📄 FileActions (exported const)

TODO: finish actions, ensure the refething is also working

Actions for every text-file

- Save
- Open in VSCode, TextEdit
- Copy text content
- Run ts file with node (if testfile) or to open terminal in folder (for any other file)


## 📄 FileCollectionActions (exported const)

All actions should refetch the required stuff

Permissions button

Rename/move button for file-collections

Delete entire file-collection


## 📄 FileSpecificPrompts (exported const)

Component to render all the prompts under a file


## 📄 FileWriter (exported const)

Can probably not stay like this if we want to place the save-button elsewhere.


## 📄 getReaderPageInfo (exported const)

## 📄 MyLayout (exported const)

## 📄 NavButton (exported const)

## 📄 openDownload (exported const)

Download a file or folder


## 📄 PromptButton (exported const)

## 📄 PromptViewer (exported const)

Markdown files should have the ability to do prompts, like before...

- Fix PromptViewer
- Add PromptViewer to TextFile


## 📄 SelectionPrompts (exported const)

## 📄 { StoreProvider, useStore } (exported const)

## 📄 TextFile (exported const)

TODO: Add monaco editor


## 📄 TextWriter (exported const)

## 📄 TranscriptionPlayer (exported const)

## 📄 useOnFocus (exported const)

## 📄 useVariantResult (exported const)

## 📄 VariantSelector (exported const)

  </details>

