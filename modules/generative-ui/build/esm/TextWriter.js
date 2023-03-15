import * as React from "react";
import { useEffect, useState } from "react";
import { P } from "react-with-native";
export var TextWriter = function (props) {
    var text = props.text, height = props.height, tooltip = props.tooltip;
    var _a = useState(0), characters = _a[0], setCharacters = _a[1];
    var _b = useState(false), showTypeBlock = _b[0], setShowTypeBlock = _b[1];
    useEffect(function () {
        setInterval(function () { return setCharacters(function (chars) { return chars + 1; }); }, 50);
        setInterval(function () { return setShowTypeBlock(function (show) { return !show; }); }, 320);
    }, []);
    return (React.createElement(P, null,
        text.slice(0, characters),
        showTypeBlock ? "▋" : "▎"));
};
//# sourceMappingURL=TextWriter.js.map