"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.maximumLockTime=exports.lockfileSuffix=void 0,exports.lockfileSuffix=".ActionStatus.json",
// NB: needs to be enough time for the 5% step of whisper. Let's say sometimes we have an audiofile of 4 hours (long movie), then we can expect it will take ±40 minutes, or 2 minutes for 5%.
// with a margin of 2.5x, let's do 5 minutes.
exports.maximumLockTime=3e5;
//# sourceMappingURL=constants.js.map