/// <reference types="react" />
export type BigButton = {
    icon?: any;
    emoji?: string;
    onClick: () => any;
    title: string;
    component?: () => JSX.Element;
    isActive?: boolean;
    isLoading?: boolean;
    stylePreset?: "cancel";
};
export declare const BigButton: (button: BigButton) => JSX.Element;
//# sourceMappingURL=BigButton.d.ts.map