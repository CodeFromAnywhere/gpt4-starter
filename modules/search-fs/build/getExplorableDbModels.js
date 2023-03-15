"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function u(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(l){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getExplorableDbModels=void 0;var convert_case_1=require("convert-case"),database_1=require("database"),js_util_1=require("js-util"),getExplorableDbModels=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var n,r;return __generator(this,(function(o){switch(o.label){case 0:return[4/*yield*/,database_1.db.get("TsInterface")];case 1:return n=o.sent().filter((function(e){return e.isDbModel})),r=n.filter((function(t){return"".concat(t.name.toLowerCase()," ").concat((0,convert_case_1.humanCase)(t.name).toLowerCase()).includes(e.toLowerCase())})).filter((function(e){if(t.includes("admin"))return!0;
//get persmissions for every group the user is in
var n=null==t?void 0:t.map((function(t){var n;return null===(n=e.authorizations)||void 0===n?void 0:n[t]})).filter(js_util_1.notEmpty).join("");
// see if the "R" is included in those permissions, which would indicate we are allowed to read.
return null==n?void 0:n.toLowerCase().includes("r")})).map((function(e){return{title:"🗄 ".concat(e.name),description:e.description,url:"/db/".concat(e.name)}})),[2/*return*/,r]}}))}))};exports.getExplorableDbModels=getExplorableDbModels;
//# sourceMappingURL=getExplorableDbModels.js.map