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
exports.weeklyMail = void 0;
var database_1 = require("database");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var markdown_parse_js_1 = require("markdown-parse-js");
var persona_functions_node_1 = require("persona-functions-node");
var read_markdown_file_1 = require("read-markdown-file");
var communication_wrapper_1 = require("communication-wrapper");
/**
There should be an initial amount of free credit and a weekly email to all users to give them some more free credit.

Weekly CRON to keep things going with the homeserver

It can email everyone that some credits were added to their account. Besides, there is probably always news and events.
 */
var weeklyMail = function (isDryrun) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, now, year, monthNumber, weekNumber, mailFilePath, mailMarkdownParse, persons, persona, mailContent, finalMarkdown;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                now = new Date(Date.now());
                year = now.getFullYear();
                monthNumber = now.getMonth() + 1;
                weekNumber = Math.ceil(now.getDate() / 7);
                mailFilePath = fs_util_1.path.join(projectRoot, "knowledge", "groups", "cfa", "mail", "".concat(year, "-").concat(monthNumber, "-w").concat(weekNumber, ".md"));
                if (!fs_util_1.fs.existsSync(mailFilePath)) {
                    console.log("".concat(mailFilePath, " doesn't exist"));
                    // maybe just send credits and email that?
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(mailFilePath)];
            case 1:
                mailMarkdownParse = _b.sent();
                // check if it was already sent. never send the same thing twice
                if (!mailMarkdownParse) {
                    console.log("".concat(mailFilePath, " not parsed"));
                    return [2 /*return*/];
                }
                if (((_a = mailMarkdownParse.parameters) === null || _a === void 0 ? void 0 : _a.sentMail) === "true") {
                    console.log("".concat(mailFilePath, " already sentmail"));
                    // already sent before, don't do it again.
                    return [2 /*return*/];
                }
                if (!!isDryrun) return [3 /*break*/, 3];
                // add 10 credits for everyone with an email
                return [4 /*yield*/, database_1.db.update("Person", function (item) { return !!item.email; }, function (item) { return (__assign(__assign({}, item), { credit: (item.credit || 0) + 10 })); })];
            case 2:
                // add 10 credits for everyone with an email
                _b.sent();
                _b.label = 3;
            case 3: return [4 /*yield*/, database_1.db.get("Person")];
            case 4:
                persons = (_b.sent()).filter(function (x) { return !!x.email; });
                return [4 /*yield*/, (0, persona_functions_node_1.getPersona)()];
            case 5:
                persona = _b.sent();
                if (!persona)
                    return [2 /*return*/];
                mailContent = {
                    to: persona.email,
                    bcc: persons.map(function (x) { return x.email; }).filter(js_util_1.notEmpty),
                    text: mailMarkdownParse.raw,
                };
                if (!isDryrun) return [3 /*break*/, 6];
                console.log({ mailContent: mailContent });
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, (0, communication_wrapper_1.sendMail)(mailContent)];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                // update frontmatter: sentMail: true
                mailMarkdownParse.parameters = __assign(__assign({}, mailMarkdownParse.parameters), { sentMail: "true" });
                finalMarkdown = (0, markdown_parse_js_1.markdownParseToMarkdownString)(mailMarkdownParse);
                // save md
                return [4 /*yield*/, (0, fs_util_1.writeStringToFile)(mailFilePath, finalMarkdown)];
            case 9:
                // save md
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.weeklyMail = weeklyMail;
exports.weeklyMail.config = {
// runEveryPeriod: "week",
};
//# sourceMappingURL=weeklyMail.js.map