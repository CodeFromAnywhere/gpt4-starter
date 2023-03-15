import { TsInterface } from "code-types";
import { AugmentedAnyModelType } from "model-types";
export type CrudViewProps = {
    tsInterface?: TsInterface;
    data: AugmentedAnyModelType[] | undefined;
    onEndReached?: () => void;
    highlight: Highlight;
    actions: ItemAction[];
};
export type Action = {
    name: string;
    emoji: string;
    action: () => any;
};
export type ItemAction = {
    name: string;
    emoji: string;
    action: (item: AugmentedAnyModelType) => any;
};
export type Highlight = {
    slug?: string;
    id?: string;
};
//# sourceMappingURL=types.d.ts.map