import { FolderContent } from "ai-types";
import { FunctionContext } from "function-types";
/**


DONE:

- ✅ Test If a file/folder doesn't exist, it shows it weirdly as if it were a folder. This should not happen
- ✅ fix the rest.
- ✅ get MarkdownIndex, even if the file collection filter filters out the md file.
- ✅ ensure `getFolderFileCollection` works
- ✅ generateSdkOperations
- ✅ folders arent' found!!! Fix this
- ✅ name of file should be with the most prominent extension, but sometimes not even needed. this should be super custom
- ✅ confirm that authorizations work correctly. for now, only admin can use explorer and other search... all roles can use `getNavigationWithContext`

*/
export declare const getNavigationWithContext: {
    (functionContext: FunctionContext, config: {
        /**
         * If defined, queryPath should be relative to this one. Should only be allowed for admin.
         */
        customProjectRelativeBaseFolderPath?: string | undefined;
        /**
         * QueryPath as in the URL, should be a relative path from the projectRoot (or to `customAbsoluteBaseFolderPath`, if defined)
         */
        queryPath: string;
    }): Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
        navigation?: FolderContent[] | undefined;
        canRead?: boolean | undefined;
        canWrite?: boolean | undefined;
        projectRelativeFolderPath?: string | undefined;
        projectRelativeFilePath?: string | undefined;
        queryIsFolder?: boolean | undefined;
    }>;
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=getNavigationWithContext.d.ts.map