"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationGithubPull = void 0;
var database_1 = require("database");
var sdk_operations_1 = require("sdk-operations");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var get_path_1 = require("get-path");
var rest_1 = require("@octokit/rest");
var initializeGitOrUseExistingAndPull_1 = require("./initializeGitOrUseExistingAndPull");
var getGithubPersonalAccessToken_1 = require("./getGithubPersonalAccessToken");
/**
  `git init` in operation
  `git set remote` in there
  `git pull --force`
 
  set operation.repository indexation info

  `mv .git .git.backup`
 */
var operationGithubPull = function (operationName, 
/**
 * If you don't provide it we get it from the database
 */
personalAccessToken) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, operationsPath, realPersonalAccessToken, _a, projectRelativeOperationPath, newPath, absoluteOperationPath, octokit, repos, found_1, remoteUrl_1, collaborators_1, updateResult, isSuccessful, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                operationsPath = (0, get_path_1.getRootPath)("operations");
                if (!projectRoot || !operationsPath) {
                    return [2 /*return*/, { isSuccessful: false, message: "No project root" }];
                }
                _a = personalAccessToken;
                if (_a) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, getGithubPersonalAccessToken_1.getGithubPersonalAccessToken)()];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2:
                realPersonalAccessToken = _a;
                if (!realPersonalAccessToken) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Please provide PAT",
                        }];
                }
                projectRelativeOperationPath = sdk_operations_1.operations[operationName];
                newPath = path_1.default.join(operationsPath, "new", operationName);
                absoluteOperationPath = projectRelativeOperationPath
                    ? path_1.default.join(projectRoot, projectRelativeOperationPath)
                    : newPath;
                _b.label = 3;
            case 3:
                _b.trys.push([3, 8, , 9]);
                octokit = new rest_1.Octokit({
                    auth: realPersonalAccessToken,
                });
                return [4 /*yield*/, octokit.rest.repos.listForAuthenticatedUser({
                        affiliation: "owner,collaborator,organization_member",
                        per_page: 100, //The number of results per page (max 100).
                        //page: 1 //Page number of the results to fetch.
                    })];
            case 4:
                repos = _b.sent();
                found_1 = repos.data.find(function (repo) { return repo.name === operationName; });
                if (!found_1) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Repository was not found for operation ".concat(operationName),
                            operationName: operationName,
                        }];
                }
                if (!fs_1.default.existsSync(absoluteOperationPath)) {
                    fs_1.default.mkdirSync(absoluteOperationPath);
                }
                remoteUrl_1 = found_1.ssh_url;
                return [4 /*yield*/, (0, initializeGitOrUseExistingAndPull_1.initializeGitOrUseExistingAndPull)(absoluteOperationPath, remoteUrl_1)];
            case 5:
                _b.sent();
                return [4 /*yield*/, octokit.rest.repos.listCollaborators({
                        owner: found_1.owner.login,
                        repo: found_1.name,
                        affiliation: "all", //outside | direct | all,
                        //per_page: 100, //The number of results per page (max 100).
                        //page: 1 //Page number of the results to fetch.
                    })];
            case 6:
                collaborators_1 = _b.sent();
                /** after everything rename the .git folder to .git.backup */
                fs_1.default.renameSync(path_1.default.join(absoluteOperationPath, ".git"), path_1.default.join(absoluteOperationPath, ".git.backup"));
                return [4 /*yield*/, database_1.db.update("Operation", function (item) { return item.operationName === operationName; }, function (old) {
                        var newRepository = {
                            url: remoteUrl_1,
                            htmlUrl: found_1.html_url,
                            collaborators: collaborators_1.data.map(function (collaborator) { return collaborator.login; }),
                            forksCount: found_1.forks_count,
                            stargazersCount: found_1.stargazers_count,
                            watchersCount: found_1.watchers_count,
                            openIssuesCount: found_1.open_issues_count,
                            size: found_1.size,
                            visibility: found_1.visibility,
                            defaultBranch: found_1.default_branch,
                        };
                        return __assign(__assign({}, old), { repository: newRepository });
                    })];
            case 7:
                updateResult = _b.sent();
                isSuccessful = updateResult.isSuccesful || false;
                return [2 /*return*/, {
                        isSuccessful: isSuccessful,
                        message: isSuccessful
                            ? "Pulled successfully, operation package.json has been updated"
                            : updateResult.message || "Something went wrong",
                        operationName: operationName,
                    }];
            case 8:
                err_1 = _b.sent();
                return [2 /*return*/, {
                        isSuccessful: false,
                        message: "Error: " + err_1,
                        operationName: operationName,
                    }];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.operationGithubPull = operationGithubPull;
//# sourceMappingURL=operationGithubPull.js.map