import { AssetView } from "asset-view";
import * as React from "react";
import { Div, P } from "react-with-native";
import { apiUrl } from "server-api-url";
import { tryParseJson } from "try-parse-json";
import { getAssetDirectlyApiUrl } from "asset-functions-js";
/**
 TODO:
 
 extrahere audio/video player from AssetView or insert the Transcription into the AssetView
 
 get the play time from the player and match it with the sentence and word

 highlight both the sentence and word in the text

 make every word clickable, going to the right place in the video

 ===========


 If it also has mp3 or mp4, we should be able to click through the parts based on the transcription. Subtitles on sentence level and word-level would be very cool to have in realtime, so let's make a react-component for this. Related to ShortMarkdown player.

I have the `Transcription` file now. It should be possible with simple HTML and a bit of React state (Javascript) to create a realtime video generation renderer from the transcription, which plays the audio and shows text in different ways, and enables you to navigate through the videos.

Possibly, this is the singlemost useful thing I can be doing now, since it demonstrates what we are making much more. If I get this to work and if every new audio immeiately goes onto the OS and is exposed via a URL, I can share any audio message via clarity. Huge shareability potential!

An export button would be great too, though we might need to use ffmpeg for the real deal.

Let's not dream too much, let's just doo this first.

  // get online, this is definitely worth it.

  // audio play/pause, volume, speed, and time setting (ui scrolling through the audio)

hook audio time to the component, preferably 10fps minimum

calculate which sentence needs to be rendered and in the sentence, which word

scroll down to see the entire text as well, with the sentence + word highlighted, hovering over a sentence highlights it, clicking the sentence goes there in the video.

 */
export var TranscriptionPlayer = function (props) {
    var _a;
    var files = props.files;
    var transcriptionFileContent = (_a = files === null || files === void 0 ? void 0 : files.find(function (x) {
        return x.name.endsWith(".transcription.json");
    })) === null || _a === void 0 ? void 0 : _a.rawContent;
    var transcriptionJson = transcriptionFileContent
        ? tryParseJson(transcriptionFileContent)
        : null;
    var videoFile = files === null || files === void 0 ? void 0 : files.find(function (x) { return x.type === "video"; });
    var audioFile = files === null || files === void 0 ? void 0 : files.find(function (x) { return x.type === "audio"; });
    var preferredPlayerFile = videoFile || audioFile;
    var absoluteUrl = (preferredPlayerFile === null || preferredPlayerFile === void 0 ? void 0 : preferredPlayerFile.projectRelativePath)
        ? getAssetDirectlyApiUrl(apiUrl, preferredPlayerFile === null || preferredPlayerFile === void 0 ? void 0 : preferredPlayerFile.projectRelativePath)
        : undefined;
    return (React.createElement(Div, null,
        absoluteUrl ? (React.createElement(AssetView, { className: "max-h-screen max-w-screen", projectRelativeReferencingFilePath: preferredPlayerFile === null || preferredPlayerFile === void 0 ? void 0 : preferredPlayerFile.projectRelativePath, asset: { absoluteUrl: absoluteUrl } })) : null,
        (transcriptionJson === null || transcriptionJson === void 0 ? void 0 : transcriptionJson.text) ? React.createElement(P, null, transcriptionJson.text) : null));
};
//# sourceMappingURL=Player.js.map