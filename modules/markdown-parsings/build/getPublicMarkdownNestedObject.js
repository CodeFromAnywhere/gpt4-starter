"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPublicMarkdownNestedPathObject=void 0;var js_util_1=require("js-util"),docs_get_pages_1=require("docs-get-pages"),fs_util_js_1=require("fs-util-js"),getPublicMarkdownNestedPathObject=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r;return __generator(this,(function(n){switch(n.label){case 0:return[4/*yield*/,(0,docs_get_pages_1.getPublicMarkdownFilePaths)(e,!0)];case 1:return t=n.sent().map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,a;return __generator(this,(function(o){switch(o.label){case 0:return t=(0,fs_util_js_1.getFolderJs)((0,docs_get_pages_1.removeExtensionsFromPath)(e.path)),e.isFolder?[4/*yield*/,(0,exports.getPublicMarkdownNestedPathObject)(e.path)]:[3/*break*/,2];case 1:return n=o.sent(),[3/*break*/,3];case 2:n=e.path,o.label=3;case 3:return r=n,[2/*return*/,(a={},a[t]=r,a)]}}))}))})),r=js_util_1.mergeObjectsArray,[4/*yield*/,Promise.all(t)];case 2:return[2/*return*/,r.apply(void 0,[n.sent()])]}}))}))};exports.getPublicMarkdownNestedPathObject=getPublicMarkdownNestedPathObject;
//# sourceMappingURL=getPublicMarkdownNestedObject.js.map