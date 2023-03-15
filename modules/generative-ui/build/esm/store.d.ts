/// <reference types="react" />
export declare const generativeWebInitialValues: {
    "generativeWeb.defaultVariant": string | null;
    "generativeWeb.fileCollectionClosedFiles": {
        [filePath: string]: string[];
    };
};
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element, useStore: <K_1 extends "generativeWeb.defaultVariant" | "tabs.currentTab" | "generativeWeb.fileCollectionClosedFiles" | "db-crud.datasetConfig" | "db-crud.search" | "unsavedFiles" | "openPages" | "writerView" | "subtextConfig" | "subwordConfig" | "menu.search" | "menu.expanded" | "menu.showMenu" | "menu.isFullScreen" | "menu.isMobileMenuEnabled" | "api.authToken" | "api.customUrl" | "api.timeoutAt">(key: K_1) => import("react-with-native-store").UseStoreResult<{
    "tabs.currentTab": {
        [tabKey: string]: number;
    };
    "generativeWeb.defaultVariant": string | null;
    "generativeWeb.fileCollectionClosedFiles": {
        [filePath: string]: string[];
    };
    "db-crud.datasetConfig": (import("code-types").DatasetConfig & {
        id?: string | undefined;
        key?: string | undefined;
    }) | null;
    "db-crud.search": string;
    unsavedFiles: {
        [projectRelativePath: string]: string | undefined;
    };
    openPages: import("file-tabs").OpenPage<string>[];
    writerView: import("writer-types").WriterViewEnum;
    subtextConfig: import("writer-types").SubtextConfig;
    subwordConfig: import("writer-types").SubwordConfig;
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