import { db } from "database";
import { comparePassword } from "encrypt-password";
import { FunctionContext } from "function-types";
import { Device, Person } from "peer-types";

/**
 * This finds all persons you should be logged in as according to all your device's Authentication Methods.
 *
 * Does not update your device to add the found persons.
 */
export const findLoggedinPersonsWithContext = async (
  functionContext: FunctionContext
): Promise<{
  isSuccessful: boolean;
  persons?: Person[];
  message: string;
}> => {
  const { device } = functionContext;

  if (!device) {
    return {
      isSuccessful: false,
      message: "Couldn't find that device",
    };
  }

  const allPersons = await db.get("Person");

  // NB: probably need to extrahere this part so I can use it to view the authentication status while logging in...

  const persons = allPersons.filter((person) => {
    const matchingMethods = person.authenticationMethods.filter(
      (authenticationMethod) => {
        // NB: finds the method with the same handle and credential
        const matchingMethod = device.authenticationMethods.find((method) => {
          const sameMethod = method.method === authenticationMethod.method;

          const sameHandle =
            method.handle.toLowerCase() ===
            authenticationMethod.handle.toLowerCase();

          const isCredentialCorrect =
            method.credential &&
            authenticationMethod.encryptedCredential &&
            comparePassword(
              method.credential,
              authenticationMethod.encryptedCredential
            );

          return sameMethod && sameHandle && isCredentialCorrect;
        });

        return !!matchingMethod;
      }
    );

    return false;
  });

  if (!persons || persons.length === 0) {
    console.log({ methods: device.authenticationMethods });
    return {
      isSuccessful: false,
      message: "Couldn't find anyone with those credentials",
    };
  }

  return { isSuccessful: true, persons, message: "Found the persons" };
};
