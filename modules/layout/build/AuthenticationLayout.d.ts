/// <reference types="react" />
import { MenuProps } from "menu";
/**
 * `UserApp` with standard layout with menu from "menu" and default Header
 *
 * Also handles the shortcuts keybindings for full screen and showing menu, etc.
 *
 * TODO: extrahere `.menu` prop from this component completely, `.customMenu` is better. the purpose of this component is the behavior of the `layout` and putting everything together for mobile and desktop (small and large resolutions)
 */
export declare const AuthenticationLayout: (props: {
    /**
     * DEPRECATED: If given, menu will be rendered from "menu".
     */
    menu?: MenuProps | undefined;
    /**
     * There are some default pages like /login and /signup. If you want to overwrite these with your own, you need to specify their paths here.
     */
    overwriteDefaultPages?: string[] | undefined;
    customHeader?: React.ReactNode;
    customMenu?: React.ReactNode;
    custom404Page?: React.ReactNode;
    nextPage?: any;
    pageProps?: any;
}) => JSX.Element;
//# sourceMappingURL=AuthenticationLayout.d.ts.map