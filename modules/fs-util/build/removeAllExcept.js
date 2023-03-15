"use strict";var __awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function l(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}u((r=r.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(u){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=n.call(e,a)}catch(e){l=[6,e],r=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeAllExcept=void 0;var fs_1=require("./fs"),path_1=require("./path"),removeAllExcept=function(e,n){return __awaiter(void 0,void 0,void 0,(function(){var t,r;return __generator(this,(function(o){switch(o.label){case 0:return[4/*yield*/,fs_1.fs.readdir(e,{encoding:"utf8",withFileTypes:!0})];case 1:return t=o.sent(),r=t.map((function(t){var r;return(null===(r=null==n?void 0:n.ignore)||void 0===r?void 0:r.find((function(e){return e.includes(t.name)})))?{name:t.name,removed:!1}:("file"!==(null==n?void 0:n.typeToRemove)||t.isFile())&&("folder"!==(null==n?void 0:n.typeToRemove)||t.isDirectory())?fs_1.fs.rm(path_1.path.join(e,t.name),{recursive:!0}).then((function(){return{name:t.name,removed:!0}})):{name:t.name,removed:!1}})),[4/*yield*/,Promise.all(r)];case 2:return[2/*return*/,o.sent()]}}))}))};exports.removeAllExcept=removeAllExcept;
//# sourceMappingURL=removeAllExcept.js.map