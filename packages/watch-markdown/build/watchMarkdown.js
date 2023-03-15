"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.watchMarkdown=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),makeMarkdownIndex_1=require("./makeMarkdownIndex"),watchMarkdown=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return fs_util_1.fs.existsSync(t)?[4/*yield*/,(0,makeMarkdownIndex_1.makeMarkdownIndex)(t)]:[2/*return*/,{isSuccessful:!1,message:"File doesn't exist (anymore)"}];case 1:return e.sent(),[2/*return*/]}}))}))};exports.watchMarkdown=watchMarkdown,exports.watchMarkdown.startupStrategy="ignore",
/**
 * filter to only get all add/change for any .md file that doesn't have a [file].MarkdownIndex.json
 */
exports.watchMarkdown.filter=function(e,t){
// for now disable it for a while
if("add"!==e)return!1;var r=(0,get_path_1.getProjectRoot)();if(!r)return!1;if(!t.startsWith(r))return!1;var n=fs_util_1.path.parse(t);
// no correct extension
if(".md"!==n.ext)return!1;var a=fs_util_1.path.join(n.dir,"".concat(n.name,".MarkdownIndex.json"));return fs_util_1.fs.existsSync(a),!0;
// a markdown not indexed yet!
},exports.watchMarkdown.config={isInternetRequired:!0,isHeavy:!1,isBrowserRequired:!1,isDisabled:!1};
//# sourceMappingURL=watchMarkdown.js.map