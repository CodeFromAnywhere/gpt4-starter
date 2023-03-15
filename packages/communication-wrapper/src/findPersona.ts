import { FinalAssistantPersona, Person } from "peer-types";
import { getPersona } from "persona-functions-node";

export const findPersona = async (
  person: Person,
  toNumber: string,
  twilioAccountSid: string
): Promise<FinalAssistantPersona | undefined> => {
  const custom_persona =
    process.env.NODE_ENV !== "production" && person.custom_personaSlug
      ? await getPersona((item) => {
          const isThisOne = item.slug === person.custom_personaSlug;
          return isThisOne;
        })
      : undefined;

  let persona = await getPersona((item, primaryPersona) => {
    const numberMatch =
      `whatsapp:${item.twilioWhatsappFromPhoneNumber}` === toNumber ||
      item.twilioFromPhoneNumber === toNumber;

    const twilioAcccountSidMatch =
      (item.twilioAccountSid || primaryPersona?.twilioAccountSid) ===
      twilioAccountSid;

    return numberMatch && twilioAcccountSidMatch;
  });

  // apply the custom state... except the from number!
  if (custom_persona) {
    persona = {
      ...custom_persona,
      twilioWhatsappFromPhoneNumber: persona?.twilioWhatsappFromPhoneNumber,
    };
  }

  return persona;
};
