"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var fs_util_1=require("fs-util"),getCommonAncestor_1=require("./getCommonAncestor"),getProjectRoot_1=require("./getProjectRoot"),test=function(){var e=__filename,t=fs_util_1.path.join((0,getProjectRoot_1.getProjectRoot)(),"readme.md");console.log({path1:e,path2:t},(0,getCommonAncestor_1.getCommonAncestor)(e,t))};test();
//# sourceMappingURL=getCommonAncestor.test.js.map