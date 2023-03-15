"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customAssistants = void 0;
var elonGpt_1 = require("./elonGpt");
var englishTeacher_1 = require("./englishTeacher");
/**
 * Custom assistants can be added here by providing the name that equals the slug, and the custom assistant function.
 */
exports.customAssistants = {
    elonGpt: elonGpt_1.elonGpt,
    englishTeacher: englishTeacher_1.englishTeacher,
    bahasaTeacher: englishTeacher_1.bahasaTeacher,
};
//# sourceMappingURL=customAssistants.js.map