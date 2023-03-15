import { GetStaticPaths, GetStaticPropsContext } from "next-types";
/**
 * TODO:
 *
 * We require the `FunctionContext` so we can see which folders are allowed and whether or not the requested page is allowed.
 *
 * In order to make some pages still available without login (pages from public folders or files) we should make this FunctionContext optional somehow.
 *
 *
 */
export declare const readerPageGetStaticProps: (context: GetStaticPropsContext) => Promise<{
    props: import("ai-types").ReaderProps;
}>;
/**
 * NB: I can't do this with a fallback , because next.js doesn't include my docs folder into the bundle.
 *
 * A solution could be to add the docs folder into the next.js folder or copy it...
 *
 * https://github.com/vercel/next.js/discussions/32236?sort=new#discussioncomment-3029649
 *
 * Ther are other workarounds here to make sure it ends up in the bundle.
 *
 */
export declare const readerPageGetStaticPaths: GetStaticPaths;
//# sourceMappingURL=readerPageGetStatic.d.ts.map