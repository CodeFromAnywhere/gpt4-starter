"use strict";var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function a(t){try{s(n.next(t))}catch(t){o(t)}}function u(t){try{s(n.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}s((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(s){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=e.call(t,a)}catch(t){u=[6,t],n=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.watchWavWithoutMp3=void 0;var ffmpeg_util_1=require("ffmpeg-util"),filename_conventions_1=require("filename-conventions"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),lock_util_1=require("lock-util"),watchWavWithoutMp3=function(t,e,r){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return(0,lock_util_1.isLocked)(e)?[2/*return*/]:fs_util_1.fs.existsSync(e)?[4/*yield*/,(0,ffmpeg_util_1.compressConvert)(e,{targetFormat:"mp3",keepOriginal:!0})]:[2/*return*/];case 1:return[2/*return*/,t.sent()]}}))}))};exports.watchWavWithoutMp3=watchWavWithoutMp3,exports.watchWavWithoutMp3.config={isHeavy:!0,isInternetRequired:!1,isBrowserRequired:!1},exports.watchWavWithoutMp3.startupStrategy="queue",exports.watchWavWithoutMp3.filter=function(t,e){if("add"!==t)return!1;var r=(0,get_path_1.getProjectRoot)();if(!r)return!1;if(!e.startsWith(r))return!1;var n=fs_util_1.path.parse(e),i=n.ext;(0,get_path_1.getSubExtensions)(e);if(".wav"!==i)return!1;if((0,get_path_1.getSubExtensions)(e).includes(filename_conventions_1.temporaryConvertedSubextension))
// temporary
return!1;if((0,lock_util_1.isLocked)(e))return!1;
// ext is .wav
var o=fs_util_1.path.join(n.dir,"".concat(n.name,".mp3"));return!fs_util_1.fs.existsSync(o)};
//# sourceMappingURL=watchWavWithoutMp3.js.map