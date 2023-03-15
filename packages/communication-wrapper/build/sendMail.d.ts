import { MailDataRequired, ClientResponse } from "@sendgrid/mail";
/**
 * From is optional for sending an email because it will be filled in by the OsConfig default.
 */
export type MailDataFromOptional = Omit<MailDataRequired, "from"> & {
    /**
     * If you don't fill this in, the `OsConfig` default will be used.
     */
    from?: string;
};
/**
 * Sends email(s) using sendgrid
 *
 * Ensure your OS config is there
 *
 * required fields:
 * - to
 * - text or html
 * - subject
 *
 * Optional:
 * - from (uses primary persona)
 */
export declare const sendMail: (mailData: MailDataFromOptional | MailDataFromOptional[], isMultiple?: boolean) => Promise<ClientResponse | undefined>;
//# sourceMappingURL=sendMail.d.ts.map