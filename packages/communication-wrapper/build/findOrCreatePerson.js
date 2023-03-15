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
exports.findOrCreatePerson = void 0;
var convert_case_1 = require("convert-case");
var database_1 = require("database");
var findOrCreatePerson = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var fromName, rawFromNumber, persons, newUsersAmount, fromNumber, personAlready, isFirstMessage, fromSlug, slug, upsertResult, _a, newPerson, _b, person;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                fromName = config.fromName, rawFromNumber = config.rawFromNumber;
                return [4 /*yield*/, database_1.db.get("Person")];
            case 1:
                persons = _c.sent();
                newUsersAmount = persons.filter(function (item) { return item.createdAt > Date.now() - 86400000; }).length;
                fromNumber = (rawFromNumber === null || rawFromNumber === void 0 ? void 0 : rawFromNumber.startsWith("whatsapp:"))
                    ? rawFromNumber.substring("whatsapp:".length)
                    : rawFromNumber;
                personAlready = persons.find(function (x) { return x.phoneNumber === fromNumber; });
                isFirstMessage = !personAlready;
                fromSlug = fromName ? (0, convert_case_1.slugify)((0, convert_case_1.kebabCase)(fromName)) : undefined;
                slug = fromSlug && fromSlug.length >= 6
                    ? "".concat(fromSlug, "-").concat(Math.round(Math.random() * 9999))
                    : "".concat(fromSlug || "user").concat(Math.round(Math.random() * 9999999));
                if (!personAlready) return [3 /*break*/, 2];
                _a = undefined;
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, database_1.db.upsert("Person", {
                    name: fromName || "Guest",
                    slug: slug,
                    phoneNumber: fromNumber,
                    lastActivityAt: Date.now(),
                })];
            case 3:
                _a = _c.sent();
                _c.label = 4;
            case 4:
                upsertResult = _a;
                if (!(upsertResult === null || upsertResult === void 0 ? void 0 : upsertResult.isSuccesful)) return [3 /*break*/, 6];
                return [4 /*yield*/, database_1.db.get("Person")];
            case 5:
                _b = (_c.sent()).find(function (x) { return x.phoneNumber === fromNumber; });
                return [3 /*break*/, 7];
            case 6:
                _b = undefined;
                _c.label = 7;
            case 7:
                newPerson = _b;
                person = personAlready || newPerson;
                return [2 /*return*/, { person: person, newUsersAmount: newUsersAmount, isFirstMessage: isFirstMessage }];
        }
    });
}); };
exports.findOrCreatePerson = findOrCreatePerson;
//# sourceMappingURL=findOrCreatePerson.js.map