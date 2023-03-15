"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var detectLanguage_1=require("./detectLanguage");console.time("detectLanguage");var result=(0,detectLanguage_1.detectLanguage)("# Active word minimisation\n\n**Active word minimisation has the potential to make computers orders of magnitude more efficient, and to build computers that truly understand language in a much more efficient way, which would ultimately result in me being able to create my own LLM with very little compute, and run it offline, from my neckbook**\n\nAt first you have a vocabulary. Since you are a big team or big company, your vocabulary is very broad since many people come from many countries. Every person has their own vocabulary. In order for a company to communicate better and better, an algorithm could actively find the optimal words to be replaced and removed and provide everyone with lists of words and definitions they need to understand every week. Based on the text, calls, and video-calls it can be detected which people need to learn what.\n\nI can give a simple example to make this more clear.\n\nIf a Spanish person only knows the word “grand” and doesn’t really know what “huge” means, and the American only knows what “huge” means and has a different definition for “grand” in his mind, there will be a lot of transformation of information every time they use those words to each other. However, if the algorithm would detect this subtle difference in knowledge it can hint them realtime that they should start using different words, pronounce them differently, or whatever.\n\nThis technology could let teams that have trouble communicating grow together in a matter of months.\n\nBesides this there are many other applications of machine learning technology. The biggest problem right now is that the economy creates many bad applications that don’t benefit people but benefit companies, and other companies will be hurt. It’s a battle of who has the best AI and can make the other company less effective.\n\nIf we keep going like this it will probably not end well.\n\nThe Metaverse could prove to be a dangerous thing that will have many crises.\n\nAnd by the way... You don’t need to have VR glasses on your head all day to be in the meta verse. Headphones with active noise cancellation can progress to be just as immersive, and they are already accepted.\n\n# Why?\n\nThe amount of words we interact with has increased significantly in the last time, while the amount of words we comprehend has decreased significantly.\n\nWhen there are two similar words that differ just a little, it is not worth it if communication of these different words are misinterpreted more than how much the difference in definition matters.\n\nTherefore, a minimsation of words will increase overall comprehension of the whole.\n\nOf course it depends on the individual, but over all, the amount of words should decrease in order to optimise overall comprehension of the world around us.\n\nBy the way, this applies to both humans and machines.\n\nNB: in order to look normal, a great obfuscation technique would be to replace the \"basewords\" by their synonyms when distributing information.\n\n## Why we have so many words?\n\n- If you have more words in a single language, it's easier to find rhymes, which makes it easier to remember things, an advantage compared to people with langauges that don't have many words.\n- Globalisation caused people learning more languages and thus requiring them to learn even more words.\n- Before the internet we had a much bigger vocabulary (average people). However, this is becoming less and less due to sparsification of attention in the internet age. The words remain, and when people end up in focus bubbles, they become worse at understanding each other because different groups of people forget different words.\n\n## Active word minimisation for AI\n\nPotentially, we can create more efficient and smaller LLM's if we reduce words since the AI doesn't need to learn this. All we need for this, is the ability to efficiently reduce vocabulary across a huge dataset of text (like, 500GB). This seems doable.\n\n## Active character minimisation\n\nComputers read my text using utf8. Utf8 means every character is represented with 8 bits, if I'm correct. We can double efficiency if we can represent it in a more efficient way. I think it's easily possible to store a regular text document with 4 times less space. Would this make all processing also 4x faster? If so, that's a huge unfair advantage in computing.\n\n2E1 = 2\n2E2 = 4\n2E3 = 8\n2E4 = 16\n2E8 is 256\n\nWhat if we store a word in every byte? Only possible with 255 words in our vocabulary, which is feasible for most words. Exceptions can be represented in the last bitcombo, followed by the word, spelled in 8bit letters/characters. Or using 2 bytes to get the word from a bigger word vocabulary (65k words). This means we can store most stuff about 6x more effifciently (see `countLettersPerWord`)\n\n# Todo:\n\n✅ `scanMarkdown` Scan all md files in `knowledge` (or a subset thereof) and count all occuring words.\n\n`scanTypescript` should be able to scan all ts(x) files in /operations (or a subset thereof) and count all occuring words (but ensure that pascalcased, kebabcased, snakecased, and camelcased words are seen as separate words)\n\n✅ Optimise performance of the above to make it sub-second (if possible)\n\n✅ use `/Users/clarity/os/operations/tools/language/simplify-text/assets/unigram-frequencies-object.json` to make `detectLanguage` for english (remove the uncommon words to make it more efficient, also, we can simply use a string with spaces and apply \"includes\", maybe that's faster, or an array? if we just use the top 2000 words or so, it's plenty fast though, probably)\n\nmake `detectLanguage(string/filePath, canContainMultiple?:boolean) => {[Language]:number}` that either efficiently matches only the first words if there can only be one language, or the whole text if there can be more. if percentage of words that are english is too low, it's \"other\" for now (which is probably dutch, then xD)\n\nit would be super nice to analyse a folder on the languages all md files in there contain. it can be done by running `detectLanguage` on every file (or by looking at the top 10000 words in the `getMarkdownWordDictionaryForFolder` and matching them to languages)\n\n🌐 also find one for dutch and possibly others (it's called unigram frequency) in order to get the most common words in lots of languages\n\n🌐 unigram matrix? word translation matrix? must exist, it's too obviously useful... would save lots of work if I can just get it and directly put in my `WordMatrix`. If not, ChatGPT should be able to do it with a simple prompt applied in steps, maybe just build it like this. Shouldn't be too hard actually for this usecase.\n\n🌐 ensure we can efficiently replace all non-alphabetical characters in a file with its alphabetical representative, or a space, so we can be sure we just get words, no other weird things.\n\n🌐 do some research on how we can count the words in a file even more efficiently (using node.js). get inspired on stack overflow, who knows what i'll learn\n\n🌐 find a faster sorting algorithm online and implement that in `js-util` (for sorting an object where the values are numbers). then apply sorting too.\n\nmaybe we can optimise the \"count-all\" step more, or other steps. Ensure every step gets measured and I understand why it takes the time it takes.\n\nMake a function `findWord` that allows you to find all occurence of a certain word, where it will return all occurences of one word, showing a wider context around it and a link to the file.\n\nMake a function `replaceWord` that allows you to replace a word with a similar, more common one. I can do this if it seems fine based on the occurence check defined above.\n\nAdd all words into the `WordMatrix`, and whenever I run `replaceWord`, add the option to just add the link to the `WordMatrix` instead.\n\nFind all bolded and tagged words to find word combinations and fill `WordCombination`.\n\n# Storage method\n\ncreate `.md2` storage format which stores your text using active character minimisation and active word minimisation. We can store things 6x more efficiently this way, and potentially, thus, increase LLM learning speed by 6x (not taken into account other side effects of having less words for speed of training)\n\nProof this and then come up with more things that could potentially speed up LLM learning.\n\nIf proven, potentially this could also make compilers and parsers faster (not sure). Let's try this and see if it can make things faster.\n\nFirst thing to do when proven, is probably to try to replicate something like GPT2 with this technique, and see the results. The results MIGHT blow my mind. smirk.\n\nUltimately, I can throw in my statements dataset that I create, which would yield a much better LLM even, since we can incentivise the LLM to tell us the truth. I bet it's also much smaller if we use something like this.\n\nWe can also simplify sentences (active sentence simplification?) by creating more uniformity in grammar, and splitting up bigger sentences into multiple smaller ones.\n\nUltimately, if we also do this, we might be able to represent an entire sentence in 4 bytes or so, potentially giving us a speedup of about x25 or so, depending on how long the sentences can be and how many sentences there truly need to be. For 65k statements, we can even go down to 2 bytes per sentence.\n\nJust represent a text as a concatenation of statements, plus a concatenation of words for the exceptions!!!!!!!!!\n\nThis is a dream.\nMust be.\n");console.timeEnd("detectLanguage");
//# sourceMappingURL=detectLanguage.test.js.map