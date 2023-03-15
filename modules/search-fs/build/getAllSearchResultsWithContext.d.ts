import { FunctionContext } from "function-types";
import { SearchResult } from "search-types";
/**
Searches filepaths, then links to any `ui-web` that has this file available as a page, or VSCode.

For this we need to get the `MarkdownReaderPage` and other pages that are available in ui's and see the files they are linked to.

I want to be able to:

- search functions, interfaces, variables
- search operations
- search markdown files, anywhere
- search db-ui models

TODO: Think about other things needed for the search, like LLM queries

*/
export declare const getAllSearchResultsWithContext: {
    (functionContext: FunctionContext, query: string | null): Promise<SearchResult[]>;
    config: {
        authorizations: {
            cfa: string;
            public: string;
        };
    };
};
//# sourceMappingURL=getAllSearchResultsWithContext.d.ts.map