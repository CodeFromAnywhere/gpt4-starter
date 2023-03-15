# Types

types (`OperationClassification` undefined)



# Api reference

## 🔹 TypeInfo

all info that should always be collected when indexing any type interface





Properties: 

 | Name | Type | Description |
|---|---|---|
| typeDefinition (optional) | object |  |
| simplifiedSchema (optional) | object |  |
| isObject  | boolean |  |
| isArray  | boolean |  |
| isPrimitive  | boolean |  |
| isEnum  | boolean |  |
| isEnumLiteral  | boolean |  |
| typeCoverage  | number |  |
| rawType  | string |  |



## 🔹 FolderSummary

objective size measurements of all files in a folder

summary for a folder should contain file-summaries for different filetypes and an overal file summary





Properties: 

 | Name | Type | Description |
|---|---|---|
| size  | object |  |
| textSize  | object |  |
| dataSize  | object |  |
| codeSize  | object |  |



## 🔹 SizeSummary

type interface that can be used to summarize multiple files





Properties: 

 | Name | Type | Description |
|---|---|---|
| numberOfFiles (optional) | number |  |
| characters  | number |  |
| lines  | number |  |
| bytes  | number |  |
| linesPerFile  | number |  |
| charactersPerLine  | number |  |
| bytesPerCharacter  | number |  |


# Internal

<details><summary>Show internal (1)</summary>
    
  # 🔹 TypeCoverage

quantification of coverage of the specified type or subtypes in our database.






  </details>

