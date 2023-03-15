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
exports.getNavigationWithContext = void 0;
var fs_util_1 = require("fs-util");
var fs_authorization_1 = require("fs-authorization");
var search_fs_1 = require("search-fs");
var fs_util_js_1 = require("fs-util-js");
var get_path_1 = require("get-path");
var getFolderFileCollections_1 = require("./getFolderFileCollections");
/**
TODO:

- ✅ Test If a file/folder doesn't exist, it shows it weirdly as if it were a folder. This should not happen
- ✅ fix the rest.
- ✅ get MarkdownIndex, even if the file collection filter filters out the md file.
- ✅ ensure `getFolderFileCollection` works
- generateSdkOperations
- use getNavigationWithContext in frontend
- use getFileCollectionWithContext in fronend: Now, let's make it possible to play mp3/mp4, render image, show `Transcription`, show `MarkdownIndex`, download non-showable files like doc, pdf, etc.
- If the server is offline, have a good message to show.
- cleanup frontend by removing getStaticProps and old functions
- name of file should be with the most prominent extension, but sometimes not even needed. this should be super custom
- Test `getFileAuthorizationRecursive` with different test-cases. Think clearly about how it should work and if it actually works that way. May be best to write it out.

*/
var getNavigationWithContext = function (functionContext, config) { return __awaiter(void 0, void 0, void 0, function () {
    var customProjectRelativeBaseFolderPath, queryPath, projectRelativeBasePathArray, projectRelativeBasePaths, projectRoot, absoluteBaseFolderPath, expectedAbsolutePath, exists, finalAbsolutePath, _a, stats, isFile, parsedPath, finalProjectRelativePath, finalAbsoluteFolderPath, projectRelativeBaseFolderPath, baseAuthorization, groupSlugs, authorization, navigation;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                customProjectRelativeBaseFolderPath = config.customProjectRelativeBaseFolderPath, queryPath = config.queryPath;
                projectRelativeBasePathArray = functionContext
                    ? (0, search_fs_1.getExplorableBasePathsWithContext)(functionContext)
                    : [];
                projectRelativeBasePaths = projectRelativeBasePathArray.map(function (x) { return x.projectRelativePath; });
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "No project root",
                        }];
                }
                absoluteBaseFolderPath = customProjectRelativeBaseFolderPath
                    ? fs_util_1.path.join(projectRoot, customProjectRelativeBaseFolderPath)
                    : projectRoot;
                if (!absoluteBaseFolderPath || !fs_util_1.fs.existsSync(absoluteBaseFolderPath)) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "No valid root",
                        }];
                }
                expectedAbsolutePath = fs_util_1.path.join(absoluteBaseFolderPath, queryPath);
                exists = fs_util_1.fs.existsSync(expectedAbsolutePath);
                if (!!exists) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, fs_util_1.findClosestAbsolutePath)(expectedAbsolutePath)];
            case 1:
                _a = _d.sent();
                return [3 /*break*/, 3];
            case 2:
                _a = expectedAbsolutePath;
                _d.label = 3;
            case 3:
                finalAbsolutePath = _a;
                if (!finalAbsolutePath) {
                    // invalid path
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Couldn't find path",
                        }];
                }
                return [4 /*yield*/, fs_util_1.fs.stat(finalAbsolutePath)];
            case 4:
                stats = _d.sent();
                isFile = stats.isFile();
                parsedPath = fs_util_1.path.parse(finalAbsolutePath);
                finalProjectRelativePath = (0, fs_util_js_1.makeRelative)(finalAbsolutePath, projectRoot);
                finalAbsoluteFolderPath = isFile ? parsedPath.dir : finalAbsolutePath;
                projectRelativeBaseFolderPath = (_b = projectRelativeBasePathArray.find(function (p) {
                    return finalProjectRelativePath.startsWith(p.projectRelativePath);
                })) === null || _b === void 0 ? void 0 : _b.projectRelativePath;
                baseAuthorization = projectRelativeBaseFolderPath
                    ? { canRead: true, canWrite: true }
                    : { canRead: false, canWrite: false };
                groupSlugs = ((_c = functionContext.groups) === null || _c === void 0 ? void 0 : _c.map(function (x) { return x.slug; })) || [];
                return [4 /*yield*/, (0, fs_authorization_1.getFsAuthorization)({
                        projectRelativePath: finalAbsoluteFolderPath,
                        baseAuthorization: baseAuthorization,
                        groupSlugs: groupSlugs,
                        projectRelativeBaseFolderPath: projectRelativeBaseFolderPath || "",
                    })];
            case 5:
                authorization = _d.sent();
                if (!(authorization === null || authorization === void 0 ? void 0 : authorization.canRead)) {
                    return [2 /*return*/, { isSuccessful: false, message: "You have no access" }];
                }
                return [4 /*yield*/, (0, getFolderFileCollections_1.getFolderFileCollections)(finalAbsoluteFolderPath, projectRoot, groupSlugs)];
            case 6:
                navigation = _d.sent();
                return [2 /*return*/, {
                        isSuccessful: true,
                        message: "Found folder",
                        isFolder: !isFile,
                        navigation: navigation,
                        actualProjectRelativeFilePath: finalProjectRelativePath,
                    }];
        }
    });
}); };
exports.getNavigationWithContext = getNavigationWithContext;
exports.getNavigationWithContext.config = {
    isPublic: true,
};
//# sourceMappingURL=getNavigationWithContext.js.map