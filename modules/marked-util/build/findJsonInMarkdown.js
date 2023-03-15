"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.findJsonInMarkdown=exports.trimCodeblock=void 0;var try_parse_json_1=require("try-parse-json"),findCodeblocks_1=require("./findCodeblocks"),findCodespans_1=require("./findCodespans"),trimCodeblock=function(r){return(r=r.trim()).startsWith("`")&&r.endsWith("`")?r.slice(1,r.length-1):r};exports.trimCodeblock=trimCodeblock;
/**
 * For good accuracy, try to get a markdown with a single JSON, preferably without any other codespans.
 */
var findJsonInMarkdown=function(r){var o;if(r){var e=r.trim(),n=(0,try_parse_json_1.tryParseJson)(e);if(n)return n;
// find first codeblock (```code```)
var s=(0,findCodeblocks_1.findCodeblocks)(e),i=s[0]?(0,exports.trimCodeblock)(s[0]):void 0,t=i?(0,try_parse_json_1.tryParseJson)(i):void 0;if(t)return t;
// if no codeblocks were found, find codespans
var d=null===(o=(0,findCodespans_1.findCodespans)(e)[0])||void 0===o?void 0:o.trim().replaceAll("&quot;",'"'),a=(0,try_parse_json_1.tryParseJson)(d);if(a)return a;var _=e.match(/\{(?:[^{}]|(?:\{[^{}]*\}))*\}/),l=null==_?void 0:_[0],f=l?(0,try_parse_json_1.tryParseJson)(l):void 0;return f||void 0}};exports.findJsonInMarkdown=findJsonInMarkdown;
//# sourceMappingURL=findJsonInMarkdown.js.map