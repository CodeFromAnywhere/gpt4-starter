# Os web

os-web (`OperationClassification` ui-web)


## 🔎 search

Search everywhere

NB: This is an experimental part of typerepo!



# Api reference

# Internal

<details><summary>Show internal (25)</summary>
    
  # `<DbAndUpsert />`

This should catch all dbQueryPaths because those aren't default ones


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## `<Flow />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<FormTab />`

### Tab 1: Function Form

Uses `<FunctionForm>` component

Executes the function directly or through API (depending on whether or not it is a node-only-function or bare JS)

Don't show this tab for JSX components


| Input      |    |    |
| ---------- | -- | -- |
| props | { tsFunction: `TsFunction`, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<FunctionExecutionTable />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { tsFunction?: `TsFunction`, <br />functionExecutions: `FunctionExecution`[], <br />type: example / test / recent, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<FunctionLayout />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { pageProps: {  }, <br />nextPage: {  }, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<FunctionPage />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## getTimelineItems()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## `<MyApp />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<MyLayout />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { pageProps: {  }, <br />nextPage: {  }, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## searchGetStaticProps()

NB: Does not include the search results themselves since they are user-dependent.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## `<Test />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## useMe()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { me: {  }, <br />isLoading: boolean, <br /> }   |    |



## 🔹 QueryPageProps

Properties: 

 | Name | Type | Description |
|---|---|---|
| query  | string |  |
| imagePaths  | array |  |
| timelineItems  | array |  |



## 📄 Flow (exported const)

## 📄 FormTab (exported const)

### Tab 1: Function Form

Uses `<FunctionForm>` component

Executes the function directly or through API (depending on whether or not it is a node-only-function or bare JS)

Don't show this tab for JSX components


## 📄 FunctionExecutionTable (exported const)

## 📄 FunctionLayout (exported const)

## 📄 FunctionPage (exported const)

## 📄 getTimelineItems (exported const)

## 📄 mindspaces (exported const)

## 📄 MyLayout (exported const)

## 📄 searchGetStaticProps (exported const)

NB: Does not include the search results themselves since they are user-dependent.


## 📄 { StoreProvider, useStore } (exported const)

## 📄 Test (exported const)

## 📄 useMe (exported const)

  </details>

