"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function u(e){try{l(r.next(e))}catch(e){o(e)}}function i(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,i)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(u=0)),u;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(a=u.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){u.label=i[1];break}if(6===i[0]&&u.label<a[1]){u.label=a[1],a=i;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(i);break}a[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.setInputValue=void 0;var setInputValue=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r;return __generator(this,(function(a){switch(a.label){case 0:return t=e.page,n=e.selector,r=e.inputValue,[4/*yield*/,t.waitForSelector(n)];case 1:return a.sent(),[4/*yield*/,t.$eval(n,(function(e,t){e.value=t.value}),{value:r})];case 2:return a.sent(),[2/*return*/]}}))}))};exports.setInputValue=setInputValue;
//# sourceMappingURL=setInputValue.js.map