import { EnvironmentVariableObject } from "./BundleConfig";
/**
 * configuration that can be applied when generating a new bundle
 *
 * It can be put in the BundleConfig, but it can also be set manually for an individual Bundle Generation.
 */
export type CustomisableBundleConfig = {
    /**
     * if true, will not clone/pull/push and deploy. No internet is needed, will also not use any `.git` folder.
     */
    isOffline?: boolean;
    /** skips the step where it gets the new stuff from github */
    skipPull?: boolean;
    /** skips the step where it pushes the new bundle to remote */
    skipPush?: boolean;
    skipSyncNicheFolder?: boolean;
    skipRebuildNicheOperations?: boolean;
    /** skips the step where it saves to the db */
    skipUpsert?: boolean;
    debug?: boolean;
    /** descriptioin for git commit, if pushing. Default is "monorepo update" */
    description?: string;
    /**
     * optionally, specify a custom branch name to pull from / push to / checkout (default is "main")
     */
    branchName?: string;
    publicEnvironmentVariables?: EnvironmentVariableObject;
    /**
     * NB: should not end up in public repos!
     */
    privateEnvironmentVariables?: EnvironmentVariableObject;
    /**
     * Configuration for your commit (needed for vercel deployment)
     */
    gitUserEmail?: string;
    gitUserName?: string;
};
export type FinalCustomisableBundleConfig = CustomisableBundleConfig & Required<Pick<CustomisableBundleConfig, "description" | "debug" | "branchName">>;
//# sourceMappingURL=CustomisableBundleConfig.d.ts.map