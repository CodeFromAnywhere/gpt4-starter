/**
Standard response for functions. Should be used as much as possible
*/
export type StandardResponse = {
    isSuccessful: boolean;
    message?: string;
    /**
     * Provide payment details in case this is a paid function.
     */
    payment?: {
        priceCredit?: number;
        priceDescription?: string;
        personId?: string;
        groupId?: string;
    };
};
//# sourceMappingURL=StandardResponse.d.ts.map