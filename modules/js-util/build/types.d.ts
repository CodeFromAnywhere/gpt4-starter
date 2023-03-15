export type KeysOfType<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];
export type RequiredKeys<T> = Exclude<KeysOfType<T, Exclude<T[keyof T], undefined>>, undefined>;
export type OptionalKeys<T> = Exclude<Keys<T>, RequiredKeys<T>>;
export type Keys<T> = Extract<keyof T, string>;
//# sourceMappingURL=types.d.ts.map