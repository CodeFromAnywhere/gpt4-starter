"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAssetDirectlyGetApi=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),asset_functions_js_1=require("asset-functions-js"),js_util_1=require("js-util"),serverDownloadReply_1=require("../util/serverDownloadReply"),getAssetDirectlyGetApi=function(e){
/**
    
    const authToken = (ctx as any).cookies?.authToken;
    const authToken2 = ctx.cookie?.authToken;
  
    console.log({
      authToken,
      authToken2,
      cookie: ctx.cookie,
      cookies: (ctx as any).cookies,
      headers: ctx.req.headers,
    });
    const isAuthed = functionAuthPlugin("uploadAsset", authToken);
    if (!isAuthed) {
      return {
        isSuccessful: false,
        isUnauthorized: true,
        message: "You can only do this when authenticated",
      };
    }
    */
var t="1"===(0,js_util_1.takeFirst)(null==e?void 0:e.query.isDownload),s=(0,js_util_1.takeFirst)(null==e?void 0:e.query.projectRelativeAssetPath);if(!["audio","image","video"].includes((0,asset_functions_js_1.getTypeFromUrlOrPath)(s))&&!s.startsWith("public/"))
// for now, only allow publicly exposing audio, image and video files...
// NB: already big security risk!
return{isSuccessful:!1,message:"not allowed for now, only public data"};var i=(0,get_path_1.getProjectRoot)();if(!i)return{isSuccessful:!1,message:"No project root"};if(!s)return console.log({p:null==e?void 0:e.query}),{isSuccessful:!1,message:"No path given"};var r=fs_util_1.path.join(i,s);return fs_util_1.fs.existsSync(r)?(0,serverDownloadReply_1.serverDownloadReply)(r,t):{isSuccessful:!1,message:"Invalid file"}};exports.getAssetDirectlyGetApi=getAssetDirectlyGetApi;
//# sourceMappingURL=getAssetDirectlyGetApi.js.map