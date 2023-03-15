import { codeExtensions } from "filename-conventions";
import { getExtension, getFolderJs } from "fs-util-js";
import { notEmpty } from "js-util";
import { MarkdownContent } from "markdown";
import { mdToJsonParse } from "markdown-parse-js";
import * as React from "react";
import { Tabs } from "tabs";
import { MarkdownParsePresentation } from "writer-input";
import { Details } from "./Details";
import { FileWriter } from "./FileWriter";
import { PromptViewer } from "./PromptViewer";
/**

TODO: Add monaco editor

 */
export var TextFile = function (props) {
    var index = props.index, item = props.item;
    var isMarkdown = item.name.endsWith(".md");
    var isCode = codeExtensions
        .concat(["json", "JSON"])
        .includes(getExtension(item.projectRelativePath));
    var tabs = [
        {
            emoji: "✏️",
            title: "Write",
            renderTab: function () {
                //  if (isCode) {
                // TODO: ts(x)/json files should be specially opened with the monaco editor to immediately get color highlighting and are editable. Never really interested in just viewing that one
                //   return <Div>Coming soon (MONACO)</Div>;
                // }
                return (React.createElement(FileWriter, { projectRelativeFilePath: item.projectRelativePath }));
            },
        },
        isMarkdown
            ? {
                //
                emoji: "📖",
                title: "Read",
                renderTab: function () {
                    return item.rawContent ? (React.createElement(MarkdownContent, { config: {
                            projectRelativeBaseFolderPath: getFolderJs(item.projectRelativePath),
                            projectRelativeMarkdownFilePath: item.projectRelativePath,
                        }, content: item.rawContent })) : null;
                },
            }
            : undefined,
        isMarkdown
            ? {
                emoji: "📽",
                title: "Present",
                renderTab: function () {
                    var markdownParse = item.rawContent
                        ? mdToJsonParse(item.rawContent)
                        : undefined;
                    if (!markdownParse) {
                        return null;
                    }
                    return (React.createElement(MarkdownParsePresentation, { markdownParse: markdownParse, projectRelativeBaseFolderPath: getFolderJs(item.projectRelativePath), projectRelativeMarkdownFilePath: item.projectRelativePath }));
                },
            }
            : undefined,
        isMarkdown
            ? {
                emoji: "❓",
                title: "Prompt",
                renderTab: function () {
                    return (React.createElement(PromptViewer, { markdown: item.rawContent, contextualPromptResults: [], contextualPrompts: [], projectRelativeFilePath: item.projectRelativePath }));
                },
            }
            : undefined,
    ].filter(notEmpty);
    return (React.createElement(Details, { summary: item.name, isClosed: index !== 0 }, tabs.length > 1 ? (React.createElement(Tabs, { isSmall: true, tabKey: "textFile.".concat(item.name), tabs: tabs })) : null
    //  tabs[0]?.renderTab()
    ));
};
//# sourceMappingURL=TextFile.js.map