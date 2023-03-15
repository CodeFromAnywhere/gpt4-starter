"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.findJsonInMarkdown=exports.trimCodeblock=void 0;var try_parse_json_1=require("try-parse-json"),marked_util_1=require("marked-util"),trimCodeblock=function(r){return(r=r.trim()).startsWith("`")&&r.endsWith("`")?r.slice(1,r.length-1):r};exports.trimCodeblock=trimCodeblock;
/**
 * For good accuracy, try to get a markdown with a single JSON, preferably without any other codespans.
 */
var findJsonInMarkdown=function(r){var o;if(r){var e=r.trim(),t=(0,try_parse_json_1.tryParseJson)(e);if(t)return t;
// find first codeblock (```code```)
var n=(0,marked_util_1.findCodeblocks)(e),s=n[0]?(0,exports.trimCodeblock)(n[0]):void 0,i=s?(0,try_parse_json_1.tryParseJson)(s):void 0;if(i)return i;
// if no codeblocks were found, find codespans
var d=null===(o=(0,marked_util_1.findCodespans)(e)[0])||void 0===o?void 0:o.trim().replaceAll("&quot;",'"'),a=(0,try_parse_json_1.tryParseJson)(d);if(a)return a;var _=e.match(/\{(?:[^{}]|(?:\{[^{}]*\}))*\}/),l=null==_?void 0:_[0],u=l?(0,try_parse_json_1.tryParseJson)(l):void 0;return u||void 0}};exports.findJsonInMarkdown=findJsonInMarkdown;
//# sourceMappingURL=findJsonInMarkdown.js.map