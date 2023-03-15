import { kebabCase, slugify } from "convert-case";
import { db } from "database";
import { Person } from "peer-types";

export const findOrCreatePerson = async (config: {
  rawFromNumber?: string;
  fromName?: string;
}): Promise<{
  person?: Person;
  newUsersAmount: number;
  isFirstMessage: boolean;
}> => {
  const { fromName, rawFromNumber } = config;
  // NB: to handle a million users, this needs to be done differently.
  const persons = await db.get("Person");
  const newUsersAmount = persons.filter(
    (item) => item.createdAt > Date.now() - 86400000
  ).length;

  //2) match from number to a `Person`, if any... create a new person, if not...

  const fromNumber = rawFromNumber?.startsWith("whatsapp:")
    ? rawFromNumber.substring("whatsapp:".length)
    : rawFromNumber;

  // NB: to make this more efficient, we need to create a kv-store for phone --> Person.slug
  const personAlready = persons.find((x) => x.phoneNumber === fromNumber);
  const isFirstMessage = !personAlready;

  const fromSlug = fromName ? slugify(kebabCase(fromName)) : undefined;

  const slug =
    fromSlug && fromSlug.length >= 6
      ? `${fromSlug}-${Math.round(Math.random() * 9999)}`
      : `${fromSlug || "user"}${Math.round(Math.random() * 9999999)}`;

  const upsertResult = personAlready
    ? undefined
    : await db.upsert("Person", {
        name: fromName || "Guest",
        slug,
        phoneNumber: fromNumber,
        lastActivityAt: Date.now(),
      });

  const newPerson = upsertResult?.isSuccesful
    ? (await db.get("Person")).find((x) => x.phoneNumber === fromNumber)
    : undefined;

  const person = personAlready || newPerson;

  return { person, newUsersAmount, isFirstMessage };
};
