import { DatasetConfig } from "code-types";
import { FunctionContext } from "function-context-type";
import type { DbModelEnum, DbModels } from "sdk-db";
export type GetDbModelResult<KInterface extends DbModelEnum> = {
    isSuccessful?: boolean;
    hasMore: boolean;
    message?: string;
    datasetConfig?: DatasetConfig;
    /**
     * NB: Be aware that, if your `DatasetConfig` includes any keys omitted, that the resulting type interface will not be correct.
     */
    data: DbModels[KInterface][];
};
/**
 * gets all instances of an db data interface from the db in a typesafe way */
export declare const getDbModelWithContext: <KInterface extends keyof DbModels, TDatasetConfig extends DatasetConfig>(functionContext: FunctionContext, interfaceName: KInterface | null, datasetConfig?: TDatasetConfig | undefined, search?: string) => Promise<GetDbModelResult<KInterface>>;
//# sourceMappingURL=getDbModel.d.ts.map