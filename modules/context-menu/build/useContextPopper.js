"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useContextPopper=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_popper_1=require("react-popper"),react_1=require("react"),useContext_1=require("./useContext"),useContextPopper=function(e){var t=e.longTouchDurationMs,n=(0,react_1.useState)(null),r=n[0],o=n[1];(0,react_1.useEffect)((function(){"undefined"!=typeof window&&
// Needed to make it go away when clicking outside of the popper, doesn't work for textarea though
window.addEventListener("click",(function(){o(null)}))}),[]);var i=(0,useContext_1.useContext)((function(t){o(t),console.log("callback called",e,t)}),{longTouchDurationMs:t}),u=(0,react_1.useMemo)((function(){if(r)
// console.log("YAY");
// console.log({
//   contextEvent,
//   x: contextEvent?.clientX,
//   y: contextEvent?.clientY,
// });
return{
// This is going to create a virtual reference element
getBoundingClientRect:function(){return{top:(null==r?void 0:r.clientY)||10,left:(null==r?void 0:r.clientX)||10,bottom:0,right:0,width:0,height:0,x:0,y:0,toJSON:function(){return""}}}}}),[r]),s=(0,react_1.useRef)(null),p=(0,react_popper_1.usePopper)(u,s.current,{strategy:"fixed",placement:"auto-start",modifiers:[{name:"preventOverflow",enabled:!1}]}),a=p.styles,c=p.attributes;return{openContextPopperProps:__assign(__assign({},i),{ref:s}),renderContextPopper:function(){return u&&r?(0,jsx_runtime_1.jsx)("div",__assign({onClick:function(e){
// NB: needed to ensure it doesn't close due to the window.click
e.stopPropagation()},style:a.popper},c.popper,{children:e.renderPopper({id:r.id})})):null},onClose:function(){return o(null)},isOpen:!!r}};exports.useContextPopper=useContextPopper;
//# sourceMappingURL=useContextPopper.js.map