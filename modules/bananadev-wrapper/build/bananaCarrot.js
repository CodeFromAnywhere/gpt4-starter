"use strict";var __awaiter=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,o){function u(e){try{i(a.next(e))}catch(e){o(e)}}function s(e){try{i(a.throw(e))}catch(e){o(e)}}function i(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,s)}i((a=a.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,a,r,o,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(i){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(u=0)),u;)try{if(t=1,a&&(r=2&s[0]?a.return:s[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,s[1])).done)return r;switch(a=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,a=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!(r=u.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){u=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){u.label=s[1];break}if(6===s[0]&&u.label<r[1]){u.label=r[1],r=s;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(s);break}r[2]&&u.ops.pop(),u.trys.pop();continue}s=n.call(e,u)}catch(e){s=[6,e],a=0}finally{t=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.bananaCarrot=void 0;var persona_functions_node_1=require("persona-functions-node"),banana_dev_1=__importDefault(require("@banana-dev/banana-dev")),bananaCarrot=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,t,a,r,o;return __generator(this,(function(u){switch(u.label){case 0:return[4/*yield*/,(0,persona_functions_node_1.getPersona)()];case 1:return(n=u.sent())?(t=n.bananadevApiKey)?(a=null===(o=n.bananadevModelKeys)||void 0===o?void 0:o.carrot)?[4/*yield*/,banana_dev_1.default.run(t,a,e)]:[2/*return*/,{isSuccessful:!1,message:"Please provide a correct model that you have a model key for"}]:[2/*return*/,{isSuccessful:!1,message:"Please setup an API Key for Carrot Banana"}]:[2/*return*/,{isSuccessful:!1,message:"No persona"}];case 2:return r=u.sent(),console.log({carrotResult:r}),[2/*return*/,{isSuccessful:!0,message:"You did it",result:r}]}}))}))};exports.bananaCarrot=bananaCarrot;
//# sourceMappingURL=bananaCarrot.js.map