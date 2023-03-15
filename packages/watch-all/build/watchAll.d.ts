import { TsFunction } from "function-types";
/**
👁 👁 Finds all watchers within typerepo and ensures they all start watching their watch
 */
export declare const watchAll: (tsFunctions: TsFunction[], config?: {
    /**
     * Overwrite the default ignored behavior.
     *
     * NB: is not overwriting the startup ignore behavior!
     */
    customIgnored?: string[];
}) => Promise<void>;
//# sourceMappingURL=watchAll.d.ts.map