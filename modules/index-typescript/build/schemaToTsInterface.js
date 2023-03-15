"use strict";
/**
TODO:

Make sure the same interfaces don't get generated multiple times: when indexing a file, the file should only include interfaces from that file and interfaces from other packages, but not from relative imports. This should be fine because when you're using an operation, those relative imported types are indexed as well.

When generating a schema, also use ts-morph to get the AST for the interface so we can:

- find the interfaces an interface extends and its doccomment.
- get the raw type/interface text
*/var __awaiter=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var i,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(i=1,n&&(r=2&s[0]?n.return:s[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,s[1])).done)return r;switch(n=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){a.label=s[1];break}if(6===s[0]&&a.label<r[1]){a.label=r[1],r=s;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(s);break}r[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{i=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.schemaToTsInterface=void 0;var schema_util_1=require("schema-util"),convert_case_1=require("convert-case"),markdown_parse_js_1=require("markdown-parse-js"),js_util_1=require("js-util"),comment_util_1=require("comment-util"),getDbStorageMethod_1=require("./getDbStorageMethod"),get_path_1=require("get-path"),schemaToTsInterface=function(e,t,i,n){return __awaiter(void 0,void 0,void 0,(function(){var r,o,a,s,l,c,u,d,p,h,f,_,v,m,g,y,b;return __generator(this,(function(w){return r=null===(b=i.definitions)||void 0===b?void 0:b[t],(o=(0,get_path_1.findOperationBasePath)(e))?(a=i.definitions?Object.keys(i.definitions).map((function(e){var t,n=(0,schema_util_1.getSchema)(null===(t=i.definitions)||void 0===t?void 0:t[e]);return n?{name:e,schema:n}:null})).filter(js_util_1.notEmpty):[],(s="object"==typeof r?r:void 0)?(l=(0,markdown_parse_js_1.parseFrontmatterMarkdownString)((0,comment_util_1.stripComment)((null==n?void 0:n.description)||s.description||"")),c=l.parameters,u=c.operationRelativePath,d=c.projectRelativeStorageLocationFilePath,p=void 0===c.isOperationIndex?(null==n?void 0:n.extensions.includes("TsIndexModelType"))||!1:Boolean(c.isOperationIndex),h=(0,getDbStorageMethod_1.getDbStorageMethod)({typeName:t,frontmatter:c,extensions:null==n?void 0:n.extensions}),f=!!h,_=(0,convert_case_1.slugify)(t),v=(0,get_path_1.getOperationRelativePath)(e,o),m=!!(null==n?void 0:n.hasGeneric),g=!!(null==n?void 0:n.isExported),y=(0,schema_util_1.simplifySchema)(t,s,a,[]),[2/*return*/,{
// identifiers
id:_,name:t,slug:_,projectRelativeStorageLocationFilePath:d,operationRelativeTypescriptFilePath:v,hasGeneric:m,isExported:g,rawText:null==n?void 0:n.raw,extensions:null==n?void 0:n.extensions,isOperationIndex:p,operationStorageLocationRelativeFilePath:u?String(u):void 0,
// interface info
description:null==l?void 0:l.raw,dbStorageMethod:h,isDbModel:f,
// TODO:
commentsInside:[],type:{
// TODO: test
typeDefinition:s,simplifiedSchema:y,
// TODO:
typeCoverage:0,rawType:t,
// TODO:
isArray:!1,isEnum:!1,isEnumLiteral:!1,isObject:!1,isPrimitive:!1}}]):[2/*return*/,void 0]):[2/*return*/]}))}))};exports.schemaToTsInterface=schemaToTsInterface;
//# sourceMappingURL=schemaToTsInterface.js.map