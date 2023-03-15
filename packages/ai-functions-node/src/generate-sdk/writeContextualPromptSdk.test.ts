import { path, writeStringToFile } from "fs-util";
import { writeToAssets } from "write-to-assets";
import { writeContextualPromptSdk } from "./writeContextualPromptSdk";

const test = async () => {
  const destinationPath = path.join(__dirname, "../..", "src", "prompts.ts");

  writeStringToFile(destinationPath, await writeContextualPromptSdk());
};

test();
