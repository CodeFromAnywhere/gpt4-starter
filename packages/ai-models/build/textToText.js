"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.textToText=void 0;var openai_wrapper_1=require("openai-wrapper"),textToText=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var n,r,o,i;return __generator(this,(function(a){switch(a.label){case 0:return(null==t?void 0:t.model)&&!openai_wrapper_1.openAiTextCompletionModels.includes(null==t?void 0:t.model)?[3/*break*/,2]:[4/*yield*/,(0,openai_wrapper_1.gpt3)(e,{model:null==t?void 0:t.model})];case 1:return n=a.sent(),r=Math.ceil((0,openai_wrapper_1.calculateTokenCount)(e)/500),o=.1*r,[2/*return*/,__assign(__assign({},n),{payment:{personId:null==t?void 0:t.personId,priceCredit:o,priceDescription:"Estimated ".concat(r," pages")}})];case 2:return i="".concat(null==t?void 0:t.model," not implemented yet"),console.log(i),[2/*return*/,{isSuccessful:!1,message:i}]}}))}))};
/**
TODO: improve gpt3 api with good token calculation, aggresive exponential backoff, and preventing ratelimit at all times, to maximise stability. can I have gpt3 as fallback to browser automated ChatGPT?


For now it's `string -> string`

There are simply too many options to make this file -> file, it wouldn't be useful.

NB: use oneByOne for this if you don't want to hit the limit

`textToText` needs to have a warning for context size (or dynamically choose a LLM with a bigger context size, or warn and split it up based on sentence endings, paragraphs, and newlines. It always needs to work!)

Fix errors:

- ratelimit reached
- too many tokens used (more than 4k)

 */exports.textToText=textToText,exports.textToText.config={isPaid:!0,priceDescription:"0.10 credit per page"};
//# sourceMappingURL=textToText.js.map