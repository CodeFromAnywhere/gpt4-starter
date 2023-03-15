"use strict";
/**

Some functions that are required for a Payment UI

- create a new transaction request
- send money to someone
- see the requests made to/from you
- see the transactions from/to you
- add credit to your account using stripe/crypto
- make a subscription using stripe/crytpo
- choose a payment plan (maybe with coupon) and pay that

Admin:

- PaymentPlan CRUD
- Edit PaymentConfig
-
*/Object.defineProperty(exports,"__esModule",{value:!0}),exports.projectPaymentConfig=void 0,exports.projectPaymentConfig={creditToEuroRatio:1,creditToEuroConversionCost:.01,currencyConversionCost:.01,creditToCreditTransactionCost:.01,interestAmount:.005,interestInterval:"week",canPersonBuyCredit:!0,canPersonCashOutCredit:!1,canPersonRequestCashOut:!0};
//# sourceMappingURL=Payment.js.map