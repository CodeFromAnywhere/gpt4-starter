"use strict";
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
        while (_) try {
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
exports.processVideo = void 0;
var ffmpeg_util_1 = require("ffmpeg-util");
var fs_util_1 = require("fs-util");
var whisper_local_1 = require("whisper-local");
var convert_case_1 = require("convert-case");
/**
 * Converts any video file to a super small mp4, mp3, txt, srt, vtt
 *
 * Deletes original
 */
var processVideo = function (absolutePath) { return __awaiter(void 0, void 0, void 0, function () {
    var name, resultingMp4Path, resultingMp3Path;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = (0, convert_case_1.slugify)((0, convert_case_1.kebabCase)(fs_util_1.path.parse(absolutePath).name));
                return [4 /*yield*/, (0, ffmpeg_util_1.compressConvert)(absolutePath, {
                        fps: 1,
                        sizeWidthPx: 1024,
                        targetFormat: "mp4",
                        name: name,
                    })];
            case 1:
                resultingMp4Path = _a.sent();
                if (!resultingMp4Path) {
                    console.log("Creating mp4 went wrong", { absolutePath: absolutePath, resultingMp4Path: resultingMp4Path });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, ffmpeg_util_1.compressConvert)(resultingMp4Path, {
                        targetFormat: "mp3",
                        keepOriginal: true,
                        name: "screen-recording-".concat(Date.now()),
                    })];
            case 2:
                resultingMp3Path = _a.sent();
                if (!resultingMp3Path) {
                    console.log("Creating mp3 went wrong", {
                        resultingMp3Path: resultingMp3Path,
                        resultingMp4Path: resultingMp4Path,
                    });
                    return [2 /*return*/];
                }
                // mp3 to whisper here, save result in same place as .md
                (0, whisper_local_1.whisperLocalCpp)({ audioFilePath: resultingMp3Path });
                console.log("end of function");
                return [2 /*return*/];
        }
    });
}); };
exports.processVideo = processVideo;
//# sourceMappingURL=processVideo.js.map