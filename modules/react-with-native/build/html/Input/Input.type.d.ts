import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type { TextInputProps, StyleProp, TextStyle } from "react-native";
export type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    native?: TextInputProps;
    style?: StyleProp<TextStyle>;
};
//# sourceMappingURL=Input.type.d.ts.map