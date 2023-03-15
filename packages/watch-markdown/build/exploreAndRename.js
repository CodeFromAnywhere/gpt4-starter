"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(l){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.exploreAndRename=void 0;var k_explore_1=require("k-explore"),fs_util_1=require("fs-util"),filename_conventions_1=require("filename-conventions"),js_util_1=require("js-util"),fs_util_js_1=require("fs-util-js"),getBetterFilename_1=require("./getBetterFilename"),get_path_1=require("get-path"),one_by_one_1=require("one-by-one"),exploreAndRename=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var n,r;return __generator(this,(function(i){switch(i.label){case 0:return(n=(0,get_path_1.getProjectRoot)())?[4/*yield*/,(0,k_explore_1.explore)({basePath:e,extension:"md",ignore:filename_conventions_1.generatedFolders})]:[2/*return*/];case 1:return r=i.sent().map((function(e){return e.path})).filter((0,js_util_1.onlyUnique2)((function(e,t){return(0,fs_util_js_1.withoutSubExtensions)(fs_util_1.path.parse(e).name)===(0,fs_util_js_1.withoutSubExtensions)(fs_util_1.path.parse(t).name)}))),[4/*yield*/,(0,one_by_one_1.oneByOne)(r,(function(e){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(i){switch(i.label){case 0:return[4/*yield*/,fs_util_1.fs.readFile(e,"utf8")];case 1:
//TODO: slice it at some amount of tokens
return r=i.sent(),[4/*yield*/,(0,getBetterFilename_1.getBetterFilename)({projectRelativePath:(0,fs_util_js_1.makeRelative)(e,n),text:r,isDryrun:t})];case 2:
//TODO: slice it at some amount of tokens
return i.sent(),[2/*return*/]}}))}))}))];case 2:return i.sent(),[2/*return*/]}}))}))};exports.exploreAndRename=exploreAndRename;
//# sourceMappingURL=exploreAndRename.js.map