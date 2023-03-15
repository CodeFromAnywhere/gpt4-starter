import { OperationPathParse } from "code-types";
export type CompleteOperationPathParse = OperationPathParse & {
    filePath: string;
};
export declare const getValidatedOperationPathParse: (filePath: string) => undefined | CompleteOperationPathParse;
//# sourceMappingURL=getValidatedOperationPathParse.d.ts.map