"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{l(r.next(e))}catch(e){a(e)}}function o(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,o[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFolderContents=void 0;var file_collection_util_1=require("file-collection-util"),fs_util_1=require("fs-util"),fs_util_js_1=require("fs-util-js"),get_path_1=require("get-path"),js_util_1=require("js-util"),getFolderContents=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r,i,a,s,o;return __generator(this,(function(l){switch(l.label){case 0:return(t=(0,get_path_1.getProjectRoot)())?(n=!fs_util_1.fs.existsSync(e))?[3/*break*/,2]:[4/*yield*/,fs_util_1.fs.stat(e)]:[2/*return*/];case 1:n=!l.sent().isDirectory(),l.label=2;case 2:return n?[2/*return*/]:[4/*yield*/,fs_util_1.fs.readdir(e,{withFileTypes:!0,encoding:"utf8"})];case 3:return r=l.sent().map((function(n){var r=fs_util_1.path.join(e,n.name),i=(0,fs_util_js_1.makeRelative)(r,t),a=n.isDirectory()?"folder":n.isSymbolicLink()?"link":n.isFile()?"file":"unknown";if(![".DS_Store",".index"].includes(n.name))return{name:n.name,absolutePath:r,projectRelativePath:i,type:a}})).filter(js_util_1.notEmpty),i=r.filter((function(e){return"folder"===e.type})),a=r.filter((function(e){return"file"===e.type})),s={},a.map((function(e){var t=(0,file_collection_util_1.getFileCollectionBasename)(e.absolutePath);s[t]?e.name.endsWith(".md")?
// Secondary case: give .md file prio
s[t]=__assign(__assign({},e),{isFileCollection:!0,names:__spreadArray(__spreadArray([],e.names||[],!0),[e.name],!1)}):
// Tertriary case: keep old one, only add name
s[t]=__assign(__assign({},s[t]),{names:__spreadArray(__spreadArray([],s[t].names||[],!0),[e.name],!1),isFileCollection:!0}):
// Basecase: first one of this collection
s[t]=__assign(__assign({},e),{isFileCollection:!1,names:[e.name]})})),o=Object.values(s),[2/*return*/,i.concat(o)]}}))}))};exports.getFolderContents=getFolderContents;
//# sourceMappingURL=getFolderContents.js.map