"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.whisperLocalCpp = void 0;
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var ffmpeg_util_1 = require("ffmpeg-util");
var lock_util_1 = require("lock-util");
var child_process_1 = require("child_process");
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
var whisperLocalCpp = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var isDebug, language, translateToEnglish, model, audioFilePath, prompt, isRetry, isSrtOutputAdded, isVttOutputAdded, isWordSegments, clonedPath, whisperCppBaseFolderPath, modelFilenameObject, modelFilename, audioFilePaths, debugString, languageString, translateToEnglishString, modelString, inputFileString, promptString, defaultOptionsString, wordSegmentsString, srtString, vttString, flags, flagsString, command, result, result_1, paths;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                isDebug = config.isDebug, language = config.language, translateToEnglish = config.translateToEnglish, model = config.model, audioFilePath = config.audioFilePath, prompt = config.prompt, isRetry = config.isRetry, isSrtOutputAdded = config.isSrtOutputAdded, isVttOutputAdded = config.isVttOutputAdded, isWordSegments = config.isWordSegments;
                clonedPath = (0, get_path_1.getRootPath)("cloned");
                if (!clonedPath) {
                    return [2 /*return*/];
                }
                whisperCppBaseFolderPath = fs_util_1.path.join(clonedPath, "whisper.cpp");
                if (!fs_util_1.fs.existsSync(whisperCppBaseFolderPath)) {
                    return [2 /*return*/];
                }
                modelFilenameObject = {
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
                modelFilename = model ? modelFilenameObject[model] : undefined;
                if (Array.isArray(audioFilePath) && audioFilePath.length === 0) {
                    return [2 /*return*/];
                }
                audioFilePaths = (0, js_util_1.makeArray)(audioFilePath).filter(function (p) { return !(0, lock_util_1.isLocked)(p); });
                if (audioFilePaths.length === 0) {
                    console.log("all files locked");
                    return [2 /*return*/];
                }
                debugString = isDebug ? "--print-special --print-colors" : undefined;
                languageString = language ? "--language ".concat(language) : undefined;
                translateToEnglishString = translateToEnglish
                    ? "--translate"
                    : undefined;
                modelString = modelFilename ? "--model ".concat(modelFilename) : undefined;
                inputFileString = audioFilePaths.map(function (p) { return "\"".concat(p, "\""); }).join(" ");
                promptString = prompt ? "--prompt ".concat(prompt) : undefined;
                defaultOptionsString = "--output-txt --output-csv --print-progress";
                wordSegmentsString = isWordSegments ? "--max-len 1" : undefined;
                srtString = isSrtOutputAdded ? "--output-srt" : undefined;
                vttString = isVttOutputAdded ? "--output-vtt" : undefined;
                flags = [
                    debugString,
                    srtString,
                    vttString,
                    wordSegmentsString,
                    languageString,
                    promptString,
                    translateToEnglishString,
                    modelString,
                    defaultOptionsString,
                ].filter(js_util_1.notEmpty);
                flagsString = flags.length > 0 ? "".concat(flags.join(" ")) : "";
                command = "./main ".concat(flagsString, " ").concat(inputFileString);
                // console.log({ whisperCommand: command });
                // add a lock for during doing
                return [4 /*yield*/, Promise.all(audioFilePaths.map(function (p) {
                        return (0, lock_util_1.lock)(p, "Converting", "whisperLocalCpp", [config]);
                    }))];
            case 1:
                // console.log({ whisperCommand: command });
                // add a lock for during doing
                _a.sent();
                return [4 /*yield*/, new Promise(function (resolve) {
                        var _a, _b;
                        var execution = (0, child_process_1.spawn)(command, {
                            cwd: whisperCppBaseFolderPath,
                            shell: true,
                            // pipe means it goes to stdout.on("data")
                            stdio: "pipe",
                        })
                            .on("exit", function (code) {
                            resolve({ response: String(code), isSuccessful: false });
                        })
                            .on("message", function (message) {
                            console.log({ message: message });
                        })
                            .on("error", function (err) {
                            console.log({ err: err });
                            resolve({ response: String(err), isSuccessful: false });
                        });
                        // stderr is everything logging (including progress)
                        (_a = execution.stderr) === null || _a === void 0 ? void 0 : _a.on("data", function (test) {
                            // console.log("data...", );
                            // const regex = /whisper_full: progress = (\d+)%/g;
                            // const result = test.toString().match(regex);
                            // const lastResult = result?.pop();
                            // if (!lastResult) {
                            //   // not interesting
                            //   return;
                            // }
                            // lock the file with the last percentage
                            audioFilePaths.map(function (audioFilePath) {
                                (0, lock_util_1.lock)(audioFilePath, test.toString());
                            });
                            // console.log({ lastResult });
                        });
                        // stdout is everything related to the output(not interesting)
                        (_b = execution.stdout) === null || _b === void 0 ? void 0 : _b.on("data", function (data) {
                            if (isDebug) {
                                console.log({ whisper: data.toString() });
                            }
                        });
                    })];
            case 2:
                result = _a.sent();
                // remove lock again
                return [4 /*yield*/, Promise.all(audioFilePaths.map(function (p) { return (0, lock_util_1.unlock)(p); }))];
            case 3:
                // remove lock again
                _a.sent();
                if (result.response !== "0") {
                    console.log({ result: result });
                }
                if (!(["5", "8"].includes(result.response) && !isRetry)) return [3 /*break*/, 5];
                // step  1: COMPATABILITY
                // 5 or 8 means the wav isn't 16 bit
                // If the input file is an audio file that is not .wav, convert to wav first
                // Find all wav's everywhere that aren't 16 bit. Convert to 16 bit if this is the case
                console.log("whisper couldn't do it, retrying after conversion");
                return [4 /*yield*/, Promise.all(audioFilePaths.map(function (p) {
                        return (0, ffmpeg_util_1.compressConvert)(p, { is16bitWav: true, targetFormat: "wav" });
                    }))];
            case 4:
                result_1 = _a.sent();
                // console.log(result);
                (0, exports.whisperLocalCpp)(__assign(__assign({}, config), { isRetry: true }));
                _a.label = 5;
            case 5:
                paths = audioFilePaths.map(function (p) {
                    return {
                        txt: "".concat(p, ".txt"),
                        csv: "".concat(p, ".csv"),
                        srt: isSrtOutputAdded ? "".concat(p, ".srt") : undefined,
                        vtt: isVttOutputAdded ? "".concat(p, ".vtt") : undefined,
                    };
                });
                return [2 /*return*/, paths];
        }
    });
}); };
exports.whisperLocalCpp = whisperLocalCpp;
//# sourceMappingURL=whisperLocalCpp.js.map