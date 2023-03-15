# Test util

test-util (`OperationClassification` undefined)



# Api reference

## getTestFunctionContext()

Returns a real FunctionContext for testing purposes. the functionContext returned is a real one that connects to a real `Device` and optionally `Person`, depending on the `groupSlug` you want to find someone for.

NB: for simplicity's sake, the current implementation provides a `FuncitonContext` without `tsfunction` and without `serverContext` (as this is not needed for current use-case)


| Input      |    |    |
| ---------- | -- | -- |
| groupSlug | string |  |
| **Output** |    |    |



## 📄 getTestFunctionContext (exported const)

Returns a real FunctionContext for testing purposes. the functionContext returned is a real one that connects to a real `Device` and optionally `Person`, depending on the `groupSlug` you want to find someone for.

NB: for simplicity's sake, the current implementation provides a `FuncitonContext` without `tsfunction` and without `serverContext` (as this is not needed for current use-case)

