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
exports.getPerson = exports.getPersonPath = exports.getPersonSlug = exports.setPerson = void 0;
var fs_orm_1 = require("fs-orm");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var read_json_file_1 = require("read-json-file");
/**
 */
var setPerson = function (person) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, fullItem, storingItem, isSuccessful;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    return [2 /*return*/, { isSuccessful: false }];
                }
                fullItem = (0, fs_orm_1.addDefaultValues)(person);
                storingItem = (0, fs_orm_1.makeStoringItem)(fullItem);
                return [4 /*yield*/, (0, fs_util_1.writeJsonToFile)((0, exports.getPersonPath)(projectRoot, person.slug), storingItem)];
            case 1:
                isSuccessful = _a.sent();
                return [2 /*return*/, { isSuccessful: isSuccessful }];
        }
    });
}); };
exports.setPerson = setPerson;
var getPersonSlug = function (projectRoot, key, value) { return __awaiter(void 0, void 0, void 0, function () {
    var kvObjectPath, kvObject;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (key === "slug") {
                    return [2 /*return*/, value];
                }
                kvObjectPath = fs_util_1.path.join(projectRoot, "db", "person-".concat(key, "-index.json"));
                return [4 /*yield*/, (0, read_json_file_1.readJsonFile)(kvObjectPath)];
            case 1:
                kvObject = _a.sent();
                if (!kvObject) {
                    return [2 /*return*/];
                }
                // 3) return value (slug)
                return [2 /*return*/, kvObject[value]];
        }
    });
}); };
exports.getPersonSlug = getPersonSlug;
var getPersonPath = function (projectRoot, slug) {
    return fs_util_1.path.join(projectRoot, "knowledge", "persons", slug, "person.json");
};
exports.getPersonPath = getPersonPath;
/**
More performant way to find a person

TODO: if we're going to use this, it's super important to ensure we can replace all current queries with this.

*/
var getPerson = function (key, value) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, slug, person;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    return [2 /*return*/, null];
                }
                return [4 /*yield*/, (0, exports.getPersonSlug)(projectRoot, key, value)];
            case 1:
                slug = _a.sent();
                if (!slug) {
                    return [2 /*return*/, null];
                }
                return [4 /*yield*/, (0, read_json_file_1.readJsonFile)((0, exports.getPersonPath)(projectRoot, slug))];
            case 2:
                person = _a.sent();
                return [2 /*return*/, person];
        }
    });
}); };
exports.getPerson = getPerson;
//# sourceMappingURL=insertPerson.js.map