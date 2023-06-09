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
exports.shouldSkip = void 0;
var database_1 = require("database");
var filename_conventions_1 = require("filename-conventions");
var folder_get_updated_at_1 = require("folder-get-updated-at");
var fs_util_1 = require("fs-util");
var isOperationBuildNeeded_1 = require("./isOperationBuildNeeded");
/**
if you don't force it, there's an operation index, there's an index folder, the src has not been touched since hte last indexation, and there's a buildfolder (if needed), then the rebuildOperation can be skipped

 **/
var shouldSkip = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var operationBasePath, debug, force, rebuildUpdatedAt, operationManualProjectRoot, operationName, operation, srcPath, srcUpdatedAt, hasIndexFolder, noBuildFolder, isBuildNeeded;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                operationBasePath = config.operationBasePath, debug = config.debug, force = config.force, rebuildUpdatedAt = config.rebuildUpdatedAt, operationManualProjectRoot = config.operationManualProjectRoot;
                operationName = (0, fs_util_1.getLastFolder)(operationBasePath);
                if (force) {
                    console.log("Not skipping (force)");
                    return [2 /*return*/, false];
                }
                return [4 /*yield*/, database_1.db.get("Operation", {
                        operationName: operationName,
                        manualProjectRoot: operationManualProjectRoot,
                    })];
            case 1:
                operation = (_d.sent())[0];
                if (!((_a = operation.operation) === null || _a === void 0 ? void 0 : _a.folderNameIndexed)) {
                    console.log("Not skipping because no folderNameIndexed (likely never indexed) ");
                    return [2 /*return*/, false];
                }
                if (rebuildUpdatedAt &&
                    (!((_b = operation.operation) === null || _b === void 0 ? void 0 : _b.lastRebuildAt) ||
                        operation.operation.lastRebuildAt <= rebuildUpdatedAt)) {
                    console.log("Not skipping because rebuild updated");
                    return [2 /*return*/, false];
                }
                srcPath = fs_util_1.path.join(operationBasePath, "src");
                return [4 /*yield*/, (0, folder_get_updated_at_1.folderGetUpdatedAt)({ folderPath: srcPath })];
            case 2:
                srcUpdatedAt = _d.sent();
                if (!((_c = operation.operation) === null || _c === void 0 ? void 0 : _c.lastRebuildAt) ||
                    operation.operation.lastRebuildAt <= srcUpdatedAt) {
                    console.log("Not skipping because src updated");
                    return [2 /*return*/, false];
                }
                hasIndexFolder = fs_util_1.fs.existsSync(fs_util_1.path.join(operationBasePath, filename_conventions_1.databaseFolderName));
                if (!hasIndexFolder) {
                    console.log("Not skipping because has no db folder ");
                    return [2 /*return*/, false];
                }
                noBuildFolder = !fs_util_1.fs.existsSync(fs_util_1.path.join(operationBasePath, filename_conventions_1.buildFolderName));
                isBuildNeeded = (0, isOperationBuildNeeded_1.isOperationBuildNeeded)(operationBasePath);
                if (noBuildFolder && isBuildNeeded) {
                    console.log("Not skipping because noBuildFolder");
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
        }
    });
}); };
exports.shouldSkip = shouldSkip;
//# sourceMappingURL=shouldSkip.js.map