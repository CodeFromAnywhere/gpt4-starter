"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDate = void 0;
/**
 * Gets date string in format yyyy-mm-dd
 * Provide a date object if you want another date than today
 */
var getCurrentDate = function (date) {
    if (date === void 0) { date = new Date(); }
    var currentDate = "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());
    return currentDate;
};
exports.getCurrentDate = getCurrentDate;
//# sourceMappingURL=getCurrentDate.js.map