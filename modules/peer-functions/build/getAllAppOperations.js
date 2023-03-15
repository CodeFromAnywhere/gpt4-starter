"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function a(t){try{u(n.next(t))}catch(t){o(t)}}function s(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}u((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAllAppOperations=void 0;var database_1=require("database"),getFirstEmoji_1=require("./getFirstEmoji"),person_util_1=require("person-util"),getAllAppOperations=function(){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:return[4/*yield*/,database_1.db.get("Operation")];case 1:return t=e.sent().filter((function(t){var e,r;return t.name&&"ui-web"===(null===(e=t.operation)||void 0===e?void 0:e.classificationIndexed)&&(null===(r=t.operation)||void 0===r?void 0:r.port)})).map((function(t,e){var r,n,i=(null===(r=t.operation)||void 0===r?void 0:r.markdown)||t.description,o=null===(n=t.operation)||void 0===n?void 0:n.port;return{name:t.name,port:o,description:i,emoji:(0,getFirstEmoji_1.getFirstEmoji)(i)}})).sort((function(t,e){return t.port&&e.port?t.port<e.port?-1:1:-1})),[4/*yield*/,Promise.all(t.map((function(t){return __awaiter(void 0,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4/*yield*/,(0,person_util_1.isPortUsed)(t.port)];case 1:return e=r.sent(),[2/*return*/,__assign(__assign({},t),{isOnline:e})]}}))}))})))];case 2:return[2/*return*/,e.sent()]}}))}))};exports.getAllAppOperations=getAllAppOperations;
//# sourceMappingURL=getAllAppOperations.js.map