# File collection functions

file-collection-functions (`OperationClassification` undefined)



# Api reference

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

<details><summary>Show internal (20)</summary>
    
  # getFileCollectionPathsWithContext()




| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| queryPath | string |  |
| **Output** |    |    |



## getFileCollectionStatusWithContext()

Separate function because it needs to be refetched more frequently than the filecollection itself.


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativeFilePath | string |  |
| **Output** |    |    |



## getFileCollectionWithContext()

Returns a file collection as an array of files with either the raw string or a path to download a blob



TODO: put this back, only for markdown files (they can be augmented). Is this the right place though?

```ts

const augmentedResult = await augmentMarkdown(fileContentString, {
for now no code yet, it's too slow
augmentCode: false,
augmentContextualPrompts: false,
augmentContextualPromptResults: true,
augmentStatements: true,
augmentWords: true,
externalHost: undefined,
markdown_projectRelativeFilePath: makeRelative(
finalAbsolutePath,
projectRoot
),
});
```


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| queryPath | string | file or folder path of which you want to see the file collection |
| **Output** |    |    |



## getFolderContents()

For a folder, this function gets all folders in there, then one file per collection, in an efficient manner.

Also provides information on whether it's a filecollection and which other files are there.


| Input      |    |    |
| ---------- | -- | -- |
| absoluteFolderPath | string |  |
| **Output** |    |    |



## getFolderFileCollections()

| Input      |    |    |
| ---------- | -- | -- |
| absoluteFolderPath | string |  |,| projectRoot | string |  |,| user_groupSlugs | string[] |  |
| **Output** |    |    |



## getNavigationWithContext()

DONE:

- ✅ Test If a file/folder doesn't exist, it shows it weirdly as if it were a folder. This should not happen
- ✅ fix the rest.
- ✅ get MarkdownIndex, even if the file collection filter filters out the md file.
- ✅ ensure `getFolderFileCollection` works
- ✅ generateSdkOperations
- ✅ folders arent' found!!! Fix this
- ✅ name of file should be with the most prominent extension, but sometimes not even needed. this should be super custom
- ✅ confirm that authorizations work correctly. for now, only admin can use explorer and other search... all roles can use `getNavigationWithContext`


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| config | { customProjectRelativeBaseFolderPath?: string, <br />queryPath: string, <br /> } |  |
| **Output** |    |    |



## getOpenFilesWithContext()

Returns the open files of the user


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |
| **Output** |    |    |



## getQueryInfo()

General purpose function to go from a queryPath to an actual file and/or folder-path.


| Input      |    |    |
| ---------- | -- | -- |
| config | { customProjectRelativeBaseFolderPath?: string, <br />queryPath: string, <br /> } |  |
| **Output** |    |    |



## removeInactiveOpenFiles()

Cleans up the open files by removing the ones that aren't "pinned" or "open" and also haven't been opened for over a day. This means they don't need to appear in the search results anymore


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## setOpenFileWithContext()

Apply a state


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| queryPath | string |  |,| action | pin / unpin / open / close |  |
| **Output** |    |    |



## 📄 getFileCollectionPathsWithContext (exported const)

## 📄 getFileCollectionStatusWithContext (exported const)

Separate function because it needs to be refetched more frequently than the filecollection itself.


## 📄 getFileCollectionWithContext (exported const)

Returns a file collection as an array of files with either the raw string or a path to download a blob



TODO: put this back, only for markdown files (they can be augmented). Is this the right place though?

```ts

const augmentedResult = await augmentMarkdown(fileContentString, {
for now no code yet, it's too slow
augmentCode: false,
augmentContextualPrompts: false,
augmentContextualPromptResults: true,
augmentStatements: true,
augmentWords: true,
externalHost: undefined,
markdown_projectRelativeFilePath: makeRelative(
finalAbsolutePath,
projectRoot
),
});
```


## 📄 getFolderContents (exported const)

For a folder, this function gets all folders in there, then one file per collection, in an efficient manner.

Also provides information on whether it's a filecollection and which other files are there.


## 📄 getFolderFileCollections (exported const)

## 📄 getNavigationWithContext (exported const)

DONE:

- ✅ Test If a file/folder doesn't exist, it shows it weirdly as if it were a folder. This should not happen
- ✅ fix the rest.
- ✅ get MarkdownIndex, even if the file collection filter filters out the md file.
- ✅ ensure `getFolderFileCollection` works
- ✅ generateSdkOperations
- ✅ folders arent' found!!! Fix this
- ✅ name of file should be with the most prominent extension, but sometimes not even needed. this should be super custom
- ✅ confirm that authorizations work correctly. for now, only admin can use explorer and other search... all roles can use `getNavigationWithContext`


## 📄 getOpenFilesWithContext (exported const)

Returns the open files of the user


## 📄 getQueryInfo (exported const)

General purpose function to go from a queryPath to an actual file and/or folder-path.


## 📄 removeInactiveOpenFiles (exported const)

Cleans up the open files by removing the ones that aren't "pinned" or "open" and also haven't been opened for over a day. This means they don't need to appear in the search results anymore


## 📄 setOpenFileWithContext (exported const)

Apply a state
  </details>

