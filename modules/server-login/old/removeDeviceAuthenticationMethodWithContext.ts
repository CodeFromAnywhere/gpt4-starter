import { db } from "database";
import { FunctionContext } from "function-types";
import { AuthenticationMethodMethod } from "peer-types";

/**
 * removes an `authenticatedMethod` from `Device`
 *
 * Usually the authentication methods are an attempt to login into a new account, so if you remove something it doesnt have impact on the accounts you already logged into, because these authentications are not stored on the device but on the person.
 *
 * We can therefore remove it without much validation
 */
export const removeDeviceAuthenticationMethodWithContext = async (
  functionContext: FunctionContext,
  method: AuthenticationMethodMethod
) => {
  const newAuthenticationMethods =
    functionContext.device.authenticationMethods.filter(
      (x) => x.method !== method
    );

  const updateResult = await db.update(
    "Device",
    (item) => item.authToken === functionContext.authToken,
    (old) => ({ ...old, authenticationMethods: newAuthenticationMethods })
  );

  return {
    isSuccessful: updateResult.isSuccesful,
    message: updateResult.isSuccesful ? "Removed" : updateResult.message,
  };
};
