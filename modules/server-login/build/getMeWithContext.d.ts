import { Authorization } from "auth-types";
import { FunctionContext } from "function-types";
import { Storing } from "model-types";
import { Device, Group } from "peer-types";
/**
 Get all relevant information about yourself, including all persons that are attached to you.

NB: probably need to omit some fields later, but for now it's fine
*/
export declare const getMeWithContext: {
    (functionContext: FunctionContext): Promise<{
        authorizations?: Authorization[] | undefined;
        device: Storing<Device>;
        groups?: Group[] | undefined;
    }>;
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=getMeWithContext.d.ts.map