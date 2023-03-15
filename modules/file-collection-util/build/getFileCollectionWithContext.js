"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileCollectionWithContext = void 0;
var fs_authorization_1 = require("fs-authorization");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var search_fs_1 = require("search-fs");
var file_collection_util_1 = require("file-collection-util");
/**
Returns a file collection as an array of files with either the raw string or a path to download a blob



TODO: put this back, only for markdown files (they can be augmented). Is this the right place though?

```ts

  const augmentedResult = await augmentMarkdown(fileContentString, {
    // for now no code yet, it's too slow
    augmentCode: false,
    augmentContextualPrompts: false,
    augmentContextualPromptResults: true,
    augmentStatements: true,
    augmentWords: true,
    externalHost: undefined,
    markdown_projectRelativeFilePath: makeRelative(
      finalAbsolutePath,
      projectRoot
    ),
  });
```

*/
var getFileCollectionWithContext = function (functionContext, 
/**
 * file path of which you want to see the file collection
 */
projectRelativeFilePath) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, projectRelativeBasePathArray, allowedBaseProjectRelativePath, baseAuthorization, groupSlugs, authorization, absoluteFilePath, absoluteFileCollectionPaths, files;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    return [2 /*return*/, { isSuccessful: false, message: "No project root" }];
                }
                projectRelativeBasePathArray = functionContext
                    ? (0, search_fs_1.getExplorableBasePathsWithContext)(functionContext)
                    : [];
                allowedBaseProjectRelativePath = (_a = projectRelativeBasePathArray.find(function (p) { return projectRelativeFilePath.startsWith(p.projectRelativePath); })) === null || _a === void 0 ? void 0 : _a.projectRelativePath;
                baseAuthorization = allowedBaseProjectRelativePath
                    ? { canRead: true, canWrite: true }
                    : { canRead: false, canWrite: false };
                groupSlugs = ((_b = functionContext.groups) === null || _b === void 0 ? void 0 : _b.map(function (x) { return x.slug; })) || [];
                return [4 /*yield*/, (0, fs_authorization_1.getFsAuthorization)({
                        baseAuthorization: baseAuthorization,
                        groupSlugs: groupSlugs,
                        projectRelativePath: projectRelativeFilePath,
                        projectRelativeBaseFolderPath: allowedBaseProjectRelativePath || "",
                    })];
            case 1:
                authorization = _c.sent();
                if (!authorization || !authorization.canRead) {
                    return [2 /*return*/, { isSuccessful: false, message: "You have no access" }];
                }
                absoluteFilePath = fs_util_1.path.join(projectRoot, projectRelativeFilePath);
                return [4 /*yield*/, (0, file_collection_util_1.getFileCollectionPaths)(absoluteFilePath)];
            case 2:
                absoluteFileCollectionPaths = _c.sent();
                if (!absoluteFileCollectionPaths ||
                    absoluteFileCollectionPaths.length === 0) {
                    return [2 /*return*/, { isSuccessful: false, message: "No file collection found" }];
                }
                files = absoluteFileCollectionPaths.map(function (p) {
                    var parsedPath = fs_util_1.path.parse(p);
                    // TODO: should be code, data, text, image, video, binary, etc. Type might overlap with BackendAsset filetypes
                    var type = "File";
                    var rawContent = "nothing yet... coming soon based on !isBinary()??readFile";
                    var file = {
                        name: parsedPath.base,
                        // TODO: create a function to get all actions that are appliccable on all unique filetypes we have.
                        actions: [],
                        rawContent: rawContent,
                        type: type,
                    };
                    return file;
                });
                return [2 /*return*/, { isSuccessful: true, message: "Found ".concat(files.length, " files"), files: files }];
        }
    });
}); };
exports.getFileCollectionWithContext = getFileCollectionWithContext;
exports.getFileCollectionWithContext.config = {
    isPublic: true,
};
//# sourceMappingURL=getFileCollectionWithContext.js.map