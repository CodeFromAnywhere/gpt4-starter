import { ChatMessage } from "social-media-types";
/**
NB: in this case, we could theoretically still use this with davinci.
NB: we are making the encoding in this function isntead of using `calculateTokenCount` because it might be more efficient like this
 */
export declare const calculateMessagesTokenCount: (messages: ChatMessage[], isDavinci?: boolean) => (ChatMessage & {
    tokenCount: number;
})[];
//# sourceMappingURL=calculateMessagesTokenCount.d.ts.map