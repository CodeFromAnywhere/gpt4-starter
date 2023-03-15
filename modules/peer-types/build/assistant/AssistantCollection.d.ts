import { DefaultModelType, Slug } from "model-types";
import { Persona } from "../Persona";
/**
 * Useful to know which assistants should be shared with a user, but also on a certain website.
 */
export interface AssistantCollection extends DefaultModelType {
    name: string;
    /**
     * If given, should be an array of phone number prefixes that will link to this collection. This will ensure the user will see the right collection based on his phone number.
     */
    phoneNumberPrefixes?: string;
    description: string;
    personaSlugs: Slug[];
    personas?: Persona[];
}
//# sourceMappingURL=AssistantCollection.d.ts.map