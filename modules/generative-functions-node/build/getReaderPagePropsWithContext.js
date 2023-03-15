"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReaderPagePropsWithContext = void 0;
var ai_functions_node_1 = require("ai-functions-node");
var fs_util_1 = require("fs-util");
var search_fs_1 = require("search-fs");
var fs_util_js_1 = require("fs-util-js");
var get_path_1 = require("get-path");
var read_markdown_file_1 = require("read-markdown-file");
var augmentMarkdown_1 = require("./augmentMarkdown");
var general_1 = require("./general");
var getExplorablePathDetails_1 = require("./getExplorablePathDetails");
var getNavigation_1 = require("./getNavigation");
/**
Gets all props required to show a reader page
*/
var getReaderPagePropsWithContext = function (
/**
 * Can be undefined in case of the static props. In that case we can only show public stuff....
 */
functionContext, config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRelativeBasePathArray, projectRelativeBasePaths, customProjectRelativeBaseFolderPath, queryPath, projectRoot, contextualPromptCategories, absoluteBaseFolderPath, _a, finalAbsoluteFolderPath, finalAbsolutePath, isAllowedHere, isFile, markdownParse, _b, allowedOtherExtensions, pathParse, rawContent, _c, isDev, canSeeContent, fileContentString, augmentedResult, props;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                projectRelativeBasePathArray = functionContext
                    ? (0, search_fs_1.getExplorableBasePathsWithContext)(functionContext)
                    : [];
                projectRelativeBasePaths = projectRelativeBasePathArray.map(function (x) { return x.projectRelativePath; });
                customProjectRelativeBaseFolderPath = config.customProjectRelativeBaseFolderPath, queryPath = config.queryPath;
                projectRoot = (0, get_path_1.getProjectRoot)();
                return [4 /*yield*/, (0, ai_functions_node_1.getContextualPromptCategories)()];
            case 1:
                contextualPromptCategories = _e.sent();
                if (!projectRoot) {
                    return [2 /*return*/, {
                            props: {
                                notFound: true,
                                notFoundReason: "No project root",
                                contextualPromptCategories: contextualPromptCategories,
                            },
                        }];
                }
                absoluteBaseFolderPath = customProjectRelativeBaseFolderPath
                    ? fs_util_1.path.join(projectRoot, customProjectRelativeBaseFolderPath)
                    : projectRoot;
                if (!absoluteBaseFolderPath || !fs_util_1.fs.existsSync(absoluteBaseFolderPath)) {
                    return [2 /*return*/, {
                            props: {
                                notFound: true,
                                notFoundReason: "No valid root",
                                contextualPromptCategories: contextualPromptCategories,
                            },
                        }];
                }
                return [4 /*yield*/, (0, getExplorablePathDetails_1.getExplorablePathDetails)(projectRoot, absoluteBaseFolderPath, queryPath, projectRelativeBasePaths, customProjectRelativeBaseFolderPath)];
            case 2:
                _a = _e.sent(), finalAbsoluteFolderPath = _a.finalAbsoluteFolderPath, finalAbsolutePath = _a.finalAbsolutePath, isAllowedHere = _a.isAllowedHere, isFile = _a.isFile;
                if (!isAllowedHere || !finalAbsoluteFolderPath || !finalAbsolutePath) {
                    /*
                TODO: Enable the ability to see public files too (files without `isDraft/isPrivate/etc` in its file or any folder above, up until the basepath of the user)
                
                make `isPublic(folderContent:FolderContent) => boolean`
                
                - Look if file `isPublic`
                - Look if firstFile (readme) says `isPublic`
                - The user/group basePath can be calculated. In case it's not in a user/group, it should still be able to be public, because then the basePath is "/"
                - Look if any folder above, up until basePath says `isPublic`
                
                What if everything is supposed to be private, except one folder? It could be handy to have an exception called `isPublic` in that case.
                    */
                    return [2 /*return*/, {
                            props: {
                                notFound: true,
                                notFoundReason: "You aren't allowed here (".concat(finalAbsolutePath, ")"),
                                contextualPromptCategories: contextualPromptCategories,
                            },
                        }];
                }
                if (!isFile) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(finalAbsolutePath)];
            case 3:
                _b = _e.sent();
                return [3 /*break*/, 5];
            case 4:
                _b = null;
                _e.label = 5;
            case 5:
                markdownParse = _b;
                allowedOtherExtensions = [".ts", ".tsx", ".json"];
                pathParse = fs_util_1.path.parse(finalAbsolutePath);
                if (!(isFile && allowedOtherExtensions.includes(pathParse.ext))) return [3 /*break*/, 7];
                return [4 /*yield*/, fs_util_1.fs.readFile(finalAbsolutePath, "utf8")];
            case 6:
                _c = _e.sent();
                return [3 /*break*/, 8];
            case 7:
                _c = undefined;
                _e.label = 8;
            case 8:
                rawContent = _c;
                isDev = process.env.NODE_ENV === "development";
                canSeeContent = (0, general_1.canSeeFileContent)(markdownParse === null || markdownParse === void 0 ? void 0 : markdownParse.parameters, isDev);
                fileContentString = !canSeeContent || !isFile
                    ? null
                    : markdownParse
                        ? markdownParse.raw
                        : rawContent
                            ? rawContent
                            : null;
                return [4 /*yield*/, (0, augmentMarkdown_1.augmentMarkdown)(fileContentString, {
                        // for now no code yet, it's too slow
                        augmentCode: false,
                        augmentContextualPrompts: false,
                        augmentContextualPromptResults: true,
                        augmentStatements: true,
                        augmentWords: true,
                        externalHost: undefined,
                        markdown_projectRelativeFilePath: (0, fs_util_js_1.makeRelative)(finalAbsolutePath, projectRoot),
                    })];
            case 9:
                augmentedResult = _e.sent();
                _d = {
                    contextualPromptCategories: contextualPromptCategories,
                    notFound: false,
                    isFolder: !isFile,
                    canSeeContent: canSeeContent,
                    unauthorizedWarningMessage: canSeeContent
                        ? null
                        : "You're not authorized to see this.",
                    markdown: (augmentedResult === null || augmentedResult === void 0 ? void 0 : augmentedResult.augmentedMarkdown) || rawContent || null
                };
                return [4 /*yield*/, (0, getNavigation_1.getNavigation)(finalAbsoluteFolderPath, projectRoot, isDev)];
            case 10:
                props = (_d.navigation = _e.sent(),
                    _d.actualProjectRelativeFilePath = (0, fs_util_js_1.makeRelative)(finalAbsolutePath, projectRoot),
                    _d.contextualPromptResults = (augmentedResult === null || augmentedResult === void 0 ? void 0 : augmentedResult.contextualPromptResults) || null,
                    _d.contextualPromptsObject = (augmentedResult === null || augmentedResult === void 0 ? void 0 : augmentedResult.contextualPromptsObject) || null,
                    _d);
                return [2 /*return*/, { props: props }];
        }
    });
}); };
exports.getReaderPagePropsWithContext = getReaderPagePropsWithContext;
exports.getReaderPagePropsWithContext.config = {
    isPublic: true,
};
//# sourceMappingURL=getReaderPagePropsWithContext.js.map