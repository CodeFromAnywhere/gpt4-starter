/// <reference types="react" />
import { MenuProps } from "./MenuProps";
import { WebPage } from "webpage-types";
export type ProjectRelativePathType = "todo" | "postables";
export declare const getLegacyMenu: (queryPaths: string[]) => WebPage<null>[] | undefined;
/**
 `"wise"` component that lets you render a menu easily, including search
 */
export declare const Menu: (props: MenuProps & {
    message?: string | undefined;
}) => JSX.Element;
//# sourceMappingURL=Menu.d.ts.map