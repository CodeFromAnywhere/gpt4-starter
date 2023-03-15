import { BackendAsset } from "asset-type";
export declare const defaultMessage: (otpCode: string) => string;
export declare const signupBare: (config: {
    pictureImage?: BackendAsset | undefined;
    emailOrPhone: string;
    fullName?: string | undefined;
    customEmail?: ((otpCode: string, email: string) => string) | undefined;
    customSms?: ((otpCode: string, phoneNumber: string) => string) | undefined;
    credit?: number | undefined;
}) => Promise<{
    isSuccessful: boolean;
    message: string;
    emailOrPhone?: undefined;
} | {
    isSuccessful: boolean;
    emailOrPhone: string;
    message: string;
}>;
//# sourceMappingURL=signupBare.d.ts.map