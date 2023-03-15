"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.translate=void 0;
/**
Simple function for translations, that inputs a string (coming from your translation object and a variable object `{[key:string]:string}` that can hold other strings to be inserted. Translate tries to match every key to $keyName, and replaces it by its value.

NB: I purposefully dont create a `t` function like many i18n libraries do, because the type safety is useful, as it can, with a proper doc-comment, show which variables need to be inserted.
 */
var translate=function(e,t){return t?Object.keys(t).reduce((function(e,r){
// NB: replace all occurences
return e.replaceAll("${".concat(r,"}"),String(t[r]))}),e):e};exports.translate=translate;
//# sourceMappingURL=translate.js.map