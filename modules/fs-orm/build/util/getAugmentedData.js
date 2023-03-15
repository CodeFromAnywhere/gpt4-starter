"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(a,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function o(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(s,o)}l((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(s=0)),s;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(a=s.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1],a=o;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(o);break}a[2]&&s.ops.pop(),s.trys.pop();continue}o=r.call(e,s)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},__rest=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAugmentedData=void 0;var js_util_1=require("js-util"),fs_util_1=require("fs-util"),read_json_file_1=require("read-json-file"),read_csv_file_1=require("read-csv-file"),read_markdown_file_1=require("read-markdown-file"),key_value_markdown_js_1=require("key-value-markdown-js"),convert_case_1=require("convert-case"),log_1=require("log"),pluralize_1=require("pluralize"),fs_util_js_1=require("fs-util-js"),js_util_2=require("js-util"),getAugmentedData=function(e,r){return __awaiter(void 0,void 0,void 0,(function(){var t,n,a,i,s,o,l,u,_,c,f,d,p,g,v,h,m,y,w,b,j;return __generator(this,(function(k){switch(k.label){case 0:return t=e.absolutePath,n=e.modelName,a=__rest(e,["absolutePath","modelName"]),i=fs_util_1.path.parse(t),s="markdown"===r||"jsonSingle"===r,o=!!a.operationRelativePath,u=(l=s&&!o)?(0,convert_case_1.slugify)(i.name):void 0,!l||u===i.name||(0,log_1.log)("".concat(i.name," is not a valid (slugified) filename"),{type:"warning"}),_=a.operationRelativePath||a.projectRelativePath,c="db/".concat((0,pluralize_1.pluralize)((0,convert_case_1.kebabCase)(n))),f=(0,fs_util_js_1.makeRelative)((0,js_util_2.trimSlashes)(_),c),
// remove the name
(d=f.split("/")).pop(),p=d,g=l?{name:u,slug:u,categoryStack:p}:void 0,".json"!==(v=i.ext)?[3/*break*/,2]:[4/*yield*/,(0,read_json_file_1.readJsonFile)(t)];case 1:return h=k.sent(),m=h?(0,js_util_1.makeArray)(h):null,[2/*return*/,m?m.map((function(e){return __assign(__assign(__assign({},e),a),g)})):null];case 2:return".csv"!==v?[3/*break*/,4]:[4/*yield*/,(0,read_csv_file_1.readCsvFile)(t)];case 3:return(y=k.sent())?[2/*return*/,y.map((function(e){return __assign(__assign({},e),a)}))]:[2/*return*/,null];case 4:return".md"!==v?[3/*break*/,6]:[4/*yield*/,(0,read_markdown_file_1.readMarkdownFile)(t)];case 5:return(w=k.sent())?(b=null==w?void 0:w.parameters,"markdown"===r?[2/*return*/,[__assign(__assign(__assign(__assign({},b),{markdown:w.raw}),a),g)]]:(j=(0,key_value_markdown_js_1.markdownStringToKvmdParse)(w.raw,e),[2/*return*/,j.data])):[2/*return*/,null];case 6:return[2/*return*/,null]}}))}))};exports.getAugmentedData=getAugmentedData;
//# sourceMappingURL=getAugmentedData.js.map