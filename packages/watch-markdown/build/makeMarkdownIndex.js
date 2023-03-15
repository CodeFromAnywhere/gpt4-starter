"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((o=o.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,s[0]&&(a=0)),a;)try{if(n=1,o&&(i=2&s[0]?o.return:s[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;switch(o=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,o=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],o=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeMarkdownIndex=void 0;var fs_util_1=require("fs-util"),read_markdown_file_1=require("read-markdown-file"),ai_models_1=require("ai-models"),js_util_1=require("js-util"),lock_util_1=require("lock-util"),model_types_1=require("model-types"),openai_wrapper_1=require("openai-wrapper"),getIsPrivate_1=require("./getIsPrivate"),makeMarkdownIndex=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,o,i,r,a,s,l,u,c,d,_,p,f,v,m,w,h,k,x,y,g,b,T,I,M,O,P,j,q,C;return __generator(this,(function(E){switch(E.label){case 0:return(0,lock_util_1.isLocked)(e)?[2/*return*/]:[4/*yield*/,(0,lock_util_1.lock)(e,"making markdown index","makeMarkdownIndex",[e])];case 1:return E.sent(),t=fs_util_1.path.parse(e),[4/*yield*/,(0,read_markdown_file_1.readMarkdownFile)(e)];case 2:return(n=E.sent())?[3/*break*/,4]:[4/*yield*/,(0,lock_util_1.lockError)(e,"Can't find file",void 0,"makeMarkdownIndex",[e])];case 3:case 16:return E.sent(),[2/*return*/];case 4:return o=n.raw,(0,openai_wrapper_1.calculateTokenCount)(o)>1024?(console.log("FILE TOO LONG, FOR NOW."),(0,lock_util_1.lockError)(e,"file too long, for now",void 0,"makeMarkdownIndex",[e]),[2/*return*/]):[4/*yield*/,(0,ai_models_1.textToText)("Please describe the contents of this file in just a few words:\n    \n  ```\n  ".concat(o,"\n  ```"))];case 5:return i=null===(w=E.sent())||void 0===w?void 0:w.result,[4/*yield*/,(0,ai_models_1.textToText)("Can you come up with a good SEO title for this webpage?\n    \n  ```\n  ".concat(o,"\n  ```"))];case 6:return r=null===(h=E.sent())||void 0===h?void 0:h.result,[4/*yield*/,(0,ai_models_1.textToText)("Can you come up with some keywords for this file?\n    \n  ```\n  ".concat(o,"\n  ```"))];case 7:return a=null===(x=null===(k=E.sent())||void 0===k?void 0:k.result)||void 0===x?void 0:x.split(","),[4/*yield*/,(0,ai_models_1.textToText)("Can you come up with some SEO keywords for this webpage?\n    \n  ```\n  ".concat(o,"\n  ```"))];case 8:return s=null===(g=null===(y=E.sent())||void 0===y?void 0:y.result)||void 0===g?void 0:g.split(",").map((function(e){return e.trim()})),[4/*yield*/,(0,ai_models_1.textToText)("Can you come up with a list of visual descriptions for images that would present this content well?\n      \n    ```\n    ".concat(o,"\n    ```"))];case 9:return l=null===(T=null===(b=E.sent())||void 0===b?void 0:b.result)||void 0===T?void 0:T.split("\n"),[4/*yield*/,(0,ai_models_1.textToText)("What would be a good social media post about this information?\n      \n    ```\n    ".concat(o,"\n    ```"))];case 10:return u=null===(I=E.sent())||void 0===I?void 0:I.result,c=u?[u]:[],[4/*yield*/,(0,ai_models_1.textToText)("Summarize this piece of text:\n    \n  ```\n  ".concat(o,"\n  ```"))];case 11:return d=null===(M=E.sent())||void 0===M?void 0:M.result,[4/*yield*/,(0,ai_models_1.textToText)("What are the main take-aways from this text?\n      \n    ```\n    ".concat(o,"\n    ```"))];case 12:return _=null===(P=null===(O=E.sent())||void 0===O?void 0:O.result)||void 0===P?void 0:P.split("\n"),[4/*yield*/,(0,ai_models_1.textToText)("Can you list the most important statements made in this piece of text?\n      \n    ```\n    ".concat(o,"\n    ```"))];case 13:return p=null===(q=null===(j=E.sent())||void 0===j?void 0:j.result)||void 0===q?void 0:q.split("\n"),[4/*yield*/,(0,getIsPrivate_1.getIsPrivate)(o)];case 14:return f=null===(C=E.sent())||void 0===C?void 0:C.isPrivate,v=(0,js_util_1.omitUndefinedValues)(__assign(__assign({},(0,model_types_1.getUpdatedTimeObject)()),{isSource:!1,isPrivate:f,source:"makeMarkdownIndex v1",createdAt:Date.now(),title:i,keywords:a,imagePromptDescriptions:l,seoKeywords:s,seoTitle:r,socialMediaPosts:c,summary:d,takeAways:_,statements:p,
// later
suggestedLocation:void 0})),m=fs_util_1.path.join(t.dir,"".concat(t.name,".MarkdownIndex.json")),[4/*yield*/,(0,fs_util_1.writeJsonToFile)(m,v)];case 15:return E.sent(),[4/*yield*/,(0,lock_util_1.unlock)(e)]}}))}))};exports.makeMarkdownIndex=makeMarkdownIndex;
//# sourceMappingURL=makeMarkdownIndex.js.map