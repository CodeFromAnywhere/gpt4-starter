/**
 * Returns an array of objects containing `groupSlug`, `projectRelativePath` and a belonging `FunctionContext`, that can be used to run tests related to the `fs-authorization`
 */
export declare const getFsAuthorizationTestables: () => Promise<{
    groupSlug: string;
    projectRelativePath: string;
    functionContext: import("function-types").FunctionContext | undefined;
}[]>;
//# sourceMappingURL=getFsAuthorizationTestables.d.ts.map