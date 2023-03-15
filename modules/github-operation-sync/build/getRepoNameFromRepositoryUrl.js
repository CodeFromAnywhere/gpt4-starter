"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepoNameFromRepositoryUrl = void 0;
var getRepoNameFromRepositoryUrl = function (url) {
    if (!url.startsWith("https://github.com/"))
        return;
    // TODO:
    var parts = url.split("/");
    var lastPart = parts.pop(); // either the repoName or {repoName}.git
    if (!lastPart)
        return;
    if (lastPart.endsWith(".git")) {
        return lastPart.slice(0, lastPart.length - ".git".length);
    }
    return lastPart;
};
exports.getRepoNameFromRepositoryUrl = getRepoNameFromRepositoryUrl;
//# sourceMappingURL=getRepoNameFromRepositoryUrl.js.map