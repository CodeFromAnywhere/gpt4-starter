"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function u(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(c){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],n=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.openFinder=void 0;var child_process_1=require("child_process"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),openFinder=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,i,o,a;return __generator(this,(function(u){switch(u.label){case 0:return(t=(0,get_path_1.getProjectRoot)())?(r=fs_util_1.path.join(t,e),fs_util_1.fs.existsSync(r)?[4/*yield*/,fs_util_1.fs.stat(r)]:[2/*return*/]):[2/*return*/];case 1:return n=u.sent(),i=n.isDirectory(),o=i?r:fs_util_1.path.parse(r).dir,a=i?".":fs_util_1.path.parse(r).base,(0,child_process_1.execSync)("open -R ".concat(a),{cwd:o,encoding:"utf8"}),[2/*return*/]}}))}))};exports.openFinder=openFinder;
//# sourceMappingURL=openFinder.js.map