import { readTranscriptionCsv } from "./readTranscriptionCsv";

readTranscriptionCsv(
  "/Users/king/King/operations/tools/control-system/whisper-local/assets/jfk.wav.csv"
).then((result) => {
  console.log({ result });
});
