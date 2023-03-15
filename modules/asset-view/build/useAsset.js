"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useAsset=exports.getSrc=void 0;var asset_functions_js_1=require("asset-functions-js"),server_api_url_1=require("server-api-url"),path_browserify_1=__importDefault(require("path-browserify")),useAssetInfo_1=require("./useAssetInfo"),getSrc=function(e,t,r){
// console.log({ apiUrl });
/**
     * NB: `relativePath` is required
     */
var s,o=function(r){return(0,asset_functions_js_1.getReferencedAssetApiUrl)(server_api_url_1.apiUrl,t,e.relativePath,r)},a=e.absoluteUrl?e.absoluteUrl:e.blobPath?e.blobPath:// : isNextStaticProductionBuild && asset.relativePath
// ? getPublicUrl(asset.relativePath)
o(!1),i=!e.blobPath&&!!e.relativePath;
/**
     * DEPRECATED
     */return{src:a,downloadUrl:r&&e.relativePath?(s=e.relativePath,"markdown-assets/".concat(path_browserify_1.default.join(path_browserify_1.default.parse(t).dir,s))):i?o(!0):// NB: other type is ugly when downloading. Also doesn't make sense much to want to download an asset after uploading
"other"!==e.type?e.blobPath:void 0}};exports.getSrc=getSrc;var useAsset=function(e,t,r){if(e&&t){var s=(0,exports.getSrc)(e,t,r),o=s.src,a=s.downloadUrl,i=(0,asset_functions_js_1.getExtensionFromAsset)(e),u=(0,useAssetInfo_1.useAssetInfo)(o,e.originalFilename);return{rawText:(null==u?void 0:u.rawText)||null,type:e.type||(null==u?void 0:u.type),downloadUrl:a,src:o,extension:i}}};exports.useAsset=useAsset;
//# sourceMappingURL=useAsset.js.map