"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unlock=void 0;var fs_util_1=require("fs-util"),getActionStatusFilePath_1=require("./getActionStatusFilePath"),unlock=function(t){var e=(0,getActionStatusFilePath_1.getActionStatusFilePath)(t);if(fs_util_1.fs.existsSync(e))return fs_util_1.fs.rm(e)};exports.unlock=unlock;
//# sourceMappingURL=unlock.js.map