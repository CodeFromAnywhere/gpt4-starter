"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChatMessagesPath = void 0;
var fs_util_1 = require("fs-util");
var getChatMessagesPath = function (projectRoot, personSlug, personaSlug, dateString) {
    return fs_util_1.path.join(projectRoot, "knowledge", "persons", personSlug, "chat-messages", personaSlug, "".concat(dateString, ".json"));
};
exports.getChatMessagesPath = getChatMessagesPath;
//# sourceMappingURL=getChatMessagesPath.js.map