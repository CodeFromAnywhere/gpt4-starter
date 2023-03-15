"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((s=s.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,s,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(r=0)),r;)try{if(n=1,s&&(i=2&a[0]?s.return:a[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,a[1])).done)return i;switch(s=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,s=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(i=r.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){r=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(6===a[0]&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e],s=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.renameFileCollection=void 0;var fs_util_1=require("fs-util"),filename_conventions_1=require("filename-conventions"),fs_util_js_1=require("fs-util-js"),get_path_1=require("get-path"),getFileCollectionPaths_1=require("./getFileCollectionPaths"),renameFileCollection=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var s,i,o,r,a;return __generator(this,(function(l){switch(l.label){case 0:return s=null==n?void 0:n.isDryrun,(i=(0,get_path_1.getProjectRoot)())?[4/*yield*/,(0,getFileCollectionPaths_1.getFileCollectionPaths)(fs_util_1.path.join(i,e))]:[2/*return*/,{isSuccessful:!1,message:"No projectroot"}];case 1:return(o=l.sent())&&0!==o.length?!!o.find((function(e){return filename_conventions_1.codeExtensions.includes((0,fs_util_js_1.getExtension)(e))}))?[2/*return*/,{isSuccessful:!1,message:"File collection renames doesn't support codefile renaming yet, because you may break the code."}]:(r=o.map((function(e){
// rename
var n=(0,get_path_1.getSubExtensions)(e),s=fs_util_1.path.parse(e),i=(0,fs_util_js_1.getExtension)(s.base),o=[t].concat(n).concat(i).join("."),r=fs_util_1.path.join(s.dir,o);return e===r?{absolutePath:e,status:"isRenamed",newAbsolutePath:r}:(0,fs_util_1.fileExistsWithCaseSync)(r)?{absolutePath:e,status:"exists",newAbsolutePath:r}:{absolutePath:e,status:"canRename",newAbsolutePath:r}})),(a=r.filter((function(e){return"exists"===e.status}))).length>0?[2/*return*/,{isSuccessful:!1,message:"One of the resulting filenames already exists, thus we cannot rename this collection.",results:a}]:s?[2/*return*/,{isSuccessful:!0,message:"Dryrun done",results:r}]:[4/*yield*/,Promise.all(r.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return"canRename"!==e.status?[2/*return*/]:e.newAbsolutePath?[4/*yield*/,fs_util_1.fs.rename(e.absolutePath,e.newAbsolutePath)]:[2/*return*/];case 1:return t.sent(),[2/*return*/]}}))}))})))]):[2/*return*/,{isSuccessful:!1,message:"No files found"}];case 2:return l.sent(),[2/*return*/,{isSuccessful:!0,message:"Renamed file collection of ".concat(r.length," files"),results:r}]}}))}))};exports.renameFileCollection=renameFileCollection;
//# sourceMappingURL=renameFileCollection.js.map