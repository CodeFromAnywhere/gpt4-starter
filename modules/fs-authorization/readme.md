# Fs authorization

fs-authorization (`OperationClassification` undefined)



# Api reference

## getFsAuthorizationWithContext()

General purpose function to see what the rights are for any user for any folder in the file system (project relative only)

How it works: going from top of the fs (base folder path), to deepest folder, to file, checking authorization for every folder up until the file.


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativePath | string |  |,| isDebug (optional) | boolean |  |
| **Output** |    |    |



## 📄 getFsAuthorizationWithContext (exported const)

General purpose function to see what the rights are for any user for any folder in the file system (project relative only)

How it works: going from top of the fs (base folder path), to deepest folder, to file, checking authorization for every folder up until the file.


## getFsAuthorizationTestables()

Returns an array of objects containing `groupSlug`, `projectRelativePath` and a belonging `FunctionContext`, that can be used to run tests related to the `fs-authorization`


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 getFsAuthorizationTestables (exported const)

Returns an array of objects containing `groupSlug`, `projectRelativePath` and a belonging `FunctionContext`, that can be used to run tests related to the `fs-authorization`


## getFsAuthorizationSingleFile()

General purpose function to see what the rights are for any user for any file in the file system (project relative only)

NB: checks just the one file! Doesn't take into account underlying folders!


| Input      |    |    |
| ---------- | -- | -- |
| config | { projectRelativeFilePath: string, <br />user_groupSlugs: string[], <br />isDebug?: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 getFsAuthorizationSingleFile (exported const)

General purpose function to see what the rights are for any user for any file in the file system (project relative only)

NB: checks just the one file! Doesn't take into account underlying folders!

# Tests

<details><summary>Show test information(2)</summary>
    
  # test()

Test to ensure that the fs authorization works as expected.

Variables:

- role
- fs location

Tests
- all roles have access to different places as expected
- all `AuthorizationProperties` work as expected and map to the correct r/w
- both `.MarkdownIndex.json` as well as frontmatter works as expected (separate function, separate test)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 test (unexported const)

Test to ensure that the fs authorization works as expected.

Variables:

- role
- fs location

Tests
- all roles have access to different places as expected
- all `AuthorizationProperties` work as expected and map to the correct r/w
- both `.MarkdownIndex.json` as well as frontmatter works as expected (separate function, separate test)
  </details>

