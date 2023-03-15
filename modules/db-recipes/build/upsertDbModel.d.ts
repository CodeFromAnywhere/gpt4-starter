import type { DbModels } from "sdk-db";
import { DbQueryResult } from "fs-orm";
import { FunctionContext } from "function-context-type";
export type UpsertDbModelResult = {
    response: string;
    success: boolean;
};
/**

upserts an instance of an db data interface from the db in a typesafe way

 */
export declare const upsertDbModelWithContext: <KInterfaceName extends keyof DbModels, KItem extends DbModels[KInterfaceName]>(functionContext: FunctionContext, interfaceName: KInterfaceName, data: KItem | KItem[], isNew?: boolean) => Promise<DbQueryResult>;
//# sourceMappingURL=upsertDbModel.d.ts.map