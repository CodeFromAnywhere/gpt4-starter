/// <reference types="react" />
export type ClickableIconType = {
    disabled?: boolean;
    onClick: () => void;
    icon?: any;
    emoji?: string;
    title?: string;
};
/**
 * Renders a simple clickable icon with some styling
 *
 * Icon can be either an icon (Svg src) or emoji (string)
 */
export declare const ClickableIcon: (button: ClickableIconType) => JSX.Element;
//# sourceMappingURL=ClickableIcon.d.ts.map