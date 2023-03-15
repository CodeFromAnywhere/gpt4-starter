import { log } from "log";
import { sdk } from "sdk-api";
import { TsFunction } from "function-types";

/**
 * NB: cron functions cannot have parameters
 */
export const executeCronFunction = async (tsFunction: TsFunction) => {
  if (
    tsFunction.parameters &&
    tsFunction.parameters.length > 0 &&
    tsFunction.parameters.find((x) => x.required)
  ) {
    log("CRON Functions cannot have required parameters", { type: "error" });
    process.exit();
  }

  //@ts-ignore
  sdk[tsFunction.name]?.();
};
