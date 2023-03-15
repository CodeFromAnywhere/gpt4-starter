"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.withoutSubExtensions=void 0;var filename_conventions_1=require("filename-conventions"),js_1=require("./js"),withoutSubExtensions=function(
/**
 * filename including extension
 */
e,n){var t=null==n?void 0:n.allowAllSubextensions,s=(0,js_1.withoutExtension)(e).split(".");if(t)return s[0];
// only conventioned
var i=!1;
//  .concat(`.${getExtension(fileName)}`);
return s.reverse().reduce((function(e,n,t){return filename_conventions_1.possibleSubExtensions.includes(n)||(i=!0),i&&e.push(n),e}),[]).reverse().join(".")};exports.withoutSubExtensions=withoutSubExtensions;
//# sourceMappingURL=withoutSubExtensions.js.map