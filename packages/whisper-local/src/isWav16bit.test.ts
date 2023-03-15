import { isWav16bit } from "./isWav16bit";

const test = async () => {
  ///
  const jfk = await isWav16bit(
    "/Users/king/King/cloned/whisper.cpp/samples/jfk.wav"
  );
  const upload = await isWav16bit(
    "/Users/king/King/operations/tools/asset/todo/done/upload.wav"
  );

  console.log({ jfk, upload });
};
test();
