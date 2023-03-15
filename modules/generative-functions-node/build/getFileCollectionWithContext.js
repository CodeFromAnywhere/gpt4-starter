"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function l(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(a=0)),a;)try{if(n=1,o&&(i=2&l[0]?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,o=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){a.label=l[1];break}if(6===l[0]&&a.label<i[1]){a.label=i[1],i=l;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(l);break}i[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],o=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFileCollectionWithContext=void 0;var fs_authorization_1=require("fs-authorization"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),search_fs_1=require("search-fs"),file_collection_util_1=require("file-collection-util"),getFileCollectionWithContext=function(e,
/**
 * file path of which you want to see the file collection
 */
t){return __awaiter(void 0,void 0,void 0,(function(){var n,o,i,r,a,l,s,c,u,f,h;return __generator(this,(function(p){switch(p.label){case 0:return(n=(0,get_path_1.getProjectRoot)())?(o=e?(0,search_fs_1.getExplorableBasePathsWithContext)(e):[],i=null===(f=o.find((function(e){return t.startsWith(e.projectRelativePath)})))||void 0===f?void 0:f.projectRelativePath,r=i?{canRead:!0,canWrite:!0}:{canRead:!1,canWrite:!1},a=(null===(h=e.groups)||void 0===h?void 0:h.map((function(e){return e.slug})))||[],[4/*yield*/,(0,fs_authorization_1.getFsAuthorization)({baseAuthorization:r,groupSlugs:a,projectRelativePath:t,projectRelativeBaseFolderPath:i||""})]):[2/*return*/,{isSuccessful:!1,message:"No project root"}];case 1:return(l=p.sent())&&l.canRead?(s=fs_util_1.path.join(n,t),[4/*yield*/,(0,file_collection_util_1.getFileCollectionPaths)(s)]):[2/*return*/,{isSuccessful:!1,message:"You have no access"}];case 2:return(c=p.sent())&&0!==c.length?(u=c.map((function(e){return{name:fs_util_1.path.parse(e).base,
// TODO: create a function to get all actions that are appliccable on all unique filetypes we have.
actions:[],rawContent:"nothing yet... coming soon based on !isBinary()??readFile",type:"File"}})),[2/*return*/,{isSuccessful:!0,message:"Found ".concat(u.length," files"),files:u}]):[2/*return*/,{isSuccessful:!1,message:"No file collection found"}]}}))}))};exports.getFileCollectionWithContext=getFileCollectionWithContext,exports.getFileCollectionWithContext.config={isPublic:!0};
//# sourceMappingURL=getFileCollectionWithContext.js.map