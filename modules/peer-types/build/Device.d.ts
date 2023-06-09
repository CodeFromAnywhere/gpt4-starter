import { DefaultModelType, Id } from "model-types";
import { Person } from "./person/Person";
import { AppOperation } from "./AppOperation";
import { IPInfo } from "./IPInfo";
import { AuthenticationMethod } from "./AuthenticationMethjod";
import { IResult } from "./external/ua-parser-js";
/**

---
dbStorageMethod: jsonSingle
---

 A Device that accesses any King OS api.

 A device can be connected to a person. A person can have multiple `Device`s.

 A Device does not necissarily have King OS installed themselves, they can also be a visitor to another King OS app of someone else.
 */
export interface Device extends DefaultModelType, IPInfo {
    /**
     * AuthToken is used to identify a device. Unique identifier that is saved in the devices browser/app.
     *
     * If the authToken is the same, we can be sure that the device is matched, even if the IP is different.
     *
     * Should be identical to ID
     *
     */
    authToken: string;
    /**
     * Parsed User Agent header.
     *
     * NOT used to identify the device, since the device can already be connected to a person!
     */
    /**
     * Raw `User-Agent` header.
     *
     * NOT used to identify the device, since the device can already be connected to a person!
     */
    userAgentString: IResult["ua"];
    /**
     * Name of the device, calculated based on metadata like location, os, and ip
     *
     * Can be edited by the user
     */
    name: string;
    /**
     * Is set to true if the devices IP is pinged and seems to have something that resembles a King OS PAPI.
     */
    hasPapi?: boolean;
    /**
     * Returning `true` or `false` indicating whether or not the IP is giving a response
     */
    isOnlineCalculated?: boolean;
    /**
     * Whenever the peer is online, this should update
     */
    lastOnlineAt: number;
    /**
     * if true, the above IP is a local one, meaning it cannot be accessed from outside of this network
     *
     * This is easy to determine: local IP's must start with "192.168"
     */
    isLocalIpCalculated?: boolean;
    /**
     * if `true`, this device will show on top
     */
    isFavorite?: boolean;
    /**
     * If true, this peer should not be shared
     */
    isPrivate?: boolean;
    /**
     * last sync of any model
     *
     * Useful for example for a p2p messaging
     */
    lastSyncDatabaseAtObject?: {
        [modelName: string]: number;
    };
    /**
     * If the device is authenticated, this should be set.
     *
     * Can be unset by the person
     */
    personIds?: Id[];
    persons?: Person[];
    /**
     * A device can switch between persons, by changing this value
     */
    currentPersonId?: Id;
    /**
     * If you have a currentPersonId, it is calculated and provided by selecting it from the persons array
     *
     * For now, only provided by functioncontext
     */
    currentPersonCalculated?: Person;
    /**
     * Calculated all operations that can be exposed as apps. This is taken from `getAllAppOperations` function
     */
    appOperationsCalculated?: AppOperation[];
    /**
     * DEPRECATED: Going to move to `Person.authentication` in favor of simplicity.
     *
     * Later, we may need a `LoginAttempt` Model in order to facilitate 2FA because it may take multiple steps to log someone in.
     *
     * For now, you're immediately logged in once the password or OTP matches the Person, and you can immediately set `currentPersonId` and `personIds`
     *
     * If the `Device` is not identified as a person yet, this can be configured to authenticate with different methods. Once it matches to a person, this can be cleared and `personId` can be attached.
     */
    authenticationMethods: AuthenticationMethod[];
}
//# sourceMappingURL=Device.d.ts.map