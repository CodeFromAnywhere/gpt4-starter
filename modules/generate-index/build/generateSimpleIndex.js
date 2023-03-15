#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function u(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(l){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateSimpleIndex=void 0;var fs_util_1=require("fs-util"),log_1=require("log"),get_path_1=require("get-path"),fs_util_js_1=require("fs-util-js"),get_package_source_paths_1=require("get-package-source-paths"),filename_conventions_1=require("filename-conventions"),generateSimpleIndex=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r,o,a,i,u;return __generator(this,(function(l){switch(l.label){case 0:return t=e.operationName,n=e.manualProjectRoot,t?[4/*yield*/,(0,get_path_1.getOperationPath)(t,{manualProjectRoot:n})]:((0,log_1.log)("No operation name, can't create index",{type:"error"}),[2/*return*/]);case 1:return(r=l.sent())?"ui-web"===(0,get_path_1.getOperationClassification)(r)?((0,log_1.log)("Not generating index.ts for next.js project, not needed.",{type:"default"}),[2/*return*/]):(o=fs_util_1.path.join(r,"src","index.ts"),[4/*yield*/,(0,get_package_source_paths_1.getPackageSourcePaths)({operationBasePath:r})]):((0,log_1.log)("operationPath not found ".concat(t),{type:"error"}),[2/*return*/]);case 2:return a=l.sent(),i=a.map((function(e){return(0,get_path_1.getSrcRelativeFileId)((0,fs_util_js_1.makeRelative)(e,r))})),u=i.filter(filename_conventions_1.isIndexableFileId).map((function(e){return'export * from "./'.concat(e,'";')})).join("\n"),[4/*yield*/,fs_util_1.fs.writeFile(o,u,{encoding:"utf8"})];case 3:return l.sent(),[2/*return*/,o]}}))}))};exports.generateSimpleIndex=generateSimpleIndex;
//# sourceMappingURL=generateSimpleIndex.js.map