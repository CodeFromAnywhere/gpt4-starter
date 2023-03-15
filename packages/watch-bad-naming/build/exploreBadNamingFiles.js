"use strict";var __awaiter=this&&this.__awaiter||function(e,n,r,t){return new(r||(r=Promise))((function(o,a){function i(e){try{u(t.next(e))}catch(e){a(e)}}function l(e){try{u(t.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,l)}u((t=t.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var r,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(u){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(r=1,t&&(o=2&l[0]?t.return:l[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,l[1])).done)return o;switch(t=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,t=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],t=0}finally{r=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.exploreBadNamingFiles=void 0;var convert_case_1=require("convert-case"),filename_conventions_1=require("filename-conventions"),k_explore_1=require("k-explore"),isBadName_1=require("./isBadName"),exploreBadNamingFiles=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,r;return __generator(this,(function(t){switch(t.label){case 0:return[4/*yield*/,(0,k_explore_1.explore)({basePath:e,ignore:filename_conventions_1.generatedFolders})];case 1:return n=t.sent(),r=n.map((function(e){return e.path})).filter(isBadName_1.isBadName),console.log({filePaths:r.map((function(e){return{old:e,new:(0,convert_case_1.fileSlugify)(e)}}))}),[2/*return*/,r]}}))}))};exports.exploreBadNamingFiles=exploreBadNamingFiles;
//# sourceMappingURL=exploreBadNamingFiles.js.map