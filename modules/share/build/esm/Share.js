import * as React from "react";
// import { useState } from "react";
import { queries } from "api";
import { ClickableIcon } from "clickable-icon";
import { Div } from "react-with-native";
import { useAlert } from "react-with-native-alert";
import { useAllText } from "./useAllText";
import { useLastSelection } from "./useLastSelection";
import { useModal } from "react-with-native-modal";
import { FunctionForm } from "function-form";
import { errorToast } from "cool-toast";
import Index from "ai-functions-node/db/ts-functions/process-chat-gpt-prompt.json";
// and
/**

*/
export var Share = function (props) {
    var _a;
    var contextText = props.contextText;
    var handleModal = useModal().handleModal;
    var contextualPromptQuery = queries.useGetReferencableModelDataWithContext("ContextualPrompt");
    var alert = useAlert();
    var allText = useAllText();
    var lastSelection = useLastSelection();
    var modalContent = (React.createElement(Div, { className: "h-[60vh] overflow-y-auto" },
        React.createElement(FunctionForm, { tsFunction: Index, initialValues: [
                contextText || allText || "",
                lastSelection || "",
                undefined,
                "",
                "",
                "",
            ], referencableModelData: {
                ContextualPrompt: {
                    isLoading: contextualPromptQuery.isLoading,
                    data: (_a = contextualPromptQuery.data) === null || _a === void 0 ? void 0 : _a.result,
                },
            }, projectRelativeStorageFilePath: "readme.md", modelName: "", withApiResult: function (result) {
                var _a, _b, _c, _d;
                console.log({ result: result });
                if (!((_a = result.result) === null || _a === void 0 ? void 0 : _a.isSuccessful)) {
                    errorToast(((_b = result === null || result === void 0 ? void 0 : result.result) === null || _b === void 0 ? void 0 : _b.message) ||
                        result.message ||
                        "Something went wrong");
                    return;
                }
                handleModal(null);
                var text = (_d = (_c = result === null || result === void 0 ? void 0 : result.result) === null || _c === void 0 ? void 0 : _c.result) === null || _d === void 0 ? void 0 : _d.text;
                alert === null || alert === void 0 ? void 0 : alert("You did it", text, [
                    { text: "Share", style: "default" },
                    { text: "Do nothing", style: "destructive" },
                ]);
            } })));
    return (React.createElement(ClickableIcon, { emoji: "\uD83D\uDCA1", onClick: function () {
            // opens modal
            handleModal(modalContent);
        } }));
};
//# sourceMappingURL=Share.js.map