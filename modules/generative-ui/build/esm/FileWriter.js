import { useFileWriter } from "file-writer";
import * as React from "react";
import { Div } from "react-with-native";
import { FileActions } from "./FileActions";
/**
Can probably not stay like this if we want to place the save-button elsewhere.
 */
export var FileWriter = function (props) {
    var projectRelativeFilePath = props.projectRelativeFilePath;
    var renderFileWriter = useFileWriter({
        projectRelativeFilePath: projectRelativeFilePath,
        hideButtons: true,
        initialWriterView: "edit",
    }).renderFileWriter;
    return (React.createElement(Div, { className: "flex flex-1 flex-col min-h-[80vh]" },
        React.createElement(FileActions, { projectRelativeFilePath: projectRelativeFilePath }),
        renderFileWriter()));
};
//# sourceMappingURL=FileWriter.js.map