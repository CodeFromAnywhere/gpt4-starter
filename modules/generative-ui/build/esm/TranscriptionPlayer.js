import { AssetView } from "asset-view";
import * as React from "react";
import { Div } from "react-with-native";
import { apiUrl } from "server-api-url";
import { tryParseJson } from "try-parse-json";
import { getAssetDirectlyApiUrl } from "asset-functions-js";
import { queries } from "api";
import { useQueryPath } from "explorer-core-ui";
/**
 */
export var TranscriptionPlayer = function () {
    var _a, _b, _c;
    var queryPath = useQueryPath();
    var fileCollectionQuery = queries.useGetFileCollectionWithContext(queryPath);
    var files = (_b = (_a = fileCollectionQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.files;
    var transcriptionFileContent = (_c = files === null || files === void 0 ? void 0 : files.find(function (x) {
        return x.name.endsWith(".transcription.json");
    })) === null || _c === void 0 ? void 0 : _c.rawContent;
    var transcription = transcriptionFileContent
        ? tryParseJson(transcriptionFileContent) || undefined
        : undefined;
    var videoFile = files === null || files === void 0 ? void 0 : files.find(function (x) { return x.type === "video"; });
    var audioFile = files === null || files === void 0 ? void 0 : files.find(function (x) { return x.type === "audio"; });
    var preferredPlayerFile = videoFile || audioFile;
    var absoluteUrl = (preferredPlayerFile === null || preferredPlayerFile === void 0 ? void 0 : preferredPlayerFile.projectRelativePath)
        ? getAssetDirectlyApiUrl(apiUrl, preferredPlayerFile === null || preferredPlayerFile === void 0 ? void 0 : preferredPlayerFile.projectRelativePath)
        : undefined;
    console.log("render transcriptionplayer", { absoluteUrl: absoluteUrl });
    //
    return (React.createElement(Div, null, absoluteUrl ? (React.createElement(AssetView, { className: "max-h-screen max-w-screen", projectRelativeReferencingFilePath: preferredPlayerFile === null || preferredPlayerFile === void 0 ? void 0 : preferredPlayerFile.projectRelativePath, asset: { absoluteUrl: absoluteUrl }, transcription: transcription })) : null));
};
//# sourceMappingURL=TranscriptionPlayer.js.map