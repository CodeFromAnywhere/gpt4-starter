"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.detectLanguage=void 0;var topEnglishWords_json_1=__importDefault(require("./topEnglishWords.json")),detectLanguage=function(e,t){
/*
  OLD:
  
  {}: {
    text?: string;
    markdown?: string;
    json?: any;
    variability?: "sentence" | "paragraph" | "subheader" | "header" | "none";
    accuracy?: "low" | "medium" | "high";
  }*/
// for performance reasons, take the first 10k characters
var r=e.substring(0,1e4),n="()!@#$%^&*,./'\"`-_\n\\:[]?\r’".split("").reduce((function(e,t){return e.replaceAll(t," ")}),r).split(" ").filter((function(e){return e.length>=1}));
//TODO: improve this by simply replacing any non-alphabetical character with a space, should be fine
// console.log({ commonEnglishWordRatio });
return n.map((function(e){return topEnglishWords_json_1.default.includes(e.toLowerCase())})).filter((function(e){return!!e})).length/n.length>.5?"english":"other"};
/**

Function that can efficiently detect the language of any content

performance: takes ±15ms now, seems okay, if needed there are plenty ways to improve it!
 
# IDEAS:
 
✅ use `/Users/clarity/os/operations/tools/language/simplify-text/assets/unigram-frequencies-object.json` to make `detectLanguage` for english (remove the uncommon words to make it more efficient, also, we can simply use a string with spaces and apply "includes", maybe that's faster, or an array? if we just use the top 2000 words or so, it's plenty fast though, probably)

make `detectLanguage(string/filePath, canContainMultiple?:boolean) => {[Language]:number}` that either efficiently matches only the first words if there can only be one language, or the whole text if there can be more. if percentage of words that are english is too low, it's "other" for now (which is probably dutch, then xD)


# OLD NOTES:

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
 */exports.detectLanguage=detectLanguage;
//# sourceMappingURL=detectLanguage.js.map