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
*/
import { RunEveryPeriodEnum } from "code-types";
import { DefaultModelType, Id, MarkdownModelType, Price, Slug, Credit } from "model-types";
/**
 * A credit transaction between person A and person B.
 */
export interface PaymentTransaction extends DefaultModelType {
    payer_personId: Id;
    receiver_personId: Id;
    price: Price;
}
/**
 * A request for a `PaymentTransaction` to be made to receiver from one or multiple payers
 */
export interface PaymentRequest extends DefaultModelType {
    receiver_personId: Id;
    /**
     * optional, you can also make it public
     */
    payer_personIds?: Id[];
    /**
     * required token in order to make the payment. Can be part of a link for example
     *
     * We don't want to use the ID because the payment request may become visible in a interface without being able to pay
     */
    token: string;
    /**
     * If true, anyone can pay this if they have the token
     */
    isPublic?: boolean;
}
/**
 * An actual stripe payment that is being initiated, processed or happened
 *
 * Can be a one-time payment or based on a `PaymentSubscription`
 */
export interface PaymentEvent extends DefaultModelType {
    personId?: Id;
    price: Price;
    stripePaymentStatus?: unknown;
    cryptoPaymentStatus?: unknown;
}
/**
 * A person can subscribe to a paymentplan to receive something. Must be a `PaymentPlan` with a `.intervalPrice`, this is for the recurring payment that should be initiated and done.
 */
export interface PaymentSubscription extends DefaultModelType {
    personId?: Id;
    paymentPlanSlug: Slug;
    paymentPlan?: PaymentPlan;
}
/**
 * Model for one-time coupons with invalidation
 *
 * Can be filled in for any `PaymentPlan` with initial cost.
 *
 * Will not pay for the subscription cost.
 *
 * Later, this can be extended
 */
export interface PaymentCoupon extends DefaultModelType {
    /**
     * Unique code that is sent to a `Person`
     */
    couponCode: string;
    /**
     * Maximum price for the credit
     *
     * If filled in at a paymentPlan with a higher price, this will be the maximum discount.
     *
     * If filled in at a paymentPlan with a lower price, the whole coupon will still be removed
     */
    maximumPrice: Price;
    /**
     * After this date the coupon will not be valid anymore and should be removed
     */
    validUntilAt: number;
}
/**
 * PaymentPlans are plans that provde certain features, perks, statuses, access, or roles on different platforms.
 */
export interface PaymentPlan extends MarkdownModelType {
    /**
     * If given, PaymentPlan will be active for these bundle(s)
     */
    bundleConfigSlugs?: Slug[];
    /**
     * If there's a one-time price, it should be filled in here.
     */
    oneTimePrice?: Price;
    intervalPrice?: Price;
    /**
     * When does the payment occur?
     *
     * Leave undefined for one-time payments
     */
    paymentInterval?: RunEveryPeriodEnum;
    /**
     * How many credit are received?
     */
    credit?: Credit;
    /**
     * Description of the plan
     */
    markdown: string;
}
/**
 * project-wide configuration for what is possible with payments
 */
export declare type PaymentConfig = {
    creditToEuroRatio: number;
    creditToEuroConversionCost: number;
    currencyConversionCost: number;
    creditToCreditTransactionCost: number;
    interestAmount: number;
    interestInterval: RunEveryPeriodEnum;
    canPersonBuyCredit: boolean;
    canPersonCashOutCredit: boolean;
    canPersonRequestCashOut: boolean;
};
export declare const projectPaymentConfig: PaymentConfig;
//# sourceMappingURL=Payment.d.ts.map