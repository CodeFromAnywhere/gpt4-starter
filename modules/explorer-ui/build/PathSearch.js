"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PathSearch=void 0;var jsx_runtime_1=require("react/jsx-runtime"),api_1=require("api"),fancy_loader_1=require("fancy-loader"),file_search_1=require("file-search"),react_with_native_1=require("react-with-native"),store_1=require("./store"),PathSearch=function(){var e,r,t=(0,store_1.useStore)("menu.search"),a=t[0],i=(t[1],api_1.queries.useGetExplorableFilesWithContext()),s=null===(r=null===(e=i.data)||void 0===e?void 0:e.result)||void 0===r?void 0:r.map((function(e){return e.url}));
/**
     TODO:
     - add pinned, open, and top 100 recent, in that order, to the paths array
     - improve performance, it's way too slow
    */
return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,{children:[i.isLoading?(0,jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader,{}):null,(0,jsx_runtime_1.jsx)(file_search_1.PathSearchResults,{search:a,paths:s||[]})]})};exports.PathSearch=PathSearch;
//# sourceMappingURL=PathSearch.js.map