import { StandardResponse } from "function-types";
/**
 * Uses local whisper, for now. Audiofile must be 16-bit wav
 *
 * NB: I have the queueing on this layer, but if we later have faster ones that don't need a queue because they don't cost much processing power, we can add it on the individual stt level
 */
export declare const speechToText: {
    (absoluteAudioFilePath: string): Promise<StandardResponse>;
    config: {
        isPaid: true;
        priceDescription: string;
    };
};
//# sourceMappingURL=speechToText.d.ts.map