import { ProjectWatcher } from "function-types";
/**
Add an automation (watcher that queues or does) to act on any `.mp3.txt` (which indicates a whisper is done) that doesn't have a `.clean.md`

There are many other things we can do with the spoken text transcription of an audio file, but these will be applied on any md file (which is much more general purpose)

Promises the path of the resulting converted cleaned-up file
*/
export declare const watchMp3Transcriptions: ProjectWatcher;
//# sourceMappingURL=watchMp3Transcriptions.d.ts.map