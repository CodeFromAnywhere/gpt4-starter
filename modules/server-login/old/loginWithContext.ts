import { db } from "database";
import { FunctionContext } from "function-types";
import { findLoggedinPersonsWithContext } from "./findLoggedInPersonsWithContext";

/**
 * attaches the `Device` with `authToken` to a `Person` once all required authenticationMethods are provided. If not, it needs to return the required authenticationMethods so the user can attach those to the device until loggin is successful.
 */

export const loginWithContext = async (
  functionContext: FunctionContext
): Promise<{ isSuccessful: boolean; message: string }> => {
  const { device } = functionContext;

  const findPersonsResult = await findLoggedinPersonsWithContext(
    functionContext
  );

  if (!findPersonsResult.isSuccessful) {
    return {
      isSuccessful: findPersonsResult.isSuccessful,
      message: findPersonsResult.message,
    };
  }

  const personIds = findPersonsResult.persons?.map((x) => x.id);

  const updateResult = await db.update(
    "Device",
    (item) => item.id === device.id,
    (old) => ({
      ...old,
      personIds,
      authenticationMethods: [],
      currentPersonId: personIds?.[0],
    })
  );

  const isSuccessful = updateResult.isSuccesful || false;

  return {
    isSuccessful,
    message: isSuccessful
      ? "Logged in"
      : updateResult.message || "Something went wrong (weird)",
  };
};
