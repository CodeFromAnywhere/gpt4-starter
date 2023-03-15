import { StandardFunctionConfig } from "./StandardFunctionConfig";
/**
 * Function to be called when a llm result comes in
 */
export type LlmPromptResultFunction = {
    (resultMessage: string): void;
    config: StandardFunctionConfig;
};
//# sourceMappingURL=LlmResultFunction.d.ts.map