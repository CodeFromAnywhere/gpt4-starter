/// <reference types="react" />
export type TabType = {
    title: string;
    emoji: string;
    renderTab: () => React.ReactNode;
};
/** Container for tabs */
export declare const Tabs: (props: {
    title?: string | undefined;
    /**
     * if you have multiple tabs and/or show it at multiple places, it'd be wise to name your tab so the localStorage can be stored with a different key
     */
    tabKey?: string | undefined;
    tabs: TabType[];
    isSmall?: boolean | undefined;
}) => JSX.Element;
//# sourceMappingURL=Tabs.d.ts.map