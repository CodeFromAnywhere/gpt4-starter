import { Group, Person } from "peer-types";
/**
 * This special map function attaches all groups (including public and inherited) for a person, on top of just the ones that are found int `Person.groupSlugs` (if any)
 */
export declare const personAttachInheritedGroups: (person: Person, groups: Group[]) => Person;
//# sourceMappingURL=personAttachInheritedGroups.d.ts.map