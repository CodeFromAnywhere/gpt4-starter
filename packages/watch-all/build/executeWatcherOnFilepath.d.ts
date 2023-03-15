import realFs from "fs";
import { ProjectWatcher, WatchEventType } from "function-types";
export declare const executeWatcherOnFilepath: (projectWatchers: ProjectWatcher<any>[], eventName: WatchEventType, path: string, stats?: realFs.Stats | undefined) => Promise<void>;
//# sourceMappingURL=executeWatcherOnFilepath.d.ts.map