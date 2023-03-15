"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateMessages = void 0;
var js_util_1 = require("js-util");
var openai_wrapper_1 = require("openai-wrapper");
/**
 Simple algo to truncate chat messages.
 
 - omit everything from more than 24h ago except for the last 10 messages
 - also everything that makes our input larger than 3000 tokens.
 
 Can later be improved by analysing the messages, but this seems good enough for now to stay under the 3000 tokens...


 */
var truncateMessages = function (chatMessages) {
    var messagesWithTokenCount = (0, openai_wrapper_1.calculateMessagesTokenCount)(chatMessages);
    // newest first
    var reversed = messagesWithTokenCount.reverse();
    // remove old stuff
    var filteredOld = reversed.filter(function (item, index) {
        if (index <= 9) {
            // keep 10 newest always
            return true;
        }
        var isNew = Date.now() - item.createdAt < 86400000;
        if (isNew) {
            return true;
        }
        return false;
    });
    // remove everything before last 3000 tokens
    var index = filteredOld.findIndex(function (item, index, array) {
        var totalTokens = (0, js_util_1.sum)(array.slice(0, index).map(function (x) { return x.tokenCount; }));
        if (totalTokens > 3000)
            return true;
    });
    var sliced = index === -1 ? filteredOld : filteredOld.slice(0, index);
    var truncatedMessageHistory = sliced
        .reverse()
        .map(function (_a) {
        var tokenCount = _a.tokenCount, item = __rest(_a, ["tokenCount"]);
        return item;
    });
    var inputTokensCalculated = (0, js_util_1.sum)(sliced.map(function (x) { return x.tokenCount; }));
    return { truncatedMessageHistory: truncatedMessageHistory, inputTokensCalculated: inputTokensCalculated };
};
exports.truncateMessages = truncateMessages;
//# sourceMappingURL=truncateMessages.js.map