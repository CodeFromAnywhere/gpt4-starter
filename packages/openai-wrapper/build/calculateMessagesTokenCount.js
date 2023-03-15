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
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMessagesTokenCount = void 0;
var tiktoken_1 = require("@dqbd/tiktoken");
/**
NB: in this case, we could theoretically still use this with davinci.
NB: we are making the encoding in this function isntead of using `calculateTokenCount` because it might be more efficient like this
 */
var calculateMessagesTokenCount = function (messages, isDavinci) {
    var encoding = (0, tiktoken_1.get_encoding)(isDavinci ? "p50k_base" : "cl100k_base");
    var extendedMessages = messages.map(function (item) { return (__assign(__assign({}, item), { tokenCount: encoding.encode("roleword ".concat(item.groupSlug || "", " ").concat(item.message)).length })); });
    return extendedMessages;
};
exports.calculateMessagesTokenCount = calculateMessagesTokenCount;
//# sourceMappingURL=calculateMessagesTokenCount.js.map