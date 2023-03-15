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
exports.generateInstantResponseMessage = void 0;
var chat_message_orm_1 = require("chat-message-orm");
var translate_1 = require("translate");
var commandResult_1 = require("./commandResult");
var constants_1 = require("./constants");
var getChatResult_1 = require("./getChatResult");
var getMessageLimitInfo_1 = require("./getMessageLimitInfo");
var getPaywallResult_1 = require("./getPaywallResult");
var truncateMessages_1 = require("./truncateMessages");
/**
 * Based on a new incoming message and the found model instances, an instant response can be sent back.
 *
 * If not, just return undefined.
 */
var generateInstantResponseMessage = function (chatMessage, person, persona, config) { return __awaiter(void 0, void 0, void 0, function () {
    var t, commandMessage, fullMessageHistory, paywallResult, _a, truncatedMessageHistory, inputTokensCalculated, chatResult, initialTermsMessage;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                t = persona.assistantState.translations;
                return [4 /*yield*/, (0, commandResult_1.commandResult)(chatMessage, person, persona)];
            case 1:
                commandMessage = _b.sent();
                if (commandMessage) {
                    return [2 /*return*/, {
                            isSuccessful: true,
                            chatResponse: commandMessage,
                            tokensUsed: 0,
                        }];
                }
                return [4 /*yield*/, (0, chat_message_orm_1.getChatMessages)(person.slug, persona.slug, Date.now() - 86400000)];
            case 2:
                fullMessageHistory = _b.sent();
                console.log("Historical messages found: ".concat(fullMessageHistory.length));
                return [4 /*yield*/, (0, getPaywallResult_1.getPaywallResult)(chatMessage, fullMessageHistory, person, persona, config)];
            case 3:
                paywallResult = _b.sent();
                if (paywallResult.isPaywallHit) {
                    return [2 /*return*/, paywallResult];
                }
                _a = (0, truncateMessages_1.truncateMessages)(fullMessageHistory), truncatedMessageHistory = _a.truncatedMessageHistory, inputTokensCalculated = _a.inputTokensCalculated;
                return [4 /*yield*/, (0, getChatResult_1.getChatResult)({
                        person: person,
                        persona: persona,
                        truncatedMessageHistory: truncatedMessageHistory,
                        fullMessageHistory: fullMessageHistory,
                        inputTokensCalculated: inputTokensCalculated,
                        chatMessage: chatMessage,
                    })];
            case 4:
                chatResult = _b.sent();
                // PART 5: message addition (assistant-agnostic)
                if (config.isFirstMessage) {
                    initialTermsMessage = (0, translate_1.translate)(t.firstMessage, {
                        personaName: persona.name,
                        freeMessagesAmount: String((0, getMessageLimitInfo_1.getMessageLimitInfo)(person, persona).freeMessagesAmount),
                        pricePerMessage: "".concat((0, constants_1.getCostPerMessageCredit)(persona) * 100, " cents"),
                    });
                    chatResult.chatResponse = chatResult.chatResponse
                        ? "\n".concat(initialTermsMessage, "\n---\n").concat((0, translate_1.translate)(t.firstMessagePrefix), "\n").concat(chatResult.chatResponse)
                        : initialTermsMessage;
                }
                if (!chatResult.isSuccessful) {
                    console.log({ chatResult: chatResult });
                }
                return [2 /*return*/, chatResult];
        }
    });
}); };
exports.generateInstantResponseMessage = generateInstantResponseMessage;
//# sourceMappingURL=generateInstantResponseMessage.js.map