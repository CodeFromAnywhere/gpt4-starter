/**
 * In order to download the youtube video into mp3 format ffmpeg packages must be install in your computer
 * for mac please try [brew install ffmpeg] to install ffmpeg
 */
export declare const youtubeToMp4: (link: string, config?: {
    isToMp3?: boolean;
    destinationFolderPath?: string;
    quality?: "low";
}) => Promise<{
    isSuccessful: boolean;
    message?: string;
    mp3FilePath?: string;
    mp4FilePath?: string;
}>;
//# sourceMappingURL=youtubeToMp3.d.ts.map