"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function s(e){try{u(n.next(e))}catch(e){o(e)}}function i(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,i)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=s.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},__rest=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.alterAny=exports.alterMarkdown=exports.alterKeyValueMarkdown=exports.alterJsonMultiple=exports.getLength=exports.alterJsonSingle=exports.alterCsv=exports.removeMultiple=exports.upsertItems=void 0;var frontmatter_util_1=require("frontmatter-util"),csv_util_1=require("csv-util"),fs_util_1=require("fs-util"),key_value_markdown_js_1=require("key-value-markdown-js"),log_1=require("log"),read_csv_file_1=require("read-csv-file"),read_json_file_1=require("read-json-file"),read_kvmd_file_1=require("read-kvmd-file"),read_markdown_file_1=require("read-markdown-file"),removeKeyValueMarkdown_1=require("./removeKeyValueMarkdown"),upsert_1=require("./upsert"),upsertKeyValueMarkdown_1=require("./upsertKeyValueMarkdown"),js_util_1=require("js-util"),storing_items_1=require("../convention/storing-items"),getAugmentedData_1=require("../util/getAugmentedData"),markdown_types_1=require("markdown-types"),upsertItems=function(e,t,r,n){return __awaiter(void 0,void 0,void 0,(function(){var a,o,s,i;return __generator(this,(function(u){
// Special case!
// TODO: we don't support multiple items for this case
return a=(0,js_util_1.makeArray)(r),"keyValueMarkdown"===e?(o=a[0],s=Object.keys(o).find((function(e){return e.startsWith("parent_")&&e.endsWith("Slug")})),i=s?o[s]:void 0,[2/*return*/,(0,exports.alterKeyValueMarkdown)(t,(function(e){
// NB: CategoryStack is overwritten! We are first making sure that categoryStack is a real existing categoryStack based on the parent_xxxSlug.
var t=e,r=i?t.find((function(e){return e.slug===i})):void 0,n=s?r?r.categoryStack.concat(r.slug):[]:o.categoryStack||[],a=__assign(__assign({},o),{categoryStack:n,isHeaderCalculated:void 0!==o.isHeaderCalculated&&o.isHeaderCalculated,comment:void 0===o.comment?null:o.comment});return(0,upsertKeyValueMarkdown_1.upsertKeyValueMarkdown)(t,a)}))]):[2/*return*/,(0,exports.alterAny)(e,t,(function(e){return(0,upsert_1.upsert)(e,a,n)}))]}))}))};exports.upsertItems=upsertItems;
/**
 * Function that lets you remove items from one specific file, for any storage method
 */
var removeMultiple=function(e,t,r){return __awaiter(void 0,void 0,void 0,(function(){var n,a,o;return __generator(this,(function(s){switch(s.label){case 0:return t.absolutePath,t.modelName,n=__rest(t,["absolutePath","modelName"]),"jsonSingle"===e||"markdown"===e?[4/*yield*/,(0,getAugmentedData_1.getAugmentedData)(t,e)]:[3/*break*/,4];case 1:return a=s.sent(),o=a?a[0]:null,fs_util_1.fs.existsSync(t.absolutePath)&&(0,fs_util_1.canWriteSync)(t.absolutePath)&&o&&r(o)?[4/*yield*/,fs_util_1.fs.rm(t.absolutePath)]:[3/*break*/,3];case 2:return s.sent(),[2/*return*/,{amountRemoved:1}];case 3:return[2/*return*/,{amountRemoved:0}];case 4:return"keyValueMarkdown"===e?[2/*return*/,(0,exports.alterKeyValueMarkdown)(t,(function(e){var t=e,a=t.reduce((function(e,t){var a=__assign(__assign({},t),n);return r(a)?(0,removeKeyValueMarkdown_1.removeKeyValueMarkdown)(e,a.slug).newStoredData:e;
// Otherwise it stays the same
}),t);return{newStoredData:a,isSuccesful:!0,amountRemoved:(0,exports.getLength)(e)-(0,exports.getLength)(a)}}))]:[2/*return*/,(0,exports.alterAny)(e,t,(function(e){var t=e.map((function(e){return __assign(__assign({},e),n)})),a=t.filter((function(e){return!r(e)})),o=a.map((function(e){return(0,storing_items_1.makeStoringItem)(e)}));return{amountRemoved:(0,exports.getLength)(e)-(0,exports.getLength)(a),allRemoved:0===(0,exports.getLength)(a),newStoredData:o,isSuccesful:!0}}))];
// otherwise, we'll remove the item from the array
}}))}))};exports.removeMultiple=removeMultiple;
/**
 * Alters a csv
 */
var alterCsv=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,a,o,s,i,u,l;return __generator(this,(function(_){switch(_.label){case 0:return r=e.absolutePath,[4/*yield*/,(0,read_csv_file_1.readCsvFile)(r)];case 1:return n=_.sent()||[],a=!n,o=t(n),s=o.newStoredData,i=__rest(o,["newStoredData"]),0===s.length&&n?[4/*yield*/,fs_util_1.fs.rm(r)]:[3/*break*/,3];
// NB: if new array is empty, just remove the file
case 2:
// NB: if new array is empty, just remove the file
return _.sent(),[2/*return*/,i];case 3:return u=(0,csv_util_1.csvItemArrayToCsvString)(s),[4/*yield*/,(0,fs_util_1.writeStringToFile)(r,u)];case 4:return(l=_.sent())?[2/*return*/,__assign({isNewFile:a,isSuccesful:l},i)]:[2/*return*/,{isSuccesful:l,message:"Could not write to file"}]}}))}))};exports.alterCsv=alterCsv;
/**
 * Alters a json single file
 */
var alterJsonSingle=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,a,o,s,i,u;return __generator(this,(function(l){switch(l.label){case 0:return r=e.absolutePath,[4/*yield*/,(0,read_json_file_1.readJsonFile)(e.absolutePath)];case 1:return n=l.sent(),a=!n,o=t(n?[n]:[]),s=o.newStoredData,i=__rest(o,["newStoredData"]),[4/*yield*/,(0,fs_util_1.writeJsonToFile)(r,s[0])];case 2:return(u=l.sent())?[2/*return*/,__assign({isNewFile:a,isSuccesful:u},i)]:[2/*return*/,{isSuccesful:u,message:"Could not write to file"}]}}))}))};exports.alterJsonSingle=alterJsonSingle;
/**
 * Safely gets the length of something
 */
var getLength=function(e){return Array.isArray(e)?e.length:((0,log_1.log)("Array is not array",{type:"error"},{array:e}),0)};exports.getLength=getLength;
/**
 * Alters a json multiple file
 */
var alterJsonMultiple=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,a,o,s,i,u;return __generator(this,(function(l){switch(l.label){case 0:return r=e.absolutePath,[4/*yield*/,(0,read_json_file_1.readJsonFile)(e.absolutePath)];case 1:return n=l.sent(),a=!n,o=t(n||[]),s=o.newStoredData,i=__rest(o,["newStoredData"]),0===s.length&&n?[4/*yield*/,fs_util_1.fs.rm(r)]:[3/*break*/,3];
// NB: if new stored data is an empty array, just remove the file
case 2:
// NB: if new stored data is an empty array, just remove the file
return l.sent(),[2/*return*/,__assign({isNewFile:!1},i)];case 3:return[4/*yield*/,(0,fs_util_1.writeJsonToFile)(r,s)];case 4:return(u=l.sent())?[2/*return*/,__assign({isNewFile:a,isSuccesful:u},i)]:[2/*return*/,{isSuccesful:u,message:"Could not write to file"}]}}))}))};exports.alterJsonMultiple=alterJsonMultiple;var alterKeyValueMarkdown=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,a,o,s,i,u,l,_,c;return __generator(this,(function(d){switch(d.label){case 0:return r=e.absolutePath,[4/*yield*/,(0,read_kvmd_file_1.readKvmdFile)(r,e)];case 1:return n=d.sent(),a=!n,o=(null==n?void 0:n.data)||[],s=t(o),i=s.newStoredData,u=__rest(s,["newStoredData"]),l={parameters:(null==n?void 0:n.parameters)||{},data:i},_=(0,key_value_markdown_js_1.kvmdParseToMarkdownString)(l),[4/*yield*/,(0,fs_util_1.writeStringToFile)(r,_)];case 2:return(c=d.sent())?[2/*return*/,__assign({isNewFile:a,isSuccesful:c},u)]:[2/*return*/,{isSuccesful:c,message:"Could not write to file"}]}}))}))};exports.alterKeyValueMarkdown=alterKeyValueMarkdown;
/**
 * Alters a markdown file
 */
var alterMarkdown=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,a,o,s,i,u,l,_,c;return __generator(this,(function(d){switch(d.label){case 0:return r=e.absolutePath,[4/*yield*/,(0,read_markdown_file_1.readMarkdownFile)(r)];case 1:return n=d.sent(),a=!n,o=(0,markdown_types_1.markdownParseToMarkdownModelType)(n),s=t(o?[o]:[]),i=s.newStoredData,u=__rest(s,["newStoredData"]),l=i[0],_=(0,frontmatter_util_1.markdownModelTypeToMarkdownString)(l),[4/*yield*/,(0,fs_util_1.writeStringToFile)(r,_)];case 2:return(c=d.sent())?[2/*return*/,__assign({isNewFile:a,isSuccesful:c},u)]:[2/*return*/,{isSuccesful:c,message:"Could not write to file"}]}}))}))};exports.alterMarkdown=alterMarkdown;
/**
 * low level function that alters data from any storage method at a certain location
 *
 * comprises all dbStorageMethods
 */
var alterAny=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(r){return"csv"===e?[2/*return*/,exports.alterCsv.apply(void 0,t)]:"jsonSingle"===e?[2/*return*/,exports.alterJsonSingle.apply(void 0,t)]:"keyValueMarkdown"===e?(
// this case never happens, this is never the case
(0,log_1.log)("Wut??? this case should be prevented by its parent function",{type:"warning"}),[2/*return*/,exports.alterKeyValueMarkdown.apply(void 0,t)]):"markdown"===e?[2/*return*/,exports.alterMarkdown.apply(void 0,t)]:[2/*return*/,exports.alterJsonMultiple.apply(void 0,t)]}))}))};exports.alterAny=alterAny;
//# sourceMappingURL=alter-functions.js.map