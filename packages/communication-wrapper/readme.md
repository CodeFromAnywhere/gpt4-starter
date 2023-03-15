# Communication wrapper

communication-wrapper (`OperationClassification` undefined)



# Api reference

## sendMail()

Sends email(s) using sendgrid

Ensure your OS config is there

required fields:
- to
- text or html
- subject

Optional:
- from (uses primary persona)


| Input      |    |    |
| ---------- | -- | -- |
| mailData | {  } |  |,| isMultiple (optional) | boolean |  |
| **Output** |    |    |



## sendTwilioMessage()

sends a message with the primary persona (or specified persona) to a whatsapp number with a specific body

Twilio from/to works with or without a "whatsapp:" prefix for whatsapp and sms respectively

Must use E.164 formatting, e.g. +[country][phonenumber]


| Input      |    |    |
| ---------- | -- | -- |
| to | string |  |,| body | string |  |,| config (optional) | { channel?: whatsapp / sms, <br />persona?: `Persona`, <br /> } |  |
| **Output** |    |    |



## 📄 sendMail (exported const)

Sends email(s) using sendgrid

Ensure your OS config is there

required fields:
- to
- text or html
- subject

Optional:
- from (uses primary persona)


## 📄 sendTwilioMessage (exported const)

sends a message with the primary persona (or specified persona) to a whatsapp number with a specific body

Twilio from/to works with or without a "whatsapp:" prefix for whatsapp and sms respectively

Must use E.164 formatting, e.g. +[country][phonenumber]

# Tests

<details><summary>Show test information(2)</summary>
    
  # sendMailTest()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 sendMailTest (exported const)

  </details>

# Internal

<details><summary>Show internal (15)</summary>
    
  # receiveTwilioMessageWithContextRaw()

This is where sms/whastapp messages are received via the twilio webhook.

Set your twilio webhook to:

`https://yourapi.com/function/receiveTwilioMessageWithContextRaw`

What this does:
- receives the webhook input
- find the persona that this message is addressed to
- find or make a person based on the phone number
- call `generateResponse`

What the `generateResponse` function does:
- store the sent message into the db
- generate a response
- deduct credit
- send a reply or not


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## sendMailTest()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## sendMessage()

General purpose function to send a person a message.
Can send a whatsapp message, email, or sms.
Based on your config, it determines the channels to try, and in which order to try them.


| Input      |    |    |
| ---------- | -- | -- |
| person | `Person` |  |,| message | string |  |,| config (optional) | `SendMessageConfig` |  |
| **Output** |    |    |



## sendSms()

DEPRECATED: to be merged with `sendMessage` since it also handles WhatsApp and more...

Send sms

Requires OS Config to have Twilio sid and auth token.

Reqruired options: `to` and `body`

`to` is not required, but will overwrite the one you specified in your `OsConfig`


| Input      |    |    |
| ---------- | -- | -- |
| options | { addressRetention?: string, <br />applicationSid?: string, <br />attempt?: number, <br />body?: string, <br />contentRetention?: string, <br />contentSid?: string, <br />contentVariables?: string, <br />forceDelivery?: boolean, <br />from?: string, <br />maxPrice?: number, <br />mediaUrl?: {  }, <br />messagingServiceSid?: string, <br />persistentAction?: {  }, <br />provideFeedback?: boolean, <br />scheduleType?: string, <br />sendAsMms?: boolean, <br />sendAt?: string, <br />shortenUrls?: boolean, <br />smartEncoded?: boolean, <br />statusCallback?: string, <br />to: string, <br />validityPeriod?: number, <br /> } | Options to pass to create |
| **Output** |    |    |



## trySendMessage()

If you are certain about sending a message over a certain channel, you can use this function directly, but it's usually better to use `sendMessage` so all channels can be tried in the right order.

For email, the api of `sendEmail` is not fully used (it's simplified)


| Input      |    |    |
| ---------- | -- | -- |
| person | `Person` |  |,| message | string |  |,| messagingChannel | `MessagingChannel` |  |,| config (optional) | { emailConfig?: { subject?: string, <br /> }, <br />persona?: `Persona`, <br /> } |  |
| **Output** |    |    |



## 🔹 MailDataFromOptional

From is optional for sending an email because it will be filled in by the OsConfig default.





Properties: 

 | Name | Type | Description |
|---|---|---|
| from (optional) | string |  |
| to (optional) | object |  |
| cc (optional) | object |  |
| bcc (optional) | object |  |
| replyTo (optional) | object |  |
| sendAt (optional) | number |  |
| subject (optional) | string |  |
| text (optional) | string |  |
| html (optional) | string |  |
| content (optional) | object |  |
| templateId (optional) | string |  |
| personalizations (optional) | array |  |
| attachments (optional) | array |  |
| ipPoolName (optional) | string |  |
| batchId (optional) | string |  |
| sections (optional) | object |  |
| headers (optional) | object |  |
| categories (optional) | array |  |
| category (optional) | string |  |
| customArgs (optional) | object |  |
| asm (optional) | object |  |
| mailSettings (optional) | object |  |
| trackingSettings (optional) | object |  |
| substitutions (optional) | object |  |
| substitutionWrappers (optional) | array |  |
| isMultiple (optional) | boolean |  |
| dynamicTemplateData (optional) | object |  |
| hideWarnings (optional) | boolean |  |
| replyToList (optional) | object |  |



## 🔹 MessagingChannel

## 🔹 SendMessageConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| emailConfig (optional) | object |  |
| preferredChannel (optional) | string |  |
| persona (optional) | object |  |



## 🔹 TwilioWebhookType

NB: couln't find this in the docs or api spec... Made myself, but it is probably not 100% accurate! just tested with a simple WhatsApp message.





Properties: 

 | Name | Type | Description |
|---|---|---|
| SmsMessageSid  | string |  |
| NumMedia  | string |  |
| ProfileName  | string |  |
| SmsSid  | string |  |
| WaId (optional) | string |  |
| SmsStatus  | string |  |
| Body  | string |  |
| To  | string |  |
| NumSegments  | string |  |
| ReferralNumMedia  | string |  |
| MessageSid  | string |  |
| AccountSid  | string |  |
| From  | string |  |
| ApiVersion  | string |  |



## 📄 availableMessagingChannels (exported const)

Available messaging channels in order of preference


## 📄 receiveTwilioMessageWithContextRaw (exported const)

This is where sms/whastapp messages are received via the twilio webhook.

Set your twilio webhook to:

`https://yourapi.com/function/receiveTwilioMessageWithContextRaw`

What this does:
- receives the webhook input
- find the persona that this message is addressed to
- find or make a person based on the phone number
- call `generateResponse`

What the `generateResponse` function does:
- store the sent message into the db
- generate a response
- deduct credit
- send a reply or not


## 📄 sendMailTest (exported const)

## 📄 sendMessage (exported const)

General purpose function to send a person a message.
Can send a whatsapp message, email, or sms.
Based on your config, it determines the channels to try, and in which order to try them.


## 📄 sendSms (exported const)

DEPRECATED: to be merged with `sendMessage` since it also handles WhatsApp and more...

Send sms

Requires OS Config to have Twilio sid and auth token.

Reqruired options: `to` and `body`

`to` is not required, but will overwrite the one you specified in your `OsConfig`


## 📄 trySendMessage (exported const)

If you are certain about sending a message over a certain channel, you can use this function directly, but it's usually better to use `sendMessage` so all channels can be tried in the right order.

For email, the api of `sendEmail` is not fully used (it's simplified)
  </details>

