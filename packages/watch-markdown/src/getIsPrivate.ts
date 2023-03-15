import { textToText } from "ai-models";
import { fs, path } from "fs-util";
import { findJsonInMarkdown } from "marked-util";
export const getIsPrivate = async (contents: string) => {
  const isPrivateConventionPath = path.join(
    __dirname,
    "..",
    "src",
    "is-private-convention.md"
  );

  const conventionText = await fs.readFile(isPrivateConventionPath, "utf8");
  const tttResult = await textToText(`Consider the following text:
  
---
${contents}
---

Should we mark this file private? Please respond in JSON, in this format: \`{ isPrivate: boolean }\`.

${conventionText}`);

  if (!tttResult.isSuccessful) {
    return { isSuccessful: false, message: tttResult.message };
  }

  const json = findJsonInMarkdown<{ isPrivate: boolean }>(tttResult.result);
  const isPrivate = json?.isPrivate;

  return { isSuccessful: true, message: tttResult.message, isPrivate };
};
