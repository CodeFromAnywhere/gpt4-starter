"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.api=exports.apiWithConfig=exports.untypedApiFunction=exports.API_CUSTOM_URL_KEY=exports.API_NO_RESPONSE_TIME_KEY=exports.AUTH_TOKEN_STORAGE_KEY=void 0;var server_api_url_1=require("server-api-url"),react_with_native_store_1=require("react-with-native-store"),js_util_1=require("js-util"),sdk_api_keys_1=require("sdk-api-keys");
/**
 *
 */
exports.AUTH_TOKEN_STORAGE_KEY="api.authToken",
/**
 * Should contain a string unix timestamp of the last time the API had no response.
 */
exports.API_NO_RESPONSE_TIME_KEY="api.timeoutAt",exports.API_CUSTOM_URL_KEY="api.customUrl";
/**
 * Used for calling the actual api for a function with some config
 *
 * NB: this is not a typed function as we are just overwriting it so we don't need any inference on this
 */
var untypedApiFunction=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];return __awaiter(void 0,void 0,void 0,(function(){var n,o,i,a,s,u,c,_;return __generator(this,(function(p){switch(p.label){case 0:return[4/*yield*/,(0,react_with_native_store_1.getItem)(exports.AUTH_TOKEN_STORAGE_KEY)];case 1:if(n=p.sent(),o=t.authToken||n,void 0===(i=t.apiUrl||server_api_url_1.apiUrl))return[2/*return*/,{isSuccessful:!1,isNotConnected:!0,message:"The API cannot be found"}];a="".concat(i,"/function/").concat(e),p.label=2;case 2:return p.trys.push([2,4,,5]),s=new AbortController,u=setTimeout((function(){return s.abort()}),t.timeout||1e4),[4/*yield*/,fetch(a,{method:"POST",signal:t.timeout?s.signal:void 0,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({authToken:o,parameters:r})}).then((function(e){return e.json()})).then((function(e){return(0,react_with_native_store_1.setItem)(exports.API_NO_RESPONSE_TIME_KEY,"0"),e})).catch((function(e){return console.log({explanation:"Your request could not be executed, you may be disconnected or the server may not be available.",error:e,errorStatus:e.status,errorString:String(e)}),(0,react_with_native_store_1.setItem)(exports.API_NO_RESPONSE_TIME_KEY,String(Date.now())),{isSuccessful:!1,isNotConnected:!0,message:"Could not connect to any API. Please see your API configuration."}}))];case 3:return c=p.sent(),clearTimeout(u),[2/*return*/,c];case 4:return _=p.sent(),(0,react_with_native_store_1.setItem)(exports.API_NO_RESPONSE_TIME_KEY,String(Date.now())),[2/*return*/,{isSuccessful:!1,isNotConnected:!0,message:"The API didn't resolve, and the fetch crashed because of it: "+String(_)}];case 5:return[2/*return*/]}}))}))};exports.untypedApiFunction=untypedApiFunction,
/**
 * This object contains a api function for every function in the backend
 *
 * The difference from `api` is that it allows you to also insert custom api configurations
 */
exports.apiWithConfig=(0,js_util_1.mergeObjectsArray)(sdk_api_keys_1.functionApiKeys.map((function(e){var t,r=((t={})[e]=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return exports.untypedApiFunction.apply(void 0,__spreadArray([e,t],r,!1))},t);return r}))),
/**
 * This object contains an api function for every function in the backend
 *
 *
 * NB: only use this if you can access localStorage of the browser or the app. This means this won't work in node or in getStaticProps functions or so
 */
exports.api=(0,js_util_1.mergeObjectsArray)(sdk_api_keys_1.functionApiKeys.map((function(e){var t,r={apiUrl:server_api_url_1.apiUrl},n=((t={})[e]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return exports.untypedApiFunction.apply(void 0,__spreadArray([e,r],t,!1))},t);return n})));
//# sourceMappingURL=api.js.map