var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { ALink } from "next-a-link";
import { P } from "react-with-native";
export var NavButton = function (props) {
    var href = props.href, title = props.title, onClick = props.onClick, isActive = props.isActive, openContextMenuProps = props.openContextMenuProps, id = props.id, isDisabled = props.isDisabled;
    var className = " ".concat(isActive ? "dark:bg-blue-800" : "dark:bg-gray-700", " ").concat(isDisabled || isActive
        ? ""
        : "dark:hover:bg-gray-600 light:hover:bg-gray-200", " ").concat(isActive ? "light:bg-gray-300 dark:bg-gray-300" : "bg-gray-100", " p-1 mr-2 cursor-pointer lg:mr-4 text-xs line-clamp-1 truncate text-ellipsis");
    // TODO: add word-wrap ellipsis
    if (onClick) {
        return (React.createElement(P, __assign({ id: id, onClick: onClick, className: className }, openContextMenuProps), title));
    }
    return (React.createElement(ALink, { id: id, href: href, className: className },
        React.createElement("div", __assign({ id: id }, openContextMenuProps), title)));
};
//# sourceMappingURL=NavButton.js.map