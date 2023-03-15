"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setConfig=void 0;var react_with_native_store_1=require("react-with-native-store"),setConfig=function(e,t,
/**
 * TITLE: CustomProject relative base path of your file system to show
 */
i){(0,react_with_native_store_1.setItem)("api.customUrl",""===e?null:e),(0,react_with_native_store_1.setItem)("explorer.config",{disableAdmin:t,customCustomProjectRelativeBasePaths:i})};exports.setConfig=setConfig;
//# sourceMappingURL=setConfig.js.map