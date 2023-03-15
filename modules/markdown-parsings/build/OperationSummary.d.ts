import { OperationClassification } from "code-types";
import { FolderSummary } from "types";
import { StatementItem } from "./StatementItem";
export type OperationSummary = {
    operationFolderPath: string;
    operationName: string;
    classification: OperationClassification | undefined;
    description: string | undefined;
    size: FolderSummary | undefined;
    coreDependenciesString: string;
    operationDependenciesString: string;
    packageDependenciesString: string;
    cliItems: StatementItem[];
    testItems: StatementItem[];
    internalItems: StatementItem[];
    externalItems: StatementItem[];
    docs: {
        relativePath: string;
        content: string;
    }[] | undefined;
};
//# sourceMappingURL=OperationSummary.d.ts.map