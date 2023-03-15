"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllGroupsIncludingInheritedRecursive = void 0;
var js_util_1 = require("js-util");
/**
 * From all `Group`s in the db, takes all groupSlugs, and recursively executes this again for all inherited groupSlugs found on the groups that are shown in the second parameter.
 *
 * Also adds the special group `public`
 */
var getAllGroupsIncludingInheritedRecursive = function (groups, groupSlugs) {
    var allGroupSlugs = (groupSlugs || [])
        .concat("public")
        .filter((0, js_util_1.onlyUnique2)());
    var filteredGroups = groups.filter(function (g) { return allGroupSlugs.includes(g.slug); });
    var inheritedNotAlready = filteredGroups
        .map(function (x) { return x.inherited_groupSlugs; })
        .filter(js_util_1.notEmpty)
        .filter(function (x) { return x.length > 0; })
        .flat()
        .filter(function (slug) { return !allGroupSlugs.includes(slug); });
    var inheritedInherited = inheritedNotAlready.length > 0
        ? (0, exports.getAllGroupsIncludingInheritedRecursive)(groups, inheritedNotAlready)
        : [];
    return __spreadArray(__spreadArray([], filteredGroups, true), inheritedInherited, true);
};
exports.getAllGroupsIncludingInheritedRecursive = getAllGroupsIncludingInheritedRecursive;
//# sourceMappingURL=getAllGroupsIncludingInherited.js.map