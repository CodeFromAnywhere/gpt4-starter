# Payment types

payment-types (`OperationClassification` cjs)



# Api reference

## 🔸 PaymentRequest

jsonMultiple model



A request for a `PaymentTransaction` to be made to receiver from one or multiple payers





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| receiver_personId  | string |  |
| payer_personIds (optional) | array |  |
| token  | string |  |
| isPublic (optional) | boolean |  |
| credit (optional) | number |  |



## 🔸 PaymentTransaction

jsonMultiple model



A credit transaction between person A and person B.





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| payer_personId  | string |  |
| receiver_personId  | string |  |
| credit  | number |  |


# Internal

<details><summary>Show internal (6)</summary>
    
  # 🔹 PaymentConfig

project-wide configuration for what is possible with payments





Properties: 

 | Name | Type | Description |
|---|---|---|
| creditToEuroRatio  | number |  |
| creditToEuroConversionCost  | number |  |
| currencyConversionCost  | number |  |
| creditToCreditTransactionCost  | number |  |
| interestAmount  | number |  |
| interestInterval  | string |  |
| canPersonBuyCredit  | boolean |  |
| canPersonCashOutCredit  | boolean |  |
| canPersonRequestCashOut  | boolean |  |



## 🔸 PaymentCoupon

jsonMultiple model



Model for one-time coupons with invalidation

Can be filled in for any `PaymentPlan` with initial cost.

Will not pay for the subscription cost.

Later, this can be extended





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| couponCode  | string |  |
| maximumPrice  | number |  |
| validUntilAt  | number |  |



## 🔸 PaymentEvent

jsonMultiple model



An actual stripe payment that is being initiated, processed or happened

Can be a one-time payment or based on a `PaymentSubscription`





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| personId (optional) | string |  |
| price  | number |  |
| stripePaymentStatus (optional) | object |  |
| cryptoPaymentStatus (optional) | object |  |



## 🔸 PaymentPlan

markdown model



PaymentPlans are plans that provide certain features, perks, statuses, access, or roles on different platforms.





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| markdown  | string |  |
| categoryStack  | array |  |
| bundleConfigSlugs (optional) | array |  |
| oneTimePrice (optional) | number |  |
| intervalPrice (optional) | number |  |
| paymentInterval (optional) | string |  |
| credit (optional) | number |  |



## 🔸 PaymentSubscription

jsonMultiple model



A person can subscribe to a paymentplan to receive something. Must be a `PaymentPlan` with a `.intervalPrice`, this is for the recurring payment that should be initiated and done.





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStack (optional) | array |  |
| personId (optional) | string |  |
| paymentPlanSlug  | string |  |



## 📄 projectPaymentConfig (exported const)

  </details>

