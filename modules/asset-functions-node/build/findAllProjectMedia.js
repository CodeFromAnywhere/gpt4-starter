"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function s(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.findAllProjectMedia=exports.mediaExtensions=void 0;var filename_conventions_1=require("filename-conventions"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),fs_util_js_1=require("fs-util-js"),k_explore_1=require("k-explore"),sdk_operations_1=require("sdk-operations");exports.mediaExtensions=["png","mp3","mp4","zip","pdf"];
/**
Media:`.png`, `.mp4`, `.mp3`, `.zip`, `.pdf`

- finds all media in all `db` folders. Can be anywhere, so an explore will probably be best.
- finds all media in every operation in any folder except for `node_modules`, `db`, `src`, `build`, `.[anything]`. (so mostly in `todo`, `docs` and `assets`)
- find all media in every other folder that is not an operation

Return all of this as project relative path array

 */
var findAllProjectMedia=function(e,
/**
 * defaults to absolute
 */
t){return __awaiter(void 0,void 0,void 0,(function(){var n,r,o,a,i,s,l,c;return __generator(this,(function(u){switch(u.label){case 0:return(n=(0,get_path_1.getProjectRoot)())?(r=fs_util_1.path.join(n,filename_conventions_1.databaseFolderName),o=Object.values(sdk_operations_1.operations).map((function(e){return fs_util_1.path.join(n,e)})),a=o.map((function(e){return fs_util_1.path.join(e,filename_conventions_1.databaseFolderName)})).concat(r).filter(fs_util_1.fs.existsSync),[4/*yield*/,(0,k_explore_1.explore)({basePath:a,extension:exports.mediaExtensions,search:e})]):[2/*return*/,[]];case 1:return i=u.sent(),[4/*yield*/,(0,k_explore_1.explore)({basePath:o,extension:exports.mediaExtensions,ignore:__spreadArray(__spreadArray([],filename_conventions_1.generatedFolders,!0),[filename_conventions_1.databaseFolderName,filename_conventions_1.sourceFolderName],!1),search:e})];case 2:return s=u.sent(),[4/*yield*/,(0,k_explore_1.explore)({cancelRecursionOn:k_explore_1.pathArrayIsOperation,basePath:n,extension:exports.mediaExtensions,ignore:[filename_conventions_1.databaseFolderName,"node_modules",".git"]})];case 3:return l=u.sent(),c=[i,s,l].flat().map((function(e){return e.path})),[2/*return*/,"projectRelative"===t?c.map((function(e){return(0,fs_util_js_1.makeRelative)(e,n)})):c]}}))}))};exports.findAllProjectMedia=findAllProjectMedia;
//# sourceMappingURL=findAllProjectMedia.js.map