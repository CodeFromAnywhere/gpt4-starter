"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(e){a(e)}}function u(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,u)}s((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(s){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(t=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,n=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=r.call(e,i)}catch(e){u=[6,e],n=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapArrayJson=void 0;var read_json_file_1=require("read-json-file"),fs_util_1=require("fs-util"),mapArrayJson=function(e,r){return __awaiter(void 0,void 0,void 0,(function(){var t,n;return __generator(this,(function(o){switch(o.label){case 0:return e?[4/*yield*/,(0,read_json_file_1.readJsonFile)(e)]:[2/*return*/];case 1:return(t=o.sent())?(n=t.map(r),[4/*yield*/,(0,fs_util_1.writeJsonToFile)(e,n)]):[2/*return*/];case 2:return[2/*return*/,o.sent()]}}))}))};exports.mapArrayJson=mapArrayJson;
//# sourceMappingURL=mapArrayJson.js.map