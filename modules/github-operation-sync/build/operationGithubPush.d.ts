export declare const operationGithubPush: (operationName: string) => Promise<PushOperationResult>;
export declare type PushOperationResult = {
    success: boolean;
    message: string;
    data: {
        operationName: string;
        createdRepoUrl?: string;
    };
};
//# sourceMappingURL=operationGithubPush.d.ts.map