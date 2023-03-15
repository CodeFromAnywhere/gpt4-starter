"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{l(o.next(e))}catch(e){i(e)}}function a(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){s.label=a[1];break}if(6===a[0]&&s.label<r[1]){s.label=r[1],r=a;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(a);break}r[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},__rest=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.sendSms=void 0;var is_online_1=require("is-online"),twilio_1=__importDefault(require("twilio")),persona_functions_node_1=require("persona-functions-node"),sendSms=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,o,r,i,s,a,l;return __generator(this,(function(u){switch(u.label){case 0:return t=e.from,n=__rest(e,["from"]),[4/*yield*/,(0,persona_functions_node_1.getPrimaryPersona)()];case 1:return(o=u.sent())?[4/*yield*/,(0,is_online_1.isOnline)()]:[2/*return*/];case 2:return u.sent()?(r=o.twilioAccountSid,i=o.twilioAuthToken,s=o.twilioFromPhoneNumber,r&&i?(a=(0,twilio_1.default)(r,i),(l=t||s)?[4/*yield*/,a.messages.create(__assign({from:l},n)).catch((function(e){console.log("Sending sms failed",{reason:e})}))]:(console.log("Please provide a phonenumber to sent from, either in your OsConfig or in the sendSms options"),[2/*return*/])):(console.log("Please setup your Twilio credentials first"),[2/*return*/])):(console.log("Not online, sms not sent. There are two possibilities. We should either add it to queue to send it once we are online, or we should just log the sms because it may be done on an offline PC and this is a dev purpose sms",e),[2/*return*/]);case 3:return[2/*return*/,u.sent()]}}))}))};exports.sendSms=sendSms;
//# sourceMappingURL=sendSms.js.map