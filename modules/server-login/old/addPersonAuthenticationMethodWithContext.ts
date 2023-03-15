import { db } from "database";
import { isEmail } from "model-types";
import {
  AuthenticationMethod,
  AuthenticationMethodMethod,
  Device,
} from "peer-types";
import { FunctionContext } from "function-types";
import { addAuthenticationMethod } from "./addAuthenticationMethod";

export const addPersonAuthenticationMethodWithContext = async (
  functionContext: FunctionContext,
  method: AuthenticationMethodMethod,
  handle: AuthenticationMethod["handle"],
  credential?: string
) => {
  const { isSuccessful, message, authenticationMethod } =
    await addAuthenticationMethod(method, handle, true, credential);

  if (!isSuccessful || !authenticationMethod) {
    return { isSuccessful, message };
  }

  const updateResult = await db.update(
    "Person",
    (item) => item.id === functionContext.device.currentPersonId,
    (old) => ({
      ...old,
      authenticationMethods:
        old.authenticationMethods.concat(authenticationMethod),
    })
  );

  return { isSuccessful: updateResult.isSuccesful, message };
};
