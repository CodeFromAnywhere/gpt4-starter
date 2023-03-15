# Chat

chat (`OperationClassification` node-cjs)



# Api reference

## processMessage()

All logic to process a general purpose message. This can be antying like a WhatsApp message, an email, an SMS, literally any form of communication between you (persona) and a person.


| Input      |    |    |
| ---------- | -- | -- |
| config | { person: `Person`, <br />persona: `Persona`, <br />message: string, <br />isFirstMessage: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 processMessage (exported const)

All logic to process a general purpose message. This can be antying like a WhatsApp message, an email, an SMS, literally any form of communication between you (persona) and a person.

# Internal

<details><summary>Show internal (48)</summary>
    
  # generateInstantResponseMessage()

Based on a new incoming message and the found model instances, an instant response can be sent back.

If not, just return undefined.


| Input      |    |    |
| ---------- | -- | -- |
| chatMessage | `Creation<ChatMessage>` |  |,| person | `Person` |  |,| persona | `Persona` |  |,| config | { isFirstMessage?: boolean, <br />newUsersAmount?: number, <br /> } |  |
| **Output** |    |    |



## getChatMessageAnalysis()

TODO: try it out and build out these pipelines. it's just diehard js horsemode, nothing difficult! see what sticks 🍝


| Input      |    |    |
| ---------- | -- | -- |
| message | string |  |
| **Output** |    |    |



## getCostPerMessageCredit()

| Input      |    |    |
| ---------- | -- | -- |
| persona | `Persona` |  |
| **Output** | {  }   |    |



## getCredit()

| Input      |    |    |
| ---------- | -- | -- |
| totalPaymentEuros | number |  |
| **Output** | {  }   |    |



## getMessageLimitInfo()

| Input      |    |    |
| ---------- | -- | -- |
| person | `Person` |  |,| persona | `Persona` |  |
| **Output** | { tooManyDau: boolean, <br />freeMessagesAmount: number, <br />dailyActiveUsers: number, <br /> }   |    |



## getMessagesAmountCheap()

| Input      |    |    |
| ---------- | -- | -- |
| persona | `Persona` |  |
| **Output** |    |    |



## getMessagesAmountMore()

| Input      |    |    |
| ---------- | -- | -- |
| persona | `Persona` |  |
| **Output** |    |    |



## getMinimumCredit()

| Input      |    |    |
| ---------- | -- | -- |
| persona | `Persona` |  |,| freeMessagesAmount | number |  |
| **Output** | {  }   |    |



## getPaywallResult()

| Input      |    |    |
| ---------- | -- | -- |
| chatMessage | `Creation<ChatMessage>` |  |,| history | `ChatMessage`[] |  |,| person | `Person` |  |,| persona | `Persona` |  |,| config | { isFirstMessage?: boolean, <br />newUsersAmount?: number, <br /> } |  |
| **Output** |    |    |



## getPersonaStatistics()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getSystemMessageOtherLanguage()

| Input      |    |    |
| ---------- | -- | -- |
| person | `Person` |  |
| **Output** | `String`   |    |



## getSystemMessage()

| Input      |    |    |
| ---------- | -- | -- |
| person | `Person` |  |,| persona | `Persona` |  |
| **Output** | `String`   |    |



## jsonGpt()

JSON GPT


| Input      |    |    |
| ---------- | -- | -- |
| message | string |  |,| schema | { [key: string]: { type: string, <br />description?: string, <br /> } } |  |
| **Output** |    |    |



## proactiveOutreach()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## sendChatAiStatsUpdate()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## sendDailyAlarmSms()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## truncateMessages()

Simple algo to truncate chat messages.

- omit everything from more than 24h ago except for the last 10 messages
- also everything that makes our input larger than 3000 tokens.

Can later be improved by analysing the messages, but this seems good enough for now to stay under the 3000 tokens...


| Input      |    |    |
| ---------- | -- | -- |
| chatMessages | `ChatMessage`[] |  |
| **Output** | { truncatedMessages: {  }[], <br />inputTokensCalculated: number, <br /> }   |    |



## weeklyMail()

There should be an initial amount of free credit and a weekly email to all users to give them some more free credit.

Weekly CRON to keep things going with the homeserver

It can email everyone that some credits were added to their account. Besides, there is probably always news and events.


| Input      |    |    |
| ---------- | -- | -- |
| isDryrun (optional) | boolean |  |
| **Output** |    |    |



## 🔹 ChatMessageAnalysis

TODO: this should simply be a data structure, inserted into the second argument as simplified schema! Why am I doing so difficult xD don't require simplifiedschema though, just a subset is fine





Properties: 

 | Name | Type | Description |
|---|---|---|
| isResponseVisualRequested  | boolean |  |



## 🔹 PersonaStatistics

Properties: 

 | Name | Type | Description |
|---|---|---|
| name (optional) | string |  |
| newMessagesTodayAmount (optional) | number |  |
| activeUsersTodayAmount (optional) | number |  |
| newUsersTodayAmount (optional) | number |  |



## 📄 cheapPayment (exported const)

## 📄 creditForCheap (exported const)

## 📄 creditForExpensive (exported const)

## 📄 defaultCostPerMessageCredit (exported const)

## 📄 expensivePayment (exported const)

## 📄 fixedTransactionCost (exported const)

## 📄 generateInstantResponseMessage (exported const)

Based on a new incoming message and the found model instances, an instant response can be sent back.

If not, just return undefined.


## 📄 getChatMessageAnalysis (exported const)

TODO: try it out and build out these pipelines. it's just diehard js horsemode, nothing difficult! see what sticks 🍝


## 📄 getCostPerMessageCredit (exported const)

## 📄 getCredit (exported const)

## 📄 getMessageLimitInfo (exported const)

## 📄 getMessagesAmountCheap (exported const)

## 📄 getMessagesAmountMore (exported const)

## 📄 getMinimumCredit (exported const)

## 📄 getPaywallResult (exported const)

## 📄 getPersonaStatistics (exported const)

## 📄 getSystemMessageOtherLanguage (exported const)

## 📄 getSystemMessage (exported const)

## 📄 jsonGpt (exported const)

JSON GPT


## 📄 maxDailyActiveUsers (exported const)

## 📄 percentageTransactionCost (exported const)

## 📄 personalities (exported const)

## 📄 proactiveOutreach (exported const)

## 📄 sendChatAiStatsUpdate (exported const)

## 📄 sendDailyAlarmSms (exported const)

## 📄 systemMessageCost (exported const)

## 📄 truncateMessages (exported const)

Simple algo to truncate chat messages.

- omit everything from more than 24h ago except for the last 10 messages
- also everything that makes our input larger than 3000 tokens.

Can later be improved by analysing the messages, but this seems good enough for now to stay under the 3000 tokens...


## 📄 weeklyMail (exported const)

There should be an initial amount of free credit and a weekly email to all users to give them some more free credit.

Weekly CRON to keep things going with the homeserver

It can email everyone that some credits were added to their account. Besides, there is probably always news and events.
  </details>

