import { Persona } from "peer-types";
export declare const defaultCostPerMessageCredit = 0.05;
export declare const fixedTransactionCost = 0.29;
export declare const percentageTransactionCost = 0.03;
export declare const cheapPayment = 0.5;
export declare const expensivePayment = 5;
export declare const systemMessageCost = 0.01;
export declare const getCredit: (totalPaymentEuros: number) => number;
export declare const creditForCheap: number;
export declare const creditForExpensive: number;
export declare const getCostPerMessageCredit: (persona: Persona) => number;
export declare const getMinimumCredit: (persona: Persona, freeMessagesAmount: number) => number;
export declare const getMessagesAmountCheap: (persona: Persona) => number;
export declare const getMessagesAmountMore: (persona: Persona) => number;
//# sourceMappingURL=constants.d.ts.map