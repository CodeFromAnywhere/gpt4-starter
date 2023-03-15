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
exports.calculateOpenaiMessagesTokenCount = void 0;
var tiktoken_1 = require("@dqbd/tiktoken");
var calculateOpenaiMessagesTokenCount = function (messages) {
    var encoding = (0, tiktoken_1.get_encoding)("cl100k_base");
    var extendedMessages = messages.map(function (item) { return (__assign(__assign({}, item), { tokenCount: encoding.encode("roleword ".concat(item.name || "", " ").concat(item.content))
            .length })); });
    return extendedMessages;
};
exports.calculateOpenaiMessagesTokenCount = calculateOpenaiMessagesTokenCount;
//# sourceMappingURL=calculateOpenaiMessagesTokenCount.js.map