import { TsFunction } from "function-types";
import { PerformanceItem } from "measure-performance";
/**
 * wrapper function that stores execution-speed in an object with `FunctionPerformance` data-structure. Store this using `db.push` if it adds value
 .*/
export declare const storeFunctionExecution: (tsFunction: TsFunction, inputParameters: any[] | undefined, output: any, performance: PerformanceItem[], isResultFromCache: boolean, paymentInfo?: {
    cost?: number;
    personId?: string;
    groupId?: string;
}) => Promise<void>;
//# sourceMappingURL=storeFunctionExecution.d.ts.map