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
exports.getChatMessageAnalysis = void 0;
var jsonGpt_1 = require("./jsonGpt");
/**
 * TODO: try it out and build out these pipelines. it's just diehard js horsemode, nothing difficult! see what sticks 🍝
 */
var getChatMessageAnalysis = function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var analysis;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, jsonGpt_1.jsonGpt)(message, {
                    // if this happens, run prompt to generate Dall-E prompt and api call, call Dall-E and give image...
                    isResponseVisualRequested: {
                        type: "boolean",
                        description: "User requests an image",
                    },
                    // if false, makes the tokensize super small (super good for efficiency)
                    isMessageHistoryRequired: {
                        type: "boolean",
                        description: "indicates whether or not the message history is needed for answering to this message",
                    },
                    // if false, the language model normally hits a dead end. would be a great starting point for continuing with other things like automations...
                    isLanguageModelCapable: {
                        type: "boolean",
                        description: "Is a language model chatbot capable of fulfilling this request",
                    },
                    // if this happens, we can analyse further and maybe later propose products... eCommerceGPT
                    isUserInterestedInProduct: {
                        type: "boolean",
                        description: "indicates whether or not the user may be interested in buying something",
                    },
                    // if this happens, there will normally be a default ChatGPT message. Not sure how useful this is, but we can also start a different chain here because this would deepen the relation.
                    isAskingForBotInfo: {
                        type: "boolean",
                        description: "indicates whether or not the user needs info about the system",
                    },
                    // may be too vague! but if it doesnt have too many false positives, we can couple the user to tools they might find useful and better than the google ad results.
                    isToolRequired: {
                        type: "boolean",
                        description: "indicates whether or not the user is looking for some sort of tool",
                    },
                    // if this happens, we can provide all user state info and info on how to change things.
                    isStatusRequested: {
                        type: "boolean",
                        description: "'true' if the user wants to know their credits, messages left, or other account details, configuration, or changes",
                    },
                    // if this happens, we can activate a different GPT purely for translation.
                    isTranslationRequested: { type: "boolean" },
                    // not sure if worth the tokens. Can be part of `isStatusRequested`
                    // isResetRequested: {
                    //   type: "boolean",
                    //   description: "does the user request for a reset or account deletion",
                    // },
                    // isConfigRequested: {
                    //   type: "boolean",
                    //   description:
                    //     "does the user request for configuration or settings of the system",
                    // },
                    mood: { type: "string", description: "mood of the user" },
                    userInterests: {
                        type: "string[] | null",
                        description: "keywords of interests the user clearly states",
                    },
                    userTruths: {
                        type: "string[] | null",
                        description: "facts or opinions the user states about himself or the world around him",
                    },
                })];
            case 1:
                analysis = _a.sent();
                return [2 /*return*/, analysis];
        }
    });
}); };
exports.getChatMessageAnalysis = getChatMessageAnalysis;
//# sourceMappingURL=getChatMessageAnalysis.js.map