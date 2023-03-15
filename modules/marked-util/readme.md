# Marked util

marked-util (`OperationClassification` cjs)



# Api reference

## findEmbeds()

find all embedded assets


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |
| **Output** | { alt: string, <br />src: string, <br />type: video / audio / image / text / other, <br /> }[]   |    |



## 📄 findEmbeds (exported const)

find all embedded assets


## findCodespans()

find all codespans


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |
| **Output** | string[]   |    |



## findLinks()

find all links


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |
| **Output** | { alt: string, <br />href: string, <br />type: video / audio / image / text / other, <br /> }[]   |    |



## 📄 findCodespans (exported const)

find all codespans


## 📄 findLinks (exported const)

find all links


## findCodeblocks()

find all codespans


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |
| **Output** | string[]   |    |



## 📄 findCodeblocks (exported const)

find all codespans

# Tests

<details><summary>Show test information(4)</summary>
    
  # findEmbedsTest()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## test()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 findEmbedsTest (unexported const)

## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (8)</summary>
    
  # findJsonInMarkdown()

For good accuracy, try to get a markdown with a single JSON, preferably without any other codespans.


| Input      |    |    |
| ---------- | -- | -- |
| text (optional) | string |  |
| **Output** |    |    |



## flattenMarkdownString()

find all items that match a token, recursively in all nested things


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }[]   |    |



## flattenMarkedTokenRecursive()

Recursively flatten a marked token and return something if a find function is met


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }[]   |    |



## trimCodeblock()

| Input      |    |    |
| ---------- | -- | -- |
| codeblock | string |  |
| **Output** |    |    |



## 📄 findJsonInMarkdown (exported const)

For good accuracy, try to get a markdown with a single JSON, preferably without any other codespans.


## 📄 flattenMarkdownString (exported const)

find all items that match a token, recursively in all nested things


## 📄 flattenMarkedTokenRecursive (exported const)

Recursively flatten a marked token and return something if a find function is met


## 📄 trimCodeblock (exported const)

  </details>

