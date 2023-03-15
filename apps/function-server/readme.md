# Function server

function-server (`OperationClassification` server-cjs)

Server that exposes all typerepo api functions wrapped into easily accessible endpoints.




# Api reference

# CLI

<details><summary>Show CLI information (6)</summary>
    
  # prodCli()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## runFunctionServerCli()

Argument:
- pass true if you want the server to be watching
- pass true true if you want the server to be watching and this is a restart (so don't launch things like browser)
- if you pass nothing, there will be no browser start and no watcher


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## runFunctionServerDevCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 prodCli (exported const)

## 📄 runFunctionServerCli (unexported const)

Argument:
- pass true if you want the server to be watching
- pass true true if you want the server to be watching and this is a restart (so don't launch things like browser)
- if you pass nothing, there will be no browser start and no watcher


## 📄 runFunctionServerDevCli (exported const)

  </details>

# Internal

<details><summary>Show internal (19)</summary>
    
  # executeCronFunction()

NB: cron functions cannot have parameters


| Input      |    |    |
| ---------- | -- | -- |
| tsFunction | `TsFunction` |  |
| **Output** |    |    |



## firstCoreFunction()

Function that is supposed to be ran on the first core only

NB: SHOULD NOT BE BLOCKING


| Input      |    |    |
| ---------- | -- | -- |
| port | number |  |,| isWatching (optional) | boolean |  |,| isRestart (optional) | boolean |  |
| **Output** |    |    |



## prodCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## prod()

`ship` command/function should simply rerun yarn prod for `os-web` and `function-server`


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## runFunctionServerDevCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## runFunctionServerDev()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## runFunctionServer()

Runs sdk api server using "server" package.
Server will be exposed on port 42000


| Input      |    |    |
| ---------- | -- | -- |
| isWatching (optional) | boolean |  |,| isRestart (optional) | boolean |  |
| **Output** |    |    |



## scheduleCronJobs()

| Input      |    |    |
| ---------- | -- | -- |
| tsFunctions | `TsFunction`[] |  |
| **Output** |    |    |



## startSearchWebIfAvailable()

| Input      |    |    |
| ---------- | -- | -- |
| isWatching (optional) | boolean |  |,| isRestart (optional) | boolean |  |
| **Output** |    |    |



## 📄 executeCronFunction (exported const)

NB: cron functions cannot have parameters


## 📄 firstCoreFunction (exported const)

Function that is supposed to be ran on the first core only

NB: SHOULD NOT BE BLOCKING


## 📄 prodCli (exported const)

## 📄 prod (exported const)

`ship` command/function should simply rerun yarn prod for `os-web` and `function-server`


## 📄 runFunctionServerDevCli (exported const)

## 📄 runFunctionServerDev (exported const)

## 📄 runFunctionServer (exported const)

Runs sdk api server using "server" package.
Server will be exposed on port 42000


## 📄 scheduleCronJobs (exported const)

## 📄 scheduleObject (exported const)

For every `RunEveryPeriodEnum`, this object provides the interval `cronExpression` string for `node-cron`


## 📄 startSearchWebIfAvailable (exported const)

  </details>

