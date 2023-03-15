import { RunEveryPeriodEnum } from "function-types";
/**
 * project-wide configuration for what is possible with payments
 */
export type PaymentConfig = {
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
//# sourceMappingURL=PaymentConfig.d.ts.map