import { ReaderProps } from "ai-types";
import { FunctionContext } from "function-context-type";
/**
Gets all props required to show a reader page
*/
export declare const getReaderPagePropsWithContext: {
    (functionContext: FunctionContext | undefined, config: {
        /**
         * If defined, queryPath should be relative to this one. Should only be allowed for admin.
         */
        customProjectRelativeBaseFolderPath?: string | undefined;
        /**
         * QueryPath as in the URL, should be a relative path from the projectRoot (or to `customAbsoluteBaseFolderPath`, if defined)
         */
        queryPath: string;
    }): Promise<{
        props: ReaderProps;
    }>;
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=getReaderPagePropsWithContext.d.ts.map