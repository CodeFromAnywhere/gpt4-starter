/// <reference types="react" />
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element, useStore: <K_1 extends "explorer.config">(key: K_1) => import("react-with-native-store").UseStoreResult<{
    "explorer.config": {
        disableAdmin?: boolean | undefined;
        customProjectRelativeBasePaths?: string[] | undefined;
        activeCustomProjectRelativeBasePath?: string | undefined;
    };
}[K_1]>;
//# sourceMappingURL=store.d.ts.map