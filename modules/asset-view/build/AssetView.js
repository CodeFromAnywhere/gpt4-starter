"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.AssetView=exports.defaultClassName=exports.TranscriptionSentence=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_1=require("react"),asset_functions_js_1=require("asset-functions-js"),server_api_url_1=require("server-api-url"),markdown_1=require("markdown"),react_with_native_1=require("react-with-native"),useAsset_1=require("./useAsset"),js_util_1=require("js-util"),convert_case_1=require("convert-case"),react_2=require("react"),TranscriptionSentence=function(e){var t=e.sentence,n=e.time,r=e.transcription,i=e.correctRef,s=1e3*n>t.startAt&&1e3*n<t.endAt,a=r.words.find((function(e){return 1e3*n>e.startAt&&1e3*n<e.endAt})),o=t.text.split(" ").map((function(e){return s&&a&&(0,convert_case_1.slugify)(a.text)===(0,convert_case_1.slugify)(e)?e.toUpperCase():e})).join(" ");return(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({style:s?{color:"lightgreen"}:void 0,onClick:function(){(null==i?void 0:i.current)&&(i.current.currentTime=t.startAt/1e3,i.current.play())}},{children:o}))};exports.TranscriptionSentence=TranscriptionSentence,exports.defaultClassName="w-20 aspect-auto";
/**
Views an asset in the proper way.

If you also provide a Transcription, then:

- gets the play time from the player and match it with the sentence and word (hook audio time to the component, preferably 10fps minimum)
- highlights both the sentence and word in the text
- makes every word clickable, going to the right place in the video
 */
var AssetView=function(e){var t,n,r,i=e.asset,s=e.className,a=e.projectRelativeReferencingFilePath,o=e.hideDownloadLink,_=e.transcription,c=(0,react_2.useRef)(null),u=(0,react_2.useRef)(null),l=(0,react_2.useState)(0),d=l[0],v=l[1],x=(0,useAsset_1.useAsset)(i,a,!server_api_url_1.isDev),p=(0,js_util_1.destructureOptionalObject)(x),j=p.downloadUrl,m=p.rawText,f=p.src,h=p.type,w=p.extension,g="video"===h?c:"audio"===h?u:void 0,y=void 0!==i.sizeBytes?"(".concat((0,asset_functions_js_1.readableSize)(i.sizeBytes),")"):void 0,A=(0,react_1.useCallback)((function(){var e;if(g){var t=null===(e=g.current)||void 0===e?void 0:e.currentTime;t&&(console.log("time update",{currentTime:t}),v(t))}}),[null===(t=null==g?void 0:g.current)||void 0===t?void 0:t.id]),T=null===(n=null==_?void 0:_.sentences.find((function(e){return e.startAt<1e3*d&&e.endAt>1e3*d})))||void 0===n?void 0:n.text,q=null===(r=null==_?void 0:_.words.find((function(e){return e.startAt<1e3*d&&e.endAt>1e3*d})))||void 0===r?void 0:r.text;
// console.log({ result, time, type, src, correctRef });
return(0,jsx_runtime_1.jsxs)(react_with_native_1.Span,__assign({style:{position:"relative"}},{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,{children:[j&&!o?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({style:{padding:"5px"}},{children:(0,jsx_runtime_1.jsxs)(react_with_native_1.A,__assign({target:"_blank",href:j},{children:[" ⬇️ Download"," ",y]}))})):null,"image"===h&&f&&(0,jsx_runtime_1.jsx)("img",{src:f,className:s||"w-40",style:{aspectRatio:"auto"}}),q?(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({style:{color:"lightgreen",fontSize:40}},{children:q})):null,T?(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({style:{color:"lightgreen"}},{children:T})):null,"audio"===h&&f&&(0,jsx_runtime_1.jsx)("audio",{id:"audiothingy",ref:u,controls:!0,preload:"auto",src:f,onTimeUpdate:A}),"video"===h&&f&&(0,jsx_runtime_1.jsx)("video",{id:"videothingy",ref:c,preload:"auto",onTimeUpdate:A,style:{aspectRatio:"auto"},className:s||"w-40",
// not always available, should I check first somehow?
//poster={src.replace(".mp4", ".placeholder.jpeg")}
controls:!0,src:f}),"text"===h&&m?(0,jsx_runtime_1.jsx)(markdown_1.MarkdownCodeblock,{text:m,extension:w}):null,null,void 0===f?(0,jsx_runtime_1.jsx)(react_with_native_1.P,{children:"Asset src not found"}):null]}),_?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,{children:_.sentences.map((function(e,t){return(0,jsx_runtime_1.jsx)(exports.TranscriptionSentence,{sentence:e,time:d,correctRef:g,transcription:_},"sentence-".concat(t))}))}):null]}))};exports.AssetView=AssetView;
//# sourceMappingURL=AssetView.js.map