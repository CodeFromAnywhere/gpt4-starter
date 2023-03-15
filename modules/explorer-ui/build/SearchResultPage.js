"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var s in r=arguments[t])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SearchResultPage=void 0;var jsx_runtime_1=require("react/jsx-runtime"),api_1=require("api"),fancy_loader_1=require("fancy-loader"),react_with_native_1=require("react-with-native"),react_with_native_router_1=require("react-with-native-router"),SearchResultComponent_1=require("./SearchResultComponent"),store_1=require("./store"),SearchResultPage=function(){(0,react_with_native_router_1.useRouter)();var e,r,t=(0,store_1.useStore)("menu.search"),a=t[0],s=(t[1],api_1.queries.useGetAllSearchResultsWithContext(a));return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.P,{children:["Search: ",a]}),s.isLoading?(0,jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader,{}):null===(r=null===(e=s.data)||void 0===e?void 0:e.result)||void 0===r?void 0:r.map((function(e,r){return(0,jsx_runtime_1.jsx)(SearchResultComponent_1.SearchResultComponent,{index:r,searchResult:e},"s".concat(r))})),(0,jsx_runtime_1.jsxs)("div",__assign({className:"flex flex-row w-full h-40"},{children:[(0,jsx_runtime_1.jsx)("a",__assign({className:"bg-orange-700 hover flex flex-1 justify-center items-center hover:bg-orange-500",href:"https://search.brave.com/search?q=".concat(a)},{children:"🦁 Brave"})),(0,jsx_runtime_1.jsx)("a",__assign({className:"bg-gray-700 hover flex flex-1 justify-center items-center hover:bg-gray-500",href:"https://www.google.com/search?igu=1&q=".concat(a)},{children:"🤖 Google"}))]}))]})};exports.SearchResultPage=SearchResultPage;
//# sourceMappingURL=SearchResultPage.js.map