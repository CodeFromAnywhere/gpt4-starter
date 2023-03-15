"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAllFoldersUntilFolder=void 0;var js_util_1=require("js-util"),getAllFoldersUntilFolder=function(e){var l=(0,js_util_1.trimSlashes)(e).split("/").map((function(e,l,t){return"/"+t.slice(0,l+1).join("/")}));
// chunks = ['a', 'random', 'path']
return l.unshift("/"),l};
/**
 * NB: I already have this somewhere else but couldn't find it!
 *
 * If the path is /a/random/path
 *
 * The result of this function will be:
 *
 * ['/a', '/a/random', '/a/random/path']
 *
 * Can also be a relative path, but then there will be a slash prepended, so not optimal.
 */exports.getAllFoldersUntilFolder=getAllFoldersUntilFolder;
//# sourceMappingURL=getAllFoldersUntilFolder.js.map