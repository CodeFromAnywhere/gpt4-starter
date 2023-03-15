import { db } from "database";
import { fs, path, writeJsonToFile } from "fs-util";
import { AuthenticationMethod, AuthenticationMethodMethod } from "peer-types";
import { getRootPath } from "get-path";
/** adds an `authenticatedMethod` to `Device` after the OTP is correct
 *
 * For now, only handles methods `phoneNumber` and `email`
 *
 * TODO: extrahere the core into `addAuthenticationMethodConfirm` and use it in this one and make also `addPersonAuthenticationMethodConfirm`
 */
export const addDeviceAuthenticationMethodConfirm = async (
  /** device id */
  deviceId: string,
  method: AuthenticationMethodMethod,
  /** one time password */
  otp: number
) => {
  /////

  const device = (await db.get("Device")).find((x) => x.id === deviceId);

  if (!device) {
    return { isSuccessful: false, message: "Couldn't find device" };
  }

  const authenticatedMethod = device.authenticationMethods.find(
    (m) => m.method === method
  );

  if (authenticatedMethod?.isAuthenticated) {
    return {
      isSuccessful: false,
      message:
        "You already authenticated with this method, please delete it first before you add another one.",
    };
  }

  if (!authenticatedMethod) {
    return { isSuccessful: false, message: "Can't find method" };
  }

  if (["email", "phoneNumber"].includes(method)) {
    const isSuccessful = otp === authenticatedMethod.otp;

    if (isSuccessful) {
      // add isAuthenticated to device's authenticationMethods

      const newAuthenticatedMethod: AuthenticationMethod = {
        ...authenticatedMethod,
        otp: undefined,
        isAuthenticated: true,
      };

      const newauthenticationMethods = device.authenticationMethods.map((x) =>
        x.method === method && x.otp === otp ? newAuthenticatedMethod : x
      );

      const dbPath = getRootPath("db")!;
      const devicePath = path.join(dbPath, "devices", `${deviceId}.json`);

      writeJsonToFile(devicePath, {
        ...device,
        authenticationMethods: newauthenticationMethods,
      });
    }
    return {
      isSuccessful,
      message: isSuccessful ? "Successful" : "Incorrect code",
    };
  }
};
