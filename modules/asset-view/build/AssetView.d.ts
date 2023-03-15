/// <reference types="react" />
import { Asset } from "asset-type";
import { TranscribedText, Transcription } from "ai-types";
export declare const TranscriptionSentence: (props: {
    time: number;
    sentence: TranscribedText;
    transcription: Transcription;
    correctRef?: import("react").RefObject<HTMLAudioElement> | undefined;
}) => JSX.Element;
export declare const defaultClassName = "w-20 aspect-auto";
/**
Views an asset in the proper way.

If you also provide a Transcription, then:

- gets the play time from the player and match it with the sentence and word (hook audio time to the component, preferably 10fps minimum)
- highlights both the sentence and word in the text
- makes every word clickable, going to the right place in the video
 */
export declare const AssetView: (props: {
    transcription?: Transcription | undefined;
    asset: Asset;
    className?: string | undefined;
    /**
     * Must be provided for relative assets to know the location
     *
     * Must also be provided for assets with absolute URL, even though it's then unused.
     */
    projectRelativeReferencingFilePath?: string | undefined;
    hideDownloadLink?: boolean | undefined;
}) => JSX.Element;
//# sourceMappingURL=AssetView.d.ts.map