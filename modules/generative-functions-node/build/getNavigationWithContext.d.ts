import { FunctionContext } from "function-context-type";
/**
TODO:

- add `getAuthorizationRecursive` here
- Test If a file/folder doesn't exist, it shows it weirdly as if it were a folder. This should not happen
- fix the rest.
- get MarkdownIndex, even if the file collection filter filters out the md file.
- ensure `getFolderFileCollection` works
- generateSdkOperations
- use getNavigationWithContext in frontend
- use getFileCollectionWithContext in fronend: Now, let's make it possible to play mp3/mp4, render image, show `Transcription`, show `MarkdownIndex`, download non-showable files like doc, pdf, etc.
- If the server is offline, have a good message to show.
- cleanup frontend by removing getStaticProps and old functions
- name of file should be with the most prominent extension, but sometimes not even needed. this should be super custom
- Test `getFileAuthorizationRecursive` with different test-cases. Think clearly about how it should work and if it actually works that way. May be best to write it out.

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
        message: string;
        isFolder?: undefined;
        navigation?: undefined;
        actualProjectRelativeFilePath?: undefined;
    } | {
        isSuccessful: boolean;
        message: string;
        isFolder: boolean;
        navigation: import("ai-types").FolderContent[];
        actualProjectRelativeFilePath: string;
    }>;
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=getNavigationWithContext.d.ts.map