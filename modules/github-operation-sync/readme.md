# Github operation sync

github-operation-sync (`OperationClassification` node-cjs)



# Api reference

# Tests

<details><summary>Show test information(2)</summary>
    
  # updateAllOperationStatusTest()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 updateAllOperationStatusTest (unexported const)

  </details>

# Internal

<details><summary>Show internal (25)</summary>
    
  # getAllOperations()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getAllPackagesNames()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getGithubPersonalAccessToken()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getGithubRepoLastCommitInfo()

- see last commit datetime
- see if it's after `lastPullTime` yes or no?
- compare dates: `Operation.lastPullTime`, last file change in src, remote last commit time


| Input      |    |    |
| ---------- | -- | -- |
| repoName | string |  |,| personalAccessToken | string |  |
| **Output** |    |    |



## getRepoNameFromRepositoryUrl()

| Input      |    |    |
| ---------- | -- | -- |
| url | string |  |
| **Output** | string   |    |



## initializeGitOrUseExistingAndPull()

| Input      |    |    |
| ---------- | -- | -- |
| dir | string |  |,| remoteUrl | string |  |
| **Output** |    |    |



## operationGithubPull()

`git init` in operation
`git set remote` in there
`git pull --force`

set operation.repository indexation info

`mv .git .git.backup`


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |,| personalAccessToken (optional) | string | If you don't provide it we get it from the database |
| **Output** |    |    |



## operationGithubPush()

| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |
| **Output** |    |    |



## pullMultipleOperations()

| Input      |    |    |
| ---------- | -- | -- |
| operationNames | string[] |  |
| **Output** |    |    |



## pushMultipleOperations()

| Input      |    |    |
| ---------- | -- | -- |
| operationNames | string[] |  |
| **Output** |    |    |



## readAndWriteToPackageJsonExample()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## updateAllOperationStatus()

TODO: TEST, then run this every hour


| Input      |    |    |
| ---------- | -- | -- |
| dryrun (optional) | boolean |  |
| **Output** |    |    |



## 🔹 PushOperationResult

Properties: 

 | Name | Type | Description |
|---|---|---|
| success  | boolean |  |
| message  | string |  |
| data  | object |  |



## 📄 getAllOperations (exported const)

## 📄 getAllPackagesNames (exported const)

## 📄 getGithubPersonalAccessToken (exported const)

## 📄 getGithubRepoLastCommitInfo (exported const)

- see last commit datetime
- see if it's after `lastPullTime` yes or no?
- compare dates: `Operation.lastPullTime`, last file change in src, remote last commit time


## 📄 getRepoNameFromRepositoryUrl (exported const)

## 📄 initializeGitOrUseExistingAndPull (exported const)

## 📄 operationGithubPull (exported const)

`git init` in operation
`git set remote` in there
`git pull --force`

set operation.repository indexation info

`mv .git .git.backup`


## 📄 operationGithubPush (exported const)

## 📄 pullMultipleOperations (exported const)

## 📄 pushMultipleOperations (exported const)

## 📄 readAndWriteToPackageJsonExample (exported const)

## 📄 updateAllOperationStatus (exported const)

TODO: TEST, then run this every hour
  </details>

