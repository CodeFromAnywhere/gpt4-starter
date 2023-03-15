"use strict";
/**
 * Makes a path relative using proper parsing
 *
 * Resulting path will apply the paths conventions
 * - no slash at the end
 * - no slash at the beginning
 *
 * NB: also works with relative paths
 */Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeRelative=void 0;var makeRelative=function(
/**
 * absolute path of a file or folder without a slash at the end
 */
e,
/**
 * folder path without a slash at the end
 */
t){return 0===t.length?e:
// basecase should be handled, we don't want to get some weird slice edgecase
e.length<t.length?"":e.slice(t.length+1)};exports.makeRelative=makeRelative;
//# sourceMappingURL=makeRelative.js.map