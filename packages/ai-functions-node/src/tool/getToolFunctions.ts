import { StandardFunctionConfig, TsFunction } from "function-types";
import { db } from "database";
import { sdk } from "sdk-api";
import { getPublicBundleConfig } from "function-functions-node";

/**
 * Returns all tool functions to the frontend
 */
export const getToolFunctions = async (): Promise<TsFunction[]> => {
  const tsFunctions = await db.get("TsFunction");

  getPublicBundleConfig();
  const toolFunctions = tsFunctions.filter((x) => {
    const config = sdk[x.name as keyof typeof sdk]?.config as
      | StandardFunctionConfig
      | undefined;
    const isTool = config && config?.domain;
    return isTool;
  });

  return toolFunctions;
};
getToolFunctions.config = {
  /**
   * Not public, just Next.js static this one
   */
  isPublic: false,
} satisfies StandardFunctionConfig;
