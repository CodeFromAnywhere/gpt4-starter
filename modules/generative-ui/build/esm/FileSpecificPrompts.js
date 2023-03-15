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
import { processPrompt, usePromptResultAlert } from "prompt-components";
import * as React from "react";
import { Div, P } from "react-with-native";
import { useAlert } from "react-with-native-alert";
import { NavButton } from "./NavButton";
import { PromptButton } from "./PromptButton";
import { SelectionPrompts } from "./SelectionPrompts";
/**
 * Component to render all the prompts under a file
 */
export var FileSpecificPrompts = function (props) {
    var thePrompts = props.thePrompts, contentString = props.contentString, actualProjectRelativeFilePath = props.actualProjectRelativeFilePath, contextualPromptsObject = props.contextualPromptsObject, isFolder = props.isFolder, markdown = props.markdown;
    var refetch = function () {
        alert === null || alert === void 0 ? void 0 : alert("No refetch");
    };
    var showPromptAlert = usePromptResultAlert();
    var alert = useAlert();
    return (React.createElement(Div, null,
        React.createElement(SelectionPrompts, { contentString: contentString, projectRelativeFilePath: actualProjectRelativeFilePath, selectionContextualPrompts: contextualPromptsObject === null || contextualPromptsObject === void 0 ? void 0 : contextualPromptsObject.selectionContextualPrompts }),
        React.createElement(Div, null,
            React.createElement(P, { className: "font-bold" }, "Apply a prompt on the whole file"),
            React.createElement(Div, { className: "flex flex-row flex-wrap" },
                React.createElement(NavButton, { title: "\uD83C\uDFA4 Speak", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            alert === null || alert === void 0 ? void 0 : alert("Coming soon", "coming soon");
                            return [2 /*return*/];
                        });
                    }); } }),
                isFolder ? null : (React.createElement(NavButton, { title: "\uD83D\uDD4A Free-form prompt", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var question, name, realName, customPromptContent;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    question = prompt("What do you want to ask/prompt about this file?");
                                    if (!question || question === "") {
                                        return [2 /*return*/];
                                    }
                                    name = prompt("If we should add this prompt into the database, how should we call it? (leave empty if you don't want to save it)");
                                    realName = name === "" ? null : name;
                                    customPromptContent = "I am reading this file:\n\n```\n%context\n```\n\n".concat(question);
                                    return [4 /*yield*/, processPrompt({
                                            contextualContent: {
                                                contextContent: contentString,
                                                context_projectRelativeFilePath: actualProjectRelativeFilePath,
                                            },
                                            showPromptAlert: showPromptAlert,
                                            customPromptContent: customPromptContent,
                                            saveNewPromptWithName: realName,
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); } })), thePrompts === null || thePrompts === void 0 ? void 0 :
                thePrompts.map(function (prompt) {
                    return (React.createElement(PromptButton, { key: "prompt".concat(prompt.id), item: prompt, markdown: markdown, projectRelativeFilePath: actualProjectRelativeFilePath }));
                }))),
        isFolder ? (React.createElement(Div, null,
            "Execute for all files",
            React.createElement(Div, { className: "flex flex-row flex-wrap" }, contextualPromptsObject === null || contextualPromptsObject === void 0 ? void 0 : contextualPromptsObject.pageContextualPrompts.map(function (prompt) {
                return (React.createElement(NavButton, { onClick: function () {
                        alert === null || alert === void 0 ? void 0 : alert("Not implemented yet", "Execute a certain prompt for all files in a folder, recursively. Should not show the result immediately because these things should be queued and the result is too big to show immediately. There should be settings before you execute all prompts: recursively nested folders? how fast should it be executed? Which model? Etc.");
                    }, title: prompt.title || prompt.name }));
            })))) : null));
};
//# sourceMappingURL=FileSpecificPrompts.js.map