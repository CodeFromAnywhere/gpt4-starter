"use strict";
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
exports.openAiChatModels = exports.openAiChatModelsReadonly = void 0;
exports.openAiChatModelsReadonly = [
    "gpt-3.5-turbo",
    // I think there's no difference. This is the march 1st release (2023)
    "gpt-3.5-turbo-0301",
];
exports.openAiChatModels = __spreadArray([], exports.openAiChatModelsReadonly, true);
//# sourceMappingURL=types.js.map