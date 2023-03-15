"use strict";var __awaiter=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))((function(a,n){function i(e){try{u(r.next(e))}catch(e){n(e)}}function l(e){try{u(r.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var o,r,a,n,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return n={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function l(l){return function(u){return function(l){if(o)throw new TypeError("Generator is already executing.");for(;n&&(n=0,l[0]&&(i=0)),i;)try{if(o=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{o=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDbFileLocation=void 0;var fs_util_js_1=require("fs-util-js"),fs_util_1=require("fs-util"),getLocationPattern_1=require("./getLocationPattern"),log_1=require("log"),getDatabaseRootFolder_1=require("./getDatabaseRootFolder"),getDbFileLocation=function(
/**
 * The ModelLocation properties in the item are completely ignored.
 *
 * Only the ID, slug and categoryStack are used to determine the exact file the item should be stored in.
 *
 * NB: storedItem MUST have a slug or ID, but this should probably be generated before this funciton
 */
e,
/**
 * Should be the operationName from the modellocation of the actual item.
 *
 * If it is given, this will take priority over the merged query config.
 */
t,o,r){return __awaiter(void 0,void 0,void 0,(function(){var a,n,i,l,u,c,s,f,_,p,d,h,b;return __generator(this,(function(g){switch(g.label){case 0:return(a=o.manualProjectRoot||o.projectRoot)?(n=t||o.operationName,[4/*yield*/,(0,getDatabaseRootFolder_1.getDatabaseRootFolder)(n,o.manualProjectRoot)]):((0,log_1.log)("No project root",{type:"error"}),[2/*return*/]);case 1:return(i=g.sent())?(l="jsonSingle"===o.dbStorageMethod||"markdown"===o.dbStorageMethod,u=e.slug||e.id,c=null===(b=null===(h=e.categoryStack)||void 0===h?void 0:h.join)||void 0===b?void 0:b.call(h,"/"),s=l&&c?fs_util_1.path.join(c,u):u,(f=(0,getLocationPattern_1.getLocationPattern)(o.dbStorageMethod,r,o))&&(_=fs_util_1.path.join(i,f.replace("*",s)))?(p=(0,fs_util_js_1.makeRelative)(_,i),d=(0,fs_util_js_1.makeRelative)(_,a),[2/*return*/,{modelName:r,absolutePath:_,operationName:n||null,projectRelativePath:d,operationRelativePath:p}]):[2/*return*/]):[2/*return*/]}}))}))};exports.getDbFileLocation=getDbFileLocation;
//# sourceMappingURL=getDbFileLocation.js.map