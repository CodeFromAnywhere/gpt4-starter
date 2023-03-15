"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getOnlyUniqueFileCollectionsFromDirentsFilter=exports.onlyUniqueFileCollectionsFilter=exports.isFileCollection=exports.getFileCollectionBasename=void 0;var fs_util_1=require("fs-util"),fs_util_js_1=require("fs-util-js"),js_util_1=require("js-util"),getFileCollectionBasename=function(e){return(0,fs_util_js_1.withoutSubExtensions)(fs_util_1.path.parse(e).base)};exports.getFileCollectionBasename=getFileCollectionBasename;var isFileCollection=function(e,i){return fs_util_1.path.parse(e).dir===fs_util_1.path.parse(i).dir&&(0,exports.getFileCollectionBasename)(e)===(0,exports.getFileCollectionBasename)(i)};exports.isFileCollection=isFileCollection;
/**
filter for absolute file paths to get unique file collections
 */
var onlyUniqueFileCollectionsFilter=function(e,i,l){return(0,js_util_1.onlyUnique2)(exports.isFileCollection)(e,i,l)};exports.onlyUniqueFileCollectionsFilter=onlyUniqueFileCollectionsFilter;
/**
 Returns a filter function
 
 Usage:
 
 ```ts
 dirents.filter(getOnlyUniqueFileCollectionsFromDirentsFilter(absolutePath))
 ```

 */
var getOnlyUniqueFileCollectionsFromDirentsFilter=function(e){return function(i,l,t){return(0,js_util_1.onlyUnique2)((function(i,l){
// if (a.isDirectory() || b.isDirectory()) {
//   // NB: directories are always unique, so should return false for the isEqualFunction
// NB: not working! :S
//   return false;
// }
return(0,exports.isFileCollection)(fs_util_1.path.join(e,i.name),fs_util_1.path.join(e,l.name))}))(i,l,t)}};exports.getOnlyUniqueFileCollectionsFromDirentsFilter=getOnlyUniqueFileCollectionsFromDirentsFilter;
//# sourceMappingURL=isFileCollection.js.map