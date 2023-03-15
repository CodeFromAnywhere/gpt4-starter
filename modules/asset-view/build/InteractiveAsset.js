"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.InteractiveAsset=void 0;var jsx_runtime_1=require("react/jsx-runtime"),clickable_icon_1=require("clickable-icon"),react_with_native_1=require("react-with-native"),AssetView_1=require("./AssetView"),asset_functions_js_1=require("asset-functions-js"),InteractiveAsset=function(e){var t=e.asset,s=e.remove,a=e.projectRelativeReferencingFilePath,n=e.onChange,r=e.attachTokenToFilename,i=t.name&&t.name.length>0?// You've edited the name, and this it's stored on the frontend `Asset`
t.name:t.relativePath?// The asset comes from the backend, the name can be deducted from the `relativePath` by removing the token first, then adding it
(0,asset_functions_js_1.getNameWithTokenFromRelativePath)(t.relativePath,r):// There is no backend name nor there's a name set by the user. NB: this should not really happen as it must be present on Asset after recording/selecting an asset...
"",o=(0,asset_functions_js_1.removeTokenIfPresent)(i,r),_=o.nameWithoutToken,c=o.token,l=void 0===t.uploadProgress||0===t.uploadProgress?"":1===t.uploadProgress?"✅":"".concat(Math.round(100*t.uploadProgress),"%");
/**
     *
     * Name that includes token
     */return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"relative border border-black rounded-xl p-2 m-2"},{children:[(0,jsx_runtime_1.jsx)(react_with_native_1.Span,__assign({className:"absolute right-1 top-[-7px]"},{children:(0,jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon,{emoji:"⨯",onClick:function(){return s()}})})),(0,jsx_runtime_1.jsx)(AssetView_1.AssetView,{projectRelativeReferencingFilePath:a,asset:t}),(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"flex flex-row"},{children:[(0,jsx_runtime_1.jsx)(react_with_native_1.Input,{placeholder:"Name",value:_,style:{backgroundColor:"transparent",border:"1px solid black"},onChange:function(e){var s=(0,asset_functions_js_1.addToken)(e.target.value,c,r);console.log({newName:s});var a=__assign(__assign({},t),{name:s});n(a)}}),(0,jsx_runtime_1.jsx)(react_with_native_1.Input,{placeholder:"Alternate text",style:{backgroundColor:"transparent",border:"1px solid black"},value:t.alt||"",onChange:function(e){var s=__assign(__assign({},t),{alt:e.target.value});n(s)}}),l]}))]}))};exports.InteractiveAsset=InteractiveAsset;
//# sourceMappingURL=InteractiveAsset.js.map