# Lock util

lock-util (`OperationClassification` undefined)



# Api reference

## lock()

either creates the lockfile if it didn't exist or it will update it with new updatedAt and status. If status isn't set, status will be removed


| Input      |    |    |
| ---------- | -- | -- |
| aboluteLockableFilePath | string |  |,| message | string |  |,| functionName (optional) | string |  |,| parameters (optional) | {  }[] |  |
| **Output** |    |    |



## 📄 lock (exported const)

either creates the lockfile if it didn't exist or it will update it with new updatedAt and status. If status isn't set, status will be removed


## lockError()

lock a file with a given error message


| Input      |    |    |
| ---------- | -- | -- |
| aboluteLockableFilePath | string |  |,| errorMessage | string |  |,| cleanupAt (optional) | number | Defaults to never |,| functionName (optional) | string |  |,| parameters (optional) | {  }[] |  |
| **Output** |    |    |



## unlock()

Removes lockfile based on the filepath of the file that shoul've been locked
NB: don't provide the path to the lockfile but the path to the file that the lock should be removed from


| Input      |    |    |
| ---------- | -- | -- |
| absoluteLockedFilePath | string |  |
| **Output** |    |    |



## 📄 lockError (exported const)

lock a file with a given error message


## 📄 unlock (exported const)

Removes lockfile based on the filepath of the file that shoul've been locked
NB: don't provide the path to the lockfile but the path to the file that the lock should be removed from


## isLocked()

| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** | {  }   |    |



## 📄 isLocked (exported const)

# Internal

<details><summary>Show internal (4)</summary>
    
  # getActionStatusFilePath()




| Input      |    |    |
| ---------- | -- | -- |
| absoluteFilePath | string |  |
| **Output** | `String`   |    |



## 📄 getActionStatusFilePath (exported const)

## 📄 lockfileSuffix (exported const)

## 📄 maximumLockTime (exported const)

  </details>

