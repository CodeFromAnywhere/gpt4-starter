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
import { api, queries } from "api";
import { showStandardResponse } from "cool-toast";
import { getFileOrFolderName, makeRelative } from "fs-util-js";
import { useAlert } from "react-with-native-alert";
/**
 * gets base path the user should be aware of
 */
export var getUserAwareBasePath = function (projectRelativeFilePath, userAwareProjectRelativePaths) {
    var relativePath = userAwareProjectRelativePaths === null || userAwareProjectRelativePaths === void 0 ? void 0 : userAwareProjectRelativePaths.find(function (x) {
        return projectRelativeFilePath.startsWith(x);
    });
    var basePathRelative = relativePath
        ? makeRelative(projectRelativeFilePath, relativePath)
        : projectRelativeFilePath;
    return basePathRelative;
};
export var useFileActions = function (navigation) {
    var _a, _b;
    var refetch = function () {
        alert === null || alert === void 0 ? void 0 : alert("need to refetch files related stuff");
    };
    var basePathsQuery = queries.useGetExplorableBasePathsWithContext();
    var userAwareProjectRelativePaths = (_b = (_a = basePathsQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.map(function (x) { return x.projectRelativePath; });
    var updateFrontmatter = function (projectRelativePath, newFrontmatter) { return __awaiter(void 0, void 0, void 0, function () {
        var apiResult;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!projectRelativePath)
                        return [2 /*return*/];
                    return [4 /*yield*/, api.updateFrontmatterWithContext(projectRelativePath, newFrontmatter)];
                case 1:
                    apiResult = _b.sent();
                    showStandardResponse(apiResult);
                    if ((_a = apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                        refetch();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var alert = useAlert();
    var items = [
        {
            getTitle: function () { return "🗑 Delete"; },
            onClick: function (projectRelativePath) {
                if (!projectRelativePath)
                    return;
                var basePathRelative = getUserAwareBasePath(projectRelativePath, userAwareProjectRelativePaths);
                alert === null || alert === void 0 ? void 0 : alert("Are you sure?", "Do you want to delete ".concat(basePathRelative, "?"), [
                    { style: "cancel", text: "Cancel" },
                    {
                        text: "Delete",
                        style: "destructive",
                        onPress: function () { return __awaiter(void 0, void 0, void 0, function () {
                            var apiResult;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, api.deleteFileOrFolderWithContext(projectRelativePath)];
                                    case 1:
                                        apiResult = _b.sent();
                                        showStandardResponse(apiResult);
                                        if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                            refetch();
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); },
                    },
                ]);
            },
        },
        {
            getTitle: function () { return "📣 Rename"; },
            onClick: function (projectRelativePath) { return __awaiter(void 0, void 0, void 0, function () {
                var newFilename, apiResult;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!projectRelativePath)
                                return [2 /*return*/];
                            newFilename = prompt("What should the new name be?", getFileOrFolderName(projectRelativePath));
                            if (!newFilename)
                                return [2 /*return*/];
                            return [4 /*yield*/, api.renameFileOrFolderWithContext(projectRelativePath, newFilename)];
                        case 1:
                            apiResult = _b.sent();
                            showStandardResponse(apiResult);
                            if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                refetch();
                            }
                            return [2 /*return*/];
                    }
                });
            }); },
        },
        {
            getTitle: function () { return "↩️ Move"; },
            onClick: function (projectRelativePath) { return __awaiter(void 0, void 0, void 0, function () {
                var newLocation, apiResult;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!projectRelativePath)
                                return [2 /*return*/];
                            newLocation = prompt("Where should this file/folder be moved to?", projectRelativePath);
                            if (!newLocation)
                                return [2 /*return*/];
                            return [4 /*yield*/, api.movePathWithContext(projectRelativePath, newLocation)];
                        case 1:
                            apiResult = _b.sent();
                            showStandardResponse(apiResult);
                            if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                refetch();
                            }
                            return [2 /*return*/];
                    }
                });
            }); },
        },
        {
            getTitle: function () { return "👯‍♀️ Make a copy"; },
            onClick: function (projectRelativePath) { return __awaiter(void 0, void 0, void 0, function () {
                var apiResult;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!projectRelativePath)
                                return [2 /*return*/];
                            return [4 /*yield*/, api.copyPathWithContext(projectRelativePath)];
                        case 1:
                            apiResult = _b.sent();
                            showStandardResponse(apiResult);
                            if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                refetch();
                            }
                            return [2 /*return*/];
                    }
                });
            }); },
        },
        {
            getTitle: function () { return "🔎 Open in Explorer"; },
            onClick: function (projectRelativePath) { return __awaiter(void 0, void 0, void 0, function () {
                var apiResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!projectRelativePath)
                                return [2 /*return*/];
                            return [4 /*yield*/, api.fileExplorerOpen(projectRelativePath)];
                        case 1:
                            apiResult = _a.sent();
                            showStandardResponse(apiResult);
                            return [2 /*return*/];
                    }
                });
            }); },
        },
        {
            getTitle: function () { return "💻 Open in VSCode"; },
            onClick: function (projectRelativePath) { return __awaiter(void 0, void 0, void 0, function () {
                var apiResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!projectRelativePath)
                                return [2 /*return*/];
                            return [4 /*yield*/, api.vscodeOpen({
                                    files: [{ projectRelativePath: projectRelativePath }],
                                })];
                        case 1:
                            apiResult = _a.sent();
                            showStandardResponse(apiResult);
                            return [2 /*return*/];
                    }
                });
            }); },
        },
        {
            getIsEnabled: function (projectRelativePath) {
                var _a;
                return !((_a = navigation === null || navigation === void 0 ? void 0 : navigation.find(function (x) { return x.projectRelativePath === projectRelativePath; })) === null || _a === void 0 ? void 0 : _a.isPrivate);
            },
            getTitle: function () { return "🔑 Set private"; },
            onClick: function (path) { return updateFrontmatter(path, { isPrivate: "true" }); },
        },
        {
            getIsEnabled: function (projectRelativePath) {
                var _a;
                return ((_a = navigation === null || navigation === void 0 ? void 0 : navigation.find(function (x) { return x.projectRelativePath === projectRelativePath; })) === null || _a === void 0 ? void 0 : _a.isPrivate) === true;
            },
            getTitle: function () { return "🔑 Set public"; },
            onClick: function (path) { return updateFrontmatter(path, { isPrivate: "false" }); },
        },
        {
            getIsEnabled: function (projectRelativePath) {
                var _a;
                return ((_a = navigation === null || navigation === void 0 ? void 0 : navigation.find(function (x) { return x.projectRelativePath === projectRelativePath; })) === null || _a === void 0 ? void 0 : _a.isSecret) !== true;
            },
            getTitle: function () { return "🔒 Set secret"; },
            onClick: function (path) { return updateFrontmatter(path, { isSecret: "true" }); },
        },
        {
            getIsEnabled: function (projectRelativePath) {
                var _a;
                return ((_a = navigation === null || navigation === void 0 ? void 0 : navigation.find(function (x) { return x.projectRelativePath === projectRelativePath; })) === null || _a === void 0 ? void 0 : _a.isSecret) === true;
            },
            getTitle: function () { return "🔒 Set open"; },
            onClick: function (path) { return updateFrontmatter(path, { isSecret: "false" }); },
        },
        {
            getIsEnabled: function (projectRelativePath) {
                var _a;
                return ((_a = navigation === null || navigation === void 0 ? void 0 : navigation.find(function (x) { return x.projectRelativePath === projectRelativePath; })) === null || _a === void 0 ? void 0 : _a.isDraft) !== true;
            },
            getTitle: function () { return "🧪 Set draft"; },
            onClick: function (path) { return updateFrontmatter(path, { isDraft: "true" }); },
        },
        {
            getIsEnabled: function (projectRelativePath) {
                var _a;
                return ((_a = navigation === null || navigation === void 0 ? void 0 : navigation.find(function (x) { return x.projectRelativePath === projectRelativePath; })) === null || _a === void 0 ? void 0 : _a.isDraft) === true;
            },
            getTitle: function () { return "🧪 Set live"; },
            onClick: function (path) { return updateFrontmatter(path, { isDraft: "false" }); },
        },
    ];
    return items;
};
//# sourceMappingURL=useFileActions.js.map