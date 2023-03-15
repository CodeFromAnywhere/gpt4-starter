import { FunctionContext } from "function-types";
/**
Get the readable and writeable basePaths of any user (project relative)

If you're not signed in as a person, this function will return an empty array

Basepaths need to be:

- If you're admin, all files everywhere, `root` is visible, is `/`
- user has is `/knowledge/persons/[slug]`
- for every group you're in, there should be a button leading to `/knowledge/groups/[slug]`


 */
export declare const getExplorableBasePathsWithContext: {
    (functionContext: FunctionContext): {
        projectRelativePath: string;
        name: string;
    }[];
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=getExplorableBasePathsWithContext.d.ts.map