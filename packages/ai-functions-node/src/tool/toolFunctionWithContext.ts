import { db } from "database";
import { FunctionContext } from "function-types";
import { Creation } from "model-types";
import { Queue } from "queue-types";
import { sdk } from "sdk-api";
import { StandardFunctionConfig } from "function-types";
import { signupWithEmailOrPhone } from "server-login";

/**
 * Function to be executed straight from the frontend, where details is replaced with actual parameters of the function you want to execute.
 *
 * `.functionContext` and `.functionName` to be stripped out of the form
 */
export const toolFunctionWithContext = async (
  functionContext: FunctionContext,
  functionName: string,
  email: string,
  /**
   * Needed in this format because we need to show it nicely in the form (maybe not needed, try without also)
   */
  details: { [parameterName: string]: any }
) => {
  const fn = sdk[functionName as keyof typeof sdk];

  const isNoTool = !fn || typeof fn !== "function" || !fn.domain;
  if (isNoTool) {
    return { isSuccessful: false, message: "This is no tool" };
  }

  // 1) save device email to device if not already
  const emailAdded = await signupWithEmailOrPhone(email);

  if (!emailAdded.isSuccessful) {
    return {
      isSuccessful: false,
      message: emailAdded.message,
    };
  }

  // 2) check how often you are running this function, there should be a rate limit, maybe later (TODO)

  // 2) get parameters
  const parameters = Object.values(details);

  // 3) validate parameters (TODO, can also partly be done in function itself because we need pretty strict maybe for length and stuff)

  // 4) add to queue
  const queueItem: Creation<Queue> = {
    functionName,
    parameters,
    executionAuthToken: functionContext.authToken,
    notifyLateAfterSeconds: 60,
    shouldNotifyOnResult: true,
  };
  const upsertResult = await db.upsert("Queue", queueItem);

  return {
    isSuccessful: upsertResult.isSuccesful,
    message: upsertResult.isSuccesful
      ? "Check your mail in a moment"
      : `Couldn't add to queue ${upsertResult.message}`,
  };
};

toolFunctionWithContext.config = {
  isPublic: true,
} satisfies StandardFunctionConfig;
