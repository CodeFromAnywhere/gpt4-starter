# Openai wrapper

openai-wrapper (`OperationClassification` undefined)



# Api reference

## calculateTokenCount()

Both input and output tokens count toward these quantities. For example, if your API call used 10 tokens in the message input and you received 20 tokens in the message output, you would be billed for 30 tokens.

To see how many tokens are used by an API call, check the usage field in the API response (e.g., response[‘usage’][‘total_tokens’]).

To see how many tokens are in a text string without making an API call, use OpenAI’s tiktoken Python library. Example code can be found in the OpenAI Cookbook’s guide on how to count tokens with tiktoken.

Each message passed to the API consumes the number of tokens in the content, role, and other fields, plus a few extra for behind-the-scenes formatting. This may change slightly in the future.

If a conversation has too many tokens to fit within a model’s maximum limit (e.g., more than 4096 tokens for gpt-3.5-turbo), you will have to truncate, omit, or otherwise shrink your text until it fits. Beware that if a message is removed from the messages input, the model will lose all knowledge of it.

Note too that very long conversations are more likely to receive incomplete replies. For example, a gpt-3.5-turbo conversation that is 4090 tokens long will have its reply cut off after just 6 tokens.


NB: best way to locally count tokens:

- https://github.com/openai/tiktoken/issues/22#issuecomment-1436005516
- https://github.com/dqbd/tiktoken
- https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb


| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |,| isDavinci (optional) | boolean |  |
| **Output** | {  }   |    |



## 📄 calculateTokenCount (exported const)

Both input and output tokens count toward these quantities. For example, if your API call used 10 tokens in the message input and you received 20 tokens in the message output, you would be billed for 30 tokens.

To see how many tokens are used by an API call, check the usage field in the API response (e.g., response[‘usage’][‘total_tokens’]).

To see how many tokens are in a text string without making an API call, use OpenAI’s tiktoken Python library. Example code can be found in the OpenAI Cookbook’s guide on how to count tokens with tiktoken.

Each message passed to the API consumes the number of tokens in the content, role, and other fields, plus a few extra for behind-the-scenes formatting. This may change slightly in the future.

If a conversation has too many tokens to fit within a model’s maximum limit (e.g., more than 4096 tokens for gpt-3.5-turbo), you will have to truncate, omit, or otherwise shrink your text until it fits. Beware that if a message is removed from the messages input, the model will lose all knowledge of it.

Note too that very long conversations are more likely to receive incomplete replies. For example, a gpt-3.5-turbo conversation that is 4090 tokens long will have its reply cut off after just 6 tokens.


NB: best way to locally count tokens:

- https://github.com/openai/tiktoken/issues/22#issuecomment-1436005516
- https://github.com/dqbd/tiktoken
- https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb


## calculateMessagesTokenCount()

NB: in this case, we could theoretically still use this with davinci.
NB: we are making the encoding in this function isntead of using `calculateTokenCount` because it might be more efficient like this


| Input      |    |    |
| ---------- | -- | -- |
| messages | `ChatMessage`[] |  |,| isDavinci (optional) | boolean |  |
| **Output** | {  }[]   |    |



## chatCompletion()

More direct way to interact with openai api chat completion

docs: https://platform.openai.com/docs/guides/chat/introduction


| Input      |    |    |
| ---------- | -- | -- |
| messages | `ChatCompletionRequestMessage`[] |  |,| config (optional) | `ChatCompletionConfig` |  |
| **Output** |    |    |



## chat()

wraps `chatCompletion` for it to work with our own `ChatMessage` model.


| Input      |    |    |
| ---------- | -- | -- |
| person | `Person` |  |,| truncatedMessages | `ChatMessage`[] |  |,| config (optional) | { inputTokensCalculated?: number, <br />isInstant?: boolean, <br />model?: `OpenAiChatCompletionModelEnum`, <br />openaiConfig?: { temperature?: number, <br />top_p?: number, <br />n?: number, <br />stream?: boolean, <br />stop?: `CreateChatCompletionRequestStop`, <br />max_tokens?: number, <br />presence_penalty?: number, <br />frequency_penalty?: number, <br />logit_bias?: {  }, <br />user?: string, <br /> }, <br />systemMessage?: string, <br /> } |  |
| **Output** |    |    |



## gpt3()

Simplified api for gpt3 from open AI

Rate limit reached for default-text-davinci-003 in organization org-Z2Wq1CTmyzHDI6SApqk5gBLs on tokens per min. Limit: 250000.000000 / min. Current: 275070.000000 / min. Contact support@openai.com if you continue to have issues.

TODO: log all api calls


| Input      |    |    |
| ---------- | -- | -- |
| input | string |  |,| config (optional) | { model?: `OpenAiTextCompletionModelEnum`, <br />isInstant?: boolean, <br /> } |  |
| **Output** |    |    |



## 🔹 OpenAiTextCompletionModelEnum

Which model?


## text models

- gpt-3.5-turbo: ChatGPT MODEL! 10x cheaper
- text-davinci-003: Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.
- text-curie-001: Very capable, but faster and lower cost than Davinci.
- text-babbage-001: Capable of straightforward tasks, very fast, and lower cost.
- text-ada-001: Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.


## Code models

- code-davinci-002: Most capable Codex model. Particularly good at translating natural language to code. In addition to completing code, also supports inserting completions within code.
- code-cushman-001: Almost as capable as Davinci Codex, but slightly faster. This speed advantage may make it preferable for real-time applications.








## 📄 calculateMessagesTokenCount (exported const)

NB: in this case, we could theoretically still use this with davinci.
NB: we are making the encoding in this function isntead of using `calculateTokenCount` because it might be more efficient like this


## 📄 chatCompletion (exported const)

More direct way to interact with openai api chat completion

docs: https://platform.openai.com/docs/guides/chat/introduction


## 📄 chat (exported const)

wraps `chatCompletion` for it to work with our own `ChatMessage` model.


## 📄 gpt3 (exported const)

Simplified api for gpt3 from open AI

Rate limit reached for default-text-davinci-003 in organization org-Z2Wq1CTmyzHDI6SApqk5gBLs on tokens per min. Limit: 250000.000000 / min. Current: 275070.000000 / min. Contact support@openai.com if you continue to have issues.

TODO: log all api calls


## 📄 gpt3 (exported const)

Simplified api for gpt3 from open AI

Rate limit reached for default-text-davinci-003 in organization org-Z2Wq1CTmyzHDI6SApqk5gBLs on tokens per min. Limit: 250000.000000 / min. Current: 275070.000000 / min. Contact support@openai.com if you continue to have issues.

TODO: log all api calls


## 📄 openAiTextCompletionModels (exported const)

# Internal

<details><summary>Show internal (15)</summary>
    
  # calculateOpenaiMessagesTokenCountSum()




| Input      |    |    |
| ---------- | -- | -- |
| messages | `ChatCompletionRequestMessage`[] |  |,| isDavinci (optional) | boolean |  |
| **Output** | {  }   |    |



## calculateOpenaiMessagesTokenCount()

| Input      |    |    |
| ---------- | -- | -- |
| messages | `ChatCompletionRequestMessage`[] |  |
| **Output** | {  }[]   |    |



## getOpenaiInstance()

| Input      |    |    |
| ---------- | -- | -- |
| personaId (optional) | string |  |
| **Output** |    |    |



## messagesToTokenableText()

| Input      |    |    |
| ---------- | -- | -- |
| messages | `ChatCompletionRequestMessage`[] |  |
| **Output** | `String`   |    |



## whisper()

Use whisper api...


| Input      |    |    |
| ---------- | -- | -- |
| personaId (optional) | string |  |
| **Output** |    |    |



## 🔹 ChatCompletionConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| inputTokensCalculated (optional) | number |  |
| isInstant (optional) | boolean |  |
| model (optional) | string |  |
| openaiConfig (optional) | object |  |



## 🔹 OpenAiChatCompletionModelEnum

Which model?

- gpt-3.5-turbo: ChatGPT MODEL! 10x cheaper

Ensure it works the same and requires us to provide the chat-history (or not?). If not, history is only needed to determine whether or not we're going to answer in the first place. And also for extra chains of course, in some cases.








## 📄 calculateOpenaiMessagesTokenCountSum (exported const)

## 📄 calculateOpenaiMessagesTokenCount (exported const)

## 📄 getOpenaiInstance (exported const)

## 📄 messagesToTokenableText (exported const)

## 📄 openAiChatModelsReadonly (exported const)

## 📄 openAiChatModels (exported const)

## 📄 openAiTextCompletionModelsReadonly (exported const)

## 📄 whisper (exported const)

Use whisper api...
  </details>

