"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prod = void 0;
var child_process_1 = require("child_process");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var sdk_operations_1 = require("sdk-operations");
/**
`ship` command/function should simply rerun yarn prod for `os-web` and `function-server`
 */
var prod = function () {
    var projectRoot = (0, get_path_1.getProjectRoot)();
    if (!projectRoot) {
        return;
    }
    var functionServerFolder = sdk_operations_1.operations["function-server"];
    var osWebFolder = sdk_operations_1.operations["os-web"];
    if (!osWebFolder) {
        return;
    }
    var absoluteFunctionServerFolder = fs_util_1.path.join(projectRoot, functionServerFolder);
    var absoluteOsWebFolder = fs_util_1.path.join(projectRoot, osWebFolder);
    (0, child_process_1.spawnSync)("yarn prod", {
        cwd: absoluteFunctionServerFolder,
        shell: true,
        stdio: "inherit",
    });
    (0, child_process_1.spawnSync)("yarn prod", {
        cwd: absoluteOsWebFolder,
        shell: true,
        stdio: "inherit",
    });
};
exports.prod = prod;
//# sourceMappingURL=prod.js.map