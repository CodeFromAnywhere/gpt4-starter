/**
`RecordingType` specifies the type of recording that was found

`audiobook`: Audio is an audiobook. Probably not easy to detect. Also, it's probably very time consuming. However, we might get a lot of information from the first chunk, and can already see if it's an audiobook based on that one. Stuff like "this is Audible" gives away a lot. (single chunk needed)

`music`: Audio is music. probably easy to detect for a classifier. Could be harder for LLM's, unless whisper outputs something like `[Music]` multiple times. (single chunk needed)

`conversation`: At least two speakers. This can be detected based on the thing that was said because usually there are questions and answers and it follows a dynamic pattern typical to conversations. Other AI classifiers could also be used like "amount of speaker detection"

`monologue`: Single speaker that says something

`code`: Audio is about code. This probably requires more postprocessing in order to do stuff with it.

`voicemail`: Audio is a text that looks like it is meant for someone or multiple people. This can be detected by a LLM by looking for things like "you" or names, etc, especially in the beginning and end.

other: None of the above. Could be nature sounds for example, or silent audio where nothing is said.

`unknown`: If it can't be known for sure after going through the entire transcript. Also happens if api isn't working.
*/
export type RecordingType = "audiobook" | "music" | "conversation" | "monologue" | "code" | "voicemail" | "unknown" | "other";
//# sourceMappingURL=RecordingType.d.ts.map