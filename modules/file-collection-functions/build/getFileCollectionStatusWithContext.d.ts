import { ActionStatus } from "filename-conventions";
import { FunctionContext, StandardResponse } from "function-types";
import { Queue } from "queue-types";
/**
 * Separate function because it needs to be refetched more frequently than the filecollection itself.
 */
export declare const getFileCollectionStatusWithContext: (functionContext: FunctionContext, projectRelativeFilePath: string) => Promise<StandardResponse & {
    actionStatus?: ActionStatus | null | undefined;
    queue?: Queue[] | undefined;
    status?: "busy" | "error" | "queue" | "done" | undefined;
}>;
//# sourceMappingURL=getFileCollectionStatusWithContext.d.ts.map