"use strict";var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function s(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}u((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.indexImportsExportsForFilePath=void 0;var get_imports_exports_1=require("get-imports-exports"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),indexImportsExportsForFilePath=function(t,e){return __awaiter(void 0,void 0,void 0,(function(){var t,r;return __generator(this,(function(n){switch(n.label){case 0:return t=fs_util_1.path.parse(e).name,process.stdout.write("Change detected: ".concat(t,"\n")),(r=(0,get_path_1.findOperationBasePath)(e))?(process.stdout.write("Indexing operation imports ..."),[4/*yield*/,(0,get_imports_exports_1.findAndWriteImportsExports)(r)]):(console.log("\nCouldn't find operationBasePath"),[2/*return*/]);case 1:return n.sent(),console.log("✅\n"),[2/*return*/]}}))}))};exports.indexImportsExportsForFilePath=indexImportsExportsForFilePath,exports.indexImportsExportsForFilePath.filter=function(){return!1};
//# sourceMappingURL=indexImportsExportsForFilePath.js.map