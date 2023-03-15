import { RecordingType } from "ai-types";
export declare const CHUNK_TOKEN_SIZE = 2048;
/**
 Function that uses AI (LLM's mostly) that tries to determine the recording type from a transcription from an audio.

 Uses `Transcription` file, then chunks the english text, and tries to determine the type as efficiently as possible.
 */
export declare const getRecordingType: (absoluteTranscriptionFilePath: string) => Promise<RecordingType>;
//# sourceMappingURL=getRecordingType.d.ts.map