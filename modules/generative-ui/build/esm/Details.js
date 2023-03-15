import * as React from "react";
export var Details = function (props) {
    return (React.createElement("details", { open: !props.isClosed, className: "group border border-gray-600 rounded-lg" },
        React.createElement("summary", { className: "bg-gray-200 dark:bg-gray-700 p-2 rounded-lg group-open:rounded-b-none group-open:border group-open:border-b-gray-600 select-none" }, props.summary),
        props.children));
};
//# sourceMappingURL=Details.js.map