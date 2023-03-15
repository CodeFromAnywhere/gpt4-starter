import * as React from "react";
import { Div } from "react-with-native";
export var ContextMenuItemComponent = function (props) {
    var _a;
    var action = props.action, projectRelativeFilePath = props.projectRelativeFilePath;
    if (((_a = action.getIsEnabled) === null || _a === void 0 ? void 0 : _a.call(action, projectRelativeFilePath)) === false) {
        return null;
    }
    return (React.createElement(Div, { className: "hover:bg-black/10 p-2 cursor-pointer", onClick: function () {
            action.onClick(projectRelativeFilePath);
        } }, action.getTitle(projectRelativeFilePath)));
};
//# sourceMappingURL=ContextMenuItemComponent.js.map