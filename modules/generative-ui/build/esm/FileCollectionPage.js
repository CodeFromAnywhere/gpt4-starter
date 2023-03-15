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
import * as React from "react";
import { queries } from "api";
import { getAssetDirectlyApiUrl } from "asset-functions-js";
import { AssetView } from "asset-view";
import { useQueryPath } from "explorer-core-ui";
import { Div, P } from "react-with-native";
import { apiUrl } from "server-api-url";
import { ContextMenuItemComponent } from "./ContextMenuItemComponent";
import { Details } from "./Details";
import { FileCollectionActions } from "./FileCollectionActions";
import { TextFile } from "./TextFile";
import { TranscriptionPlayer } from "./TranscriptionPlayer";
import { openDownload } from "./openDownload";
import { NavButton } from "./NavButton";
/**
Whenever you come back to the browser, some weird shit happens
 */
export var FileCollectionPage = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var queryPath = useQueryPath();
    var fileCollectionQuery = queries.useGetFileCollectionWithContext(queryPath);
    var fileCollection = (_a = fileCollectionQuery.data) === null || _a === void 0 ? void 0 : _a.result;
    var statusQuery = queries.useGetFileCollectionStatusWithContext(queryPath);
    var status = (_b = statusQuery.data) === null || _b === void 0 ? void 0 : _b.result;
    var hasPlayableFile = !!((_c = fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.files) === null || _c === void 0 ? void 0 : _c.find(function (x) { return x.type && ["audio", "video"].includes(x.type); }));
    var binaryFiles = ((_d = fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.files) === null || _d === void 0 ? void 0 : _d.filter(function (x) { return x.type === "other"; })) || [];
    var textFiles = (_e = fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.files) === null || _e === void 0 ? void 0 : _e.filter(function (x) { return x.type === "text"; });
    var imageFiles = ((_f = fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.files) === null || _f === void 0 ? void 0 : _f.filter(function (x) { return x.type === "image"; })) || [];
    var basePathsQuery = queries.useGetExplorableBasePathsWithContext();
    var explorableBasePaths = (_g = basePathsQuery.data) === null || _g === void 0 ? void 0 : _g.result;
    var renderCollection = function () {
        var _a;
        return (React.createElement(Div, null,
            React.createElement(FileCollectionActions, null),
            React.createElement(P, null,
                "Status:",
                (status === null || status === void 0 ? void 0 : status.status) || "loading..."),
            ((_a = status === null || status === void 0 ? void 0 : status.actionStatus) === null || _a === void 0 ? void 0 : _a.message) ? (React.createElement(P, null, status.actionStatus.message)) : null,
            (status === null || status === void 0 ? void 0 : status.queue) ? React.createElement(P, null,
                status.queue.length,
                " in queue") : null,
            binaryFiles.map(function (binaryFile) {
                var onClick = function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        openDownload(binaryFile.projectRelativePath);
                        return [2 /*return*/];
                    });
                }); };
                return (React.createElement(ContextMenuItemComponent, { action: {
                        getTitle: function () { return "\uD83D\uDCBE Download ".concat(binaryFile.name); },
                        onClick: onClick,
                    }, projectRelativeFilePath: binaryFile.projectRelativePath }));
            }),
            hasPlayableFile ? (React.createElement(Details, { summary: "Player" },
                React.createElement(TranscriptionPlayer, null))) : null,
            imageFiles.length > 0
                ? imageFiles.map(function (imageFile) {
                    // Enable capability to render image
                    return (React.createElement(Details, { summary: imageFile.projectRelativePath },
                        React.createElement(AssetView, { projectRelativeReferencingFilePath: imageFile.projectRelativePath, asset: {
                                absoluteUrl: getAssetDirectlyApiUrl(apiUrl, imageFile.projectRelativePath),
                            } })));
                })
                : null, textFiles === null || textFiles === void 0 ? void 0 :
            textFiles.map(function (item, index) { return (React.createElement(TextFile, { item: item, index: index })); })));
    };
    return (React.createElement(Div, { className: "h-full" },
        React.createElement(Div, { className: "flex flex-1 flex-col mx-2" }, ((_h = fileCollectionQuery === null || fileCollectionQuery === void 0 ? void 0 : fileCollectionQuery.data) === null || _h === void 0 ? void 0 : _h.isSuccessful) === false ? (React.createElement(Div, null,
            React.createElement(P, null, (_j = fileCollectionQuery.data) === null || _j === void 0 ? void 0 : _j.message))) : (fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.isSuccessful) === false ? (React.createElement(Div, null,
            React.createElement(P, null, fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.message),
            React.createElement(P, null, "These are the paths you can access"), explorableBasePaths === null || explorableBasePaths === void 0 ? void 0 :
            explorableBasePaths.map(function (item) {
                return (React.createElement(P, null,
                    React.createElement(NavButton, { title: item.name, href: "/".concat(item.projectRelativePath) })));
            }))) : (renderCollection()))));
};
//# sourceMappingURL=FileCollectionPage.js.map