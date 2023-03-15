import { Storing } from "model-types";
import { Group, Device } from "peer-types";
/**
 * Should be attached as first argument of the function, if the name of the function is in the format of:
 *
 * - `xyzWithContext`: attaches all context
 * - `xyzWithContextRaw`: attaches all context, api returns just the result of the function without wrapping it in the `RealApiReturnType`. Needed in case you have a different server.js `server.reply`
 *
 * For more info see `apiConvention`
 */
export type FunctionContext = {
    /**
     * Type to tsFucntion
     */
    tsFunction?: any;
    /**
     * Device from authToken, augmented with `currentPersonCalculated`, which also contains all groups.
     */
    device: Storing<Device>;
    /**
     * Device has authorization to the function
     */
    hasAuthorization: boolean;
    /**
     * Original context coming from server.js
     *
     * NB: due to indexation problems the type has been removed. It can be casted to the `Context` type, which you can import from:
     *
     * ```ts
     * import { Context } from "server/typings/common";
     * ```
     *
     */
    serverContext?: any;
    /**
     * DEPRECATED: should use device.currentPersonCalculated.groups. No duplication needed, only causes confusion and potentially bugs.
     *
     * Groups the person(s) of the device belong to, including the inherited groups and `public` special group
     */
    groups?: Group[];
    /**
     * DEPRECATED: should use device.authToken, no duplication needed, only causes confusion and potentially bugs.
     */
    authToken?: string;
};
//# sourceMappingURL=FunctionContext.d.ts.map