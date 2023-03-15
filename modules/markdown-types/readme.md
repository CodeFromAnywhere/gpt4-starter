# Markdown types

markdown-types (`OperationClassification` cjs)



# Api reference

## 🔹 MarkdownParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string |  |
| createdAt (optional) | number |  |
| openedAt (optional) | number |  |
| updatedAt (optional) | number |  |
| deletedAt (optional) | number |  |
| createdFirstAt (optional) | number |  |
| parameters  | object |  |
| content (optional) | array |  |
| raw  | string |  |



## 🔹 MarkdownChunk

Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number |  |
| content (optional) | string |  |
| markdownEmbed (optional) | object |  |
| markdownLink (optional) | object |  |
| title (optional) | string |  |
| children (optional) | array |  |



## 🔹 MarkdownIndex

Any markdown file should be following this format in its frontmatter, and we should aim to automatically enhance every written text with this.

Should be stored as frontmatter as much as possible

TODO: migrate from `WebMarkdownFile` etc. to this.





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| createdDate (optional) | string |  |
| createdTime (optional) | string |  |
| updatedAt  | number |  |
| updatedDate (optional) | string |  |
| updatedTime (optional) | string |  |
| isPrivate (optional) | boolean | Only accessible to admin |
| isSecret (optional) | boolean | Don't show in the file explorer if you don't have access to this file. NB: only works in combination with pricing or `.isPrivate: true` |
| isAnonymous (optional) | boolean |  |
| isDraft (optional) | boolean | If true, will not show up for read-only people |
| isPublic (optional) | boolean | If true, this file/folder will be available to the public |
| canRead_groupSlugs (optional) | array | If set, file content will not be available for people that aren't part of this group. |
| canWrite_groupSlugs (optional) | array |  |
| isAvailableFromDateAt (optional) | number | If this is a date in the future, the file won't be available until that date |
| isPreset (optional) | boolean |  |
| isPostable (optional) | boolean |  |
| isCodestory (optional) | boolean |  |
| tsInterfaceIds (optional) | array |  |
| tsFunctionIds (optional) | array |  |
| bundleConfigSlugs (optional) | array |  |
| operationIds (optional) | array |  |
| reference_assets (optional) | array |  |
| language (optional) | string |  |
| isLanguageMixed (optional) | boolean |  |
| location (optional) | string |  |
| locationDescription (optional) | string |  |
| latitudeLongitude (optional) | string |  |
| source (optional) | string |  |
| isSource (optional) | boolean |  |
| title (optional) | string |  |
| seoTitle (optional) | string |  |
| keywords (optional) | array |  |
| seoKeywords (optional) | array |  |
| summary (optional) | string |  |
| statements (optional) | array |  |
| takeAways (optional) | array |  |
| socialMediaPosts (optional) | array |  |
| imagePromptDescriptions (optional) | array |  |
| suggestedProjectRelativeFolderPath (optional) | string |  |
| headerImageRelativePath (optional) | string |  |
| headerTitle (optional) | string |  |
| headerBig (optional) | boolean |  |
| headerSubTitle (optional) | string |  |
| header_markdownCallToActionSlugs (optional) | array |  |
| domain (optional) | string |  |
| brand (optional) | string |  |
| markdownCallToActionSlugs (optional) | array |  |
| shop_itemIds (optional) | array |  |
| author_personSlugs (optional) | array |  |
| interestSlugs (optional) | array |  |
| price (optional) | number |  |
| vocabularyWordsUsedAmount (optional) | number |  |



## 🔹 PostableProperties

`Postable` is not extending a modeltype anymore, it can be attached to any `MarkdownModelType` model





Properties: 

 | Name | Type | Description |
|---|---|---|
| isPreset (optional) | boolean |  |
| isPostable (optional) | boolean |  |
| isCodestory (optional) | boolean |  |
| tsInterfaceIds (optional) | array |  |
| tsFunctionIds (optional) | array |  |
| bundleConfigSlugs (optional) | array |  |
| operationIds (optional) | array |  |
| reference_assets (optional) | array |  |



## 🔸 MarkdownCallToAction

jsonMultiple model









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
| path (optional) | string | Absolute queryPath to the CTA. Leave empty for going to the homepage. Empty paths will be omitted on the domains where you are already on that domain... If there's a path, will be omitted on other domains (`MarkdownCallToAction`s with a different hostname) |
| hostname  | string | Hostname as described in `https://www.w3schools.com/js/js_window_location.asp`. |
| title (optional) | string |  |
| description (optional) | string |  |
| ctaButtonText (optional) | string |  |
| onlyFooter (optional) | boolean |  |
| onlyHeader (optional) | boolean |  |
| isMinimised (optional) | boolean |  |
| bannerImage (optional) | object |  |



## markdownParseToMarkdownModelType()

makes a markdownModelType from a markdownParse.


| Input      |    |    |
| ---------- | -- | -- |
| markdownParse | {  } |  |
| **Output** |    |    |



## tryParseDate()

Tries to parse a date from a string
- implements default behavior of `new Date` with a try catch
- returns a unix timestamp (ms since 1970 AD)

TODO: put in a better location... date-util?


| Input      |    |    |
| ---------- | -- | -- |
| dateString | string |  |
| **Output** | number   |    |



## 🔹 AuthorizationProperties

Properties: 

 | Name | Type | Description |
|---|---|---|
| isPrivate (optional) | boolean | Only accessible to admin |
| isSecret (optional) | boolean | Don't show in the file explorer if you don't have access to this file. NB: only works in combination with pricing or `.isPrivate: true` |
| isAnonymous (optional) | boolean |  |
| isDraft (optional) | boolean | If true, will not show up for read-only people |
| isPublic (optional) | boolean | If true, this file/folder will be available to the public |
| canRead_groupSlugs (optional) | array | If set, file content will not be available for people that aren't part of this group. |
| canWrite_groupSlugs (optional) | array |  |
| isAvailableFromDateAt (optional) | number | If this is a date in the future, the file won't be available until that date |



## 🔹 MarkdownEmbed

Anything in the format `![alt](src)`

NB: I need to be very clear how this one works





Properties: 

 | Name | Type | Description |
|---|---|---|
| alt  | string |  |
| src  | string |  |
| type  | string |  |



## 🔹 MarkdownLink

Anything in the format `[alt](href)`

It needs to be clear how this works. There is a convention for this, and I should implement that as good as possible, and document it here





Properties: 

 | Name | Type | Description |
|---|---|---|
| alt  | string |  |
| href  | string |  |
| type  | string |  |



## 🔹 MarkdownParagraph

Properties: 

 | Name | Type | Description |
|---|---|---|
| paragraph  | string |  |
| categoryStack  | array |  |
| level (optional) | number |  |



## 🔹 TextJson

TODO: Rename





Properties: 

 | Name | Type | Description |
|---|---|---|
| json (optional) | object |  |
| typescriptJson (optional) | object |  |
| markdownJson (optional) | object |  |
| path  | string |  |
| isFolder  | boolean |  |
| stats (optional) | object |  |
| metaData (optional) | object |  |
| isCancelRecursionResult (optional) | boolean |  |



## 📄 markdownParseToMarkdownModelType (exported const)

makes a markdownModelType from a markdownParse.


## 📄 tryParseDate (exported const)

Tries to parse a date from a string
- implements default behavior of `new Date` with a try catch
- returns a unix timestamp (ms since 1970 AD)

TODO: put in a better location... date-util?

# Internal

<details><summary>Show internal (4)</summary>
    
  # parseMarkdownModelTimestamp()

First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent

If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system

If that doesn't succeed, sometimes we'll set it to  the current timestamp


| Input      |    |    |
| ---------- | -- | -- |
| parameters | `Frontmatter` |  |,| markdownParse | `MarkdownParse` |  |,| parameterName | createdAt / createdFirstAt / updatedAt / deletedAt / openedAt |  |
| **Output** | {  }   |    |



## 🔹 MarkdownContentLevel

0 is a paragraph
1-6 is h1 until h6








## 🔹 MarkdownHeader

Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number |  |
| title  | string |  |



## 📄 parseMarkdownModelTimestamp (exported const)

First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent

If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system

If that doesn't succeed, sometimes we'll set it to  the current timestamp
  </details>

