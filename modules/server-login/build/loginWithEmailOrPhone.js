"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(r,a){function o(e){try{u(i.next(e))}catch(e){a(e)}}function s(e){try{u(i.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}u((i=i.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(t=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1];break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s);break}r[2]&&o.ops.pop(),o.trys.pop();continue}s=n.call(e,o)}catch(e){s=[6,e],i=0}finally{t=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.loginWithEmailOrPhone=void 0;var database_1=require("database"),communication_wrapper_1=require("communication-wrapper"),model_types_1=require("model-types"),isPhoneNumber_1=require("./validation/isPhoneNumber"),loginWithEmailOrPhone=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,t,i,r,a;return __generator(this,(function(o){switch(o.label){case 0:return n=(0,model_types_1.isEmail)(e)?e:void 0,t=!(0,model_types_1.isEmail)(e)&&(0,isPhoneNumber_1.isPhoneNumber)(e)?e:void 0,n||t?[4/*yield*/,database_1.db.get("Person")]:[2/*return*/,{isSuccessful:!1,message:"Please fill in a valid email or phone number"}];case 1:return(i=o.sent().find((function(e){return n?e.email===n:!!t&&e.phoneNumber===t})))?(r=String(Math.round(9e5*Math.random()+1e5-1)),a=n?{emailOtp:r,emailOtpAt:Date.now()}:t?{phoneNumberOtp:r,phoneNumberOtpAt:Date.now()}:void 0,[4/*yield*/,database_1.db.update("Person",(function(e){return e.id===i.id}),(function(e){return __assign(__assign({},e),{authentication:__assign(__assign({},e.authentication),a)})}))]):[2/*return*/,{isSuccessful:!1,message:"Could not find anyone with that email/phone"}];case 2:return o.sent(),n?[4/*yield*/,(0,communication_wrapper_1.sendMail)({to:n,subject:"Your login code",text:'Please login with this code: "'.concat(r,'"')})]:[3/*break*/,4];case 3:o.sent(),o.label=4;case 4:return t?[4/*yield*/,(0,communication_wrapper_1.sendSms)({to:t,body:'Please login with this code: "'.concat(r,'"')})]:[3/*break*/,6];case 5:o.sent(),o.label=6;case 6:return[2/*return*/,{isSuccessful:!0,emailOrPhone:e,message:"Please login with the code you received via ".concat(n?"email":"sms")}]}}))}))};exports.loginWithEmailOrPhone=loginWithEmailOrPhone,exports.loginWithEmailOrPhone.config={isPublic:!0};
//# sourceMappingURL=loginWithEmailOrPhone.js.map