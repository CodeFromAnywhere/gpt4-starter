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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaywallResult = void 0;
var stripe_wrapper_1 = require("stripe-wrapper");
var translate_1 = require("translate");
var constants_1 = require("./constants");
var getMessageLimitInfo_1 = require("./getMessageLimitInfo");
var getPaywallResult = function (chatMessage, history, person, persona, config) { return __awaiter(void 0, void 0, void 0, function () {
    var t, askForCredit, _a, freeMessagesAmount, tooManyDau, dailyActiveUsers, insufficientCredit, tooManyDauMaxVips, tooManyDauMaxPaid, tooManyDauMaxFree, tooManyDauMessage, isNewUserLimit, lastSentMessage, paywallMessageCreatedAt, tooSoonPaywallMessage, paymentReason, customSuccessMessage, _b, cheapPaymentUrl, expensivePaymentUrl, messagesAmountCheap, messagesAmountMore, cheaperFactor, insufficientMessage, newUserLimitMessage, creditMessage, reasonMessage, localPrice, websiteUrl, chatResponse;
    var _c, _d, _e, _f, _g, _h, _j, _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                t = persona.assistantState.translations;
                askForCredit = chatMessage.message.toLowerCase() === "credit";
                _a = (0, getMessageLimitInfo_1.getMessageLimitInfo)(person, persona), freeMessagesAmount = _a.freeMessagesAmount, tooManyDau = _a.tooManyDau, dailyActiveUsers = _a.dailyActiveUsers;
                insufficientCredit = (person.credit || 0) <= (0, constants_1.getMinimumCredit)(persona, freeMessagesAmount);
                tooManyDauMaxVips = ((_c = persona.assistantState) === null || _c === void 0 ? void 0 : _c.dauLimitVip) &&
                    persona.assistantState.minimumCreditVip
                    ? "VIP users allowed (deposit minimum: \u20AC".concat((_d = persona.assistantState) === null || _d === void 0 ? void 0 : _d.minimumCreditVip, "): ").concat((_e = persona.assistantState) === null || _e === void 0 ? void 0 : _e.dauLimitVip, " users")
                    : "";
                tooManyDauMaxPaid = ((_f = persona.assistantState) === null || _f === void 0 ? void 0 : _f.dauLimitPaid)
                    ? "Paid users allowed: ".concat((_g = persona.assistantState) === null || _g === void 0 ? void 0 : _g.dauLimitPaid, " users")
                    : "";
                tooManyDauMaxFree = ((_h = persona.assistantState) === null || _h === void 0 ? void 0 : _h.dauLimit)
                    ? "Free users allowed: ".concat((_j = persona.assistantState) === null || _j === void 0 ? void 0 : _j.dauLimit, " users")
                    : "";
                tooManyDauMessage = (0, translate_1.translate)(t.tooManyDau, {
                    dailyActiveUsers: String(dailyActiveUsers),
                    tooManyDauMaxVips: tooManyDauMaxVips,
                    tooManyDauMaxPaid: tooManyDauMaxPaid,
                    tooManyDauMaxFree: tooManyDauMaxFree,
                });
                isNewUserLimit = config.newUsersAmount &&
                    ((_k = persona.assistantState) === null || _k === void 0 ? void 0 : _k.maximumNewUsersPerDay) &&
                    config.isFirstMessage
                    ? config.newUsersAmount > persona.assistantState.maximumNewUsersPerDay
                    : false;
                if (!isNewUserLimit && !askForCredit && !insufficientCredit && !tooManyDau) {
                    return [2 /*return*/, {
                            isSuccessful: true,
                            isPaywallHit: false,
                        }];
                }
                lastSentMessage = __spreadArray([], history, true).reverse()
                    .find(function (x) { return x.direction === "sent"; });
                paywallMessageCreatedAt = (lastSentMessage === null || lastSentMessage === void 0 ? void 0 : lastSentMessage.isPaywallMessage)
                    ? lastSentMessage.createdAt
                    : undefined;
                tooSoonPaywallMessage = paywallMessageCreatedAt
                    ? Date.now() - paywallMessageCreatedAt < 86400000
                    : false;
                if (tooSoonPaywallMessage) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            isPaywallHit: true,
                            message: "You already hit the paywall less than a day ago",
                        }];
                }
                paymentReason = isNewUserLimit
                    ? "whatsapp-new-user-limit"
                    : askForCredit
                        ? "whatsapp-ask-for-credit"
                        : tooManyDau
                            ? "whatsapp-too-many-dau"
                            : "whatsapp-insufficient-credit";
                customSuccessMessage = (0, translate_1.translate)(t.paymentSuccessMessage);
                return [4 /*yield*/, Promise.all([
                        (0, stripe_wrapper_1.createNewStripePayment)({
                            person: person,
                            persona: persona,
                            paymentReason: paymentReason,
                            customSuccessMessage: customSuccessMessage,
                        }),
                        (0, stripe_wrapper_1.createNewStripePayment)({
                            person: person,
                            persona: persona,
                            productName: "Clarity Credit",
                            defaultQuantity: 10,
                            isQuantityEditable: true,
                            paymentReason: paymentReason,
                            customSuccessMessage: customSuccessMessage,
                        }),
                    ])];
            case 1:
                _b = _l.sent(), cheapPaymentUrl = _b[0], expensivePaymentUrl = _b[1];
                if (!cheapPaymentUrl || !expensivePaymentUrl) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            isPaywallHit: true,
                            message: "Generating payment links went wrong",
                        }];
                }
                messagesAmountCheap = (0, constants_1.getMessagesAmountCheap)(persona);
                messagesAmountMore = (0, constants_1.getMessagesAmountMore)(persona);
                cheaperFactor = Math.round((messagesAmountMore /
                    messagesAmountCheap /
                    (constants_1.expensivePayment / constants_1.cheapPayment)) *
                    100) / 100;
                insufficientMessage = (0, translate_1.translate)(t.paywallInsufficientMessage);
                newUserLimitMessage = (0, translate_1.translate)(t.paywallNewUserLimitMessage);
                creditMessage = (0, translate_1.translate)(t.paywallCreditStatus, {
                    credit: String(person.credit || 0),
                });
                reasonMessage = insufficientCredit
                    ? insufficientMessage
                    : tooManyDau
                        ? tooManyDauMessage
                        : isNewUserLimit
                            ? newUserLimitMessage
                            : creditMessage;
                localPrice = "\u20AC5,00";
                websiteUrl = "https://chat.findclarity.ai";
                chatResponse = (0, translate_1.translate)(t.paywallMessage, {
                    name: person.name,
                    reasonMessage: reasonMessage,
                    messagesAmountMore: messagesAmountMore,
                    localPrice: localPrice,
                    expensivePaymentUrl: expensivePaymentUrl,
                    messagesAmountCheap: messagesAmountCheap,
                    cheaperFactor: cheaperFactor,
                    cheapPaymentUrl: cheapPaymentUrl,
                    websiteUrl: websiteUrl,
                });
                return [2 /*return*/, {
                        isPaywallHit: true,
                        isSuccessful: true,
                        tokensUsed: 0,
                        message: "Credit deposit required",
                        chatResponse: chatResponse,
                    }];
        }
    });
}); };
exports.getPaywallResult = getPaywallResult;
//# sourceMappingURL=getPaywallResult.js.map