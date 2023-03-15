"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageLimitInfo = void 0;
var getMessageLimitInfo = function (person, persona) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var dailyActiveUsers = 0;
    var personStatus = ((_a = persona.assistantState) === null || _a === void 0 ? void 0 : _a.minimumCreditVip) &&
        (person.credit || 0) > ((_b = persona.assistantState) === null || _b === void 0 ? void 0 : _b.minimumCreditVip)
        ? "vip"
        : ((_c = persona.assistantState) === null || _c === void 0 ? void 0 : _c.minimumCreditPaid) &&
            (person.credit || 0) > persona.assistantState.minimumCreditPaid
            ? "paid"
            : "regular";
    var dauLimit = personStatus === "vip" && ((_d = persona.assistantState) === null || _d === void 0 ? void 0 : _d.dauLimitVip)
        ? persona.assistantState.dauLimitVip
        : personStatus === "paid" && ((_e = persona.assistantState) === null || _e === void 0 ? void 0 : _e.dauLimitPaid)
            ? persona.assistantState.dauLimitPaid
            : ((_f = persona.assistantState) === null || _f === void 0 ? void 0 : _f.dauLimit) || 100;
    var tooManyDau = dailyActiveUsers > dauLimit;
    var freeMessagesAmountPersona = tooManyDau
        ? (_g = persona.assistantState) === null || _g === void 0 ? void 0 : _g.freeMessagesPerNewUserAfterDauLimit
        : (_h = persona.assistantState) === null || _h === void 0 ? void 0 : _h.freeMessagesPerNewUser;
    var freeMessagesAmount = freeMessagesAmountPersona || 0;
    return { tooManyDau: tooManyDau, freeMessagesAmount: freeMessagesAmount, dailyActiveUsers: dailyActiveUsers };
};
exports.getMessageLimitInfo = getMessageLimitInfo;
//# sourceMappingURL=getMessageLimitInfo.js.map