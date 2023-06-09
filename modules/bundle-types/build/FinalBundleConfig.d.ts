import { BundleConfig } from "./BundleConfig";
import { FinalCreateBundleConfig } from "./CreateBundleConfig";
import { FinalCustomisableBundleConfig } from "./CustomisableBundleConfig";
export type FinalBundleConfig = Omit<BundleConfig, "customisableBundleConfig" | "createBundleConfig"> & {
    customisableBundleConfig: FinalCustomisableBundleConfig;
    createBundleConfig: FinalCreateBundleConfig;
};
//# sourceMappingURL=FinalBundleConfig.d.ts.map