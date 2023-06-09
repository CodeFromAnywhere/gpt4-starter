#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,n,r,t){return new(r||(r=Promise))((function(o,i){function a(e){try{s(t.next(e))}catch(e){i(e)}}function u(e){try{s(t.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,u)}s((t=t.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var r,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(s){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(r=1,t&&(o=2&u[0]?t.return:u[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,u[1])).done)return o;switch(t=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,t=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(e){u=[6,e],t=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}},__spreadArray=this&&this.__spreadArray||function(e,n,r){if(r||2===arguments.length)for(var t,o=0,i=n.length;o<i;o++)!t&&o in n||(t||(t=Array.prototype.slice.call(n,0,o)),t[o]=n[o]);return e.concat(t||Array.prototype.slice.call(n))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.findDependantsRecursively=exports.findDependants=exports.getDependencyObject=exports.findAllDependencyOperations=exports.findDependenciesRecursively=exports.findMonorepoModules=void 0;var js_util_1=require("js-util"),database_1=require("database"),k_explore_1=require("k-explore"),fs_util_1=require("fs-util"),one_by_one_1=require("one-by-one"),findMonorepoModules=function(e,n){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(t){return r=e.filter((function(e){return e.operationName===n})),[2/*return*/,r.map((function(e){return e.isModuleFromMonorepo&&e.isModuleResolved?e.module:null})).filter(js_util_1.notEmpty).filter(js_util_1.onlyUnique)]}))}))};exports.findMonorepoModules=findMonorepoModules;
/**
 * finds all dependencies of an operation name
 */
var findDependenciesRecursively=function(
/**
 * all imports
 */
e,n,r,
/**
 * skip recursing on these ones because they are already found
 */
t,o,i){return __awaiter(void 0,void 0,void 0,(function(){var a,u,s,l,c,d,p,f,_;return __generator(this,(function(v){switch(v.label){case 0:return(null==o?void 0:o.includes(r))?[2/*return*/,[]]:(a=n.find((function(e){return e.operationName===r})))?(u=(null===(_=a.operation)||void 0===_?void 0:_.indirectDependencies)||[],s=function(e){return!(null==o?void 0:o.includes(e))&&(!i||i(e))},l=e.filter((function(e){return e.operationName===r})),c=l.map((function(e){return e.isModuleFromMonorepo&&e.isModuleResolved?e.module:null})).filter(js_util_1.notEmpty).filter(s).concat(u),d=t.concat(c).filter(js_util_1.onlyUnique),p=c.filter((function(e){return!(null==t?void 0:t.includes(e))})).map((function(r){return(0,exports.findDependenciesRecursively)(e,n,r,d,o)})),[4/*yield*/,Promise.all(p)]):(console.log("WARN: couldn't find packagejson ".concat(r,". weird...")),[2/*return*/,[]]);case 1:return f=v.sent().flat(),[2/*return*/,c.concat(f)]}}))}))};exports.findDependenciesRecursively=findDependenciesRecursively;
/**
 * to be used when you need to know all dependencies for multiple operation names at once
 *
 * TODO: NB: this breaks with circular dependencies
 */
var findAllDependencyOperations=function(e){var n=e.imports,r=e.operations,t=e.operationNames,o=e.ignoreOperationNames,i=e.ignoreFilter;return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4/*yield*/,(0,one_by_one_1.oneByOne)(t,(function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(a){return process.stdout.write("".concat(e," ... ")),[2/*return*/,(0,exports.findDependenciesRecursively)(n,r,e,t,o,i)]}))}))}))];case 1:return[2/*return*/,e.sent().flat().filter(js_util_1.onlyUnique)]}}))}))};exports.findAllDependencyOperations=findAllDependencyOperations;
// findAllDependencyOperations(["fs-orm"]).then(console.log);
// how do I get a format like this?
// const x = {
//   "fs-orm": ["js-util"],
//   "js-util": [],
// }
var getDependencyObject=function(){return __awaiter(void 0,void 0,void 0,(function(){var e,n,r;return __generator(this,(function(t){switch(t.label){case 0:return[4/*yield*/,(0,k_explore_1.exploreOperationFolders)({})];case 1:return e=t.sent(),[4/*yield*/,database_1.db.get("TsImport")];case 2:return n=t.sent(),r=js_util_1.mergeObjectsArray,[4/*yield*/,Promise.all(e.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,t,o;return __generator(this,(function(i){switch(i.label){case 0:return r=(0,fs_util_1.getLastFolder)(e),[4/*yield*/,(0,exports.findMonorepoModules)(n,r)];case 1:return t=i.sent(),[2/*return*/,(o={},o[r]=t,o)]}}))}))})))];case 3:return[2/*return*/,r.apply(void 0,[t.sent()])]}}))}))};exports.getDependencyObject=getDependencyObject;
/**
 * finds all dependants of an operation or a specific import from that operation
 *
 * normally returns the files where the operation or function is used, unless you specify to return the operationNames only.
 */
var findDependants=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,r,t,o,i,a,u;return __generator(this,(function(s){switch(s.label){case 0:return n=e.operationName,r=e.importName,t=e.returnOperationName,o=e.imports,i=e.onlyExternal,a=t?"operationName":"projectRelativePath",(u=o)?[3/*break*/,2]:[4/*yield*/,database_1.db.get("TsImport")];case 1:u=s.sent(),s.label=2;case 2:return[2/*return*/,u.filter((function(e){return e.module===n})).filter((function(e){return!r||e.name===r})).filter((function(e){return!i||e.isAbsolute&&e.operationName!==n})).map((function(e){return e.isModuleFromMonorepo&&e.isModuleResolved?e[a]:null})).filter(js_util_1.notEmpty).filter(js_util_1.onlyUnique)]}}))}))};exports.findDependants=findDependants;
// findDependants({
//   operationName: "js-util",
//   importName: "notEmpty",
//   returnOperationName: false,
// }).then(console.log);
var findDependantsRecursively=function(e,n){return __awaiter(void 0,void 0,void 0,(function(){var r,t,o,i;return __generator(this,(function(a){switch(a.label){case 0:return[4/*yield*/,(0,exports.findDependants)({returnOperationName:!0,operationName:e})];case 1:return r=a.sent(),t=__spreadArray(__spreadArray([e],r,!0),n||[],!0),r.length>0?[4/*yield*/,Promise.all(r.map((function(e){return(0,exports.findDependantsRecursively)(e,t)})))]:[3/*break*/,3];case 2:return i=a.sent().flat(),[3/*break*/,4];case 3:i=[],a.label=4;case 4:return o=i,[2/*return*/,__spreadArray(__spreadArray([],t,!0),o,!0).filter((0,js_util_1.onlyUnique2)())]}}))}))};exports.findDependantsRecursively=findDependantsRecursively;
//# sourceMappingURL=findAllDependencyOperations.js.map