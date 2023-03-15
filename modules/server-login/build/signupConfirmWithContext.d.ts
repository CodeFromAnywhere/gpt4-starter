import { FunctionContext } from "function-types";
export declare const signupConfirmWithContext: {
    (functionContext: FunctionContext, emailOrPhone: string, otp: string): Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=signupConfirmWithContext.d.ts.map