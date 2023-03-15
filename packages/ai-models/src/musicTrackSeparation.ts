/**
 * separates the tracks (should be done with API for something like Spleeter)
 *
 *  TODO: should use the spleeter api somewhere (or similar) and return an object where the keys are track-names and the values are the absolute paths to these files.
 */
export const musicTrackSeparation = async (
  absoluteMusicFilePath: string
): Promise<{ [trackName: string]: string }> => {
  console.log(`musicTrackSeparation NOT IMPLEMENTED YET`);
  return {
    original: absoluteMusicFilePath,
  };
};
