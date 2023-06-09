/// <reference types="react" />
/// <reference types="node" />
import { getTypescriptErrorsFromFiles } from "compile-typescript";
import { fileSlugify } from "convert-case";
import { slugify } from "convert-case";
import { fileExistsWithCaseSync } from "fs-util";
import { notEmpty } from "js-util";
import { onlyUnique } from "js-util";
import { generatePassword } from "model-types";
import { isEmail } from "model-types";
import { byteCount } from "path-util";
import { getEncoding } from "text-or-binary";
import { isBinary } from "text-or-binary";
import { isText } from "text-or-binary";
export declare const sdk: {
    untypedApiFunction: (fnName: string, config: import("api-types").ApiConfig, ...parameters: any) => Promise<import("api-types").ApiReturnType<any>>;
    getGetApiUrl: (apiUrl: string | undefined, apiFunctionName: string, query: {
        [name: string]: string | string[] | undefined;
    }) => string | undefined;
    addToken: (name: string, previousToken?: string | undefined, attachTokenToFilename?: boolean | undefined) => string;
    ensureToken: (name: string, newToken?: string | undefined, attachTokenToFilename?: boolean | undefined) => string;
    findAssetParametersRecursively: (object: {
        [key: string]: any;
    }, stack?: string[] | undefined) => import("asset-functions-js").AssetParameter[];
    getAssetDirectlyApiUrl: (apiUrl: string | undefined, projectRelativeAssetPath: string, isDownload?: boolean | undefined) => string | undefined;
    getConversionInfoFromType: (uploadMimeType: string | undefined) => {
        uploadMimeType: string | undefined;
        targetFormat: string | undefined;
        isUnchecked?: boolean | undefined;
    };
    getExtensionFromAsset: (asset: import("asset-type").Asset) => string | undefined;
    getNameFromRelativePath: (relativePath: string) => string;
    getNameWithTokenFromRelativePath: (relativePath: string, attachTokenToFilename?: boolean | undefined, newToken?: string | undefined) => string;
    getReferencedAssetApiUrl: (apiUrl: string | undefined, projectRelativeReferencingFilePath: string, referencingFileRelativeAssetPath: string, isDownload?: boolean | undefined) => string | undefined;
    getTypeFromUrlOrPath: (urlOrPath: string) => import("asset-type").AssetType;
    readableSize: (sizeBytes: number) => string;
    removeTokenIfPresent: (name: string, attachTokenToFilename?: boolean | undefined) => {
        nameWithoutToken: string;
        token: string | undefined;
    };
    BreadCrumbs: (props: {
        path: string;
    }) => JSX.Element;
    renderBreadCrumbs: (chunks: string[]) => JSX.Element[] | null;
    ClickableIcon: (button: import("clickable-icon").ClickableIconType) => JSX.Element;
    stripCommentEnd: (trimmedLine: string) => string;
    stripCommentStart: (trimmedLine: string) => string;
    stripComment: (rawCommentString: string) => string;
    stripSlashes: (trimmedLine: string) => string;
    stripStar: (trimmedLine: string) => string;
    trim: (string: string) => string;
    getCompileErrors: (operationBasePath: string, onlyDependants?: boolean | undefined, manualProjectRoot?: string | undefined) => Promise<import("model-types").Creation<import("code-types").TsBuildError>[]>;
    getTypescriptErrorsFromFiles: typeof getTypescriptErrorsFromFiles;
    writeBuildErrors: (operationBasePath: string, operationManualProjectRoot?: string | undefined, typerepoManualProjectRoot?: string | undefined) => Promise<void>;
    camelCase: (text: string) => string;
    capitalCase: (text: string) => string;
    capitaliseFirstLetter: (word: string) => string;
    convertCase: (text: string, target: import("convert-case").Casing) => string;
    fileSlugify: typeof fileSlugify;
    getDelimiter: (target: import("convert-case").Casing) => "" | "-" | "_" | " ";
    humanCase: (text: string) => string;
    kebabCase: (text: string) => string;
    lowerCaseArray: (text: string) => string[];
    pascalCase: (text: string) => string;
    slugify: typeof slugify;
    snakeCase: (text: string) => string;
    errorToast: (message?: string | undefined) => void;
    infoToast: (message?: string | undefined) => void;
    showStandardResponse: (apiResult: import("api-types").StandardizedApiReturnType) => void;
    successToast: (message?: string | undefined) => void;
    warningToast: (message?: string | undefined) => void;
    FancyLoader: ({ big, medium, }: {
        big?: boolean | undefined;
        medium?: boolean | undefined;
    }) => JSX.Element;
    getFileType: (fullPath: string) => "function" | "other" | "markdown" | "typescript" | "javascript" | "json" | "folder" | "operation" | "operationFolder" | "interface" | "variable";
    MatchingText: (props: {
        text: string;
        search: string;
        defaultTextClassName: string;
        matchTextClassName: string;
        truncateLength?: number | undefined;
    }) => JSX.Element;
    PathSearchResults: (props: {
        paths: string[];
        search: string;
        augmentedWords?: import("augmented-word-types").AugmentedWord[] | undefined;
    }) => JSX.Element;
    getFileTypeFromPath: (path?: string | undefined) => "other" | import("filename-conventions").FileType;
    getWriterType: (extension: string | undefined) => import("filename-conventions").WriterType;
    hasSubExtension: (srcRelativeFileId: string, subExtensions: string | string[], includeRootName?: boolean | undefined) => boolean;
    isGeneratedOperationName: (operationName: string) => boolean;
    isGeneratedOperation: (operationBasePath: string) => boolean;
    isIndexableFileId: (fileId: string) => boolean;
    frontmatterParseToString: (frontmatter: import("matter-types").Frontmatter) => string;
    frontmatterToObject: <TResult extends import("matter-types").FrontmatterParse = import("matter-types").FrontmatterParse>(frontmatter: import("matter-types").Frontmatter, schema: import("schema-types").SimplifiedSchema) => TResult | undefined;
    getFrontmatterValueString: (value: import("frontmatter-util").FrontmatterValue) => string | null;
    markdownModelTypeToMarkdownString: (markdownModelType: import("model-types").Storing<import("model-types").MarkdownModelType>) => string;
    objectToFrontmatter: (parse: import("matter-types").FrontmatterParse, schema: import("schema-types").SimplifiedSchema) => import("matter-types").Frontmatter;
    parseFrontmatterString: (value: string) => string;
    quotedOrNot: (string: string) => string;
    stringifyNewlines: (string: string) => string;
    canAccessSync: (p: import("fs").PathLike, mode: number) => boolean;
    canAccess: (p: import("fs").PathLike, mode: number) => Promise<boolean>;
    canExecuteSync: (p: import("fs").PathLike) => boolean;
    canExecute: (p: import("fs").PathLike) => Promise<boolean>;
    canReadSync: (p: import("fs").PathLike) => boolean;
    canRead: (p: import("fs").PathLike) => Promise<boolean>;
    canSeeSync: (p: import("fs").PathLike) => Promise<boolean>;
    canSee: (p: import("fs").PathLike) => Promise<boolean>;
    canWriteSync: (p: import("fs").PathLike) => boolean;
    canWrite: (p: import("fs").PathLike) => Promise<boolean>;
    copyAllRelativeFiles: (relativeFilePaths: string[], absoluteSourceRoot: string, absoluteDestinationRoot: string, force?: boolean | undefined) => Promise<boolean>;
    fileExistsWithCaseSync: typeof fileExistsWithCaseSync;
    findClosestAbsolutePath: (absolutePath: string) => Promise<string | undefined>;
    findFileNameCaseInsensitive: (folderPath: string, fileName: string) => Promise<string | undefined>;
    getAllFoldersUntilFolder: (folderPath: string) => string[];
    getFileName: (pathString: string) => string;
    getFirstAvailableFilename: (absoluteFilePath: string) => string;
    getFirstFile: (fullPath: string) => Promise<string | undefined>;
    getFolderSizeObject: {
        (absoluteFolderPath: string, minimumReportSizeMb?: number | undefined, ignoreGenerated?: boolean | undefined): Promise<import("recursive-types").ChildObject<{
            size: number;
            name: string;
        }>[]>;
        config: {
            isPublic: true;
        };
    };
    getFolder: (pathString: string) => string;
    getLastFolder: (pathString: string) => string;
    getOneFolderUpPath: (folderPath: string) => string;
    getPathCombinations: (...chunksSegments: (string | string[])[]) => string[];
    oneUp: (filename: string) => string;
    parseMd: (mdFilePath: string) => import("fs-util").Markdown;
    readFilePerLine: (absoluteFilePath: string, withLine: (line: string, close: () => void) => void) => Promise<void>;
    readFrontmatter: (absoluteFilePath: string) => Promise<import("matter-types").Frontmatter | undefined>;
    removeAllExcept: (folderPath: string, config?: {
        ignore?: string[] | undefined;
        typeToRemove?: "folder" | "file" | undefined;
    } | undefined) => Promise<{
        name: string;
        removed: boolean;
    }[]>;
    renameAndCreate: (oldPath: string, newPath: string) => Promise<void>;
    returnReadmePathFromFolder: (absoluteFolderPath: string) => Promise<string | undefined>;
    writeJsonToFile: <T>(p: string, data: T) => Promise<boolean>;
    writeStringToFile: (p: string, data: string) => Promise<boolean>;
    writeToFiles: (fileObject: {
        [absoluteFilePath: string]: any;
    }) => Promise<void>;
    getFunctionExersize: (functionId: string) => Promise<string>;
    converse: (searchMessage: string) => Promise<false | undefined>;
    executeSdkFunction: (operationString: string, parameters: string[] | undefined) => Promise<any>;
    getCachedExportedFunctions: () => Promise<import("function-types").TsFunction[]>;
    getMenu: () => Promise<{
        success: boolean;
        response: string;
        menu: {
            [x: string]: import("function-types").TsFunction[];
        };
    } | undefined>;
    getSdkFunctionPaths: () => Promise<false | import("function-util").FnMatch[]>;
    findFolderWhereMatch: <T_1>(fullSourcePath: string, matchFunction: (folderPath: string) => T_1) => {
        folderPath: string;
        matchResult: T_1;
    } | undefined;
    findOperationBasePathWithClassification: (startPath: string) => {
        folderPath: string;
        classification: "cjs" | "ts" | "esm" | "node-cjs" | "node-esm" | "node-ts" | "server-cjs" | "ui-web" | "ui-app" | "ui-ts" | "ui-cjs" | "ui-esm";
    } | undefined;
    findOperationBasePath: (startPath: string) => string | undefined;
    getAllPackageJsonDependencies: (operation: import("code-types").Operation) => string[];
    getCommonAncestorMultiple: (paths: string[]) => Promise<string | undefined>;
    getCommonAncestor: (path1: string, path2: string) => string;
    getFolderPath: (fileOrFolderPath: string) => Promise<string | undefined>;
    getOperationClassificationObject: () => Promise<import("get-path").OperationClassificationObject>;
    getOperationClassification: (folderPath: string) => "cjs" | "ts" | "esm" | "node-cjs" | "node-esm" | "node-ts" | "server-cjs" | "ui-web" | "ui-app" | "ui-ts" | "ui-cjs" | "ui-esm" | undefined;
    getOperationPathParse: (absolutePath: string) => import("code-types").OperationPathParse | undefined;
    getOperationPath: (operationName: string, config?: {
        manualProjectRoot?: string | undefined;
        notUseSdk?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    getOperationRelativePath: (absolutePath: string, operationBasePath: string) => string;
    getPathParse: (absolutePath: string) => import("code-types").PathParse | undefined;
    getPathsWithOperations: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => string[];
    getProjectRoot: (fullSourcePath?: string | undefined) => string | undefined;
    getRelativeLinkPath: (absoluteFromFilePath: string, absoluteToFilePath: string, debug?: boolean | undefined) => string;
    getRelativePath: (absolutePath: string, relativeFrom: "project-root") => string | undefined;
    getRootPath: (name?: "text" | "assets" | "backups" | "bundled" | "cloned" | "distributions" | "operations" | "knowledge" | "db" | undefined, config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => string | undefined;
    getSrcRelativeFileId: (operationRelativePath: string) => string;
    getSubExtensions: (absolutePath: string, config?: {
        allowAllSubExtensions?: boolean | undefined;
    } | undefined) => string[];
    hasDependency: (operation: import("code-types").Operation, dependency: string) => boolean;
    isBundle: (folderPath?: string | undefined) => boolean;
    isOperation: (absoluteFolderPath: string) => boolean;
    isUiOperation: (tsconfig: import("code-types").TsConfig | null, packageJson: import("code-types").Operation | null) => boolean;
    isWorkspaceRoot: (folderPath: string) => {
        isBundle: boolean;
        isWorkspaceRoot: boolean;
    } | undefined;
    packageCompilesTs: (packageJson: import("code-types").Operation | null) => boolean;
    tsconfigCompilesEsm: (tsconfig: import("code-types").TsConfig) => boolean;
    getTsConfig: (packageFolder: string) => Promise<import("code-types").TsConfig | null>;
    apply: <T_2>(functions: ((input: T_2) => T_2)[], value: T_2) => T_2;
    createEnum: <T_3 extends readonly string[]>(array: T_3) => { [K in T_3[number]]: K; };
    createMappedObject: <T_4 extends {
        [key: string]: any;
    }, U = T_4>(array: T_4[], mapKey: keyof T_4, mapFn?: ((value: T_4, array: T_4[]) => U) | undefined) => import("js-util").MappedObject<U>;
    destructureOptionalObject: <T_5 extends {
        [key: string]: any;
    }>(object: T_5 | null | undefined) => Partial<T_5>;
    findLastIndex: <T_6>(array: T_6[], findFn: (item: T_6) => boolean) => number | undefined;
    getCurrentDate: (date?: Date | undefined) => string;
    getObjectFromParamsString: (paramsString: string) => {
        [x: string]: string;
    };
    getObjectKeysArray: <TObject extends {
        [key: string]: any;
    }>(object: TObject) => Extract<keyof TObject, string>[];
    getParameterAtLocation: <T_7 = any>(object: {
        [key: string]: any;
    }, location: string[]) => T_7;
    getSubsetFromObject: <T_8, K_1 extends readonly (keyof T_8)[]>(object: T_8, keys: K_1) => Pick<T_8, K_1[number]>;
    groupByKey: <T_9 extends {
        [key: string]: any;
    }>(array: T_9[], key: keyof T_9) => {
        [key: string]: T_9[];
    };
    hasAllLetters: (a: string, b: string) => boolean;
    insertAt: <T_10>(array: T_10[], items: T_10 | T_10[], beforeIndex: number) => T_10[];
    isAllTrue: (array: boolean[]) => boolean;
    isArrayEqual: (a: any[], b: any[]) => boolean;
    makeArray: <T_11>(...arrayOrNotArray: (T_11 | T_11[] | undefined)[]) => T_11[];
    mapAsync: <T_12, U_1>(array: T_12[], callback: (value: T_12, index: number, array: T_12[]) => Promise<U_1>) => Promise<Awaited<U_1>[]>;
    mapKeys: (object: {
        [key: string]: any;
    }, mapFn: (key: string) => string | Promise<string> | undefined) => Promise<{
        [x: string]: any;
    }>;
    mapMany: <T_13, U_2>(array: T_13[], mapFn: (item: T_13, index: number, array: T_13[]) => Promise<U_2>, limit?: number | undefined) => Promise<U_2[]>;
    mapValuesSync: <T_14, U_3>(object: {
        [key: string]: T_14;
    }, mapFn: (value: T_14) => U_3) => {
        [x: string]: U_3;
    };
    mergeNestedObject: <T_15 extends import("js-util").O>(object: T_15, otherObject: import("js-util").NestedPartial<T_15> | undefined) => T_15;
    mergeObjectParameters: <T_16>(config: T_16 | undefined, defaults: T_16 | undefined) => Partial<T_16>;
    mergeObjectsArray: <T_17 extends {
        [key: string]: any;
    }>(objectsArray: T_17[]) => T_17;
    mergeObjects: <T_18 extends {
        [key: string]: any;
    }>(...objects: (Partial<T_18> | undefined)[]) => T_18 | undefined;
    noEmptyString: (input: string | undefined) => string | undefined;
    notEmpty: typeof notEmpty;
    objectMapAsync: <TObject_1 extends {
        [key: string]: any;
    }, TResultValue, TResultObject extends { [key in keyof TObject_1]: TResultValue; }>(object: TObject_1, mapFn: (key: Extract<keyof TObject_1, string>, value: TObject_1[keyof TObject_1]) => Promise<TResultValue>) => Promise<TResultObject>;
    objectMapSync: <TObject_2 extends {
        [key: string]: any;
    }, TMapResult, TResultObject_1 extends { [key_1 in keyof TObject_2]: TMapResult; }>(object: TObject_2, mapFn: (key: keyof TObject_2, value: TObject_2[keyof TObject_2]) => TMapResult) => TResultObject_1;
    objectValuesMap: <T_19 extends {
        [key: string]: T_19[string];
    }, U_4 extends unknown>(object: T_19, mapFn: (key: string, value: T_19[string]) => U_4) => {
        [key: string]: U_4;
    };
    omitUndefinedValues: <T_20 extends {
        [key: string]: any;
    }>(object: T_20) => T_20;
    onlyDuplicates: <U_5>(isEqualFn?: ((a: U_5, b: U_5) => boolean) | undefined) => <T_21 extends U_5>(value: T_21, index: number, self: T_21[]) => boolean;
    onlyUnique2: <U_6>(isEqualFn?: ((a: U_6, b: U_6) => boolean) | undefined) => <T_22 extends U_6>(value: T_22, index: number, self: T_22[]) => boolean;
    onlyUnique: typeof onlyUnique;
    pickRandomArrayItem: <T_23>(array: T_23[]) => T_23;
    putIndexAtIndex: <T_24>(array: T_24[], index: number, toIndex: number) => T_24[];
    removeIndexFromArray: <T_25>(array: T_25[], index: number) => T_25[];
    removeOptionalKeysFromObjectStrings: <TObject_3 extends import("js-util").O>(object: TObject_3, keys: string[]) => TObject_3;
    removeOptionalKeysFromObject: <TObject_4 extends import("js-util").O>(object: TObject_4, keys: Exclude<Extract<keyof TObject_4, string>, Exclude<import("js-util").KeysOfType<TObject_4, Exclude<TObject_4[keyof TObject_4], undefined>>, undefined>>[]) => TObject_4;
    replaceLastOccurence: (string: string, searchValue: string, replaceValue: string) => string;
    reverseString: (string: string) => string;
    sumAllKeys: <T_26 extends {
        [key: string]: number | undefined;
    }>(objectArray: T_26[], keys: (keyof T_26)[]) => T_26;
    sumObjectParameters: <TObject_5 extends {
        [key: string]: number;
    }>(object1: TObject_5, object2: TObject_5) => TObject_5;
    sum: (items: number[]) => number;
    takeFirst: <T_27>(arrayOrNot: T_27 | T_27[]) => T_27;
    trimSlashes: (absoluteOrRelativePath: string) => string;
    getSimpleJsonString: (json: import("json-util").Json) => string | undefined;
    flattenMarkdownChunks: (markdownChunks: import("markdown-types").MarkdownChunk[]) => import("markdown-types").MarkdownParagraph[];
    getKvmdItemsRecursively: (chunk: import("markdown-types").MarkdownChunk, categoryStackUntilNow?: import("model-types").CategoryStack | undefined) => import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    getParagraphsRecursively: (chunk: import("markdown-types").MarkdownChunk, categoryStackUntilNow?: import("model-types").CategoryStack | undefined) => import("markdown-types").MarkdownParagraph[];
    kvmdDataMap: <T_28 extends {
        [key: string]: string | string[] | undefined;
    }>(data: import("model-types").KeyValueMarkdownModelType[], { keyName, valueName, categoryStackName, commentName, }: {
        keyName?: string | undefined;
        valueName?: string | undefined;
        commentName?: string | undefined;
        categoryStackName?: string | undefined;
    }) => T_28[];
    kvmdDataToString: (kvmdData: import("model-types").KeyValueMarkdownModelType, previous: import("model-types").KeyValueMarkdownModelType | undefined) => string;
    kvmdParseToMarkdownString: (keyValueMarkdownParse: import("model-types").KeyValueMarkdownParse) => string;
    markdownStringToKvmdParse: (kvMdString: string, dbFileLocation: import("model-types").DbFileLocation) => import("model-types").KeyValueMarkdownParse;
    parseKvmdLine: (string: string) => import("model-types").KvmdLine | undefined;
    LabeledButton: (button: import("labeled-button").LabeledButtonType, index: number) => JSX.Element;
    getCallerFileName: () => string | undefined;
    log: (message: string, config?: import("log").LogConfig | undefined, data?: any) => void;
    parseTitle: (markdown: string) => {
        title: string;
        rest: string;
    };
    isResultOfInterface: <TResult_1>(result: TResult_1, jsonSchema: unknown) => boolean;
    makeTest: <TResult_2>(testFunction: (() => Promise<TResult_2>) | (() => TResult_2), isValid?: ((result: TResult_2) => boolean) | undefined) => () => Promise<boolean>;
    chunkToStringRecursively: (chunk: import("markdown-types").MarkdownChunk) => string;
    getChunkParagraphsRecursively: (chunk: import("markdown-types").MarkdownChunk) => string[];
    getImplicitId: (title: string) => string;
    getMarkdownIntro: (markdownParse: import("markdown-types").MarkdownParse | null) => {
        title: string | undefined;
        firstParagraph: string | null;
    };
    getMarkdownParseParagraphs: (markdownParse: import("markdown-types").MarkdownParse) => string[];
    getMarkdownReferencePaths: (markdownString: string) => string[];
    getMarkdownReferencesFromParagraph: (paragraph: string) => import("markdown-parse-js").MarkdownReference[];
    markdownParseToMarkdownStringFromContent: (markdownParse: import("markdown-types").MarkdownParse) => string | undefined;
    markdownParseToMarkdownString: (markdownParse: import("markdown-types").MarkdownParse) => string;
    mdContentParseRecursively: (markdownString: string, level: number) => import("markdown-types").MarkdownChunk[];
    mdToJsonParse: (markdownString: string, fileName?: string | undefined, config?: import("markdown-parse-js").MarkdownParseConfig | undefined) => import("markdown-types").MarkdownParse;
    parseFrontmatterMarkdownString: (markdownWithFrontmatter: string, config?: import("markdown-parse-js").MarkdownParseConfig | undefined) => import("markdown-types").MarkdownParse;
    parseMarkdownParagraph: (paragraph: string) => import("markdown-parse-js").MarkdownParagraphChunk[];
    parseMdToChunks: (markdownString: string, level: number) => import("markdown-types").MarkdownChunk[];
    removeHeaderPrefix: (string: string) => string;
    markdownParseToMarkdownModelType: (markdownParse: import("markdown-types").MarkdownParse | null) => import("model-types").Storing<import("model-types").MarkdownModelType> | null;
    parseMarkdownModelTimestamp: (parameters: import("matter-types").Frontmatter, markdownParse: import("markdown-types").MarkdownParse, parameterName: "createdAt" | "updatedAt" | "deletedAt" | "createdFirstAt" | "openedAt") => number;
    tryParseDate: (dateString: string) => number | undefined;
    findCodeblocks: (markdownString: string) => string[];
    findCodespans: (markdownString: string) => string[];
    findEmbeds: (markdownString: string) => import("markdown-types").MarkdownEmbed[];
    findJsonInMarkdown: <T_29>(text?: string | undefined) => T_29 | undefined;
    findLinks: (markdownString: string) => import("markdown-types").MarkdownLink[];
    flattenMarkdownString: (markdownString: string, findFunction: (token: import("marked").marked.Token) => boolean) => import("marked").marked.Token[];
    flattenMarkedTokenRecursive: (token: import("marked").marked.Token, findFunction: (token: import("marked").marked.Token) => boolean) => import("marked").marked.Token[];
    trimCodeblock: (codeblock: string) => string;
    cleanupTimer: (uniqueId: string) => void;
    generateUniqueId: () => string;
    getNewPerformance: (label: string, uniqueId: string, isNew?: boolean | undefined) => import("measure-performance").PerformanceItem | undefined;
    generateId: () => string;
    generatePassword: typeof generatePassword;
    generateRandomString: (length: number) => string;
    generateTime: () => number;
    isEmail: typeof isEmail;
    getAssetInputType: (parameterName: string, valueType?: import("schema-types").SimplifiedSchemaType | undefined) => import("name-conventions").AssetInputType | undefined;
    getParameterContentType: (parameterName: string) => void;
    isCalculatedParameter: (parameterName: string) => boolean;
    isGeneratedParameterName: (parameterName: string) => void;
    getFullPath: (paths: string | string[] | undefined) => string;
    getLastPathsChunk: (paths: string | string[] | undefined) => string | undefined;
    usePath: () => {
        lastChunk: string | undefined;
        fullPath: string;
    };
    oneByOne: <T_30, U_7>(array: T_30[], callback: (instance: T_30, index: number) => Promise<U_7>) => Promise<U_7[]>;
    getDependenciesSummary: (operationName: string) => Promise<{
        coreDependencies: string[];
        operationDependencies: string[];
        packageDependencies: string[];
    }>;
    getOperationMetaData: (operationBasePath: string) => Promise<import("operation-util").OperationMetaData | undefined>;
    recalculateOperationIndexJson: (operationBasePath: string, manualProjectRoot?: string | undefined) => Promise<void>;
    parsePrimitiveArray: (string: string) => string[];
    parsePrimitiveBoolean: (string: string) => boolean | undefined;
    parsePrimitiveString: (string: string) => string;
    parsePrimitive: (string: string, simplifiedSchema?: any) => import("parse-primitive").PrimitiveResult;
    byteCount: typeof byteCount;
    calculatePathMetaData: (absolutePath: string) => Promise<import("code-types").PathMetaData | undefined>;
    categorizeFiles: ({ basePath, type, ignoreIndexFiles, }: {
        basePath: string | string[];
        ignoreIndexFiles?: boolean | undefined;
        type?: "text" | "code" | "data" | undefined;
    }) => Promise<import("code-types").CategorizedFilePaths>;
    getFolderSummary: (categorizedFiles: import("code-types").CategorizedFilePaths) => Promise<FolderSummary>;
    getPathMainComment: (absolutePath: string) => Promise<any>;
    sumSizeSummary: (filePaths: string[]) => Promise<SizeSummary>;
    isPlural: (parameterName: string) => boolean;
    isSingular: (parameterName: string) => boolean;
    pluralize: (parameterName: string) => string;
    singularize: (parameterName: string) => string;
    clickOnSpanTag: (props: {
        page: import("puppeteer-core").Page;
        spanText: string;
    }) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    delay: (ms: number) => Promise<unknown>;
    facebookLogin: (props: import("puppeteer-utils").FacebookLoginPropsType) => Promise<void>;
    foundOrNotXpath: (props: {
        page: import("puppeteer-core").Page;
        selector: string;
    }) => Promise<{
        found: boolean;
        element?: any;
    }>;
    foundOrNot: (props: {
        page: import("puppeteer-core").Page;
        selector: string;
        timeoutMilliseconds?: number | undefined;
    }) => Promise<boolean>;
    getBrowserPageById: (browser: import("puppeteer").Browser, pageId: string) => Promise<import("puppeteer").Page | undefined>;
    getBrowserTabs: (browserInfo: import("browser-types").BrowserSession) => Promise<import("puppeteer-core").Page[]>;
    getBrowser: () => unknown;
    getChromeExecutablePath: () => "/usr/bin/google-chrome-stable" | "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    getConnectedBrowsers: () => Promise<import("browser-types").BrowserSession[]>;
    getIdlePage: (browser: import("puppeteer").Browser) => Promise<import("puppeteer").Page | undefined>;
    getNewPage: (browser: import("puppeteer").Browser) => Promise<import("puppeteer").Page | undefined>;
    gmailLogin: (props: import("puppeteer-utils").GmailLoginPropsType) => Promise<void>;
    isCaptchaExist: (page: import("puppeteer").Page) => Promise<{
        captchas: import("puppeteer-extra-plugin-recaptcha/dist/types").CaptchaInfo[];
    }>;
    logConsoleIfDebug: (props: {
        message: string;
        debug: boolean;
    }) => Promise<void>;
    openMultiTabs: (props: import("puppeteer-utils").OpenMultiTabProps) => Promise<void>;
    openNewBrowserOnChildProcess: () => Promise<void>;
    openNewBrowser: () => Promise<import("puppeteer").Browser | undefined>;
    openPage: (pageId?: string | undefined) => Promise<import("puppeteer").Page | undefined>;
    racePromises: (promises: Promise<any>[]) => Promise<number>;
    retryClickAndWaitSelector: (props: {
        page: any;
        selector: string | string[];
        selectorOptions?: any;
        selectorToClick: string;
        maxTime: number;
    }) => Promise<{
        success: boolean;
        found?: any;
    }>;
    retryWaitSelector: (props: {
        page: import("puppeteer-core").Page;
        selector: string;
        maxTime: number;
    }) => Promise<{
        success: boolean;
        found?: any;
    }>;
    setBrowserPageIdle: (pageId: string, status: boolean) => Promise<void>;
    setBrowserSession: (browser: import("puppeteer").Browser) => void;
    setInnerHtml: (props: {
        page: import("puppeteer-core").Page;
        selector: string;
        value: string;
    }) => Promise<void>;
    setInputValue: (params: {
        page: import("puppeteer-core").Page;
        selector: string;
        inputValue: string;
    }) => Promise<void>;
    solveReptcha: (page: import("puppeteer").Page) => Promise<import("puppeteer-extra-plugin-recaptcha/dist/types").SolveRecaptchasResult>;
    trueClick: (props: {
        page: import("puppeteer-core").Page;
        selector: string;
    }) => Promise<{
        success: boolean;
    }>;
    twitterLogin: (props: {
        page: import("puppeteer").Page;
    }) => Promise<void>;
    typeInTheInputField: (props: {
        page: import("puppeteer").Page;
        selector: string;
        value: string;
    }) => Promise<void>;
    typeOnTheTargetWithXpathSelector: (props: {
        page: import("puppeteer-core").Page;
        selector: string;
        text: string;
    }) => Promise<void>;
    waitMilliseconds: (milliseconds: number) => Promise<unknown>;
    getKeysAtPathFromNestedObject: <T_31 extends {
        [key: string]: any;
    }>(nestedObject: T_31, objectPath: string) => string[];
    getMenuPagesObject: <T_32>(flat: import("webpage-types").WebPage<T_32>[]) => import("webpage-types").MenuObjectType<T_32>;
    makeNestedObjectFromQueryPathObject: <T_33 extends import("recursive-util").QueryPathObject>(objectArray: T_33[], initialValue: import("recursive-types").NestedObject<T_33>) => import("recursive-types").NestedObject<T_33>;
    mapChildObjectRecursive: <T_34 extends {
        [key: string]: any;
    }, U_8 extends {
        [key: string]: any;
    }>(childObject: import("recursive-types").ChildObject<T_34>, mapFunction: (item: import("recursive-types").ChildObject<T_34>) => U_8) => import("recursive-types").ChildObject<U_8>;
    nestedObjectToChildObject: <T_35 extends {
        [key: string]: any;
    }>(nestedObject: import("recursive-types").NestedObject<T_35>, mapFolderToT: (nestedObject: import("recursive-types").NestedObject<T_35>, key: string) => T_35, stack?: string[] | undefined) => import("recursive-types").ChildObject<T_35>[];
    nestedPathObjectToNestedMenuRecursive: (nestedPathObject: import("recursive-types").NestedPathObject | null, pathStack?: string[] | undefined, config?: {
        target?: "_blank" | undefined;
        getHref?: ((fullPath: string) => string) | undefined;
    } | undefined) => import("nested-menu-types").MenuItemType[] | undefined;
    nestifyQueryPathObjectRecursive: <T_36 extends import("recursive-util").QueryPathObject>(queryPathObjects: T_36[], level?: number | undefined) => import("recursive-util").NestedQueryPathObject<T_36>[];
    queryPathsArrayToNestedPathObject: (queryPaths: string[]) => import("recursive-types").NestedPathObject;
    reduceQueryPathsRecursively: (queryPaths: string[], initialValue: import("recursive-types").NestedPathObject) => import("recursive-types").NestedPathObject;
    bodyFromQueryString: (query?: string | undefined) => import("rest-util").QueryableObject | undefined;
    getFirstQueryStrings: (query: import("rest-util").QueryableObject) => (string | undefined)[];
    getQueryPart: (strings: string[], queryKey: string) => string;
    isValidEntry: ([_, value]: [key: string, value: any]) => boolean;
    toQueryString: (query?: any) => string;
    runChildProcess: (config: {
        operationFolderName: string;
        scriptFileName: string;
        args?: (string | undefined)[] | undefined;
        isOverlapped?: boolean | undefined;
    }) => Promise<(string | null)[] | undefined>;
    findFirstCommentTypes: (strippedFullComment?: string | undefined) => import("comment-types").CommentTypeObject;
    getDataParameterNames: (item: import("model-types").AugmentedAnyModelType) => string[];
    getPossibleReferenceParameterNames: (parameterName: string) => string[];
    getProperties: (schema: import("json-schema").JSONSchema7 | undefined) => import("schema-util").SchemaProperty[];
    getRefLink: (ref?: string | undefined) => string | undefined;
    getReferencableModels: (simplifiedSchema?: import("schema-types").SimplifiedSchema | undefined) => import("schema-util").ReferenceParameterInfo[] | undefined;
    getReferenceParameterInfo: (parameterName: string) => import("schema-util").ReferenceParameterInfo;
    getSchemaItems: (schema: import("json-schema").JSONSchema7 | undefined) => import("json-schema").JSONSchema7[];
    getSchema: (maybeSchema: import("json-schema").JSONSchema7Definition | undefined) => import("json-schema").JSONSchema7 | undefined;
    simplifiedSchemaToTypeDefinitionString: (simplifiedSchema?: import("schema-types").SimplifiedSchema | undefined) => string;
    simplifySchema: (name: string | null, schema: import("json-schema").JSONSchema7, possibleRefs: {
        name: string;
        schema: import("json-schema").JSONSchema7;
    }[], rootStack: string[]) => import("schema-types").SimplifiedSchema | undefined;
    findSentenceMatches: <T_37>(searchMessage: string, array: T_37[], getSentence?: ((x: T_37) => string) | undefined) => T_37[];
    searchRecursiveObjectArray: <T_38 extends {
        children?: T_38[] | undefined;
    } & Object>(array: T_38[], baseMatcher: (item: T_38) => boolean, afterMapper?: ((item: T_38, isMatch: boolean, hasChildMatch: boolean) => T_38) | undefined) => T_38[];
    objectStringToJson: (string: string) => {
        [key: string]: import("string-to-json").JSONValue;
    };
    parseIfJson: (string: string) => any;
    parsePrimitiveJson: <TForceType extends "string" | "number" | "boolean">(value: string, forceType?: TForceType | undefined) => TForceType extends "string" ? string | null | undefined : TForceType extends "number" ? number | null | undefined : TForceType extends "boolean" ? boolean | null | undefined : string | number | boolean | null | undefined;
    stringToJson: (value: string, isObject?: boolean | undefined) => import("string-to-json").JSONValue;
    Tabs: (props: {
        title?: string | undefined;
        tabKey?: string | undefined;
        tabs: import("tabs").TabType[];
        isSmall?: boolean | undefined;
    }) => JSX.Element;
    getEncoding: typeof getEncoding;
    isBinary: typeof isBinary;
    isText: typeof isText;
    tryParseJson: <T_39>(text: string, logParseError?: boolean | undefined) => T_39 | null;
    createCodeblockMarkdown: (text: string, language?: string | null | undefined) => string;
    useCustomUrlStore: <T_40 extends string | number | boolean | string[] | boolean[] | number[] | undefined>(queryKey: string, config: import("use-url-store").CustomUrlStoreConfig) => [T_40, (newValue: T_40 | undefined) => Promise<boolean>];
    crudPageToWebPages: (pageData: import("webpage-types").CrudPage) => import("webpage-types").WebPage<import("webpage-types").CrudPage>[];
    functionFormPageToWebPage: (pageData: import("webpage-types").FunctionFormPage) => import("webpage-types").WebPage<import("webpage-types").FunctionFormPage>;
};
export type SdkType = typeof sdk;
//# sourceMappingURL=sdk-js.d.ts.map