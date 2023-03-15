"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatesArray = void 0;
var getCurrentDate_1 = require("./getCurrentDate");
/**
 * Get dates array between two dates
 */
var getDatesArray = function (startDate, untilDate) {
    var datesArray = [];
    for (var dt = new Date(startDate); dt <= new Date(untilDate); dt.setDate(dt.getDate() + 1)) {
        datesArray.push((0, getCurrentDate_1.getCurrentDate)(dt));
    }
    return datesArray;
};
exports.getDatesArray = getDatesArray;
//# sourceMappingURL=getDatesArray.js.map