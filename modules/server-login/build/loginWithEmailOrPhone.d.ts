/**
 * Login with phone or email
 */
export declare const loginWithEmailOrPhone: {
    (emailOrPhone: string): Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
        emailOrPhone?: string | undefined;
    }>;
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=loginWithEmailOrPhone.d.ts.map