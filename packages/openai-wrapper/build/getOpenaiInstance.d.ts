import { StandardResponse } from "function-types";
import { OpenAIApi } from "openai";
export declare const getOpenaiInstance: (personaId?: string) => Promise<StandardResponse & {
    openai?: OpenAIApi | undefined;
}>;
//# sourceMappingURL=getOpenaiInstance.d.ts.map