"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMarkdownIndex=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),frontmatter_util_1=require("frontmatter-util"),fs_util_2=require("fs-util"),read_json_file_1=require("read-json-file"),getMarkdownIndexPath_1=require("./getMarkdownIndexPath"),markdownindex_json_1=__importDefault(require("markdown-types/db/ts-interfaces/markdownindex.json")),getMarkdownIndex=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,a,i,o,s,u,l,_,c,f,d;return __generator(this,(function(h){switch(h.label){case 0:return(t=(0,get_path_1.getProjectRoot)())?(r=fs_util_1.path.join(t,e),[4/*yield*/,fs_util_1.fs.stat(r)]):[2/*return*/];case 1:return n=h.sent(),a=n.isDirectory(),i=fs_util_1.path.parse(r),o=".md"===i.ext,a?[4/*yield*/,(0,fs_util_1.returnReadmePathFromFolder)(r)]:[3/*break*/,3];case 2:return u=h.sent(),[3/*break*/,4];case 3:u=r,h.label=4;case 4:return(s=u)?(l=(0,getMarkdownIndexPath_1.getMarkdownIndexPath)(s,!0),o?[4/*yield*/,(0,fs_util_2.readFrontmatter)(s)]:[3/*break*/,6]):[2/*return*/];case 5:return c=h.sent(),[3/*break*/,7];case 6:c=void 0,h.label=7;case 7:return f=(_=c)?(0,frontmatter_util_1.frontmatterToObject)(_,markdownindex_json_1.default.type.simplifiedSchema):null,[4/*yield*/,(0,read_json_file_1.readJsonFile)(l)];case 8:return(d=h.sent())||f?[2/*return*/,__assign(__assign({},f),d)]:[2/*return*/]}}))}))};exports.getMarkdownIndex=getMarkdownIndex;
//# sourceMappingURL=getMarkdownIndex.js.map