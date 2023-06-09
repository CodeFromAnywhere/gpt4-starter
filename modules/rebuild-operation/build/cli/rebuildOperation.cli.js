#!/usr/bin/env node
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
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var log_1 = require("log");
var one_by_one_1 = require("one-by-one");
var rebuildOperation_1 = require("../rebuildOperation");
/**
 * `rebuildOperation` CLI syntax:
 *
 * `rebuildOperation [...operations]`
 *
 * Operations can be a list of differnt operation names you want to rebuild. It's also possible to specify a relative path instead of an operation name.
 *
 * for example:
 *
 * `rebuildOperation ./packages/operation-x` would rebuild `operation-x` in your packages folder
 *
 * another handy one is `rebuildOperation .` because it will rebuild the operation in your current folder.
 */
var rebuildOperationCli = function () { return __awaiter(void 0, void 0, void 0, function () {
    var argumentsArray, currentProjectRoot;
    return __generator(this, function (_a) {
        argumentsArray = process.argv.slice(2);
        currentProjectRoot = (0, get_path_1.getProjectRoot)();
        if (argumentsArray.length > 0) {
            (0, one_by_one_1.oneByOne)(argumentsArray, function (operationNameOrRelativePath) { return __awaiter(void 0, void 0, void 0, function () {
                var operationBasePath, realProjectRoot, x;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!operationNameOrRelativePath.startsWith(".")) return [3 /*break*/, 1];
                            operationBasePath = fs_util_1.path.join(process.cwd(), operationNameOrRelativePath);
                            realProjectRoot = (0, get_path_1.getProjectRoot)(operationBasePath);
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, (0, get_path_1.getOperationPath)(operationNameOrRelativePath)];
                        case 2:
                            realProjectRoot = _a.sent();
                            _a.label = 3;
                        case 3:
                            if (!operationBasePath) {
                                (0, log_1.log)("couldn't find that operation");
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, (0, rebuildOperation_1.rebuildOperation)({
                                    operationBasePath: operationBasePath,
                                    operationManualProjectRoot: realProjectRoot !== currentProjectRoot ? realProjectRoot : undefined,
                                    force: true,
                                    debug: true,
                                    noExit: true,
                                })];
                        case 4:
                            x = _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        return [2 /*return*/];
    });
}); };
rebuildOperationCli();
//# sourceMappingURL=rebuildOperation.cli.js.map