# Search fs

search-fs (`OperationClassification` undefined)



# Api reference

## getExplorableBasePathsWithContext()

Get the readable and writeable basePaths of any user (project relative)

If you're not signed in as a person, this function will return an empty array

Basepaths need to be:

- If you're admin, all files everywhere, `root` is visible, is `/`
- user has is `/knowledge/persons/[slug]`
- for every group you're in, there should be a button leading to `/knowledge/groups/[slug]`


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |
| **Output** | { projectRelativePath: string, <br />name: string, <br /> }[]   |    |



## 📄 getExplorableBasePathsWithContext (exported const)

Get the readable and writeable basePaths of any user (project relative)

If you're not signed in as a person, this function will return an empty array

Basepaths need to be:

- If you're admin, all files everywhere, `root` is visible, is `/`
- user has is `/knowledge/persons/[slug]`
- for every group you're in, there should be a button leading to `/knowledge/groups/[slug]`

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

<details><summary>Show internal (8)</summary>
    
  # getAllSearchResultsWithContext()

Searches filepaths, then links to any `ui-web` that has this file available as a page, or VSCode.

For this we need to get the `MarkdownReaderPage` and other pages that are available in ui's and see the files they are linked to.

I want to be able to:

- search functions, interfaces, variables
- search operations
- search markdown files, anywhere
- search db-ui models

TODO: Think about other things needed for the search, like LLM queries


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| query | string |  |
| **Output** |    |    |



## getExplorableDbModels()

| Input      |    |    |
| ---------- | -- | -- |
| query | string |  |,| groupSlugs | string[] |  |
| **Output** |    |    |



## getExplorableFilesWithContext()

Gets explorable file collections...


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| query (optional) | string |  |
| **Output** |    |    |



## getFunctions()

| Input      |    |    |
| ---------- | -- | -- |
| query | string |  |,| groupSlugs | string[] |  |
| **Output** |    |    |



## 📄 getAllSearchResultsWithContext (exported const)

Searches filepaths, then links to any `ui-web` that has this file available as a page, or VSCode.

For this we need to get the `MarkdownReaderPage` and other pages that are available in ui's and see the files they are linked to.

I want to be able to:

- search functions, interfaces, variables
- search operations
- search markdown files, anywhere
- search db-ui models

TODO: Think about other things needed for the search, like LLM queries


## 📄 getExplorableDbModels (exported const)

## 📄 getExplorableFilesWithContext (exported const)

Gets explorable file collections...


## 📄 getFunctions (exported const)

  </details>

