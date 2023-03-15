# Watch markdown

watch-markdown (`OperationClassification` undefined)



# Api reference

# CLI

<details><summary>Show CLI information (2)</summary>
    
  # makeMarkdownIndexCli()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 makeMarkdownIndexCli (unexported const)

  </details>

# Internal

<details><summary>Show internal (8)</summary>
    
  # getBetterLocation()

holy grail of LLM's: data structurisation


| Input      |    |    |
| ---------- | -- | -- |
| config | { fileName: string, <br />shortDescription: string, <br />projectRelativePath: string, <br />folderStructure: string, <br /> } |  |
| **Output** |    |    |



## getIsPrivate()

| Input      |    |    |
| ---------- | -- | -- |
| contents | string |  |
| **Output** |    |    |



## makeMarkdownIndex()

Creates `MarkdownIndex` using GPT and other things.


| Input      |    |    |
| ---------- | -- | -- |
| absoluteMarkdownFilePath | string |  |
| **Output** |    |    |



## watchMarkdown()

TODO:


## Refactor MarkdownIndex storage

- put it in frontmatter of the markdown!
- don't watch for .markdownIndex
- remove all .markdownindex.json
- watch contents of md file (frontmatter only) to see if index-version is "old"
- set everything being old...


==============


Every time a markdown file comes in (watcher), can we do some default functions and GPT for it.

Created `MarkdownIndex` at `[filename].MarkdownIndex.json`

- frontmatter
- add author, createdAt (non-GPT)
- title, keywords, seo keywords, seo title
- [filename].index.json:
- statements
- take-aways
- social-media-posts
- images: GPT to get visual descriptions for any markdown file, which in turn can be turned into images
- summary
- snippets: Interesting standalone snippet finding in bigger video/audio `audiofile-name].snippets.json`


TODO: Offline GPT-less naming:

Match the audio recording .md against word combinations, model names, and folder names (and operation names, with that). name of the md can be based on those matches. fire out an exact strategy later. this way, the name can be auto-generated without a GPT, which is way more free/scalable/offline/decentralised, right now


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 getBetterLocation (exported const)

holy grail of LLM's: data structurisation


## 📄 getIsPrivate (exported const)

## 📄 makeMarkdownIndex (exported const)

Creates `MarkdownIndex` using GPT and other things.


## 📄 watchMarkdown (exported const)

TODO:


## Refactor MarkdownIndex storage

- put it in frontmatter of the markdown!
- don't watch for .markdownIndex
- remove all .markdownindex.json
- watch contents of md file (frontmatter only) to see if index-version is "old"
- set everything being old...


==============


Every time a markdown file comes in (watcher), can we do some default functions and GPT for it.

Created `MarkdownIndex` at `[filename].MarkdownIndex.json`

- frontmatter
- add author, createdAt (non-GPT)
- title, keywords, seo keywords, seo title
- [filename].index.json:
- statements
- take-aways
- social-media-posts
- images: GPT to get visual descriptions for any markdown file, which in turn can be turned into images
- summary
- snippets: Interesting standalone snippet finding in bigger video/audio `audiofile-name].snippets.json`


TODO: Offline GPT-less naming:

Match the audio recording .md against word combinations, model names, and folder names (and operation names, with that). name of the md can be based on those matches. fire out an exact strategy later. this way, the name can be auto-generated without a GPT, which is way more free/scalable/offline/decentralised, right now
  </details>

