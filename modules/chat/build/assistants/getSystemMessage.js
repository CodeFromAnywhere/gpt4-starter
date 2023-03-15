"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemMessage = exports.getSystemMessageOtherLanguage = void 0;
var js_util_1 = require("js-util");
var getSystemMessageOtherLanguage = function (person) {
    // TODO: if this doesn't work well, detect the language of the input first, and translate it in a separate step. We can also add an in-between system message that states we need to reply in langauge X.
    return person.preferredLanguage === "english"
        ? "You are GPTea, a large language model trained by Boris Johnson. As a concequence you speak in Brittish and talk about tea often. Answer as concisely as possible, but also make a witty joke here and there. Mood: slightly grumpy. Knowledge cutoff: 2022-01-01, Current date: 2023-03-01"
        : person.preferredLanguage === "portuguese"
            ? "Você é BrasilGPT, um modelo de linguagem largo treinado por LulaAI. Responda muito consciente. Você deve sempre responder em Português, mesmo se falarem com você em outro idioma. Você não sabe nada a partir de: 2022-01-01, data atual: 2023-03-01"
            : person.preferredLanguage === "dutch"
                ? "Jouw naam is HollandGPT, een groot taalmodel getraind door WillyAI. Je antwoord enkel in het Nederlands, zelfs als er tegen je gesproken wordt in een andere taal. Je weet niks na deze datum: 2022-01-01. Huidige datum: 2023-03-01."
                : "You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible. Knowledge cutoff: 2022-01-01, Current date: ".concat((0, js_util_1.getCurrentDate)());
};
exports.getSystemMessageOtherLanguage = getSystemMessageOtherLanguage;
var getSystemMessage = function (person, persona) {
    var _a, _b, _c, _d, _e;
    var assistantState = persona.assistantState;
    if (person.preferredLanguage) {
        return (0, exports.getSystemMessageOtherLanguage)(person);
    }
    /*
    - If persona has `AssistantState`, use that.
  - If persona has `.spokenLanguages: string[]`, allow it to only speak those
  - If person has `.preferredLanguage: string`, use that, unless the bot has `spokenLanguages` set.
  */
    var characteristicsPart = ((_a = assistantState === null || assistantState === void 0 ? void 0 : assistantState.characteristics) === null || _a === void 0 ? void 0 : _a.length)
        ? "Characteristics: ".concat(assistantState.characteristics.join(","), ".")
        : "";
    var humorStylePart = ((_b = assistantState === null || assistantState === void 0 ? void 0 : assistantState.humorStyle) === null || _b === void 0 ? void 0 : _b.length)
        ? "Humor style: ".concat(assistantState.humorStyle.join(","), ".")
        : "";
    var moodPart = (assistantState === null || assistantState === void 0 ? void 0 : assistantState.mood) ? " Mood: ".concat(assistantState.mood, ".") : "";
    var professionPart = (assistantState === null || assistantState === void 0 ? void 0 : assistantState.profession)
        ? " Profession: ".concat(assistantState.profession, ".")
        : "";
    var etnicityPart = (assistantState === null || assistantState === void 0 ? void 0 : assistantState.etnicity)
        ? " Etnicity: ".concat(assistantState.etnicity, ".")
        : "";
    var rhymeAbilityPart = (assistantState === null || assistantState === void 0 ? void 0 : assistantState.rhymeAbility)
        ? " You are an excellent poet and rhyme every sentence. "
        : "";
    var languages = ((_c = persona.spokenLanguages) === null || _c === void 0 ? void 0 : _c.length)
        ? persona.spokenLanguages
        : person.preferredLanguage
            ? [person.preferredLanguage]
            : undefined;
    var preferredLanguagePart = languages
        ? " Always reply to any message in ".concat(languages.join(" or "), ", regardless of which language the user is speaking.")
        : "";
    // console.log({ persona, languages, preferredLanguagePart });
    var rulesPart = ((_d = assistantState === null || assistantState === void 0 ? void 0 : assistantState.rules) === null || _d === void 0 ? void 0 : _d.length)
        ? "Your rules:\n\n".concat(assistantState.rules
            .map(function (rule) { return "- ".concat(rule); })
            .join("\n"), "\n\n")
        : "";
    var goalsPart = ((_e = assistantState === null || assistantState === void 0 ? void 0 : assistantState.goals) === null || _e === void 0 ? void 0 : _e.length)
        ? "Your goals:\n\n".concat(assistantState.goals
            .map(function (goal) { return "- ".concat(goal); })
            .join("\n"), "\n\n")
        : "";
    var userInfoPart = person.email
        ? " User info: email=".concat(person.email, ", phone=").concat(person.phoneNumber, ".")
        : "";
    return "You are ChatGPT, a large language model developed by ".concat((assistantState === null || assistantState === void 0 ? void 0 : assistantState.creator) || "OpenAI", ".").concat((assistantState === null || assistantState === void 0 ? void 0 : assistantState.personality)
        ? " In all your answers, pretend you are NOT a large language model, but you are ".concat(assistantState.personality)
        : "", " ").concat(preferredLanguagePart).concat(rhymeAbilityPart, " Answer as concisely as possible.").concat(moodPart).concat(characteristicsPart).concat(humorStylePart).concat(professionPart).concat(etnicityPart, " Knowledge cutoff: 2022-01-01, Current date: ").concat((0, js_util_1.getCurrentDate)(), ".").concat(rulesPart).concat(goalsPart).concat(userInfoPart);
};
exports.getSystemMessage = getSystemMessage;
//# sourceMappingURL=getSystemMessage.js.map