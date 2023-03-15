"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ClickableIcon=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_1=require("react-with-native"),ClickableIcon=function(e){return(0,jsx_runtime_1.jsx)(react_with_native_1.Button,__assign({className:"flex flex-col items-center",onClick:e.disabled?void 0:e.onClick},{children:e.icon?(0,jsx_runtime_1.jsx)(react_with_native_1.Svg,{src:e.icon,width:24,height:24,className:e.disabled?"text-gray-500":"text-black"}):e.emoji?(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({title:e.title,className:"text-xl ".concat(e.disabled?"opacity-50":"hover:scale-110")},{children:e.emoji})):null}))};exports.ClickableIcon=ClickableIcon;
//# sourceMappingURL=ClickableIcon.js.map