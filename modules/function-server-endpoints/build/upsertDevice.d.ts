import { Context } from "server/typings/common";
/**
 * To look up more info about an IP
 *
 * https://github.com/geoip-lite/node-geoip
 */
import { Storing } from "model-types";
import { Device } from "peer-types";
/**
 * Returns device with all attached (logged in) `Person`s, and `currentPersonCalculated`
 *
 * Either finds the device and updates it according to the new request metadata, or creates a new device.
 *
 * Should never return `undefined` if the database functions...
 *
 * TODO: Use cookies (https://serverjs.io/documentation/reply/#cookie-) to login
 *
 * Needed for having `authToken` with GET as well in a safe manner (e.g. for images)
 */
export declare const upsertDevice: (serverContext: Context) => Promise<Storing<Device> | undefined>;
//# sourceMappingURL=upsertDevice.d.ts.map