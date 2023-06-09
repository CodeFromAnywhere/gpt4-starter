import { Credit, DefaultModelType, Id, Language, Slug } from "model-types";
import { BackendAsset } from "asset-type";
import { AuthenticationMethod } from "../AuthenticationMethjod";
import { Device } from "../Device";
import { Group } from "./Group";
import { PersonInformationValue } from "../PersonInformationValue";
import { PersonSocialMedia } from "../PersonSocialMedia";
/**
 * Can be seen for every person, without authentication
 *
 * NB: I wish it were possible to ensure these keys exist on the person here, but we can't validate that while still keeping it a const I guess
 */
export declare const publicPersonKeys: readonly ["name", "slug", "id", "pictureImage", "interestSlugs", "media", "preferred_mediaChannelId", "groupSlugs", "operationName", "projectRelativePath"];
export type PublicPersonKeys = typeof publicPersonKeys[number];
export type PublicPerson = Pick<Person, PublicPersonKeys>;
/**
 * ---
 * projectRelativeStorageLocationFilePath: operations/tools/purpose/p2p/peer-types/src/person/persons.json
 * ---
 *
 * Model to describe a human person. This model gathers and stores all persons around the world, except for yourself. Kind of a user-like model...
 *
 *
 * The data inside this model is coming from the `Person` itself but also from the owner of the OS server. It should be possible for the person to automatically push information into any of their instances on any server, but the OS owner can augment this.
 *
 * NB: This is a `DefaultModelType`, which means name and slug need not to be unique, but it is highly preferred.
 */
export interface Person extends DefaultModelType {
    name: string;
    slug: string;
    preferredLanguage?: Language;
    pictureImage?: BackendAsset;
    /**
     * Email takes priority over phone number, but they are both unique identifiers for a person
     */
    email?: string;
    /**
     * used for whatsapp messages to determine the users last message
     */
    lastActivityAt?: number;
    isEmailOptOut?: boolean;
    phoneNumber?: string;
    /**
     * To replace the initial system of having multiple `authenticationMethod`s
     *
     * If authentication exists, that means the user is attempting to access their account
     *
     * We can already have their person registered and we can already have information about them or for them without them having an account yet, because it's the same `Person` model.
     */
    authentication?: {
        emailIsVerified?: boolean;
        emailOtp?: string;
        emailOtpAt?: number;
        /**
         * Strategy for the user to authenticate. Defaults to disabled, which means you can just verify in a single way.
         */
        twoFactorAuthenticationStrategy?: "disabled" | "any" | "email" | "phoneNumber" | "both";
        phoneNumberIsVerified?: boolean;
        phoneNumberOtp?: string;
        phoneNumberOtpAt?: number;
        encryptedPassword?: string;
    };
    /**
     * slugs of interest categories that this person should be notified about.
     *
     * Since this is a hierarchical model, parent interests will ensure all children are also applied.
     */
    interestSlugs?: Slug[];
    /**
     * After the `MediaChannel` DB is filled, we can index the names of the persons of the `MediaChannel`, and and we can push them to here, if the name is "similar" to the name of this `Person`.
     *
     * `*` = "similar" means: exact match, or at least first name + last name match
     */
    mediaChannelIds?: Id[];
    /**
     * Optional. Can be set by admin (not indexed)
     *
     * If not available, take the first (mediaChannelIds[0])
     */
    preferred_mediaChannelId?: Id;
    /**
     * Media that is attached to this person.
     *
     * NB: not used to authenticate! Can be filled in by King OS, might be erroneous
     */
    media?: PersonSocialMedia[];
    dataEntries?: PersonInformationValue[];
    /**
     * Devices can be attached to a person by looking in the device model and finding the devices that refer to this person
     *
     * Among other things, this can be used to determine the `Person` location
     */
    devicesCalculated?: Device[];
    /**
     * DEPRECATED: to be replaced by `authentication` in favor of simplicity
     *
     * Methods that can be used to identify yourself as being this user
     *
     * Should be set up by the user either when registering, or in settings, to provide more methods.
     *
     * NB: It's important to note that a `Person` should not be able to add credentials that are already added by another person. This means that, when adding such a method, all `Person`s need to be searched!
     */
    authenticationMethods?: AuthenticationMethod[];
    /**
     * To which groups does this person belong?
     *
     * This determines additional authorizations
     *
     * Can be set on signup, but can always be edited by admin
     */
    groupSlugs?: Slug[];
    groups?: Group[];
    /**
     * for chat assistants
     */
    custom_personaSlug?: string;
    /**
     * DEPRECATED: I don't think we need this, since we are going to build a trust-based authorization system
     *
     * Which custom authorizations does this `Person` have?
     *
     * authorizations?: Authorization[];
     *
     *
     */
    /**
     * For now this can be a stripe token, stored for this "customer". Handy to connect the customer to the Person. Later this can become an array of multiple credentials, for example if you want to add multiple creditcards.
     */
    paymentAuthToken?: string;
    /**
     * Actions by the `Person` can create changes in the amount of credits
     *
     * The exact meaning of the number of credits is determined by the OS settings. Can for example be 1:1 to euro, 1:1 to bitcoin, or a custom credit system. Transferability is also customisable.
     *
     * Insufficient credit can limit the persons possibilities within the OS
     */
    credit?: Credit;
    /**
     * Note by team or admin about the person. Can be useful for simple CRM stuff
     */
    note?: string;
    /**
     * Later to be formalised with city, country, address, lat/lng, and maybe multiple possible locations. For now, and if we are using GPT for search, a string might be enough.
     */
    location?: string;
    /**
     * Number 0-1 to indicate my trust towards this person
     */
    trust?: number;
    /**
     * To be determined by the assistants
     */
    mood?: string;
    /**
     * To be used as Assistant Context
     */
    profession?: string;
    /**
     * To be used as Assistant Context
     */
    homeLocation?: string;
    /**
     * To be used as Assistant Context
     */
    workLocation?: string;
    /**
     * To be used as Assistant Context
     */
    lastLocation?: string;
    /**
     * To be used as Assistant Context
     */
    lastLocationAt?: string;
}
//# sourceMappingURL=Person.d.ts.map