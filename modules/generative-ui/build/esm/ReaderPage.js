var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { api, getGetApiUrl, queries } from "api";
import { ClickableIcon } from "clickable-icon";
import { useFileWriter } from "file-writer";
import { MarkdownContent } from "markdown";
import * as React from "react";
import { useState } from "react";
import { Div, P } from "react-with-native";
import { apiUrl } from "server-api-url";
import { useRouter } from "react-with-native-router";
import { Tabs } from "tabs";
import { FileActions } from "./FileActions";
import { useQueryPath } from "explorer-core-ui";
import { useStore } from "./store";
import { TranscriptionPlayer } from "./TranscriptionPlayer";
import { AssetView } from "asset-view";
import { getAssetDirectlyApiUrl } from "asset-functions-js";
import { tryParseJson } from "try-parse-json";
export var ReaderPage = function (props) {
    // global state: which file to show?
    var _a;
    var queryPath = useQueryPath();
    var fileCollectionQuery = queries.useGetFileCollectionWithContext(queryPath);
    var fileCollection = (_a = fileCollectionQuery.data) === null || _a === void 0 ? void 0 : _a.result;
    var _b = useState(false), sidebarHidden = _b[0], setSidebarHidden = _b[1];
    var isFullscreen = useStore("menu.isFullScreen")[0];
    var router = useRouter();
    var _c = useStore("api.customUrl"), customUrl = _c[0], setCustomUrl = _c[1], customUrlInfo = _c[2];
    var _d = useFileWriter({
        projectRelativeFilePath: queryPath,
        hideButtons: true,
        initialWriterView: "edit",
    }), renderFileWriter = _d.renderFileWriter, save = _d.save, isSaved = _d.isSaved;
    var onFocus = function () { return __awaiter(void 0, void 0, void 0, function () {
        var localUrl;
        return __generator(this, function (_a) {
            if (!customUrlInfo.hydrated) {
                return [2 /*return*/];
            }
            localUrl = "http://localhost:42000";
            if (customUrl === localUrl) {
                return [2 /*return*/];
            }
            return [2 /*return*/];
        });
    }); };
    React.useEffect(function () {
        window.addEventListener("focus", onFocus);
        //   window.addEventListener("blur", onBlur);
        // Calls onFocus when the window first loads
        onFocus();
        // Specify how to clean up after this effect:
        return function () {
            window.removeEventListener("focus", onFocus);
            //  window.removeEventListener("blur", onBlur);
        };
    }, []);
    // const variantResult = useVariantResult(contextualPromptResults);
    // const fileType =
    //   fileTypePerExtension[
    //     getExtension(
    //       props.projectRelativeFilePath
    //     ) as keyof typeof fileTypePerExtension
    //   ] || undefined;
    // NB: this doesn't allow inline links so we cannot use this type of color highlihgting...
    // const codeblockWrappedMarkdown = variantResult?.resultText
    //   ? variantResult?.resultText
    //   : // : fileType === "code"
    //     // ? `\`\`\`tsx\n${markdown}\n\`\`\``
    //     // : fileType === "data"
    //     // ? `\`\`\`json\n${markdown}\n\`\`\``
    //     markdown;
    // const markdownParse = mdToJsonParse(contentString);
    var renderEditContent = function () {
        return (React.createElement(Div, { className: "flex flex-1 flex-col lg:h-full lg:overflow-y-scroll" },
            React.createElement(FileActions, { projectRelativeFilePath: queryPath }),
            renderFileWriter()));
    };
    var renderPage = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var hasPlayableFile = !!((_a = fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.files) === null || _a === void 0 ? void 0 : _a.find(function (x) { return x.type && ["audio", "video"].includes(x.type); }));
        //Enable capability to download the file, file-collection, folder (download api)
        //Enable capability to show MarkdownIndex in render
        var markdownIndexContent = (_c = (_b = fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.files) === null || _b === void 0 ? void 0 : _b.find(function (x) {
            return x.name.endsWith(".MarkdownIndex.json");
        })) === null || _c === void 0 ? void 0 : _c.rawContent;
        var markdownIndex = markdownIndexContent
            ? tryParseJson(markdownIndexContent)
            : null;
        var binaryFiles = ((_d = fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.files) === null || _d === void 0 ? void 0 : _d.filter(function (x) { return x.type === "other"; })) || [];
        var textFiles = (_e = fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.files) === null || _e === void 0 ? void 0 : _e.filter(function (x) { return x.type === "text"; });
        var imageFiles = ((_f = fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.files) === null || _f === void 0 ? void 0 : _f.filter(function (x) { return x.type === "image"; })) || [];
        return (React.createElement(Div, { className: "flex flex-1 flex-col" },
            React.createElement(FileActions, { projectRelativeFilePath: queryPath }),
            sidebarHidden ? (React.createElement(Div, { className: "max-lg:hidden lg:block flex justify-end" },
                React.createElement(ClickableIcon, { emoji: "<<", onClick: function () { return setSidebarHidden(false); } }))) : null,
            React.createElement(P, null,
                "Files:", (_g = fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.files) === null || _g === void 0 ? void 0 :
                _g.length),
            hasPlayableFile ? (
            // Enable capability to stream mp3/mp4/wav with correct link
            React.createElement(TranscriptionPlayer, { files: fileCollection === null || fileCollection === void 0 ? void 0 : fileCollection.files })) : null,
            imageFiles.length > 0
                ? imageFiles.map(function (imageFile) {
                    // Enable capability to render image
                    return (React.createElement(AssetView, { projectRelativeReferencingFilePath: imageFile.projectRelativePath, asset: {
                            absoluteUrl: getAssetDirectlyApiUrl(apiUrl, imageFile.projectRelativePath),
                        } }));
                })
                : null, textFiles === null || textFiles === void 0 ? void 0 :
            textFiles.map(function (textFile) {
                return textFile.rawContent ? (React.createElement(MarkdownContent, { config: {}, content: textFile.rawContent })) : null;
            }),
            binaryFiles.map(function (binaryFile) {
                return (React.createElement(Div, { onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var download, token, url;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, api.createDownloadWithContext(binaryFile.projectRelativePath)];
                                case 1:
                                    download = _b.sent();
                                    token = (_a = download.result) === null || _a === void 0 ? void 0 : _a.downloadId;
                                    if (!token) {
                                        alert === null || alert === void 0 ? void 0 : alert("Something went wrong");
                                    }
                                    url = getGetApiUrl(apiUrl, "downloadGetApi", { token: token });
                                    window.open(url, "_blank");
                                    return [2 /*return*/];
                            }
                        });
                    }); } },
                    "Download ",
                    binaryFile.name));
            })));
    };
    /*  const variantsOnLg =
      !fileContextualPromptResults ||
      sidebarHidden ||
      !fileContextualPromptResults.length ? null : (
        <Div className="lg:block max-lg:hidden lg:w-[280px] 2xl:w-[400px] lg:h-full lg:overflow-y-scroll">
          <Div className="flex flex-row ml-3">
            <ClickableIcon emoji="╳" onClick={() => setSidebarHidden(true)} />
            <P className="ml-2 font-bold">File Prompt Results</P>
          </Div>
          {fileContextualPromptResults?.map((result) => {
            if (!result.resultText) return null;
            return (
              <Div className="m-2 p-2 bg-gray-100 dark:bg-slate-800 rounded-lg">
                <Div className="w-full flex justify-between">
                  <P className="font-bold">{result.contextualPromptSlug}</P>
                  <ClickableIcon
                    emoji="👀"
                    onClick={() => {
                      const query: {
                        queryPath: string | string[] | undefined;
                        variant?: string;
                      } = {
                        queryPath: router.query.queryPath,
                        variant: result.contextualPromptSlug,
                      };
  
                      router.push({ query }, undefined, { shallow: true });
                    }}
                  />
                </Div>
                <MarkdownContent
                  config={markdownContentConfig}
                  content={result.resultText}
                />
              </Div>
            );
          })}
        </Div>
      );*/
    var renderPresentation = function () { return (React.createElement(P, null, "coming soon")
    // <MarkdownParsePresentation
    //   markdownParse={markdownParse}
    //   projectRelativeBaseFolderPath={projectRelativeBaseFolderPath || "/"}
    //   projectRelativeMarkdownFilePath={actualProjectRelativeFilePath || "/"}
    // />
    ); };
    return isFullscreen ? (renderPresentation()) : (React.createElement(Div, { className: "lg:flex lg:flex-row h-full" },
        React.createElement("div", { className: "flex flex-col flex-1 lg:h-full lg:overflow-y-scroll" },
            React.createElement(Tabs, { tabKey: "reader", tabs: [
                    { emoji: "📖", title: "Read", renderTab: renderPage },
                    {
                        emoji: "🎁",
                        title: "Present",
                        renderTab: renderPresentation,
                    },
                    { emoji: "✏️", title: "Write", renderTab: renderEditContent },
                ], title: queryPath.split("?")[0] }))));
};
//# sourceMappingURL=ReaderPage.js.map