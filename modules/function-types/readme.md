# Function types

function-types (`OperationClassification` cjs)



# Api reference

## 🔹 StandardFunctionConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| version (optional) | string |  |
| versionInfo (optional) | object |  |
| isPublic (optional) | boolean |  |
| isAdmin (optional) | boolean |  |
| isApiExposed (optional) | boolean |  |
| domain (optional) | string |  |
| isPaid (optional) | boolean |  |
| priceCredit (optional) | number |  |
| priceDescription (optional) | string |  |
| authorizations (optional) | object |  |
| canCache (optional) | boolean |  |
| runEveryPeriod (optional) | string |  |
| isDisabled (optional) | boolean |  |
| isHeavy (optional) | boolean |  |
| isInternetRequired (optional) | boolean |  |
| isBrowserRequired (optional) | boolean |  |



## 🔸 TsFunction

jsonSingle model




Interface for arrow functions and normal functions

TODO: replace with `SwcFunction`





Properties: 

 | Name | Type | Description |
|---|---|---|
| explicitTypeName (optional) | string |  |
| isExported  | boolean |  |
| description (optional) | string |  |
| rawText (optional) | string |  |
| commentsInside  | array |  |
| returnType  | object |  |
| parameters (optional) | array |  |
| size  | object |  |
| commentSize (optional) | object |  |
| codeSize (optional) | object |  |
| cumulativeSize (optional) | object |  |
| cumulativeCommentSize (optional) | object |  |
| cumulativeCodeSize (optional) | object |  |
| maxIndentationDepth  | number |  |
| dependantFiles (optional) | array |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |



## 🔹 FunctionContext

Should be attached as first argument of the function, if the name of the function is in the format of:

- `xyzWithContext`: attaches all context
- `xyzWithContextRaw`: attaches all context, api returns just the result of the function without wrapping it in the `RealApiReturnType`. Needed in case you have a different server.js `server.reply`

For more info see `apiConvention`





Properties: 

 | Name | Type | Description |
|---|---|---|
| tsFunction (optional) | object |  |
| device  | object |  |
| hasAuthorization  | boolean |  |
| serverContext (optional) | object |  |
| groups (optional) | array |  |
| authToken (optional) | string |  |



## 🔹 StandardResponse

Standard response for functions. Should be used as much as possible





Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccessful  | boolean |  |
| message (optional) | string |  |
| payment (optional) | object |  |



## 🔹 FunctionParameter

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema (optional) | object |  |
| simplifiedSchema (optional) | object |  |
| required  | boolean |  |



## 🔹 WatchEventType

Different event types for the watcher of the file system (chokidar)

- add: a file got created
- addDir: a folder got created
- change: a file changed
- unlink: a file got removed
- unlinkDir: a folder got removed








## 🔸 FunctionExecution

jsonMultiple model



Model for tests, examples, cache, and recent executions of any function

Requirement for **tifo-stitching**

Example:

const someFunction = (inputA: string, inputB:string):string => {

return `${inputA} != ${inputB}`
}


find this in the database after executing the function

const functionExecution1 = {
....
functionName: "someFunction",
inputParameters: ["hello", "world"],
output: "hello != world",
isTest: false,
isExample: false,
isResultFromCache: false,
performance: [....],
}





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| functionName  | string |  |
| tsFunctionId  | string |  |
| inputParameters (optional) | array |  |
| output  | object |  |
| isTest  | boolean |  |
| isExample  | boolean |  |
| description (optional) | string |  |
| isResultFromCache  | boolean |  |
| hasApiChanged (optional) | boolean |  |
| performance  | array |  |
| cost (optional) | number |  |
| personId (optional) | string |  |
| groupId (optional) | string |  |



## 🔹 RunEveryPeriodEnum

Used to specify functions that need to run every time with a specific interval

All times are at at the server timezone time

- `minute`: every minute at 0 seconds
- `5-mintues`: every 5 minutes, starting at the first minute of the hour
- `quarter-hour`: every 15 minutes, starting at the first minute of the hour
- `hour`: every hour, starting at the first minute of the hour
- `6-hours`: every 6 hours, starting at midnight
- `midnight`: every midnight (00:00:00)
- `week`: every week at sundaynight (sunday, 1 second after 23:59:59 PM)
- `month`: at the first second of the first day of the month (0:00:00)
- `3-months`: every start of the quarter: january 1st (0:00:00), april 1st, july 1st, october 1st
- `year`: every new year at january 1st at 0:00:00








## 🔹 FunctionData

Properties: 

 | Name | Type | Description |
|---|---|---|
| tsFunction  | object |  |



## 🔹 PublicBundleConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| paymentPlanId (optional) | string |  |
| categoryStack (optional) | array |  |
| id  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| deploymentHostname (optional) | string |  |
| description (optional) | string |  |
| emoji (optional) | string |  |
| primaryColor (optional) | string |  |
| gitRepoUrl (optional) | string |  |
| isGitRepoPublic (optional) | boolean |  |
| bundleMarkdownReaderConfig (optional) | object |  |



## 🔹 QueueFunctionConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| isDisabled (optional) | boolean |  |
| isHeavy (optional) | boolean |  |
| isInternetRequired (optional) | boolean |  |
| isBrowserRequired (optional) | boolean |  |



## 📄 runEveryPeriodStringArray (exported const)

# Internal

<details><summary>Show internal (5)</summary>
    
  # getFunctionExersize()




| Input      |    |    |
| ---------- | -- | -- |
| functionId | string |  |
| **Output** |    |    |



## 🔹 FunctionClassification

- `react`: The core library that should always be used that wraps react and react native.

- `dumb`: Presentational components that only care about how things look, and have no idea about the type of information that they will contain (**data-agnostic**), nor their context they're used in.

- `smart`: Presentational components that may contain getters and setters for global state. This means they're still easy enough to set up, but

- `wise`: stateful components that use the backend as well to do things. for example, `simplified-schema-form`

- `genius`: blocks of components that have certain functionality. Example: `file-writer` or `crud`








## 🔹 TsFunctionIndex

Properties: 

 | Name | Type | Description |
|---|---|---|
| explicitTypeName (optional) | string |  |
| isExported  | boolean |  |
| description (optional) | string |  |
| rawText (optional) | string |  |
| commentsInside  | array |  |
| returnType  | object |  |
| parameters (optional) | array |  |
| size  | object |  |
| commentSize (optional) | object |  |
| codeSize (optional) | object |  |
| cumulativeSize (optional) | object |  |
| cumulativeCommentSize (optional) | object |  |
| cumulativeCodeSize (optional) | object |  |
| maxIndentationDepth  | number |  |
| dependantFiles (optional) | array |  |



## 📄 getFunctionExersize (exported const)

## 📄 runEveryPeriodReadonlyArray (exported const)

  </details>

