import { ExplorationDetails, FolderExploration, IndexModels } from "code-types";
import { IndexFilter } from "read-typescript-file";
export declare const getFolderExplorationDetails: (config: {
    /**relative project path*/
    path: string;
    type: FolderExploration["type"];
    name: string;
    sort?: string | undefined;
    /**
     * null gives all of them, undefined gives none
     */
    typeIndexType?: keyof IndexModels | null | undefined;
} & IndexFilter) => Promise<ExplorationDetails>;
//# sourceMappingURL=getFolderExplorationDetails.d.ts.map