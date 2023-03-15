"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueSlug = void 0;
var general_1 = require("./general");
exports.uniqueSlug = (0, general_1.onlyUnique2)(function (a, b) { return a.slug === b.slug; });
//# sourceMappingURL=uniqueSlug.js.map