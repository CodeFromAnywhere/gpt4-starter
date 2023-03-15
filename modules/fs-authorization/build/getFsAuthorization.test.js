"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFsAuthorization_1 = require("./getFsAuthorization");
var test = function () {
    (0, getFsAuthorization_1.getFsAuthorization)({
        baseAuthorization: { canRead: false, canWrite: false },
        groupSlugs: ["public"],
        projectRelativeBaseFolderPath: "",
        projectRelativePath: "operations/tools/control-fs/fs-authorization/readme.md",
    }).then(console.log);
};
test();
//# sourceMappingURL=getFsAuthorization.test.js.map