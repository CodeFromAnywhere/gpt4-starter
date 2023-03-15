"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useContextMenu=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_1=require("react-with-native"),ContextMenuItemComponent_1=require("./ContextMenuItemComponent"),useContextPopper_1=require("./useContextPopper"),react_1=require("react"),useContextMenu=function(e){var t=e.items,n=e.longTouchDurationMs,r=(e.className,e.customItemRender),o=e.itemClassName,s=(0,useContextPopper_1.useContextPopper)({longTouchDurationMs:n,renderPopper:function(e){var n=e.id;return(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:
// className ||
"bg-white dark:bg-gray-700 border border-black max-h-80 overflow-y-scroll"},{children:t.filter((function(e){return!e.getIsEnabled||e.getIsEnabled(n)})).map((function(e,t){return r?r(e,t,a,n):(0,jsx_runtime_1.jsx)(ContextMenuItemComponent_1.ContextMenuItemComponent,{id:n,item:e,onClose:a,itemClassName:o},"menuItem".concat(t))}))}))}}),u=s.renderContextPopper,i=s.openContextPopperProps,a=s.onClose,p=s.isOpen;(0,react_1.useMemo)((function(){return{renderContextMenu:u,openContextMenuProps:i,onClose:a,isOpen:p}}),[p]);return{renderContextMenu:u,openContextMenuProps:i,onClose:a,isOpen:p}};exports.useContextMenu=useContextMenu;
//# sourceMappingURL=useContextMenu.js.map