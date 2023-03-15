# Writer functions

writer-functions (`OperationClassification` node-cjs)



# Api reference

## getFrontmatterSchema()

Gets the frontmatterSchema of any markdown model. This should contain all elements that are required to be in the frontmatter of the markdown


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 getFrontmatterSchema (exported const)

Gets the frontmatterSchema of any markdown model. This should contain all elements that are required to be in the frontmatter of the markdown

# Internal

<details><summary>Show internal (30)</summary>
    
  # copyPathWithContext()

Creates a copy of a file


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativePath | string |  |
| **Output** |    |    |



## deleteFileOrFolderWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativePath | string |  |
| **Output** |    |    |



## fileExplorerOpen()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string |  |
| **Output** |    |    |



## getFileContentsWithContext()

Gets the contents of a file in the project


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativeFilePath | string |  |
| **Output** |    |    |



## getWriterWebPagesMenu()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getWriterWebPages()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## movePathWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativePath | string | Can be file only for now |,| projectRelativeNewFolderPath (optional) | string |  |
| **Output** |    |    |



## newFileWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativeFilePath | string |  |
| **Output** |    |    |



## newFolderWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativeFolderBasePath | string |  |,| folderName (optional) | string |  |
| **Output** |    |    |



## openFinder()

Opens a file or folder in finder (admin only)


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string |  |
| **Output** |    |    |



## processAssetUploadWithContext()

Used for the markdown reader to immediately process a asset upload. If we want to validate this, it would be good to allow a second parameter that checks if you have access to the file


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativeFolderPath (optional) | string |  |,| assets (optional) | `BackendAsset`[] |  |
| **Output** |    |    |



## renameFileOrFolderWithContext()

function for renames of SINGLE files or folders. Not suitable for file collections.


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativePath | string |  |,| newName (optional) | string |  |
| **Output** |    |    |



## saveFileContentsWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## trashFileOrFolderWithContext()

NB: only would work with an ESM module, but I don't have time for this now. Later this could replace `deleteFileOrFolder`


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativePath | string |  |
| **Output** |    |    |



## updateFrontmatterWithContext()

Update frontmatter from a markdownfile by overwriting it, keeping old values that you don't change

If you provide a folder as projectRelativePath, it stores it to readme.md in that folder, even if that doens't exist.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 copyPathWithContext (exported const)

Creates a copy of a file


## 📄 deleteFileOrFolderWithContext (exported const)

## 📄 fileExplorerOpen (exported const)

## 📄 getFileContentsWithContext (exported const)

Gets the contents of a file in the project


## 📄 getWriterWebPagesMenu (exported const)

## 📄 getWriterWebPages (exported const)

## 📄 movePathWithContext (exported const)

## 📄 newFileWithContext (exported const)

## 📄 newFolderWithContext (exported const)

## 📄 openFinder (exported const)

Opens a file or folder in finder (admin only)


## 📄 processAssetUploadWithContext (exported const)

Used for the markdown reader to immediately process a asset upload. If we want to validate this, it would be good to allow a second parameter that checks if you have access to the file


## 📄 renameFileOrFolderWithContext (exported const)

function for renames of SINGLE files or folders. Not suitable for file collections.


## 📄 saveFileContentsWithContext (exported const)

## 📄 trashFileOrFolderWithContext (exported const)

NB: only would work with an ESM module, but I don't have time for this now. Later this could replace `deleteFileOrFolder`


## 📄 updateFrontmatterWithContext (exported const)

Update frontmatter from a markdownfile by overwriting it, keeping old values that you don't change

If you provide a folder as projectRelativePath, it stores it to readme.md in that folder, even if that doens't exist.
  </details>

