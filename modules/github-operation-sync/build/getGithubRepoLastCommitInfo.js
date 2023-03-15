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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGithubRepoLastCommitInfo = void 0;
var rest_1 = require("@octokit/rest");
/**
 - see last commit datetime
 - see if it's after `lastPullTime` yes or no?
 - compare dates: `Operation.lastPullTime`, last file change in src, remote last commit time
 */
var getGithubRepoLastCommitInfo = function (repoName, personalAccessToken) { return __awaiter(void 0, void 0, void 0, function () {
    var octokit, repos, found, arrayCommits, lastCommitAtDateString, committedAt, commitMessage, err_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                octokit = new rest_1.Octokit({
                    auth: personalAccessToken,
                });
                return [4 /*yield*/, octokit.rest.repos.listForAuthenticatedUser({
                        affiliation: "owner,collaborator,organization_member",
                        per_page: 100, //The number of results per page (max 100).
                        //page: 1 //Page number of the results to fetch.
                    })];
            case 1:
                repos = _b.sent();
                found = repos.data.find(function (repo) { return repo.name === repoName; });
                if (!found) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "The repo owner WAS NOT FOUND !! " +
                                "repo list: " +
                                JSON.stringify(repos.data.map(function (repo) { return repo.name; })),
                        }];
                }
                return [4 /*yield*/, octokit.rest.repos.listCommits({
                        owner: found.owner.login,
                        repo: repoName,
                    })];
            case 2:
                arrayCommits = (_b.sent()).data;
                lastCommitAtDateString = (_a = arrayCommits[0].commit.author) === null || _a === void 0 ? void 0 : _a.date;
                committedAt = lastCommitAtDateString
                    ? new Date(lastCommitAtDateString).valueOf()
                    : undefined;
                commitMessage = arrayCommits[0].commit.message;
                return [2 /*return*/, {
                        isSuccessful: true,
                        message: "Checked Status Successfully.",
                        lastCommit: {
                            commitSha: arrayCommits[0].sha,
                            committedAt: committedAt,
                            commitMessage: commitMessage,
                        },
                    }];
            case 3:
                err_1 = _b.sent();
                return [2 /*return*/, {
                        isSuccessful: false,
                        message: JSON.stringify(err_1),
                    }];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getGithubRepoLastCommitInfo = getGithubRepoLastCommitInfo;
//# sourceMappingURL=getGithubRepoLastCommitInfo.js.map