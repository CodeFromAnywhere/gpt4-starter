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
import { useQueryPath } from "explorer-core-ui";
import { FancyLoader } from "fancy-loader";
import { getFileOrFolderName } from "fs-util-js";
import { destructureOptionalObject } from "js-util";
import dynamic from "next/dynamic";
import * as React from "react";
import { useState } from "react";
import { Div } from "react-with-native";
import { useAlert } from "react-with-native-alert";
import { ContextMenuItemComponent } from "./ContextMenuItemComponent";
import { openDownload } from "./openDownload";
var AssetInput = dynamic(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, import("asset-input")];
        case 1: return [2 /*return*/, (_a.sent()).AssetInput];
    }
}); }); }, { ssr: false });
var updateFrontmatter = function (projectRelativePath, newFrontmatter, refetch) { return __awaiter(void 0, void 0, void 0, function () {
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
                    refetch === null || refetch === void 0 ? void 0 : refetch();
                }
                return [2 /*return*/];
        }
    });
}); };
/**


All actions should refetch the required stuff

Permissions button

Rename/move button for file-collections

Delete entire file-collection

*/
export var FileCollectionActions = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var queryPath = useQueryPath();
    var _j = useState(false), isUploading = _j[0], setIsUploading = _j[1];
    var alert = useAlert();
    var navigationQuery = queries.useGetNavigationWithContext({ queryPath: queryPath });
    var openFilesQuery = queries.useGetOpenFilesWithContext();
    var openFiles = (_a = openFilesQuery.data) === null || _a === void 0 ? void 0 : _a.result;
    var fileCollectionQuery = queries.useGetFileCollectionWithContext(queryPath);
    var _k = destructureOptionalObject((_b = fileCollectionQuery === null || fileCollectionQuery === void 0 ? void 0 : fileCollectionQuery.data) === null || _b === void 0 ? void 0 : _b.result), projectRelativeFilePath = _k.projectRelativeFilePath, projectRelativeFolderPath = _k.projectRelativeFolderPath, markdownIndex = _k.markdownIndex;
    var isPinned = openFiles === null || openFiles === void 0 ? void 0 : openFiles.find(function (x) { return x.projectRelativePath === projectRelativeFilePath; });
    var authorizationQuery = queries.useGetFsAuthorizationWithContext(queryPath);
    var meQuery = queries.useGetMeWithContext();
    var isAdmin = !!((_g = (_f = (_e = (_d = (_c = meQuery.data) === null || _c === void 0 ? void 0 : _c.result) === null || _d === void 0 ? void 0 : _d.device) === null || _e === void 0 ? void 0 : _e.currentPersonCalculated) === null || _f === void 0 ? void 0 : _f.groupSlugs) === null || _g === void 0 ? void 0 : _g.includes("admin"));
    var _l = destructureOptionalObject((_h = authorizationQuery.data) === null || _h === void 0 ? void 0 : _h.result), canRead = _l.canRead, canWrite = _l.canWrite;
    var downloadAction = {
        id: "export",
        getTitle: function () { return "⬇️ Export"; },
        getIsEnabled: function () { return true; },
        onClick: function () {
            alert === null || alert === void 0 ? void 0 : alert("Export", "Download the file-collection or download the entire folder?", [
                {
                    text: "File collection",
                    onPress: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!projectRelativeFilePath)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, openDownload(projectRelativeFilePath)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); },
                    style: "default",
                },
                {
                    text: "Folder",
                    onPress: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!projectRelativeFolderPath)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, openDownload(projectRelativeFolderPath)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); },
                    style: "destructive",
                },
                { text: "Cancel", style: "cancel" },
            ]);
        },
    };
    var openAction = {
        id: "open",
        getTitle: function () { return "↩️ Open with"; },
        getIsEnabled: function () { return isAdmin; },
        onClick: function () {
            alert === null || alert === void 0 ? void 0 : alert("Open with", "Which application do you want to open?", [
                {
                    text: "File Explorer",
                    onPress: function () {
                        var projectRelativePath = projectRelativeFilePath || projectRelativeFolderPath;
                        if (!projectRelativePath) {
                            return;
                        }
                        api.openFinder(projectRelativePath);
                    },
                    style: "default",
                },
                {
                    text: "Terminal",
                    onPress: function () {
                        if (!projectRelativeFolderPath)
                            return;
                        alert === null || alert === void 0 ? void 0 : alert("Coming soon... should open a terminal in some folder. quite useful though bit hard to make cross platform.");
                    },
                    style: "default",
                },
                { text: "Cancel", style: "cancel" },
            ]);
        },
    };
    var pinAction = {
        id: "pin",
        getTitle: function () { return "📌 Pin"; },
        getIsEnabled: function () { return true; },
        onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
            var action, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        action = isPinned ? "unpin" : "pin";
                        return [4 /*yield*/, api.setOpenFileWithContext(queryPath, action)];
                    case 1:
                        result = _a.sent();
                        openFilesQuery.refetch();
                        alert === null || alert === void 0 ? void 0 : alert(isPinned ? "Removed pin" : "Pinned");
                        return [2 /*return*/];
                }
            });
        }); },
    };
    var authorizationAction = {
        id: "permission",
        getTitle: function () { return "🔐 Permissions"; },
        getIsEnabled: function () { return !!canWrite; },
        onClick: function () {
            alert === null || alert === void 0 ? void 0 : alert("Change Permissions", "Choose which permission you want to change", [
                {
                    onPress: function () {
                        updateFrontmatter(projectRelativeFilePath, {
                            isPrivate: (markdownIndex === null || markdownIndex === void 0 ? void 0 : markdownIndex.isPrivate) ? "false" : "true",
                        }, fileCollectionQuery.refetch);
                    },
                    text: (markdownIndex === null || markdownIndex === void 0 ? void 0 : markdownIndex.isPrivate)
                        ? "🔑 Unset private"
                        : "🔑 Set private",
                },
                {
                    onPress: function () {
                        updateFrontmatter(projectRelativeFilePath, {
                            isAnonymous: (markdownIndex === null || markdownIndex === void 0 ? void 0 : markdownIndex.isAnonymous) ? "false" : "true",
                        }, fileCollectionQuery.refetch);
                    },
                    text: (markdownIndex === null || markdownIndex === void 0 ? void 0 : markdownIndex.isAnonymous)
                        ? "🕵️‍♂️ Make nominous"
                        : "🕵️‍♂️ Make anonimous",
                },
                {
                    onPress: function () {
                        updateFrontmatter(projectRelativeFilePath, {
                            isDraft: (markdownIndex === null || markdownIndex === void 0 ? void 0 : markdownIndex.isDraft) ? "false" : "true",
                        }, fileCollectionQuery.refetch);
                    },
                    text: (markdownIndex === null || markdownIndex === void 0 ? void 0 : markdownIndex.isDraft) ? "🧪 Undraft" : "🧪 Draft",
                },
                {
                    onPress: function () {
                        updateFrontmatter(projectRelativeFilePath, {
                            isPublic: (markdownIndex === null || markdownIndex === void 0 ? void 0 : markdownIndex.isPublic) ? "false" : "true",
                        }, fileCollectionQuery.refetch);
                    },
                    text: (markdownIndex === null || markdownIndex === void 0 ? void 0 : markdownIndex.isPublic) ? "👀 Set unpublic" : "👀 Set public",
                },
                {
                    onPress: function () {
                        updateFrontmatter(projectRelativeFilePath, {
                            isSecret: (markdownIndex === null || markdownIndex === void 0 ? void 0 : markdownIndex.isSecret) ? "false" : "true",
                        }, fileCollectionQuery.refetch);
                    },
                    text: (markdownIndex === null || markdownIndex === void 0 ? void 0 : markdownIndex.isSecret) ? "👀 Set open" : "👀 Set secret",
                },
            ]);
            //  navigationQuery.refetch()
        },
    };
    var renameAction = {
        id: "rename",
        getTitle: function () { return "✏️ Rename"; },
        getIsEnabled: function () { return !!canWrite; },
        onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
            var newFilename, apiResult;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!projectRelativeFilePath)
                            return [2 /*return*/];
                        newFilename = prompt("What should the new name be?", getFileOrFolderName(projectRelativeFilePath));
                        if (!newFilename)
                            return [2 /*return*/];
                        return [4 /*yield*/, api.renameFileOrFolderWithContext(projectRelativeFilePath, newFilename)];
                    case 1:
                        apiResult = _b.sent();
                        showStandardResponse(apiResult);
                        if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                            // refetch nav, navigate to new name with router.push
                        }
                        return [2 /*return*/];
                }
            });
        }); },
    };
    var moveAction = {
        id: "move",
        getTitle: function () { return "⤵️ Move"; },
        getIsEnabled: function () { return true; },
        onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
            var newLocation, apiResult;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!projectRelativeFilePath)
                            return [2 /*return*/];
                        newLocation = prompt("Where should this file/folder be moved to?", projectRelativeFilePath);
                        if (!newLocation)
                            return [2 /*return*/];
                        return [4 /*yield*/, api.movePathWithContext(projectRelativeFilePath, newLocation)];
                    case 1:
                        apiResult = _b.sent();
                        showStandardResponse(apiResult);
                        if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                            //router push and reload nav
                        }
                        return [2 /*return*/];
                }
            });
        }); },
    };
    var copyAction = {
        getTitle: function () { return "👯 Copy"; },
        getIsEnabled: function () { return !!canWrite; },
        id: "copy",
        onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
            var apiResult;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!projectRelativeFilePath)
                            return [2 /*return*/];
                        return [4 /*yield*/, api.copyPathWithContext(projectRelativeFilePath)];
                    case 1:
                        apiResult = _b.sent();
                        showStandardResponse(apiResult);
                        if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                            navigationQuery.refetch();
                        }
                        return [2 /*return*/];
                }
            });
        }); },
    };
    var automationsAction = {
        id: "run",
        getTitle: function () { return "⚡️ Run"; },
        getIsEnabled: function () { return true; },
        onClick: function () {
            /**
            TODO:
            - make file-function `runAllWatchers` which searches all applicable watchers and runs them for a file, file collection, or folder (recursively)
            - make `runEvery(fn, path, "folder"|"collection"|"file")` which executes a file function for all files in a folder, file collection, or single file
            - make function `getFileFunctions(path)` which returns an array of functions available for this file or folder path
      
            FRONTEND
      
            1. query which functions are available for this file-collection/folder
            2. run the file function
            3. also make this available for a folder
            */
            alert === null || alert === void 0 ? void 0 : alert("select filefunction to run");
        },
    };
    var addFileAction = {
        id: "new",
        getTitle: function () { return "➕ New"; },
        getIsEnabled: function () { return !!canWrite; },
        onClick: function () {
            alert === null || alert === void 0 ? void 0 : alert("New", "What do you want to do?", [
                {
                    text: "New text",
                    onPress: function () {
                        alert === null || alert === void 0 ? void 0 : alert("new text in file-collection");
                    },
                },
                {
                    text: "New file",
                    onPress: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var filename, projectRelativePath, apiResult;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    filename = prompt("What should be the name (including extension)?", "untitled.md");
                                    if (!filename || filename === "")
                                        return [2 /*return*/];
                                    projectRelativePath = "".concat(projectRelativeFolderPath, "/").concat(filename);
                                    return [4 /*yield*/, api.newFileWithContext(projectRelativePath)];
                                case 1:
                                    apiResult = _b.sent();
                                    showStandardResponse(apiResult);
                                    if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                        navigationQuery.refetch();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); },
                },
                {
                    text: "New folder",
                    onPress: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var folderName, apiResult;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    folderName = prompt("What should be the name?", "");
                                    if (!folderName || folderName === "")
                                        return [2 /*return*/];
                                    if (!projectRelativeFolderPath)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, api.newFolderWithContext(projectRelativeFolderPath, folderName)];
                                case 1:
                                    apiResult = _b.sent();
                                    showStandardResponse(apiResult);
                                    if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                        navigationQuery.refetch();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); },
                },
                {
                    text: "Download from Youtube",
                    onPress: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var youtubeUrl, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!projectRelativeFolderPath)
                                        return [2 /*return*/];
                                    youtubeUrl = prompt("Please provide the youtube url", "");
                                    if (!youtubeUrl)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, api.youtubeToMp4WithContext(youtubeUrl, projectRelativeFolderPath)];
                                case 1:
                                    result = _a.sent();
                                    setTimeout(function () {
                                        navigationQuery.refetch();
                                    }, 100);
                                    showStandardResponse(result);
                                    return [2 /*return*/];
                            }
                        });
                    }); },
                },
                // {
                //   text: "Upload files",
                //   onPress: async () => {
                //     document.getElementById("fileupload")?.focus();
                //     document.getElementById("fileupload")?.click();
                //     // select files (directly opens upload-file modal, this should be a hook or mini component)
                //   },
                // },
                {
                    text: "Cancel",
                    style: "cancel",
                },
            ]);
        },
    };
    var deleteAction = {
        id: "delete",
        getTitle: function () { return "Delete"; },
        getIsEnabled: function () { return !!canWrite; },
        onClick: function () {
            alert === null || alert === void 0 ? void 0 : alert("Are you sure?", "Do you want to delete this file collection?", [
                { style: "cancel", text: "Cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var apiResult;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!projectRelativeFilePath)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, api.deleteFileOrFolderWithContext(projectRelativeFilePath)];
                                case 1:
                                    apiResult = _b.sent();
                                    showStandardResponse(apiResult);
                                    if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                        navigationQuery.refetch();
                                        fileCollectionQuery.refetch();
                                        // TODO: should navigate elsewhere, this doesn't exist anymore...
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); },
                },
            ]);
        },
    };
    var allActions = [
        downloadAction,
        openAction,
        authorizationAction,
        pinAction,
        renameAction,
        moveAction,
        automationsAction,
        addFileAction,
        copyAction,
        deleteAction,
    ];
    return (React.createElement(Div, null,
        React.createElement(Div, { className: "flex flex-row flex-wrap" }, allActions.map(function (action, index) { return (React.createElement(ContextMenuItemComponent, { key: "filecollectionaction".concat(action.id, "-").concat(index, "}"), action: action, projectRelativeFilePath: queryPath })); })),
        React.createElement(Div, { className: "mx-2" },
            React.createElement(AssetInput, { immediateUpload: true, defaultAssetName: "upload", onChangeLoading: function (isLoading) {
                    if (!isLoading)
                        return;
                    setIsUploading(true);
                }, onChange: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                    var apiResult;
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (!value || value.length === 0) {
                                    return [2 /*return*/];
                                }
                                setIsUploading(true);
                                return [4 /*yield*/, api.processAssetUploadWithContext(projectRelativeFolderPath, value)];
                            case 1:
                                apiResult = _c.sent();
                                if (!((_a = apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful)) {
                                    alert === null || alert === void 0 ? void 0 : alert("Error uploading", (_b = apiResult.result) === null || _b === void 0 ? void 0 : _b.message);
                                }
                                setIsUploading(false);
                                navigationQuery.refetch();
                                return [2 /*return*/];
                        }
                    });
                }); }, projectRelativeReferencingFilePath: projectRelativeFilePath || "", allowMultiple: true, inputTypes: ["files"] }),
            isUploading ? React.createElement(FancyLoader, null) : null)));
};
//# sourceMappingURL=FileCollectionActions.js.map