/**
 - see last commit datetime
 - see if it's after `lastPullTime` yes or no?
 - compare dates: `Operation.lastPullTime`, last file change in src, remote last commit time
 */
export declare const operationCheckGithubStatus: (repoName: string) => Promise<{
    success: boolean;
    message: string;
    data: {
        sha: any;
        date: Date;
        message: any;
    };
} | {
    success: boolean;
    message: string;
    data?: undefined;
}>;
//# sourceMappingURL=operationCheckGithubStatus.d.ts.map