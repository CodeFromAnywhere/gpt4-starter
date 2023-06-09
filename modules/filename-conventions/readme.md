# Filename conventions

filename-conventions (`OperationClassification` cjs)

Any functions and variables related to filename conventions




# Api reference

## 📄 databaseFolderName (exported const)

## 📄 generatedFolders (exported const)

## 🔹 FileType

## 🔹 SearchableExtension

## 📄 buildFolderName (exported const)

## 📄 sourceFolderName (exported const)

## getFileTypeFromPath()

| Input      |    |    |
| ---------- | -- | -- |
| path (optional) | string |  |
| **Output** | other / code / data / text   |    |



## hasSubExtension()

Returns true if a fileid includes one of the specified subextensions.


| Input      |    |    |
| ---------- | -- | -- |
| srcRelativeFileId | string |  |,| subExtensions | {  } |  |,| includeRootName (optional) | boolean | if true, also returns true if the extension is the complete name of the file |
| **Output** | {  }   |    |



## isGeneratedOperationName()

| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |
| **Output** |    |    |



## isIndexableFileId()

| Input      |    |    |
| ---------- | -- | -- |
| fileId | string |  |
| **Output** | {  }   |    |



## 📄 extensions (exported const)

## 📄 getFileTypeFromPath (exported const)

## 📄 hasSubExtension (exported const)

Returns true if a fileid includes one of the specified subextensions.


## 📄 isGeneratedOperationName (exported const)

## 📄 isIndexableFileId (exported const)

## getWriterType()

Gets the writer type based on the extension


| Input      |    |    |
| ---------- | -- | -- |
| extension (optional) | string |  |
| **Output** | typescript / markdown / other   |    |



## isGeneratedOperation()

| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string |  |
| **Output** |    |    |



## 🔹 SearchLevel

## 🔹 WriterType

Type of content that can be interpreted by the `writer-input`








## 📄 allowedSearchContentExtensions (exported const)

## 📄 fileTypes (exported const)

## 📄 frontendOptionalFileSubExtensions (exported const)

these special operations are generated, so should not be copied, but should be generated in the bundle after everything is copied


## 📄 getWriterType (exported const)

Gets the writer type based on the extension


## 📄 isGeneratedOperation (exported const)

## 📄 jsonExtensions (exported const)

## 📄 markdownExtensions (exported const)

## 📄 movedFileSubextension (exported const)

subextension indicating that a file has been moved to another location

For example, used in `watchAppleMemos`


## 📄 projectRelativeGeneratedOperationsFolder (exported const)

## 📄 temporaryConvertedSubextension (exported const)

This is a temporary file for conversion with ffmpeg (see ffmpeg-util)


## 📄 typescriptExtensions (exported const)

# Internal

<details><summary>Show internal (8)</summary>
    
  # 🔹 DropboxExtension

these filetypes should never be opened with explore. They should be processed and either indexed or converted. This creates a md or json with the proper metadata, which, in turn, can be explored.








## 🔹 JsonExtension

## 🔹 MarkdownExtension

## 🔹 TypescriptExtension

## 📄 jsonExtensionsConst (exported const)

## 📄 markdownExtensionsConst (exported const)

## 📄 operationUnindexableNamesOrSubExtensions (exported const)

## 📄 typescriptExtensionsConst (exported const)

  </details>

