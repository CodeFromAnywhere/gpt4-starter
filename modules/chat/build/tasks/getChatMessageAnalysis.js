"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function i(e){try{u(o.next(e))}catch(e){r(e)}}function a(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}u((o=o.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,o,s,r,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(i=0)),i;)try{if(n=1,o&&(s=2&a[0]?o.return:a[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,a[1])).done)return s;switch(o=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(s=i.trys,(s=s.length>0&&s[s.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){i.label=a[1];break}if(6===a[0]&&i.label<s[1]){i.label=s[1],s=a;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(a);break}s[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getChatMessageAnalysis=void 0;var jsonGpt_1=require("./jsonGpt"),getChatMessageAnalysis=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4/*yield*/,(0,jsonGpt_1.jsonGpt)(e,{
// if this happens, run prompt to generate Dall-E prompt and api call, call Dall-E and give image...
isResponseVisualRequested:{type:"boolean",description:"User requests an image"},
// if false, makes the tokensize super small (super good for efficiency)
isMessageHistoryRequired:{type:"boolean",description:"indicates whether or not the message history is needed for answering to this message"},
// if false, the language model normally hits a dead end. would be a great starting point for continuing with other things like automations...
isLanguageModelCapable:{type:"boolean",description:"Is a language model chatbot capable of fulfilling this request"},
// if this happens, we can analyse further and maybe later propose products... eCommerceGPT
isUserInterestedInProduct:{type:"boolean",description:"indicates whether or not the user may be interested in buying something"},
// if this happens, there will normally be a default ChatGPT message. Not sure how useful this is, but we can also start a different chain here because this would deepen the relation.
isAskingForBotInfo:{type:"boolean",description:"indicates whether or not the user needs info about the system"},
// may be too vague! but if it doesnt have too many false positives, we can couple the user to tools they might find useful and better than the google ad results.
isToolRequired:{type:"boolean",description:"indicates whether or not the user is looking for some sort of tool"},
// if this happens, we can provide all user state info and info on how to change things.
isStatusRequested:{type:"boolean",description:"'true' if the user wants to know their credits, messages left, or other account details, configuration, or changes"},
// if this happens, we can activate a different GPT purely for translation.
isTranslationRequested:{type:"boolean"},
// not sure if worth the tokens. Can be part of `isStatusRequested`
// isResetRequested: {
//   type: "boolean",
//   description: "does the user request for a reset or account deletion",
// },
// isConfigRequested: {
//   type: "boolean",
//   description:
//     "does the user request for configuration or settings of the system",
// },
mood:{type:"string",description:"mood of the user"},userInterests:{type:"string[] | null",description:"keywords of interests the user clearly states"},userTruths:{type:"string[] | null",description:"facts or opinions the user states about himself or the world around him"}})];case 1:return[2/*return*/,t.sent()]}}))}))};
/**
 * TODO: try it out and build out these pipelines. it's just diehard js horsemode, nothing difficult! see what sticks 🍝
 */exports.getChatMessageAnalysis=getChatMessageAnalysis;
//# sourceMappingURL=getChatMessageAnalysis.js.map