import { WriterType } from "filename-conventions";
import { MappedObject } from "js-util";
import { AugmentedWord } from "augmented-word-types";
export type DefaultWriterProps = {
    writerType: WriterType;
    value: string;
    onChange: (value: string) => void;
    filename?: string;
    augmentedWordObject?: MappedObject<AugmentedWord>;
    projectRelativeBaseFolderPath: string;
    projectRelativeMarkdownFilePath: string;
};
//# sourceMappingURL=types.d.ts.map