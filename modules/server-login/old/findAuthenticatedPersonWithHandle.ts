import { db } from "database";
import { AuthenticationMethodMethod } from "peer-types";

/**
 * Check if the handle is already taken by some person in the system
 */
export const findAuthenticatedPersonWithHandle = async (
  method: AuthenticationMethodMethod,
  handle: string
) => {
  const persons = await db.get("Person");
  const alreadyPerson = persons.find((person) => {
    const matchingAuthMethod = person.authenticationMethods.find(
      (authMethod) =>
        authMethod.method === method &&
        authMethod.isAuthenticated &&
        authMethod.handle === handle
    );

    return !!matchingAuthMethod;
  });
  return alreadyPerson;
};
