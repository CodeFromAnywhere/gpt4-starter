"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAssetDirectlyApiUrl=void 0;var api_js_1=require("api-js"),getAssetDirectlyApiUrl=function(e,t,
/**
 * If true, asset will be returned as download
 */
i){if(e)return(0,api_js_1.getGetApiUrl)(e,"getAssetDirectlyGetApi",{projectRelativeAssetPath:t,isDownload:i?"1":void 0})};exports.getAssetDirectlyApiUrl=getAssetDirectlyApiUrl;
//# sourceMappingURL=getAssetDirectlyApiUrl.js.map