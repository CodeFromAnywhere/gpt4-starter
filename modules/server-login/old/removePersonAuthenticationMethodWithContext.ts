import { db } from "database";
import { FunctionContext } from "function-types";
import { AuthenticationMethodMethod } from "peer-types";

/**
 * removes an `authenticationMethod` from `Person` from currentPerson from authenticated device
 */
export const removePersonAuthenticationMethodWithContext = async (
  functionContext: FunctionContext,
  method: AuthenticationMethodMethod
) => {
  if (
    !functionContext.device.currentPersonId ||
    !functionContext.device.persons
  ) {
    return {
      isSuccessful: false,
      message: "Not logged in",
    };
  }

  const person = functionContext.device.persons.find(
    (x) => x.id === functionContext.device.currentPersonId
  );

  if (!person) {
    return {
      isSuccessful: false,
      message: "Not logged in",
    };
  }

  const authenticationMethod = person.authenticationMethods.find(
    (x) => x.method === method
  );

  if (!authenticationMethod) {
    return { isSuccessful: false, message: "You didn't add that method yet" };
  }

  const newAuthenticationMethods = person.authenticationMethods.filter(
    (x) => x.method !== method
  );

  const updateResult = await db.update(
    "Person",
    (item) => item.id === functionContext.device.currentPersonId,
    (old) => ({ ...old, authenticationMethods: newAuthenticationMethods })
  );

  return {
    isSuccessful: updateResult.isSuccesful,
    message: updateResult.isSuccesful ? "Removed" : updateResult.message,
  };
};
