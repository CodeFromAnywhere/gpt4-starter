import { FunctionContext } from "function-types";
/**
 * Function to be executed straight from the frontend, where details is replaced with actual parameters of the function you want to execute.
 *
 * `.functionContext` and `.functionName` to be stripped out of the form
 */
export declare const toolFunctionWithContext: {
    (functionContext: FunctionContext, functionName: string, email: string, details: {
        [parameterName: string]: any;
    }): Promise<{
        isSuccessful: boolean | undefined;
        message: string;
    }>;
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=toolFunctionWithContext.d.ts.map