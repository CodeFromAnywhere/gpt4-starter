# File collection util

file-collection-util (`OperationClassification` undefined)



# Api reference

## getFileCollectionPaths()

Finds all files with the same main name

Returns an array of absolute paths


| Input      |    |    |
| ---------- | -- | -- |
| absoluteFilePath | string |  |
| **Output** |    |    |



## 📄 getFileCollectionPaths (exported const)

Finds all files with the same main name

Returns an array of absolute paths


## getMarkdownIndex()

provide a path to a folder or a markdown file, and it will give you the beloning `MarkdownIndex`.

Uses `readme.md` for a folder.

It sources from both frontmatter as well as .MarkdownIndex.json until we can make the complete transition to frontmatter or the other (but this may take some time!)

NB: can be any file, it will always search for a markdownindex for the basename for that file... but preferably a .md file


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string |  |
| **Output** |    |    |



## isFileCollection()

| Input      |    |    |
| ---------- | -- | -- |
| absoluteFilePathA | string |  |,| absoluteFilePathB | string |  |
| **Output** | {  }   |    |



## renameFileCollection()

Rename all files part of the collection of a file mentioned into something else (looks at all files with the same rootname in the same folder, ommitting (sub)extensions.


Functionality:

- dryrun capability; first dryrun the rename file collection stuff
- ensures the file names to rename to doesn't already exist, return with error otherwise.
- if there's a file collection where there's one of the files that's a codefile, don't rename, warning! (ts, tsx, js, jsx, php, etc.)


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFilePath | string |  |,| newBaseName | string |  |,| config (optional) | { isDryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## 🔹 FileCollectionFile

Properties: 

 | Name | Type | Description |
|---|---|---|
| projectRelativePath  | string |  |
| name  | string |  |
| type  | string |  |
| actions (optional) | array |  |
| rawContent (optional) | string |  |



## 📄 getMarkdownIndex (exported const)

provide a path to a folder or a markdown file, and it will give you the beloning `MarkdownIndex`.

Uses `readme.md` for a folder.

It sources from both frontmatter as well as .MarkdownIndex.json until we can make the complete transition to frontmatter or the other (but this may take some time!)

NB: can be any file, it will always search for a markdownindex for the basename for that file... but preferably a .md file


## 📄 isFileCollection (exported const)

## 📄 renameFileCollection (exported const)

Rename all files part of the collection of a file mentioned into something else (looks at all files with the same rootname in the same folder, ommitting (sub)extensions.


Functionality:

- dryrun capability; first dryrun the rename file collection stuff
- ensures the file names to rename to doesn't already exist, return with error otherwise.
- if there's a file collection where there's one of the files that's a codefile, don't rename, warning! (ts, tsx, js, jsx, php, etc.)


## getFileCollectionBasename()

| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** | `String`   |    |



## getMarkdownIndexPath()

Returns the MarkdownIndex filePath related to any file

Only returns it if it exists if `shouldExist` is true


| Input      |    |    |
| ---------- | -- | -- |
| absoluteFilePath | string |  |,| shouldExist (optional) | boolean |  |
| **Output** | string   |    |



## 📄 getFileCollectionBasename (exported const)

## 📄 getMarkdownIndexPath (exported const)

Returns the MarkdownIndex filePath related to any file

Only returns it if it exists if `shouldExist` is true

# Internal

<details><summary>Show internal (15)</summary>
    
  # getOnlyUniqueFileCollectionsFromDirentsFilter()

Returns a filter function

Usage:

```ts
dirents.filter(getOnlyUniqueFileCollectionsFromDirentsFilter(absolutePath))
```


| Input      |    |    |
| ---------- | -- | -- |
| absoluteFolderPath | string |  |
| **Output** | {  }   |    |



## getPrimaryFileFromFileCollection()

For now, the first one is the primary one. May later change.


| Input      |    |    |
| ---------- | -- | -- |
| fileCollection | `FileCollection` |  |
| **Output** | string   |    |



## onlyUniqueFileCollectionsFilter()

filter for absolute file paths to get unique file collections


| Input      |    |    |
| ---------- | -- | -- |
| absoluteFilePath | string |  |,| index | number |  |,| self | string[] |  |
| **Output** | {  }   |    |



## readFolderFileCollections()

Returns an array of `FileCollection`s

important for ui as well as renaming as well as many other things!


| Input      |    |    |
| ---------- | -- | -- |
| absoluteBaseFolderPath | string |  |
| **Output** |    |    |



## renameFileCollectionWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativeFilePath | string |  |,| newBaseName | string |  |,| config (optional) | { isDryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## updateMarkdownIndex()

also takes frontmatter into account and places it in the right file (.MarkdownIndex.json) using `edit-json-file` and parsefrontmatter

NB: removes frontmatter from md for now to avoid duplication, assuming there's never anything else besides `MarkdownIndex` there.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 🔹 FileCollection

I'll later probably find more things to add here, but until that time, it's simply an array of filenames, where the first one is the primary one

- null: string






## 🔹 FileCollectionObject

## 🔹 RenameResult

Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| status  | string |  |
| newAbsolutePath (optional) | string |  |



## 📄 getOnlyUniqueFileCollectionsFromDirentsFilter (exported const)

Returns a filter function

Usage:

```ts
dirents.filter(getOnlyUniqueFileCollectionsFromDirentsFilter(absolutePath))
```


## 📄 getPrimaryFileFromFileCollection (exported const)

For now, the first one is the primary one. May later change.


## 📄 onlyUniqueFileCollectionsFilter (exported const)

filter for absolute file paths to get unique file collections


## 📄 readFolderFileCollections (exported const)

Returns an array of `FileCollection`s

important for ui as well as renaming as well as many other things!


## 📄 renameFileCollectionWithContext (exported const)

## 📄 updateMarkdownIndex (exported const)

also takes frontmatter into account and places it in the right file (.MarkdownIndex.json) using `edit-json-file` and parsefrontmatter

NB: removes frontmatter from md for now to avoid duplication, assuming there's never anything else besides `MarkdownIndex` there.
  </details>

