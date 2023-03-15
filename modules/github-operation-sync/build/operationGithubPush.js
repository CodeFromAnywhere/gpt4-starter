"use strict";
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
exports.operationGithubPush = void 0;
var simple_git_1 = require("simple-git");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var rest_1 = require("@octokit/rest");
/**
 - git init
 - github create repo if not existent and then set `PackageJson.repository`
 - git set remote
 - git push --force
 - rm -rf .git
   ​
  > Question: can we have a master git folder in the project root (main or bundle) without having to remove the `.git` every time? Maybe by renaming the `.git` in the operation to `operation.git` temporarily every time we don't use it? Probably better not to force pull/push every time and loose tons of git features...
   ​
  TODO:

  1. put url on Operation `.repository.url`
 */
/** TODO: How do I get this path programatically ?? */
var PATH_TO_YOUR_BUNDLE = "/Users/guilhermereis/Desktop/clones/typerepo/packages/guilherme/";
var operationGithubPush = function (operationName) { return __awaiter(void 0, void 0, void 0, function () {
    var octokit, repos, repoName, createdRepoUrl, found, dir, createdRepo, dir, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                octokit = new rest_1.Octokit({
                    auth: process.env.PERSONAL_ACESSS_TOKEN,
                });
                return [4 /*yield*/, octokit.rest.repos.listForAuthenticatedUser({
                        affiliation: "owner,collaborator,organization_member",
                        per_page: 100, //The number of results per page (max 100).
                        //page: 1 //Page number of the results to fetch.
                    })];
            case 1:
                repos = _a.sent();
                repoName = operationName;
                createdRepoUrl = "";
                found = repos.data.find(function (repo) { return repo.name === operationName; });
                if (!found) return [3 /*break*/, 3];
                dir = path_1.default.resolve(PATH_TO_YOUR_BUNDLE, operationName);
                return [4 /*yield*/, initializeGitOrUseExistingAndPush(dir, found.clone_url, "Improvements")];
            case 2:
                _a.sent();
                /** after everything rename the .git folder to .git.backup */
                fs_1.default.renameSync(path_1.default.resolve(dir, ".git"), path_1.default.resolve(dir, ".git.backup"));
                return [2 /*return*/, {
                        success: true,
                        message: "The repo already existed and was updated.",
                        data: {
                            operationName: operationName,
                        },
                    }];
            case 3: return [4 /*yield*/, octokit.rest.repos.createForAuthenticatedUser({
                    name: repoName,
                })];
            case 4:
                createdRepo = (_a.sent()).data;
                createdRepoUrl = createdRepo.clone_url;
                dir = path_1.default.resolve(PATH_TO_YOUR_BUNDLE, operationName);
                return [4 /*yield*/, initializeGitOrUseExistingAndPush(dir, createdRepo.clone_url, "first commit")];
            case 5:
                _a.sent();
                return [2 /*return*/, {
                        success: true,
                        message: "Created repo url: " + createdRepoUrl,
                        data: {
                            operationName: operationName,
                            createdRepoUrl: createdRepoUrl,
                        },
                    }];
            case 6: return [3 /*break*/, 8];
            case 7:
                err_1 = _a.sent();
                return [2 /*return*/, {
                        success: false,
                        message: "Something went wrong !!!" + JSON.stringify(err_1),
                        data: {
                            operationName: operationName,
                        },
                    }];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.operationGithubPush = operationGithubPush;
var initializeGitOrUseExistingAndPush = function (dir, remoteUrl, commitMessage) { return __awaiter(void 0, void 0, void 0, function () {
    var options, gitBackupFolder, git, gitFolder, git;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = {
                    baseDir: dir,
                    binary: "git",
                    maxConcurrentProcesses: 6,
                    trimmed: false,
                };
                gitBackupFolder = path_1.default.resolve(dir, ".git.backup");
                if (!fs_1.default.existsSync(gitBackupFolder)) return [3 /*break*/, 4];
                console.log("renaming");
                /** rename it to .git */
                fs_1.default.renameSync(path_1.default.resolve(dir, ".git.backup"), path_1.default.resolve(dir, ".git"));
                git = (0, simple_git_1.simpleGit)(options);
                return [4 /*yield*/, git.add(".")];
            case 1:
                _a.sent();
                return [4 /*yield*/, git.commit(commitMessage)];
            case 2:
                _a.sent();
                return [4 /*yield*/, git.push("origin", "main", ["--force"])];
            case 3:
                _a.sent();
                return [3 /*break*/, 9];
            case 4:
                console.log("deleting");
                gitFolder = path_1.default.resolve(dir, ".git");
                if (fs_1.default.existsSync(gitFolder)) {
                    fs_1.default.rmSync(gitFolder, { recursive: true, force: true });
                }
                git = (0, simple_git_1.simpleGit)(options);
                return [4 /*yield*/, git
                        .init({ "--initial-branch": "main" })
                        .addRemote("origin", remoteUrl)];
            case 5:
                _a.sent();
                return [4 /*yield*/, git.add(".")];
            case 6:
                _a.sent();
                return [4 /*yield*/, git.commit(commitMessage)];
            case 7:
                _a.sent();
                return [4 /*yield*/, git.push("origin", "main", ["--force"])];
            case 8:
                _a.sent();
                _a.label = 9;
            case 9: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=operationGithubPush.js.map