import { useStore } from "./store";
/**
 * Looks at the NEXT_PUBLIC_BASEPATH or generative-web config to see if there's a custom project relative base folder path...
 */
export var useCustomProjectRelativeBaseFolderPath = function () {
    /**
     * project relative
     */
    var basePath = process.env.NEXT_PUBLIC_BASEPATH;
    var _a = useStore("explorer.config"), config = _a[0], setConfig = _a[1], hydrated = _a[2].hydrated;
    var customProjectRelativeBaseFolderPath = basePath && basePath !== ""
        ? basePath
        : config.activeCustomProjectRelativeBasePath;
    return { isLoading: !hydrated, customProjectRelativeBaseFolderPath: customProjectRelativeBaseFolderPath };
};
//# sourceMappingURL=useCustomProjectRelativeBaseFolderPath.js.map