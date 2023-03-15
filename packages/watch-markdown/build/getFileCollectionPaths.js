"use strict";var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{l(r.next(t))}catch(t){o(t)}}function a(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}l((r=r.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(t,u)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFileCollectionPaths=void 0;var fs_util_1=require("fs-util"),fs_util_js_1=require("fs-util-js"),get_path_1=require("get-path"),getFileCollectionPaths=function(t){return __awaiter(void 0,void 0,void 0,(function(){var e,n,r,i,o,u;return __generator(this,(function(a){switch(a.label){case 0:return(e=(0,get_path_1.getProjectRoot)())?(n=fs_util_1.path.join(e,t),r=fs_util_1.path.parse(n),i=r.dir,[4/*yield*/,fs_util_1.fs.readdir(i,{encoding:"utf8",withFileTypes:!0})]):[2/*return*/];case 1:return o=a.sent(),u=(0,fs_util_js_1.withoutSubExtensions)(r.name),[2/*return*/,o.filter((function(t){return t.isFile()})).filter((function(t){return(0,fs_util_js_1.withoutSubExtensions)(t.name)===u})).map((function(t){return fs_util_1.path.join(i,t.name)}))]}}))}))};exports.getFileCollectionPaths=getFileCollectionPaths;
//# sourceMappingURL=getFileCollectionPaths.js.map