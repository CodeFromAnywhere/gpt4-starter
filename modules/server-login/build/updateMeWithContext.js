"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function i(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=s.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateMeWithContext=void 0;var database_1=require("database"),asset_functions_node_1=require("asset-functions-node"),updateMeWithContext=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var n,r,a,o,s,i,u;return __generator(this,(function(c){switch(c.label){case 0:return n=e.device.currentPersonCalculated,[4/*yield*/,(0,asset_functions_node_1.processAsset)(t.pictureImage)];case 1:return r=c.sent(),t.pictureImage=r,n?[4/*yield*/,database_1.db.update("Person",(function(e){return e.id===n.id}),(function(e){return __assign(__assign({},e),t)}))]:[2/*return*/,{isSuccessful:!1,message:"Couldn't find you, are you logged in?"}];case 2:return a=c.sent(),o=a.isSuccesful,s=a.message,i=a.amountUpdated,[2/*return*/,{isSuccessful:u=o&&1===i||!1,message:u?"Updated your profile details":s||"Something went wrong (no message)"}]}}))}))};exports.updateMeWithContext=updateMeWithContext;
//# sourceMappingURL=updateMeWithContext.js.map