import { BackendAsset } from "asset-type";
import { Location } from "geo-types";
import { Id, Language, Slug, SlugModelType } from "model-types";
import { Interest, MediaCredential } from "social-media-types";
import { AssistantState } from "./assistant/AssistantState";
import { AssistantTranslations } from "./assistant/AssistantTranslations";
import { PersonInformationValue } from "./PersonInformationValue";
/**
 * Highly private model.
 *
 * Configuration for a person identity that you say that is you.
 *
 * As a OS user you can have multiple personas between which you can easily switch.
 *
 * The difference from `Person` is that `Person` stores other people, whereas `Persona` stores different identities you give to yourself.
 *
 * Every persona is admin by default
 *
 * NB: brands should also be able to be personas, and since some brands are shared between people, you should be able to share Persona's with other `Person`s into their OS...
 *
 * > Persona: A persona, depending on the context, is the public image of one's personality, the social role that one adopts, or simply a fictional character. The word derives from Latin, where it originally referred to a theatrical mask. On the social web, users develop virtual personas as online identities. (Wikipedia)
 */
export interface Persona extends SlugModelType {
    /**
     * If this is set to true, this persona instance will be selected when searching for a persona. Ensure that there is just one default persona!
     *
     * If none are `isPrimary`, the first persona instance can be selected
     *
     * If the persona doesn't have a certain key, the same key of the `.isPrimary:true` `Persona` will be used as a fallback
     */
    isPrimary?: boolean;
    /**
     * If true, this will pop up in persona selection
     *
     * If not, you can still find it using auto-complete, though
     */
    isFavorite?: boolean;
    /**
     * Some pictures that can be used that show this person
     */
    pictureImages?: BackendAsset[];
    /**
     * You can give different characteristics to your personas if you wish
     */
    dataEntries: PersonInformationValue[];
    /** Interests this persona has
     *
     * Can be matched against a channel to be the recommended persona
     */
    interestSlugs?: Slug[];
    interests?: Interest[];
    /**
     * Where does this persona reside? can be multiple locations
     *
     * Can be matched against a channel to be the recommended persona
     */
    locationSlugs?: Slug[];
    locations?: Location[];
    /**
     * Languages that this persona can speak
     *
     * Can be matched against a channel to be the recommended persona
     */
    spokenLanguages?: Language[];
    /**
     * secret for signing the webhook
     */
    stripeWebhookSigningSecret?: string;
    /**
     *
     */
    stripePublishableKey?: string;
    /**
     * NB: should have a custom input in the `SimplifiedSchemaForm`
     */
    stripeSecret?: string;
    twilioAccountSid?: string;
    twilioAuthToken?: string;
    /**
     * Provide the phone number you are using by default for sending SMS messages
     */
    twilioFromPhoneNumber?: string;
    twilioWhatsappFromPhoneNumber?: string;
    sendgridApiKey?: string;
    sendgridFromEmail?: string;
    /**
     * Github stuff
     */
    githubEmail?: string;
    /**
     * Personal access token
     */
    githubAccessToken?: string;
    githubOrganisation?: string;
    useGithubOrganisation?: boolean;
    mediaCredentialIds?: Id[];
    mediaCredentials?: MediaCredential[];
    apiKey2Captcha?: string;
    openAiPassword?: string;
    openAiEmail?: string;
    openAiToken?: string;
    linkedinEmail?: string;
    linkedinPassword?: string;
    /**
     * phone, email or username
     */
    twitterLoginHandle?: string;
    twitterPassword?: string;
    facebookLoginHandle?: string;
    facebookPassword?: string;
    mediumLoginHandle?: string;
    mediumPassword?: string;
    redditLoginHandle?: string;
    redditPassword?: string;
    devtoLoginHandle?: string;
    devtoPassword?: string;
    slackLoginHandle?: string;
    slackPassword?: string;
    huggingfaceAuthToken?: string;
    uberduckApiKey?: string;
    uberduckSecret?: string;
    bananadevApiKey?: string;
    bananadevModelKeys?: {
        [key: string]: string;
    };
    /**
     * If the persona has a chatbot, provide the slug here
     *
     * TODO: Since some personas should be able to have multiple assistants, or since we want to have an assistant a user can create, for example, they can later be decoupled.
     */
    assistantStateSlug?: string;
    /**
     * For now, get it directly still
     */
    assistantState?: AssistantState;
    email: string;
    phone: string;
}
export type FinalAssistantState = AssistantState & {
    translations: AssistantTranslations;
};
export type FinalAssistantPersona = Persona & {
    assistantState: FinalAssistantState;
};
//# sourceMappingURL=Persona.d.ts.map