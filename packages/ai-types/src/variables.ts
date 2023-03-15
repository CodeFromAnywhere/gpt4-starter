/**
 * languages supported. Source: https://github.com/openai/whisper/blob/main/whisper/tokenizer.py
 */
const languages = {
  en: "english",
  zh: "chinese",
  de: "german",
  es: "spanish",
  ru: "russian",
  ko: "korean",
  fr: "french",
  ja: "japanese",
  pt: "portuguese",
  tr: "turkish",
  pl: "polish",
  ca: "catalan",
  nl: "dutch",
  ar: "arabic",
  sv: "swedish",
  it: "italian",
  id: "indonesian",
  hi: "hindi",
  fi: "finnish",
  vi: "vietnamese",
  he: "hebrew",
  uk: "ukrainian",
  el: "greek",
  ms: "malay",
  cs: "czech",
  ro: "romanian",
  da: "danish",
  hu: "hungarian",
  ta: "tamil",
  no: "norwegian",
  th: "thai",
  ur: "urdu",
  hr: "croatian",
  bg: "bulgarian",
  lt: "lithuanian",
  la: "latin",
  mi: "maori",
  ml: "malayalam",
  cy: "welsh",
  sk: "slovak",
  te: "telugu",
  fa: "persian",
  lv: "latvian",
  bn: "bengali",
  sr: "serbian",
  az: "azerbaijani",
  sl: "slovenian",
  kn: "kannada",
  et: "estonian",
  mk: "macedonian",
  br: "breton",
  eu: "basque",
  is: "icelandic",
  hy: "armenian",
  ne: "nepali",
  mn: "mongolian",
  bs: "bosnian",
  kk: "kazakh",
  sq: "albanian",
  sw: "swahili",
  gl: "galician",
  mr: "marathi",
  pa: "punjabi",
  si: "sinhala",
  km: "khmer",
  sn: "shona",
  yo: "yoruba",
  so: "somali",
  af: "afrikaans",
  oc: "occitan",
  ka: "georgian",
  be: "belarusian",
  tg: "tajik",
  sd: "sindhi",
  gu: "gujarati",
  am: "amharic",
  yi: "yiddish",
  lo: "lao",
  uz: "uzbek",
  fo: "faroese",
  ht: "haitian creole",
  ps: "pashto",
  tk: "turkmen",
  nn: "nynorsk",
  mt: "maltese",
  sa: "sanskrit",
  lb: "luxembourgish",
  my: "myanmar",
  bo: "tibetan",
  tl: "tagalog",
  mg: "malagasy",
  as: "assamese",
  tt: "tatar",
  haw: "hawaiian",
  ln: "lingala",
  ha: "hausa",
  ba: "bashkir",
  jw: "javanese",
  su: "sundanese",
  // these aliases are mapped to languages above
  burmese: "burmese",
  valencian: "valencian",
  flemish: "flemish",
  haitian: "haitian",
  letzeburgesch: "letzeburgesch",
  pushto: "pushto",
  panjabi: "panjabi",
  moldavian: "moldavian",
  moldovan: "moldovan",
  sinhalese: "sinhalese",
  castilian: "castilian",
} as const;

export type WhisperLanguage =
  | typeof languages[keyof typeof languages]
  | keyof typeof languages;

export const whisperModelNames = [
  "tiny",
  "tiny.en",
  "base",
  "base.en",
  "small",
  "small.en",
  "medium",
  "medium.en",
  "large-v1",
  "large",
] as const;

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
