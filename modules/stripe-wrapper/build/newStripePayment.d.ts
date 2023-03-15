import { PaymentMetadata } from "./types";
import { Person, Persona } from "peer-types";
/**
 * One-time payment, generated for a person, if they want to make a payment or if they are out of credit.
 *
 * This function promises a URL, if it all worked.
 */
export declare const createNewStripePayment: (config: {
    defaultQuantity?: number | undefined;
    person: Person;
    persona: Persona;
    customSuccessMessage?: PaymentMetadata["customSuccessMessage"];
    paymentReason?: PaymentMetadata["paymentReason"];
    /**
     * defaults to 50 cent
     */
    priceCent?: number | undefined;
    isQuantityEditable?: boolean | undefined;
    productName?: string | undefined;
}) => Promise<string | undefined>;
//# sourceMappingURL=newStripePayment.d.ts.map