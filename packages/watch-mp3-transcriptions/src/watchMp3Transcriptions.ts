import { ProjectWatcher, StandardFunctionConfig } from "function-types";
import { getProjectRoot } from "get-path";
import { path, fs, writeJsonToFile } from "fs-util";
import { textToText } from "ai-models";
import { oneByOne } from "one-by-one";
import { isLocked, lock, lockError, unlock } from "lock-util";
import { transcriptionToGptChunks } from "./transcriptionToGptChunks";
import { notEmpty } from "js-util";
import { CHUNK_TOKEN_SIZE, getRecordingType } from "./getRecordingType";
import { Transcription } from "ai-types";
import { readJsonFile } from "read-json-file";
import { getUpdatedTimeObject } from "model-types";

/**
Add an automation (watcher that queues or does) to act on any `.mp3.txt` (which indicates a whisper is done) that doesn't have a `.clean.md`

There are many other things we can do with the spoken text transcription of an audio file, but these will be applied on any md file (which is much more general purpose)

Promises the path of the resulting converted cleaned-up file
*/
export const watchMp3Transcriptions: ProjectWatcher = async (
  _,
  absolutePath
): Promise<string | undefined> => {
  if (!fs.existsSync(absolutePath)) {
    console.log(`${absolutePath} doesn't exist`);
    return;
  }

  const oldTranscription = await readJsonFile<Transcription>(absolutePath);
  if (!oldTranscription) {
    return;
  }
  if (isLocked(absolutePath)) {
    console.log(`${absolutePath} locked`);

    return;
  }
  const chunks = await transcriptionToGptChunks(absolutePath, CHUNK_TOKEN_SIZE);

  if (!chunks || chunks.length === 0) {
    console.log(`${absolutePath} no chunks`);
    return;
  }

  await lock(absolutePath, "busy", "watchMp3Transcriptions", [
    undefined,
    absolutePath,
  ]);
  // turn speech into clean text
  const finalCleanedupResultString = (
    await oneByOne(chunks, async (chunk, index) => {
      await lock(
        absolutePath,
        `chunk ${index + 1}/${chunks.length}`,
        "watchMp3Transcriptions",
        [undefined, absolutePath]
      );

      const result =
        await textToText(`Consider this transcription and please make it cleaner (remove speaking errors and transform it into alineas)

\`\`\`
${chunk}
\`\`\`
`);
      return result.result;
    })
  )
    .filter(notEmpty)
    .join("\n\n");

  const parsedPath = path.parse(absolutePath);
  const totalExtension = ".transcription.json";
  const baseName = parsedPath.base.slice(
    0,
    parsedPath.base.length - totalExtension.length
  );
  const cleanFilePath = path.join(parsedPath.dir, `${baseName}.md`);

  if (finalCleanedupResultString === "") {
    console.log("No result transcribing", finalCleanedupResultString);
    await lockError(
      absolutePath,
      "No result transcribing",
      undefined,
      "watchMp3Transcriptions",
      [undefined, absolutePath]
    );
    return;
  }

  const recordingType = await getRecordingType(absolutePath);

  const newTranscription: Transcription = {
    ...oldTranscription,
    ...getUpdatedTimeObject(),
    recordingType,
  };

  await writeJsonToFile(absolutePath, newTranscription);
  // TODO: just put this in .transcription.json file
  const fullMd = `---
isSource: false
source: ./${path.parse(absolutePath).base}
createdAt: ${Date.now()}
---

${finalCleanedupResultString}`;

  await fs.writeFile(cleanFilePath, fullMd, "utf8");

  await unlock(absolutePath);
  return cleanFilePath;
};

watchMp3Transcriptions.startupStrategy = "queue";
watchMp3Transcriptions.config = {
  isInternetRequired: true,
  isHeavy: false,
} satisfies StandardFunctionConfig;

/**
  filter to check if its an .transcription.json file, added into the project, without a .md tied to it

  NB: no /assets/ files for now
 */
watchMp3Transcriptions.filter = (eventName, absolutePath) => {
  if (eventName !== "add") {
    return false;
  }
  const projectRoot = getProjectRoot();
  if (!projectRoot) {
    return false;
  }
  if (!absolutePath.startsWith(projectRoot)) {
    return false;
  }

  const parsedPath = path.parse(absolutePath);
  const totalExtension = ".transcription.json";
  if (!parsedPath.base.endsWith(totalExtension)) {
    return false;
  }

  const baseName = parsedPath.name.slice(
    0,
    parsedPath.base.length - totalExtension.length
  );

  const potentialCleanFilePath = path.join(parsedPath.dir, `${baseName}.md`);

  if (absolutePath.includes("/assets/")) {
    // console.log("not doing assets for now");
    return false;
  }

  if (fs.existsSync(potentialCleanFilePath)) {
    // already converted into a .md
    return false;
  }

  if (isLocked(absolutePath)) {
    return false;
  }

  // its an .transcription.json file, added into the project, without a .md tied to it
  return true;
};
