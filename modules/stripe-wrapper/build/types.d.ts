export type PaymentMetadata = {
    personId: string;
    personaId?: string;
    /**
     * Replaces $credit and $messages with respective amounts.
     */
    customSuccessMessage?: string;
    /**
     * WhatsApp chatbot
     */
    paymentReason?: "whatsapp-new-user-limit" | "whatsapp-ask-for-credit" | "whatsapp-insufficient-credit" | "whatsapp-too-many-dau";
};
//# sourceMappingURL=types.d.ts.map