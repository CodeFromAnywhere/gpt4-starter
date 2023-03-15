import { db } from "database";
import { AuthenticationMethod, AuthenticationMethodMethod } from "peer-types";
import { FunctionContext } from "function-types";
import { addAuthenticationMethod } from "./addAuthenticationMethod";
import { mergeNestedObject } from "js-util";

/**
 * returns new function context with added authenticationmethod
 */
export const addDeviceAuthenticationMethodWithContext = async (
  functionContext: FunctionContext,
  method: AuthenticationMethodMethod,
  handle: string,
  /**
   * Only needed in case of "usernamePassword"
   */
  credential?: string
): Promise<{
  isSuccessful?: boolean;
  message?: string;
  functionContext?: FunctionContext;
  authenticationMethod?: AuthenticationMethod;
}> => {
  const { isSuccessful, message, authenticationMethod } =
    await addAuthenticationMethod(method, handle, false, credential);
  if (!isSuccessful || !authenticationMethod) {
    return { isSuccessful, message };
  }
  // removes this method if you was alrady trying the same method (basically overwrite)
  const cleanAuthenticationMethods =
    functionContext.device.authenticationMethods?.filter(
      (x) => x.method !== authenticationMethod.method
    ) || [];

  // then adds the new one
  const newAuthenticationMethods =
    cleanAuthenticationMethods.concat(authenticationMethod);

  const updateResult = await db.update(
    "Device",
    (item) => item.authToken === functionContext.authToken,
    (old) => {
      return {
        ...old,
        authenticationMethods: newAuthenticationMethods,
      };
    }
  );

  const newFunctionContext = mergeNestedObject(functionContext, {
    device: {
      authenticationMethods: newAuthenticationMethods,
    },
  });

  return {
    isSuccessful: updateResult.isSuccesful,
    message: "Method added",
    functionContext: newFunctionContext,
    authenticationMethod,
  };
};
