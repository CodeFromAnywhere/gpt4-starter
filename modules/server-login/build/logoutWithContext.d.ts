import { FunctionContext } from "function-types";
/**
 * Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to logout
 *
 * Needed for having `authToken` with GET as well in a safe manner (e.g. for images)
 */
export declare const logoutWithContext: {
    (functionContext: FunctionContext, rememberAuthentication?: boolean): Promise<{
        isSuccessful: boolean | undefined;
        message: string;
    }>;
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=logoutWithContext.d.ts.map