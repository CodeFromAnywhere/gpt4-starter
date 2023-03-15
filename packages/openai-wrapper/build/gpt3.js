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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gpt3 = exports.openAiTextCompletionModels = exports.openAiTextCompletionModelsReadonly = void 0;
var calculateTokenCount_1 = require("./calculateTokenCount");
var measure_performance_1 = require("measure-performance");
var getOpenaiInstance_1 = require("./getOpenaiInstance");
exports.openAiTextCompletionModelsReadonly = [
    "text-davinci-003",
    "text-curie-001",
    "text-babbage-001",
    "text-ada-001",
    "code-davinci-002",
    "code-cushman-001",
];
exports.openAiTextCompletionModels = __spreadArray([], exports.openAiTextCompletionModelsReadonly, true);
/**
 * Simplified api for gpt3 from open AI
 *
 * Rate limit reached for default-text-davinci-003 in organization org-Z2Wq1CTmyzHDI6SApqk5gBLs on tokens per min. Limit: 250000.000000 / min. Current: 275070.000000 / min. Contact support@openai.com if you continue to have issues.
 *
 * TODO: log all api calls
 */
var gpt3 = function (input, config) { return __awaiter(void 0, void 0, void 0, function () {
    var tokensAmount, modelMaxTokens, message_1, _a, openai, isSuccessful, message, maxTokens, expectedTokens, tokenLimitPerMinute, expectedRoundtripMs, factorOfMinuteTokens, msToWait_1, executionId, performance, response, result;
    var _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                tokensAmount = (0, calculateTokenCount_1.calculateTokenCount)(input);
                modelMaxTokens = 2048;
                if (tokensAmount > modelMaxTokens) {
                    message_1 = "GPT3: Too long: ".concat(tokensAmount, " tokens");
                    console.log(message_1);
                    return [2 /*return*/, { isSuccessful: false, message: message_1 }];
                }
                return [4 /*yield*/, (0, getOpenaiInstance_1.getOpenaiInstance)()];
            case 1:
                _a = _e.sent(), openai = _a.openai, isSuccessful = _a.isSuccessful, message = _a.message;
                if (!openai) {
                    return [2 /*return*/, { isSuccessful: isSuccessful, message: message }];
                }
                maxTokens = 4097 - tokensAmount;
                expectedTokens = Math.round(tokensAmount * 1.5);
                if (!!(config === null || config === void 0 ? void 0 : config.isInstant)) return [3 /*break*/, 3];
                tokenLimitPerMinute = 250000;
                expectedRoundtripMs = 500;
                factorOfMinuteTokens = expectedTokens / tokenLimitPerMinute;
                msToWait_1 = Math.round(60000 * factorOfMinuteTokens) - expectedRoundtripMs;
                if (!(msToWait_1 > 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(); }, msToWait_1);
                    })];
            case 2:
                _e.sent();
                _e.label = 3;
            case 3:
                executionId = (0, measure_performance_1.generateUniqueId)();
                performance = [];
                (0, measure_performance_1.getNewPerformance)("start", executionId, true);
                return [4 /*yield*/, openai
                        .createCompletion({
                        model: (config === null || config === void 0 ? void 0 : config.model) || exports.openAiTextCompletionModels[0],
                        prompt: input,
                        max_tokens: maxTokens,
                    })
                        .catch(function (e) {
                        // TODO: APPLY EXPONENTIAL BACKOFF HERE
                        var _a, _b, _c;
                        console.log({
                            status: (_a = e.response) === null || _a === void 0 ? void 0 : _a.status,
                            statusText: (_b = e.response) === null || _b === void 0 ? void 0 : _b.statusText,
                            data: (_c = e.response) === null || _c === void 0 ? void 0 : _c.data,
                        });
                    })];
            case 4:
                response = _e.sent();
                performance.push((0, measure_performance_1.getNewPerformance)("openai-api", executionId));
                (0, measure_performance_1.cleanupTimer)(executionId);
                console.log({ performance: performance });
                result = (_d = (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.choices) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.text;
                return [2 /*return*/, { result: result, isSuccessful: true }];
        }
    });
}); };
exports.gpt3 = gpt3;
//# sourceMappingURL=gpt3.js.map