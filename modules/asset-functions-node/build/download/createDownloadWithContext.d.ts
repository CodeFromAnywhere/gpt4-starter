import { Download } from "asset-type";
import { FileFunction, StandardResponse } from "function-types";
export type DownloadConfig = {
    persistence?: Download["persistence"];
    availableUntilAt?: Download["availableUntilAt"];
};
/**
Export API:

- on any folder, be able to download a zip of that folder.
- on any file collection, to be able to download a raw content of that file.
- if there's a .md included, also pdf.
- if there's more than one file in the collection, zip it, otherwise no zip needed.
- Also option to download a single file.

Since we don't want unauthorized people to do this, and since the GET endpoint doesn't allow for POST parameters, it's probably best to have a `Download` model that allows me to create one-time or multiple-time downloads with unique keys, that are valid for a certain duration or only to a specific IP. This way, you can't download again after logging out, and it'd be much more secure.
 */
export declare const createDownloadWithContext: FileFunction<DownloadConfig, StandardResponse & {
    downloadId?: string;
}>;
//# sourceMappingURL=createDownloadWithContext.d.ts.map