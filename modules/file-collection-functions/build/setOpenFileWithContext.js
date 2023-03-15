"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(l){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.setOpenFileWithContext=void 0;var database_1=require("database"),fs_authorization_1=require("fs-authorization"),getQueryInfo_1=require("./getQueryInfo"),setOpenFileWithContext=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var r,i,o,a,u,l,s,c,p,f,d;return __generator(this,(function(h){switch(h.label){case 0:return(r=null===(f=e.device.currentPersonCalculated)||void 0===f?void 0:f.id)?[4/*yield*/,(0,getQueryInfo_1.getQueryInfo)({queryPath:t})]:[2/*return*/];case 1:return i=h.sent(),(o=null===(d=i.result)||void 0===d?void 0:d.projectRelativeFilePath)?[4/*yield*/,(0,fs_authorization_1.getFsAuthorizationWithContext)(e,o)]:[2/*return*/];case 2:return h.sent().canRead?[4/*yield*/,database_1.db.get("OpenFile")]:[2/*return*/];case 3:return a=h.sent(),u=a.find((function(e){return e.personId===r&&e.file_projectRelativePath===o})),l="open"===n?Date.now():(null==u?void 0:u.openedAt)||Date.now(),s="pin"===n||"unpin"!==n&&(null==u?void 0:u.isPinned),c=!!["open","pin"].includes(n)||"close"!==n&&(null==u?void 0:u.isOpen),p={file_projectRelativePath:o,personId:r,isPinned:s,isOpen:c,openedAt:l},[4/*yield*/,database_1.db.upsert("OpenFile",p)];case 4:return h.sent(),[2/*return*/]}}))}))};exports.setOpenFileWithContext=setOpenFileWithContext;
//# sourceMappingURL=setOpenFileWithContext.js.map