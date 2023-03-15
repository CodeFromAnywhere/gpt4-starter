"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,i=1,t=arguments.length;i<t;i++)for(var n in r=arguments[i])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserApp=void 0;var jsx_runtime_1=require("react/jsx-runtime"),authentication_1=require("authentication"),menu_1=require("menu"),react_with_native_router_1=require("react-with-native-router"),Header_1=require("./Header"),LayoutGrid_1=require("./LayoutGrid"),UserApp=function(e){var r=e.NextPage,i=e.pageProps,t=e.overwriteDefaultPages,n=e.customHeader,u=e.customMenu,s=e.menuProps,a=(0,react_with_native_router_1.useRouter)().asPath.substring(1).split("?")[0],o={login:authentication_1.LoginForm,signup:authentication_1.SignupForm,"signup-confirm":function(){return(0,jsx_runtime_1.jsx)(authentication_1.ConfirmForm,{isSignup:!0})},"login-confirm":function(){return(0,jsx_runtime_1.jsx)(authentication_1.ConfirmForm,{})},"edit-profile":authentication_1.UpdateMeForm,profile:authentication_1.PublicProfile},_=o[a]?o[a]:void 0,c=_&&!(null==t?void 0:t.includes(a))?(0,jsx_runtime_1.jsx)(_,{}):(0,jsx_runtime_1.jsx)(r,__assign({},i));return(0,jsx_runtime_1.jsx)(authentication_1.LoginWrapper,{children:(0,jsx_runtime_1.jsx)(LayoutGrid_1.LayoutGrid,__assign({header:n||(0,jsx_runtime_1.jsx)(Header_1.Header,{}),menu:u||(0,jsx_runtime_1.jsx)(menu_1.Menu,__assign({},s,{message:void 0}))},{children:c}))})};exports.UserApp=UserApp;
//# sourceMappingURL=UserApp.js.map