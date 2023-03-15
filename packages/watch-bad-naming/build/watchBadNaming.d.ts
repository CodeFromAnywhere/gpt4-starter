import { ProjectWatcher } from "function-types";
/**

Watcher for filenames/folders with capitalisation and spaces, to be renamed to the slugified version. ensure there is no overlap by other watchers.

TODO: the other watchers should ignore files if they have capitals or spaces. Maybe this can be fundamental part of the watcher with a prop like "isPrimary" which means it should be executed first, and a prop like "shouldOmitFromOtherWatchers" which means it will not be included in other watchers if it matches here.
*/
export declare const watchBadNaming: ProjectWatcher;
//# sourceMappingURL=watchBadNaming.d.ts.map