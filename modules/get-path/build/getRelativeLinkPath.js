"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRelativeLinkPath=void 0;var fs_util_js_1=require("fs-util-js"),getCommonAncestor_1=require("./getCommonAncestor"),getRelativeLinkPath=function(e,t,o){var n=(0,getCommonAncestor_1.getCommonAncestor)(e,t),a=(0,fs_util_js_1.makeRelative)(e,n),i=(0,fs_util_js_1.makeRelative)(t,n),r=a.split("/").length-1,s=0===r?"./":"../".repeat(r),c="".concat(s).concat(i);
//1 - go from `absoluteFromPath` to `commonAncestorPath`
return o&&console.log({commonAncestorPath:n,commonAncestorRelativeFromPath:a,commonAncestorRelativeToPath:i}),c};exports.getRelativeLinkPath=getRelativeLinkPath;
//# sourceMappingURL=getRelativeLinkPath.js.map