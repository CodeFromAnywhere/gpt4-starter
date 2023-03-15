# Detect language

detect-language (`OperationClassification` node-cjs)



# Api reference

## detectLanguage()

Function that can efficiently detect the language of any content

performance: takes ±15ms now, seems okay, if needed there are plenty ways to improve it!


## IDEAS:

✅ use `/Users/clarity/os/operations/tools/language/simplify-text/assets/unigram-frequencies-object.json` to make `detectLanguage` for english (remove the uncommon words to make it more efficient, also, we can simply use a string with spaces and apply "includes", maybe that's faster, or an array? if we just use the top 2000 words or so, it's plenty fast though, probably)

make `detectLanguage(string/filePath, canContainMultiple?:boolean) => {[Language]:number}` that either efficiently matches only the first words if there can only be one language, or the whole text if there can be more. if percentage of words that are english is too low, it's "other" for now (which is probably dutch, then xD)



## OLD NOTES:

data prereq

1) get 10000 most common words of all major languages
2) create multiple sub-dataset of that with X most common words for every language

function:
3) parse input into markdown paragraphs and go over every part based on variability
4) for every piece of content, for every word, find it in every common-words-array... if the % of words for one language is higher than 80% at some point that is more than 5 words, we are pretty sure that it's that language
5) return a MarkdownParse where the language is specified at every level (or, for a simple string, simply return the detected language)

afterthoughts:

- optionally we can use the context for having a more accurate and logial detection in case the amount of words in a piece of content is insufficient. it is not simply nearest neighbor, but more of a downwards up: the heading always follows the content... But for JSON it IS the nearest neighbor


Other data I want: a language matrix! simply put the 10000 most common words of English in google translate one-by-one (maybe it works with newlines?) (or, if we have it by then, use the offline translation)

That can become a language matrix. of course there will be mistakes, but it will already be super useful


| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |,| canContainMultipleLanguages (optional) | boolean |  |
| **Output** | english / other   |    |



## 📄 detectLanguage (exported const)

Function that can efficiently detect the language of any content

performance: takes ±15ms now, seems okay, if needed there are plenty ways to improve it!


## IDEAS:

✅ use `/Users/clarity/os/operations/tools/language/simplify-text/assets/unigram-frequencies-object.json` to make `detectLanguage` for english (remove the uncommon words to make it more efficient, also, we can simply use a string with spaces and apply "includes", maybe that's faster, or an array? if we just use the top 2000 words or so, it's plenty fast though, probably)

make `detectLanguage(string/filePath, canContainMultiple?:boolean) => {[Language]:number}` that either efficiently matches only the first words if there can only be one language, or the whole text if there can be more. if percentage of words that are english is too low, it's "other" for now (which is probably dutch, then xD)



## OLD NOTES:

data prereq

1) get 10000 most common words of all major languages
2) create multiple sub-dataset of that with X most common words for every language

function:
3) parse input into markdown paragraphs and go over every part based on variability
4) for every piece of content, for every word, find it in every common-words-array... if the % of words for one language is higher than 80% at some point that is more than 5 words, we are pretty sure that it's that language
5) return a MarkdownParse where the language is specified at every level (or, for a simple string, simply return the detected language)

afterthoughts:

- optionally we can use the context for having a more accurate and logial detection in case the amount of words in a piece of content is insufficient. it is not simply nearest neighbor, but more of a downwards up: the heading always follows the content... But for JSON it IS the nearest neighbor


Other data I want: a language matrix! simply put the 10000 most common words of English in google translate one-by-one (maybe it works with newlines?) (or, if we have it by then, use the offline translation)

That can become a language matrix. of course there will be mistakes, but it will already be super useful

# Tests

<details><summary>Show test information(3)</summary>
    
  # test()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 result (unexported const)

## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (2)</summary>
    
  # detectFolderLanguage()

Scan all md files and count the amount of english files and files containing another language


NB: another way: by looking at the top 10000 words in the `getMarkdownWordDictionaryForFolder` and matching them to languages)


| Input      |    |    |
| ---------- | -- | -- |
| basePath | string |  |
| **Output** |    |    |



## 📄 detectFolderLanguage (exported const)

Scan all md files and count the amount of english files and files containing another language


NB: another way: by looking at the top 10000 words in the `getMarkdownWordDictionaryForFolder` and matching them to languages)
  </details>

