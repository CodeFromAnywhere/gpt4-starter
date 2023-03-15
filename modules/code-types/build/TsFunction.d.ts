import { Markdown, TsIndexModelType } from "model-types";
import { TsComment } from "comment-types";
import { FunctionParameter } from "function-types";
import { TypeInfo } from "./TypeInfo";
import { SizeSummary } from "./FolderSummary";
export type TsFunctionIndex = {
    /**
     * If you give a function a type explicitly on its declaration, this type will be set here.
     */
    explicitTypeName?: string;
    /**
     * The function is immediately exported upon creation. If the os dev tools are being used, this means it is also exported from the operation
     */
    isExported: boolean;
    /**
     * parsed comment from doc-comment
     */
    description?: Markdown;
    /**
     * raw text of the function
     */
    rawText?: string;
    /**
     * all comments found in a function and the node that they belong to
     */
    commentsInside: TsComment[];
    /**
     * return type JSON Schema definition
     */
    returnType: TypeInfo;
    /**
     * parameters the function takes as its arguments, if any
     */
    parameters?: FunctionParameter[];
    /**
     * size of this function (comments + code)
     */
    size: SizeSummary;
    /**
     * size of the comments of this function (including surrounding comments)
     */
    commentSize?: SizeSummary;
    /**
     * size of the code inside the function (without comments)
     */
    codeSize?: SizeSummary;
    /**
     * tells you the size of itself and all its dependencies that are used that are also part of an operation, recursively
     */
    cumulativeSize?: SizeSummary;
    cumulativeCommentSize?: SizeSummary;
    cumulativeCodeSize?: SizeSummary;
    /**
     * maximum amount of times indedented in this function
     *
     * good for determining the complexity and finding code that can be simplified/destructured into smaller pieces
     */
    maxIndentationDepth: number;
    /**
     * finds all files that import this function
     *
     * NB: this is not indexed because this information has nothing to do with the operation itself, but the exposure to the broader monorepo. This is calculated on the fly.
     */
    dependantFiles?: string[];
};
/**
 * ---
 * dbStorageMethod: jsonSingle
 * ---
 *
 * Interface for arrow functions and normal functions
 */
export interface TsFunction extends TsIndexModelType, TsFunctionIndex {
}
//# sourceMappingURL=TsFunction.d.ts.map