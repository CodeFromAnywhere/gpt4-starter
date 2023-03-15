import { StandardResponse } from "function-types";
import { Configuration, OpenAIApi } from "openai";
import { getPersona } from "persona-functions-node";

export const getOpenaiInstance = async (
  personaId?: string
): Promise<StandardResponse & { openai?: OpenAIApi }> => {
  // NB: this is not the most efficient, another fileread here. Ensure it's cached in memory!

  const persona = await getPersona(
    personaId ? (item) => item.id === personaId : undefined
  );

  if (!persona) {
    return { isSuccessful: false, message: "No persona" };
  }

  const apiKey = persona.openAiToken;

  if (!apiKey) {
    return {
      isSuccessful: false,
      message: "Please setup an API Key for OpenAI",
    };
  }

  const configuration = new Configuration({
    // organization: "not needed?",
    apiKey,
  });

  const openai = new OpenAIApi(configuration);

  return { isSuccessful: true, openai };
};
