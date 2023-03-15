"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function l(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,l)}s((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(s){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&l[0]?n.return:l[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,l[1])).done)return a;switch(n=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],n=0}finally{r=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.exploreProject=void 0;var bundle_util_1=require("bundle-util"),k_explore_1=require("k-explore"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),database_1=require("database"),js_util_1=require("js-util"),filename_conventions_1=require("filename-conventions"),getOperationType_1=require("./getOperationType"),exploreOperation_1=require("./exploreOperation"),util_1=require("./util"),exploreProject=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,a,i,o,l,s,u,c,p,_,f,h,d,g;return __generator(this,(function(v){switch(v.label){case 0:return t=null==e?void 0:e.bundleId,r=void 0,t?[4/*yield*/,database_1.db.get("BundleConfig")]:[3/*break*/,2];case 1:(n=v.sent().find((function(e){return e.id===t})))&&(r=(0,bundle_util_1.getBundleSummary)(n)),v.label=2;case 2:return a=(0,get_path_1.getPathsWithOperations)(),i=(0,get_path_1.getRootPath)("text"),o=(0,get_path_1.getProjectRoot)(),a&&i&&o?[4/*yield*/,(0,k_explore_1.explore)({basePath:a.concat(i),includeFoldersWithResults:!0,ignore:["node_modules",".git",filename_conventions_1.databaseFolderName,".gitignore",".DS_Store"],
// extension: ["md","mdx"]
cancelRecursionOn:k_explore_1.pathArrayIsOperation})]:[2/*return*/];case 3:return l=v.sent(),s=l.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,a,i;return __generator(this,(function(o){switch(o.label){case 0:return t=(0,fs_util_1.getLastFolder)(e.path),n=!r||r.packageNames.includes(t),e.isCancelRecursionResult?n?[4/*yield*/,(0,exploreOperation_1.exploreOperation)(e.path)]:[3/*break*/,2]:[3/*break*/,4];case 1:return i=o.sent(),[3/*break*/,3];case 2:i=[],o.label=3;case 3:return a=i,[3/*break*/,5];case 4:a=[e],o.label=5;case 5:return[2/*return*/,a]}}))}))})),[4/*yield*/,Promise.all(s)];case 4:return u=v.sent().flat().map((function(e){return e.path})),g={},[4/*yield*/,database_1.db.get("TsFunction")];case 5:return g.functions=v.sent(),[4/*yield*/,database_1.db.get("TsVariable")];case 6:return g.variables=v.sent(),[4/*yield*/,database_1.db.get("TsInterface")];case 7:return g.interfaces=v.sent(),c=g,[4/*yield*/,(0,k_explore_1.exploreOperationFolders)({basePath:(0,get_path_1.getPathsWithOperations)()})];case 8:
// console.dir(
//   oppositeSortedFullIndexation.map((x) => x.relativeProjectPath),
//   { depth: 999, maxArrayLength: 9999 }
// );
return p=v.sent(),_=u.map((function(e){var t=e.substring(o.length),r=fs_util_1.path.parse(e).name,n=(0,getOperationType_1.getExplorationType)(e,p);
// extension like .ts or empty string if there's no extensnion (also for folders)
// Not typescript
if("typescript"!==n)
// name of folder, operation, operationFolder, or md file
// NB: shouldn't happen
return n?{name:r,relativeProjectPath:t,type:n,children:void 0}:null;
// NB: we are filling in the children in a later step
// Typescript
var a=Object.keys(c).map((function(e){var r=c[e],n=(0,util_1.getInstanceNames)(r,t),a="functions"===e?"function":"interfaces"===e?"interface":"variable",i=n.map((function(e){return{name:e,relativeProjectPath:t,type:a}}));return i})).flat();return{name:r,relativeProjectPath:t,type:n,children:a}})).flat().filter(js_util_1.notEmpty),f=_.sort((function(e,t){return e.relativeProjectPath<t.relativeProjectPath?-1:e.relativeProjectPath>t.relativeProjectPath?1:0})).reverse(),h=__spreadArray([],f,!0),d=h.reduce((function(e,t,r){var n,a=fs_util_1.path.parse(fs_util_1.path.join(o,t.relativeProjectPath)),i=(a.base.length>0?a.dir:fs_util_1.path.join(a.dir,"..")).substring(o.length),l=e.findIndex((function(e){return(null==e?void 0:e.relativeProjectPath)===i}));
// there is no parent found for this one
return-1===l||(
// we found a parent on all[baseIndex]. Lets put folderExploration in the children of that one, and remove it from the full indexation
e[l]=__assign(__assign({},e[l]),{children:e[l].children?null===(n=e[l].children)||void 0===n?void 0:n.concat(t):[t]}),delete e[r]),e}),h).filter(js_util_1.notEmpty),[2/*return*/,d]}}))}))};exports.exploreProject=exploreProject;
//# sourceMappingURL=exploreProject.js.map