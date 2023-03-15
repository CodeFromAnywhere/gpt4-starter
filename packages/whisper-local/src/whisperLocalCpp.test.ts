import { compressConvert } from "ffmpeg-util";
import { path } from "fs-util";
import { whisperLocalCpp } from "./whisperLocalCpp";

const test = async () => {
  const audioFilePath1 = path.join(__dirname, "..", "assets", "nick.m4a");
  const audioFilePath2 = path.join(
    __dirname,
    "..",
    "assets",
    "knowledge-base.m4a"
  );
  const result1 = await compressConvert(audioFilePath1, {
    is16bitWav: true,
    targetFormat: "wav",
  });
  const result2 = await compressConvert(audioFilePath2, {
    is16bitWav: true,
    targetFormat: "wav",
  });

  if (result1) {
    await whisperLocalCpp({ audioFilePath: result1 });
  }
  if (result2) {
    await whisperLocalCpp({ audioFilePath: result2 });
  }
};

test();
