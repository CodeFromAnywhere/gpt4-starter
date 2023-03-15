# Explorer ui

explorer-ui (`OperationClassification` undefined)



# Api reference

## 📄 explorerInitialValues (exported const)

## `<Explorer />`

Explorer with 5 different modes


| Input      |    |    |
| ---------- | -- | -- |
| props | {  } |  |
| **Output** | `JSX.Element`   |    |



## 📄 Explorer (exported const)

Explorer with 5 different modes


## `<SettingsPage />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 SettingsPage (exported const)

# Internal

<details><summary>Show internal (24)</summary>
    
  # `<ContentSearch />`

TODO:
Make another API that goes through `*.MarkdownIndex.json?summary`, and another one that goes through all file contents. (). Super direct layer on explore for files. Not per letter, per search. Does need include/exclude capability

Use the same `PathSearchResults` but augment it to show the matches in the file/summary content. Links to open the file collection.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<FolderMenu />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<FoldersPiece />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { explorableBasePathsActive?: { href: string, <br />isActive: boolean, <br />projectRelativePath: string, <br />name: string, <br /> }[], <br />isFolder?: boolean, <br />queryPath: string, <br />filename?: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<NavButton />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<PathSearch />`

Use `api.getExplorableFilesWithContext` with `PathSearchResults` component


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<QueueStatusComponent />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<RecentPinned />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<SearchBar />`

Special explorer searchbar

- When in path search mode, immediately give result (frontend render)
- When in any other search mode, start search when you hit enter


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<SearchResultComponent />`

If you click on a site that up and running, it should startup via pm2 before being redirected there


| Input      |    |    |
| ---------- | -- | -- |
| props | { searchResult: `SearchResult`, <br />index: number, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<SearchResultPage />`

LLM search (getAllSearchResultsWithContext) which includes db, functions, interfaces, etc.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## setConfig()

| Input      |    |    |
| ---------- | -- | -- |
| apiUrl | string |  |,| disableAdmin | boolean |  |,| customCustomProjectRelativeBasePaths | string[] | TITLE: CustomProject relative base path of your file system to show |
| **Output** |    |    |



## 📄 ContentSearch (exported const)

TODO:
Make another API that goes through `*.MarkdownIndex.json?summary`, and another one that goes through all file contents. (). Super direct layer on explore for files. Not per letter, per search. Does need include/exclude capability

Use the same `PathSearchResults` but augment it to show the matches in the file/summary content. Links to open the file collection.


## 📄 explorerSearchTypes (exported const)

## 📄 FolderMenu (exported const)

## 📄 FoldersPiece (exported const)

## 📄 NavButton (exported const)

## 📄 PathSearch (exported const)

Use `api.getExplorableFilesWithContext` with `PathSearchResults` component


## 📄 QueueStatusComponent (exported const)

## 📄 RecentPinned (exported const)

## 📄 SearchBar (exported const)

Special explorer searchbar

- When in path search mode, immediately give result (frontend render)
- When in any other search mode, start search when you hit enter


## 📄 SearchResultComponent (exported const)

If you click on a site that up and running, it should startup via pm2 before being redirected there


## 📄 SearchResultPage (exported const)

LLM search (getAllSearchResultsWithContext) which includes db, functions, interfaces, etc.


## 📄 setConfig (exported const)

## 📄 { StoreProvider, useStore } (exported const)

TODO: Remove some of all of these things, not needed so much
  </details>

