"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}c((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.indexTypescriptFilePath=void 0;var fs_util_1=require("fs-util"),indexTypescript_1=require("./indexTypescript"),hasTypescriptFileChanged_1=require("./hasTypescriptFileChanged"),indexTypescriptFilePath=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return e=fs_util_1.path.parse(t).name,process.stdout.write("Indexing file: ".concat(e)),[4/*yield*/,(0,indexTypescript_1.indexTypescript)({filePaths:[t],manualProjectRoot:null,showLogging:!1})];case 1:return r.sent(),console.log("✅\n"),[2/*return*/]}}))}))};exports.indexTypescriptFilePath=indexTypescriptFilePath,exports.indexTypescriptFilePath.filter=hasTypescriptFileChanged_1.hasTypescriptFileChanged;
//# sourceMappingURL=indexTypescriptFilePath.js.map