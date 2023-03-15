# Social media types

social-media-types (`OperationClassification` cjs)



# Api reference

## 🔹 SocialMediaPostTypeReturnType

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccess  | boolean |  |
| message  | string |  |
| postUrl (optional) | string |  |



## 🔹 SocialMediaPostTypeReturnType

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccess  | boolean |  |
| message  | string |  |
| postUrl (optional) | string |  |



## 🔸 MediaChannel

jsonMultiple model



channel where messages can be posted to

examples:
- facebook group
- slack channel
- whatsapp pm
- facebook pm





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
| platformSlug  | string |  |
| platformChannelId  | string |  |
| url (optional) | string |  |
| name  | string |  |
| slug  | string |  |
| description (optional) | string |  |
| personId (optional) | string |  |
| isGroup (optional) | boolean |  |
| member_personIds (optional) | array |  |
| interestSlugs (optional) | array |  |
| locationSlug (optional) | string |  |
| language  | string |  |
| mediaCredentialId (optional) | string |  |
| myLastPostAt  | number |  |



## 🔸 MediaCredential

jsonMultiple model









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
| mediaType  | string |  |
| email (optional) | string |  |
| password  | string |  |
| username (optional) | string |  |
| phoneNumber (optional) | string |  |



## 🔸 MediaPost

markdown model



Post/message on any medium.





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
| name  | string |  |
| slug  | string |  |
| markdown  | string |  |
| categoryStack  | array |  |
| mediaPlatform  | string |  |
| posted_messageChannelId (optional) | string |  |
| isVerified (optional) | boolean |  |
| isPostable  | boolean |  |
| unpostableReason (optional) | string |  |
| isPosted (optional) | boolean |  |
| postedUrl (optional) | string |  |
| postedAt (optional) | number |  |
| channelOrGroupName (optional) | string |  |
| webMarkdownFile_projectRelativePath (optional) | string |  |
| parsedTitleCalculated (optional) | string |  |
| parsedContentCalculated (optional) | string |  |
| parsedAssetCalculated (optional) | object |  |
| postedDetailsIndexed (optional) | object |  |



## 🔸 ChatMessage

jsonMultiple model



Simplified model, until we are also going to include `MediaPost` and `MediaChannel`... For now, need nothing else than this for chat like WhatsApp, SMS, Email, etc...

The message is always from a sender and goes to a receiver. Both the sender and receiver can be either a person or persona. In case it's a persona, the personId should be found for the persona.

TODO: ensure this gets stored in the folder of the external person!





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
| personaId (optional) | string |  |
| personId (optional) | string |  |
| direction  | string |  |
| groupSlug (optional) | string |  |
| message  | string |  |



## 🔸 Interest

keyValueMarkdown model









Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| categoryStack  | array |  |
| isHeaderCalculated  | boolean |  |
| parent_interestSlug  | string |  |



## 🔹 MediaPlatformEnum

