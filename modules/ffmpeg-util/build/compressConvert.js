"use strict";var __awaiter=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))((function(r,i){function s(t){try{a(n.next(t))}catch(t){i(t)}}function l(t){try{a(n.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}a((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var o,n,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(a){return function(l){if(o)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(s=0)),s;)try{if(o=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return s.label++,{value:l[1],done:!1};case 5:s.label++,n=l[1],l=[0];continue;case 7:l=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){s=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){s.label=l[1];break}if(6===l[0]&&s.label<r[1]){s.label=r[1],r=l;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(l);break}r[2]&&s.ops.pop(),s.trys.pop();continue}l=e.call(t,s)}catch(t){l=[6,t],n=0}finally{o=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,a])}}},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.compressConvert=void 0;var fluent_ffmpeg_1=__importDefault(require("fluent-ffmpeg")),fs_util_1=require("fs-util"),js_util_1=require("js-util"),lock_util_1=require("lock-util"),is_system_busy_1=require("is-system-busy"),compressConvert=function(t,e){return __awaiter(void 0,void 0,void 0,(function(){var o,n,r,i,s,l,a,u,c,f;return __generator(this,(function(_){switch(_.label){case 0:return[4/*yield*/,(0,is_system_busy_1.isSystemBusy)()];case 1:return _.sent()?(console.log("NOT NOW, system is busy."),[2/*return*/]):(0,lock_util_1.isLocked)(t)?[2/*return*/]:fs_util_1.fs.existsSync(t)?(o=(0,fluent_ffmpeg_1.default)({source:t}),(null==e?void 0:e.quality)&&(o=o.addOption("-quality ".concat((null==e?void 0:e.quality)||100))),(null==e?void 0:e.fps)&&"mp4"===e.targetFormat&&(
// set output fps
o=o.withOutputFps(e.fps)),"wav"===(null==e?void 0:e.targetFormat)&&(null==e?void 0:e.is16bitWav)&&(o=o.outputOptions(["-ar 16000","-ac 1","-codec:a pcm_s16le"])),(null==e?void 0:e.sizeWidthPx)&&(o=o.size("".concat(null==e?void 0:e.sizeWidthPx,"x?"))),(null==e?void 0:e.aspectRatio)&&(o=o.aspect("".concat(null==e?void 0:e.aspectRatio.x,":").concat(e.aspectRatio.y))),(null==e?void 0:e.targetFormat)&&(o=o.toFormat(null==e?void 0:e.targetFormat)),n=fs_util_1.path.parse(t),r=(null==e?void 0:e.name)||n.name,i=(null==e?void 0:e.outputFolderPath)||n.dir,s=(null==e?void 0:e.targetFormat)?".".concat(null==e?void 0:e.targetFormat):n.ext,l=fs_util_1.path.join(i,"".concat(r,".converted").concat(s)),a=(0,js_util_1.replaceLastOccurence)(l,".converted",""),
// if (fs.existsSync(finalDestinationPath)) {
//   console.log(
//     `Shouldn't happen, but compressConvert was called for a file for which the finalDestinationPath already seems to exist`
//   );
//   return;
// }
o=o.save(l),u=1,c=0,[4/*yield*/,new Promise((function(n){o.on("codecData",(function(t){
// HERE YOU GET THE TOTAL TIME
u=parseInt(t.duration.replace(/:/g,"")),console.log("Converting Started...")})).on("progress",(function(o){
// HERE IS THE CURRENT TIME
var n=parseInt(o.timemark.replace(/:/g,"")),i=Math.floor(n/u*100);
// AND HERE IS THE CALCULATION
(0,lock_util_1.lock)(t,"".concat(i,"%")),(null==e?void 0:e.isDebug)?console.log("".concat(i,"%")):i%2==1&&i!==c&&(null==e?void 0:e.isStatusLogged)&&(c=i,console.log("".concat(r," status: ").concat(i,"%")))})).on("end",(function(){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(o){switch(o.label){case 0:return(null==e?void 0:e.keepOriginal)?[3/*break*/,2]:[4/*yield*/,fs_util_1.fs.rm(t)];
// new file is created, old one is not overwritten, and we need to remove the old
// NB: don't wait for it!
case 1:
// new file is created, old one is not overwritten, and we need to remove the old
// NB: don't wait for it!
o.sent(),o.label=2;case 2:return(0,lock_util_1.unlock)(t),fs_util_1.fs.existsSync(a)?[4/*yield*/,fs_util_1.fs.rm(l)]:[3/*break*/,4];
// already exists for some reason...
case 3:
// already exists for some reason...
return o.sent(),n(l),[2/*return*/];case 4:return fs_util_1.fs.existsSync(l)?[4/*yield*/,fs_util_1.fs.rename(l,a)]:(
//doens't existalthough we just converted it, multiple processes doing the same, probably
n(void 0),[2/*return*/]);case 5:return o.sent(),n(a),[2/*return*/]}}))}))})).on("error",(function(t){console.log({e:t}),n(void 0)}))}))]):(console.log("Path doesn't exist",t),[2/*return*/]);case 2:return(f=_.sent())?[3/*break*/,4]:[4/*yield*/,(0,lock_util_1.lockError)(t,"Could not get result",void 0,"compressConvert",[t,e])];case 3:_.sent(),_.label=4;case 4:return[2/*return*/,f]}}))}))};exports.compressConvert=compressConvert;
//# sourceMappingURL=compressConvert.js.map