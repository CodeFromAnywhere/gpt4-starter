# Asset functions node

asset-functions-node (`OperationClassification` node-cjs)



# Api reference

## processAsset()

Processes an asset by moving the file in the right location, if needed...

- Alt is kept, nothing to do with it
- Giving a different name will change the new path
- relativePath is checked if it exists (if temporaryDestination is undefined). It is used to obtain the extension.
- temporaryDestination must be checked. if it exists, must replace the file on relativePath calculated from name

After processing, this function should return a `BackendAsset` without the non-storable parameters

BEWARE: `absoluteReferencingFilePath`, and for db-models also `modelName`, need to be given here! Otherwise this won't work!


| Input      |    |    |
| ---------- | -- | -- |
| backendAsset (optional) | {  } | The backendAsset that may need processing |,| config (optional) | { customAbsoluteFolderPath?: string, <br /> } |  |
| **Output** |    |    |



## 📄 processAsset (exported const)

Processes an asset by moving the file in the right location, if needed...

- Alt is kept, nothing to do with it
- Giving a different name will change the new path
- relativePath is checked if it exists (if temporaryDestination is undefined). It is used to obtain the extension.
- temporaryDestination must be checked. if it exists, must replace the file on relativePath calculated from name

After processing, this function should return a `BackendAsset` without the non-storable parameters

BEWARE: `absoluteReferencingFilePath`, and for db-models also `modelName`, need to be given here! Otherwise this won't work!


## processItemAssets()

processes all assets in an item and returns the new item


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 processItemAssets (exported const)

processes all assets in an item and returns the new item

# Internal

<details><summary>Show internal (35)</summary>
    
  # compressAsset()

Audio, image, video can be compressed. This should be done to logical defaults, can be turned off, or can be specifically set to other dimensions using a doc-comment on the model.

- audio: bitrate
- video: fps and resolution
- image: resolution

Returns the new absolute path of the compressed asset (which can be the same as the initial path)


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |,| compressionConfig | `CompressionConfig` |  |
| **Output** |    |    |



## createDownloadWithContext()

Export API:

- on any folder, be able to download a zip of that folder.
- on any file collection, to be able to download a raw content of that file.
- if there's a .md included, also pdf.
- if there's more than one file in the collection, zip it, otherwise no zip needed.
- Also option to download a single file.

Since we don't want unauthorized people to do this, and since the GET endpoint doesn't allow for POST parameters, it's probably best to have a `Download` model that allows me to create one-time or multiple-time downloads with unique keys, that are valid for a certain duration or only to a specific IP. This way, you can't download again after logging out, and it'd be much more secure.


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| projectRelativePath | string | path to file or folder |,| config (optional) | `DownloadConfig` |  |
| **Output** |    |    |



## deleteReferencedAsset()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeReferencingFilePath | string |  |,| referencingFileRelativeAssetPath | string |  |
| **Output** |    |    |



## downloadGetApi()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## downloadRemoteAsset()

Download a remote asset to the `assets` folder (temporary location)

used for:

- giphy
- google images
- unsplashed
- p2p
- youtube to mp3 picker
- youtube to mp4 picker
- project assets (via api)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## findAbsoluteAssetPathFromReference()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeReferencingFilePath | string |  |,| referencingFileRelativeAssetPath | string |  |
| **Output** |    |    |



## findAllProjectMedia()

Media:`.png`, `.mp4`, `.mp3`, `.zip`, `.pdf`

- finds all media in all `db` folders. Can be anywhere, so an explore will probably be best.
- finds all media in every operation in any folder except for `node_modules`, `db`, `src`, `build`, `.[anything]`. (so mostly in `todo`, `docs` and `assets`)
- find all media in every other folder that is not an operation

Return all of this as project relative path array


| Input      |    |    |
| ---------- | -- | -- |
| searchQuery (optional) | string |  |,| returnType (optional) | projectRelative / absolute | defaults to absolute |
| **Output** |    |    |



## findDownload()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string |  |
| **Output** |    |    |



## getAssetDirectlyGetApi()

Useful for getting assets directly, for example for the `SelectMedia` component for `project`-media

Requires more access rights

Run server without too much queue execution

1) Launch telebit on server startup

2) Expose GET ASSET DIRECTLY, publicly, temporarily (but require a passcode in that case). Passcode should match one of the values in [filepath].public

3) convert the absolute path into a HTTPS URL that can be used as imageUrl (this should be a function where you can specify to use a general purpose passcode, or a OTP, or a unique passcode)

4) have a function to remove the passcode.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { isSuccessful: boolean, <br />message: string, <br /> }   |    |



## getReferencedAssetGetApi()

Function to get a referenced asset that has been referenced from any db-model or any ts, tsx or md file, anywhere in the project.

Assets should only be exposed if you have access to the model they are referenced in or to the md file they are referenced in.

Exposes all assets like `/asset?path=/text/interests/programming/storage-of-data/best-storage-methods.md&asset=./audio-is-amazing.m4a`



## Security

Assets are only exposed if they are referenced in a markdown file that is accessible to the user. So when looking up the asset, make sure there's a link to it via `[]()` or `![]()` in the markdown that is connected to it in the URL. If not, don't expose it!

This can be used for any ui that has the functions backend available.

The advantage is that we don't need to build it, this works in `dev` mode. there is no asset duplication.

since the name is `getReferencedAssetGetApi` this should be exposed on `getReferencedAsset`

IMPLEMENTATION NOW:

- check referencing file to find the reference.
- for markdown, typescript: `](./xyz)`
- for json: `"relativePath": "./xyz"`

- If this occurs, calculate abosolute asset path from referencing file folder + relative path

- If this asset exists, expose it.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getStorageLocationInfo()

returns the  type of file the asset is referenced from, and the `baseFolderPath` where the `asset` should be stored


| Input      |    |    |
| ---------- | -- | -- |
| absoluteReferencingFilePath | string |  |,| modelName (optional) | string |  |
| **Output** | { type: typescript / database / markdown, <br />absoluteAssetBaseFolderPath: string, <br /> }   |    |



## getTemporaryAssetsFolderPath()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



## makeDownloadableFile()

| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** |    |    |



## removeOldTemporaryAssets()

All temporary assets that were created more than 24 hours ago and are still there, will be removed by this function.

This allows us to easily delete assets without concequences and also if the user closes a form without submitting it, these assets uploaded will go away.

This function should be executed using a daily CRON


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## serverDownloadReply()

Returns a `server.reply.download` or `server.reply.file` but also sets the `Content-Disposition` header correctly and the `Content-Type`



For this I finally ended up using builtin server.js stuff, we don't need to set those manually...

See https://serverjs.io/documentation/reply/#file-
And https://serverjs.io/documentation/reply/#download-

See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition

NB: ensure to return the result of this function in your endpoint, otherwise it won't work


| Input      |    |    |
| ---------- | -- | -- |
| absoluteAssetPath | string |  |,| isDownload | boolean |  |
| **Output** |    |    |



## uploadAssetWithContext()

Uploads an asset to the server, and puts it in a temporary location in the assets folder of `function-server`. It returns the filename of the file in the temporary location.

It can only be accessed through that random name. This random name has 32 characters so cannot be easily guessed. This should be secure enough. The file should be moved to the final destination in the actual function that needs the file.

NB: this function only works by providing a file as blobs under the "file" property name!


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |
| **Output** |    |    |



## 🔹 DownloadConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| persistence (optional) | string |  |
| availableUntilAt (optional) | number |  |



## 🔹 ReceivedFile

This is the format that I receive for a file with server.js, even though they say it's a formidable.file, which it's not...





Properties: 

 | Name | Type | Description |
|---|---|---|
| size  | number |  |
| path  | string |  |
| name  | string |  |
| type  | string |  |
| hash  | object |  |
| lastModifiedDate  | string |  |



## 📄 compressAsset (exported const)

Audio, image, video can be compressed. This should be done to logical defaults, can be turned off, or can be specifically set to other dimensions using a doc-comment on the model.

- audio: bitrate
- video: fps and resolution
- image: resolution

Returns the new absolute path of the compressed asset (which can be the same as the initial path)


## 📄 createDownloadWithContext (exported const)

Export API:

- on any folder, be able to download a zip of that folder.
- on any file collection, to be able to download a raw content of that file.
- if there's a .md included, also pdf.
- if there's more than one file in the collection, zip it, otherwise no zip needed.
- Also option to download a single file.

Since we don't want unauthorized people to do this, and since the GET endpoint doesn't allow for POST parameters, it's probably best to have a `Download` model that allows me to create one-time or multiple-time downloads with unique keys, that are valid for a certain duration or only to a specific IP. This way, you can't download again after logging out, and it'd be much more secure.


## 📄 deleteReferencedAsset (exported const)

## 📄 downloadGetApi (exported const)

## 📄 downloadRemoteAsset (exported const)

Download a remote asset to the `assets` folder (temporary location)

used for:

- giphy
- google images
- unsplashed
- p2p
- youtube to mp3 picker
- youtube to mp4 picker
- project assets (via api)


## 📄 findAbsoluteAssetPathFromReference (exported const)

## 📄 findAllProjectMedia (exported const)

Media:`.png`, `.mp4`, `.mp3`, `.zip`, `.pdf`

- finds all media in all `db` folders. Can be anywhere, so an explore will probably be best.
- finds all media in every operation in any folder except for `node_modules`, `db`, `src`, `build`, `.[anything]`. (so mostly in `todo`, `docs` and `assets`)
- find all media in every other folder that is not an operation

Return all of this as project relative path array


## 📄 findDownload (exported const)

## 📄 getAssetDirectlyGetApi (exported const)

Useful for getting assets directly, for example for the `SelectMedia` component for `project`-media

Requires more access rights

Run server without too much queue execution

1) Launch telebit on server startup

2) Expose GET ASSET DIRECTLY, publicly, temporarily (but require a passcode in that case). Passcode should match one of the values in [filepath].public

3) convert the absolute path into a HTTPS URL that can be used as imageUrl (this should be a function where you can specify to use a general purpose passcode, or a OTP, or a unique passcode)

4) have a function to remove the passcode.


## 📄 getReferencedAssetGetApi (exported const)

Function to get a referenced asset that has been referenced from any db-model or any ts, tsx or md file, anywhere in the project.

Assets should only be exposed if you have access to the model they are referenced in or to the md file they are referenced in.

Exposes all assets like `/asset?path=/text/interests/programming/storage-of-data/best-storage-methods.md&asset=./audio-is-amazing.m4a`



## Security

Assets are only exposed if they are referenced in a markdown file that is accessible to the user. So when looking up the asset, make sure there's a link to it via `[]()` or `![]()` in the markdown that is connected to it in the URL. If not, don't expose it!

This can be used for any ui that has the functions backend available.

The advantage is that we don't need to build it, this works in `dev` mode. there is no asset duplication.

since the name is `getReferencedAssetGetApi` this should be exposed on `getReferencedAsset`

IMPLEMENTATION NOW:

- check referencing file to find the reference.
- for markdown, typescript: `](./xyz)`
- for json: `"relativePath": "./xyz"`

- If this occurs, calculate abosolute asset path from referencing file folder + relative path

- If this asset exists, expose it.


## 📄 getStorageLocationInfo (exported const)

returns the  type of file the asset is referenced from, and the `baseFolderPath` where the `asset` should be stored


## 📄 getTemporaryAssetsFolderPath (exported const)

## 📄 makeDownloadableFile (exported const)

## 📄 mediaExtensions (exported const)

## 📄 removeOldTemporaryAssets (exported const)

All temporary assets that were created more than 24 hours ago and are still there, will be removed by this function.

This allows us to easily delete assets without concequences and also if the user closes a form without submitting it, these assets uploaded will go away.

This function should be executed using a daily CRON


## 📄 serverDownloadReply (exported const)

Returns a `server.reply.download` or `server.reply.file` but also sets the `Content-Disposition` header correctly and the `Content-Type`



For this I finally ended up using builtin server.js stuff, we don't need to set those manually...

See https://serverjs.io/documentation/reply/#file-
And https://serverjs.io/documentation/reply/#download-

See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition

NB: ensure to return the result of this function in your endpoint, otherwise it won't work


## 📄 uploadAssetWithContext (exported const)

Uploads an asset to the server, and puts it in a temporary location in the assets folder of `function-server`. It returns the filename of the file in the temporary location.

It can only be accessed through that random name. This random name has 32 characters so cannot be easily guessed. This should be secure enough. The file should be moved to the final destination in the actual function that needs the file.

NB: this function only works by providing a file as blobs under the "file" property name!
  </details>

