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
exports.bahasaTeacher = exports.englishTeacher = exports.languageTeacher = void 0;
var openai_wrapper_1 = require("openai-wrapper");
var detect_language_1 = require("detect-language");
/**
Any language teacher could use a dualprompt where one of the prompts has a chained additional prompt. Time to repsonse doubles, llm cost triples, but it will be far more useful:

- analyses your message, and gives tips on how to improve grammar, spelling, and vocabulary.
- responds to your message in whatever language you sent it in
    - after that: translates the response into your language if it was the target language, and vice versa.

After all results are in, they are combined into a response and sent back to whatsapp.

Additionally, a voice wrapper would be amazing for this! Whisper + Say would be enough. If we do this though, we need to ensure the server load stays low for scalability.
*/
var languageTeacher = function (context, config) { return __awaiter(void 0, void 0, void 0, function () {
    var chatMessage, truncatedMessageHistory, person, inputTokensCalculated, level, targetLanguage, allMessages, regularChatPromise, analysisChatPromise, _a, analysisChat, regularChat, language, otherLanguage, thisLanguage, translatedRegularChat, fullResponse, tokensUsed;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                chatMessage = context.chatMessage, truncatedMessageHistory = context.truncatedMessageHistory, person = context.person, inputTokensCalculated = context.inputTokensCalculated;
                level = config.level, targetLanguage = config.targetLanguage;
                allMessages = truncatedMessageHistory.concat(chatMessage);
                regularChatPromise = (0, openai_wrapper_1.chat)(person, allMessages, {
                    inputTokensCalculated: inputTokensCalculated,
                    isInstant: true,
                    systemMessage: "You are ChatGPT, reply as consise as possible.",
                    postSystemMessage: undefined,
                });
                analysisChatPromise = (0, openai_wrapper_1.chatCompletion)([
                    {
                        role: "system",
                        content: "You are a Language Teacher GPT. You are observing the user to find mistakes in his writing.",
                    },
                    { role: "user", content: chatMessage.message },
                    {
                        role: "user",
                        content: "Please give me grammar, spelling and vocabulary improvements about the above message (if any). Otherwise, reply with a compliment.",
                    },
                ], { isInstant: true, inputTokensCalculated: inputTokensCalculated });
                return [4 /*yield*/, Promise.all([
                        analysisChatPromise,
                        regularChatPromise,
                    ])];
            case 1:
                _a = _b.sent(), analysisChat = _a[0], regularChat = _a[1];
                if (!regularChat.chatResponse) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "No chatresponse",
                        }];
                }
                language = (0, detect_language_1.detectLanguage)(regularChat.chatResponse);
                otherLanguage = language === "english" ? targetLanguage : "english";
                thisLanguage = language === "english" ? "english" : targetLanguage;
                return [4 /*yield*/, (0, openai_wrapper_1.chatCompletion)([
                        {
                            role: "user",
                            content: "You are Translator GPT, consider this text:\n\n```\n".concat(regularChat.chatResponse, "\n```\n\nThe level of the student is ").concat(config.level, ". Rewrite the text, translate the ").concat(config.level, "-friendly words into ").concat(otherLanguage, " while keeping the rest in ").concat(thisLanguage, ". Use asterix around the translated words.\n\nFor example, for english-bahasa:\n- before: \"Hello, the house is nearby\"\n- after: \"*Halo*, the house is *dekat*"),
                        },
                    ], { isInstant: true, inputTokensCalculated: inputTokensCalculated })];
            case 2:
                translatedRegularChat = _b.sent();
                fullResponse = "\n ".concat(regularChat.chatResponse, "\n\n ----\n\n ").concat(translatedRegularChat.chatResponse, "\n\n ----\n \n ").concat(analysisChat.chatResponse);
                tokensUsed = (regularChat.tokensUsed || 0) +
                    (translatedRegularChat.tokensUsed || 0) +
                    (analysisChat.tokensUsed || 0);
                return [2 /*return*/, {
                        isSuccessful: true,
                        chatResponse: fullResponse,
                        isPaywallHit: false,
                        tokensUsed: tokensUsed,
                    }];
        }
    });
}); };
exports.languageTeacher = languageTeacher;
var englishTeacher = function (context) {
    return (0, exports.languageTeacher)(context, {
        targetLanguage: "english",
        level: "beginner",
    });
};
exports.englishTeacher = englishTeacher;
exports.englishTeacher;
var bahasaTeacher = function (context) {
    return (0, exports.languageTeacher)(context, {
        targetLanguage: "bahasa",
        level: "beginner",
    });
};
exports.bahasaTeacher = bahasaTeacher;
exports.bahasaTeacher;
//# sourceMappingURL=englishTeacher.js.map