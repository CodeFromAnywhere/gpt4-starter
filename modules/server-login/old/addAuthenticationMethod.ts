import { db } from "database";
import { isEmail } from "model-types";
import {
  AuthenticationMethod,
  AuthenticationMethodMethod,
  Device,
} from "peer-types";
import { sendSms, sendMail } from "communication-wrapper";
import { encryptPassword } from "encrypt-password";
import { isPhoneNumber } from "../src/validation/isPhoneNumber";
import { isValidPassword } from "../src/validation/isValidPassword";
import { findAuthenticatedPersonWithHandle } from "./findAuthenticatedPersonWithHandle";

/**
 * sends an email or sms, or already confirms in case of emailPassword
 *
 * core function for `addPersonAuthenticationMethod` and `addDeviceAuthenticatedMethod`
 */
export const addAuthenticationMethod = async (
  method: AuthenticationMethodMethod,
  handle: string,
  /**
   * TODO: check if it's unique before sending an email.
   * This is needed in case you are a person trying to add a method, because then there might be another person with the same handle.
   */
  shouldBeUnique?: boolean,
  credential?: string
): Promise<{
  isSuccessful: boolean;
  message: string;
  authenticationMethod?: AuthenticationMethod;
}> => {
  if (method === "email") {
    // send email to `handle`

    if (!isEmail(handle)) {
      return {
        isSuccessful: false,
        message: "Please provide a correct email",
      };
    }

    if (shouldBeUnique) {
      const isAuthenticationMethodUnavaiable =
        await findAuthenticatedPersonWithHandle(method, handle);
      if (isAuthenticationMethodUnavaiable) {
        console.log({ isAuthenticationMethodUnavaiable });
        return {
          isSuccessful: false,
          message: "That email is already taken",
        };
      }
    }

    const otp = Math.round(100000 + Math.random() * 900000);

    const text = `Please verify your email with this code: ${otp}. You have 10 minutes.`;

    const authenticationMethod: AuthenticationMethod = {
      method: "email",
      handle,
      isAuthenticated: false,
      otp,
    };

    const mailResult = await sendMail({
      to: handle,
      subject: "Verify your email",
      text,
    });

    if (!mailResult) {
      return { isSuccessful: false, message: "Couldn't send email" };
    }

    return {
      isSuccessful: true,
      message: "Code sent, please verify.",
      authenticationMethod,
    };
  }

  if (method === "phoneNumber") {
    // send sms to `handle`

    if (!isPhoneNumber(handle)) {
      return {
        isSuccessful: false,
        message: "Please provide a correct phone number",
      };
    }

    if (shouldBeUnique) {
      const isAuthenticationMethodUnavaiablePerson =
        await findAuthenticatedPersonWithHandle(method, handle);
      if (isAuthenticationMethodUnavaiablePerson) {
        console.log({ isAuthenticationMethodUnavaiablePerson });
        return {
          isSuccessful: false,
          message: "That phone number is already taken",
        };
      }
    }

    const otp = Math.round(100000 + Math.random() * 900000);
    const body = `Please verify your phone number with this code: ${otp}. You have 10 minutes.`;

    const authenticationMethod: AuthenticationMethod = {
      method: "phoneNumber",
      handle,
      isAuthenticated: false,
      otp,
    };

    const smsResult = await sendSms({ to: handle, body });

    if (!smsResult) {
      return { isSuccessful: false, message: "Couldn't send sms" };
    }

    return {
      isSuccessful: true,
      message: "Code sent, please verify.",
      authenticationMethod,
    };
  }

  if (method === "usernamePassword") {
    // add username and password to the authenticated methods

    if (!credential || !isValidPassword(credential)) {
      return {
        isSuccessful: false,
        message: "Please provide a valid password",
      };
    }

    const encryptedCredential = encryptPassword(credential);

    const authenticationMethod: AuthenticationMethod = {
      method: "usernamePassword",
      handle,
      encryptedCredential,
      credential,
      isAuthenticated: true,
    };

    return {
      isSuccessful: true,
      message: "Username/password has been set.",
      authenticationMethod,
    };
  }

  return { isSuccessful: false, message: "method not implemented yet" };
};
