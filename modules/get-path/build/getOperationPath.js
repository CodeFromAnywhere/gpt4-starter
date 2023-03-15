"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function u(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}l((o=o.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(l){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(r=1,o&&(n=2&u[0]?o.return:u[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,u[1])).done)return n;switch(o=0,n&&(u=[2&u[0],n.value]),u[0]){case 0:case 1:n=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,o=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!n||u[1]>n[0]&&u[1]<n[3])){i.label=u[1];break}if(6===u[0]&&i.label<n[1]){i.label=n[1],n=u;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(u);break}n[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],o=0}finally{r=n=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getOperationPath=void 0;var fs_util_1=require("fs-util"),k_explore_1=require("k-explore"),log_1=require("log"),sdk_operations_1=require("sdk-operations"),getPathsWithOperations_1=require("./getPathsWithOperations"),getProjectRoot_1=require("./getProjectRoot"),getOperationPath=function(
/**
 * specify the operation folder name
 */
e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,o,n,a,i,u;return __generator(this,(function(l){switch(l.label){case 0:
// NB: In case of manualProjectRoot, we should not use the SDK! The sdk is from our own project root.
return!(null==t?void 0:t.notUseSdk)&&!(null==t?void 0:t.manualProjectRoot)&&(r=sdk_operations_1.operations[e],o=(0,getProjectRoot_1.getProjectRoot)(),r&&o)?[2/*return*/,fs_util_1.path.join(o,r)]:(n=(0,getPathsWithOperations_1.getPathsWithOperations)({manualProjectRoot:null==t?void 0:t.manualProjectRoot}),[4/*yield*/,(0,k_explore_1.exploreOperationFolders)({basePath:n})]);case 1:return 0===(a=l.sent()).length?((0,log_1.log)("No operations available",{type:"error"}),[2/*return*/]):[4/*yield*/,Promise.all(a.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){return[2/*return*/,{path:e,folderName:(0,fs_util_1.getLastFolder)(e)}]}))}))})))];case 2:return i=l.sent(),[2/*return*/,null===(u=i.find((function(t){return t.folderName===e})))||void 0===u?void 0:u.path]}}))}))};exports.getOperationPath=getOperationPath;
//# sourceMappingURL=getOperationPath.js.map