import { fs, canReadSync } from "fs-util";
import { notEmpty } from "js-util";
import { TranscribedText } from "ai-types";

export const readTranscriptionCsv = async (csvPath: string) => {
  if (!fs.existsSync(csvPath)) return null;

  const readable = canReadSync(csvPath);
  if (!readable) return null;
  const fileString = fs.readFileSync(csvPath, "utf8");
  if (!fileString) return null;

  const lines = fileString.split("\n");

  const parsed = lines
    .map((line) => {
      if (line === "") {
        return;
      }
      const [startAt, endAt, ...rest] = line.split(",");

      const quoted = rest.join(",");

      const text = quoted.trim().slice(1, quoted.length - 2);

      return { startAt: Number(startAt), endAt: Number(endAt), text };
    })
    .filter(notEmpty);

  return parsed as TranscribedText[];
};
