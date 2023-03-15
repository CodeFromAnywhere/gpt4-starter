# Chat message orm

chat-message-orm (`OperationClassification` undefined)



# Api reference

# Internal

<details><summary>Show internal (15)</summary>
    
  # getChatMessagesPath()




| Input      |    |    |
| ---------- | -- | -- |
| projectRoot | string |  |,| personSlug | string |  |,| personaSlug | string |  |,| dateString | string |  |
| **Output** | `String`   |    |



## getChatMessages()

Ensure the chat is stored per `Person.slug`, per `Persona.slug` and per date (`yyyy-mm-dd`). VERY IMPORTANT TO SCALE THIS.

Example location:

`os/knowledge/persons/[slug]/chat-messages/[persona-slug]/[yyyy-mm-dd].json`.

TODO: in case it's a message for a group:

`os/knowledge/groups/[slug]/chat-messages/[persona-slug]/[yyyy-mm-dd].json`.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getPersonPath()

| Input      |    |    |
| ---------- | -- | -- |
| projectRoot | string |  |,| slug | string |  |
| **Output** | `String`   |    |



## getPersonSlug()

| Input      |    |    |
| ---------- | -- | -- |
| projectRoot | string |  |,| key | `PersonIndex` |  |,| value | string |  |
| **Output** |    |    |



## getPerson()

More performant way to find a person

TODO: if we're going to use this, it's super important to ensure we can replace all current queries with this.


| Input      |    |    |
| ---------- | -- | -- |
| key | `PersonIndex` |  |,| value | string |  |
| **Output** |    |    |



## insertChatMessages()

For performance reasons, exception model


| Input      |    |    |
| ---------- | -- | -- |
| personSlug | string |  |,| personaSlug | string |  |,| chatMessages | `Creation<ChatMessage>`[] |  |
| **Output** |    |    |



## setPerson()

| Input      |    |    |
| ---------- | -- | -- |
| person | `Creation<Person>` |  |
| **Output** |    |    |



## 🔹 PersonIndex

## 📄 getChatMessagesPath (exported const)

## 📄 getChatMessages (exported const)

Ensure the chat is stored per `Person.slug`, per `Persona.slug` and per date (`yyyy-mm-dd`). VERY IMPORTANT TO SCALE THIS.

Example location:

`os/knowledge/persons/[slug]/chat-messages/[persona-slug]/[yyyy-mm-dd].json`.

TODO: in case it's a message for a group:

`os/knowledge/groups/[slug]/chat-messages/[persona-slug]/[yyyy-mm-dd].json`.


## 📄 getPersonPath (exported const)

## 📄 getPersonSlug (exported const)

## 📄 getPerson (exported const)

More performant way to find a person

TODO: if we're going to use this, it's super important to ensure we can replace all current queries with this.


## 📄 insertChatMessages (exported const)

For performance reasons, exception model


## 📄 setPerson (exported const)

  </details>

