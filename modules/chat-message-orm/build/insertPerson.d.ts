import { Creation } from "model-types";
import { Person } from "peer-types";
export type PersonIndex = "id" | "phoneNumber" | "email" | "slug";
/**
 */
export declare const setPerson: (person: Creation<Person>) => Promise<{
    isSuccessful: boolean;
}>;
export declare const getPersonSlug: (projectRoot: string, key: PersonIndex, value: string) => Promise<string | undefined>;
export declare const getPersonPath: (projectRoot: string, slug: string) => string;
/**
More performant way to find a person

TODO: if we're going to use this, it's super important to ensure we can replace all current queries with this.

*/
export declare const getPerson: (key: PersonIndex, value: string) => Promise<Person | null>;
//# sourceMappingURL=insertPerson.d.ts.map