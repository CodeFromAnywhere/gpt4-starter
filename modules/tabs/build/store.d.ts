/// <reference types="react" />
export declare const tabsStoreInitialValues: {
    "tabs.currentTab": {
        [tabKey: string]: number;
    };
};
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element, useStore: <K_1 extends "tabs.currentTab">(key: K_1) => import("react-with-native-store").UseStoreResult<{
    "tabs.currentTab": {
        [tabKey: string]: number;
    };
}[K_1]>;
//# sourceMappingURL=store.d.ts.map