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
exports.chatCompletion = void 0;
var calculateOpenaiMessagesTokenCountSum_1 = require("./calculateOpenaiMessagesTokenCountSum");
var getOpenaiInstance_1 = require("./getOpenaiInstance");
var types_1 = require("./types");
/**
More direct way to interact with openai api chat completion

docs: https://platform.openai.com/docs/guides/chat/introduction
 */
var chatCompletion = function (messages, config) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, openai, isSuccessful, message, inputTokensCalculated, tokenLimitPerMinute, expectedRoundtripMs, factorOfMinuteTokens, msToWait_1, model, response, tokensUsed, chatResponse;
    var _b, _c, _d, _e, _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0: return [4 /*yield*/, (0, getOpenaiInstance_1.getOpenaiInstance)()];
            case 1:
                _a = _h.sent(), openai = _a.openai, isSuccessful = _a.isSuccessful, message = _a.message;
                if (!openai) {
                    return [2 /*return*/, { isSuccessful: isSuccessful, message: message }];
                }
                if (!!(config === null || config === void 0 ? void 0 : config.isInstant)) return [3 /*break*/, 3];
                inputTokensCalculated = (config === null || config === void 0 ? void 0 : config.inputTokensCalculated) ||
                    (0, calculateOpenaiMessagesTokenCountSum_1.calculateOpenaiMessagesTokenCountSum)(messages);
                tokenLimitPerMinute = 250000;
                expectedRoundtripMs = 500;
                factorOfMinuteTokens = inputTokensCalculated / tokenLimitPerMinute;
                msToWait_1 = Math.round(60000 * factorOfMinuteTokens) - expectedRoundtripMs;
                if (!(msToWait_1 > 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(); }, msToWait_1);
                    })];
            case 2:
                _h.sent();
                _h.label = 3;
            case 3:
                model = (config === null || config === void 0 ? void 0 : config.model) || types_1.openAiChatModels[0];
                return [4 /*yield*/, openai
                        .createChatCompletion(__assign({ model: model, messages: messages }, config === null || config === void 0 ? void 0 : config.openaiConfig))
                        .catch(function (e) {
                        var _a, _b, _c;
                        // TODO: APPLY EXPONENTIAL BACKOFF HERE
                        console.log({
                            status: (_a = e.response) === null || _a === void 0 ? void 0 : _a.status,
                            statusText: (_b = e.response) === null || _b === void 0 ? void 0 : _b.statusText,
                            data: (_c = e.response) === null || _c === void 0 ? void 0 : _c.data,
                        });
                    })];
            case 4:
                response = _h.sent();
                tokensUsed = (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.usage) === null || _c === void 0 ? void 0 : _c.total_tokens;
                chatResponse = (_g = (_f = (_e = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.choices) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.message) === null || _g === void 0 ? void 0 : _g.content;
                return [2 /*return*/, {
                        isSuccessful: true,
                        message: "Successful",
                        tokensUsed: tokensUsed,
                        chatResponse: chatResponse,
                    }];
        }
    });
}); };
exports.chatCompletion = chatCompletion;
//# sourceMappingURL=chatCompletion.js.map