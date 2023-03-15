# Chat

chat (`OperationClassification` node-cjs)



# Api reference

## processMessage()

All logic to process a general purpose message. This can be antying like a WhatsApp message, an email, an SMS, literally any form of communication between you (persona) and a person.


| Input      |    |    |
| ---------- | -- | -- |
| config | { newUsersAmount?: number, <br />person: `Person`, <br />finalAssistantPersona: `FinalAssistantPersona`, <br />message: string, <br />isFirstMessage?: boolean, <br />isFreeMessage?: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 processMessage (exported const)

All logic to process a general purpose message. This can be antying like a WhatsApp message, an email, an SMS, literally any form of communication between you (persona) and a person.

# Internal

<details><summary>Show internal (66)</summary>
    
  # bahasaTeacher()




| Input      |    |    |
| ---------- | -- | -- |
| context | `CustomAssistantContext` |  |
| **Output** |    |    |



## commandResult()

| Input      |    |    |
| ---------- | -- | -- |
| chatMessage | `Creation<ChatMessage>` |  |,| person | `Person` |  |,| persona | `FinalAssistantPersona` |  |
| **Output** |    |    |



## defaultAssistant()

Default assistants. Still mixes some stuff. Later to be ported to all custom assistants, for higher customisability and less chaos


| Input      |    |    |
| ---------- | -- | -- |
| context | `CustomAssistantContext` |  |
| **Output** |    |    |



## elonGpt()

| Input      |    |    |
| ---------- | -- | -- |
| context | `CustomAssistantContext` |  |
| **Output** |    |    |



## englishTeacher()

| Input      |    |    |
| ---------- | -- | -- |
| context | `CustomAssistantContext` |  |
| **Output** |    |    |



## generateInstantResponseMessage()

Based on a new incoming message and the found model instances, an instant response can be sent back.

If not, just return undefined.


| Input      |    |    |
| ---------- | -- | -- |
| chatMessage | `Creation<ChatMessage>` |  |,| person | `Person` |  |,| persona | `FinalAssistantPersona` |  |,| config | { isFirstMessage?: boolean, <br />newUsersAmount?: number, <br /> } |  |
| **Output** |    |    |



## getChatMessageAnalysis()

TODO: try it out and build out these pipelines. it's just diehard js horsemode, nothing difficult! see what sticks 🍝


| Input      |    |    |
| ---------- | -- | -- |
| message | string |  |
| **Output** |    |    |



## getChatResult()

Assistant-specific chat result


| Input      |    |    |
| ---------- | -- | -- |
| config | { person: `Person`, <br />persona: `FinalAssistantPersona`, <br />truncatedMessageHistory: `Creation<ChatMessage>`[], <br />fullMessageHistory: `Creation<ChatMessage>`[], <br />inputTokensCalculated: number, <br />chatMessage: `Creation<ChatMessage>`, <br /> } |  |
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
| person | `Person` |  |,| persona | `FinalAssistantPersona` |  |
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
| chatMessage | `Creation<ChatMessage>` |  |,| history | `ChatMessage`[] |  |,| person | `Person` |  |,| persona | `FinalAssistantPersona` |  |,| config | { isFirstMessage?: boolean, <br />newUsersAmount?: number, <br /> } |  |
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



## languageTeacher()

Any language teacher could use a dualprompt where one of the prompts has a chained additional prompt. Time to repsonse doubles, llm cost triples, but it will be far more useful:

- analyses your message, and gives tips on how to improve grammar, spelling, and vocabulary.
- responds to your message in whatever language you sent it in
- after that: translates the response into your language if it was the target language, and vice versa.

After all results are in, they are combined into a response and sent back to whatsapp.

Additionally, a voice wrapper would be amazing for this! Whisper + Say would be enough. If we do this though, we need to ensure the server load stays low for scalability.


## *UPDATE*

Doesn't work so well! I think it's better with my own word matrix. Let's add some settings, the way I had it in the UI would be perfect.

It'd be great to have:

- known words in target language
- target language
- spoken language (detect)
- base language (should be english)

Then, we can do different prompts based on what is said

- if the spoken language is not target or base, reply with an error message
- if the spoken language is target language
- analyse what the user is trying to say (target to base, GPT)
- reply to that (base to base, GPT)
- wordmatrix step
- if the spoken language is english
- figure out if it's a question about language (JSON GPT)
- if it's a question about language, assume it's about target language, and explain about grammar, spelling, and vocabulary with lots of examples
- if not provide in multiple parts
- provide 3 sentences in the target language that would accomplish the same goal in the format "base sentence = target sentence" (base to target, GPT)
- reply to it (base to base, GPT)
- wordmatrix step


## Wordmatrix step:

Input base language text. Based on the level and settings, translate some words into target language, with or without the original word in parenthesis (word matrix)


| Input      |    |    |
| ---------- | -- | -- |
| context | `CustomAssistantContext` |  |,| config | { level: beginner / intermediate / advanced, <br />targetLanguage: string, <br /> } |  |
| **Output** |    |    |



## proactiveOutreach()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## processMessageAfterChat()

To be executed after chat. Needs to be separate because we need to return something within a 15s timeout


| Input      |    |    |
| ---------- | -- | -- |
| config | { isTimedOut: boolean, <br />instantResponse: `ChatReturnType`, <br />person: `Person`, <br />persona: `Persona`, <br />chatMessage: `Creation<ChatMessage>`, <br />isFreeMessage?: boolean, <br /> } |  |
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
| **Output** | { truncatedMessageHistory: {  }[], <br />inputTokensCalculated: number, <br /> }   |    |



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



## 📄 bahasaTeacher (exported const)

## 📄 cheapPayment (exported const)

## 📄 commandResult (exported const)

## 📄 creditForCheap (exported const)

## 📄 creditForExpensive (exported const)

## 📄 customAssistants (exported const)

Custom assistants can be added here by providing the name that equals the slug, and the custom assistant function.


## 📄 defaultAssistant (exported const)

Default assistants. Still mixes some stuff. Later to be ported to all custom assistants, for higher customisability and less chaos


## 📄 defaultCostPerMessageCredit (exported const)

## 📄 elonGpt (exported const)

## 📄 englishTeacher (exported const)

## 📄 expensivePayment (exported const)

## 📄 fixedTransactionCost (exported const)

## 📄 generateInstantResponseMessage (exported const)

Based on a new incoming message and the found model instances, an instant response can be sent back.

If not, just return undefined.


## 📄 getChatMessageAnalysis (exported const)

TODO: try it out and build out these pipelines. it's just diehard js horsemode, nothing difficult! see what sticks 🍝


## 📄 getChatResult (exported const)

Assistant-specific chat result


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


## 📄 languageTeacher (exported const)

Any language teacher could use a dualprompt where one of the prompts has a chained additional prompt. Time to repsonse doubles, llm cost triples, but it will be far more useful:

- analyses your message, and gives tips on how to improve grammar, spelling, and vocabulary.
- responds to your message in whatever language you sent it in
- after that: translates the response into your language if it was the target language, and vice versa.

After all results are in, they are combined into a response and sent back to whatsapp.

Additionally, a voice wrapper would be amazing for this! Whisper + Say would be enough. If we do this though, we need to ensure the server load stays low for scalability.


## *UPDATE*

Doesn't work so well! I think it's better with my own word matrix. Let's add some settings, the way I had it in the UI would be perfect.

It'd be great to have:

- known words in target language
- target language
- spoken language (detect)
- base language (should be english)

Then, we can do different prompts based on what is said

- if the spoken language is not target or base, reply with an error message
- if the spoken language is target language
- analyse what the user is trying to say (target to base, GPT)
- reply to that (base to base, GPT)
- wordmatrix step
- if the spoken language is english
- figure out if it's a question about language (JSON GPT)
- if it's a question about language, assume it's about target language, and explain about grammar, spelling, and vocabulary with lots of examples
- if not provide in multiple parts
- provide 3 sentences in the target language that would accomplish the same goal in the format "base sentence = target sentence" (base to target, GPT)
- reply to it (base to base, GPT)
- wordmatrix step


## Wordmatrix step:

Input base language text. Based on the level and settings, translate some words into target language, with or without the original word in parenthesis (word matrix)


## 📄 maxDailyActiveUsers (exported const)

## 📄 percentageTransactionCost (exported const)

## 📄 proactiveOutreach (exported const)

## 📄 processMessageAfterChat (exported const)

To be executed after chat. Needs to be separate because we need to return something within a 15s timeout


## 📄 rickGpt (exported const)

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


## 📄 yeGpt (exported const)

  </details>

