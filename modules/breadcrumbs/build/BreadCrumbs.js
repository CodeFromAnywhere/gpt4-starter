"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(r){for(var e,t=1,s=arguments.length;t<s;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.BreadCrumbs=exports.renderBreadCrumbs=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_1=require("react-with-native"),renderBreadCrumbs=function(r){return r.length<=1?null:null==r?void 0:r.map((function(e,t){var s=r.length-1===t;return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"flex flex-row items-center text-xs"},{children:[e,s?null:(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"px-2 text-gray-900 dark:text-gray-200"},{children:"▸"}))]}),"breadcrumb".concat(t))}))};exports.renderBreadCrumbs=renderBreadCrumbs;
/**
 * Shows where we are in the filesystem
 */
var BreadCrumbs=function(r){var e=r.path,t=(e||"").split("/");return""===e?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,{}):(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"border-b border-b-gray-300 mb-4 bg-[#FFFFFF] dark:bg-gray-900"},{children:(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"flex flex-row items-center ml-2"},{children:(0,exports.renderBreadCrumbs)(t)}))}))};exports.BreadCrumbs=BreadCrumbs;
//# sourceMappingURL=BreadCrumbs.js.map