import { ChatMessageAnalysis } from "./ChatMessageAnalysis";
/**
 * TODO: try it out and build out these pipelines. it's just diehard js horsemode, nothing difficult! see what sticks 🍝
 */
export declare const getChatMessageAnalysis: (message: string) => Promise<import("function-types").StandardResponse & {
    tokensUsed?: number | undefined;
    chatResponse?: string | undefined;
    jsonResponse?: ChatMessageAnalysis | undefined;
}>;
//# sourceMappingURL=getChatMessageAnalysis.d.ts.map