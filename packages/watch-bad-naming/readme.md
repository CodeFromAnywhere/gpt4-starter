# Watch bad naming

watch-bad-naming (`OperationClassification` undefined)



# Api reference

# Tests

<details><summary>Show test information(3)</summary>
    
  # main()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 main (unexported const)

## 📄 p (unexported const)

  </details>

# Internal

<details><summary>Show internal (10)</summary>
    
  # exploreBadNamingFiles()

explore folder recursively, returning an array of filepaths that haven't applied the naming convention.

NB: sometimes the folder has bad names. In that case new folders/files need to be created, recursively.


| Input      |    |    |
| ---------- | -- | -- |
| absoluteFolderPath | string |  |
| **Output** |    |    |



## isBadName()

the path should not contain any spaces or other weird characters


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** | {  }   |    |



## renameAllBadlyNamedFiles()

Rename all badly named files in a folder


| Input      |    |    |
| ---------- | -- | -- |
| absoluteFolderPath | string |  |
| **Output** |    |    |



## renameBadlyNamedFile()

| Input      |    |    |
| ---------- | -- | -- |
| absoluteFilePath | string |  |
| **Output** |    |    |



## watchBadNaming()

Watcher for filenames/folders with capitalisation and spaces, to be renamed to the slugified version. ensure there is no overlap by other watchers.

TODO: the other watchers should ignore files if they have capitals or spaces. Maybe this can be fundamental part of the watcher with a prop like "isPrimary" which means it should be executed first, and a prop like "shouldOmitFromOtherWatchers" which means it will not be included in other watchers if it matches here.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { isSuccessful: boolean, <br />message: string, <br /> }   |    |



## 📄 exploreBadNamingFiles (exported const)

explore folder recursively, returning an array of filepaths that haven't applied the naming convention.

NB: sometimes the folder has bad names. In that case new folders/files need to be created, recursively.


## 📄 isBadName (exported const)

the path should not contain any spaces or other weird characters


## 📄 renameAllBadlyNamedFiles (exported const)

Rename all badly named files in a folder


## 📄 renameBadlyNamedFile (exported const)

## 📄 watchBadNaming (exported const)

Watcher for filenames/folders with capitalisation and spaces, to be renamed to the slugified version. ensure there is no overlap by other watchers.

TODO: the other watchers should ignore files if they have capitals or spaces. Maybe this can be fundamental part of the watcher with a prop like "isPrimary" which means it should be executed first, and a prop like "shouldOmitFromOtherWatchers" which means it will not be included in other watchers if it matches here.
  </details>

