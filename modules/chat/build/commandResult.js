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
exports.commandResult = void 0;
var database_1 = require("database");
var persona_functions_node_1 = require("persona-functions-node");
var translate_1 = require("translate");
var commandResult = function (chatMessage, person, persona) { return __awaiter(void 0, void 0, void 0, function () {
    var t, words, command, isUseEnabled, commands, isCommand, thisCommand, chatResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                t = persona.assistantState.translations;
                words = chatMessage.message.split(" ");
                command = words.length <= 3 ? words[0].toLowerCase() : "__NO_COMMAND__";
                isUseEnabled = process.env.NODE_ENV === "production";
                commands = {
                    /**
                     * Command `donate [phonenumber] [number]` to send credit to someone else
                     */
                    donate: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var phoneNumber, creditString, creditAmount, found;
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    phoneNumber = (_a = words[1]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                                    creditString = (_b = words[2]) === null || _b === void 0 ? void 0 : _b.toLowerCase();
                                    creditAmount = creditString && !isNaN(Number(creditString))
                                        ? Number(creditString)
                                        : undefined;
                                    return [4 /*yield*/, database_1.db.get("Person")];
                                case 1:
                                    found = (_c.sent()).find(function (x) { return x.phoneNumber === phoneNumber; });
                                    if (!found) {
                                        return [2 /*return*/, (0, translate_1.translate)(t.phoneNumberNotFound, { phoneNumber: phoneNumber })];
                                    }
                                    if (!creditAmount) {
                                        return [2 /*return*/, (0, translate_1.translate)(t.invalidCreditAmount)];
                                    }
                                    if ((person.credit || 0) < creditAmount) {
                                        return [2 /*return*/, (0, translate_1.translate)(t.notEnoughCredit, {
                                                personCredit: String(person.credit || 0),
                                            })];
                                    }
                                    return [2 /*return*/, (0, translate_1.translate)(t.sendCreditComingSoon, {
                                            phoneNumber: phoneNumber,
                                            creditAmount: String(creditAmount),
                                        })];
                            }
                        });
                    }); },
                    "opt-out": function () { return __awaiter(void 0, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, database_1.db.update("Person", function (item) { return item.id === person.id; }, function (item) { return (__assign(__assign({}, item), { isEmailOptOut: true })); })];
                                case 1:
                                    result = _a.sent();
                                    return [2 /*return*/, (0, translate_1.translate)(t.optedOutMessage)];
                            }
                        });
                    }); },
                    help: function () {
                        return (0, translate_1.translate)(t.helpMessage, { name: persona.name });
                    },
                    profile: function () {
                        return (0, translate_1.translate)(t.profileInfo, {
                            name: person.name,
                            phoneNumber: person.phoneNumber || "-",
                            credit: String(person.credit || 0),
                        });
                    },
                    invite: function () {
                        return (0, translate_1.translate)(t.inviteMessage);
                    },
                    reset: function () {
                        return (0, translate_1.translate)(t.resetMessage);
                    },
                    delete: function () {
                        return (0, translate_1.translate)(t.deleteMessage);
                    },
                    use: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var slug, persona, botList, result;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (isUseEnabled) {
                                        // in prod, just continue...
                                        return [2 /*return*/, null];
                                    }
                                    slug = (_a = words[1]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                                    return [4 /*yield*/, (0, persona_functions_node_1.getPersona)(function (item) { return item.slug === slug; })];
                                case 1:
                                    persona = _b.sent();
                                    if (!!persona) return [3 /*break*/, 3];
                                    return [4 /*yield*/, database_1.db.get("Persona")];
                                case 2:
                                    botList = (_b.sent())
                                        .filter(function (x) { return x.spokenLanguages || x.assistantState; })
                                        .map(function (x) { return "- ".concat(x.slug); })
                                        .join("\n");
                                    return [2 /*return*/, (0, translate_1.translate)(t.botNotFound, { botList: botList })];
                                case 3: return [4 /*yield*/, database_1.db.update("Person", function (item) { return item.id === person.id; }, function (item) { return (__assign(__assign({}, item), { custom_personaSlug: slug })); })];
                                case 4:
                                    result = _b.sent();
                                    return [2 /*return*/, (0, translate_1.translate)(t.useBotSuccess, { slug: slug })];
                            }
                        });
                    }); },
                };
                isCommand = Object.keys(commands).includes(command);
                if (!isCommand) {
                    return [2 /*return*/];
                }
                thisCommand = commands[command];
                return [4 /*yield*/, thisCommand()];
            case 1:
                chatResponse = _a.sent();
                if (chatResponse === null) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, chatResponse];
        }
    });
}); };
exports.commandResult = commandResult;
//# sourceMappingURL=commandResult.js.map