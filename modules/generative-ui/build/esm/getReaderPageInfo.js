export var getReaderPageInfo = function (isFolder, contextualPromptsObject, contextualPromptResults) {
    var fileContextualPromptResults = contextualPromptResults === null || contextualPromptResults === void 0 ? void 0 : contextualPromptResults.filter(function (x) { return !x.selectionString; });
    var selectionContextualPromptResults = contextualPromptResults === null || contextualPromptResults === void 0 ? void 0 : contextualPromptResults.filter(function (x) { return !!x.selectionString; });
    var thePrompts = isFolder
        ? (contextualPromptsObject === null || contextualPromptsObject === void 0 ? void 0 : contextualPromptsObject.folderContextualPrompts) || []
        : (contextualPromptsObject === null || contextualPromptsObject === void 0 ? void 0 : contextualPromptsObject.pageContextualPrompts) || [];
    return {
        thePrompts: thePrompts,
        selectionContextualPromptResults: selectionContextualPromptResults,
        fileContextualPromptResults: fileContextualPromptResults,
    };
};
//# sourceMappingURL=getReaderPageInfo.js.map