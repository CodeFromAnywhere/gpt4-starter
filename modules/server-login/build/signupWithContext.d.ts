import { FunctionContext } from "function-context-type";
import { Person } from "peer-types";
export type SignupPersonData = Pick<Person, "credit" | "dataEntries" | "interestSlugs" | "media" | "name" | "slug" | "pictureImage" | "groupSlugs">;
/**
 * Creates a new `Person` for a `Device`. Adds that person to the `Device`.
 *
 * - Can only be done with at least one authenticationMethod
 * - Can only be done if authentication is not applied on an existing person already.
 * - Function is wrappable
 */
export declare const signupWithContext: (functionContext: FunctionContext, personData: SignupPersonData) => Promise<{
    isSuccessful: boolean;
    message: string;
}>;
//# sourceMappingURL=signupWithContext.d.ts.map