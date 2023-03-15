"use strict";var __awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.operationToMarkdown=void 0;var js_util_1=require("js-util"),markdown_parse_js_1=require("markdown-parse-js"),fs_util_1=require("fs-util"),merge_1=require("./parsing/merge"),statementItemToMarkdown_1=require("./statementItemToMarkdown"),createMinimisedSection_1=require("./createMinimisedSection"),bundleFolderWithMarkdown_1=require("./bundleFolderWithMarkdown"),operationToMarkdown=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,t,r,o,i,a,c,s,l,d,u,m,p,_,f,v,w,h,k,M,S,b,g,y,T,j,I,x,P,z,F,q,D,C,E,J,L,O,W,G;return __generator(this,(function(N){switch(N.label){case 0:return n=e.operationSummary,t=n.classification,r=n.cliItems,o=n.coreDependenciesString,i=n.description,a=n.docs,c=n.externalItems,s=n.internalItems,l=n.operationDependenciesString,d=n.operationName,u=n.packageDependenciesString,m=n.size,p=n.testItems,_=n.operationFolderPath,f=e.returnType,(v=null==a?void 0:a.map((function(e){return(0,createMinimisedSection_1.createMinimizedSectionMarkdown)(e.content,e.relativePath)})))?[4/*yield*/,(0,bundleFolderWithMarkdown_1.bundleFolderWithMarkdown)("Docs",v,"docs")]:[3/*break*/,2];case 1:return h=N.sent(),[3/*break*/,3];case 2:h=void 0,N.label=3;case 3:return w=h,k="Size: ".concat(null===(J=null==m?void 0:m.codeSize)||void 0===J?void 0:J.lines," LOC, ").concat(void 0!==(null===(L=null==m?void 0:m.dataSize)||void 0===L?void 0:L.characters)?"".concat(null===(O=null==m?void 0:m.dataSize)||void 0===O?void 0:O.characters," data characters, "):"").concat(void 0!==(null===(W=null==m?void 0:m.textSize)||void 0===W?void 0:W.characters)?"".concat(null===(G=null==m?void 0:m.textSize)||void 0===G?void 0:G.characters," text characters, "):""),M="".concat(d," (`OperationClassification` ").concat(t,")\n\n").concat(i?"".concat(i,"\n\n"):""),S=e.includeInfo?"\n".concat(k,"\n \nImported dependencies:\n\n- From Core Libraries: ").concat(o,"\n- From Packages: ").concat(u,"\n- From Operations: ").concat(l):void 0,b=(0,markdown_parse_js_1.mdToJsonParse)(M,d),g=[r,p].map((function(e){return e.map(statementItemToMarkdown_1.statementItemToMarkdown).filter(js_util_1.notEmpty).join("\n\n")})),y=g[0],T=g[1],j=[c,s].map((function(e){return e.map(statementItemToMarkdown_1.statementItemToMarkdown).filter(js_util_1.notEmpty).join("\n\n")})),I=j[0],x=j[1],P=(0,markdown_parse_js_1.mdToJsonParse)(I,"api-reference"),z=S?(0,markdown_parse_js_1.mdToJsonParse)(S,"info"):void 0,F=(0,createMinimisedSection_1.createMinimizedSection)(x,"internal","Show internal (".concat(s.length,")")),q=(0,createMinimisedSection_1.createMinimizedSection)(T,"tests","Show test information(".concat(p.length,")")),D=(0,createMinimisedSection_1.createMinimizedSection)(y,"CLI","Show CLI information (".concat(r.length,")")),C=(0,merge_1.mergeMarkdownParse)([b,z,(null==e?void 0:e.includeDocs)?(0,markdown_parse_js_1.mdToJsonParse)((null==w?void 0:w.outlineString)||""):void 0,(null==e?void 0:e.includeDocs)?null==w?void 0:w.markdownParse:void 0,P,D,q,F].filter(js_util_1.notEmpty)).merged,E=void 0,"parse"!==f&&(E=(0,markdown_parse_js_1.markdownParseToMarkdownString)(C)),("save"===f||!f)&&E?[4/*yield*/,fs_util_1.fs.writeFile(fs_util_1.path.join(_,"readme.md"),E,"utf8")]:[3/*break*/,5];case 4:N.sent(),N.label=5;case 5:return[2/*return*/,"parse"===f?C:"string"===f?E:void 0]}}))}))};exports.operationToMarkdown=operationToMarkdown;
//# sourceMappingURL=operationToMarkdown.js.map