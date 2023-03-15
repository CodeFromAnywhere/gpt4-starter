# Generative functions node

generative-functions-node (`OperationClassification` node-cjs)



# Api reference

## getContextualPromptResults()

Gets all contextualPromptResults, but only if specific things are true

- For any prompt we have for this filetype: get it from the database
- For prompts about a folder: path/to/folder/.index/prompt-results.json
- For prompts about a file or a selection thereof: path/to/folder/.index/[filename]/prompt-results.json

NB: the slug of the ones in index should be the ID, and does not need to be set by the user, because we cannot guarantee that it's no duplicate.


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { prompt_projectRelativePath?: string, <br />promptSlugs?: string[], <br /> } |  |
| **Output** |    |    |



## getContextualPrompts()

Returns all contextual prompts for the selection and for the page with the right context type


| Input      |    |    |
| ---------- | -- | -- |
| contextType (optional) | `FileType` | If not given, will return all |,| scopeProjectRelativePath (optional) | string |  |
| **Output** |    |    |



## 📄 getContextualPromptResults (exported const)

Gets all contextualPromptResults, but only if specific things are true

- For any prompt we have for this filetype: get it from the database
- For prompts about a folder: path/to/folder/.index/prompt-results.json
- For prompts about a file or a selection thereof: path/to/folder/.index/[filename]/prompt-results.json

NB: the slug of the ones in index should be the ID, and does not need to be set by the user, because we cannot guarantee that it's no duplicate.


## 📄 getContextualPrompts (exported const)

Returns all contextual prompts for the selection and for the page with the right context type

# Internal

<details><summary>Show internal (8)</summary>
    
  # augmentMarkdown()

Now that I've written this all down, it seems to be a quite an expensive operation, but we never need to do it for ensire websites, just for one page, and the result can easily be cached. I need to write a regex function that matches all text from a list of searchterms in markdown except if it's part of a link or image, and reduce the matches, creating a new markdown string every time. I think there are algorithms though that are more efficient because if there are like thousands of matches on a 2mb text, the thing would take much longer. Maybe it's more efficient to split up the text in smaller pieces and do the regex for every piece individually. This would have a limitation that you can't select cross-section, but I don't think that's my usecase anyway. If we later add support for making statements about a chapter or subsection and stuff like that, this limitation can also be resolved.

Augments markdown in many ways for multiple purposes.

- Parse the markdown instead of showing the results as React buttons. The link to "#" alt can become the same as a nice AugmentedWord hover, when it's found to be a selection result, we can highlight the selection whenever we hover over a link with that same text as alt as well, and add that hover as a note at the end of the selection.
- ensure the parse parses `WordCombination`, `WordMatrix`, `Statement`, `AugmentedWord`, and `ContextualPromptResult`. It's a lot of work, but definitely worth it. Should be parsed as
- remove the parsing of everything in the markdown render. This is also the end of sending `AugmentedWord`s to the frontend

LATER:

- CTA's, headers, footers, ads (check how I was planning to get those at codestorys-node or so)
- Word frequency occurency styling
- Subtexts and subwords


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getContextualPromptsArray()

Wrapper around the database to support the usecase of storing a file in a custom location for contextualPrompts.


| Input      |    |    |
| ---------- | -- | -- |
| scopeProjectRelativePath (optional) | string | If available, will also get the scoped context |
| **Output** |    |    |



## getFolderRelativeScopeDbFilePath()

Function to centralise the convention of the db file location of a scoped prompt


| Input      |    |    |
| ---------- | -- | -- |
| filename (optional) | string |  |
| **Output** | `String`   |    |



## makeMarkdownLink()

function that writes markdown for a text + url + alt. This may differ per platform in the end, for now I'll use my own: `["text"(alt)](url)`


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



## 📄 augmentMarkdown (exported const)

Now that I've written this all down, it seems to be a quite an expensive operation, but we never need to do it for ensire websites, just for one page, and the result can easily be cached. I need to write a regex function that matches all text from a list of searchterms in markdown except if it's part of a link or image, and reduce the matches, creating a new markdown string every time. I think there are algorithms though that are more efficient because if there are like thousands of matches on a 2mb text, the thing would take much longer. Maybe it's more efficient to split up the text in smaller pieces and do the regex for every piece individually. This would have a limitation that you can't select cross-section, but I don't think that's my usecase anyway. If we later add support for making statements about a chapter or subsection and stuff like that, this limitation can also be resolved.

Augments markdown in many ways for multiple purposes.

- Parse the markdown instead of showing the results as React buttons. The link to "#" alt can become the same as a nice AugmentedWord hover, when it's found to be a selection result, we can highlight the selection whenever we hover over a link with that same text as alt as well, and add that hover as a note at the end of the selection.
- ensure the parse parses `WordCombination`, `WordMatrix`, `Statement`, `AugmentedWord`, and `ContextualPromptResult`. It's a lot of work, but definitely worth it. Should be parsed as
- remove the parsing of everything in the markdown render. This is also the end of sending `AugmentedWord`s to the frontend

LATER:

- CTA's, headers, footers, ads (check how I was planning to get those at codestorys-node or so)
- Word frequency occurency styling
- Subtexts and subwords


## 📄 getContextualPromptsArray (exported const)

Wrapper around the database to support the usecase of storing a file in a custom location for contextualPrompts.


## 📄 getFolderRelativeScopeDbFilePath (exported const)

Function to centralise the convention of the db file location of a scoped prompt


## 📄 makeMarkdownLink (exported const)

function that writes markdown for a text + url + alt. This may differ per platform in the end, for now I'll use my own: `["text"(alt)](url)`
  </details>

