import { Language } from "model-types";
/**
 * Use this to ensure we have the right languages and currency everywhere
 */
export type AssistantLocalization = {
    /**
     * Can be a country code but also some added numbers to that. Should find the localization with the longest prefix to be most accurate.
     */
    phoneNumberPrefix: string;
    /**
     * Country or province
     */
    phoneNumberLocation: string;
    /**
     * May include local accent, can be any string.
     * If not given, will use translationLanguage as fallback.
     */
    llmLanguage?: string;
    /**
     * Langauge for translation of the system. NB: stripe does its own localisation based on system setting
     */
    translationLanguage: Language;
    /**
     * Use stripe format for currency
     *
     * Must be in this format: https://www.iso.org/iso-4217-currency-codes.html
     *
     * Github: https://github.com/datasets/currency-codes/blob/master/data/codes-all.csv
     *
     * LOWERCASE
     */
    preferredCurrency: string;
};
export declare const assistantLocalisations: AssistantLocalization[];
//# sourceMappingURL=AssistantLocalization.d.ts.map