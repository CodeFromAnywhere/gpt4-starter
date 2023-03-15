export type LastUpdatedType = {
    operationName: string;
    remoteWasLastUpdated: string;
    lastPullTimeAt: string;
    message: string;
};
export declare const checkAllOperationStatus: () => Promise<LastUpdatedType[]>;
//# sourceMappingURL=checkAllOperationStatus.d.ts.map