import { Storing } from "model-types";
import { Device } from "peer-types";
/**
 * returns `AuthorizationInfo` for a device + function
 */
export declare const getAuthorizationInfo: (device: Storing<Device>, fn: {
    (...parameters: any): any;
    [key: string]: any;
}) => boolean;
//# sourceMappingURL=getAuthorizationInfo.d.ts.map