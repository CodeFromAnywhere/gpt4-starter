import { FolderContent } from "ai-types";
import { ContextMenuItem } from "context-menu";
/**
 * gets base path the user should be aware of
 */
export declare const getUserAwareBasePath: (projectRelativeFilePath: string, userAwareProjectRelativePaths: string[] | undefined) => string;
export declare const useFileActions: (navigation?: FolderContent[]) => ContextMenuItem[];
//# sourceMappingURL=useFileActions.d.ts.map