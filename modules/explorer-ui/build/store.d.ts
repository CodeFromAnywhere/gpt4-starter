/// <reference types="react" />
export declare const explorerSearchTypes: {
    label: string;
    value: string;
}[];
export declare const explorerInitialValues: {
    "explorer.searchType": {
        label: string;
        value: string;
    };
    "explorer.config": {
        /**
         *
         */
        disableAdmin?: boolean;
        /**
         * Custom basepath array (project relative paths)
         */
        customProjectRelativeBasePaths?: string[];
        activeCustomProjectRelativeBasePath?: string;
    };
};
/**
 * TODO: Remove some of all of these things, not needed so much
 */
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element, useStore: <K_1 extends "menu.search" | "tabs.currentTab" | "explorer.searchType" | "explorer.config" | "menu.expanded" | "menu.showMenu" | "menu.isFullScreen" | "menu.isMobileMenuEnabled" | "api.authToken" | "api.customUrl" | "api.timeoutAt">(key: K_1) => import("react-with-native-store").UseStoreResult<{
    "tabs.currentTab": {
        [tabKey: string]: number;
    };
    "explorer.searchType": {
        label: string;
        value: string;
    };
    "explorer.config": {
        /**
         *
         */
        disableAdmin?: boolean;
        /**
         * Custom basepath array (project relative paths)
         */
        customProjectRelativeBasePaths?: string[];
        activeCustomProjectRelativeBasePath?: string;
    };
    "menu.search": string;
    "menu.expanded": import("nested-menu").ExpandedObject;
    "menu.showMenu": boolean;
    "menu.isFullScreen": boolean;
    "menu.isMobileMenuEnabled": boolean;
    "api.authToken": string;
    "api.customUrl": string | null;
    "api.timeoutAt": number | null;
}[K_1]>;
//# sourceMappingURL=store.d.ts.map