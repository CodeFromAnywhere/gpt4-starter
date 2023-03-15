"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessagesAmountMore = exports.getMessagesAmountCheap = exports.getMinimumCredit = exports.getCostPerMessageCredit = exports.creditForExpensive = exports.creditForCheap = exports.getCredit = exports.systemMessageCost = exports.expensivePayment = exports.cheapPayment = exports.percentageTransactionCost = exports.fixedTransactionCost = exports.defaultCostPerMessageCredit = void 0;
exports.defaultCostPerMessageCredit = 0.05;
exports.fixedTransactionCost = 0.29;
exports.percentageTransactionCost = 0.03;
exports.cheapPayment = 0.5;
exports.expensivePayment = 5;
// we're sending a message for the payment links and a message for when the messages are received. This totals a cost of some credit, but are not subtracted.
exports.systemMessageCost = 0.01;
var getCredit = function (totalPaymentEuros) {
    return (Math.round((totalPaymentEuros -
        exports.fixedTransactionCost -
        exports.systemMessageCost -
        exports.percentageTransactionCost * totalPaymentEuros) *
        100) / 100);
};
exports.getCredit = getCredit;
exports.creditForCheap = (0, exports.getCredit)(exports.cheapPayment);
exports.creditForExpensive = (0, exports.getCredit)(exports.expensivePayment);
var getCostPerMessageCredit = function (persona) { var _a; return ((_a = persona.assistantState) === null || _a === void 0 ? void 0 : _a.costPerMessageCredit) || exports.defaultCostPerMessageCredit; };
exports.getCostPerMessageCredit = getCostPerMessageCredit;
var getMinimumCredit = function (persona, freeMessagesAmount) {
    var _a;
    return -1 *
        (((_a = persona.assistantState) === null || _a === void 0 ? void 0 : _a.costPerMessageCredit) ||
            exports.defaultCostPerMessageCredit) *
        freeMessagesAmount;
};
exports.getMinimumCredit = getMinimumCredit;
var getMessagesAmountCheap = function (persona) {
    return Math.floor(exports.creditForCheap / (0, exports.getCostPerMessageCredit)(persona));
};
exports.getMessagesAmountCheap = getMessagesAmountCheap;
var getMessagesAmountMore = function (persona) {
    return Math.floor(exports.creditForExpensive / (0, exports.getCostPerMessageCredit)(persona));
};
exports.getMessagesAmountMore = getMessagesAmountMore;
//# sourceMappingURL=constants.js.map