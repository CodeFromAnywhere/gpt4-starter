"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function u(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getOperationSummary=void 0;var get_path_1=require("get-path"),log_1=require("log"),database_1=require("database"),js_util_1=require("js-util"),fs_util_1=require("fs-util"),isConventionFileStatement_1=require("./isConventionFileStatement"),addDependantCount_1=require("./addDependantCount"),getMarkdownContents_1=require("./getMarkdownContents"),getOperationSummary=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r,o,a,i,u,s,l,d,c,p,f,_,m,g,v,b,h,y,x,w,C,D,S,F,j,I,P,k,q,O,N,E,M;return __generator(this,(function(T){switch(T.label){case 0:return t=e.manualProjectRoot,n=e.operationName,t||(0,get_path_1.getProjectRoot)()?[4/*yield*/,(0,get_path_1.getOperationPath)(n,{manualProjectRoot:t})]:((0,log_1.log)("Projectroot not found",{type:"error"}),[2/*return*/]);case 1:return(r=T.sent())?[4/*yield*/,database_1.db.get("Operation",{operationName:n})]:((0,log_1.log)("OperationFolder not found",{type:"error"}),[2/*return*/]);case 2:return(o=T.sent()[0])?(a=null===(j=o.operation)||void 0===j?void 0:j.markdown,i=(0,js_util_1.noEmptyString)(null===(P=null===(I=o.operation)||void 0===I?void 0:I.coreDependenciesIndexed)||void 0===P?void 0:P.join(", "))||"none",u=(0,js_util_1.noEmptyString)(null===(q=null===(k=o.operation)||void 0===k?void 0:k.operationDependenciesIndexed)||void 0===q?void 0:q.join(", "))||"none",s=(0,js_util_1.noEmptyString)(null===(N=null===(O=o.operation)||void 0===O?void 0:O.packageDependenciesIndexed)||void 0===N?void 0:N.join(", "))||"none",l=fs_util_1.path.join(r,"docs"),[4/*yield*/,(0,getMarkdownContents_1.getMarkdownContents)(l)]):((0,log_1.log)("Operation not found",{type:"error"}),[2/*return*/]);case 3:return d=T.sent(),[4/*yield*/,database_1.db.get("TsImport")];case 4:return c=T.sent().filter((function(e){return e.operationName!==n})),[4/*yield*/,database_1.db.get("TsFunction",{operationName:n})];case 5:return p=T.sent().filter((0,js_util_1.onlyUnique2)((function(e,t){return e.name===t.name}))),f=p.filter((function(e){return e.isExported})),[4/*yield*/,database_1.db.get("TsVariable",{operationName:n})];case 6:return _=T.sent(),m=_.filter((function(e){return e.isExported})),[4/*yield*/,database_1.db.get("TsInterface",{operationName:n})];case 7:return g=T.sent().filter((function(e){return!e.name.startsWith("NamedParameters<")})),v=g.filter((function(e){return e.isExported})),[4/*yield*/,Promise.all(f.map((0,addDependantCount_1.addDependantCount)("tsFunction",c)))];case 8:return b=T.sent(),[4/*yield*/,Promise.all(v.map((0,addDependantCount_1.addDependantCount)("tsInterface",c)))];case 9:return h=T.sent(),[4/*yield*/,Promise.all(m.map((0,addDependantCount_1.addDependantCount)("tsVariable",c)))];case 10:return y=T.sent(),x=[b,h,y].flat().sort((function(e,t){return e.externalDependantFiles.length>t.externalDependantFiles.length?-1:1})),w=x.filter((function(e){return e.externalDependantFiles.length>0})),C=x.filter((function(e){return 0===e.externalDependantFiles.length})),D=[p.map((function(e){return{tsFunction:e}})),g.map((function(e){return{tsInterface:e}})),_.map((function(e){return{tsVariable:e}}))].flat(),S=D.filter((function(e){return(0,isConventionFileStatement_1.isConventionFileStatement)(e.tsFunction||e.tsInterface||e.tsVariable,"test")})),F=D.filter((function(e){return(0,isConventionFileStatement_1.isConventionFileStatement)(e.tsFunction||e.tsInterface||e.tsVariable,"cli")})),[2/*return*/,{operationFolderPath:r,operationName:n,classification:null===(E=o.operation)||void 0===E?void 0:E.classificationIndexed,description:a,size:null===(M=o.operation)||void 0===M?void 0:M.sizeIndexed,coreDependenciesString:i,operationDependenciesString:u,packageDependenciesString:s,docs:d,cliItems:F,testItems:S,internalItems:C,externalItems:w}]}}))}))};exports.getOperationSummary=getOperationSummary;
//# sourceMappingURL=getOperationSummary.js.map