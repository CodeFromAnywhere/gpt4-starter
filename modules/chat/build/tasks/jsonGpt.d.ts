import { StandardResponse } from "function-types";
/**
JSON GPT
 */
export declare const jsonGpt: <T extends {
    [key: string]: any;
}>(message: string, schema: {
    [key: string]: {
        type: string;
        description?: string | undefined;
    };
}) => Promise<StandardResponse & {
    tokensUsed?: number | undefined;
    chatResponse?: string | undefined;
    jsonResponse?: T | undefined;
}>;
//# sourceMappingURL=jsonGpt.d.ts.map