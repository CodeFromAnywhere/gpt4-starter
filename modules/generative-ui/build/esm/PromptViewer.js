import { fileTypePerExtension, } from "ai-types";
import { ClickableIcon } from "clickable-icon";
import { MarkdownContent } from "markdown";
import * as React from "react";
import { useState } from "react";
import { useRouter } from "react-with-native-router";
import { Div, P } from "react-with-native";
import { FileSpecificPrompts } from "./FileSpecificPrompts";
import { useVariantResult } from "./useVariantResult";
import { VariantSelector } from "./VariantSelector";
import { getExtension, getFileOrFolderName, getFolderJs } from "fs-util-js";
import { useLastSelection } from "share";
/**

Markdown files should have the ability to do prompts, like before...

- Fix PromptViewer
- Add PromptViewer to TextFile

 */
export var PromptViewer = function (props) {
    var projectRelativeFilePath = props.projectRelativeFilePath, contextualPromptResults = props.contextualPromptResults, markdown = props.markdown, contextualPrompts = props.contextualPrompts;
    var _a = useState(false), sidebarHidden = _a[0], setSidebarHidden = _a[1];
    var router = useRouter();
    var lastSelection = useLastSelection();
    var variantResult = useVariantResult(contextualPromptResults);
    var fileType = fileTypePerExtension[getExtension(props.projectRelativeFilePath)] || undefined;
    var variantsOnLg = sidebarHidden ? null : (React.createElement(Div, { className: "lg:block max-lg:hidden lg:w-[280px] 2xl:w-[400px] lg:h-full lg:overflow-y-scroll" },
        React.createElement(Div, { className: "flex flex-row ml-3" },
            React.createElement(ClickableIcon, { emoji: "\u2573", onClick: function () { return setSidebarHidden(true); } }),
            React.createElement(P, { className: "ml-2 font-bold" }, "File Prompt Results")), contextualPromptResults === null || contextualPromptResults === void 0 ? void 0 :
        contextualPromptResults.map(function (result) {
            if (!result.resultText)
                return null;
            return (React.createElement(Div, { className: "m-2 p-2 bg-gray-100 dark:bg-slate-800 rounded-lg" },
                React.createElement(Div, { className: "w-full flex justify-between" },
                    React.createElement(P, { className: "font-bold" }, result.contextualPromptSlug),
                    React.createElement(ClickableIcon, { emoji: "\uD83D\uDC40", onClick: function () {
                            var query = {
                                queryPath: router.query.queryPath,
                                variant: result.contextualPromptSlug,
                            };
                            router.push({ query: query }, undefined, { shallow: true });
                        } })),
                React.createElement(MarkdownContent, { config: {}, content: result.resultText })));
        })));
    return (React.createElement(Div, null,
        React.createElement(VariantSelector, { projectRelativeFilePath: projectRelativeFilePath, folderPath: getFolderJs(projectRelativeFilePath), isFolder: false, filename: getFileOrFolderName(projectRelativeFilePath), contextualPromptResults: contextualPromptResults }),
        lastSelection.selection ? (React.createElement(FileSpecificPrompts, { actualProjectRelativeFilePath: projectRelativeFilePath, contentString: lastSelection.selection, 
            // contextualPromptsObject={{}}
            thePrompts: contextualPrompts, isFolder: false, markdown: markdown })) : null,
        variantsOnLg));
};
//# sourceMappingURL=PromptViewer.js.map