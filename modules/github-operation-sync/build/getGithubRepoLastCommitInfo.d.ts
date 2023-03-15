import { CommitInfo } from "code-types";
/**
 - see last commit datetime
 - see if it's after `lastPullTime` yes or no?
 - compare dates: `Operation.lastPullTime`, last file change in src, remote last commit time
 */
export declare const getGithubRepoLastCommitInfo: (repoName: string, personalAccessToken: string) => Promise<{
    isSuccessful: boolean;
    message: string;
    lastCommit?: CommitInfo;
}>;
//# sourceMappingURL=getGithubRepoLastCommitInfo.d.ts.map