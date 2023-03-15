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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTwilioMessage = void 0;
var persona_functions_node_1 = require("persona-functions-node");
var twilio_1 = __importDefault(require("twilio"));
/**
sends a message with the primary persona (or specified persona) to a whatsapp number with a specific body

Twilio from/to works with or without a "whatsapp:" prefix for whatsapp and sms respectively

Must use E.164 formatting, e.g. +[country][phonenumber]
 */
var sendTwilioMessage = function (to, body, config) { return __awaiter(void 0, void 0, void 0, function () {
    var persona, _a, twilioAccountSid, twilioAuthToken, twilioFromPhoneNumber, twilioWhatsappFromPhoneNumber, client, fromNumber, toNumber, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = (config === null || config === void 0 ? void 0 : config.persona);
                if (_a) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, persona_functions_node_1.getPersona)()];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2:
                persona = _a;
                if (!persona) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                        }];
                }
                twilioAccountSid = persona.twilioAccountSid, twilioAuthToken = persona.twilioAuthToken, twilioFromPhoneNumber = persona.twilioFromPhoneNumber, twilioWhatsappFromPhoneNumber = persona.twilioWhatsappFromPhoneNumber;
                client = (0, twilio_1.default)(twilioAccountSid, twilioAuthToken);
                fromNumber = (config === null || config === void 0 ? void 0 : config.channel) === "sms"
                    ? twilioFromPhoneNumber
                    : "whatsapp:".concat(twilioWhatsappFromPhoneNumber);
                toNumber = (config === null || config === void 0 ? void 0 : config.channel) === "sms" ? to : "whatsapp:".concat(to);
                return [4 /*yield*/, client.messages.create({
                        from: fromNumber,
                        body: body,
                        to: toNumber,
                        // useful to shorten urls!
                        shortenUrls: config === null || config === void 0 ? void 0 : config.shortenUrls,
                        // to send an image, just pass an url here!
                        mediaUrl: config === null || config === void 0 ? void 0 : config.mediaUrls,
                        // to send a location, just use this:
                        persistentAction: (config === null || config === void 0 ? void 0 : config.location)
                            ? [
                                "geo:".concat(config.location.latitude, ",").concat(config.location.longitude, "|").concat(config.location.label),
                            ]
                            : undefined,
                    })];
            case 3:
                result = _b.sent();
                // console.log({ result });
                return [2 /*return*/, { isSuccessful: true }];
        }
    });
}); };
exports.sendTwilioMessage = sendTwilioMessage;
//# sourceMappingURL=sendTwilioMessage.js.map