import { ProjectWatcher } from "function-types";
/**
 
Watch `/Application Support/com.apple.voicememos/Recordings` and move them to /knowledge/recordings immediately. on success, add a file. `[recording-name].m4a.moved`

When restarting the server, find all m4a's there that don't have this file. Transcribe those too with whisper.

*/
export declare const watchAppleMemos: ProjectWatcher;
//# sourceMappingURL=watchAppleMemos.d.ts.map