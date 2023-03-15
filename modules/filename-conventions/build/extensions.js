"use strict";var __spreadArray=this&&this.__spreadArray||function(s,e,t){if(t||2===arguments.length)for(var o,r=0,n=e.length;r<n;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return s.concat(o||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.codeExtensions=exports.fileTypes=exports.allowedSearchContentExtensions=exports.extensions=exports.getWriterType=exports.jsonExtensions=exports.markdownExtensions=exports.typescriptExtensions=exports.jsonExtensionsConst=exports.markdownExtensionsConst=exports.typescriptExtensionsConst=void 0,exports.typescriptExtensionsConst=["ts","tsx"],exports.markdownExtensionsConst=["md","mdx"],exports.jsonExtensionsConst=["json"],exports.typescriptExtensions=__spreadArray([],exports.typescriptExtensionsConst,!0),exports.markdownExtensions=__spreadArray([],exports.markdownExtensionsConst,!0),exports.jsonExtensions=__spreadArray([],exports.jsonExtensionsConst,!0);
/**
 * Gets the writer type based on the extension
 */
var getWriterType=function(s){return s?exports.typescriptExtensions.includes(s)?"typescript":exports.markdownExtensions.includes(s)?"markdown":"other":"other"};exports.getWriterType=getWriterType,exports.extensions={code:exports.typescriptExtensions,data:exports.jsonExtensions,text:exports.markdownExtensions},exports.allowedSearchContentExtensions=__spreadArray(__spreadArray(__spreadArray([],exports.typescriptExtensions,!0),exports.markdownExtensions,!0),exports.jsonExtensions,!0),exports.fileTypes=Object.keys(exports.extensions),exports.codeExtensions=["ts","tsx","js","jsx","php","c","h","swift","PHP","map"];
//# sourceMappingURL=extensions.js.map