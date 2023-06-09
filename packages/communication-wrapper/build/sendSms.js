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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSms = void 0;
var is_online_1 = require("is-online");
var twilio_1 = __importDefault(require("twilio"));
var persona_functions_node_1 = require("persona-functions-node");
/**
 * DEPRECATED: to be merged with `sendMessage` since it also handles WhatsApp and more...
 *
 * Send sms
 *
 * Requires OS Config to have Twilio sid and auth token.
 *
 * Reqruired options: `to` and `body`
 *
 * `to` is not required, but will overwrite the one you specified in your `OsConfig`
 */
var sendSms = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var optionsFrom, otherOptions, persona, isOnlineNow, twilioAccountSid, twilioAuthToken, twilioFromPhoneNumber, twilioClient, from, message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                optionsFrom = options.from, otherOptions = __rest(options, ["from"]);
                return [4 /*yield*/, (0, persona_functions_node_1.getPersona)()];
            case 1:
                persona = _a.sent();
                if (!persona) {
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, is_online_1.isOnline)()];
            case 2:
                isOnlineNow = _a.sent();
                if (!isOnlineNow) {
                    console.log("Not online, sms not sent. There are two possibilities. We should either add it to queue to send it once we are online, or we should just log the sms because it may be done on an offline PC and this is a dev purpose sms", options);
                    return [2 /*return*/];
                }
                twilioAccountSid = persona.twilioAccountSid, twilioAuthToken = persona.twilioAuthToken, twilioFromPhoneNumber = persona.twilioFromPhoneNumber;
                if (!twilioAccountSid || !twilioAuthToken) {
                    console.log("Please setup your Twilio credentials first");
                    return [2 /*return*/];
                }
                twilioClient = (0, twilio_1.default)(twilioAccountSid, twilioAuthToken);
                from = optionsFrom || twilioFromPhoneNumber;
                if (!from) {
                    console.log("Please provide a phonenumber to sent from, either in your OsConfig or in the sendSms options");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, twilioClient.messages
                        .create(__assign({ from: from }, otherOptions))
                        .catch(function (reason) {
                        console.log("Sending sms failed", { reason: reason });
                        return undefined;
                    })];
            case 3:
                message = _a.sent();
                return [2 /*return*/, message];
        }
    });
}); };
exports.sendSms = sendSms;
//# sourceMappingURL=sendSms.js.map