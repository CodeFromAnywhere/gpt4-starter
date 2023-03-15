import { fs } from "fs-util";
import { getProjectRoot } from "get-path";
import { explore } from "k-explore";
import path from "path";
const test = async () => {
  const projectRoot = getProjectRoot();
  if (!projectRoot) return;
  const basePath = ["knowledge", "operations", "assets"].map((x) =>
    path.join(projectRoot, x)
  );
  const paths = (
    await explore({
      basePath,
      extension: ["txt", "vtt", "srt", "csv"],
      subExtension: ["mp3", "wav"],
    })
  ).map((x) => x.path);
  paths.map((p) => fs.rm(p));
  console.log({ paths });
};
test();
