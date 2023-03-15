import { ProjectWatcher } from "function-types";
/**
TODO:

# Refactor MarkdownIndex storage

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
 */
export declare const watchMarkdown: ProjectWatcher;
//# sourceMappingURL=watchMarkdown.d.ts.map