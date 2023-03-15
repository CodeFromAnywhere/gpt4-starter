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
exports.getFsAuthorization = void 0;
var fs_util_1 = require("fs-util");
var fs_util_js_1 = require("fs-util-js");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var getFsAuthorizationSingleFile_1 = require("./getFsAuthorizationSingleFile");
/**
General purpose function to see what the rights are for any user for any folder in the file system (project relative only)

How it works:going from top of the fs (base folder path), to deepest folder, to file, checking authorization for every folder up until the file.


*/
var getFsAuthorization = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var groupSlugs, projectRelativeBaseFolderPath, projectRelativePath, baseAuthorization, projectRoot, absolutePath, exists, isFolder, projectRelativeFolderPath, basePathRelativeFolderPath, projectRelativeFolderPaths, projectRelativeReadmePaths, allProjectRelativeFilePaths, allFolderAuthorizations, authorization;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                groupSlugs = config.groupSlugs, projectRelativeBaseFolderPath = config.projectRelativeBaseFolderPath, projectRelativePath = config.projectRelativePath, baseAuthorization = config.baseAuthorization;
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                absolutePath = fs_util_1.path.join(projectRoot, projectRelativePath);
                exists = fs_util_1.fs.existsSync(absolutePath);
                if (!exists) {
                    console.log("".concat(absolutePath, " doesnt exist"));
                    return [2 /*return*/];
                }
                return [4 /*yield*/, fs_util_1.fs.stat(absolutePath)];
            case 1:
                isFolder = (_a.sent()).isDirectory();
                projectRelativeFolderPath = isFolder
                    ? projectRelativePath
                    : (0, fs_util_js_1.makeRelative)(fs_util_1.path.parse(absolutePath).dir, projectRoot);
                basePathRelativeFolderPath = (0, fs_util_js_1.makeRelative)(projectRelativeFolderPath, projectRelativeBaseFolderPath);
                projectRelativeFolderPaths = (0, fs_util_1.getAllFoldersUntilFolder)(basePathRelativeFolderPath).map(function (p) { return fs_util_1.path.join(projectRelativeBaseFolderPath, p); });
                return [4 /*yield*/, Promise.all(projectRelativeFolderPaths.map(function (p) {
                        return (0, fs_util_1.returnReadmePathFromFolder)(fs_util_1.path.join(projectRoot, p));
                    }))];
            case 2:
                projectRelativeReadmePaths = (_a.sent())
                    .filter(js_util_1.notEmpty)
                    .map(function (p) { return (0, fs_util_js_1.makeRelative)(p, projectRoot); });
                allProjectRelativeFilePaths = isFolder
                    ? projectRelativeReadmePaths
                    : projectRelativeReadmePaths
                        .concat(projectRelativePath)
                        .filter((0, js_util_1.onlyUnique2)());
                console.log({ allProjectRelativeFilePaths: allProjectRelativeFilePaths });
                return [4 /*yield*/, Promise.all(allProjectRelativeFilePaths.map(function (projectRelativeFilePath) { return __awaiter(void 0, void 0, void 0, function () {
                        var authorization;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, getFsAuthorizationSingleFile_1.getFsAuthorizationSingleFile)({
                                        projectRelativeFilePath: projectRelativeFilePath,
                                        groupSlugs: groupSlugs,
                                    })];
                                case 1:
                                    authorization = _a.sent();
                                    return [2 /*return*/, { projectRelativeFilePath: projectRelativeFilePath, authorization: authorization }];
                            }
                        });
                    }); }))];
            case 3:
                allFolderAuthorizations = _a.sent();
                console.dir({ baseAuthorization: baseAuthorization, allFolderAuthorizations: allFolderAuthorizations }, { depth: 999 });
                authorization = allFolderAuthorizations.reduce(function (previousAuthorization, currentAuthorization) {
                    // if we found an authorization for this file, return it. Otherwise return the previous one
                    return currentAuthorization.authorization || previousAuthorization;
                }, baseAuthorization);
                return [2 /*return*/, authorization];
        }
    });
}); };
exports.getFsAuthorization = getFsAuthorization;
//# sourceMappingURL=getFsAuthorization.js.map