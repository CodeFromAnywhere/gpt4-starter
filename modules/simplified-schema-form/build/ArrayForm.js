"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var i,r=1,a=arguments.length;r<a;r++)for(var t in i=arguments[r])Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e},__assign.apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,i,r){if(r||2===arguments.length)for(var a,t=0,n=i.length;t<n;t++)!a&&t in i||(a||(a=Array.prototype.slice.call(i,0,t)),a[t]=i[t]);return e.concat(a||Array.prototype.slice.call(i))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ArrayForm=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_1=require("react-with-native"),convert_case_1=require("convert-case"),clickable_icon_1=require("clickable-icon"),js_util_1=require("js-util"),SimplifiedSchemaForm_1=require("./SimplifiedSchemaForm"),ArrayForm=function(e){var i=e.itemNameOrId,r=e.parameterNameStack,a=e.projectRelativeStorageFilePath,t=e.parameter,n=e.isDebug,s=e.id,c=e.referencableModelData,l=e.onChangeParameter,_=e.parameterValue,o=e.modelName;if(!t.simplifiedSchema)return null;
// we can only render the array if it has items...
if(!t.simplifiedSchema.items||0===t.simplifiedSchema.items.length)return console.log("Array without schema items",{parameter:t}),n?(0,jsx_runtime_1.jsxs)(react_with_native_1.P,__assign({className:"text-red-500"},{children:["Array without schema items (",t.name,")"," ",JSON.stringify(t.simplifiedSchema)]})):null;
// TODO: make these actions work!
var m=t.required?_&&_.length>0:void 0!==_,u=t.required?"(Required)":"(Optional)",d=_?_.length>0?"Array (".concat(_.length,")"):"Empty array":"undefined";return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"ml-2 pl-2 my-4 border-l border-gray-900 dark:border-gray-100"},{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"flex flex-row justify-between"},{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.P,{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Span,__assign({className:"font-bold"},{children:[(0,convert_case_1.humanCase)(t.name||"")," "]})),u," ",d]}),(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"flex flex-row"},{children:[m?(0,jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon,{onClick:function(){
// NB: clearing will set it to undefined, unless the array is required, then we should just set it to an empty array.
l(t.required?[]:void 0)},emoji:"❌"}):null,void 0===_||0===_.length?(0,jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon,{onClick:function(){_&&_.length>0||l([void 0])},emoji:"➕"}):null]}))]})),n?(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({className:"italic text-gray-600"},{children:t.simplifiedSchema.description})):null,null==_?void 0:_.map((function(e,m){var u,d,h,v=null===(h=null===(d=null===(u=t.simplifiedSchema)||void 0===u?void 0:u.items)||void 0===d?void 0:d[0])||void 0===h?void 0:h.schema,f=!!t.name&&t.name.length>0;return(0,jsx_runtime_1.jsx)(react_with_native_1.Div,{children:(0,jsx_runtime_1.jsx)(SimplifiedSchemaForm_1.SimplifiedSchemaForm,{modelName:o,itemNameOrId:i,projectRelativeStorageFilePath:a,isDebug:n,parameterNameStack:f?r?__spreadArray(__spreadArray([],r,!0),[t.name],!1):[t.name]:r,parameters:[{name:"".concat(t.name," item ").concat(m+1),required:!0,simplifiedSchema:v,isDbModel:!1,renderButtons:function(){return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"flex flex-row"},{children:[0===m?(0,jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon,{onClick:function(){return function(e){
// insert into array
if(_){var i=(0,js_util_1.insertAt)(_,void 0,e);l(i)}}(m)},emoji:"↑"}):null,(0,jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon,{onClick:function(){return function(e){
// insert into array
if(_){var i=(0,js_util_1.insertAt)(_,void 0,e+1);l(i)}}(m)},emoji:"↓"}),(0,jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon,{onClick:function(){return function(e){if(_){var i=(0,js_util_1.removeIndexFromArray)(_,e);l(i)}}(m)},emoji:"˟"})]}))}}],onChange:function(e){var i=e[0];
// set this index of the array to the new value taken from the form
_[m]=i,
// only change the value that contains the array
l(_)},values:[e],
// just passing this
referencableModelData:c,id:"".concat(s,".").concat(m)})})}))]}))};exports.ArrayForm=ArrayForm;
//# sourceMappingURL=ArrayForm.js.map