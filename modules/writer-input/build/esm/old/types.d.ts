import { TextEditingContext } from "./getContext";
export type EditorProps = {
    value: string;
    onChange: (value: string) => void;
    withContext?: (context: TextEditingContext) => void;
    className: string;
    projectRelativeFilePath?: string;
};
//# sourceMappingURL=types.d.ts.map