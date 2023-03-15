import { FunctionContext } from "function-context-type";
import { DbModels } from "sdk-db";
/**
 * Checks if a user has the data permission to do something with a certain dbmodel
 */
export declare const hasDataPermissions: (functionContext: FunctionContext, interfaceName: keyof DbModels, requiredPermissionLetters: string[]) => Promise<boolean>;
//# sourceMappingURL=hasDataPermissions.d.ts.map