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
exports.receiveTwilioMessageWithContextRaw = void 0;
var chat_1 = require("chat");
var twilio_1 = require("twilio");
var findOrCreatePerson_1 = require("./findOrCreatePerson");
var findPersona_1 = require("./findPersona");
var MessagingResponse = twilio_1.twiml.MessagingResponse;
/**
 * This is where sms/whastapp messages are received via the twilio webhook.
 *
 * Set your twilio webhook to:
 *
 * `https://yourapi.com/function/receiveTwilioMessageWithContextRaw`
 *
 * What this does:
 * - receives the webhook input
 * - find the persona that this message is addressed to
 * - find or make a person based on the phone number
 * - call `generateResponse`
 *
 * What the `generateResponse` function does:
 * - store the sent message into the db
 * - generate a response
 * - deduct credit
 * - send a reply or not
 *
 */
var receiveTwilioMessageWithContextRaw = function (serverContext) { return __awaiter(void 0, void 0, void 0, function () {
    var webhookInput, toNumber, rawFromNumber, fromName, message, quickReply, url, contentType, twiml, _a, person, isFirstMessage, newUsersAmount, finalAssistantPersona, result, chunk1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                webhookInput = serverContext.data;
                toNumber = webhookInput.To;
                rawFromNumber = webhookInput.From;
                fromName = webhookInput.ProfileName;
                message = webhookInput.Body;
                quickReply = webhookInput.ButtonText;
                if (quickReply) {
                    //
                }
                if (webhookInput.OriginalRepliedMessageSid &&
                    webhookInput.OriginalRepliedMessageSender) {
                    //it's a reply to a previous message. should include that in model.
                    // look up all ChatMessages, find the replied message, get that text
                    // in the message, insert something like "you said this, my reply is blabla" or if you replly on yourself, also something like this.
                }
                if (webhookInput.Latitude && webhookInput.Longitude) {
                    //Latitude: '-8.65640926361084', Longitude: '115.13571166992188', Address, Label
                }
                if (webhookInput.NumMedia !== "0") {
                    //images, files, audios, stickers, camera, contacts: (NumMedia, MediaUrl0, MediaContentType0)
                    if (webhookInput.NumMedia !== "1") {
                        console.log("More than 1 media, weird");
                    }
                    url = webhookInput.MediaUrl0;
                    contentType = webhookInput.MediaContentType0;
                    if (contentType === "text/vcard") {
                        // contacts (save in user data)
                    }
                    if (contentType === null || contentType === void 0 ? void 0 : contentType.startsWith("image/")) {
                        // image (blip2, Replicate)
                    }
                    if ((contentType === null || contentType === void 0 ? void 0 : contentType.startsWith("audio/")) ||
                        (contentType === null || contentType === void 0 ? void 0 : contentType.startsWith("video/"))) {
                        // audio/ogg is the original, but other audio should be doable as well
                        // should send to whisper directly (Replicate)
                    }
                    //    const mediasAmount = Number(webhookInput.NumMedia);
                    // new Array(mediasAmount).fill(null).map((_,index)=>{}
                }
                twiml = new MessagingResponse();
                return [4 /*yield*/, (0, findOrCreatePerson_1.findOrCreatePerson)({
                        rawFromNumber: rawFromNumber,
                        fromName: fromName,
                    })];
            case 1:
                _a = _b.sent(), person = _a.person, isFirstMessage = _a.isFirstMessage, newUsersAmount = _a.newUsersAmount;
                if (!person) {
                    console.log("ERROR: Person not created");
                    //NB: shouldn't happen, person should always be created here...
                    serverContext.res.type("text/xml").send(twiml.toString());
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, findPersona_1.findPersona)(person, toNumber, webhookInput.AccountSid)];
            case 2:
                finalAssistantPersona = _b.sent();
                if (!finalAssistantPersona) {
                    console.log("ERROR: Persona not found", { webhookInput: webhookInput });
                    // NB: return early if there is no connected persona found to the Twilio number (or the twilioAccountSid doesn't match)
                    // NB: not sure if I should send a message, as this has cost
                    // twiml.message("This number is not active anymore");
                    serverContext.res.type("text/xml").send(twiml.toString());
                    return [2 /*return*/];
                }
                //NB: groups come later, may have different parameters I don't know about
                console.log("received ".concat(message));
                return [4 /*yield*/, (0, chat_1.processMessage)({
                        newUsersAmount: newUsersAmount,
                        message: message,
                        finalAssistantPersona: finalAssistantPersona,
                        person: person,
                        isFirstMessage: isFirstMessage,
                    })];
            case 3:
                result = _b.sent();
                if (result.responseMessage) {
                    chunk1 = result.responseMessage.substring(0, 1599);
                    twiml.message(chunk1);
                }
                // NB: respond with xml to to twilio so it knows what to send back
                serverContext.res.type("text/xml").send(twiml.toString());
                return [2 /*return*/];
        }
    });
}); };
exports.receiveTwilioMessageWithContextRaw = receiveTwilioMessageWithContextRaw;
//# sourceMappingURL=receiveTwilioMessageWithContextRaw.js.map