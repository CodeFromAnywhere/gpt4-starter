"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagesToTokenableText = void 0;
var messagesToTokenableText = function (messages) {
    return messages
        .map(function (item) {
        return "".concat(item.role, " ").concat(item.name ? "".concat(item.name, " ") : "").concat(item.content);
    })
        .join(" ");
};
exports.messagesToTokenableText = messagesToTokenableText;
//# sourceMappingURL=messagesToTokenableText.js.map