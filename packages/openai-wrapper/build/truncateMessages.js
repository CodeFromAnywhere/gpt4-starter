"use strict";var __rest=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};Object.defineProperty(exports,"__esModule",{value:!0}),exports.truncateMessages=void 0;var js_util_1=require("js-util"),calculateMessagesTokenCount_1=require("./calculateMessagesTokenCount"),truncateMessages=function(e){var t=(0,calculateMessagesTokenCount_1.calculateMessagesTokenCount)(e).reverse().filter((function(e,t){return t<=9||!!(Date.now()-e.createdAt<864e5)})),n=t.findIndex((function(e,t,n){if((0,js_util_1.sum)(n.slice(0,t).map((function(e){return e.tokenCount})))>3e3)return!0})),r=-1===n?t:t.slice(0,n);
// newest first
return{truncatedMessages:r.reverse().map((function(e){e.tokenCount;return __rest(e,["tokenCount"])})),inputTokensCalculated:(0,js_util_1.sum)(r.map((function(e){return e.tokenCount})))}};exports.truncateMessages=truncateMessages;
//# sourceMappingURL=truncateMessages.js.map