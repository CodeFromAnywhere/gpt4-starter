"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Menu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("api");
var context_menu_1 = require("context-menu");
var cool_toast_1 = require("cool-toast");
var fs_util_js_1 = require("fs-util-js");
var js_util_1 = require("js-util");
var react_with_native_1 = require("react-with-native");
var explorer_core_ui_1 = require("explorer-core-ui");
var NavButton_1 = require("./NavButton");
var FoldersPiece_1 = require("./FoldersPiece");
var store_1 = require("./store");
/**
TODO: Decouple fropm reader page! Contextual prompts etc isn't needed
 */
var Menu = function () {
    var _a, _b;
    var _c = (0, store_1.useStore)("menu.isMobileMenuEnabled"), isMobileMenuEnabled = _c[0], setIsMobileMenuEnabled = _c[1];
    var queryPath = (0, explorer_core_ui_1.useQueryPath)();
    var customProjectRelativeBaseFolderPath = (0, explorer_core_ui_1.useCustomProjectRelativeBaseFolderPath)().customProjectRelativeBaseFolderPath;
    var navigationQuery = api_1.queries.useGetNavigationWithContext({
        queryPath: queryPath,
        customProjectRelativeBaseFolderPath: customProjectRelativeBaseFolderPath,
    });
    var _d = (0, js_util_1.destructureOptionalObject)((_a = navigationQuery.data) === null || _a === void 0 ? void 0 : _a.result), actualProjectRelativeFilePath = _d.actualProjectRelativeFilePath, isFolder = _d.isFolder, navigation = _d.navigation, isSuccessful = _d.isSuccessful, message = _d.message;
    var filename = isFolder
        ? undefined
        : (0, fs_util_js_1.getFileOrFolderName)(actualProjectRelativeFilePath);
    var folderPath = isFolder ? queryPath : (0, fs_util_js_1.getFolderJs)(queryPath);
    var canEdit = true;
    var basePathsQuery = api_1.queries.useGetExplorableBasePathsWithContext();
    var explorableBasePaths = (_b = basePathsQuery.data) === null || _b === void 0 ? void 0 : _b.result;
    var contextMenuItems = (0, explorer_core_ui_1.useFileActions)(navigation);
    var _e = (0, context_menu_1.useContextMenu)({
        items: contextMenuItems,
    }), openContextMenuProps = _e.openContextMenuProps, renderContextMenu = _e.renderContextMenu;
    var refetch = function () {
        navigationQuery.refetch();
    };
    var explorableBasePathsActive = explorableBasePaths === null || explorableBasePaths === void 0 ? void 0 : explorableBasePaths.map(function (explorableBasePath) {
        var href = "/".concat(explorableBasePath.projectRelativePath);
        var isActive = queryPath.startsWith(explorableBasePath.projectRelativePath);
        return __assign(__assign({}, explorableBasePath), { href: href, isActive: isActive });
    });
    /**
     * On top, render the explorable base paths, with the one you're in as active
     */
    var renderExplorableBasePaths = explorableBasePathsActive === null || explorableBasePathsActive === void 0 ? void 0 : explorableBasePathsActive.map(function (explorableBasePath) {
        var href = explorableBasePath.href, isActive = explorableBasePath.isActive, name = explorableBasePath.name;
        return (0, jsx_runtime_1.jsx)(NavButton_1.NavButton, { href: href, title: name, isActive: isActive });
    });
    var canGoBack = isSuccessful
        ? queryPath.includes("/") || (isFolder && queryPath !== "")
        : false;
    var renderThisFolder = navigation === null || navigation === void 0 ? void 0 : navigation.map(function (navItem) {
        // if it's a file, we need to remove the name
        var hrefChunks = [
            folderPath,
            navItem.name,
            navItem.type === "folder" && navItem.firstFile
                ? navItem.firstFile
                : undefined,
        ].filter(js_util_1.notEmpty);
        var hrefUrl = "/" + fs_util_js_1.path.join.apply(fs_util_js_1.path, hrefChunks);
        var href = hrefUrl.startsWith("/") ? hrefUrl : "/".concat(hrefUrl);
        var extraIcons = [
            navItem.isDraft ? "🧪" : undefined,
            navItem.isPrivate ? "🔑" : undefined,
            navItem.isSecret ? "🔒" : undefined,
            // navItem.authorizedGroup === "premium"
            //   ? "🏛"
            //   : navItem.authorizedGroup === "enterprise"
            //   ? "🚀"
            //   : undefined,
        ]
            .filter(js_util_1.notEmpty)
            .join("");
        var extension = navItem.name.split(".").pop();
        var extensionIcons = {
            ts: "⌘",
            tsx: "⌘",
            json: "💿",
            md: "📄",
        };
        var icon = navItem.type === "collection"
            ? "🗞"
            : navItem.type === "file"
                ? Object.keys(extensionIcons).includes(extension)
                    ? extensionIcons[extension]
                    : "📄"
                : "📂";
        var name = navItem.type === "collection"
            ? (0, fs_util_js_1.withoutSubExtensions)(navItem.name)
            : navItem.name;
        return ((0, jsx_runtime_1.jsx)(NavButton_1.NavButton, { onClick: function () {
                if (navItem.type === "folder") {
                    return;
                }
                setIsMobileMenuEnabled(false);
            }, openContextMenuProps: openContextMenuProps, isActive: filename === navItem.name, href: href, id: href, title: "".concat(icon, " ").concat(name, " ").concat(extraIcons) }));
    });
    var projectRelativeCurrentFolderPath = (0, fs_util_js_1.getFolderJs)(queryPath);
    var renderFolderActions = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(NavButton_1.NavButton, { isDisabled: !canEdit, onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var filename, projectRelativePath, apiResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!canEdit) {
                                    (0, cool_toast_1.warningToast)("You can't do this yet! Please install the server first, and ensure you're connected with it.");
                                    return [2 /*return*/];
                                }
                                filename = prompt("What should be the name (including extension)?", "untitled.md");
                                if (!filename || filename === "")
                                    return [2 /*return*/];
                                projectRelativePath = "/".concat(projectRelativeCurrentFolderPath, "/").concat(filename);
                                return [4 /*yield*/, api_1.api.newFileWithContext(projectRelativePath)];
                            case 1:
                                apiResult = _b.sent();
                                (0, cool_toast_1.showStandardResponse)(apiResult);
                                if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                    refetch();
                                }
                                return [2 /*return*/];
                        }
                    });
                }); }, title: "+ New file" }), (0, jsx_runtime_1.jsx)(NavButton_1.NavButton, { isDisabled: !canEdit, onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var folderName, projectRelativeBasePath, apiResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!canEdit) {
                                    (0, cool_toast_1.warningToast)("You can't do this yet! Please install the server first, and ensure you're connected with it.");
                                    return [2 /*return*/];
                                }
                                folderName = prompt("What should be the name?", "");
                                if (!folderName || folderName === "")
                                    return [2 /*return*/];
                                projectRelativeBasePath = "/".concat(projectRelativeCurrentFolderPath);
                                return [4 /*yield*/, api_1.api.newFolderWithContext(projectRelativeBasePath, folderName)];
                            case 1:
                                apiResult = _b.sent();
                                (0, cool_toast_1.showStandardResponse)(apiResult);
                                if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                    refetch();
                                }
                                return [2 /*return*/];
                        }
                    });
                }); }, title: "+ New folder" })] }));
    /**
     * Render everything
     *
     */
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "lg:w-48 lg:h-full lg:overflow-y-scroll" }, { children: [renderContextMenu(), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-col" }, { children: [renderExplorableBasePaths, (0, jsx_runtime_1.jsx)(FoldersPiece_1.FoldersPiece, { queryPath: queryPath, explorableBasePathsActive: explorableBasePathsActive, filename: filename, isFolder: isFolder }), renderThisFolder, renderFolderActions] }))] })));
};
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map