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
exports.summarizeMeetingWithContext = void 0;
var model_types_1 = require("model-types");
var communication_wrapper_1 = require("communication-wrapper");
var youtube_to_mp3_1 = require("youtube-to-mp3");
var server_login_1 = require("server-login");
var asset_functions_node_1 = require("asset-functions-node");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
/**
Endpoint that onboards users into Clarity AI
*/
var summarizeMeetingWithContext = function (functionContext, 
/**
 * TITLE: Email (required)
 */
email, 
/**
 * TITLE: Youtube URL of your meeting (optional)
 */
meetingYoutubeUrl, 
/**
 * TITLE: Audiofile of your meeting (optional)
 */
meetingAudio) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, hasMeetingYoutubeUrl, hasMeetingAudio, userBaseFolderPath, signupResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    return [2 /*return*/, { isSuccessful: false, message: "No projectroot" }];
                }
                hasMeetingYoutubeUrl = meetingYoutubeUrl !== "" && meetingYoutubeUrl;
                hasMeetingAudio = !!meetingAudio;
                if (hasMeetingAudio && hasMeetingYoutubeUrl) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Please provide either a yoube URL or some audio, not both",
                        }];
                }
                if (!email || !(0, model_types_1.isEmail)(email)) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Please fill in a valid email address",
                        }];
                }
                email = email.toLowerCase();
                userBaseFolderPath = fs_util_1.path.join(projectRoot, "knowledge", "persons", email);
                if (!!fs_util_1.fs.existsSync(userBaseFolderPath)) return [3 /*break*/, 2];
                return [4 /*yield*/, fs_util_1.fs.mkdir(userBaseFolderPath, { recursive: true })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                if (!meetingAudio) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, asset_functions_node_1.processAsset)(meetingAudio, {
                        customAbsoluteFolderPath: userBaseFolderPath,
                    })];
            case 3:
                // process the asset if it's there
                meetingAudio = _a.sent();
                _a.label = 4;
            case 4: return [4 /*yield*/, (0, server_login_1.signupBare)({
                    emailOrPhone: email,
                    customEmail: function (otpCode, email) {
                        return "Hi there! \n      \nI'm happy to welcome you to the private alpha of  Clarity AI. \n      \nPlease click here to confirm your registration and continue: \n\nhttps://clarity.codefromanywhere.com/signup-confirm?otp=".concat(otpCode, "&emailOrPhone=").concat(email, "\n      \nYou can also fill in the code manually. The code is \"").concat(otpCode, "\". The code is valid for 15 minutes.\n\nAs a small present I've given you 20 credits so you can get started doing some productive work with your voice.\n\nKind regards, \n\nPunkesh\nMarketing Manager at Clarity AI");
                    },
                    credit: 20,
                })];
            case 5:
                signupResult = _a.sent();
                if (!signupResult.isSuccessful) {
                    // might already have an account
                    return [2 /*return*/, { isSuccessful: false, message: signupResult.message }];
                }
                if (!meetingAudio && !meetingYoutubeUrl) {
                    return [2 /*return*/, {
                            isSuccessful: true,
                            message: "You have applied for the private beta. To confirm your application, please verify your email.",
                        }];
                }
                // if you filled in either an audio or a youtube URL, send email
                return [4 /*yield*/, (0, communication_wrapper_1.sendMail)({
                        to: email,
                        subject: "Your meeting is being summarised",
                        text: "Please wait while we are summarising your meeting, this might take a while. Please make sure to verify your account in the meantime (see other email).",
                    })];
            case 6:
                // if you filled in either an audio or a youtube URL, send email
                _a.sent();
                if (meetingYoutubeUrl) {
                    (0, youtube_to_mp3_1.youtubeToMp4)(meetingYoutubeUrl, {
                        destinationFolderPath: userBaseFolderPath,
                        isToMp3: true,
                    });
                    return [2 /*return*/, {
                            isSuccessful: true,
                            message: "Your video is being processed. The results will be available in your account later (check your mail)",
                        }];
                }
                return [2 /*return*/, {
                        isSuccessful: true,
                        message: "Your audio has been uploaded and being processed. The result will later be available in your account. Please check your mail to unlock it.",
                    }];
        }
    });
}); };
exports.summarizeMeetingWithContext = summarizeMeetingWithContext;
exports.summarizeMeetingWithContext.config = {
    isPublic: true,
    authorizations: { public: "x" },
};
//# sourceMappingURL=summarizeMeetingWithContext.js.map