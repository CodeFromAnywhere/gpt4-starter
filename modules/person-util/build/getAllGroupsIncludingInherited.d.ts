import { Group } from "peer-types";
/**
 * From all `Group`s in the db, takes all groupSlugs, and recursively executes this again for all inherited groupSlugs found on the groups that are shown in the second parameter.
 *
 * Also adds the special group `public`
 */
export declare const getAllGroupsIncludingInheritedRecursive: (groups: Group[], groupSlugs: string[] | undefined) => Group[];
//# sourceMappingURL=getAllGroupsIncludingInherited.d.ts.map