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
exports.createNewStripePayment = void 0;
var stripe_1 = require("stripe");
var peer_types_1 = require("peer-types");
/**
 * One-time payment, generated for a person, if they want to make a payment or if they are out of credit.
 *
 * This function promises a URL, if it all worked.
 */
var createNewStripePayment = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var persona, localization, stripe, priceResult, paymentMetadata, paymentLink;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                persona = config.persona;
                localization = peer_types_1.assistantLocalisations.find(function (x) { var _a; return (_a = config.person.phoneNumber) === null || _a === void 0 ? void 0 : _a.startsWith(x.phoneNumberPrefix); });
                if (!persona.stripeSecret || !persona.stripePublishableKey) {
                    return [2 /*return*/];
                }
                stripe = new stripe_1.Stripe(persona.stripeSecret, { apiVersion: "2022-11-15" });
                return [4 /*yield*/, stripe.prices.create({
                        nickname: persona.slug,
                        // TODO; get currency here, based on phone number
                        currency: (localization === null || localization === void 0 ? void 0 : localization.preferredCurrency) || "eur",
                        currency_options: {
                            eur: { unit_amount: 50 },
                            idr: { unit_amount: 900000 },
                            brl: { unit_amount: 277 },
                            inr: { unit_amount: 4400 },
                            usd: { unit_amount: 50 },
                        },
                        unit_amount: (config === null || config === void 0 ? void 0 : config.priceCent) || 50,
                        product_data: { name: (config === null || config === void 0 ? void 0 : config.productName) || "Credit" },
                    })];
            case 1:
                priceResult = _a.sent();
                paymentMetadata = {
                    personId: config.person.id,
                    personaId: config.persona.id,
                    customSuccessMessage: config.customSuccessMessage,
                };
                return [4 /*yield*/, stripe.paymentLinks.create({
                        line_items: [
                            {
                                quantity: (config === null || config === void 0 ? void 0 : config.defaultQuantity) || 1,
                                price: priceResult.id,
                                adjustable_quantity: (config === null || config === void 0 ? void 0 : config.isQuantityEditable)
                                    ? {
                                        enabled: true,
                                        minimum: 1,
                                        maximum: 99,
                                    }
                                    : undefined,
                            },
                        ],
                        metadata: paymentMetadata,
                    })];
            case 2:
                paymentLink = _a.sent();
                //console.log({ priceResult, paymentLink });
                console.log("created payment", paymentLink.url);
                return [2 /*return*/, paymentLink.url || undefined];
        }
    });
}); };
exports.createNewStripePayment = createNewStripePayment;
//# sourceMappingURL=newStripePayment.js.map