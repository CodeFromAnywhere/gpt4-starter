import { makeArray, notEmpty } from "js-util";
import { isOnline } from "is-online";
import sgMail, {
  MailDataRequired,
  ResponseError,
  ClientResponse,
} from "@sendgrid/mail";
import { getPersona } from "persona-functions-node";
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
export const sendMail = async (
  mailData: MailDataFromOptional | MailDataFromOptional[],
  isMultiple?: boolean
): Promise<ClientResponse | undefined> => {
  const persona = await getPersona();
  if (!persona) {
    return;
  }
  const isOnlineNow = await isOnline();

  if (!isOnlineNow) {
    console.log(
      `Not online, email not sent. There are two possibilities. We should either add it to queue to send it once we are online, or we should just log the email because it may be done on an offline PC and this is a dev purpose email`,
      mailData
    );
    return;
  }
  const { sendgridApiKey, sendgridFromEmail } = persona;

  if (!sendgridApiKey) {
    console.log("Please setup your Sendgrid credentials first");
    return;
  }

  const realMailData: MailDataRequired[] = makeArray(mailData)
    .map((data) => {
      const { from: dataFrom, ...otherData } = data;

      const from = dataFrom || sendgridFromEmail;

      if (!from) {
        console.log(
          "From is missing in email and also not present in OsConfig. Please provide at least one of those. Not sending email!"
        );
        return;
      }

      // NB: it's a bit ugly, but doesn't work without typecast, and i'm pretty sure the type is correct...
      const mailData = { from, ...otherData } as MailDataRequired;

      return mailData;
    })
    .filter(notEmpty);

  sgMail.setApiKey(sendgridApiKey);

  const result = await sgMail
    .send(realMailData, isMultiple)
    .then(([result]) => {
      return result;
    })
    .catch((error: ResponseError) => {
      console.dir({ message: "Error sending email", error }, { depth: 999 });

      return undefined;
    });

  return result;
};
