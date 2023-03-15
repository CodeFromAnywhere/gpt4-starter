"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateOpenaiMessagesTokenCountSum = void 0;
var js_util_1 = require("js-util");
var calculateOpenaiMessagesTokenCount_1 = require("./calculateOpenaiMessagesTokenCount");
var calculateOpenaiMessagesTokenCountSum = function (messages, isDavinci) {
    var results = (0, calculateOpenaiMessagesTokenCount_1.calculateOpenaiMessagesTokenCount)(messages);
    var tokenCountSum = (0, js_util_1.sum)(results.map(function (x) { return x.tokenCount; }));
    return tokenCountSum;
};
exports.calculateOpenaiMessagesTokenCountSum = calculateOpenaiMessagesTokenCountSum;
//# sourceMappingURL=calculateOpenaiMessagesTokenCountSum.js.map