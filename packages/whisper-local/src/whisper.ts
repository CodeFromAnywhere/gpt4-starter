import { execSync } from "child_process";
import { makeArray, notEmpty } from "js-util";
import { path } from "fs-util";
import { WhisperConfig, WhisperLanguage, WhisperModelName } from "ai-types";
import { execAsync } from "child-process-helper";

/**
Executes Whisper (https://github.com/openai/whisper) via the CLI

NB: You need to install ffmpeg and the cli, see the github repo for instructions

NB: this is a way slower implementation than `whisper.cpp`

TODO: Check https://github.com/openai/whisper/discussions/categories/show-and-tell for other things we can do with whisper
   
 */

export const whisper = async (config: WhisperConfig) => {
  const {
    isDebug,
    language,
    translateToEnglish,
    model,
    audioFilePath,
    outputFolderPath,
  } = config;
  if (Array.isArray(audioFilePath) && audioFilePath.length === 0) {
    return;
  }
  const audioFilePaths = makeArray(audioFilePath);

  const debugString = isDebug ? "--verbose" : undefined;
  const languageString = language ? `--language ${language}` : undefined;
  const translateToEnglishString = translateToEnglish
    ? `--task translate`
    : undefined;
  const modelString = model ? `--model ${model}` : undefined;
  const inputFileString = audioFilePaths.map((p) => `"${p}"`).join(" ");
  const outputFolderPathString = outputFolderPath
    ? `--output_dir ${outputFolderPath}`
    : `--output_dir ${path.parse(audioFilePaths[0]).dir}`;

  const flags = [
    debugString,
    languageString,
    translateToEnglishString,
    modelString,
    outputFolderPathString,
  ].filter(notEmpty);

  const flagsString = flags.length > 0 ? ` ${flags.join(" ")}` : "";

  const command = `whisper ${inputFileString}${flagsString}`;
  console.log({ whisperCommand: command });
  const result = await execAsync(command, {});
  console.log({ result });

  return audioFilePaths.map((p) => {
    return {
      txt: `${p}.txt`,
      srt: `${p}.txt`,
      vtt: `${p}.vtt`,
    };
  });
};
