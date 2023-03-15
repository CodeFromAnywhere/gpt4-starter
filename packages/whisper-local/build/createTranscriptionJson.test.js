"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readTranscriptionCsv_1 = require("./readTranscriptionCsv");
(0, readTranscriptionCsv_1.readTranscriptionCsv)("/Users/king/King/operations/tools/control-system/whisper-local/assets/jfk.wav.csv").then(function (result) {
    console.log({ result: result });
});
//# sourceMappingURL=createTranscriptionJson.test.js.map