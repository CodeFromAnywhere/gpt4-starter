import { DefaultModelType } from "model-types";
/**
 * All state an assistant knows about a person
 *
 * To be stored in the users folder.
 */
export interface AssistantPersonState extends DefaultModelType {
    assistantFocus?: string;
    assistantMood?: string;
    /**
     * More specific interests with regard to the assistants functionality and purpose
     */
    personInterests?: string[];
    /**
     * More specific goals with regard to the assistants frunctionality and purpose
     */
    personGoals?: string;
    personPreferences?: string;
    /**
     * If we can know the agenda of the person, it would make it possible to talk about this context
     */
    personAgenda?: unknown;
    /**
     * If we can know the relations of the person, it would make it possible to talk about these people in the context.
     */
    personRelations?: unknown;
}
//# sourceMappingURL=AssistantPersonState.d.ts.map