import { DefaultModelType } from "model-types";
/**
 * Model to download a file, file-collection, or folder.
 *
 * `.id` is the unique key to be used as download link
 */
export interface Download extends DefaultModelType {
    /** defaults to "one-time" */
    persistence?: "one-time" | "forever";
    /**
     * If given, download is availablue until this date is past.
     */
    availableUntilAt?: number;
    /**
     * URL to download
     */
    download_projectRelativePath: string;
}
//# sourceMappingURL=Download.d.ts.map