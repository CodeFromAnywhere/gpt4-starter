#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var fs_util_1=require("fs-util"),log_1=require("log"),one_by_one_1=require("one-by-one"),compressMp4_1=require("../compressMp4"),compressMp4sCli=function(){return __awaiter(void 0,void 0,void 0,(function(){var e;return __generator(this,(function(t){return(e=process.argv.slice(2)).length>0&&(0,one_by_one_1.oneByOne)(e,(function(e){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(r){switch(r.label){case 0:return(t=e.startsWith(".")?fs_util_1.path.join(process.cwd(),e):e)&&fs_util_1.fs.existsSync(t)?[4/*yield*/,(0,compressMp4_1.compressMp4)(t)]:((0,log_1.log)("couldn't find that path"),[2/*return*/]);
// console.log({ operationNames, operationName });
case 1:
// console.log({ operationNames, operationName });
return r.sent(),[2/*return*/]}}))}))})),[2/*return*/]}))}))};compressMp4sCli();
//# sourceMappingURL=compressMp4s.cli.js.map