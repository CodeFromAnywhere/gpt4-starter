# Person util

person-util (`OperationClassification` undefined)



# Api reference

## isPortUsed()

Checks if a port is used or not


| Input      |    |    |
| ---------- | -- | -- |
| port | number |  |
| **Output** |    |    |



## personAttachInheritedGroups()

This special map function attaches all groups (including public and inherited) for a person, on top of just the ones that are found int `Person.groupSlugs` (if any)


| Input      |    |    |
| ---------- | -- | -- |
| person | `Person` |  |,| groups | `Group`[] |  |
| **Output** | {  }   |    |



## 📄 isPortUsed (exported const)

Checks if a port is used or not


## 📄 personAttachInheritedGroups (exported const)

This special map function attaches all groups (including public and inherited) for a person, on top of just the ones that are found int `Person.groupSlugs` (if any)

# Tests

<details><summary>Show test information(2)</summary>
    
  # main()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 main (unexported const)

  </details>

# Internal

<details><summary>Show internal (2)</summary>
    
  # getAllGroupsIncludingInheritedRecursive()

From all `Group`s in the db, takes all groupSlugs, and recursively executes this again for all inherited groupSlugs found on the groups that are shown in the second parameter.

Also adds the special group `public`


| Input      |    |    |
| ---------- | -- | -- |
| groups | `Group`[] |  |,| groupSlugs (optional) | string[] |  |
| **Output** | {  }[]   |    |



## 📄 getAllGroupsIncludingInheritedRecursive (exported const)

From all `Group`s in the db, takes all groupSlugs, and recursively executes this again for all inherited groupSlugs found on the groups that are shown in the second parameter.

Also adds the special group `public`
  </details>

