import { FunctionContext } from "function-types";
/**

Returns a real FunctionContext for testing purposes. the functionContext returned is a real one that connects to a real `Device` and optionally `Person`, depending on the `groupSlug` you want to find someone for.

NB: for simplicity's sake, the current implementation provides a `FuncitonContext` without `tsfunction` and without `serverContext` (as this is not needed for current use-case)

 */
export declare const getTestFunctionContext: (groupSlug: string | "public") => Promise<FunctionContext | undefined>;
//# sourceMappingURL=getTestFunctionContext.d.ts.map