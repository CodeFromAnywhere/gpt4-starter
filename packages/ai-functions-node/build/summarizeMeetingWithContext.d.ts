import { BackendAsset } from "asset-type";
import { FunctionContext } from "function-types";
/**
Endpoint that onboards users into Clarity AI
*/
export declare const summarizeMeetingWithContext: {
    (functionContext: FunctionContext, email?: string, meetingYoutubeUrl?: string, meetingAudio?: BackendAsset): Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    config: {
        isPublic: true;
        authorizations: {
            public: string;
        };
    };
};
//# sourceMappingURL=summarizeMeetingWithContext.d.ts.map