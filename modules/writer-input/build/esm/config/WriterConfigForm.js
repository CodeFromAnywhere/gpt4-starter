import * as React from "react";
import { Div } from "react-with-native";
import { useStore } from "../store";
import { SimplifiedSchemaForm } from "simplified-schema-form";
export var WriterConfigForm = function () {
    var _a = useStore("subtextConfig"), subtextConfig = _a[0], setSubtextConfig = _a[1];
    var _b = useStore("subwordConfig"), subwordConfig = _b[0], setSubwordConfig = _b[1];
    var values = [subtextConfig, subwordConfig];
    //SubtextConfigIndex.type.simplifiedSchema as SimplifiedSchema
    return (React.createElement(Div, null,
        React.createElement(SimplifiedSchemaForm, { id: "writerConfig", onChange: function (values) {
                var _a = values, newSubtextConfig = _a[0], newSubwordConfig = _a[1];
                setSubtextConfig(newSubtextConfig);
                setSubwordConfig(newSubwordConfig);
            }, parameters: [
                {
                    isDbModel: false,
                },
                {
                    isDbModel: false,
                },
            ], values: values })));
};
//# sourceMappingURL=WriterConfigForm.js.map