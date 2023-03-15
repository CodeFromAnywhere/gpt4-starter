import { execSync } from "child-process-helper";
import { log } from "log";
import { startApp } from "pm2-util";
import { operations } from "sdk-operations";
import os from "os";
export const startSearchWebIfAvailable = async (
  isWatching?: boolean,
  isRestart?: boolean
) => {
  const hasSearchWeb = !!(operations as { [key: string]: string })["os-web"];
  if (!hasSearchWeb) {
    return;
  }

  if (os.platform() === "win32") {
    console.log("Not starting search-web on windows");
    return;
  }

  startApp("os-web", false).then((result) => {
    if (!result?.isSuccessful) {
      console.log({ result });
      log(`Something went wrong starting "os-web". Maybe you don't have it?`, {
        type: "error",
      });
      return;
    }

    if (!isRestart && isWatching) {
      // Open in browser
      setTimeout(() => {
        execSync(`open http://localhost:42001`);
        log(`Opened the homepage in your browser`, { type: "success" });
      }, 1000);
    }
  });
};
