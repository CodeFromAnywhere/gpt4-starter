import { Person } from "peer-types";
export declare const findOrCreatePerson: (config: {
    rawFromNumber?: string | undefined;
    fromName?: string | undefined;
}) => Promise<{
    person?: Person | undefined;
    newUsersAmount: number;
    isFirstMessage: boolean;
}>;
//# sourceMappingURL=findOrCreatePerson.d.ts.map