"use strict";
/**
Run every 15m. Based on analysis, send out messages to people that are inactive (if possible). Otherwise, use other channels to do the same.

Find a more-than-human way to do outreach, bringing loads of value
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.proactiveOutreach = void 0;
var proactiveOutreach = function () {
    // 1) go over every ChatMessage channel, one by one
    // 2) for every channel, react if it's been a while, or if you havent had the chance to reply yet.
};
exports.proactiveOutreach = proactiveOutreach;
exports.proactiveOutreach.config = {
    runEveryPeriod: "quarter-hour",
};
//# sourceMappingURL=proactiveOutreach.js.map