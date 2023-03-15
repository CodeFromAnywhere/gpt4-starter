import { BackendAsset } from "asset-type";
/**
 * For now only username/pass is supported due to direct verification
 *
 * This function makes an authenticationmethod for the device and then signs up by creating a person for it and attaching it to the device.
 */
export declare const signupWithEmailOrPhone: {
    (emailOrPhone: string, fullName?: string, pictureImage?: BackendAsset): Promise<{
        isSuccessful: boolean;
        message: string;
        emailOrPhone?: string | undefined;
    }>;
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=signupWithEmailOrPhone.d.ts.map