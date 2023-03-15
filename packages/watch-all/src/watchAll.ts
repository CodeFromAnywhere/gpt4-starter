// external
import { watch } from "chokidar";
import realFs from "fs";
import gracefulFs from "graceful-fs";
import os from "os";
// monorepo
import { sdk } from "sdk-api";
import { TsFunction } from "function-types";
import { db } from "database";
import { path } from "fs-util";
import { getProjectRoot } from "get-path";
import { notEmpty } from "js-util";
import { log } from "log";
import { ProjectWatcher } from "function-types";

// internal
import { executeWatcherOnFilepath } from "./executeWatcherOnFilepath";
import { getQueueItems } from "./getQueueItems";

/**
👁 👁 Finds all watchers within typerepo and ensures they all start watching their watch
 */
export const watchAll = async (
  tsFunctions: TsFunction[],
  config?: {
    /**
     * Overwrite the default ignored behavior.
     *
     * NB: is not overwriting the startup ignore behavior!
     */
    customIgnored?: string[];
  }
) => {
  const projectRoot = getProjectRoot();
  if (!projectRoot) return;

  // NB: fix to globally alter real fs in order to fix EMFile error that happens in TSMorph (see https://github.com/isaacs/node-graceful-fs)
  gracefulFs.gracefulify(realFs);

  const projectWatcherTsFunctions = tsFunctions.filter(
    (x) => x.explicitTypeName === "ProjectWatcher"
  );

  /**
   * Get the actual executable functions from the SDK
   */
  const projectWatchers = projectWatcherTsFunctions
    .map((x) => x.name)
    .map((name) => sdk[name as keyof typeof sdk] as ProjectWatcher | undefined)
    .filter(notEmpty)
    .filter((projectWatcher) => !projectWatcher.config?.isDisabled);

  log(
    `${
      projectWatchers.length
    } watchers found to watch ${projectRoot}: ${projectWatchers
      .map((x) => x.name)
      .join(", ")}`,
    { type: "important" }
  );

  // NB: only add recordings path on MacOS
  const recordingsPath =
    os.platform() === "darwin" && process.env.HOME
      ? path.resolve(
          process.env.HOME,
          "Library/Application Support/com.apple.voicememos/Recordings"
        )
      : undefined;

  // console.log({ recordingsPath });
  // TODO: ensure all is watched that need watching in bundled version as well. a `.gitignore` system would be great. Just adhere to `.gitignore` unless there is a `.watchconfig.json` file or so, then adhere to that

  const ignored = config?.customIgnored || [
    "**/node_modules/**",
    "**/.next/**",
    "**/.expo/**",
    // "**/build/**", // build change detection is needed for SDK generation
    "**/db/**",
    "**/.git/**",
    "**/.turbo/**",
    "**/generated/**",
  ];

  const projectRootFolders = [
    "assets",
    "docs",
    "knowledge",
    "operations",
    "text",
  ].map((name) => path.join(projectRoot, name));

  const basePath = [...projectRootFolders, recordingsPath].filter(notEmpty);

  // go over every project watcher, add to queue
  const queueItems = await getQueueItems(projectWatchers, basePath);
  const upsertResult = await db.upsert("Queue", queueItems);

  console.log(`Added ${queueItems.length} to queue`, { upsertResult });

  watch(basePath, {
    ignoreInitial: true,
    ignored,
  }).on("all", (...watcherArguments) =>
    executeWatcherOnFilepath(projectWatchers, ...watcherArguments)
  );
};
