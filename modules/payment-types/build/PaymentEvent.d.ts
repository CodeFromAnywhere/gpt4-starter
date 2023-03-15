import { DefaultModelType, Id, Price } from "model-types";
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
//# sourceMappingURL=PaymentEvent.d.ts.map