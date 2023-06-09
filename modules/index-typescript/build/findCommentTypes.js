"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.findCommentTypes=void 0;var comment_types_1=require("comment-types"),findCommentTypes=function(e){var t=e.split("\n");return comment_types_1.commentTypes.filter((function(e){return t.find((function(t){return t.trimStart().startsWith("".concat(e.toUpperCase(),":"))}))}))};
/**
 * returns all types that are found as start of a line in the comment (capitalised, with a ":" behind)
 */exports.findCommentTypes=findCommentTypes;
//# sourceMappingURL=findCommentTypes.js.map