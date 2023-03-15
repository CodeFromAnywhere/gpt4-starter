"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.usePing=void 0;var api_1=require("api"),react_1=require("react"),react_with_native_store_1=require("react-with-native-store"),timeBeforeNotOffline=1e4,usePing=function(){
// ping every time the user returns to the screen. this way the api gets checked
api_1.queries.usePing();var e=(0,react_1.useState)(void 0),t=e[0],r=e[1];return(0,react_1.useEffect)((function(){var e=setInterval((function(){
// every second, check the localstorage for this thing.
(0,react_with_native_store_1.getItem)(api_1.API_NO_RESPONSE_TIME_KEY).then((function(e){if(void 0===e&&t)r(!1);else{var i=Number(e);
//  console.log({ lastNoResponse });
if(0!==i){var n=Date.now()-i;
// long ago, let's wait for loading it again
r(!(n>timeBeforeNotOffline)||void 0)}else
// last time we got a response...
r(!1)}}))}),1e3);return function(){return clearInterval(e)}}),[]),{isOffline:t}};exports.usePing=usePing;
//# sourceMappingURL=usePing.js.map