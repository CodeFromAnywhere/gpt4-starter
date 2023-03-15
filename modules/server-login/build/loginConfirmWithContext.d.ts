import { FunctionContext } from "function-types";
export declare const loginConfirmWithContext: {
    (functionContext: FunctionContext, emailOrPhone: string, otp: string): Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=loginConfirmWithContext.d.ts.map