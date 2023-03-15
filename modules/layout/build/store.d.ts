/// <reference types="react" />
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element, useStore: <K_1 extends "menu.isFullScreen" | "menu.search" | "menu.expanded" | "menu.showMenu" | "menu.isMobileMenuEnabled">(key: K_1) => import("react-with-native-store").UseStoreResult<{
    "menu.search": string;
    "menu.expanded": import("nested-menu").ExpandedObject;
    "menu.showMenu": boolean;
    "menu.isFullScreen": boolean;
    "menu.isMobileMenuEnabled": boolean;
}[K_1]>;
//# sourceMappingURL=store.d.ts.map