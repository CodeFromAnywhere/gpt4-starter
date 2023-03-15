"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{u(o.next(e))}catch(e){r(e)}}function l(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}u((o=o.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(a=0)),a;)try{if(n=1,o&&(i=2&l[0]?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,o=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){a.label=l[1];break}if(6===l[0]&&a.label<i[1]){a.label=i[1],i=l;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(l);break}i[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],o=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFileCollectionStatusWithContext=void 0;var database_1=require("database"),fs_util_js_1=require("fs-util-js"),get_path_1=require("get-path"),read_json_file_1=require("read-json-file"),getFileCollectionPathsWithContext_1=require("./getFileCollectionPathsWithContext"),getFileCollectionStatusWithContext=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var n,o,i,r,a,l,u,s;return __generator(this,(function(c){switch(c.label){case 0:return(n=(0,get_path_1.getProjectRoot)())?[4/*yield*/,(0,getFileCollectionPathsWithContext_1.getFileCollectionPathsWithContext)(e,t)]:[2/*return*/,{isSuccessful:!1,message:"No project root"}];case 1:return(o=c.sent()).absoluteFileCollectionPaths?(i=o.absoluteFileCollectionPaths.find((function(e){return e.endsWith(".ActionStatus.json")})))?[4/*yield*/,(0,read_json_file_1.readJsonFile)(i)]:[3/*break*/,3]:[2/*return*/,{isSuccessful:!1,message:"No file collection"}];case 2:return a=c.sent(),[3/*break*/,4];case 3:a=null,c.label=4;case 4:return r=a,[4/*yield*/,database_1.db.get("Queue")];case 5:return l=c.sent(),u=l.filter((function(e){var t;return!!(null===(t=o.absoluteFileCollectionPaths)||void 0===t?void 0:t.map((function(e){return(0,fs_util_js_1.makeRelative)(e,n)})).find((function(t){return e.projectRelativePath===t})))})),s=r?r.status:u.length>0?"queue":"done",[2/*return*/,{isSuccessful:!0,actionStatus:r,queue:u.length>0?u:void 0,status:s}]}}))}))};exports.getFileCollectionStatusWithContext=getFileCollectionStatusWithContext;
//# sourceMappingURL=getFileCollectionStatusWithContext.js.map