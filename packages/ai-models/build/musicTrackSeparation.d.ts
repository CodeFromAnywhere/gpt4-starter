/**
 * separates the tracks (should be done with API for something like Spleeter)
 *
 *  TODO: should use the spleeter api somewhere (or similar) and return an object where the keys are track-names and the values are the absolute paths to these files.
 */
export declare const musicTrackSeparation: (absoluteMusicFilePath: string) => Promise<{
    [trackName: string]: string;
}>;
//# sourceMappingURL=musicTrackSeparation.d.ts.map