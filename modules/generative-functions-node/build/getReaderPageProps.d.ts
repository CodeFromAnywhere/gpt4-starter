import { ReaderProps } from "ai-types";
/**
Gets all props required to show a reader page
*/
export declare const getReaderPageProps: (config: {
    /**
     * This should depend on your login
     */
    projectRelativeBasePaths?: string[] | undefined;
    /**
     * If defined, queryPath should be relative to this one. Should only be allowed for admin.
     */
    customAbsoluteBaseFolderPath?: string | undefined;
    /**
     * QueryPath as in the URL, should be a relative path from the projectRoot (or to `customAbsoluteBaseFolderPath`, if defined)
     */
    queryPath: string;
    /**
     * If true, isDev will be overwritten to be false, even in prod
     *
     * TODO: Remove this weirdness
     */
    isAdmin?: boolean | undefined;
}) => Promise<{
    props: ReaderProps;
}>;
//# sourceMappingURL=getReaderPageProps.d.ts.map