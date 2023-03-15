#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function l(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,l)}c((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,n=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],n=0}finally{r=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.runChildProcess=void 0;var child_process_1=require("child_process"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),js_util_1=require("js-util"),log_1=require("log"),runChildProcess=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,o,i,a,l;return __generator(this,(function(c){switch(c.label){case 0:return t=e.operationFolderName,r=e.scriptFileName,n=e.args,o=e.isOverlapped,[4/*yield*/,(0,get_path_1.getOperationPath)(t)];case 1:return(i=c.sent())?(a=fs_util_1.path.join(i,"build/".concat(r,".js")),fs_util_1.fs.existsSync(a)?[4/*yield*/,(0,fs_util_1.canRead)(a)]:((0,log_1.log)("Couldn't find scriptFile ".concat(r," which should be at build/").concat(r,".js (full path:").concat(a,")"),{type:"error"}),[2/*return*/])):((0,log_1.log)("Couldn't find childOperationPath for operation ".concat(t),{type:"error"}),[2/*return*/]);case 2:return c.sent()?(l="node ".concat(a," ").concat((null==n?void 0:n.filter(js_util_1.notEmpty).join(" "))||""),[2/*return*/,(0,child_process_1.spawnSync)(l,{shell:!o,stdio:o?"pipe":"inherit",encoding:"utf8"}).output]):((0,log_1.log)("Can't read ".concat(a),{type:"error"}),[2/*return*/])}}))}))};exports.runChildProcess=runChildProcess;
//# sourceMappingURL=runChildProcess.js.map