import parsePdf from "pdf-parse";
export type PdfToMdResult = {
    isSuccessful: boolean;
};
export declare const tryParsePdf: (inputPdfFilePath: string) => Promise<parsePdf.Result | undefined>;
export declare function convertPdfToMd(config: {
    inputPdfFilePath: string;
    /**
     * if not given, will save it in the same place with the same name
     */
    outputMdFilePath?: string;
}): Promise<PdfToMdResult>;
//# sourceMappingURL=convertPdfToMd.d.ts.map