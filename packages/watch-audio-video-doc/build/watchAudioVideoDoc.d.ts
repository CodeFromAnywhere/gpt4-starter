import { ProjectWatcher } from "function-types";
/**

Watch all video file formats except mp4, and convert them all into a compressed .mp4 (10fps 480p) (remove original)

Find all audiofile formats in project except mp3 and wav, convert into 16 bit wav (remove original)

Find all image file formats in the project except png, convert to png, compress size if it seems to be able to be done without much loss.

Watch all doc formats (docx, rtf, pdf, what else?) and convert them into .md (keeping original)

*/
export declare const watchAudioVideoDoc: ProjectWatcher;
//# sourceMappingURL=watchAudioVideoDoc.d.ts.map