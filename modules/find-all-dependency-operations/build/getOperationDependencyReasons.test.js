"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var write_to_assets_1=require("write-to-assets"),getOperationDependencyReasons_1=require("./getOperationDependencyReasons");(0,getOperationDependencyReasons_1.getOperationDependencyReasons)().then((function(e){return(0,write_to_assets_1.writeToAssets)(__filename,e,"depreasons.json")}));
//# sourceMappingURL=getOperationDependencyReasons.test.js.map