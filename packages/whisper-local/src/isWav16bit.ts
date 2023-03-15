import ffmpeg from "fluent-ffmpeg";

export const isWav16bit = async (absolutePath: string): Promise<boolean> => {
  console.log("checking");
  const is16bit = await new Promise<boolean>((resolve) => {
    ffmpeg(absolutePath).ffprobe((err, data) => {
      console.log({ err, data });

      const bitRate = data?.format?.bit_rate;

      console.log({ bitRate });

      if (bitRate === 16) {
        return true;
      }
      return false;
    });
  });

  return is16bit;
};
