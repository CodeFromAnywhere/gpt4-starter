# Peer types

peer-types (`OperationClassification` cjs)



# Api reference

## 🔸 Person

jsonMultiple model




Model to describe a human person. This model gathers and stores all persons around the world, except for yourself. Kind of a user-like model...


The data inside this model is coming from the `Person` itself but also from the owner of the OS server. It should be possible for the person to automatically push information into any of their instances on any server, but the OS owner can augment this.

NB: This is a `DefaultModelType`, which means name and slug need not to be unique, but it is highly preferred.





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
| name  | string |  |
| slug  | string |  |
| preferredLanguage (optional) | string |  |
| pictureImage (optional) | object |  |
| email (optional) | string |  |
| lastActivityAt (optional) | number |  |
| isEmailOptOut (optional) | boolean |  |
| phoneNumber (optional) | string |  |
| authentication (optional) | object |  |
| interestSlugs (optional) | array |  |
| mediaChannelIds (optional) | array |  |
| preferred_mediaChannelId (optional) | string |  |
| media (optional) | array |  |
| dataEntries (optional) | array |  |
| devicesCalculated (optional) | array |  |
| authenticationMethods (optional) | array |  |
| groupSlugs (optional) | array |  |
| paymentAuthToken (optional) | string |  |
| credit (optional) | number |  |
| note (optional) | string |  |
| location (optional) | string |  |
| trust (optional) | number |  |



## 🔸 Device

jsonSingle model




A Device that accesses any King OS api.

A device can be connected to a person. A person can have multiple `Device`s.

A Device does not necissarily have King OS installed themselves, they can also be a visitor to another King OS app of someone else.





Properties: 

 | Name | Type | Description |
|---|---|---|
| ip  | string |  |
| city (optional) | string |  |
| position (optional) | object |  |
| positionRadiusKm (optional) | number |  |
| country (optional) | string |  |
| region (optional) | string |  |
| timezone (optional) | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| authToken  | string |  |
| userAgentString  | string |  |
| name  | string |  |
| hasPapi (optional) | boolean |  |
| isOnlineCalculated (optional) | boolean |  |
| lastOnlineAt  | number |  |
| isLocalIpCalculated (optional) | boolean |  |
| isFavorite (optional) | boolean |  |
| isPrivate (optional) | boolean |  |
| lastSyncDatabaseAtObject (optional) | object |  |
| personIds (optional) | array |  |
| currentPersonId (optional) | string |  |
| currentPersonCalculated (optional) | object |  |
| appOperationsCalculated (optional) | array |  |
| authenticationMethods  | array |  |



## 🔸 Group

jsonMultiple model



TODO: change this into a hierarchical kvmd model.

A `Person` is able to be part of one or multiple `Group`s.

A `Device` without `Person` is just part of group `public` and can only access `public` info and features.

`Group`s and individual `Person`s can be given `Authorization`

Groups are the main way to provide authorizations to functions, databases, and files (code, data, and text)

- To apply an authorization on a function, you can use the `.config.authorizations` parameter on the function
- To apply an authorization on a file or folder, you can use the `authorizations` frontmatter
- To apply an authorization on a database model, you can use the `authorizations` parameter on the `Dataset` or in the `TsInterface` frontmatter.

There are some special groups. These groups may have specific functionalities applied to them. Try to use these groups as much as possible, instead of creating your own groups:

- `admin` has 100% access to everything
- `public` is any user, even without signup
- `trusted` is any trusted user. These may be allowed to do additional things





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| description (optional) | string |  |
| inherited_groupSlugs (optional) | array |  |
| customAuthorizations (optional) | array |  |
| indexedAuthorizationCalculated (optional) | array |  |



## 🔸 Persona

jsonMultiple model



Highly private model.

Configuration for a person identity that you say that is you.

As a OS user you can have multiple personas between which you can easily switch.

The difference from `Person` is that `Person` stores other people, whereas `Persona` stores different identities you give to yourself.

Every persona is admin by default

NB: brands should also be able to be personas, and since some brands are shared between people, you should be able to share Persona's with other `Person`s into their OS...

> Persona: A persona, depending on the context, is the public image of one's personality, the social role that one adopts, or simply a fictional character. The word derives from Latin, where it originally referred to a theatrical mask. On the social web, users develop virtual personas as online identities. (Wikipedia)





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| isPrimary (optional) | boolean |  |
| isFavorite (optional) | boolean |  |
| pictureImages (optional) | array |  |
| dataEntries  | array |  |
| interestSlugs (optional) | array |  |
| locationSlugs (optional) | array |  |
| spokenLanguages  | array |  |
| stripeWebhookSigningSecret (optional) | string |  |
| stripePublishableKey (optional) | string |  |
| stripeSecret (optional) | string |  |
| twilioAccountSid (optional) | string |  |
| twilioAuthToken (optional) | string |  |
| twilioFromPhoneNumber (optional) | string |  |
| twilioWhatsappFromPhoneNumber (optional) | string |  |
| sendgridApiKey (optional) | string |  |
| sendgridFromEmail (optional) | string |  |
| githubEmail (optional) | string |  |
| githubAccessToken (optional) | string |  |
| githubOrganisation (optional) | string |  |
| useGithubOrganisation (optional) | boolean |  |
| mediaCredentialIds (optional) | array |  |
| apiKey2Captcha (optional) | string |  |
| openAiPassword (optional) | string |  |
| openAiEmail (optional) | string |  |
| openAiToken (optional) | string |  |
| linkedinEmail (optional) | string |  |
| linkedinPassword (optional) | string |  |
| twitterLoginHandle (optional) | string |  |
| twitterPassword (optional) | string |  |
| facebookLoginHandle (optional) | string |  |
| facebookPassword (optional) | string |  |
| mediumLoginHandle (optional) | string |  |
| mediumPassword (optional) | string |  |
| redditLoginHandle (optional) | string |  |
| redditPassword (optional) | string |  |
| devtoLoginHandle (optional) | string |  |
| devtoPassword (optional) | string |  |
| slackLoginHandle (optional) | string |  |
| slackPassword (optional) | string |  |
| huggingfaceAuthToken (optional) | string |  |
| uberduckApiKey (optional) | string |  |
| uberduckSecret (optional) | string |  |
| bananadevApiKey (optional) | string |  |
| bananadevModelKeys (optional) | object |  |
| assistantState (optional) | object |  |
| email  | string |  |
| phone  | string |  |



## 🔸 PeerMessage

jsonMultiple model



DEPRECTATED: should be replaced by `MediaPost`. MediaPost can  have many channels, and this is just one of them





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
| peerSlug  | string |  |
| message  | string |  |



## 🔹 PersonProfileDetails

Things the user can fill in about themselves on their profile





Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| preferredLanguage (optional) | string |  |
| pictureImage (optional) | object |  |
| email (optional) | string |  |
| lastActivityAt (optional) | number |  |
| isEmailOptOut (optional) | boolean |  |
| phoneNumber (optional) | string |  |
| authentication (optional) | object |  |
| interestSlugs (optional) | array |  |
| mediaChannelIds (optional) | array |  |
| preferred_mediaChannelId (optional) | string |  |
| media (optional) | array |  |
| note (optional) | string |  |
| location (optional) | string |  |
| trust (optional) | number |  |



## 🔹 PublicPerson

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| slug  | string |  |
| id  | string |  |
| pictureImage (optional) | object |  |
| interestSlugs (optional) | array |  |
| media (optional) | array |  |
| preferred_mediaChannelId (optional) | string |  |
| groupSlugs (optional) | array |  |
| operationName  | null |  |
| projectRelativePath  | string |  |



## 🔹 AppOperation

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| port  | number |  |
| description (optional) | string |  |
| isOnline (optional) | boolean |  |
| emoji (optional) | string |  |



## 🔹 IPInfo

Information that is inferred from an IP





Properties: 

 | Name | Type | Description |
|---|---|---|
| ip  | string |  |
| city (optional) | string |  |
| position (optional) | object |  |
| positionRadiusKm (optional) | number |  |
| country (optional) | string |  |
| region (optional) | string |  |
| timezone (optional) | string |  |



## 🔹 IResult

Properties: 

 | Name | Type | Description |
|---|---|---|
| ua  | string |  |
| browser  | object |  |
| device  | object |  |
| engine  | object |  |
| os  | object |  |
| cpu  | object |  |



## 🔸 PageVisit

jsonMultiple model



Any visit tracked based on a server request

NB: TODO: it might occur that a page fetches multiple api endpoints, which will create duplicate data here. How do I fix that?





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
| deviceId  | string |  |
| path  | string |  |
| ipInfo  | object |  |



## 📄 publicPersonKeys (exported const)

Can be seen for every person, without authentication

NB: I wish it were possible to ensure these keys exist on the person here, but we can't validate that while still keeping it a const I guess

# Internal

<details><summary>Show internal (21)</summary>
    
  # 🔹 Achievement







Properties: 

 | Name | Type | Description |
|---|---|---|
| emoji  | string |  |
| name  | string |  |
| description  | string |  |
| level (optional) | number |  |
| levels (optional) | array |  |



## 🔹 AssistantState

state for an "assistant" role in the chat completions api of openai, given by the "system" role.

Some states might be able to be dynamicly altered by certain behavior of the user.

TODO: add interests, statements, beliefs, favorite words, grammar, ticks, etc.etc.





Properties: 

 | Name | Type | Description |
|---|---|---|
| premium (optional) | string |  |
| personality (optional) | string |  |
| etnicity (optional) | string |  |
| profession (optional) | string |  |
| creator (optional) | string |  |
| mood (optional) | string |  |
| characteristics (optional) | array |  |
| humorStyle (optional) | array |  |
| rhymeAbility (optional) | boolean |  |
| goals (optional) | array |  |
| rules (optional) | array |  |



## 🔹 AuthenticationMethod

Properties: 

 | Name | Type | Description |
|---|---|---|
| method  | string |  |
| handle  | string |  |
| encryptedCredential (optional) | string |  |
| credential (optional) | string |  |
| otp (optional) | number |  |
| isAuthenticated  | boolean |  |



## 🔹 AuthenticationMethodMethod

Username + password should be the default

Email OTP, phone number OTP (sms or call or whatsapp), should be optional 2FA methods

All others can also act as authentication methods, but the token shouldn't be stored








## 🔹 Developer

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
| name  | string |  |
| slug  | string |  |
| preferredLanguage (optional) | string |  |
| pictureImage (optional) | object |  |
| email (optional) | string |  |
| lastActivityAt (optional) | number |  |
| isEmailOptOut (optional) | boolean |  |
| phoneNumber (optional) | string |  |
| authentication (optional) | object |  |
| interestSlugs (optional) | array |  |
| mediaChannelIds (optional) | array |  |
| preferred_mediaChannelId (optional) | string |  |
| media (optional) | array |  |
| dataEntries (optional) | array |  |
| devicesCalculated (optional) | array |  |
| authenticationMethods (optional) | array |  |
| groupSlugs (optional) | array |  |
| paymentAuthToken (optional) | string |  |
| credit (optional) | number |  |
| note (optional) | string |  |
| location (optional) | string |  |
| trust (optional) | number |  |
| achievements  | array |  |



## 🔹 HandleObject

can be used on multiple models.








## 🔹 IBrowser

NB: copied from ua-parser-js ^1.0.32 because they weren't indexed





Properties: 

 | Name | Type | Description |
|---|---|---|
| name (optional) | string |  |
| version (optional) | string |  |
| major (optional) | string |  |



## 🔹 ICPU

Properties: 

 | Name | Type | Description |
|---|---|---|
| architecture (optional) | string |  |



## 🔹 IDevice

Properties: 

 | Name | Type | Description |
|---|---|---|
| model (optional) | string |  |
| type (optional) | string |  |
| vendor (optional) | string |  |



## 🔹 IEngine

Properties: 

 | Name | Type | Description |
|---|---|---|
| name (optional) | string |  |
| version (optional) | string |  |



## 🔹 IOS

Properties: 

 | Name | Type | Description |
|---|---|---|
| name (optional) | string |  |
| version (optional) | string |  |



## 🔸 PersonInformation

keyValueMarkdown model



categorisation model for informormation about a person

- the keys are the things you want to store
- the values are the descriptions of the thing to be stored
- the categories can organise the things you want to store better





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
| parent_personInformationSlug (optional) | string |  |



## 🔸 PersonInformationValue

jsonMultiple model



key value data storage model for information about a person

- the filename must identify the person this is about (`personSlug`)
- the categories are the different people and the person information categories
- the keys are the person information datapoints
- the values are the values of the datapoints that you stored about this user

Example:

the file `person-information-values/abraham-lincoln.md` could contain something like this:

```md

## life

born: 11-01-1777
died: 20-12-1812


## identification

firstName: Abraham
lastName: Lincoln
```

NB: It's not going to be easy to keep this model in sync with the model it relies on!

TODO: figure out if this kan be a `KeyValueMarkdownModelType` or `MarkdownModelType`





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
| personId  | string |  |
| personInformationSlug  | string |  |
| value  | string |  |



## 🔸 PersonPlatformConnection

jsonMultiple model



Forgive the long name, but this model connects the user with the people they have a connection with on specific platforms

e.g. John Doe is connected with me on LinkedIn with the handle `johndoe123`

Not sure if this is the best way to do this, there may be limitations... For example, both I and the other person can have multiple social media accounts on a single platform





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
| personId  | string |  |
| isFollow  | boolean |  |
| scrapeSucceededAt  | number |  |
| scrapedFailedAt  | number |  |
| platformSlug  | string |  |
| platformConnectionId  | string |  |



## 🔹 PersonSocialMedia

media (mediums) that a person uses, e.g. linkedin, twitter, whatsapp, sms, calling, and irl





Properties: 

 | Name | Type | Description |
|---|---|---|
| platformSlug  | string |  |
| path  | string |  |
| isPremium  | boolean |  |
| tagline (optional) | string |  |
| bio (optional) | string |  |



## 🔸 Platform

jsonMultiple model



Collection of platforms that can be found on the internet

e.g. linkedin would have `userUrlPrefix: https://linkedin.com/in/` and `userUrlSuffix:""`





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| userUrlPrefix  | string |  |
| userUrlSuffix  | string |  |



## 🔹 PublicPersonKeys

## 📄 achievements (exported const)

## 📄 developers (exported const)

## 📄 englishMethod (exported const)

## 📄 levelNames (exported const)

  </details>

