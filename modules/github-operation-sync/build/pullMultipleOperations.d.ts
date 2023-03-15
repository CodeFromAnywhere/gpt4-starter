export declare const pullMultipleOperations: (operationNames: string[]) => Promise<{
    isSuccessful: boolean;
    message: string;
    results?: {
        isSuccessful: boolean;
        message: string;
        operationName?: string | undefined;
    }[] | undefined;
}>;
//# sourceMappingURL=pullMultipleOperations.d.ts.map