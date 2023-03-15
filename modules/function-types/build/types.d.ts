import { BundleConfig } from "bundle-types";
import { TsFunction } from "./TsFunction";
export type FunctionData = {
    tsFunction: TsFunction;
};
export type PublicBundleConfig = Omit<BundleConfig, "customisableBundleConfig" | "createBundleConfig">;
//# sourceMappingURL=types.d.ts.map