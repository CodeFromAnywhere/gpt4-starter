/**
 * languages supported. Source: https://github.com/openai/whisper/blob/main/whisper/tokenizer.py
 */
declare const languages: {
    readonly en: "english";
    readonly zh: "chinese";
    readonly de: "german";
    readonly es: "spanish";
    readonly ru: "russian";
    readonly ko: "korean";
    readonly fr: "french";
    readonly ja: "japanese";
    readonly pt: "portuguese";
    readonly tr: "turkish";
    readonly pl: "polish";
    readonly ca: "catalan";
    readonly nl: "dutch";
    readonly ar: "arabic";
    readonly sv: "swedish";
    readonly it: "italian";
    readonly id: "indonesian";
    readonly hi: "hindi";
    readonly fi: "finnish";
    readonly vi: "vietnamese";
    readonly he: "hebrew";
    readonly uk: "ukrainian";
    readonly el: "greek";
    readonly ms: "malay";
    readonly cs: "czech";
    readonly ro: "romanian";
    readonly da: "danish";
    readonly hu: "hungarian";
    readonly ta: "tamil";
    readonly no: "norwegian";
    readonly th: "thai";
    readonly ur: "urdu";
    readonly hr: "croatian";
    readonly bg: "bulgarian";
    readonly lt: "lithuanian";
    readonly la: "latin";
    readonly mi: "maori";
    readonly ml: "malayalam";
    readonly cy: "welsh";
    readonly sk: "slovak";
    readonly te: "telugu";
    readonly fa: "persian";
    readonly lv: "latvian";
    readonly bn: "bengali";
    readonly sr: "serbian";
    readonly az: "azerbaijani";
    readonly sl: "slovenian";
    readonly kn: "kannada";
    readonly et: "estonian";
    readonly mk: "macedonian";
    readonly br: "breton";
    readonly eu: "basque";
    readonly is: "icelandic";
    readonly hy: "armenian";
    readonly ne: "nepali";
    readonly mn: "mongolian";
    readonly bs: "bosnian";
    readonly kk: "kazakh";
    readonly sq: "albanian";
    readonly sw: "swahili";
    readonly gl: "galician";
    readonly mr: "marathi";
    readonly pa: "punjabi";
    readonly si: "sinhala";
    readonly km: "khmer";
    readonly sn: "shona";
    readonly yo: "yoruba";
    readonly so: "somali";
    readonly af: "afrikaans";
    readonly oc: "occitan";
    readonly ka: "georgian";
    readonly be: "belarusian";
    readonly tg: "tajik";
    readonly sd: "sindhi";
    readonly gu: "gujarati";
    readonly am: "amharic";
    readonly yi: "yiddish";
    readonly lo: "lao";
    readonly uz: "uzbek";
    readonly fo: "faroese";
    readonly ht: "haitian creole";
    readonly ps: "pashto";
    readonly tk: "turkmen";
    readonly nn: "nynorsk";
    readonly mt: "maltese";
    readonly sa: "sanskrit";
    readonly lb: "luxembourgish";
    readonly my: "myanmar";
    readonly bo: "tibetan";
    readonly tl: "tagalog";
    readonly mg: "malagasy";
    readonly as: "assamese";
    readonly tt: "tatar";
    readonly haw: "hawaiian";
    readonly ln: "lingala";
    readonly ha: "hausa";
    readonly ba: "bashkir";
    readonly jw: "javanese";
    readonly su: "sundanese";
    readonly burmese: "burmese";
    readonly valencian: "valencian";
    readonly flemish: "flemish";
    readonly haitian: "haitian";
    readonly letzeburgesch: "letzeburgesch";
    readonly pushto: "pushto";
    readonly panjabi: "panjabi";
    readonly moldavian: "moldavian";
    readonly moldovan: "moldovan";
    readonly sinhalese: "sinhalese";
    readonly castilian: "castilian";
};
export type WhisperLanguage = typeof languages[keyof typeof languages] | keyof typeof languages;
export declare const whisperModelNames: readonly ["tiny", "tiny.en", "base", "base.en", "small", "small.en", "medium", "medium.en", "large-v1", "large"];
export type WhisperModelName = typeof whisperModelNames[number];
export type WhisperConfig = {
    isWordSegments?: boolean;
    isRetry?: boolean;
    isVttOutputAdded?: boolean;
    isSrtOutputAdded?: boolean;
    /**
     * file or files (absolute paths)
     */
    audioFilePath: string | string[];
    /**
     * whisper.cpp has the --prompt [string] option
     *
     * don't know what it does exactly, but could be useful
     */
    prompt?: string;
    /**
     * Defaults to small (good for english speech)
     *
     * For English-only applications, the .en models tend to perform better, especially for the tiny.en and base.en models. We observed that the difference becomes less significant for the small.en and medium.en models.
     */
    model?: WhisperModelName;
    /**
     * if true, result will be translated into english (--task translate)
     */
    translateToEnglish?: boolean;
    /**
     * If given, will assume audio is in that language
     */
    language?: WhisperLanguage;
    /**
     * will use --verbose option of cli
     */
    isDebug?: boolean;
    /**
     * Resulting folder path (defaults to the same folder as the first audio file)
     */
    outputFolderPath?: string;
};
export {};
//# sourceMappingURL=variables.d.ts.map