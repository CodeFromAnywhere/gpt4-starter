import { kebabCase, lowerCaseArray } from "convert-case";
import { db } from "database";
import { WordCombination, WordMatrix } from "language-types";
import { Creation } from "model-types";

/**
 * Adds word either to the WordMatrix or to the WordCombination database model
 */
export const addWord = async (
  /**
   * MUST be an english word or word combination written in the latin alphabet
   */
  word: string,
  description?: string
): Promise<{ isSuccessful: boolean; message?: string }> => {
  // if the word is a combination of multiple words (e.g. large-language-model is large +language + model), it should be added as a word combination with a description
  // const wordMatrixs = await db.get("WordMatrix");
  // potentially we should check here if the word already exists or if the word combination already exists, but this is not required as long as we use `.onlyInsert: true`
  const parts = lowerCaseArray(word);

  if (parts.length > 1) {
    const newWordCombination: Creation<WordCombination> = {
      name: kebabCase(word),
      description: description || "",
      wordMatrixSlugs: parts,
    };

    const upsertResult = await db.upsert(
      "WordCombination",
      newWordCombination,
      { onlyInsert: true }
    );

    return {
      isSuccessful: upsertResult?.isSuccesful || false,
      message: upsertResult?.isSuccesful
        ? "Added word combination"
        : upsertResult?.message,
    };
  }

  const name = parts[0];

  const newWord: Creation<WordMatrix> = {
    name,
    description,
    english: { latin: name },
  };

  const upsertResult = await db.upsert("WordMatrix", newWord, {
    onlyInsert: true,
  });

  return {
    isSuccessful: upsertResult?.isSuccesful || false,
    message: upsertResult?.isSuccesful ? "Added word" : upsertResult?.message,
  };
};
