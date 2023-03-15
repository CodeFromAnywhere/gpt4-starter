import { db } from "database";
import { Statement } from "language-types";
import { Creation } from "model-types";

/**
 * Adds `Statement`
 */
export const addStatement = async (
  /**
   * MUST be an english statement
   */
  statement: string,
  /**
   * defaults to 0.5
   */
  importancy?: number,
  /**
   * defaults to 1
   */
  agreement?: number
): Promise<{ isSuccessful: boolean; message?: string }> => {
  if (importancy !== undefined && (importancy < 0 || importancy > 1)) {
    return {
      isSuccessful: false,
      message: "Importancy, when filled in, must be between [0,1]",
    };
  }
  if (agreement !== undefined && (agreement < 0 || agreement > 1)) {
    return {
      isSuccessful: false,
      message: "Agreement, when filled in, must be between [0,1]",
    };
  }

  const newStatement: Creation<Statement> = {
    description: statement,
    importancy: importancy === undefined ? 0.5 : importancy,
    agreement: agreement === undefined ? 1 : agreement,
  };

  const upsertResult = await db.upsert("Statement", newStatement, {
    onlyInsert: true,
  });

  return {
    isSuccessful: upsertResult?.isSuccesful || false,
    message: upsertResult?.isSuccesful
      ? "Statement added"
      : upsertResult?.message,
  };
};
