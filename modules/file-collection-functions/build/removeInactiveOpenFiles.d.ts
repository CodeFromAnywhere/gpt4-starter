/**
 * Cleans up the open files by removing the ones that aren't "pinned" or "open" and also haven't been opened for over a day. This means they don't need to appear in the search results anymore
 */
export declare const removeInactiveOpenFiles: {
    (): Promise<void>;
    config: {
        runEveryPeriod: "hour";
    };
};
//# sourceMappingURL=removeInactiveOpenFiles.d.ts.map