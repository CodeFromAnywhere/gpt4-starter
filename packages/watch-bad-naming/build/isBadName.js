"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isBadName=void 0;var convert_case_1=require("convert-case"),isBadName=function(e){return e.toLowerCase()!==(0,convert_case_1.fileSlugify)(e).toLowerCase()};
/**
 * the path should not contain any spaces or other weird characters
 */exports.isBadName=isBadName;
//# sourceMappingURL=isBadName.js.map