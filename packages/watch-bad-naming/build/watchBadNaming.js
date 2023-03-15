"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.watchBadNaming=void 0;var fs_util_1=require("fs-util"),convert_case_1=require("convert-case"),get_path_1=require("get-path"),watchBadNaming=function(e,t){if(!fs_util_1.fs.existsSync(t))return{isSuccessful:!1,message:"File doesn't exist (anymore)"};console.log("Bad naming (".concat(t,") not implemented yet"))};exports.watchBadNaming=watchBadNaming,exports.watchBadNaming.startupStrategy="queue",exports.watchBadNaming.filter=function(e,t){
// only new files can potentially contain bad naming since their name was changed and we already should've done an initial check
if(!["add","addDir"].includes(e))return!1;var a=(0,get_path_1.getProjectRoot)();if(!a)return!1;if(!t.startsWith(a))return!1;var r=fs_util_1.path.parse(t),i=r.dir;if(i!==(0,convert_case_1.slugify)((0,convert_case_1.kebabCase)(i)))
// there's something wrong with the folder, so that one needs to be done first (should be picked up by other listener)
return!1;var s=r.name;
// name is already correct (assuming below folders are indiviually detected by the scrape/watcher)
return s!==(0,convert_case_1.slugify)((0,convert_case_1.kebabCase)(s));
// something can be improved on the filename
},exports.watchBadNaming.config={isHeavy:!1,isInternetRequired:!1,isBrowserRequired:!1,
// NB: Disabled for now until we are sure the `exploreRename` works. Then just use that
isDisabled:!0};
//# sourceMappingURL=watchBadNaming.js.map