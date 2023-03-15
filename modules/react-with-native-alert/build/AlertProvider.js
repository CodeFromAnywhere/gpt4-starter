"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function s(e){try{o(n.next(e))}catch(e){i(e)}}function l(e){try{o(n.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,l)}o((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(o){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(s=0)),s;)try{if(r=1,n&&(a=2&l[0]?n.return:l[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,l[1])).done)return a;switch(n=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return s.label++,{value:l[1],done:!1};case 5:s.label++,n=l[1],l=[0];continue;case 7:l=s.ops.pop(),s.trys.pop();continue;default:if(!(a=s.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){s=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){s.label=l[1];break}if(6===l[0]&&s.label<a[1]){s.label=a[1],a=l;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(l);break}a[2]&&s.ops.pop(),s.trys.pop();continue}l=t.call(e,s)}catch(e){l=[6,e],n=0}finally{r=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.AlertProvider=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_1=require("react"),Alert_1=require("./Alert"),react_2=require("@headlessui/react"),react_3=require("react"),react_with_native_1=require("react-with-native"),fancy_loader_1=require("fancy-loader"),AlertProvider=function(e){var t=e.children,r=(0,react_1.useState)([]),n=r[0],a=r[1],i=(0,react_1.useState)(-1),s=i[0],l=i[1],o=n[0];
// console.log("normal alertprovider");
return(0,jsx_runtime_1.jsxs)(Alert_1.AlertContext.Provider,__assign({value:function(e,t,r,i){var s={title:e,message:t,buttons:r,options:i},l=n.concat([s]);
// console.log("push alert state", { newState, alertState, newAlertState });
a(l)}},{children:[function(e){if(!e)
// console.log("HMMMM");
return null;
// console.log("Should render alert");
var t=e.title,r=e.buttons,i=e.message,o=e.options;//TODO: make it possible to fill in value here (prompt-alert)
return(0,jsx_runtime_1.jsx)("div",__assign({className:"absolute w-screen h-screen inset-0"},{children:(0,jsx_runtime_1.jsx)(react_2.Transition,__assign({appear:!0,show:!0,as:react_3.Fragment},{children:(0,jsx_runtime_1.jsx)(react_2.Dialog,__assign({as:"div",className:"fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm",onClose:function(){var e;!1!==(null==o?void 0:o.cancelable)&&(null===(e=null==o?void 0:o.onDismiss)||void 0===e||e.call(o),a(n.slice(1)))}},{children:(0,jsx_runtime_1.jsxs)("div",__assign({className:"min-h-screen px-4 text-center"},{children:[(0,jsx_runtime_1.jsx)(react_2.Transition.Child,__assign({as:react_3.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"},{children:(0,jsx_runtime_1.jsx)(react_2.Dialog.Overlay,{className:"fixed inset-0"})})),(0,jsx_runtime_1.jsx)("span",__assign({className:"inline-block h-screen align-middle","aria-hidden":"true"},{children:"​"})),(0,jsx_runtime_1.jsx)(react_2.Transition.Child,__assign({as:react_3.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},{children:(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},{children:[t?(0,jsx_runtime_1.jsx)(react_2.Dialog.Title,__assign({as:"h3",className:"text-lg font-medium leading-6 text-gray-900"},{children:t})):null,(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({className:"py-6"},{children:i})),r?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:r.length>3?"flex flex-col gap-4":"flex flex-row gap-4"},{children:r.map((function(e,t){var r="cancel"===e.style?"bg-gray-300 hover:bg-gray-400":"destructive"===e.style?"bg-red-500 hover:bg-red-600":"bg-blue-500 hover:bg-blue-600";return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({onClick:function(){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(i){switch(i.label){case 0:return l(t),[4/*yield*/,null===(r=e.onPress)||void 0===r?void 0:r.call(e,undefined)];case 1:return i.sent(),l(-1),a(n.slice(1)),[2/*return*/]}}))}))},className:"cursor-pointer py-2 ".concat(r," rounded-md flex flex-1 items-center justify-center")},{children:[s===t?(0,jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader,{}):null,e.text]}),"button".concat(t))}))})):null]}))}))]}))}))}))}))}(o),t]}))};exports.AlertProvider=AlertProvider;
//# sourceMappingURL=AlertProvider.js.map