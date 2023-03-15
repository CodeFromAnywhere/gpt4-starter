"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(a,s){function i(t){try{u(n.next(t))}catch(t){s(t)}}function o(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,o)}u((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var r,n,a,s,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(i=0)),i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateFrontmatterWithContext=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),read_markdown_file_1=require("read-markdown-file"),markdown_parse_js_1=require("markdown-parse-js"),fs_authorization_1=require("fs-authorization"),updateFrontmatterWithContext=function(t,e,r){return __awaiter(void 0,void 0,void 0,(function(){var n,a,s,i,o,u,l,c,_,f,p,h;return __generator(this,(function(d){switch(d.label){case 0:return(n=(0,get_path_1.getProjectRoot)())?(a=fs_util_1.path.join(n,e),fs_util_1.fs.existsSync(a)?[4/*yield*/,(0,fs_authorization_1.getFsAuthorizationWithContext)(t,e)]:[2/*return*/,{isSuccessful:!1,message:"File/folder doensn't exist"}]):[2/*return*/,{isSuccessful:!1,message:"No projectroot"}];case 1:return d.sent().canWrite?[4/*yield*/,fs_util_1.fs.stat(a)]:[2/*return*/,{isSuccessful:!1,message:"You're not allowed to do this"}];case 2:return s=d.sent(),i=s.isDirectory(),o=i?fs_util_1.path.join(a,"readme.md"):a,(u=fs_util_1.fs.existsSync(o))?[4/*yield*/,(0,read_markdown_file_1.readMarkdownFile)(o)]:[3/*break*/,4];case 3:return c=d.sent(),[3/*break*/,5];case 4:c=null,d.label=5;case 5:return l=c,_=u&&(null==l?void 0:l.parameters)||{},f=__assign(__assign({},_),r),p=l?__assign(__assign({},l),{parameters:f}):{parameters:f,raw:""},h=(0,markdown_parse_js_1.markdownParseToMarkdownString)(p),[4/*yield*/,fs_util_1.fs.writeFile(o,h,"utf8")];case 6:return d.sent(),[2/*return*/,{isSuccessful:!0,message:"Updated"}]}}))}))};exports.updateFrontmatterWithContext=updateFrontmatterWithContext;
//# sourceMappingURL=updateFrontmatterWithContext.js.map