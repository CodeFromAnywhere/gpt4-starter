// this file is generated, you can edit it, but it will be re-generated based on the contextual prompts database

type PromptFunction = any;
import { processChatGptPrompt } from "./processChatGptPrompt";

/**
  Explain line-by-line
  */
export const explainLineByLine: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "explain-line-by-line",
    contextContent,
  });

  return result;
};

explainLineByLine.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-auditory-interface"],
};

explainLineByLine.domain = "explainLineByLine";

/**
  Write a story about this code and what's happening in there
  */
export const storytelling: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "storytelling",
    contextContent,
  });

  return result;
};

storytelling.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-auditory-interface"],
};

storytelling.domain = "storytelling";

export const biggestFunctionName: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "biggest-function-name",
    contextContent,
  });

  return result;
};

biggestFunctionName.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-comprehension"],
};

biggestFunctionName.domain = "biggestFunctionName";

export const documentationWriting: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "documentation-writing",
    contextContent,
  });

  return result;
};

documentationWriting.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-comprehension"],
};

documentationWriting.domain = "documentationWriting";

export const explainInDutch: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "explain-in-dutch",
    contextContent,
  });

  return result;
};

explainInDutch.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-comprehension"],
};

explainInDutch.domain = "explainInDutch";

export const explainInNepali: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "explain-in-nepali",
    contextContent,
  });

  return result;
};

explainInNepali.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-comprehension"],
};

explainInNepali.domain = "explainInNepali";

export const explainInPortuguese: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "explain-in-portuguese",
    contextContent,
  });

  return result;
};

explainInPortuguese.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-comprehension"],
};

explainInPortuguese.domain = "explainInPortuguese";

export const typescriptExplain: PromptFunction = async (
  contextContent: string,
  selectionContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "typescript-explain",
    contextContent,
    selectionContent,
  });

  return result;
};

typescriptExplain.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-comprehension"],
};

typescriptExplain.domain = "typescriptExplain";

export const improveCode: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "improve-code",
    contextContent,
  });

  return result;
};

improveCode.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-education"],
};

improveCode.domain = "improveCode";

export const cleanup: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "cleanup",
    contextContent,
  });

  return result;
};

cleanup.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-refactoring"],
};

cleanup.domain = "cleanup";

export const fixGrammarAndSpellingMistakes: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "fix-grammar-and-spelling-mistakes",
    contextContent,
  });

  return result;
};

fixGrammarAndSpellingMistakes.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-refactoring"],
};

fixGrammarAndSpellingMistakes.domain = "fixGrammarAndSpellingMistakes";

export const translateEverythingIntoHindi: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "translate-everything-into-hindi",
    contextContent,
  });

  return result;
};

translateEverythingIntoHindi.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-translation"],
};

translateEverythingIntoHindi.domain = "translateEverythingIntoHindi";

export const translateEverythingPortuguese: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "translate-everything-portuguese",
    contextContent,
  });

  return result;
};

translateEverythingPortuguese.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-translation"],
};

translateEverythingPortuguese.domain = "translateEverythingPortuguese";

export const translateEverything: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "translate-everything",
    contextContent,
  });

  return result;
};

translateEverything.contextualPromptInfo = {
  contextType: ["code"],
  isFavorite: true,
  categoryStack: ["code", "code-translation"],
};

translateEverything.domain = "translateEverything";

export const followUpQuestions: PromptFunction = async (
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "follow-up-questions",
  });

  return result;
};

followUpQuestions.contextualPromptInfo = {
  contextType: ["text"],
  categoryStack: [],
};

export const hookOneliners: PromptFunction = async (isDeferred?: boolean) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "hook-oneliners",
  });

  return result;
};

hookOneliners.contextualPromptInfo = {
  contextType: ["text"],
  categoryStack: [],
};

/**
  Investor pitch
  */
export const investorPitch: PromptFunction = async (
  contextContent: string,
  prompt_projectRelativePath: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "investor-pitch",
    contextContent,
    prompt_projectRelativePath,
  });

  return result;
};

investorPitch.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: [],
};

investorPitch.domain = "investorPitch";

export const outlineToInvestorPitch: PromptFunction = async (
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "outline-to-investor-pitch",
  });

  return result;
};

outlineToInvestorPitch.contextualPromptInfo = {
  contextType: ["text"],
  categoryStack: [],
};

/**
  Quiz
  */
export const quiz: PromptFunction = async (
  contextContent: string,
  prompt_projectRelativePath: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "quiz",
    contextContent,
    prompt_projectRelativePath,
  });

  return result;
};

quiz.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: [],
};

quiz.domain = "quiz";

/**
  Write a Haiku
  */
export const haiku: PromptFunction = async (
  anyContext: string,
  prompt_projectRelativePath: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "haiku",
    anyContext,
    prompt_projectRelativePath,
  });

  return result;
};

haiku.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "art"],
};

haiku.domain = "haiku";

/**
  Write a poem
  */
export const poem: PromptFunction = async (
  anyContext: string,
  prompt_projectRelativePath: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "poem",
    anyContext,
    prompt_projectRelativePath,
  });

  return result;
};

poem.contextualPromptInfo = {
  contextType: ["text", "code"],
  isFavorite: true,
  categoryStack: ["text", "art"],
};

poem.domain = "poem";

/**
  Ricktalk
  */
export const rickAndMortyRick: PromptFunction = async (
  anyContext: string,
  prompt_projectRelativePath: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "rick-and-morty-rick",
    anyContext,
    prompt_projectRelativePath,
  });

  return result;
};

rickAndMortyRick.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "art", "rick-and-morty"],
};

rickAndMortyRick.domain = "rickAndMortyRick";

/**
  Rick teaches Morty
  */
export const rickAndMorty: PromptFunction = async (
  contextContent: string,
  prompt_projectRelativePath: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "rick-and-morty",
    contextContent,
    prompt_projectRelativePath,
  });

  return result;
};

rickAndMorty.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "art", "rick-and-morty"],
};

rickAndMorty.domain = "rickAndMorty";

/**
  Let Kanye West write a poem about your selection
  */
export const ye: PromptFunction = async (
  selectionContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "ye",
    selectionContent,
  });

  return result;
};

ye.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "art"],
};

ye.domain = "ye";

/**
  Let Yoda say your selection in his words
  */
export const yodafy: PromptFunction = async (
  selectionContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "yodafy",
    selectionContent,
  });

  return result;
};

yodafy.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "art"],
};

yodafy.domain = "yodafy";

export const marcusAurelius: PromptFunction = async (
  selectionContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "marcus-aurelius",
    selectionContent,
  });

  return result;
};

marcusAurelius.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "conversation"],
};

marcusAurelius.domain = "marcusAurelius";

export const socratesAndSnoopDogg: PromptFunction = async (
  selectionContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "socrates-and-snoop-dogg",
    selectionContent,
  });

  return result;
};

socratesAndSnoopDogg.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "conversation"],
};

socratesAndSnoopDogg.domain = "socratesAndSnoopDogg";

export const williamShakespear: PromptFunction = async (
  selectionContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "william-shakespear",
    selectionContent,
  });

  return result;
};

williamShakespear.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "conversation"],
};

williamShakespear.domain = "williamShakespear";

export const developersQuote: PromptFunction = async (
  selectionContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "developers-quote",
    selectionContent,
  });

  return result;
};

developersQuote.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "social-media"],
};

developersQuote.domain = "developersQuote";

export const diaryToInstagram: PromptFunction = async (
  selectionContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "diary-to-instagram",
    selectionContent,
  });

  return result;
};

diaryToInstagram.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "social-media"],
};

diaryToInstagram.domain = "diaryToInstagram";

/**
  Emojify++
  */
export const addEmojiToEveryWord: PromptFunction = async (
  contextContent: string,
  prompt_projectRelativePath: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "add-emoji-to-every-word",
    contextContent,
    prompt_projectRelativePath,
  });

  return result;
};

addEmojiToEveryWord.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "text-bending"],
};

addEmojiToEveryWord.domain = "addEmojiToEveryWord";

/**
  Emojify
  */
export const emojiAugmentation: PromptFunction = async (
  contextContent: string,
  prompt_projectRelativePath: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "emoji-augmentation",
    contextContent,
    prompt_projectRelativePath,
  });

  return result;
};

emojiAugmentation.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "text-bending"],
};

emojiAugmentation.domain = "emojiAugmentation";

export const opposite: PromptFunction = async (
  contextContent: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "opposite",
    contextContent,
  });

  return result;
};

opposite.contextualPromptInfo = {
  contextType: ["text"],
  categoryStack: ["text", "text-bending"],
};

/**
  🤔 Explain
  */
export const explain: PromptFunction = async (
  contextContent: string,
  selectionContent: string,
  prompt_projectRelativePath: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "explain",
    contextContent,
    selectionContent,
    prompt_projectRelativePath,
  });

  return result;
};

explain.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "text-comprehension"],
};

explain.domain = "explain";

/**
  Translate to Portuguese
  */
export const translateToPortuguese: PromptFunction = async (
  contextContent: string,
  prompt_projectRelativePath: string,
  isDeferred?: boolean
) => {
  const result = await processChatGptPrompt({
    isDeferred,
    contextualPromptSlug: "translate-to-portuguese",
    contextContent,
    prompt_projectRelativePath,
  });

  return result;
};

translateToPortuguese.contextualPromptInfo = {
  contextType: ["text"],
  isFavorite: true,
  categoryStack: ["text", "translation"],
};

translateToPortuguese.domain = "translateToPortuguese";
