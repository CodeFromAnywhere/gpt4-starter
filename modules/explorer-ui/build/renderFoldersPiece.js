"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderFoldersPiece = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var fs_util_js_1 = require("fs-util-js");
var NavButton_1 = require("./NavButton");
var renderFoldersPiece = function (props) {
    var _a;
    var explorableBasePathsActive = props.explorableBasePathsActive, isFolder = props.isFolder, queryPath = props.queryPath, filename = props.filename;
    var firstActiveProjectRelativePath = (_a = explorableBasePathsActive === null || explorableBasePathsActive === void 0 ? void 0 : explorableBasePathsActive.find(function (x) { return x.isActive; })) === null || _a === void 0 ? void 0 : _a.projectRelativePath;
    var queryFolderPath = isFolder
        ? queryPath
        : (0, fs_util_js_1.getFolderJs)(queryPath);
    /**
     * relative path, down from the closest basepath
     */
    var closestBasePathFolderPath = queryFolderPath && firstActiveProjectRelativePath
        ? (0, fs_util_js_1.makeRelative)(queryFolderPath, firstActiveProjectRelativePath)
        : undefined;
    var folderChunks = closestBasePathFolderPath
        ? closestBasePathFolderPath.split("/")
        : [];
    /**
     * Renders the folders after the basePath we are in, up until the folder we are now
     */
    var foldersPiece = folderChunks === null || folderChunks === void 0 ? void 0 : folderChunks.map(function (folder, index, array) {
        var isActive = index === array.length - 1 &&
            (!filename || (filename === null || filename === void 0 ? void 0 : filename.toLowerCase()) === "readme.md");
        var pathUntilHere = array.slice(0, index + 1).join("/");
        return ((0, jsx_runtime_1.jsx)(NavButton_1.NavButton, { isActive: isActive, href: "/".concat(pathUntilHere), title: "".concat(index === array.length - 1 ? "‣" : "▾", " ").concat(folder) }));
    });
    return foldersPiece;
};
exports.renderFoldersPiece = renderFoldersPiece;
//# sourceMappingURL=renderFoldersPiece.js.map