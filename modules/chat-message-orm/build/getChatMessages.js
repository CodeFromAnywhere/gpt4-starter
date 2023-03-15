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
exports.getChatMessages = void 0;
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var read_json_file_1 = require("read-json-file");
var getChatMessagesPath_1 = require("./getChatMessagesPath");
/**
Ensure the chat is stored per `Person.slug`, per `Persona.slug` and per date (`yyyy-mm-dd`). VERY IMPORTANT TO SCALE THIS.

Example location:

`os/knowledge/persons/[slug]/chat-messages/[persona-slug]/[yyyy-mm-dd].json`.

TODO: in case it's a message for a group:

`os/knowledge/groups/[slug]/chat-messages/[persona-slug]/[yyyy-mm-dd].json`.

*/
var getChatMessages = function (personSlug, personaSlug, 
/**
 * Uses the date from midnight, doesn't take into account the time.
 *
 * If not given, uses todays date.
 */
fromDate, 
/**
 * Uses the date from midnight, doesn't take into account the time
 *
 * If not given, uses todays date
 */
untilDate) {
    if (fromDate === void 0) { fromDate = Date.now(); }
    if (untilDate === void 0) { untilDate = Date.now(); }
    return __awaiter(void 0, void 0, void 0, function () {
        var projectRoot, datesArray, pathsArray, jsonsArray, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    projectRoot = (0, get_path_1.getProjectRoot)();
                    if (!projectRoot)
                        return [2 /*return*/, []];
                    datesArray = (0, js_util_1.getDatesArray)(fromDate, untilDate);
                    pathsArray = datesArray.map(function (dateString) {
                        return (0, getChatMessagesPath_1.getChatMessagesPath)(projectRoot, personSlug, personaSlug, dateString);
                    });
                    return [4 /*yield*/, Promise.all(pathsArray.map(function (absoluteJsonPath) {
                            return (0, read_json_file_1.readJsonFile)(absoluteJsonPath);
                        }))];
                case 1:
                    jsonsArray = _a.sent();
                    json = jsonsArray.filter(js_util_1.notEmpty).flat();
                    return [2 /*return*/, json];
            }
        });
    });
};
exports.getChatMessages = getChatMessages;
//# sourceMappingURL=getChatMessages.js.map