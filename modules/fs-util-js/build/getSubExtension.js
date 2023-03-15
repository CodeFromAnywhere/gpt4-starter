"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSubExtension=void 0;
/**
 * Provide a filename including its extension, to get the subextension.
 */
var getSubExtension=function(e){var t=e.split(".");
//removes extension
return t.pop(),t.pop()};exports.getSubExtension=getSubExtension;
//# sourceMappingURL=getSubExtension.js.map