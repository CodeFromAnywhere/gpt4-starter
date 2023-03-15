/**
  `git init` in operation
  `git set remote` in there
  `git pull --force`
 
  set operation.repository indexation info

  `mv .git .git.backup`
 */
export declare const operationGithubPull: (operationName: string, personalAccessToken?: string) => Promise<{
    isSuccessful: boolean;
    message: string;
    operationName?: string | undefined;
}>;
//# sourceMappingURL=operationGithubPull.d.ts.map