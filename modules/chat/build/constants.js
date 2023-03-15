"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMessagesAmountMore=exports.getMessagesAmountCheap=exports.getMinimumCredit=exports.getCostPerMessageCredit=exports.creditForExpensive=exports.creditForCheap=exports.getCredit=exports.systemMessageCost=exports.expensivePayment=exports.cheapPayment=exports.percentageTransactionCost=exports.fixedTransactionCost=exports.defaultCostPerMessageCredit=void 0,exports.defaultCostPerMessageCredit=.05,exports.fixedTransactionCost=.29,exports.percentageTransactionCost=.03,exports.cheapPayment=.5,exports.expensivePayment=5,
// we're sending a message for the payment links and a message for when the messages are received. This totals a cost of some credit, but are not subtracted.
exports.systemMessageCost=.01;var getCredit=function(e){return Math.round(100*(e-exports.fixedTransactionCost-exports.systemMessageCost-exports.percentageTransactionCost*e))/100};exports.getCredit=getCredit,exports.creditForCheap=(0,exports.getCredit)(exports.cheapPayment),exports.creditForExpensive=(0,exports.getCredit)(exports.expensivePayment);var getCostPerMessageCredit=function(e){var t;return(null===(t=e.assistantState)||void 0===t?void 0:t.costPerMessageCredit)||exports.defaultCostPerMessageCredit};exports.getCostPerMessageCredit=getCostPerMessageCredit;var getMinimumCredit=function(e,t){var s;return-1*((null===(s=e.assistantState)||void 0===s?void 0:s.costPerMessageCredit)||exports.defaultCostPerMessageCredit)*t};exports.getMinimumCredit=getMinimumCredit;var getMessagesAmountCheap=function(e){return Math.floor(exports.creditForCheap/(0,exports.getCostPerMessageCredit)(e))};exports.getMessagesAmountCheap=getMessagesAmountCheap;var getMessagesAmountMore=function(e){return Math.floor(exports.creditForExpensive/(0,exports.getCostPerMessageCredit)(e))};exports.getMessagesAmountMore=getMessagesAmountMore;
//# sourceMappingURL=constants.js.map