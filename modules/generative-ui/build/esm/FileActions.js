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
import * as React from "react";
import { Div } from "react-with-native";
import { useFileWriter } from "file-writer";
import { useQueryPath } from "explorer-core-ui";
import { api, queries } from "api";
import { useAlert } from "react-with-native-alert";
import { ContextMenuItemComponent } from "./ContextMenuItemComponent";
import { showStandardResponse } from "cool-toast";
/**
TODO: finish actions, ensure the refething is also working

Actions for every text-file

- Save
- Open in VSCode, TextEdit
- Copy text content
- Run ts file with node (if testfile) or to open terminal in folder (for any other file)

 */
export var FileActions = function (props) {
    var projectRelativeFilePath = props.projectRelativeFilePath;
    var queryPath = useQueryPath();
    var fileCollectionQuery = queries.useGetFileCollectionWithContext(queryPath);
    var refetch = function () {
        fileCollectionQuery.refetch();
    };
    var alert = useAlert();
    var _a = useFileWriter({
        projectRelativeFilePath: projectRelativeFilePath,
        hideButtons: true,
        initialWriterView: "edit",
    }), save = _a.save, isSaved = _a.isSaved;
    var saveAction = {
        getTitle: function () { return "💾 Save"; },
        getIsEnabled: function () { return !isSaved; },
        onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, save()];
                    case 1:
                        _a.sent();
                        refetch();
                        return [2 /*return*/];
                }
            });
        }); },
    };
    var copyAction = {
        getTitle: function () { return "🖲 Copy"; },
        onClick: function () {
            console.log("Coming soon");
        },
    };
    var openAction = {
        getTitle: function () { return "↩️ Open with"; },
        onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert === null || alert === void 0 ? void 0 : alert("Coming soon, open VSCode/TextEdit/Browser, or other programs for other files?");
                        if (!projectRelativeFilePath)
                            return [2 /*return*/];
                        return [4 /*yield*/, api.vscodeOpen({
                                files: [{ projectRelativePath: projectRelativeFilePath }],
                            })];
                    case 1:
                        apiResult = _a.sent();
                        showStandardResponse(apiResult);
                        return [2 /*return*/];
                }
            });
        }); },
    };
    var runTestAction = {
        getTitle: function () { return "⚡️ Test"; },
        getIsEnabled: function (projectRelativeFilePath) {
            return (projectRelativeFilePath === null || projectRelativeFilePath === void 0 ? void 0 : projectRelativeFilePath.endsWith(".test.ts")) || false;
        },
        onClick: function () {
            alert === null || alert === void 0 ? void 0 : alert("Coming soon (open test with nodejs)");
        },
    };
    var exportAction = {
        getTitle: function () { return "⬇️ Export"; },
        onClick: function () {
            alert === null || alert === void 0 ? void 0 : alert("Export (pdf, presentation-pdf)");
        },
    };
    var runFunctionAction = {
        getTitle: function () { return "⚡️ Run"; },
        onClick: function () {
            alert === null || alert === void 0 ? void 0 : alert("Run file-action on this file, like generating an image description or sending it via an email");
        },
    };
    var allActions = [
        saveAction,
        openAction,
        copyAction,
        runTestAction,
        exportAction,
        runFunctionAction,
    ];
    return (React.createElement(Div, { className: "flex flex-row flex-wrap" }, allActions.map(function (action) { return (React.createElement(ContextMenuItemComponent, { action: action, projectRelativeFilePath: projectRelativeFilePath })); })));
};
//# sourceMappingURL=FileActions.js.map