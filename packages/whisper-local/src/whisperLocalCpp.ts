import { fs, path } from "fs-util";
import { execAsync } from "child-process-helper";
import { getRootPath } from "get-path";
import { makeArray, notEmpty } from "js-util";
import { compressConvert } from "ffmpeg-util";
import { isLocked, lock, unlock } from "lock-util";
import { WhisperConfig, WhisperModelName } from "ai-types";
import { exec, spawn } from "child_process";
/**

Uses https://github.com/ggerganov/whisper.cpp for a more performant implementation of whisper. Still doesn't use GPU, but the inference is much faster than with python on Macbooks.

NB: You need to install ffmpeg and the cpp program, see the github repo for instructions

Relevant cpp cli options:

  -tr,      --translate     [false  ] translate from source language to english
  -otxt,    --output-txt    [false  ] output result in a text file
  -ovtt,    --output-vtt    [false  ] output result in a vtt file
  -osrt,    --output-srt    [false  ] output result in a srt file
  -owts,    --output-words  [false  ] output script for generating karaoke video
  -ps,      --print-special [false  ] print special tokens
  -pc,      --print-colors  [false  ] print colors
  -nt,      --no-timestamps [true   ] do not print timestamps
  -l LANG,  --language LANG [en     ] spoken language
  -m FNAME, --model FNAME   [models/ggml-base.en.bin] model path
  -f FNAME, --file FNAME    [       ] input WAV file path
  --prompt PROMPT  [       ] initial prompt
*/
export const whisperLocalCpp = async (config: WhisperConfig) => {
  const {
    isDebug,
    language,
    translateToEnglish,
    model,
    audioFilePath,
    prompt,
    isRetry,
    isSrtOutputAdded,
    isVttOutputAdded,
    isWordSegments,
  } = config;

  const clonedPath = getRootPath("cloned");
  if (!clonedPath) {
    return;
  }
  const whisperCppBaseFolderPath = path.join(clonedPath, "whisper.cpp");
  if (!fs.existsSync(whisperCppBaseFolderPath)) {
    return;
  }

  const modelFilenameObject: { [modelName in WhisperModelName]: string } = {
    base: "models/ggml-base.bin",
    "base.en": "models/ggml-base.en.bin",
    large: "models/ggml-large.bin",
    "large-v1": "models/ggml-large-v1.bin",
    medium: "models/ggml-medium.bin",
    "medium.en": "models/ggml-medium.en.bin",
    small: "models/ggml-small.bin",
    "small.en": "models/ggml-small.en.bin",
    tiny: "models/ggml-tiny.bin",
    "tiny.en": "models/ggml-tiny.en.bin",
  };

  const modelFilename = model ? modelFilenameObject[model] : undefined;

  if (Array.isArray(audioFilePath) && audioFilePath.length === 0) {
    return;
  }

  // leave out the ones that are locked
  const audioFilePaths = makeArray(audioFilePath).filter((p) => !isLocked(p));
  if (audioFilePaths.length === 0) {
    console.log("all files locked");
    return;
  }
  const debugString = isDebug ? "--print-special --print-colors" : undefined;
  const languageString = language ? `--language ${language}` : undefined;
  const translateToEnglishString = translateToEnglish
    ? `--translate`
    : undefined;
  const modelString = modelFilename ? `--model ${modelFilename}` : undefined;
  const inputFileString = audioFilePaths.map((p) => `"${p}"`).join(" ");
  const promptString = prompt ? `--prompt ${prompt}` : undefined;
  const defaultOptionsString = "--output-txt --output-csv --print-progress";
  //--output-words <-- not used: karaoke thing for ffmpeg
  const wordSegmentsString = isWordSegments ? "--max-len 1" : undefined;
  const srtString = isSrtOutputAdded ? "--output-srt" : undefined;
  const vttString = isVttOutputAdded ? "--output-vtt" : undefined;

  const flags = [
    debugString,
    srtString,
    vttString,
    wordSegmentsString,
    languageString,
    promptString,
    translateToEnglishString,
    modelString,
    defaultOptionsString,
  ].filter(notEmpty);

  const flagsString = flags.length > 0 ? `${flags.join(" ")}` : "";

  const command = `./main ${flagsString} ${inputFileString}`;
  // console.log({ whisperCommand: command });

  // add a lock for during doing

  await Promise.all(
    audioFilePaths.map((p) =>
      lock(p, "Converting", "whisperLocalCpp", [config])
    )
  );

  /**
   * Doing a custom `exec` for whisper here, because we need fine-grained control on the output. Should run `lock(filePath, percentage)` at least once per minute
   */
  const result = await new Promise<{ isSuccessful: boolean; response: string }>(
    (resolve) => {
      const execution = spawn(command, {
        cwd: whisperCppBaseFolderPath,
        shell: true,
        // pipe means it goes to stdout.on("data")
        stdio: "pipe",
      })
        .on("exit", (code) => {
          resolve({ response: String(code), isSuccessful: false });
        })
        .on("message", (message) => {
          console.log({ message });
        })
        .on("error", (err) => {
          console.log({ err });
          resolve({ response: String(err), isSuccessful: false });
        });

      // stderr is everything logging (including progress)
      execution.stderr?.on("data", (test: Buffer) => {
        // console.log("data...", );
        // const regex = /whisper_full: progress = (\d+)%/g;
        // const result = test.toString().match(regex);
        // const lastResult = result?.pop();

        // if (!lastResult) {
        //   // not interesting
        //   return;
        // }

        // lock the file with the last percentage
        audioFilePaths.map((audioFilePath) => {
          lock(audioFilePath, test.toString());
        });

        // console.log({ lastResult });
      });
      // stdout is everything related to the output(not interesting)
      execution.stdout?.on("data", (data: Buffer) => {
        if (isDebug) {
          console.log({ whisper: data.toString() });
        }
      });
    }
  );

  // remove lock again
  await Promise.all(audioFilePaths.map((p) => unlock(p)));

  if (result.response !== "0") {
    console.log({ result });
  }
  if (["5", "8"].includes(result.response) && !isRetry) {
    // step  1: COMPATABILITY

    // 5 or 8 means the wav isn't 16 bit

    // If the input file is an audio file that is not .wav, convert to wav first
    // Find all wav's everywhere that aren't 16 bit. Convert to 16 bit if this is the case

    console.log("whisper couldn't do it, retrying after conversion");
    const result = await Promise.all(
      audioFilePaths.map((p) => {
        return compressConvert(p, { is16bitWav: true, targetFormat: "wav" });
      })
    );

    // console.log(result);

    whisperLocalCpp({ ...config, isRetry: true });
  }

  // console.log({ result });
  const paths = audioFilePaths.map((p) => {
    return {
      txt: `${p}.txt`,
      csv: `${p}.csv`,
      srt: isSrtOutputAdded ? `${p}.srt` : undefined,
      vtt: isVttOutputAdded ? `${p}.vtt` : undefined,
    };
  });

  return paths;
};
