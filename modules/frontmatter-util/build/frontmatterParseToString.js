"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=exports.frontmatterParseToString=void 0;var make_test_1=require("make-test"),js_util_1=require("js-util"),frontmatterParseToString=function(t){var r=Object.keys(t).map((function(r){var e=t[r];return"".concat(r,": ").concat(e)})).filter(js_util_1.notEmpty);return 0===r.length?"":"---\n".concat(r.join("\n"),"\n---\n")};exports.frontmatterParseToString=frontmatterParseToString,exports.test=[(0,make_test_1.makeTest)((function(){return(0,exports.frontmatterParseToString)({a:"1",b:"2",c:"true",d:"string"})}),(function(t){return"---\na: 1\nb: 2\nc: true\nd: string\n---\n"===t})),(0,make_test_1.makeTest)((function(){return(0,exports.frontmatterParseToString)({})}),(function(t){return""===t}))];
//# sourceMappingURL=frontmatterParseToString.js.map