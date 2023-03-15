import { RunEveryPeriodEnum, TsFunction } from "function-types";
/**
 * For every `RunEveryPeriodEnum`, this object provides the interval `cronExpression` string for `node-cron`
 */
export declare const scheduleObject: {
    [interval in RunEveryPeriodEnum]: string;
};
export declare const scheduleCronJobs: (tsFunctions: TsFunction[]) => Promise<void>;
//# sourceMappingURL=scheduleCronJobs.d.ts.map