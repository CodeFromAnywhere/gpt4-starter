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
exports.readJsonFileSync = exports.readJsonFile = void 0;
var fs_util_1 = require("fs-util");
var try_parse_json_1 = require("try-parse-json");
/**
 * Reads and parses JSON file
 *
 * make sure to specify what type the file contains as a generic!
 */
var readJsonFile = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var readable, fileString, parsed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!filePath)
                    return [2 /*return*/, null];
                // TODO: is this needed?
                if (!fs_util_1.fs.existsSync(filePath))
                    return [2 /*return*/, null];
                return [4 /*yield*/, (0, fs_util_1.canRead)(filePath)];
            case 1:
                readable = _a.sent();
                if (!readable)
                    return [2 /*return*/, null];
                return [4 /*yield*/, fs_util_1.fs.readFile(filePath, "utf8")];
            case 2:
                fileString = _a.sent();
                if (!fileString)
                    return [2 /*return*/, null];
                parsed = (0, try_parse_json_1.tryParseJson)(fileString);
                return [2 /*return*/, parsed];
        }
    });
}); };
exports.readJsonFile = readJsonFile;
/**
 * Reads and parses JSON file
 *
 * make sure to specify what type the file contains as a generic!
 */
var readJsonFileSync = function (filePath) {
    // TODO: is this needed?
    if (!fs_util_1.fs.existsSync(filePath))
        return null;
    var readable = (0, fs_util_1.canReadSync)(filePath);
    if (!readable)
        return null;
    var fileString = fs_util_1.fs.readFileSync(filePath, "utf8");
    if (!fileString)
        return null;
    var parsed = (0, try_parse_json_1.tryParseJson)(fileString);
    return parsed;
};
exports.readJsonFileSync = readJsonFileSync;
//# sourceMappingURL=readJsonFile.js.map