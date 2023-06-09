# Get path

get-path (`OperationClassification` cjs)

Useful functions to get paths within King OS.

Depends on `sdk-operations`, which makes it only work inside of a typerepo.




# Api reference

## getProjectRoot()

returns project root folder path

recursive. goes up until it finds a folder that's the project root

if no source path is given, uses the directory name where the function is executed from as a starting point


| Input      |    |    |
| ---------- | -- | -- |
| fullSourcePath (optional) | string |  |
| **Output** | string   |    |



## 📄 getProjectRoot (exported const)

returns project root folder path

recursive. goes up until it finds a folder that's the project root

if no source path is given, uses the directory name where the function is executed from as a starting point


## getOperationPath()

Gets a path of any operation in the project

NB: relies on `sdk-operations` 100%


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string | specify the operation folder name |,| config (optional) | { manualProjectRoot?: string, <br />notUseSdk?: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 getOperationPath (exported const)

## findOperationBasePath()

| Input      |    |    |
| ---------- | -- | -- |
| startPath | string |  |
| **Output** | string   |    |



## getRootPath()

Gets project path, or a folder in the root that is convention


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | string   |    |



## 📄 findOperationBasePath (exported const)

## 📄 getRootPath (exported const)

## getPathsWithOperations()

returns an array of all (absolute) paths containing operations

for a bundled project, that means /apps, /packages, /modules

for the OS project, that means /operations/tools and /operations/niches


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br /> } |  |
| **Output** | string[]   |    |



## 📄 getPathsWithOperations (exported const)

returns an array of all (absolute) paths containing operations

for a bundled project, that means /apps, /packages, /modules

for the OS project, that means /operations/tools and /operations/niches


## getSrcRelativeFileId()

returns a file id (path without extension) relative to the src folder of an operation

e.g. "general" for src/general.ts

NB: assumes all src is in the src folder

NB: removes "/" in the beginning, if found


| Input      |    |    |
| ---------- | -- | -- |
| operationRelativePath | string |  |
| **Output** |    |    |



## isBundle()

| Input      |    |    |
| ---------- | -- | -- |
| folderPath (optional) | string |  |
| **Output** | {  }   |    |



## 📄 getSrcRelativeFileId (exported const)

returns a file id (path without extension) relative to the src folder of an operation

e.g. "general" for src/general.ts

NB: assumes all src is in the src folder

NB: removes "/" in the beginning, if found


## 📄 isBundle (exported const)

## getOperationClassification()

Returns `OperationClassification` if it's an operation, or undefined if it's not

NB: don't confuse this with `ImportClassification`


| Input      |    |    |
| ---------- | -- | -- |
| folderPath | string |  |
| **Output** |    |    |



## 📄 getOperationClassification (exported const)

Returns `OperationClassification` if it's an operation, or undefined if it's not

NB: don't confuse this with `ImportClassification`


## getSubExtensions()

| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |,| config (optional) | { allowAllSubExtensions?: boolean, <br /> } |  |
| **Output** | string[]   |    |



## 📄 getSubExtensions (exported const)

## getOperationRelativePath()

something like src/xxx/xxx/x.ts (no slash at start)


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |,| operationBasePath | string |  |
| **Output** |    |    |



## 📄 getOperationRelativePath (exported const)

something like src/xxx/xxx/x.ts (no slash at start)


## getOperationClassificationObject()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getOperationPathParse()

get all operation-related path information that can be inferred from the path

NB: currently it also looks up the operation name from its packagejson


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** |    |    |



## getPathParse()

gets all kinds of information that can be inferred from any path (file or folder).


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** | { relativePathFromProjectRoot: string, <br /> }   |    |



## 📄 getOperationClassificationObject (exported const)

## 📄 getOperationPathParse (exported const)

get all operation-related path information that can be inferred from the path

NB: currently it also looks up the operation name from its packagejson


## 📄 getPathParse (exported const)

gets all kinds of information that can be inferred from any path (file or folder).


## getRelativeLinkPath()

returns a relative link between two files


| Input      |    |    |
| ---------- | -- | -- |
| absoluteFromFilePath | string |  |,| absoluteToFilePath | string |  |,| debug (optional) | boolean |  |
| **Output** | `String`   |    |



## isOperation()

Checks whether or not an absolute path contains an operation. The only check it's doing is that the folder must contain both a package.json as well as a tsconfig.json


| Input      |    |    |
| ---------- | -- | -- |
| absoluteFolderPath | string |  |
| **Output** | {  }   |    |



## 🔹 OperationClassificationObject

## 📄 getRelativeLinkPath (exported const)

returns a relative link between two files


## 📄 isOperation (exported const)

Checks whether or not an absolute path contains an operation. The only check it's doing is that the folder must contain both a package.json as well as a tsconfig.json

# Tests

<details><summary>Show test information(2)</summary>
    
  # test()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (28)</summary>
    
  # findFolderWhereMatch()

recursive. goes up a folder until it finds a package.json


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { folderPath: string, <br />matchResult: {  }, <br /> }   |    |



## findOperationBasePathWithClassification()

recursive. goes up until it finds a folder that's an operation

because it had to read the package.json anyway, it's returning the operation classification as well


| Input      |    |    |
| ---------- | -- | -- |
| startPath | string |  |
| **Output** | { folderPath: string, <br />classification: {  }, <br /> }   |    |



## getAllPackageJsonDependencies()

| Input      |    |    |
| ---------- | -- | -- |
| operation | `Operation` |  |
| **Output** | string[]   |    |



## getCommonAncestorMultiple()

| Input      |    |    |
| ---------- | -- | -- |
| paths | string[] |  |
| **Output** |    |    |



## getCommonAncestor()

Finds the common ancestor for two absolute pahts


| Input      |    |    |
| ---------- | -- | -- |
| path1 | string |  |,| path2 | string |  |
| **Output** | `String`   |    |



## getFolderPath()

| Input      |    |    |
| ---------- | -- | -- |
| fileOrFolderPath | string |  |
| **Output** |    |    |



## getRelativePath()

gets the relative path from a specified root

will start with "/"


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |,| relativeFrom | string |  |
| **Output** |    |    |



## hasDependency()

| Input      |    |    |
| ---------- | -- | -- |
| operation | `Operation` |  |,| dependency | string |  |
| **Output** |    |    |



## isUiOperation()

| Input      |    |    |
| ---------- | -- | -- |
| tsconfig | {  } |  |,| packageJson | {  } |  |
| **Output** |    |    |



## isWorkspaceRoot()

simple sync function to check if a folder is the root of a workspace (not operation but a workspace)


| Input      |    |    |
| ---------- | -- | -- |
| folderPath | string |  |
| **Output** | { isBundle: boolean, <br />isWorkspaceRoot: boolean, <br /> }   |    |



## packageCompilesTs()

| Input      |    |    |
| ---------- | -- | -- |
| packageJson | {  } |  |
| **Output** |    |    |



## tsconfigCompilesEsm()

| Input      |    |    |
| ---------- | -- | -- |
| tsconfig | `TsConfig` |  |
| **Output** | {  }   |    |



## 📄 findFolderWhereMatch (exported const)

recursive. goes up a folder until it finds a package.json


## 📄 findOperationBasePathWithClassification (exported const)

recursive. goes up until it finds a folder that's an operation

because it had to read the package.json anyway, it's returning the operation classification as well


## 📄 getAllPackageJsonDependencies (exported const)

## 📄 getCommonAncestorMultiple (exported const)

## 📄 getCommonAncestor (exported const)

Finds the common ancestor for two absolute pahts


## 📄 getFolderPath (exported const)

## 📄 getRelativePath (exported const)

gets the relative path from a specified root

will start with "/"


## 📄 hasDependency (exported const)

## 📄 isUiOperation (exported const)

## 📄 isWorkspaceRoot (exported const)

simple sync function to check if a folder is the root of a workspace (not operation but a workspace)


## 📄 osRootFoldersConst (exported const)

can only be accessed in the OS


## 📄 osRootFolders (exported const)

## 📄 packageCompilesTs (exported const)

## 📄 projectRootFoldersConst (exported const)

can be accessed in projects as well as in the OS


## 📄 projectRootFolders (exported const)

## 📄 tsconfigCompilesEsm (exported const)

  </details>

