"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getReferencedAssetApiUrl=void 0;var api_js_1=require("api-js"),getReferencedAssetApiUrl=function(e,t,r,
/**
 * If true, asset will be returned as download
 */
i){if(e)return(0,api_js_1.getGetApiUrl)(e,"getReferencedAssetGetApi",{projectRelativeReferencingFilePath:t,referencingFileRelativeAssetPath:r,isDownload:i?"1":void 0})};exports.getReferencedAssetApiUrl=getReferencedAssetApiUrl;
//# sourceMappingURL=getReferencedAssetApiUrl.js.map