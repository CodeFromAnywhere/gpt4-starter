"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.NestedMenuItem=exports.getRealItemRecursive=exports.getTitle=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_1=require("react-with-native"),react_with_native_router_1=require("react-with-native-router"),next_a_link_1=require("next-a-link"),useExpanded_1=require("./useExpanded"),store_1=require("./store"),fs_util_js_1=require("fs-util-js"),getTitle=function(e){return e.menuTitle||(0,fs_util_js_1.getFileOrFolderName)(e.queryPath)};exports.getTitle=getTitle;var getRealItemRecursive=function(e){
// with exactly 1 child, the titles should be combined, the menu should be flattened
return e.children&&1===e.children.length?(0,exports.getRealItemRecursive)(__assign(__assign({},e.children[0]),{menuTitle:(0,exports.getTitle)(e)+" ‣ "+function(e){return e.children&&1===e.children.length?(0,exports.getTitle)(e.children[0]):""}(e)})):e};exports.getRealItemRecursive=getRealItemRecursive;
/**
 * General purpose NestedMenuItem.
 ----

 TODO:

 - tooltip support
 
 */
var NestedMenuItem=function(e){var t=e.onClick,n=e.onDoubleClick,i=e.onContextMenu,r=e.item,s=e.level,l=e.headersClickable,a=e.mergeSingleChilds?(0,exports.getRealItemRecursive)(r):r,u=a.children,_=a.target,o=(a.isMenuHidden,a.menuTitleAugmentation),c=(a.menuTitleTooltip,a.queryPath),x=null==u?void 0:u.filter((function(e){return!e.isMenuHidden})),d=(0,exports.getTitle)(a),g=(0,react_with_native_router_1.useRouter)().asPath.substring(1).split("?")[0],h=(0,useExpanded_1.useExpanded)(c),m=h[0],v=h[1],p=h[2],f=h[3],j=(0,store_1.useStore)("menu.isMobileMenuEnabled"),w=(j[0],j[1]),b=g===c,N=s||0,k=x&&x.length>0,y=l||!k,R=y?"".concat(b?"text-blue-500":""," hover:text-blue-800 "):void 0,T=b?void 0:y?c&&0!==c.length?c:"/":void 0;return(null==u?void 0:u.length)&&!(null==x?void 0:x.length)?null:(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"w-full"},{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"w-full flex flex-row justify-center items-center pr-4 ".concat(y?"hover:bg-gray-200 hover:dark:bg-gray-800 ".concat(b?"bg-gray-200 dark:bg-gray-800 ":""):"")},{children:[(0,jsx_runtime_1.jsxs)(next_a_link_1.ALink,__assign({style:{paddingLeft:10*N+5,paddingBottom:10,paddingTop:10},className:"flex flex-row justify-between",textClassName:"flex flex-1 text-xs",href:T,target:_,onDoubleClick:function(e){return e&&(null==n?void 0:n(e,a))},onContextMenu:function(e){return null==i?void 0:i(e,a)},onClick:function(e){m&&b?f():(null==t||t(e,a),p(),a.children||w(!1))}},{children:[(0,jsx_runtime_1.jsx)(react_with_native_1.Span,__assign({
//line-clamp-1 truncate text-ellipsis
textClassName:R},{children:d})),(0,jsx_runtime_1.jsx)(react_with_native_1.Span,__assign({className:"flex flex-row"},{children:o?(0,jsx_runtime_1.jsx)(react_with_native_1.Span,{children:o}):null}))]})),k?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"text-3xl cursor-pointer",onClick:function(){return v()}},{children:m?"▾":"▸"})):null]})),k&&m?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"w-full"},{children:x.map((function(e,t){return(0,jsx_runtime_1.jsx)(exports.NestedMenuItem,{item:e,headersClickable:l,level:N+1},"menu-".concat(T,"-").concat(t))}))})):null]}))};exports.NestedMenuItem=NestedMenuItem;
//# sourceMappingURL=NestedMenuItem.js.map