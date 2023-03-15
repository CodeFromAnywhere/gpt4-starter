"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function l(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,o,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(l=0)),l;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(i=l.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){l.label=a[1];break}if(6===a[0]&&l.label<i[1]){l.label=i[1],i=a;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(a);break}i[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeDownloadableFile=void 0;var file_collection_util_1=require("file-collection-util"),fs_util_1=require("fs-util"),fs_util_js_1=require("fs-util-js"),get_path_1=require("get-path"),zip_1=require("zip"),makeDownloadableFile=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r,i,o,l;return __generator(this,(function(a){switch(a.label){case 0:return(t=(0,get_path_1.getProjectRoot)())&&fs_util_1.fs.existsSync(e)?[4/*yield*/,fs_util_1.fs.stat(e)]:[2/*return*/];case 1:return n=a.sent(),n.isDirectory()?[4/*yield*/,(0,zip_1.zipFolder)(e)]:[3/*break*/,3];case 2:return(r=a.sent())?[2/*return*/,r]:(console.log("zipping went wrong"),[2/*return*/]);case 3:return[4/*yield*/,(0,file_collection_util_1.getFileCollectionPaths)(e)];case 4:return i=a.sent(),o=(null==i?void 0:i.length)||0,o>1&&i?[4/*yield*/,(0,zip_1.zipFiles)(i.map((function(e){return(0,fs_util_js_1.makeRelative)(e,t)})))]:[3/*break*/,6];case 5:return(l=a.sent()).isSuccessful&&l.projectRelativeZipPath?[2/*return*/,fs_util_1.path.join(t,l.projectRelativeZipPath)]:(console.log(l),[2/*return*/]);case 6:
// final returncase: one file
return[2/*return*/,e]}}))}))};exports.makeDownloadableFile=makeDownloadableFile;
//# sourceMappingURL=makeDownloadableFile.js.map