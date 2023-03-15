"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.watchAppleMemos=void 0;var ffmpeg_util_1=require("ffmpeg-util"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),os_1=require("os"),filename_conventions_1=require("filename-conventions"),watchAppleMemos=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var e,n,r,o,i;return __generator(this,(function(a){switch(a.label){case 0:return fs_util_1.fs.existsSync(t)&&(e=(0,get_path_1.getProjectRoot)())?(n=fs_util_1.path.join(e,"knowledge","recordings"),[4/*yield*/,fs_util_1.fs.stat(t)]):[2/*return*/];case 1:return r=a.sent(),o=r.ctimeMs,[4/*yield*/,(0,ffmpeg_util_1.compressConvert)(t,{targetFormat:"wav",is16bitWav:!0,keepOriginal:!0,outputFolderPath:n,name:String(o)})];case 2:return a.sent()?(i="".concat(t,".").concat(filename_conventions_1.movedFileSubextension),[4/*yield*/,fs_util_1.fs.writeFile(i,String(Date.now()),"utf8")]):[2/*return*/];case 3:return a.sent(),[2/*return*/]}}))}))};exports.watchAppleMemos=watchAppleMemos,exports.watchAppleMemos.startupStrategy="queue",exports.watchAppleMemos.filter=function(e,t){if("darwin"!==(0,os_1.platform)())
// macOS
return!1;
// only the change event marks the alteration and with that finalisation (hopefully) of the m4a buffer
// NB: doens't work! on startup,it's "add"
// if (eventName !== "change") {
//   return false;
// }
var n=process.env.HOME,r=n?fs_util_1.path.resolve(n,"Library/Application Support/com.apple.voicememos/Recordings"):void 0;// how to do this?
// NB: In order to resolve it to an absolute path, I think this might work.
if(!r||!t.startsWith(r))return!1;
// something got added to the MacOS recordings folder
if(".m4a"!==fs_util_1.path.parse(t).ext)return!1;
// it's m4a!
var o="".concat(t,".").concat(filename_conventions_1.movedFileSubextension);return!fs_util_1.fs.existsSync(o);
// it hasn't been transcribed before
};
//# sourceMappingURL=watchAppleMemos.js.map