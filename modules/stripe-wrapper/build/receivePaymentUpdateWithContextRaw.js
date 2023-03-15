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
exports.receivePaymentUpdateWithContextRaw = void 0;
var stripe_1 = require("stripe");
var persona_functions_node_1 = require("persona-functions-node");
var database_1 = require("database");
var chat_message_orm_1 = require("chat-message-orm");
var communication_wrapper_1 = require("communication-wrapper");
var afterPayment_1 = require("./afterPayment");
var chat_1 = require("chat");
/**
 * This is where payment updates come in
 *
 * Set your stripe webhook to:
 *
 * `https://yourapi.com/function/receiveMessageWithContextRaw`
 *
 * Example response we are looking for:


```json
{
  eventType: 'checkout.session.completed',
  paymentIntent: {
    id: 'cs_live_a1UZF4BGbEfOGyWwgG6FVZyvUSD4i17QhtS9tJ0UVr6jXtsYTLi96YejAA',
    object: 'checkout.session',
    after_expiration: null,
    allow_promotion_codes: null,
    amount_subtotal: 50,
    amount_total: 50,
    automatic_tax: { enabled: false, status: null },
    billing_address_collection: null,
    cancel_url: 'https://findclarity.ai',
    client_reference_id: null,
    consent: null,
    consent_collection: null,
    created: 1677971110,
    currency: 'eur',
    custom_fields: [],
    custom_text: { shipping_address: null, submit: null },
    customer: null,
    customer_creation: 'if_required',
    customer_details: {
      address: [Object],
      email: 'xxxx',
      name: 'xzxzzz',
      phone: null,
      tax_exempt: 'none',
      tax_ids: []
    },
    customer_email: null,
    expires_at: 1678057510,
    invoice: null,
    invoice_creation: { enabled: false, invoice_data: [Object] },
    livemode: true,
    locale: null,
    metadata: { personId: 'blablabla' },
    mode: 'payment',
    payment_intent: 'pi_3Mi48uCL0Yranfl402OUoqpD',
    payment_link: null,
    payment_method_collection: 'always',
    payment_method_options: {},
    payment_method_types: [ 'card', 'bancontact', 'ideal' ],
    payment_status: 'paid',
    phone_number_collection: { enabled: false },
    recovered_from: null,
    setup_intent: null,
    shipping_address_collection: null,
    shipping_options: [],
    status: 'complete',
    submit_type: null,
    subscription: null,
    success_url: 'https://findclarity.ai',
    total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
    url: null,
    shipping_cost: null,
    shipping_details: null
  }
}
```

 */
var receivePaymentUpdateWithContextRaw = function (serverContext) { return __awaiter(void 0, void 0, void 0, function () {
    var rawBody, primaryPersona, stripe, stripeSignature, event, isDebugInput, stripeWebhookSigningSecret, paymentIntent, thisPersona, costPerMessageCredit, thisPerson, newEmail, addedCredit, updateResult, person, emailPart, addedMessages, successPart, message, chatMessage;
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                rawBody = serverContext.req.rawBody;
                return [4 /*yield*/, (0, persona_functions_node_1.getPersona)()];
            case 1:
                primaryPersona = _e.sent();
                if (!primaryPersona) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "No persona",
                        }];
                }
                if (!primaryPersona.stripeWebhookSigningSecret ||
                    !primaryPersona.stripeSecret ||
                    !primaryPersona.stripePublishableKey) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "No stripe credentials",
                        }];
                }
                stripe = new stripe_1.Stripe(primaryPersona.stripeSecret, {
                    apiVersion: "2022-11-15",
                });
                stripeSignature = serverContext.headers["stripe-signature"];
                isDebugInput = false;
                stripeWebhookSigningSecret = process.env.NODE_ENV !== "production"
                    ? // NB: hardcoded secret! Change this...
                        "whsec_M3eu1GTRHyrR4btOfatq1XBXYPzTOiID"
                    : primaryPersona.stripeWebhookSigningSecret;
                if (isDebugInput) {
                    console.log("Received a webhook with data:", {
                        body: rawBody,
                        stripeSignature: stripeSignature,
                        stripeWebhookSigningSecret: stripeWebhookSigningSecret,
                    });
                }
                try {
                    event = stripe.webhooks.constructEvent(rawBody, stripeSignature, stripeWebhookSigningSecret);
                }
                catch (err) {
                    console.warn("Error web hook", err);
                    serverContext.res.status(400).send("Webhook Error: ".concat(String(err)));
                    return [2 /*return*/, {
                            message: "Webhook error",
                            isSuccessful: false,
                        }];
                }
                if (event.type !== "checkout.session.completed") {
                    //not interested in all other events...
                    if (isDebugInput) {
                        console.log(event.type, event.data.object);
                    }
                    return [2 /*return*/, {
                            isSuccessful: true,
                            message: "Other event",
                        }];
                }
                paymentIntent = event.data.object;
                return [4 /*yield*/, (0, persona_functions_node_1.getPersona)(function (item) { var _a; return item.id === ((_a = paymentIntent.metadata) === null || _a === void 0 ? void 0 : _a.personaId); })];
            case 2:
                thisPersona = _e.sent();
                if (!thisPersona) {
                    console.log("ERROR:".concat((_a = paymentIntent.metadata) === null || _a === void 0 ? void 0 : _a.personaId));
                    return [2 /*return*/, { isSuccessful: false, message: "No persona found with that id" }];
                }
                costPerMessageCredit = ((_b = thisPersona.assistantState) === null || _b === void 0 ? void 0 : _b.costPerMessageCredit) ||
                    chat_1.defaultCostPerMessageCredit;
                if (paymentIntent.payment_status !== "paid") {
                    return [2 /*return*/, { isSuccessful: false, message: "Wrong status (not paid)" }];
                }
                if (!((_c = paymentIntent.metadata) === null || _c === void 0 ? void 0 : _c.personId)) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Found no person-id in your metadata",
                        }];
                }
                return [4 /*yield*/, database_1.db.get("Person")];
            case 3:
                thisPerson = (_e.sent()).find(function (x) { var _a; return x.id === ((_a = paymentIntent.metadata) === null || _a === void 0 ? void 0 : _a.personId); });
                if (!thisPerson) {
                    return [2 /*return*/, { isSuccessful: false, message: "Person wasn't found" }];
                }
                newEmail = thisPerson.email
                    ? undefined
                    : (_d = paymentIntent.customer_details) === null || _d === void 0 ? void 0 : _d.email;
                if (paymentIntent.currency !== "eur") {
                    return [2 /*return*/, { isSuccessful: false, message: "Payment must be in euro" }];
                }
                addedCredit = (0, chat_1.getCredit)(paymentIntent.amount_subtotal / 100);
                console.log({ addedCredit: addedCredit });
                return [4 /*yield*/, database_1.db.update("Person", function (item) { var _a; return item.id === ((_a = paymentIntent.metadata) === null || _a === void 0 ? void 0 : _a.personId); }, function (item) {
                        var newCredit = (item.credit || 0) + addedCredit;
                        return __assign(__assign({}, item), { credit: newCredit, email: newEmail || item.email });
                    })];
            case 4:
                updateResult = _e.sent();
                if (!updateResult.isSuccesful) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Something went wrong",
                        }];
                }
                return [4 /*yield*/, database_1.db.get("Person")];
            case 5:
                person = (_e.sent()).find(function (x) { var _a; return x.id === ((_a = paymentIntent.metadata) === null || _a === void 0 ? void 0 : _a.personId); });
                if (!(person === null || person === void 0 ? void 0 : person.phoneNumber)) {
                    console.log("Payment successful but person can't find phonenumber");
                    // Return a 200 response to acknowledge receipt of the event
                    return [2 /*return*/, {
                            isSuccessful: true,
                            message: "You paid",
                        }];
                }
                console.log("PHONENUMBER", person.phoneNumber);
                emailPart = newEmail
                    ? "\n\nBesides, we've added your email ".concat(newEmail, " to our email-list. You'll receive a weekly newsletter about how to get the best out of AI. If you don't want this, type \"opt-out\" and we'll disable this.")
                    : "";
                addedMessages = Math.floor(addedCredit / costPerMessageCredit);
                successPart = paymentIntent.metadata.customSuccessMessage
                    ? paymentIntent.metadata.customSuccessMessage
                        .replace("$credit", String(addedCredit))
                        .replace("$messages", String(addedMessages))
                    : "Your payment was successful. You have received ".concat(addedCredit, " credits.");
                message = "".concat(successPart).concat(emailPart);
                chatMessage = {
                    direction: "sent",
                    message: message,
                    createdAt: Date.now(),
                    personaId: thisPersona.id,
                    personId: person.id,
                };
                // console.log({
                //   personaSlug: thisPersona.slug,
                //   personSlug: person.slug,
                //   chatMessage,
                // });
                return [4 /*yield*/, (0, chat_message_orm_1.insertChatMessages)(person.slug, thisPersona.slug, [chatMessage])];
            case 6:
                // console.log({
                //   personaSlug: thisPersona.slug,
                //   personSlug: person.slug,
                //   chatMessage,
                // });
                _e.sent();
                return [4 /*yield*/, (0, communication_wrapper_1.sendTwilioMessage)(person.phoneNumber, message, {
                        // NB: new persona based on metadata
                        persona: thisPersona,
                    })];
            case 7:
                _e.sent();
                return [4 /*yield*/, (0, afterPayment_1.afterPayment)(paymentIntent.metadata)];
            case 8:
                _e.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.receivePaymentUpdateWithContextRaw = receivePaymentUpdateWithContextRaw;
//# sourceMappingURL=receivePaymentUpdateWithContextRaw.js.map