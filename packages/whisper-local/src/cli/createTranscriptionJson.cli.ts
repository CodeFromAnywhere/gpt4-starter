import { fs, path } from "fs-util";
import { explore } from "k-explore";
import { createTranscriptionJson } from "../createTranscriptionJson";
import { oneByOne } from "one-by-one";

/**
 * Run this CLI with a path (or it will use `cwd`) to a file or folder to recursively transcribe all wav's there.
 */
const createTranscriptionJsonCli = async () => {
  const [customPath] = process.argv.slice(2);

  const absolutePath =
    !customPath || customPath === "."
      ? process.cwd()
      : customPath.startsWith(".")
      ? path.join(process.cwd(), customPath)
      : customPath;

  const isFile = fs.existsSync(absolutePath)
    ? (await fs.stat(absolutePath)).isFile()
    : null;

  if (isFile === null) {
    console.log(`${absolutePath} not found`);
    return;
  }
  let filePaths: string[] = [];

  if (isFile === true) {
    if (path.parse(absolutePath).ext === ".wav") {
      filePaths.push(absolutePath);
    }
  } else if (isFile === false) {
    filePaths = (
      await explore({ basePath: absolutePath, extension: "wav" })
    ).map((x) => x.path);
  }

  if (filePaths.length === 0) {
    console.log("No wav's found here");
    return;
  }

  const results = await oneByOne(filePaths, async (audioFilePath) => {
    const result = await createTranscriptionJson(audioFilePath);
    return result;
  });
  console.log({ results });
};

createTranscriptionJsonCli();
