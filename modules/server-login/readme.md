# Server login

server-login (`OperationClassification` node-cjs)

This operation exposes rudimentary functions to set cookies from the backend. We require cookies in order to authenticate a user for GET requests. Cookies are sent to the server for every request and are a safer way, because they are not part of the URL that can be found in the browser history.

This thing is far from finished, see `todo/` for what needs to be done.




# Api reference

## signupBare()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## signupWithEmailOrPhone()

For now only username/pass is supported due to direct verification

This function makes an authenticationmethod for the device and then signs up by creating a person for it and attaching it to the device.


| Input      |    |    |
| ---------- | -- | -- |
| emailOrPhone | string |  |,| fullName (optional) | string |  |,| pictureImage (optional) | `BackendAsset` |  |
| **Output** |    |    |



## 📄 signupBare (exported const)

## 📄 signupWithEmailOrPhone (exported const)

For now only username/pass is supported due to direct verification

This function makes an authenticationmethod for the device and then signs up by creating a person for it and attaching it to the device.

# Internal

<details><summary>Show internal (24)</summary>
    
  # defaultMessage()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



## getMeWithContext()

Get all relevant information about yourself, including all persons that are attached to you.

NB: probably need to omit some fields later, but for now it's fine


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |
| **Output** |    |    |



## getPublicPerson()

| Input      |    |    |
| ---------- | -- | -- |
| id (optional) | string |  |
| **Output** |    |    |



## getPublicPersons()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## isPhoneNumber()

TODO: Implement this (for now it must start with + and be at least 10 characters)


| Input      |    |    |
| ---------- | -- | -- |
| phoneNumber | string |  |
| **Output** | {  }   |    |



## isValidPassword()

| Input      |    |    |
| ---------- | -- | -- |
| password | string |  |
| **Output** | {  }   |    |



## loginConfirmWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| emailOrPhone | string |  |,| otp | string |  |
| **Output** |    |    |



## loginWithEmailOrPhone()

Login with phone or email


| Input      |    |    |
| ---------- | -- | -- |
| emailOrPhone | string |  |
| **Output** |    |    |



## logoutWithContext()

Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to logout

Needed for having `authToken` with GET as well in a safe manner (e.g. for images)


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| rememberAuthentication (optional) | boolean |  |
| **Output** |    |    |



## signupConfirmWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| emailOrPhone | string |  |,| otp | string |  |
| **Output** |    |    |



## switchCurrentPersonWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| newCurentPersonId | string |  |
| **Output** |    |    |



## updateMeWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| details | `PersonProfileDetails` |  |
| **Output** |    |    |



## 📄 defaultMessage (exported const)

## 📄 getMeWithContext (exported const)

Get all relevant information about yourself, including all persons that are attached to you.

NB: probably need to omit some fields later, but for now it's fine


## 📄 getPublicPerson (exported const)

## 📄 getPublicPersons (exported const)

## 📄 isPhoneNumber (exported const)

TODO: Implement this (for now it must start with + and be at least 10 characters)


## 📄 isValidPassword (exported const)

## 📄 loginConfirmWithContext (exported const)

## 📄 loginWithEmailOrPhone (exported const)

Login with phone or email


## 📄 logoutWithContext (exported const)

Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to logout

Needed for having `authToken` with GET as well in a safe manner (e.g. for images)


## 📄 signupConfirmWithContext (exported const)

## 📄 switchCurrentPersonWithContext (exported const)

## 📄 updateMeWithContext (exported const)

  </details>

