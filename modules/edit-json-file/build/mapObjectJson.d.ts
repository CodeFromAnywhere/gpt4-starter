/**
 * Takes an absolute path to a json and a type generic and provides a map function with which you can alter that JSON (read, map, save)
 */
export declare const mapObjectJson: <T, U>(absolutePath: string, mapFunction: (item: T) => U, noJsonObject?: T | undefined) => Promise<boolean>;
//# sourceMappingURL=mapObjectJson.d.ts.map