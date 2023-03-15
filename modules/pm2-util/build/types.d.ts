import { Proc } from "pm2";
export type Pm2App = {
    operationName: string;
    cpuPercentage?: number;
    memoryBytes?: number;
};
export type ListAppsResult = {
    isSuccessful: boolean;
    apps?: Pm2App[];
    message?: string;
};
export declare const appPrefix = "app_";
export type Pm2Resolver = (value: {
    isSuccessful: boolean;
    error?: Error | undefined;
    proc?: Proc | undefined;
}) => void;
//# sourceMappingURL=types.d.ts.map