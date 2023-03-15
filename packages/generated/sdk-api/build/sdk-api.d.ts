/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="pdf-parse" />
/// <reference types="react" />
import { docxToMd } from "doc-to-md";
import { hasDefinition } from "index-typescript";
import { convertPdfToMd } from "pdf-to-md";
import { setKeyAtLocation } from "set-json-key";
import { getTypescriptErrorsFromFiles } from "compile-typescript";
import { fileSlugify } from "convert-case";
import { slugify } from "convert-case";
import { fileExistsWithCaseSync } from "fs-util";
import { notEmpty } from "js-util";
import { onlyUnique } from "js-util";
import { generatePassword } from "model-types";
import { isEmail } from "model-types";
import { byteCount } from "path-util";
import { getEncoding } from "text-or-binary";
import { isBinary } from "text-or-binary";
import { isText } from "text-or-binary";
export declare const sdk: {
    addEmojiToEveryWord: any;
    addStatement: (statement: string, importancy?: number | undefined, agreement?: number | undefined) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
    }>;
    addWord: (word: string, description?: string | undefined) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
    }>;
    biggestFunctionName: any;
    checkQueue: {
        (): Promise<void>;
        config: {
            runEveryPeriod: "minute";
        };
    };
    cleanup: any;
    controlChatGptWrapper: (prompt: string, isHeadless: boolean | undefined, thread: string | undefined, controller: "playwright" | "puppeteer" | "faker") => Promise<import("ai-types").ProcessPromptFunctionResult>;
    deletePromptResult: (projectRelativePath: string, id: string) => Promise<{
        isSuccessful: boolean;
    }>;
    developersQuote: any;
    diaryToInstagram: any;
    documentationWriting: any;
    emojiAugmentation: any;
    explainInDutch: any;
    explainInNepali: any;
    explainInPortuguese: any;
    explainLineByLine: any;
    explain: any;
    fixGrammarAndSpellingMistakes: any;
    followUpQuestions: any;
    getContextualPromptCategories: () => Promise<import("ai-types").CategoryChildObject>;
    getContextualPromptResultJsonFilePath: (projectRelativePath?: string | undefined) => Promise<string | undefined>;
    getContextualPrompt: (contextualPromptSlug: string | undefined, customPromptContent: string | undefined, saveNewPromptWithName: string | null, contextType: import("filename-conventions").FileType | undefined) => Promise<(Omit<import("ai-types").ContextualPrompt, import("model-types").OptionalForCreationKeys<import("ai-types").ContextualPrompt>> & Partial<Pick<import("ai-types").ContextualPrompt, import("model-types").OptionalForCreationKeys<import("ai-types").ContextualPrompt>>> & {
        slug: string;
    }) | undefined>;
    getObjectForkKeyRecursively: (stackCount: import("ai-functions-node").StackCount, key: string, originalKey: string, items: import("ai-types").ContextualPrompt[]) => import("ai-types").CategoryChildObject | undefined;
    getQueueStatus: () => Promise<import("ai-functions-node").QueueStatus | null>;
    getToolFunctions: {
        (): Promise<import("function-types").TsFunction[]>;
        config: {
            isPublic: false;
        };
    };
    haiku: any;
    hookOneliners: any;
    improveCode: any;
    investorPitch: any;
    marcusAurelius: any;
    opposite: any;
    outlineToInvestorPitch: any;
    poem: any;
    processChatGptPrompt: (config: import("ai-functions-node").ProcessPromptProps) => Promise<import("ai-types").ProcessPromptFunctionResult>;
    processPromptOnFile: (projectRelativeFilePath: string, contextualPromptSlug: string) => Promise<import("ai-types").ProcessPromptFunctionResult>;
    processPromptOnFolderWithContext: (functionContext: import("function-types").FunctionContext, config: {
        projectRelativeFolderPath: string;
        promptSlug: string;
        isRecursive?: boolean | undefined;
        extension?: string | string[] | undefined;
    }) => Promise<{
        isSuccessful: boolean | undefined;
        message: string | undefined;
    }>;
    quiz: any;
    removeAllFake: (basePath?: string | undefined) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
    }>;
    rickAndMortyRick: any;
    rickAndMorty: any;
    setIsFavoritePromptResult: (projectRelativePath: string, id: string, isFavorite: boolean) => Promise<{
        isSuccessful: boolean;
    }>;
    shouldAddToQueue: (functionName: string, parameters: any[]) => Promise<boolean>;
    socratesAndSnoopDogg: any;
    storytelling: any;
    summarizeMeetingWithContext: {
        (functionContext: import("function-types").FunctionContext, email?: string | undefined, meetingYoutubeUrl?: string | undefined, meetingAudio?: import("asset-type").BackendAsset | undefined): Promise<{
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
    toolFunctionWithContext: {
        (functionContext: import("function-types").FunctionContext, functionName: string, email: string, details: {
            [parameterName: string]: any;
        }): Promise<{
            isSuccessful: boolean | undefined;
            message: string;
        }>;
        config: {
            isPublic: true;
        };
    };
    translateEverythingIntoHindi: any;
    translateEverythingPortuguese: any;
    translateEverything: any;
    translateToPortuguese: any;
    typescriptExplain: any;
    williamShakespear: any;
    writeContextualPromptSdk: () => Promise<string>;
    writeCreatePromptCode: (contextualPrompt: import("ai-types").ContextualPrompt) => string;
    ye: any;
    yodafy: any;
    getGroupOrPersonId: (absoluteAudioFilePath: string) => Promise<{
        groupId: string | undefined;
        personId: string | undefined;
    }>;
    imageToText: (absoluteImagePath: string, config?: {
        text?: string | undefined;
        similarity?: boolean | undefined;
        maxLength?: number | undefined;
        minLength?: number | undefined;
    } | undefined) => Promise<{
        isSuccessful: boolean;
        message: string;
        result?: object | undefined;
    }>;
    languageTranslation: (text: string, targetLanguage: string) => Promise<import("function-types").StandardResponse & {
        result?: string | undefined;
    }>;
    musicTrackSeparation: (absoluteMusicFilePath: string) => Promise<{
        [trackName: string]: string;
    }>;
    speakerSeparation: (absoluteAudioFilePath: string) => Promise<void>;
    speechToText: {
        (absoluteAudioFilePath: string): Promise<import("function-types").StandardResponse>;
        config: {
            isPaid: true;
            priceDescription: string;
        };
    };
    textToImage: (config: {
        text?: string | undefined;
        inputTextFilePath?: string | undefined;
        outputFilePath?: string | undefined;
    }) => Promise<{
        isSuccessful: boolean;
        message: string;
        result?: object | undefined;
    }>;
    textToSpeech: (config: {
        text?: string | undefined;
        inputTextFilePath?: string | undefined;
        outputFilePath?: string | undefined;
    }) => Promise<{
        isSuccessful: boolean;
        message: string;
        outputFilePath?: string | undefined;
    }>;
    textToText: {
        (text: string, config?: {
            personId?: string | undefined;
            model?: import("ai-models").TextToTextModelEnum | undefined;
            isInstant?: boolean | undefined;
        } | undefined): Promise<import("function-types").StandardResponse & {
            result?: string | undefined;
        }>;
        config: {
            isPaid: true;
            priceDescription: string;
        };
    };
    copyCopyPairs: (copyPairs: import("collect-static-assets").CopyPair[]) => Promise<void[]>;
    copyReaderStaticAssets: (operationBasePath: string, allWebPages: import("webpage-types").WebPage<unknown>[]) => Promise<void>;
    findReaderStaticAssets: (readerWebPages: import("webpage-types").FileWebPage[]) => Promise<string[] | undefined>;
    findStaticAssets: (absoluteMarkdownFilePath: string) => Promise<string[]>;
    receiveTwilioMessageWithContextRaw: (serverContext: import("server/typings/common").Context) => Promise<void>;
    sendMail: (mailData: import("communication-wrapper").MailDataFromOptional | import("communication-wrapper").MailDataFromOptional[], isMultiple?: boolean | undefined) => Promise<import("@sendgrid/mail").ClientResponse | undefined>;
    sendMessage: (person: import("peer-types").Person, message: string, config?: import("communication-wrapper").SendMessageConfig | undefined) => Promise<{
        isSuccessful: boolean;
    }>;
    sendSms: (options: import("twilio/lib/rest/api/v2010/account/message").MessageListInstanceCreateOptions) => Promise<import("twilio/lib/rest/api/v2010/account/message").MessageInstance | undefined>;
    sendTwilioMessage: (to: string, body: string, config?: {
        shortenUrls?: boolean | undefined;
        channel?: "whatsapp" | "sms" | undefined;
        persona?: import("peer-types").Persona | undefined;
        mediaUrls?: string[] | undefined;
        location?: {
            label: string;
            latitude: number;
            longitude: number;
        } | undefined;
    } | undefined) => Promise<{
        isSuccessful: boolean;
    }>;
    trySendMessage: (person: import("peer-types").Person, message: string, messagingChannel: "whatsapp" | "sms" | "email", config?: Omit<import("communication-wrapper").SendMessageConfig, "preferredChannel"> | undefined) => Promise<import("function-types").StandardResponse>;
    calculateMessagesTokenCount: (messages: import("social-media-types").ChatMessage[], isDavinci?: boolean | undefined) => (import("social-media-types").ChatMessage & {
        tokenCount: number;
    })[];
    calculateOpenaiMessagesTokenCountSum: (messages: import("openai").ChatCompletionRequestMessage[], isDavinci?: boolean | undefined) => number;
    calculateOpenaiMessagesTokenCount: (messages: import("openai").ChatCompletionRequestMessage[]) => (import("openai").ChatCompletionRequestMessage & {
        tokenCount: number;
    })[];
    calculateTokenCount: (text: string, isDavinci?: boolean | undefined) => number;
    chatCompletion: (messages: import("openai").ChatCompletionRequestMessage[], config?: import("openai-wrapper").ChatCompletionConfig | undefined) => Promise<import("function-types").StandardResponse & {
        tokensUsed?: number | undefined;
        chatResponse?: string | undefined;
    }>;
    chat: (person: import("peer-types").Person, allMessages: import("model-types").Creation<import("social-media-types").ChatMessage>[], config?: ({
        systemMessage?: string | null | undefined;
        postSystemMessage?: string | undefined;
    } & import("openai-wrapper").ChatCompletionConfig) | undefined) => Promise<import("openai-wrapper").ChatReturnType>;
    getOpenaiInstance: (personaId?: string | undefined) => Promise<import("function-types").StandardResponse & {
        openai?: import("openai").OpenAIApi | undefined;
    }>;
    gpt3: (input: string, config?: {
        model?: "text-davinci-003" | "text-curie-001" | "text-babbage-001" | "text-ada-001" | "code-davinci-002" | "code-cushman-001" | undefined;
        isInstant?: boolean | undefined;
    } | undefined) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
        result?: string | undefined;
    }>;
    messagesToTokenableText: (messages: import("openai").ChatCompletionRequestMessage[]) => string;
    whisper: (personaId?: string | undefined) => Promise<import("function-types").StandardResponse>;
    executeWatcherOnFilepath: (projectWatchers: import("function-types").ProjectWatcher<any>[], eventName: import("function-types").WatchEventType, path: string, stats?: import("fs").Stats | undefined) => Promise<void>;
    getQueueItems: (projectWatchers: import("function-types").ProjectWatcher<any>[], basePath: string | string[]) => Promise<import("model-types").Creation<import("queue-types").Queue>[]>;
    watchAll: (tsFunctions: import("function-types").TsFunction[], config?: {
        customIgnored?: string[] | undefined;
    } | undefined) => Promise<void>;
    watchAudioVideoDoc: import("function-types").ProjectWatcher<any>;
    watchMp3WithoutWav: import("function-types").ProjectWatcher<any>;
    watchMp4WithoutWav: import("function-types").ProjectWatcher<any>;
    watchWavToSpeakers: import("function-types").ProjectWatcher<any>;
    watchWavToSpeech: import("function-types").ProjectWatcher<any>;
    watchWavWithoutMp3: import("function-types").ProjectWatcher<any>;
    exploreBadNamingFiles: (absoluteFolderPath: string) => Promise<string[]>;
    isBadName: (absolutePath: string) => boolean;
    renameAllBadlyNamedFiles: (absoluteFolderPath: string) => Promise<{
        isSuccessful: boolean;
    }>;
    renameBadlyNamedFile: (absoluteFilePath: string) => Promise<string | undefined>;
    watchBadNaming: import("function-types").ProjectWatcher<any>;
    getBetterLocation: (config: {
        fileName: string;
        shortDescription: string;
        projectRelativePath: string;
        folderStructure: string;
    }) => Promise<void>;
    getIsPrivate: (contents: string) => Promise<{
        isSuccessful: boolean;
        message: string | undefined;
        isPrivate?: undefined;
    } | {
        isSuccessful: boolean;
        message: string | undefined;
        isPrivate: boolean | undefined;
    }>;
    makeMarkdownIndex: (absoluteMarkdownFilePath: string) => Promise<void>;
    watchMarkdown: import("function-types").ProjectWatcher<any>;
    getRecordingType: (absoluteTranscriptionFilePath: string) => Promise<import("ai-types").RecordingType>;
    transcriptionToGptChunks: (transcriptionAbsoluteFilePath: string, maxGptNodeTokenSize: number) => Promise<string[] | undefined>;
    watchMp3Transcriptions: import("function-types").ProjectWatcher<any>;
    getYoutubeVideoUrls: () => void;
    watchAppleMemos: import("function-types").ProjectWatcher<any>;
    createTranscriptionJson: (audioFilePath: string) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    getTranslationText: (audioFilePath: string) => Promise<string | undefined>;
    isWav16bit: (absolutePath: string) => Promise<boolean>;
    readTranscriptionCsv: (csvPath: string) => Promise<import("ai-types").TranscribedText[] | null>;
    whisperLocalCpp: (config: import("ai-types").WhisperConfig) => Promise<{
        txt: string;
        csv: string;
        srt: string | undefined;
        vtt: string | undefined;
    }[] | undefined>;
    allOperationsRemoveJsSrc: (debug?: boolean | undefined) => Promise<void>;
    allOperationsToMarkdown: () => Promise<void>;
    clearAllTsDatabases: () => Promise<void>;
    codeAll: (search: string) => Promise<void>;
    forAllFiles: ({ filePaths, callback, command, }: import("all").ForAllFilesConfig) => Promise<void>;
    forAllFolders: ({ type, callback, basePath, onlyRoot, command, shell, fileName, folderName, ignore, }: {
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }) => Promise<void>;
    getAllOperationClassifications: () => Promise<void>;
    gitShipAllRepos: ({ basePath, callback, fileName, folderName, shell, }: Omit<{
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }, "command" | "type">) => Promise<void>;
    mdAllOperations: (debug?: boolean | undefined) => Promise<void>;
    minifyAllOperations: (config?: Omit<{
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }, "command" | "type" | "fileName" | "folderName" | "callback" | "ignore"> | undefined) => Promise<void>;
    publishAllOperations: ({ basePath, callback, fileName, folderName, shell, }: Omit<{
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }, "command" | "type">) => Promise<void>;
    removeAllFiles: (search: string) => Promise<void>;
    removeAllFolders: (config: {
        basePath: string;
        folderNames: string[];
        ignore?: string | string[] | undefined;
        onlyRoot?: boolean | undefined;
    }) => Promise<boolean>;
    removeAll: ({ basePath, fileName, folderName, type, shell, ignore, onlyRoot, }: Omit<{
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }, "command">) => Promise<void>;
    renameAll: ({ filePaths, newFileName, newFilePath, }: {
        filePaths: string[];
        newFileName?: string | undefined;
        newFilePath?: ((oldPath: string) => string) | undefined;
    }) => Promise<void>;
    runScriptEverywhere: (script: string, startIndex?: number | undefined) => Promise<void>;
    setScriptEverywhere: (script: string, value: string) => Promise<void>;
    askOk: (question: string) => Promise<boolean>;
    ask: (question: string) => Promise<string>;
    getArgumentOrAsk: (argumentPosition: number, question: string, isNonInteractive?: boolean | undefined) => Promise<string>;
    compressAsset: (absolutePath: string, compressionConfig: import("asset-type").CompressionConfig) => Promise<string>;
    createDownloadWithContext: import("function-types").FileFunction<import("asset-functions-node").DownloadConfig, import("function-types").StandardResponse & {
        downloadId?: string | undefined;
    }>;
    deleteReferencedAsset: (projectRelativeReferencingFilePath: string, referencingFileRelativeAssetPath: string) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    downloadGetApi: (serverContext: import("server/typings/common").Context) => Promise<void | {
        isSuccessful: boolean;
        message: string;
    }>;
    downloadRemoteAsset: () => Promise<import("asset-type").UploadAssetResult>;
    findAbsoluteAssetPathFromReference: (projectRelativeReferencingFilePath: string, referencingFileRelativeAssetPath: string) => Promise<{
        isSuccessful: boolean;
        message: string;
        absoluteAssetPath?: string | undefined;
    }>;
    findAllProjectMedia: (searchQuery?: string | undefined, returnType?: "projectRelative" | "absolute" | undefined) => Promise<string[]>;
    findDownload: (projectRelativePath: string) => Promise<import("asset-type").Download | undefined>;
    getAssetDirectlyGetApi: (serverContext: import("server/typings/common").Context) => void | {
        isSuccessful: boolean;
        message: string;
    };
    getReferencedAssetGetApi: (serverContext: import("server/typings/common").Context) => Promise<{
        isSuccessful: boolean;
        isUnauthorized?: boolean | undefined;
        message: string;
    }>;
    getStorageLocationInfo: (absoluteReferencingFilePath: string, modelName?: string | undefined) => {
        type: "typescript" | "database" | "markdown";
        absoluteAssetBaseFolderPath: string;
    };
    getTemporaryAssetsFolderPath: () => string;
    makeDownloadableFile: (absolutePath: string) => Promise<string | undefined>;
    processAsset: (backendAsset?: import("asset-type").BackendAsset | import("asset-type").BackendAsset[] | undefined, config?: {
        customAbsoluteFolderPath?: string | undefined;
    } | undefined) => Promise<import("asset-type").BackendAsset | undefined>;
    processItemAssets: <KInterfaceName extends string | number | symbol>(item: import("model-types").AugmentedAnyModelType, interfaceName: KInterfaceName, operationName: string | null, customQueryConfig: import("fs-orm").CustomQueryConfig) => Promise<import("model-types").AugmentedAnyModelType | undefined>;
    removeOldTemporaryAssets: {
        (): Promise<{
            removedAmount: number;
        }>;
        config: {
            runEveryPeriod: "midnight";
        };
    };
    serverDownloadReply: (absoluteAssetPath: string, isDownload: boolean) => any;
    uploadAssetWithContext: {
        (functionContext: import("function-types").FunctionContext): Promise<import("asset-type").UploadAssetResult>;
        config: {
            isPublic: true;
        };
    };
    getAugmentedWordObject: (manualProjectRoot?: string | undefined) => Promise<import("js-util").MappedObject<import("augmented-word-types").AugmentedWord> | undefined>;
    getAugmentedWords: (manualProjectRoot?: string | undefined) => Promise<import("augmented-word-types").AugmentedWord[]>;
    getBundleAugmentedWords: () => Promise<import("augmented-word-types").AugmentedWord[]>;
    bananaCarrot: (modelParameters: {
        imageUrl: string;
        text?: string | undefined;
        similarity?: boolean | undefined;
        maxLength?: number | undefined;
        minLength?: number | undefined;
    }) => Promise<{
        isSuccessful: boolean;
        message: string;
        result?: undefined;
    } | {
        isSuccessful: boolean;
        message: string;
        result: object;
    }>;
    bananaStableDiffusion: (config: {
        text?: string | undefined;
    }) => Promise<{
        isSuccessful: boolean;
        message: string;
        result?: object | undefined;
    }>;
    bananaWhisper: (config: {
        absoluteAudioFilePath: string;
    }) => Promise<{
        isSuccessful: boolean;
        message: string;
    } | undefined>;
    getBatteryLevelPercentage: () => Promise<number>;
    isSystemUsingBattery: () => Promise<boolean>;
    getBundleSummary: (bundleConfig: import("bundle-types").BundleConfig) => import("bundle-util").BundleSummary;
    getDbModelsForBundle: (bundleConfig: import("bundle-types").BundleConfig) => Promise<import("code-types").TsInterface[]>;
    bahasaTeacher: (context: import("chat").CustomAssistantContext) => Promise<{
        isSuccessful: false;
        message: string;
        chatResponse?: undefined;
        isPaywallHit?: undefined;
        tokensUsed?: undefined;
    } | {
        isSuccessful: true;
        chatResponse: string;
        isPaywallHit: false;
        tokensUsed: number;
        message?: undefined;
    }>;
    commandResult: (chatMessage: import("model-types").Creation<import("social-media-types").ChatMessage>, person: import("peer-types").Person, persona: import("peer-types").FinalAssistantPersona) => Promise<string | undefined>;
    defaultAssistant: (context: import("chat").CustomAssistantContext) => Promise<import("openai-wrapper").ChatReturnType>;
    elonGpt: (context: import("chat").CustomAssistantContext) => Promise<import("openai-wrapper").ChatReturnType>;
    englishTeacher: (context: import("chat").CustomAssistantContext) => Promise<{
        isSuccessful: false;
        message: string;
        chatResponse?: undefined;
        isPaywallHit?: undefined;
        tokensUsed?: undefined;
    } | {
        isSuccessful: true;
        chatResponse: string;
        isPaywallHit: false;
        tokensUsed: number;
        message?: undefined;
    }>;
    generateInstantResponseMessage: (chatMessage: import("model-types").Creation<import("social-media-types").ChatMessage>, person: import("peer-types").Person, persona: import("peer-types").FinalAssistantPersona, config: {
        isFirstMessage?: boolean | undefined;
        newUsersAmount?: number | undefined;
    }) => Promise<import("openai-wrapper").ChatReturnType>;
    getChatMessageAnalysis: (message: string) => Promise<import("function-types").StandardResponse & {
        tokensUsed?: number | undefined;
        chatResponse?: string | undefined;
        jsonResponse?: import("chat").ChatMessageAnalysis | undefined;
    }>;
    getChatResult: (config: {
        person: import("peer-types").Person;
        persona: import("peer-types").FinalAssistantPersona;
        truncatedMessageHistory: import("model-types").Creation<import("social-media-types").ChatMessage>[];
        fullMessageHistory: import("model-types").Creation<import("social-media-types").ChatMessage>[];
        inputTokensCalculated: number;
        chatMessage: import("model-types").Creation<import("social-media-types").ChatMessage>;
    }) => Promise<import("openai-wrapper").ChatReturnType>;
    getCostPerMessageCredit: (persona: import("peer-types").Persona) => number;
    getCredit: (totalPaymentEuros: number) => number;
    getMessageLimitInfo: (person: import("peer-types").Person, persona: import("peer-types").FinalAssistantPersona) => {
        tooManyDau: boolean;
        freeMessagesAmount: number;
        dailyActiveUsers: number;
    };
    getMessagesAmountCheap: (persona: import("peer-types").Persona) => number;
    getMessagesAmountMore: (persona: import("peer-types").Persona) => number;
    getMinimumCredit: (persona: import("peer-types").Persona, freeMessagesAmount: number) => number;
    getPaywallResult: (chatMessage: import("model-types").Creation<import("social-media-types").ChatMessage>, history: import("social-media-types").ChatMessage[], person: import("peer-types").Person, persona: import("peer-types").FinalAssistantPersona, config: {
        isFirstMessage?: boolean | undefined;
        newUsersAmount?: number | undefined;
    }) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
        isPaywallHit: boolean;
        tokensUsed?: number | undefined;
        chatResponse?: string | undefined;
    }>;
    getPersonaStatistics: () => Promise<{
        totalPersons: number;
        activePersonsAmount: number;
        newPersonsAmount: number;
        returningPersonsAmount: number;
        messagesTodayAmount: number;
        personaStatistics: {
            [x: string]: import("chat").PersonaStatistics;
        };
    }>;
    getSystemMessageOtherLanguage: (person: import("peer-types").Person) => string;
    getSystemMessage: (person: import("peer-types").Person, persona: import("peer-types").Persona) => string;
    jsonGpt: <T extends {
        [key: string]: any;
    }>(message: string, schema: {
        [key: string]: {
            type: string;
            description?: string | undefined;
        };
    }) => Promise<import("function-types").StandardResponse & {
        tokensUsed?: number | undefined;
        chatResponse?: string | undefined;
        jsonResponse?: T | undefined;
    }>;
    languageTeacher: (context: import("chat").CustomAssistantContext, config: {
        level: "beginner" | "intermediate" | "advanced";
        targetLanguage: string;
    }) => Promise<{
        isSuccessful: false;
        message: string;
        chatResponse?: undefined;
        isPaywallHit?: undefined;
        tokensUsed?: undefined;
    } | {
        isSuccessful: true;
        chatResponse: string;
        isPaywallHit: false;
        tokensUsed: number;
        message?: undefined;
    }>;
    proactiveOutreach: {
        (): void;
        config: {
            runEveryPeriod: "quarter-hour";
        };
    };
    processMessageAfterChat: (config: {
        isTimedOut: boolean;
        instantResponse: import("openai-wrapper").ChatReturnType;
        person: import("peer-types").Person;
        persona: import("peer-types").Persona;
        chatMessage: import("model-types").Creation<import("social-media-types").ChatMessage>;
        isFreeMessage?: boolean | undefined;
    }) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    processMessage: (config: {
        newUsersAmount?: number | undefined;
        person: import("peer-types").Person;
        finalAssistantPersona: import("peer-types").FinalAssistantPersona;
        message: string;
        isFirstMessage?: boolean | undefined;
        isFreeMessage?: boolean | undefined;
    }) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
        responseMessage?: string | undefined;
    }>;
    sendChatAiStatsUpdate: {
        (): Promise<void>;
        config: {
            runEveryPeriod: "midnight";
            isPublic: true;
        };
    };
    sendDailyAlarmSms: {
        (): Promise<void>;
        config: {
            runEveryPeriod: "hour";
        };
    };
    truncateMessages: (chatMessages: import("social-media-types").ChatMessage[]) => {
        truncatedMessageHistory: import("social-media-types").ChatMessage[];
        inputTokensCalculated: number;
    };
    weeklyMail: {
        (isDryrun?: boolean | undefined): Promise<void>;
        config: {};
    };
    getChatMessagesPath: (projectRoot: string, personSlug: string, personaSlug: string, dateString: string) => string;
    getChatMessages: (personSlug: string, personaSlug: string, fromDate?: number | undefined, untilDate?: number | undefined) => Promise<import("social-media-types").ChatMessage[]>;
    getPersonPath: (projectRoot: string, slug: string) => string;
    getPersonSlug: (projectRoot: string, key: import("chat-message-orm").PersonIndex, value: string) => Promise<string | undefined>;
    getPerson: (key: import("chat-message-orm").PersonIndex, value: string) => Promise<import("peer-types").Person | null>;
    insertChatMessages: (personSlug: string, personaSlug: string, chatMessages: import("model-types").Creation<import("social-media-types").ChatMessage>[]) => Promise<import("function-types").StandardResponse>;
    setPerson: (person: import("model-types").Creation<import("peer-types").Person>) => Promise<{
        isSuccessful: boolean;
    }>;
    chatGPTAuth: (page: import("puppeteer").Page) => Promise<import("chatgpt-controller").LoginResponse>;
    detectChatGptPage: (page: import("puppeteer").Page) => Promise<"Login" | "Chat" | "Secure">;
    openAIChat: (props: import("chatgpt-controller").OpenAIChatProps) => Promise<import("ai-types").ProcessPromptFunctionResult>;
    execAsync: (command: string, execOptions: import("child_process").ExecOptions) => Promise<{
        isSuccessful: boolean;
        response: string;
    }>;
    spawnAsync: (command: string, options: import("child_process").SpawnOptionsWithoutStdio) => Promise<{
        success: boolean;
        response: string;
        data?: string[] | undefined;
    }>;
    cleanupTsDatabase: (operationName: string, manualProjectRoot?: string | undefined) => Promise<{
        amountRemoved: number;
    } | undefined>;
    shouldDeleteTsModel: (tsModel: any, operationName: string, operationRelativePaths: string[]) => boolean;
    csvItemArrayToCsvString: <T_1 extends import("csv-util").CsvItemType>(csvModelData: T_1[]) => string;
    tryParseCsv: <T_2 extends import("csv-util").CsvItemType>(csvString: string) => T_2[] | null;
    generateCsvInstance: () => import("model-types").Creation<import("database").CsvTestModel>;
    generateJsonSingleInstance: () => import("model-types").Creation<import("database").DefaultTestModel>;
    generateKvmdInstance: () => import("model-types").Creation<import("database").KvmdTestModel>;
    generateMarkdownInstance: () => import("model-types").Creation<import("database").MarkdownTestModel>;
    generateSlugTestModel: () => import("model-types").Creation<import("database").SlugTestModel>;
    getMergedQueryConfig: (modelName: string | number | symbol, customQueryConfig?: import("fs-orm").CustomQueryConfig | undefined) => import("fs-orm").MergedQueryConfig;
    randomName: () => string;
    runModelEndToEndTest: (modelName: keyof import("database").TestModels, generateInstance: () => import("model-types").Creation<import("model-types").AnyModelType>) => Promise<boolean>;
    testOperationModels: () => Promise<boolean>;
    cacheLookup: (functionName: string, parameters: any[] | undefined) => import("db-recipes").CacheLookupResult;
    calculateOperatingSystemBundle: (manualProjectRoot?: string | undefined) => Promise<void>;
    deleteDbModelWithContext: <KInterface extends "TsConfig" | "AiDataset" | "AiDemoApp" | "AiModel" | "ContextualPrompt" | "ContextualPromptResult" | "GptIdeasUser" | "Queue" | "Todo" | "PaymentCoupon" | "PaymentEvent" | "PaymentPlan" | "PaymentRequest" | "PaymentSubscription" | "PaymentTransaction" | "SelfSprintReview" | "TodoFile" | "TodoOffer" | "AuthorizationModel" | "Device" | "Group" | "PageVisit" | "PeerMessage" | "Person" | "Persona" | "PersonInformation" | "PersonInformationValue" | "PersonPlatformConnection" | "Platform" | "Artist" | "PlayCategory" | "PlayItem" | "PlayList" | "PlaySchedule" | "RelationModelType" | "RecurringReminder" | "Interest" | "MediaChannel" | "MediaCredential" | "MediaPost" | "BundleConfig" | "FrontBackBundle" | "Dataset" | "FunctionExecution" | "Operation" | "TsBuildError" | "TsComment" | "TsExport" | "TsFunction" | "TsImport" | "TsInterface" | "TsLintWarning" | "TsVariable" | "TypescriptFile" | "Address" | "Area" | "City" | "Country" | "Location" | "KvmdWord" | "MarkdownWord" | "NepaliEnglishTranslationMatrix" | "Statement" | "TokiPonaMatrix" | "Translation" | "Word" | "WordCategory" | "WordCombination" | "WordMatrix" | "CreatorMarkdownFile" | "MarkdownCallToAction" | "WebMarkdownFile" | "WebsiteHeader" | "SlugModelType" | "AppDeveloper" | "Assignment" | "Bag" | "Calendar" | "Deliverable" | "Diary" | "Feeling" | "FeelingLog" | "Folder" | "Host" | "Inventory" | "Item" | "ItemCategory" | "KvmdShortcut" | "Label" | "Light" | "Listing" | "LoginCredential" | "Material" | "MessagePreset" | "PersonalCarbonFootprintProfile" | "ProgressReport" | "Question" | "Reservation" | "Resource" | "Shit" | "ShitLog" | "ShoppingList" | "Shortcut" | "Student" | "Student2" | "TaskError" | "Trackable" | "User" | "UserCredential" | "BrowserPage" | "BrowserSession" | "JeepType" | "LocationType" | "OperationConfig" | "OperationIndex" | "PackageJson">(functionContext: FunctionContext, interfaceName: KInterface, id: string) => Promise<import("fs-orm").DbQueryResult>;
    getDatabaseMenu: (config?: {
        bundleId?: string | undefined;
    } | undefined) => Promise<{
        menu: import("code-types").ModelInfo[];
    }>;
    getDbModelMetadataWithContext: (functionContext: FunctionContext, modelName: string | undefined) => Promise<{
        tsInterface?: import("code-types").TsInterface | undefined;
        datasets?: import("code-types").Dataset[] | undefined;
        projectRelativeStorageFilePath?: string | undefined;
        isSuccessful?: boolean | undefined;
        message?: string | undefined;
    }>;
    getDbModelNames: (config?: {
        bundleId?: string | undefined;
    } | undefined) => Promise<(string | number | symbol)[]>;
    getDbModelWithContext: <KInterface_1 extends string | number | symbol, TDatasetConfig extends import("code-types").DatasetConfig>(functionContext: FunctionContext, interfaceName: KInterface_1 | null, datasetConfig?: TDatasetConfig | undefined, search?: string | undefined) => Promise<import("db-recipes").GetDbModelResult<KInterface_1>>;
    getFunctionIndex: ({ functionName, }: {
        functionName: string;
    }) => Promise<{
        success: boolean;
        response: string;
        function?: any;
    }>;
    getNestedDatabaseMenu: (config?: {
        noOperationPath?: boolean | undefined;
        noOperationName?: boolean | undefined;
        noSrcRelativeFolder?: boolean | undefined;
        noPrefix?: boolean | undefined;
    } | undefined) => Promise<{
        flat?: import("webpage-types").WebPage<null>[] | undefined;
        nested?: import("webpage-types").NestedWebPage[] | undefined;
    }>;
    getReferencableModelDataWithContext: (functionContext: FunctionContext, dbModelName: string | number | symbol) => Promise<{
        id: string;
        name: any;
        slug: any;
        categoryStack: any;
    }[]>;
    getTsInterface: (interfaceName: string | number | symbol) => Promise<import("model-types").Storing<import("code-types").TsInterface> | null | undefined>;
    hasDataPermissions: (functionContext: FunctionContext, interfaceName: string | number | symbol, requiredPermissionLetters: string[]) => Promise<boolean>;
    hasDbRecipes: () => boolean;
    makeSrcRelativeFolder: (operationRelativeTypescriptFilePath: string) => string | undefined;
    tsInterfaceToDbMenu: (tsInterface: import("code-types").TsInterface, type: string) => {
        name: string;
        operationName: string;
        type: string;
        srcRelativeFolder: string | undefined;
    } | undefined;
    upsertDbModelWithContext: <KInterfaceName_1 extends string | number | symbol, KItem extends DbModels>(functionContext: FunctionContext, interfaceName: KInterfaceName_1, data: KItem | KItem[], isNew?: boolean | undefined) => Promise<import("fs-orm").DbQueryResult>;
    validateInput: <TFunctionName extends "canExecute" | "canRead" | "time" | "unzip" | "zip" | "ask" | "log" | "nodemon" | "pluralize" | "trim" | "fetchUrl" | "addEmojiToEveryWord" | "addStatement" | "addWord" | "biggestFunctionName" | "checkQueue" | "cleanup" | "controlChatGptWrapper" | "deletePromptResult" | "developersQuote" | "diaryToInstagram" | "documentationWriting" | "emojiAugmentation" | "explainInDutch" | "explainInNepali" | "explainInPortuguese" | "explainLineByLine" | "explain" | "fixGrammarAndSpellingMistakes" | "followUpQuestions" | "getContextualPromptCategories" | "getContextualPromptResultJsonFilePath" | "getContextualPrompt" | "getObjectForkKeyRecursively" | "getToolFunctions" | "haiku" | "hookOneliners" | "improveCode" | "investorPitch" | "marcusAurelius" | "opposite" | "outlineToInvestorPitch" | "poem" | "processChatGptPrompt" | "processPromptOnFile" | "processPromptOnFolderWithContext" | "quiz" | "removeAllFake" | "rickAndMortyRick" | "rickAndMorty" | "setIsFavoritePromptResult" | "shouldAddToQueue" | "socratesAndSnoopDogg" | "storytelling" | "summarizeMeetingWithContext" | "toolFunctionWithContext" | "translateEverythingIntoHindi" | "translateEverythingPortuguese" | "translateEverything" | "translateToPortuguese" | "typescriptExplain" | "williamShakespear" | "writeContextualPromptSdk" | "writeCreatePromptCode" | "ye" | "yodafy" | "imageToText" | "languageTranslation" | "musicTrackSeparation" | "speakerSeparation" | "speechToText" | "textToImage" | "textToSpeech" | "textToText" | "bananaCarrot" | "bananaStableDiffusion" | "bananaWhisper" | "augmentMarkdown" | "canSeeFileContent" | "canSeeFile" | "expandFrontmatter" | "findClosestAbsolutePath" | "getContextualPromptResults" | "getContextualPromptsArray" | "getContextualPrompts" | "getExplorablePathDetails" | "getFirstFile" | "getFolderRelativeScopeDbFilePath" | "getNavigation" | "getReaderPagePropsWithContext" | "makeMarkdownLink" | "readerPageGetStaticPaths" | "readerPageGetStaticProps" | "gtpIndex" | "huggingfaceSpeakerDiarization" | "request" | "calculateTokenCount" | "gpt3" | "compressAsset" | "deleteReferencedAsset" | "downloadRemoteAsset" | "findAbsoluteAssetPathFromReference" | "findAllProjectMedia" | "getAssetDirectlyGetApi" | "getReferencedAssetGetApi" | "getStorageLocationInfo" | "getTemporaryAssetsFolderPath" | "processAsset" | "processItemAssets" | "removeOldTemporaryAssets" | "serverDownloadReply" | "uploadAssetWithContext" | "getFileCollectionPaths" | "renameFileCollection" | "folderGetUpdatedAt" | "getExtension" | "getFileOrFolderName" | "getFolderJs" | "getSubExtension" | "isPathRelative" | "makeRelative" | "removeTrailingSlash" | "withoutExtension" | "withoutSubExtensions" | "getAssociatedMd" | "getAvailableFolderPath" | "getOperationBins" | "getOperationPackageName" | "getPackageJson" | "getPackageSourcePaths" | "isEqualArray" | "renameTemplateFiles" | "renameTemplateToNormalFile" | "renameToTemplateFile" | "setJsonKey" | "setKeyAtLocation" | "initiateWatch" | "makeSubscription" | "pickWatcher" | "watchFoldersChokidar" | "watchFoldersFs" | "watchFolders" | "writeToAssets" | "allOperationsRemoveJsSrc" | "allOperationsToMarkdown" | "clearAllTsDatabases" | "codeAll" | "forAllFiles" | "forAllFolders" | "getAllOperationClassifications" | "gitShipAllRepos" | "mdAllOperations" | "minifyAllOperations" | "publishAllOperations" | "removeAllFiles" | "removeAllFolders" | "removeAll" | "renameAll" | "runScriptEverywhere" | "setScriptEverywhere" | "exploreOperation" | "exploreProject" | "getExplorationType" | "getFileWithExtension" | "getFolderExplorationDetails" | "getFrontmattersMappedObject" | "getInstanceNames" | "getProjectRelativePaths" | "getTodoPages" | "getTodoPaths" | "hasSameProjectPath" | "getAllOperationSourcePaths" | "determineFileType" | "exploreGitRepoFolders" | "exploreMultiple" | "exploreOperationFolders" | "explorePreset" | "explore" | "findAllDocsFolderPaths" | "findAllDotGitFolders" | "findAllFoldersWithName" | "findAllPackages" | "findAllTodoFolderPaths" | "findFilesRecursively" | "getFolderTypescriptFiles" | "pathArrayIsOperation" | "deleteApp" | "listApps" | "logApp" | "logTableObject" | "pm2ConnectDisconnect" | "pm2Connect" | "restartApp" | "startApp" | "stopAllAppsExcept" | "stopApps" | "watchAll" | "exitIfOperationsChange" | "gitCommitAllCron" | "watchOperations" | "brigtnessFull" | "brigtnessZero" | "decreaseBrightness" | "increaseBrightness" | "macosSetup" | "fileExplorerOpen" | "importAppleNotes" | "importGhostBlogs" | "importGoogleKeep" | "isSystemBusy" | "getFolderNames" | "playMusic" | "generateRecurringReminders" | "remindMeAboutNextMinute" | "setRandomTimezone" | "disableDarkMode" | "enableDarkMode" | "setDarkmodeCommand" | "toggleDarkMode" | "disableScreenSleep2" | "disableScreenSleep" | "enableScreenSleep" | "downVolume" | "getVolume" | "setVolume" | "upVolume" | "getOpenableFilePath" | "vscodeOpen" | "watchAudioVideo" | "watchMp3WithoutWav" | "watchMp4WithoutWav" | "watchWavToSpeakers" | "watchWavToSpeech" | "watchWavWithoutMp3" | "exploreBadNamingFiles" | "isBadName" | "renameAllBadlyNamedFiles" | "renameBadlyNamedFile" | "watchBadNaming" | "exploreAndRename" | "findJsonInMarkdown" | "getBetterFilename" | "getBetterLocation" | "makeMarkdownIndex" | "trimCodeblock" | "watchMarkdown" | "getRecordingType" | "transcriptionToGptChunks" | "watchMp3Transcriptions" | "getYoutubeVideoUrls" | "watchAppleMemos" | "createTranscriptionJson" | "isWav16bit" | "readTranscriptionCsv" | "whisperLocalCpp" | "whisper" | "loginToDevto" | "publishBlogOnDevTo" | "typeIntoTheField" | "facebookPostOnTheGroup" | "facebookPost" | "facebookTimeLinePost" | "getLatestFacebookPostUrl" | "sendFacebookMessage" | "searchAndDownloadGifs" | "buildQuery" | "errArrayLenZero" | "errFileSize" | "errFileType" | "errInvalidType" | "errTextLenZero" | "errTextOverflow" | "generateArrayFromJson" | "getStringForTranslation" | "launch" | "startTranslation" | "storeResult" | "translateText" | "sendMail" | "publishBlogOnMedium" | "publishBlogOnReddit" | "sendDailyAlarmSms" | "sendSms" | "youtubeSearchAndDownload" | "youtubeSearch" | "youtubeToMp3" | "youtubeToMp4" | "getPort" | "isLocked" | "lock" | "unlock" | "getBundleSummary" | "getDbModelsForBundle" | "createBackup" | "getHumanReadableDate" | "createDistribution" | "filterInterfacesFromOperationNames" | "getDbModelsFromOperations" | "applyDataset" | "calculateBundleDependencies" | "calculateToPath" | "copyCodestories" | "copyDocsAndReadme" | "copyFromRepoToNiche" | "copyOperation" | "copyReadmesBeforeFolderToBundle" | "copyTodosIntoBundle" | "findAndCopyOperations" | "findInherited" | "generateAllBundles" | "generateBundle" | "generateBundles" | "getBundlePaths" | "getCompareFn" | "getDataset" | "getIndirectDependencies" | "getMatchingFilters" | "mergeBundleConfigs" | "syncInformation" | "syncNicheFolder" | "yarnInstall" | "installNodeModules" | "yarnInstallNewDistribution" | "detectLanguage" | "generateSimpleSentence" | "makeAudioCourse" | "sleep" | "createFolder" | "getAllMarkdownFiles" | "getFileInfo" | "getTranslatedWord" | "markdownStoreAndRecord" | "parseMarkdownWordByWord" | "recordMdFile" | "startMarkdownTranslator" | "translatedArrayToKeyValue" | "watchMdFile" | "createWordSimplificationMap" | "findBetterWords" | "getSynonymFrequencyDataset" | "preprocessSynonyms" | "preprocessWordFrequencies" | "speakWordsToLearn" | "createPaymentRequestWithContext" | "createPaymentTransactionWithContext" | "defaultResponse" | "fail" | "getPaymentWebPages" | "succeed" | "mapArrayJson" | "mapObjectJson" | "csvItemArrayToCsvString" | "tryParseCsv" | "compressConvert" | "compressImages" | "compressMp4" | "convertToMp3" | "convertToMp4" | "copyCopyPairs" | "copyReaderStaticAssets" | "findReaderStaticAssets" | "findStaticAssets" | "docToMd" | "docxToMd" | "addCodestoryToSection" | "addModelName" | "findCodestories" | "makeCodespanMappedObject" | "makeCodestory" | "mapChunkRecursively" | "mapMarkdownParseSections" | "writeAllCodestories" | "writeCodespanDetails" | "addDependantCount" | "bundleFolderWithMarkdown" | "bundleToBookMarkdown" | "bundleToMarkdown" | "createMinimizedSectionMarkdown" | "createMinimizedSection" | "deployToVercel" | "emailMarkdownParse" | "flattenNestedObject" | "generateStaticSite" | "getJsonSchemaSummary" | "getMarkdownContents" | "getMergedMarkdownOutlineUrl" | "getOperationSummary" | "getOutline" | "getPublicMarkdownNestedPathObject" | "getTitlesRecursively" | "getTypeDescriptorRecursive" | "isConventionFileStatement" | "isUpperCase" | "makeOutlineMarkdownString" | "makePropertiesTable" | "markdownChunkToMarkdownStringRecursive" | "markdownChunksToMarkdownStringRecursive" | "markdownToSayable" | "mdToPdf" | "mergeMarkdownParse" | "noNewlines" | "operationRadio" | "operationToMarkdown" | "printNestedTitles" | "print" | "projectToMarkdown" | "propertyToTableRow" | "sayablesToMp3" | "selectRandomOperation" | "simplifiedSchemaToMarkdownString" | "statementItemToMarkdown" | "tsFunctionToMarkdownString" | "tsInterfaceToMarkdownString" | "tsVariableToMarkdownString" | "upMarkdownChunkLevelRecursively" | "convertPdfToMd" | "tryParsePdf" | "findAudioWithViewsArray" | "markdownParseToShortMarkdown" | "shortMarkdownToMarkdownParse" | "augmentShortMarkdown" | "fetchVoices" | "generateAugmentedShortMarkdown" | "getOrGenerateShortMarkdown" | "parseDialogue" | "uberduckGetPath" | "uberduckSpeak" | "voiceCloneDialogue" | "convertCsvToJson" | "convertXlsToJson" | "readCsvFileSync" | "readCsvFile" | "readRawCsvFile" | "readJsonFileSync" | "readJsonFile" | "readProjectRelativeJsonFile" | "readKvmdFile" | "readMarkdownFileToModel" | "readMarkdownFile" | "getFolderTypescriptIndex" | "readTypescriptFile" | "generateCsvInstance" | "generateJsonSingleInstance" | "generateKvmdInstance" | "generateMarkdownInstance" | "generateSlugTestModel" | "getMergedQueryConfig" | "randomName" | "runModelEndToEndTest" | "testOperationModels" | "cacheLookup" | "calculateOperatingSystemBundle" | "deleteDbModelWithContext" | "getDatabaseMenu" | "getDbModelMetadataWithContext" | "getDbModelNames" | "getDbModelWithContext" | "getFunctionIndex" | "getNestedDatabaseMenu" | "getReferencableModelDataWithContext" | "getTsInterface" | "hasDataPermissions" | "hasDbRecipes" | "makeSrcRelativeFolder" | "tsInterfaceToDbMenu" | "upsertDbModelWithContext" | "validateInput" | "validateResult" | "addDefaultValues" | "alterAny" | "alterCsv" | "alterJsonMultiple" | "alterJsonSingle" | "alterKeyValueMarkdown" | "alterMarkdown" | "augmentItemWithReferencedDataRecursively" | "calculateOperationsObject" | "createDb" | "findParent" | "getAugmentedData" | "getDatabaseFiles" | "getDatabaseRootFolder" | "getDbFileLocation" | "getDbStorageMethodExtension" | "getDefaultLocationPattern" | "getItemModelLocation" | "getLength" | "getLocationPattern" | "getMergedConfigOperationPath" | "getParentSlug" | "getRootFolders" | "getWildcardDbFileLocations__OLD" | "getWildcardDbFileLocations" | "groupByFile" | "makeStoringItem" | "mergeConfigs" | "removeKeyValueMarkdown" | "removeMultiple" | "upsertItems" | "upsertKeyValueMarkdown" | "upsert" | "waitForLockfile" | "validateModel" | "validate" | "getFunctionExecutions" | "getFunctionQueryPaths" | "getPublicBundleConfig" | "getSrcRelativeFolderPath" | "getTsFunction" | "getAllOperations" | "getAllPackagesNames" | "getGithubPersonalAccessToken" | "getGithubRepoLastCommitInfo" | "getRepoNameFromRepositoryUrl" | "initializeGitOrUseExistingAndPull" | "operationGithubPull" | "operationGithubPush" | "pullMultipleOperations" | "pushMultipleOperations" | "readAndWriteToPackageJsonExample" | "updateAllOperationStatus" | "getAugmentedWordObject" | "getAugmentedWords" | "getBundleAugmentedWords" | "codestoriesGetPages" | "codestoriesGetStaticPaths" | "codestoriesGetStaticProps" | "docsGetPages" | "getMarkdownReaderPages" | "getPublicMarkdownFilePaths" | "removeExtensionsFromPath" | "removeNumberPrefix" | "shouldExposeMarkdownFile" | "stripReadmeFromFolder" | "copyStaticAssets" | "docsGetStaticPaths" | "docsGetStaticProps" | "getAllMarkdownReaderPages" | "getChildren" | "getFolderExplorationInfo" | "getMarkdownModelPages" | "getMarkdownPageInfo" | "getMarkdownReaderQueryPaths" | "getOperationPages" | "getReaderTodoPages" | "markdownReaderGetStaticPaths" | "markdownReaderGetStaticPropsFromPages" | "markdownReaderGetStaticProps" | "putReadmeOnTop" | "getQueryPath" | "addPeerMessage" | "addPeer" | "augmentDevice" | "deviceGetAppsCalculated" | "getAllAppOperations" | "getAugmentedPersons" | "getFirstEmoji" | "getNestedPathObject" | "getPeerMessages" | "getPeerPeople" | "getPeersFromPeersRecursively" | "getPublicFolderNestedPathObjectFromPeer" | "getPublicFolderNestedPathObject" | "getPublicPeers" | "isPortUsed" | "lateFetchPeerMessageSync" | "ping" | "proactivePushAddPeerMessage" | "removePeer" | "sortDevices" | "updatePeer" | "getPrimaryPersona" | "youtubeToPlayItem" | "getDayNumber" | "remindMe" | "getAllSearchResultsWithContext" | "getExplorableBasePathsWithContext" | "getPostableFrontmatterSchema" | "canExecuteFileFunctionWithContext" | "copyPath" | "deleteFileOrFolder" | "getFileContents" | "getFrontmatterSchema" | "getWriterWebPagesMenu" | "getWriterWebPages" | "movePath" | "newFile" | "newFolder" | "processAssetUpload" | "renameFileOrFolder" | "saveFileContents" | "trashFileOrFolder" | "updateFrontmatter" | "getLight" | "getLocation" | "fetchWithTimeout" | "isOnline" | "calculateBbqAbility" | "calculateCloudyness" | "calculateCodeFromNatureAbility" | "calculateDresscode" | "calculateKiteability" | "calculateRainyness" | "calculateSunnyness" | "calculateWindyness" | "fetchWeatherStormGlass" | "fetchWeatherTommorowIOApi" | "getCustomWeatherData" | "cleanupTsDatabase" | "shouldDeleteTsModel" | "findAllDependencyOperations" | "findDependantsRecursively" | "findDependants" | "findDependenciesRecursively" | "findMonorepoExports" | "findMonorepoImports" | "findMonorepoModules" | "getDependencyObject" | "getDependencyTree" | "getOldDependencyTree" | "getOperationDependencyReasons" | "generateBunFile" | "generateBunMonopackage" | "generateBunTypes" | "generateBunVariables" | "getItemNewPath" | "generateNamedIndex" | "generateSimpleIndex" | "isTestFn" | "mapToImportStatement" | "generateDbSdk" | "generateEnvSdks" | "generateFunctionPathsSdk" | "generateFunctionSdks" | "generateInterfacePathsSdk" | "generateOperationsSdk" | "generateSdkApiWatcher" | "generateSdkApi" | "generateSdkOperations" | "getFunctionSdksContent" | "getSdkDescription" | "getSdkFunctionsPerClassification" | "isNonUiOperationBuild" | "newEnvSdk" | "newFunctionKeysSdkOperation" | "newFunctionSdkOperation" | "tsFunctionIsIndexable" | "tsFunctionIsSdkable" | "updateClassifications" | "getImportedDependencies" | "getPackage" | "isAbsoluteImport" | "calculatePackageJsonDependencies" | "findAndWriteImportsExports" | "getDefaultSymbolType" | "getExportSpecifierNames" | "getExportSymbolTypeRecursive" | "getImportSpecifiersWithNames" | "getImportsExports" | "getPackageNameFromAbsoluteImport" | "getSymbolTypeDeclarations" | "getTypeFromImportSpecifierRecursive" | "isAbsoluteImportBuiltin" | "isImportFromOptionalFile" | "writeResult" | "getMissingDependencies" | "findAndUpsertTsInterfaces" | "findCommentTypes" | "generateSchema" | "getAllComments" | "getDbStorageMethod" | "getFrontmatterDbStorageMethod" | "getFrontmatterFunctionParameters" | "getIndexId" | "getMaxIndentationDepth" | "getMinMaxValidation" | "getNumberOfLines" | "getParamSchema" | "getParametersFromInterfaces" | "getPossibleRefs" | "getSpecialExtensionDbStorageMethod" | "getTsStatements" | "getTypeInfo" | "getValidatedOperationPathParse" | "hasDefinition" | "hasTypescriptFileChanged" | "indexImportsExportsForFilePath" | "indexTypescriptFilePath" | "indexTypescriptFile" | "indexTypescript" | "isPrimitive" | "makeTsComment" | "removeTypescriptIndex" | "schemaToTsInterface" | "tryCreateSchema" | "typeToSchema" | "preIndexLint" | "minifyBuild" | "getAvailableOperationName" | "newOperationWithFiles" | "newOperation" | "newTemplate" | "buildPackage" | "installMissingMonorepoDependencies" | "obfucsate" | "testPackage" | "prettierOperation" | "clearTsDatabase" | "executeCommandQuietUnlessFail" | "exitIfProcessDependenciesChanged" | "generateJsonSchemas" | "getAllDbModels" | "getFileIds" | "getIndexFileIds" | "getSrcIds" | "isOperationBuildNeeded" | "isSdkOperation" | "rebuildAllOperations" | "rebuildOperation" | "shouldSkip" | "yarnBuild" | "renameOperation" | "createSimpleTypescriptFile" | "alterTypescriptFile" | "alterTypescriptInstance" | "buildEverythingInRightOrder" | "detectCircularDependencies" | "getImports" | "getOperationPathsRebuildRequired" | "getTypescriptData" | "isAbsoluteModuleName" | "operationGetDependencies" | "operationGetIndexedDependencies" | "reindexAllOperationsCircularDependencies" | "reindexCircularDependencies" | "setTypescriptData" | "runTestsForOperation" | "runTests" | "getAllTsMorphSourceFiles" | "getHasGeneric" | "getTsMorphProject" | "comparePassword" | "encryptPassword" | "calculateDeviceName" | "executeFunctionWithParameters" | "getAuthorizationInfo" | "isGetEndpoint" | "savePageVisit" | "storeFunctionExecution" | "upsertDevice" | "defaultMessage" | "getMeWithContext" | "getPublicPerson" | "getPublicPersons" | "isPhoneNumber" | "isValidPassword" | "loginConfirmWithContext" | "loginWithEmailOrPhone" | "logoutWithContext" | "signupBare" | "signupConfirmWithContext" | "signupWithEmailOrPhone" | "switchCurrentPersonWithContext" | "updateMeWithContext" | "sayDutch" | "sayLanguage" | "sayNepali" | "saySomething" | "textToMp3" | "askOk" | "getArgumentOrAsk" | "cliVersionUpdates" | "handleVersionUpdates" | "execAsync" | "spawnAsync" | "executeCommand" | "getCommand" | "isCommandPerOs" | "getDbPath" | "rawPolygonToPolygon" | "dev" | "chatGPTAuth" | "detectChatGptPage" | "openAIChat" | "checkAndGetSlackFileUrl" | "elementExists" | "getAllMessages" | "getLatestMessages" | "getSlackChannelMemberList" | "getSlackChannels" | "getSlackMessageFrom" | "getSlackWorkspaces" | "scrapeSlackMessage" | "scrollToTop" | "selectSlackChannel" | "selectSlackWorkspace" | "sendSlackMessage" | "slackLogin" | "storeAllSlackChannel" | "storeSlackChannelMember" | "detectTwitterPage" | "generateTweetsReply" | "getTwitterPostUrl" | "postTweetOnTwitter" | "replyTweet" | "scrapPersonTweets" | "sotreChatGPTTweetReply" | "startReplyTweet" | "startTwitterSraper" | "storeMediaChannelInformation" | "storePersonTweets" | "tweetPropmtTemplate" | "getAbsolutePathMdFileName" | "getAllPostables" | "getPersonDetails" | "getPersonsMenu" | "getSocialMediaChannelsMenu" | "getSocialMediaMenu" | "addSocialMediaCredential" | "canBePosted" | "createAllSocialMediaPost" | "createSocialMediaPost" | "devtoCotentAnalyzer" | "facebookContentAnalyzer" | "getSocialMediaCredentials" | "mediumCotentAnalyzer" | "postSocialMediaPostToDevto" | "postSocialMediaPostToFacebook" | "postSocialMediaPostToMedium" | "postSocialMediaPostToReddit" | "postSocialMediaPostToTwitter" | "redditContentAnalyzer" | "socialMediaPostPlanner" | "startSocialMediaController" | "twitterContentAnalyzer" | "updateSocialMediaPost" | "makeExercises" | "driverLogin" | "driverSignup" | "earthDistance" | "getMyJeep" | "getPublicJeeps" | "updateMyProfile" | "addToken" | "ensureToken" | "findAssetParametersRecursively" | "getConversionInfoFromType" | "getExtensionFromAsset" | "getNameFromRelativePath" | "getNameWithTokenFromRelativePath" | "getReferencedAssetApiUrl" | "getTypeFromUrlOrPath" | "readableSize" | "removeTokenIfPresent" | "getEncoding" | "isBinary" | "isText" | "canAccessSync" | "canAccess" | "canExecuteSync" | "canReadSync" | "canSeeSync" | "canSee" | "canWriteSync" | "canWrite" | "copyAllRelativeFiles" | "findFileNameCaseInsensitive" | "getAllFoldersUntilFolder" | "getFileName" | "getFirstAvailableFilename" | "getFolderSizeObject" | "getFolder" | "getLastFolder" | "getOneFolderUpPath" | "getPathCombinations" | "oneUp" | "parseMd" | "removeAllExcept" | "renameAndCreate" | "updateSingleNestedJsonFile" | "writeJsonToFile" | "writeStringToFile" | "writeToFiles" | "getTsConfig" | "byteCount" | "calculatePathMetaData" | "categorizeFiles" | "getFolderSummary" | "getPathMainComment" | "getSizeSummary" | "sumSizeSummary" | "makeFileType" | "findFolderWhereMatch" | "findOperationBasePathWithClassification" | "findOperationBasePath" | "getAllPackageJsonDependencies" | "getCommonAncestor" | "getOperationClassificationObject" | "getOperationClassification" | "getOperationPathParse" | "getOperationPath" | "getOperationRelativePath" | "getPathParse" | "getPathsWithOperations" | "getProjectRoot" | "getRelativeLinkPath" | "getRelativePath" | "getRootPath" | "getSrcRelativeFileId" | "getSubExtensions" | "hasDependency" | "isBundle" | "isOperation" | "isUiOperation" | "isWorkspaceRoot" | "packageCompilesTs" | "tsconfigCompilesEsm" | "getDependenciesSummary" | "getOperationMetaData" | "recalculateOperationIndexJson" | "getFileTypeFromPath" | "getWriterType" | "hasSubExtension" | "isGeneratedOperationName" | "isGeneratedOperation" | "isIndexableFileId" | "getAssetInputType" | "getParameterContentType" | "isCalculatedParameter" | "isGeneratedParameterName" | "jsonToMdString" | "jsonToSayString" | "getSimpleJsonString" | "flattenMarkdownChunks" | "getKvmdItemsRecursively" | "getParagraphsRecursively" | "kvmdDataMap" | "kvmdDataToString" | "kvmdParseToMarkdownString" | "markdownStringToKvmdParse" | "parseKvmdLine" | "chunkToStringRecursively" | "getChunkParagraphsRecursively" | "getImplicitId" | "getMarkdownIntro" | "getMarkdownParseParagraphs" | "getMarkdownReferencePaths" | "getMarkdownReferencesFromParagraph" | "markdownParseToMarkdownStringFromContent" | "markdownParseToMarkdownString" | "mdContentParseRecursively" | "mdToJsonParse" | "parseFrontmatterMarkdownString" | "parseMarkdownParagraph" | "parseMdToChunks" | "removeHeaderPrefix" | "findCodeblocks" | "findCodespans" | "findEmbeds" | "findLinks" | "flattenMarkdownString" | "flattenMarkedTokenRecursive" | "parsePrimitiveArray" | "parsePrimitiveBoolean" | "parsePrimitiveString" | "parsePrimitive" | "tryParseJson" | "bodyFromQueryString" | "getFirstQueryStrings" | "getQueryPart" | "isValidEntry" | "toQueryString" | "MatchingText" | "PathSearchResults" | "findSentenceMatches" | "searchRecursiveObjectArray" | "frontmatterParseToString" | "frontmatterToObject" | "getFrontmatterValueString" | "markdownModelTypeToMarkdownString" | "objectToFrontmatter" | "parseFrontmatterString" | "quotedOrNot" | "stringifyNewlines" | "getFunctionExersize" | "createInvoiceContactMarkdown" | "createInvoiceMarkdown" | "createKeyValueMarkdown" | "money" | "newInvoice" | "printDate" | "markdownParseToMarkdownModelType" | "parseMarkdownModelTimestamp" | "tryParseDate" | "generateId" | "generatePassword" | "generateRandomString" | "generateTime" | "isEmail" | "createUser" | "getBacktickContents" | "isInPeriod" | "isOutOfStock" | "kvmdToCredential" | "upcomingOutgoingFlights" | "whereShouldIgo" | "crudPageToWebPages" | "functionFormPageToWebPage" | "stripCommentEnd" | "stripCommentStart" | "stripComment" | "stripSlashes" | "stripStar" | "getCompileErrors" | "getTypescriptErrorsFromFiles" | "writeBuildErrors" | "findFirstCommentTypes" | "getDataParameterNames" | "getPossibleReferenceParameterNames" | "getProperties" | "getRefLink" | "getReferencableModels" | "getReferenceParameterInfo" | "getSchemaItems" | "getSchema" | "simplifiedSchemaToTypeDefinitionString" | "simplifySchema" | "getSimpleTypescriptFileString" | "jsonToString" | "parseRawSimpleTypescriptFile" | "isResultOfInterface" | "makeTest" | "getGetApiUrl" | "untypedApiFunction" | "makeArraysGetEndpoint" | "makeGetEndpoint" | "converse" | "executeSdkFunction" | "getCachedExportedFunctions" | "getMenu" | "getSdkFunctionPaths" | "objectStringToJson" | "parseIfJson" | "parsePrimitiveJson" | "stringToJson" | "BreadCrumbs" | "renderBreadCrumbs" | "ClickableIcon" | "errorToast" | "infoToast" | "showStandardResponse" | "successToast" | "warningToast" | "FancyLoader" | "getFileType" | "LabeledButton" | "getFullPath" | "getLastPathsChunk" | "usePath" | "Tabs" | "createCodeblockMarkdown" | "useCustomUrlStore" | "getKeysAtPathFromNestedObject" | "getMenuPagesObject" | "makeNestedObjectFromQueryPathObject" | "mapChildObjectRecursive" | "nestedObjectToChildObject" | "nestedPathObjectToNestedMenuRecursive" | "nestifyQueryPathObjectRecursive" | "queryPathsArrayToNestedPathObject" | "reduceQueryPathsRecursively" | "camelCase" | "capitalCase" | "capitaliseFirstLetter" | "convertCase" | "fileSlugify" | "getDelimiter" | "humanCase" | "kebabCase" | "lowerCaseArray" | "pascalCase" | "slugify" | "snakeCase" | "apply" | "createEnum" | "createMappedObject" | "destructureOptionalObject" | "findLastIndex" | "getObjectFromParamsString" | "getObjectKeysArray" | "getParameterAtLocation" | "getSubsetFromObject" | "groupByKey" | "hasAllLetters" | "insertAt" | "isAllTrue" | "isArrayEqual" | "makeArray" | "mapAsync" | "mapKeys" | "mapMany" | "mapValuesSync" | "mergeNestedObject" | "mergeObjectParameters" | "mergeObjectsArray" | "mergeObjects" | "noEmptyString" | "objectMapAsync" | "objectMapSync" | "objectValuesMap" | "omitUndefinedValues" | "onlyDuplicates" | "onlyUnique2" | "onlyUnique" | "pickRandomArrayItem" | "putIndexAtIndex" | "removeIndexFromArray" | "removeOptionalKeysFromObjectStrings" | "removeOptionalKeysFromObject" | "replaceLastOccurence" | "reverseString" | "sumAllKeys" | "sumObjectParameters" | "sum" | "takeFirst" | "trimSlashes" | "getCallerFileName" | "parseTitle" | "cleanupTimer" | "generateUniqueId" | "getNewPerformance" | "oneByOne" | "isPlural" | "isSingular" | "singularize" | "runChildProcess" | "createLinkedinPost" | "linkedinGroupPost" | "linkedinPost" | "loginLinkedin" | "makeApi" | "scrapeConnections" | "sendMessageLinkedin" | "signUpLinkedin" | "clickOnSpanTag" | "delay" | "facebookLogin" | "foundOrNotXpath" | "foundOrNot" | "getBrowserPageById" | "getBrowserTabs" | "getBrowser" | "getChromeExecutablePath" | "getConnectedBrowsers" | "getIdlePage" | "getNewPage" | "gmailLogin" | "isCaptchaExist" | "logConsoleIfDebug" | "openMultiTabs" | "openNewBrowserOnChildProcess" | "openNewBrowser" | "openPage" | "racePromises" | "retryClickAndWaitSelector" | "retryWaitSelector" | "setBrowserPageIdle" | "setBrowserSession" | "setInnerHtml" | "setInputValue" | "solveReptcha" | "trueClick" | "twitterLogin" | "typeInTheInputField" | "typeOnTheTargetWithXpathSelector" | "waitMilliseconds">(functionName: TFunctionName, parameters: any[] | undefined, tsFunction: TsFunction) => {
        isValid: boolean;
        errors?: {
            fieldStack: string[];
            error: string;
        }[] | undefined;
    };
    validateResult: <TFunctionName_1 extends "canExecute" | "canRead" | "time" | "unzip" | "zip" | "ask" | "log" | "nodemon" | "pluralize" | "trim" | "fetchUrl" | "addEmojiToEveryWord" | "addStatement" | "addWord" | "biggestFunctionName" | "checkQueue" | "cleanup" | "controlChatGptWrapper" | "deletePromptResult" | "developersQuote" | "diaryToInstagram" | "documentationWriting" | "emojiAugmentation" | "explainInDutch" | "explainInNepali" | "explainInPortuguese" | "explainLineByLine" | "explain" | "fixGrammarAndSpellingMistakes" | "followUpQuestions" | "getContextualPromptCategories" | "getContextualPromptResultJsonFilePath" | "getContextualPrompt" | "getObjectForkKeyRecursively" | "getToolFunctions" | "haiku" | "hookOneliners" | "improveCode" | "investorPitch" | "marcusAurelius" | "opposite" | "outlineToInvestorPitch" | "poem" | "processChatGptPrompt" | "processPromptOnFile" | "processPromptOnFolderWithContext" | "quiz" | "removeAllFake" | "rickAndMortyRick" | "rickAndMorty" | "setIsFavoritePromptResult" | "shouldAddToQueue" | "socratesAndSnoopDogg" | "storytelling" | "summarizeMeetingWithContext" | "toolFunctionWithContext" | "translateEverythingIntoHindi" | "translateEverythingPortuguese" | "translateEverything" | "translateToPortuguese" | "typescriptExplain" | "williamShakespear" | "writeContextualPromptSdk" | "writeCreatePromptCode" | "ye" | "yodafy" | "imageToText" | "languageTranslation" | "musicTrackSeparation" | "speakerSeparation" | "speechToText" | "textToImage" | "textToSpeech" | "textToText" | "bananaCarrot" | "bananaStableDiffusion" | "bananaWhisper" | "augmentMarkdown" | "canSeeFileContent" | "canSeeFile" | "expandFrontmatter" | "findClosestAbsolutePath" | "getContextualPromptResults" | "getContextualPromptsArray" | "getContextualPrompts" | "getExplorablePathDetails" | "getFirstFile" | "getFolderRelativeScopeDbFilePath" | "getNavigation" | "getReaderPagePropsWithContext" | "makeMarkdownLink" | "readerPageGetStaticPaths" | "readerPageGetStaticProps" | "gtpIndex" | "huggingfaceSpeakerDiarization" | "request" | "calculateTokenCount" | "gpt3" | "compressAsset" | "deleteReferencedAsset" | "downloadRemoteAsset" | "findAbsoluteAssetPathFromReference" | "findAllProjectMedia" | "getAssetDirectlyGetApi" | "getReferencedAssetGetApi" | "getStorageLocationInfo" | "getTemporaryAssetsFolderPath" | "processAsset" | "processItemAssets" | "removeOldTemporaryAssets" | "serverDownloadReply" | "uploadAssetWithContext" | "getFileCollectionPaths" | "renameFileCollection" | "folderGetUpdatedAt" | "getExtension" | "getFileOrFolderName" | "getFolderJs" | "getSubExtension" | "isPathRelative" | "makeRelative" | "removeTrailingSlash" | "withoutExtension" | "withoutSubExtensions" | "getAssociatedMd" | "getAvailableFolderPath" | "getOperationBins" | "getOperationPackageName" | "getPackageJson" | "getPackageSourcePaths" | "isEqualArray" | "renameTemplateFiles" | "renameTemplateToNormalFile" | "renameToTemplateFile" | "setJsonKey" | "setKeyAtLocation" | "initiateWatch" | "makeSubscription" | "pickWatcher" | "watchFoldersChokidar" | "watchFoldersFs" | "watchFolders" | "writeToAssets" | "allOperationsRemoveJsSrc" | "allOperationsToMarkdown" | "clearAllTsDatabases" | "codeAll" | "forAllFiles" | "forAllFolders" | "getAllOperationClassifications" | "gitShipAllRepos" | "mdAllOperations" | "minifyAllOperations" | "publishAllOperations" | "removeAllFiles" | "removeAllFolders" | "removeAll" | "renameAll" | "runScriptEverywhere" | "setScriptEverywhere" | "exploreOperation" | "exploreProject" | "getExplorationType" | "getFileWithExtension" | "getFolderExplorationDetails" | "getFrontmattersMappedObject" | "getInstanceNames" | "getProjectRelativePaths" | "getTodoPages" | "getTodoPaths" | "hasSameProjectPath" | "getAllOperationSourcePaths" | "determineFileType" | "exploreGitRepoFolders" | "exploreMultiple" | "exploreOperationFolders" | "explorePreset" | "explore" | "findAllDocsFolderPaths" | "findAllDotGitFolders" | "findAllFoldersWithName" | "findAllPackages" | "findAllTodoFolderPaths" | "findFilesRecursively" | "getFolderTypescriptFiles" | "pathArrayIsOperation" | "deleteApp" | "listApps" | "logApp" | "logTableObject" | "pm2ConnectDisconnect" | "pm2Connect" | "restartApp" | "startApp" | "stopAllAppsExcept" | "stopApps" | "watchAll" | "exitIfOperationsChange" | "gitCommitAllCron" | "watchOperations" | "brigtnessFull" | "brigtnessZero" | "decreaseBrightness" | "increaseBrightness" | "macosSetup" | "fileExplorerOpen" | "importAppleNotes" | "importGhostBlogs" | "importGoogleKeep" | "isSystemBusy" | "getFolderNames" | "playMusic" | "generateRecurringReminders" | "remindMeAboutNextMinute" | "setRandomTimezone" | "disableDarkMode" | "enableDarkMode" | "setDarkmodeCommand" | "toggleDarkMode" | "disableScreenSleep2" | "disableScreenSleep" | "enableScreenSleep" | "downVolume" | "getVolume" | "setVolume" | "upVolume" | "getOpenableFilePath" | "vscodeOpen" | "watchAudioVideo" | "watchMp3WithoutWav" | "watchMp4WithoutWav" | "watchWavToSpeakers" | "watchWavToSpeech" | "watchWavWithoutMp3" | "exploreBadNamingFiles" | "isBadName" | "renameAllBadlyNamedFiles" | "renameBadlyNamedFile" | "watchBadNaming" | "exploreAndRename" | "findJsonInMarkdown" | "getBetterFilename" | "getBetterLocation" | "makeMarkdownIndex" | "trimCodeblock" | "watchMarkdown" | "getRecordingType" | "transcriptionToGptChunks" | "watchMp3Transcriptions" | "getYoutubeVideoUrls" | "watchAppleMemos" | "createTranscriptionJson" | "isWav16bit" | "readTranscriptionCsv" | "whisperLocalCpp" | "whisper" | "loginToDevto" | "publishBlogOnDevTo" | "typeIntoTheField" | "facebookPostOnTheGroup" | "facebookPost" | "facebookTimeLinePost" | "getLatestFacebookPostUrl" | "sendFacebookMessage" | "searchAndDownloadGifs" | "buildQuery" | "errArrayLenZero" | "errFileSize" | "errFileType" | "errInvalidType" | "errTextLenZero" | "errTextOverflow" | "generateArrayFromJson" | "getStringForTranslation" | "launch" | "startTranslation" | "storeResult" | "translateText" | "sendMail" | "publishBlogOnMedium" | "publishBlogOnReddit" | "sendDailyAlarmSms" | "sendSms" | "youtubeSearchAndDownload" | "youtubeSearch" | "youtubeToMp3" | "youtubeToMp4" | "getPort" | "isLocked" | "lock" | "unlock" | "getBundleSummary" | "getDbModelsForBundle" | "createBackup" | "getHumanReadableDate" | "createDistribution" | "filterInterfacesFromOperationNames" | "getDbModelsFromOperations" | "applyDataset" | "calculateBundleDependencies" | "calculateToPath" | "copyCodestories" | "copyDocsAndReadme" | "copyFromRepoToNiche" | "copyOperation" | "copyReadmesBeforeFolderToBundle" | "copyTodosIntoBundle" | "findAndCopyOperations" | "findInherited" | "generateAllBundles" | "generateBundle" | "generateBundles" | "getBundlePaths" | "getCompareFn" | "getDataset" | "getIndirectDependencies" | "getMatchingFilters" | "mergeBundleConfigs" | "syncInformation" | "syncNicheFolder" | "yarnInstall" | "installNodeModules" | "yarnInstallNewDistribution" | "detectLanguage" | "generateSimpleSentence" | "makeAudioCourse" | "sleep" | "createFolder" | "getAllMarkdownFiles" | "getFileInfo" | "getTranslatedWord" | "markdownStoreAndRecord" | "parseMarkdownWordByWord" | "recordMdFile" | "startMarkdownTranslator" | "translatedArrayToKeyValue" | "watchMdFile" | "createWordSimplificationMap" | "findBetterWords" | "getSynonymFrequencyDataset" | "preprocessSynonyms" | "preprocessWordFrequencies" | "speakWordsToLearn" | "createPaymentRequestWithContext" | "createPaymentTransactionWithContext" | "defaultResponse" | "fail" | "getPaymentWebPages" | "succeed" | "mapArrayJson" | "mapObjectJson" | "csvItemArrayToCsvString" | "tryParseCsv" | "compressConvert" | "compressImages" | "compressMp4" | "convertToMp3" | "convertToMp4" | "copyCopyPairs" | "copyReaderStaticAssets" | "findReaderStaticAssets" | "findStaticAssets" | "docToMd" | "docxToMd" | "addCodestoryToSection" | "addModelName" | "findCodestories" | "makeCodespanMappedObject" | "makeCodestory" | "mapChunkRecursively" | "mapMarkdownParseSections" | "writeAllCodestories" | "writeCodespanDetails" | "addDependantCount" | "bundleFolderWithMarkdown" | "bundleToBookMarkdown" | "bundleToMarkdown" | "createMinimizedSectionMarkdown" | "createMinimizedSection" | "deployToVercel" | "emailMarkdownParse" | "flattenNestedObject" | "generateStaticSite" | "getJsonSchemaSummary" | "getMarkdownContents" | "getMergedMarkdownOutlineUrl" | "getOperationSummary" | "getOutline" | "getPublicMarkdownNestedPathObject" | "getTitlesRecursively" | "getTypeDescriptorRecursive" | "isConventionFileStatement" | "isUpperCase" | "makeOutlineMarkdownString" | "makePropertiesTable" | "markdownChunkToMarkdownStringRecursive" | "markdownChunksToMarkdownStringRecursive" | "markdownToSayable" | "mdToPdf" | "mergeMarkdownParse" | "noNewlines" | "operationRadio" | "operationToMarkdown" | "printNestedTitles" | "print" | "projectToMarkdown" | "propertyToTableRow" | "sayablesToMp3" | "selectRandomOperation" | "simplifiedSchemaToMarkdownString" | "statementItemToMarkdown" | "tsFunctionToMarkdownString" | "tsInterfaceToMarkdownString" | "tsVariableToMarkdownString" | "upMarkdownChunkLevelRecursively" | "convertPdfToMd" | "tryParsePdf" | "findAudioWithViewsArray" | "markdownParseToShortMarkdown" | "shortMarkdownToMarkdownParse" | "augmentShortMarkdown" | "fetchVoices" | "generateAugmentedShortMarkdown" | "getOrGenerateShortMarkdown" | "parseDialogue" | "uberduckGetPath" | "uberduckSpeak" | "voiceCloneDialogue" | "convertCsvToJson" | "convertXlsToJson" | "readCsvFileSync" | "readCsvFile" | "readRawCsvFile" | "readJsonFileSync" | "readJsonFile" | "readProjectRelativeJsonFile" | "readKvmdFile" | "readMarkdownFileToModel" | "readMarkdownFile" | "getFolderTypescriptIndex" | "readTypescriptFile" | "generateCsvInstance" | "generateJsonSingleInstance" | "generateKvmdInstance" | "generateMarkdownInstance" | "generateSlugTestModel" | "getMergedQueryConfig" | "randomName" | "runModelEndToEndTest" | "testOperationModels" | "cacheLookup" | "calculateOperatingSystemBundle" | "deleteDbModelWithContext" | "getDatabaseMenu" | "getDbModelMetadataWithContext" | "getDbModelNames" | "getDbModelWithContext" | "getFunctionIndex" | "getNestedDatabaseMenu" | "getReferencableModelDataWithContext" | "getTsInterface" | "hasDataPermissions" | "hasDbRecipes" | "makeSrcRelativeFolder" | "tsInterfaceToDbMenu" | "upsertDbModelWithContext" | "validateInput" | "validateResult" | "addDefaultValues" | "alterAny" | "alterCsv" | "alterJsonMultiple" | "alterJsonSingle" | "alterKeyValueMarkdown" | "alterMarkdown" | "augmentItemWithReferencedDataRecursively" | "calculateOperationsObject" | "createDb" | "findParent" | "getAugmentedData" | "getDatabaseFiles" | "getDatabaseRootFolder" | "getDbFileLocation" | "getDbStorageMethodExtension" | "getDefaultLocationPattern" | "getItemModelLocation" | "getLength" | "getLocationPattern" | "getMergedConfigOperationPath" | "getParentSlug" | "getRootFolders" | "getWildcardDbFileLocations__OLD" | "getWildcardDbFileLocations" | "groupByFile" | "makeStoringItem" | "mergeConfigs" | "removeKeyValueMarkdown" | "removeMultiple" | "upsertItems" | "upsertKeyValueMarkdown" | "upsert" | "waitForLockfile" | "validateModel" | "validate" | "getFunctionExecutions" | "getFunctionQueryPaths" | "getPublicBundleConfig" | "getSrcRelativeFolderPath" | "getTsFunction" | "getAllOperations" | "getAllPackagesNames" | "getGithubPersonalAccessToken" | "getGithubRepoLastCommitInfo" | "getRepoNameFromRepositoryUrl" | "initializeGitOrUseExistingAndPull" | "operationGithubPull" | "operationGithubPush" | "pullMultipleOperations" | "pushMultipleOperations" | "readAndWriteToPackageJsonExample" | "updateAllOperationStatus" | "getAugmentedWordObject" | "getAugmentedWords" | "getBundleAugmentedWords" | "codestoriesGetPages" | "codestoriesGetStaticPaths" | "codestoriesGetStaticProps" | "docsGetPages" | "getMarkdownReaderPages" | "getPublicMarkdownFilePaths" | "removeExtensionsFromPath" | "removeNumberPrefix" | "shouldExposeMarkdownFile" | "stripReadmeFromFolder" | "copyStaticAssets" | "docsGetStaticPaths" | "docsGetStaticProps" | "getAllMarkdownReaderPages" | "getChildren" | "getFolderExplorationInfo" | "getMarkdownModelPages" | "getMarkdownPageInfo" | "getMarkdownReaderQueryPaths" | "getOperationPages" | "getReaderTodoPages" | "markdownReaderGetStaticPaths" | "markdownReaderGetStaticPropsFromPages" | "markdownReaderGetStaticProps" | "putReadmeOnTop" | "getQueryPath" | "addPeerMessage" | "addPeer" | "augmentDevice" | "deviceGetAppsCalculated" | "getAllAppOperations" | "getAugmentedPersons" | "getFirstEmoji" | "getNestedPathObject" | "getPeerMessages" | "getPeerPeople" | "getPeersFromPeersRecursively" | "getPublicFolderNestedPathObjectFromPeer" | "getPublicFolderNestedPathObject" | "getPublicPeers" | "isPortUsed" | "lateFetchPeerMessageSync" | "ping" | "proactivePushAddPeerMessage" | "removePeer" | "sortDevices" | "updatePeer" | "getPrimaryPersona" | "youtubeToPlayItem" | "getDayNumber" | "remindMe" | "getAllSearchResultsWithContext" | "getExplorableBasePathsWithContext" | "getPostableFrontmatterSchema" | "canExecuteFileFunctionWithContext" | "copyPath" | "deleteFileOrFolder" | "getFileContents" | "getFrontmatterSchema" | "getWriterWebPagesMenu" | "getWriterWebPages" | "movePath" | "newFile" | "newFolder" | "processAssetUpload" | "renameFileOrFolder" | "saveFileContents" | "trashFileOrFolder" | "updateFrontmatter" | "getLight" | "getLocation" | "fetchWithTimeout" | "isOnline" | "calculateBbqAbility" | "calculateCloudyness" | "calculateCodeFromNatureAbility" | "calculateDresscode" | "calculateKiteability" | "calculateRainyness" | "calculateSunnyness" | "calculateWindyness" | "fetchWeatherStormGlass" | "fetchWeatherTommorowIOApi" | "getCustomWeatherData" | "cleanupTsDatabase" | "shouldDeleteTsModel" | "findAllDependencyOperations" | "findDependantsRecursively" | "findDependants" | "findDependenciesRecursively" | "findMonorepoExports" | "findMonorepoImports" | "findMonorepoModules" | "getDependencyObject" | "getDependencyTree" | "getOldDependencyTree" | "getOperationDependencyReasons" | "generateBunFile" | "generateBunMonopackage" | "generateBunTypes" | "generateBunVariables" | "getItemNewPath" | "generateNamedIndex" | "generateSimpleIndex" | "isTestFn" | "mapToImportStatement" | "generateDbSdk" | "generateEnvSdks" | "generateFunctionPathsSdk" | "generateFunctionSdks" | "generateInterfacePathsSdk" | "generateOperationsSdk" | "generateSdkApiWatcher" | "generateSdkApi" | "generateSdkOperations" | "getFunctionSdksContent" | "getSdkDescription" | "getSdkFunctionsPerClassification" | "isNonUiOperationBuild" | "newEnvSdk" | "newFunctionKeysSdkOperation" | "newFunctionSdkOperation" | "tsFunctionIsIndexable" | "tsFunctionIsSdkable" | "updateClassifications" | "getImportedDependencies" | "getPackage" | "isAbsoluteImport" | "calculatePackageJsonDependencies" | "findAndWriteImportsExports" | "getDefaultSymbolType" | "getExportSpecifierNames" | "getExportSymbolTypeRecursive" | "getImportSpecifiersWithNames" | "getImportsExports" | "getPackageNameFromAbsoluteImport" | "getSymbolTypeDeclarations" | "getTypeFromImportSpecifierRecursive" | "isAbsoluteImportBuiltin" | "isImportFromOptionalFile" | "writeResult" | "getMissingDependencies" | "findAndUpsertTsInterfaces" | "findCommentTypes" | "generateSchema" | "getAllComments" | "getDbStorageMethod" | "getFrontmatterDbStorageMethod" | "getFrontmatterFunctionParameters" | "getIndexId" | "getMaxIndentationDepth" | "getMinMaxValidation" | "getNumberOfLines" | "getParamSchema" | "getParametersFromInterfaces" | "getPossibleRefs" | "getSpecialExtensionDbStorageMethod" | "getTsStatements" | "getTypeInfo" | "getValidatedOperationPathParse" | "hasDefinition" | "hasTypescriptFileChanged" | "indexImportsExportsForFilePath" | "indexTypescriptFilePath" | "indexTypescriptFile" | "indexTypescript" | "isPrimitive" | "makeTsComment" | "removeTypescriptIndex" | "schemaToTsInterface" | "tryCreateSchema" | "typeToSchema" | "preIndexLint" | "minifyBuild" | "getAvailableOperationName" | "newOperationWithFiles" | "newOperation" | "newTemplate" | "buildPackage" | "installMissingMonorepoDependencies" | "obfucsate" | "testPackage" | "prettierOperation" | "clearTsDatabase" | "executeCommandQuietUnlessFail" | "exitIfProcessDependenciesChanged" | "generateJsonSchemas" | "getAllDbModels" | "getFileIds" | "getIndexFileIds" | "getSrcIds" | "isOperationBuildNeeded" | "isSdkOperation" | "rebuildAllOperations" | "rebuildOperation" | "shouldSkip" | "yarnBuild" | "renameOperation" | "createSimpleTypescriptFile" | "alterTypescriptFile" | "alterTypescriptInstance" | "buildEverythingInRightOrder" | "detectCircularDependencies" | "getImports" | "getOperationPathsRebuildRequired" | "getTypescriptData" | "isAbsoluteModuleName" | "operationGetDependencies" | "operationGetIndexedDependencies" | "reindexAllOperationsCircularDependencies" | "reindexCircularDependencies" | "setTypescriptData" | "runTestsForOperation" | "runTests" | "getAllTsMorphSourceFiles" | "getHasGeneric" | "getTsMorphProject" | "comparePassword" | "encryptPassword" | "calculateDeviceName" | "executeFunctionWithParameters" | "getAuthorizationInfo" | "isGetEndpoint" | "savePageVisit" | "storeFunctionExecution" | "upsertDevice" | "defaultMessage" | "getMeWithContext" | "getPublicPerson" | "getPublicPersons" | "isPhoneNumber" | "isValidPassword" | "loginConfirmWithContext" | "loginWithEmailOrPhone" | "logoutWithContext" | "signupBare" | "signupConfirmWithContext" | "signupWithEmailOrPhone" | "switchCurrentPersonWithContext" | "updateMeWithContext" | "sayDutch" | "sayLanguage" | "sayNepali" | "saySomething" | "textToMp3" | "askOk" | "getArgumentOrAsk" | "cliVersionUpdates" | "handleVersionUpdates" | "execAsync" | "spawnAsync" | "executeCommand" | "getCommand" | "isCommandPerOs" | "getDbPath" | "rawPolygonToPolygon" | "dev" | "chatGPTAuth" | "detectChatGptPage" | "openAIChat" | "checkAndGetSlackFileUrl" | "elementExists" | "getAllMessages" | "getLatestMessages" | "getSlackChannelMemberList" | "getSlackChannels" | "getSlackMessageFrom" | "getSlackWorkspaces" | "scrapeSlackMessage" | "scrollToTop" | "selectSlackChannel" | "selectSlackWorkspace" | "sendSlackMessage" | "slackLogin" | "storeAllSlackChannel" | "storeSlackChannelMember" | "detectTwitterPage" | "generateTweetsReply" | "getTwitterPostUrl" | "postTweetOnTwitter" | "replyTweet" | "scrapPersonTweets" | "sotreChatGPTTweetReply" | "startReplyTweet" | "startTwitterSraper" | "storeMediaChannelInformation" | "storePersonTweets" | "tweetPropmtTemplate" | "getAbsolutePathMdFileName" | "getAllPostables" | "getPersonDetails" | "getPersonsMenu" | "getSocialMediaChannelsMenu" | "getSocialMediaMenu" | "addSocialMediaCredential" | "canBePosted" | "createAllSocialMediaPost" | "createSocialMediaPost" | "devtoCotentAnalyzer" | "facebookContentAnalyzer" | "getSocialMediaCredentials" | "mediumCotentAnalyzer" | "postSocialMediaPostToDevto" | "postSocialMediaPostToFacebook" | "postSocialMediaPostToMedium" | "postSocialMediaPostToReddit" | "postSocialMediaPostToTwitter" | "redditContentAnalyzer" | "socialMediaPostPlanner" | "startSocialMediaController" | "twitterContentAnalyzer" | "updateSocialMediaPost" | "makeExercises" | "driverLogin" | "driverSignup" | "earthDistance" | "getMyJeep" | "getPublicJeeps" | "updateMyProfile" | "addToken" | "ensureToken" | "findAssetParametersRecursively" | "getConversionInfoFromType" | "getExtensionFromAsset" | "getNameFromRelativePath" | "getNameWithTokenFromRelativePath" | "getReferencedAssetApiUrl" | "getTypeFromUrlOrPath" | "readableSize" | "removeTokenIfPresent" | "getEncoding" | "isBinary" | "isText" | "canAccessSync" | "canAccess" | "canExecuteSync" | "canReadSync" | "canSeeSync" | "canSee" | "canWriteSync" | "canWrite" | "copyAllRelativeFiles" | "findFileNameCaseInsensitive" | "getAllFoldersUntilFolder" | "getFileName" | "getFirstAvailableFilename" | "getFolderSizeObject" | "getFolder" | "getLastFolder" | "getOneFolderUpPath" | "getPathCombinations" | "oneUp" | "parseMd" | "removeAllExcept" | "renameAndCreate" | "updateSingleNestedJsonFile" | "writeJsonToFile" | "writeStringToFile" | "writeToFiles" | "getTsConfig" | "byteCount" | "calculatePathMetaData" | "categorizeFiles" | "getFolderSummary" | "getPathMainComment" | "getSizeSummary" | "sumSizeSummary" | "makeFileType" | "findFolderWhereMatch" | "findOperationBasePathWithClassification" | "findOperationBasePath" | "getAllPackageJsonDependencies" | "getCommonAncestor" | "getOperationClassificationObject" | "getOperationClassification" | "getOperationPathParse" | "getOperationPath" | "getOperationRelativePath" | "getPathParse" | "getPathsWithOperations" | "getProjectRoot" | "getRelativeLinkPath" | "getRelativePath" | "getRootPath" | "getSrcRelativeFileId" | "getSubExtensions" | "hasDependency" | "isBundle" | "isOperation" | "isUiOperation" | "isWorkspaceRoot" | "packageCompilesTs" | "tsconfigCompilesEsm" | "getDependenciesSummary" | "getOperationMetaData" | "recalculateOperationIndexJson" | "getFileTypeFromPath" | "getWriterType" | "hasSubExtension" | "isGeneratedOperationName" | "isGeneratedOperation" | "isIndexableFileId" | "getAssetInputType" | "getParameterContentType" | "isCalculatedParameter" | "isGeneratedParameterName" | "jsonToMdString" | "jsonToSayString" | "getSimpleJsonString" | "flattenMarkdownChunks" | "getKvmdItemsRecursively" | "getParagraphsRecursively" | "kvmdDataMap" | "kvmdDataToString" | "kvmdParseToMarkdownString" | "markdownStringToKvmdParse" | "parseKvmdLine" | "chunkToStringRecursively" | "getChunkParagraphsRecursively" | "getImplicitId" | "getMarkdownIntro" | "getMarkdownParseParagraphs" | "getMarkdownReferencePaths" | "getMarkdownReferencesFromParagraph" | "markdownParseToMarkdownStringFromContent" | "markdownParseToMarkdownString" | "mdContentParseRecursively" | "mdToJsonParse" | "parseFrontmatterMarkdownString" | "parseMarkdownParagraph" | "parseMdToChunks" | "removeHeaderPrefix" | "findCodeblocks" | "findCodespans" | "findEmbeds" | "findLinks" | "flattenMarkdownString" | "flattenMarkedTokenRecursive" | "parsePrimitiveArray" | "parsePrimitiveBoolean" | "parsePrimitiveString" | "parsePrimitive" | "tryParseJson" | "bodyFromQueryString" | "getFirstQueryStrings" | "getQueryPart" | "isValidEntry" | "toQueryString" | "MatchingText" | "PathSearchResults" | "findSentenceMatches" | "searchRecursiveObjectArray" | "frontmatterParseToString" | "frontmatterToObject" | "getFrontmatterValueString" | "markdownModelTypeToMarkdownString" | "objectToFrontmatter" | "parseFrontmatterString" | "quotedOrNot" | "stringifyNewlines" | "getFunctionExersize" | "createInvoiceContactMarkdown" | "createInvoiceMarkdown" | "createKeyValueMarkdown" | "money" | "newInvoice" | "printDate" | "markdownParseToMarkdownModelType" | "parseMarkdownModelTimestamp" | "tryParseDate" | "generateId" | "generatePassword" | "generateRandomString" | "generateTime" | "isEmail" | "createUser" | "getBacktickContents" | "isInPeriod" | "isOutOfStock" | "kvmdToCredential" | "upcomingOutgoingFlights" | "whereShouldIgo" | "crudPageToWebPages" | "functionFormPageToWebPage" | "stripCommentEnd" | "stripCommentStart" | "stripComment" | "stripSlashes" | "stripStar" | "getCompileErrors" | "getTypescriptErrorsFromFiles" | "writeBuildErrors" | "findFirstCommentTypes" | "getDataParameterNames" | "getPossibleReferenceParameterNames" | "getProperties" | "getRefLink" | "getReferencableModels" | "getReferenceParameterInfo" | "getSchemaItems" | "getSchema" | "simplifiedSchemaToTypeDefinitionString" | "simplifySchema" | "getSimpleTypescriptFileString" | "jsonToString" | "parseRawSimpleTypescriptFile" | "isResultOfInterface" | "makeTest" | "getGetApiUrl" | "untypedApiFunction" | "makeArraysGetEndpoint" | "makeGetEndpoint" | "converse" | "executeSdkFunction" | "getCachedExportedFunctions" | "getMenu" | "getSdkFunctionPaths" | "objectStringToJson" | "parseIfJson" | "parsePrimitiveJson" | "stringToJson" | "BreadCrumbs" | "renderBreadCrumbs" | "ClickableIcon" | "errorToast" | "infoToast" | "showStandardResponse" | "successToast" | "warningToast" | "FancyLoader" | "getFileType" | "LabeledButton" | "getFullPath" | "getLastPathsChunk" | "usePath" | "Tabs" | "createCodeblockMarkdown" | "useCustomUrlStore" | "getKeysAtPathFromNestedObject" | "getMenuPagesObject" | "makeNestedObjectFromQueryPathObject" | "mapChildObjectRecursive" | "nestedObjectToChildObject" | "nestedPathObjectToNestedMenuRecursive" | "nestifyQueryPathObjectRecursive" | "queryPathsArrayToNestedPathObject" | "reduceQueryPathsRecursively" | "camelCase" | "capitalCase" | "capitaliseFirstLetter" | "convertCase" | "fileSlugify" | "getDelimiter" | "humanCase" | "kebabCase" | "lowerCaseArray" | "pascalCase" | "slugify" | "snakeCase" | "apply" | "createEnum" | "createMappedObject" | "destructureOptionalObject" | "findLastIndex" | "getObjectFromParamsString" | "getObjectKeysArray" | "getParameterAtLocation" | "getSubsetFromObject" | "groupByKey" | "hasAllLetters" | "insertAt" | "isAllTrue" | "isArrayEqual" | "makeArray" | "mapAsync" | "mapKeys" | "mapMany" | "mapValuesSync" | "mergeNestedObject" | "mergeObjectParameters" | "mergeObjectsArray" | "mergeObjects" | "noEmptyString" | "objectMapAsync" | "objectMapSync" | "objectValuesMap" | "omitUndefinedValues" | "onlyDuplicates" | "onlyUnique2" | "onlyUnique" | "pickRandomArrayItem" | "putIndexAtIndex" | "removeIndexFromArray" | "removeOptionalKeysFromObjectStrings" | "removeOptionalKeysFromObject" | "replaceLastOccurence" | "reverseString" | "sumAllKeys" | "sumObjectParameters" | "sum" | "takeFirst" | "trimSlashes" | "getCallerFileName" | "parseTitle" | "cleanupTimer" | "generateUniqueId" | "getNewPerformance" | "oneByOne" | "isPlural" | "isSingular" | "singularize" | "runChildProcess" | "createLinkedinPost" | "linkedinGroupPost" | "linkedinPost" | "loginLinkedin" | "makeApi" | "scrapeConnections" | "sendMessageLinkedin" | "signUpLinkedin" | "clickOnSpanTag" | "delay" | "facebookLogin" | "foundOrNotXpath" | "foundOrNot" | "getBrowserPageById" | "getBrowserTabs" | "getBrowser" | "getChromeExecutablePath" | "getConnectedBrowsers" | "getIdlePage" | "getNewPage" | "gmailLogin" | "isCaptchaExist" | "logConsoleIfDebug" | "openMultiTabs" | "openNewBrowserOnChildProcess" | "openNewBrowser" | "openPage" | "racePromises" | "retryClickAndWaitSelector" | "retryWaitSelector" | "setBrowserPageIdle" | "setBrowserSession" | "setInnerHtml" | "setInputValue" | "solveReptcha" | "trueClick" | "twitterLogin" | "typeInTheInputField" | "typeOnTheTargetWithXpathSelector" | "waitMilliseconds">(functionName: TFunctionName_1, result: any, tsFunction: TsFunction) => {
        isValid: boolean;
        errors?: {
            fieldStack: string[];
            error: string;
        }[] | undefined;
    };
    filterInterfacesFromOperationNames: (tsInterface: import("code-types").TsInterface, operationNames?: string[] | undefined) => boolean | "" | null;
    getDbModelsFromOperations: (operationNames: string[]) => Promise<import("code-types").TsInterface[]>;
    detectFolderLanguage: (basePath: string) => Promise<void>;
    detectLanguage: (text: string, canContainMultipleLanguages?: boolean | undefined) => "other" | "english";
    docToMd: (absoluteDocFilePath: string, isForce?: boolean | undefined) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
    }>;
    docxToMd: typeof docxToMd;
    docsGetPages: (basePaths: {
        projectRelativeBasePath: string;
        queryPath: string;
    }[]) => Promise<import("webpage-types").FileWebPage[]>;
    getMarkdownReaderPages: (config: {
        projectRoot: string;
        basePaths: string[];
        queryPathCustomPrefix?: ((basePath?: string | undefined) => string | undefined) | undefined;
        mapQueryPath?: ((queryPath: string) => string) | undefined;
    }) => Promise<import("webpage-types").FileWebPage[]>;
    getPublicMarkdownFilePaths: (baseFolderPath: string, includeFoldersWithResults?: boolean | undefined) => Promise<{
        path: string;
        isFolder: boolean;
    }[]>;
    removeExtensionsFromPath: (relativePath: string) => string;
    removeNumberPrefix: (fileOrFolderName: string) => string;
    shouldExposeMarkdownFile: (parameters: import("matter-types").Frontmatter) => boolean;
    stripReadmeFromFolder: (filePath: string) => string;
    mapArrayJson: <T_3, U>(absolutePath: string, mapFunction: (item: T_3) => U) => Promise<boolean | undefined>;
    mapObjectJson: <T_4, U_1>(absolutePath: string, mapFunction: (item: T_4) => U_1, noJsonObject?: T_4 | undefined) => Promise<boolean>;
    exploreOperation: (operationBasePath: string) => Promise<import("markdown-types").TextJson[]>;
    exploreProject: (config?: {
        bundleId?: string | undefined;
    } | undefined) => Promise<import("code-types").FolderExploration[] | undefined>;
    getExplorationType: (absolutePath: string, operationFolders: string[]) => "function" | "folder" | "typescript" | "markdown" | "operation" | "operationFolder" | "interface" | "variable" | undefined;
    getFileWithExtension: (absolutePath: string) => string;
    getFolderExplorationDetails: (config: {
        path: string;
        type: "function" | "folder" | "typescript" | "markdown" | "operation" | "operationFolder" | "interface" | "variable";
        name: string;
        sort?: string | undefined;
        typeIndexType?: keyof import("code-types").IndexModels | null | undefined;
    } & import("read-typescript-file").IndexFilter) => Promise<import("code-types").ExplorationDetails>;
    getFrontmattersMappedObject: (projectRoot: string, markdownPaths?: string[] | undefined) => Promise<{
        [x: string]: import("matter-types").Frontmatter | undefined;
    }>;
    getInstanceNames: (array: any[], relativePathFromProjectRoot: string) => string[];
    getProjectRelativePaths: (config?: {
        type?: "todo" | undefined;
        earliestUpdatedAt?: number | undefined;
        filterDraft?: boolean | undefined;
        filterPrivate?: boolean | undefined;
        filterGenerated?: boolean | undefined;
        sort?: "recent" | undefined;
    } | undefined) => Promise<string[] | undefined>;
    getTodoPages: (config?: import("todo-types").TodoPagesConfig | undefined) => Promise<{
        nested: import("webpage-types").NestedWebPage[];
        flat: (import("webpage-types").FileWebPage | import("webpage-types").WebPage<null>)[];
    }>;
    getTodoPaths: (config?: import("todo-types").TodoPagesConfig | undefined) => Promise<string[]>;
    hasSameProjectPath: (projectRelativePath: string) => <T_5 extends import("model-types").TsIndexModelType>(x: T_5) => boolean;
    compressConvert: (absoluteSourceFilePath: string, config?: {
        isStatusLogged?: boolean | undefined;
        outputFolderPath?: string | undefined;
        name?: string | undefined;
        fps?: number | undefined;
        sizeWidthPx?: number | undefined;
        aspectRatio?: {
            x: number;
            y: number;
        } | undefined;
        quality?: number | undefined;
        targetFormat?: "webp" | "png" | "mp4" | "mp3" | "wav" | undefined;
        is16bitWav?: boolean | undefined;
        keepOriginal?: boolean | undefined;
        isDebug?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    compressImages: (absoluteBasePath: string, sizeWidthPx?: number | undefined, quality?: number | undefined) => Promise<void>;
    compressMp4: (absolutePath: string) => Promise<void>;
    convertToMp3: (sourcePath: string, destinationPath: string, config?: {
        toWav?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    convertToMp4: (sourcePath: string, destinationPath: string) => Promise<string | undefined>;
    getFileCollectionPathsWithContext: (functionContext: import("function-types").FunctionContext, queryPath: string) => Promise<import("function-types").StandardResponse & {
        absoluteFileCollectionPaths?: string[] | undefined;
        projectRelativeFilePath?: string | undefined;
        projectRelativeFolderPath?: string | undefined;
        queryIsFolder?: boolean | undefined;
    }>;
    getFileCollectionStatusWithContext: (functionContext: import("function-types").FunctionContext, projectRelativeFilePath: string) => Promise<import("function-types").StandardResponse & {
        actionStatus?: import("filename-conventions").ActionStatus | null | undefined;
        queue?: import("queue-types").Queue[] | undefined;
        status?: "busy" | "error" | "queue" | "done" | undefined;
    }>;
    getFileCollectionWithContext: {
        (functionContext: import("function-types").FunctionContext, queryPath: string): Promise<{
            isSuccessful: boolean;
            message?: string | undefined;
            files?: import("file-collection-util").FileCollectionFile[] | undefined;
            markdownIndex?: import("markdown-types").MarkdownIndex | undefined;
            actionStatus?: import("filename-conventions").ActionStatus | undefined;
            queryIsFolder?: boolean | undefined;
            projectRelativeFilePath?: string | undefined;
            projectRelativeFolderPath?: string | undefined;
        }>;
        config: {
            isPublic: true;
        };
    };
    getFolderContents: (absoluteFolderPath: string) => Promise<import("ai-types").FolderContent[] | undefined>;
    getFolderFileCollections: (absoluteFolderPath: string, projectRoot: string, user_groupSlugs: string[]) => Promise<import("ai-types").FolderContent[]>;
    getNavigationWithContext: {
        (functionContext: import("function-types").FunctionContext, config: {
            customProjectRelativeBaseFolderPath?: string | undefined;
            queryPath: string;
        }): Promise<{
            isSuccessful: boolean;
            message?: string | undefined;
            navigation?: import("ai-types").FolderContent[] | undefined;
            canRead?: boolean | undefined;
            canWrite?: boolean | undefined;
            projectRelativeFolderPath?: string | undefined;
            projectRelativeFilePath?: string | undefined;
            queryIsFolder?: boolean | undefined;
        }>;
        config: {
            isPublic: true;
        };
    };
    getOpenFilesWithContext: (functionContext: import("function-types").FunctionContext) => Promise<import("asset-type").OpenFile[]>;
    getQueryInfo: (config: {
        customProjectRelativeBaseFolderPath?: string | undefined;
        queryPath: string;
    }) => Promise<import("function-types").StandardResponse & {
        result?: {
            projectRelativeFilePath: string | undefined;
            projectRelativeFolderPath: string;
            queryIsFolder: boolean;
        } | undefined;
    }>;
    removeInactiveOpenFiles: {
        (): Promise<void>;
        config: {
            runEveryPeriod: "hour";
        };
    };
    setOpenFileWithContext: (functionContext: import("function-types").FunctionContext, queryPath: string, action: "pin" | "unpin" | "open" | "close") => Promise<void>;
    getFileCollectionBasename: (absolutePath: string) => string;
    getFileCollectionPaths: (absoluteFilePath: string) => Promise<string[] | undefined>;
    getMarkdownIndexPath: (absoluteFilePath: string, shouldExist?: boolean | undefined) => string | undefined;
    getMarkdownIndex: (projectRelativePath: string) => Promise<import("markdown-types").MarkdownIndex | undefined>;
    getOnlyUniqueFileCollectionsFromDirentsFilter: (absoluteFolderPath: string) => (dirent: import("fs").Dirent, index: number, self: import("fs").Dirent[]) => boolean;
    getPrimaryFileFromFileCollection: (fileCollection: import("file-collection-util").FileCollection) => string | undefined;
    isFileCollection: (absoluteFilePathA: string, absoluteFilePathB: string) => boolean;
    onlyUniqueFileCollectionsFilter: (absoluteFilePath: string, index: number, self: string[]) => boolean;
    readFolderFileCollections: (absoluteBaseFolderPath: string) => Promise<import("file-collection-util").FileCollectionObject>;
    renameFileCollectionWithContext: (functionContext: import("function-types").FunctionContext, projectRelativeFilePath: string, newBaseName: string, config?: {
        isDryrun?: boolean | undefined;
    } | undefined) => void;
    renameFileCollection: (projectRelativeFilePath: string, newBaseName: string, config?: {
        isDryrun?: boolean | undefined;
    } | undefined) => Promise<{
        isSuccessful: boolean;
        message: string;
        results?: import("file-collection-util").RenameResult[] | undefined;
    }>;
    updateMarkdownIndex: (projectRelativeMarkdownFilePath: string, partial: import("js-util").NestedPartial<import("markdown-types").MarkdownIndex>) => Promise<boolean>;
    fileExplorerOpen: (projectRelativePath: string) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    findAllDependencyOperations: ({ imports, operations, operationNames, ignoreOperationNames, ignoreFilter, }: {
        imports: import("code-types").TsImport[];
        operations: import("code-types").Operation[];
        operationNames: string[];
        ignoreOperationNames?: string[] | undefined;
        ignoreFilter?: ((operationName: string) => boolean) | undefined;
    }) => Promise<string[]>;
    findDependantsRecursively: (operationName: string, already?: string[] | undefined) => Promise<string[]>;
    findDependants: (config: {
        operationName: string;
        importName?: string | undefined;
        returnOperationName?: boolean | undefined;
        imports?: import("code-types").TsImport[] | undefined;
        onlyExternal?: boolean | undefined;
    }) => Promise<string[]>;
    findDependenciesRecursively: (imports: import("code-types").TsImport[], operations: import("code-types").Operation[], operationName: string, already: string[], ignore?: string[] | undefined, ignoreFilter?: ((operationName: string) => boolean) | undefined) => Promise<string[]>;
    findMonorepoExports: (allExports: import("code-types").TsExport[], operationName: string) => string[];
    findMonorepoImports: (allImports: import("code-types").TsImport[], operationName: string) => {
        module: string;
        name: string;
    }[];
    findMonorepoModules: (allImports: import("code-types").TsImport[], operationName: string) => Promise<string[]>;
    getDependencyObject: () => Promise<{
        [x: string]: string[];
    }>;
    getDependencyTree: (allImports: import("code-types").TsImport[], allExports: import("code-types").TsExport[], operationName: string, usedImports: string[], alreadySearched?: string[] | undefined) => Promise<import("find-all-dependency-operations").DependencyTreeChildObject>;
    getOldDependencyTree: (operationNames: string[], stack: string[]) => Promise<import("find-all-dependency-operations").DependencyTree | null>;
    getOperationDependencyReasons: () => Promise<{
        cumulativeDependencies: string[];
        operationName: string;
        totalInstancesCount: number;
        totalImportCount: number;
        totalDependencyCount: number;
        importDependencies: string[];
        packageJsonDependencies: string[] | undefined;
        instancesAndTheirImports: {
            name: string;
            fileName: string;
            imports: string[];
        }[];
    }[]>;
    folderGetUpdatedAt: (config: {
        folderPath: string;
    }) => Promise<number>;
    getFsAuthorizationSingleFile: (config: {
        projectRelativeFilePath: string;
        user_groupSlugs: string[];
        isDebug?: boolean | undefined;
    }) => Promise<{
        canRead: boolean;
        canWrite: boolean;
        authorizationProperties?: import("markdown-types").AuthorizationProperties | undefined;
    } | undefined>;
    getFsAuthorizationTestables: () => Promise<{
        groupSlug: string;
        projectRelativePath: string;
        functionContext: import("function-types").FunctionContext | undefined;
    }[]>;
    getFsAuthorizationWithContext: (functionContext: import("function-types").FunctionContext, projectRelativePath: string, isDebug?: boolean | undefined) => Promise<{
        canRead: boolean;
        canWrite: boolean;
    }>;
    addDefaultValues: (bareItem: import("model-types").Creation<import("model-types").AugmentedAnyModelType>, isKvmdStorage?: boolean | undefined) => import("model-types").AugmentedAnyModelType;
    alterAny: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterCsv: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterJsonMultiple: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterJsonSingle: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterKeyValueMarkdown: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterMarkdown: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    augmentItemWithReferencedDataRecursively: (item: import("model-types").AugmentedAnyModelType, includeArray: import("fs-orm").Include[], includeData: import("fs-orm").IncludeDataObject) => import("model-types").AugmentedAnyModelType;
    calculateOperationsObject: (manualProjectRoot: string) => Promise<{
        [x: string]: string;
    }>;
    createDb: <TModels extends import("fs-orm").AnyModelObject>(dbConfig?: import("fs-orm").DbConfig<TModels> | undefined) => import("fs-orm").Db<TModels>;
    findParent: (arrayItem: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>, newCategoryStack: import("model-types").CategoryStack) => boolean;
    getAugmentedData: <T_6>(dbFileLocation: import("model-types").DbFileLocation, dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv") => Promise<T_6[] | null>;
    getDatabaseFiles: (modelName: string, mergedConfig: import("fs-orm").MergedQueryConfig) => Promise<import("model-types").DbFileLocation[]>;
    getDatabaseRootFolder: (operationName: string | null | undefined, manualProjectRoot?: string | undefined) => Promise<string | undefined>;
    getDbFileLocation: (storedItem: import("model-types").Storing<import("model-types").AugmentedAnyModelType>, operationName: string | null, mergedConfig: import("fs-orm").MergedQueryConfig, modelName: string) => Promise<import("model-types").DbFileLocation | undefined>;
    getDbStorageMethodExtension: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv") => string;
    getDefaultLocationPattern: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", modelName: string) => string | undefined;
    getItemModelLocation: <T_7 extends {
        [key: string]: any;
    }>(item: T_7) => import("model-types").ModelLocation;
    getLength: (array: any[]) => number;
    getLocationPattern: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", modelName: string, mergedConfig: import("fs-orm").MergedQueryConfig) => string | undefined;
    getMergedConfigOperationPath: (mergedConfig: import("fs-orm").MergedQueryConfig, manualProjectRoot?: string | undefined) => Promise<string | false | undefined>;
    getParentSlug: (item: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>) => string | undefined;
    getRootFolders: (config: {
        manualProjectRoot?: string | undefined;
        projectRoot: string;
        mergedConfig: import("fs-orm").MergedQueryConfig;
        operationPath: string | false;
    }) => Promise<import("fs-orm").RootDbFolder[]>;
    getWildcardDbFileLocations__OLD: (options: {
        modelName: string;
        parsedPath: import("path").ParsedPath;
        operationName: string | null;
        projectRoot: string;
        rootFolder: import("fs-orm").RootDbFolder;
    }) => Promise<import("model-types").DbFileLocation[]>;
    getWildcardDbFileLocations: (options: {
        modelName: string;
        parsedPath: import("path").ParsedPath;
        operationName: string | null;
        projectRoot: string;
        rootFolder: import("fs-orm").RootDbFolder;
    }) => Promise<import("model-types").DbFileLocation[]>;
    groupByFile: <T_8 extends {
        [key: string]: any;
    }>(creationItems: import("model-types").Creation<T_8>[], mergedConfig: import("fs-orm").MergedQueryConfig, modelName: string) => Promise<import("fs-orm").ItemPerFileObject<T_8>>;
    makeStoringItem: <T_9 extends import("model-types").AugmentedAnyModelType>(item: T_9) => import("model-types").Storing<T_9>;
    mergeConfigs: <TModels_1 extends import("fs-orm").AnyModelObject>(modelName: Extract<keyof TModels_1, string>, dbConfig?: import("fs-orm").DbConfig<TModels_1> | undefined, config?: import("fs-orm").CustomQueryConfig | import("fs-orm").GetQueryConfig<TModels_1[keyof TModels_1]> | undefined) => import("fs-orm").MergedQueryConfig;
    removeKeyValueMarkdown: (storedData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[], slug: string) => import("fs-orm").DbQueryResult & {
        newStoredData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    };
    removeMultiple: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", dbFileLocation: import("model-types").DbFileLocation, removeWhere: (content: import("model-types").AugmentedAnyModelType) => boolean) => Promise<import("fs-orm").DbQueryResult>;
    upsertItems: <TModels_2 extends import("fs-orm").AnyModelObject = any, TModelName extends string = any>(dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", dbFileLocation: import("model-types").DbFileLocation, storingItems: import("model-types").Storing<TModels_2[TModelName]> | import("model-types").Storing<TModels_2[TModelName]>[], onlyInsert?: boolean | undefined) => Promise<import("fs-orm").DbQueryResult>;
    upsertKeyValueMarkdown: (storedData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[], storingItem: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>) => import("fs-orm").DbQueryResult & {
        newStoredData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    };
    upsert: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[], storingItems: import("model-types").Storing<import("model-types").AugmentedAnyModelType> | import("model-types").Storing<import("model-types").AugmentedAnyModelType>[], onlyInsert?: boolean | undefined) => import("fs-orm").DbQueryResult & {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    };
    waitForLockfile: (lockfilePath: string) => Promise<boolean>;
    getExtension: (fileNameOrPath: string) => string;
    getFileOrFolderName: <T_10 extends string | undefined>(fileOrFolderPath: T_10) => T_10;
    getFolderJs: <T_11 extends string | undefined>(filePath: T_11) => T_11;
    getSubExtension: (filename: string) => string | undefined;
    isPathRelative: (path: string) => boolean;
    makeRelative: (absolutePath: string, baseFolderPath: string) => string;
    removeTrailingSlash: (p: string) => string;
    withoutExtension: (fileName: string) => string;
    withoutSubExtensions: (fileName: string, config?: {
        allowAllSubextensions?: boolean | undefined;
    } | undefined) => string;
    getFileFunctions: () => Promise<void>;
    getFunctionExecutions: (functionName: string | undefined) => Promise<FunctionExecution[]>;
    getFunctionQueryPaths: (tsFunctions?: import("function-types").TsFunction[] | undefined) => Promise<{
        nested: import("webpage-types").NestedWebPage[];
        flat: import("webpage-types").WebPage<null>[];
    }>;
    getPublicBundleConfig: {
        (): Promise<import("function-types").PublicBundleConfig | undefined>;
        config: {
            isPublic: true;
        };
    };
    getSrcRelativeFolderPath: (operationRelativeSourcePath: string) => string | undefined;
    getTsFunction: (functionName?: string | undefined) => Promise<import("function-types").FunctionData | undefined>;
    isPathParameter: (parameterName: string) => boolean;
    calculateDeviceName: (ipInfo: import("peer-types").IPInfo, userAgent: import("peer-types").IResult) => string;
    executeFunctionWithParameters: <TFunctionName_2 extends "canExecute" | "canRead" | "time" | "unzip" | "zip" | "ask" | "log" | "nodemon" | "pluralize" | "trim" | "fetchUrl" | "addEmojiToEveryWord" | "addStatement" | "addWord" | "biggestFunctionName" | "checkQueue" | "cleanup" | "controlChatGptWrapper" | "deletePromptResult" | "developersQuote" | "diaryToInstagram" | "documentationWriting" | "emojiAugmentation" | "explainInDutch" | "explainInNepali" | "explainInPortuguese" | "explainLineByLine" | "explain" | "fixGrammarAndSpellingMistakes" | "followUpQuestions" | "getContextualPromptCategories" | "getContextualPromptResultJsonFilePath" | "getContextualPrompt" | "getObjectForkKeyRecursively" | "getToolFunctions" | "haiku" | "hookOneliners" | "improveCode" | "investorPitch" | "marcusAurelius" | "opposite" | "outlineToInvestorPitch" | "poem" | "processChatGptPrompt" | "processPromptOnFile" | "processPromptOnFolderWithContext" | "quiz" | "removeAllFake" | "rickAndMortyRick" | "rickAndMorty" | "setIsFavoritePromptResult" | "shouldAddToQueue" | "socratesAndSnoopDogg" | "storytelling" | "summarizeMeetingWithContext" | "toolFunctionWithContext" | "translateEverythingIntoHindi" | "translateEverythingPortuguese" | "translateEverything" | "translateToPortuguese" | "typescriptExplain" | "williamShakespear" | "writeContextualPromptSdk" | "writeCreatePromptCode" | "ye" | "yodafy" | "imageToText" | "languageTranslation" | "musicTrackSeparation" | "speakerSeparation" | "speechToText" | "textToImage" | "textToSpeech" | "textToText" | "bananaCarrot" | "bananaStableDiffusion" | "bananaWhisper" | "augmentMarkdown" | "findClosestAbsolutePath" | "getContextualPromptResults" | "getContextualPromptsArray" | "getContextualPrompts" | "getFirstFile" | "getFolderRelativeScopeDbFilePath" | "makeMarkdownLink" | "gtpIndex" | "huggingfaceSpeakerDiarization" | "request" | "calculateTokenCount" | "gpt3" | "compressAsset" | "deleteReferencedAsset" | "downloadRemoteAsset" | "findAbsoluteAssetPathFromReference" | "findAllProjectMedia" | "getAssetDirectlyGetApi" | "getReferencedAssetGetApi" | "getStorageLocationInfo" | "getTemporaryAssetsFolderPath" | "processAsset" | "processItemAssets" | "removeOldTemporaryAssets" | "serverDownloadReply" | "uploadAssetWithContext" | "getFileCollectionPaths" | "renameFileCollection" | "folderGetUpdatedAt" | "getExtension" | "getFileOrFolderName" | "getFolderJs" | "getSubExtension" | "isPathRelative" | "makeRelative" | "removeTrailingSlash" | "withoutExtension" | "withoutSubExtensions" | "getAssociatedMd" | "getAvailableFolderPath" | "getOperationBins" | "getOperationPackageName" | "getPackageJson" | "getPackageSourcePaths" | "isEqualArray" | "renameTemplateFiles" | "renameTemplateToNormalFile" | "renameToTemplateFile" | "setJsonKey" | "setKeyAtLocation" | "initiateWatch" | "makeSubscription" | "pickWatcher" | "watchFoldersChokidar" | "watchFoldersFs" | "watchFolders" | "writeToAssets" | "allOperationsRemoveJsSrc" | "allOperationsToMarkdown" | "clearAllTsDatabases" | "codeAll" | "forAllFiles" | "forAllFolders" | "getAllOperationClassifications" | "gitShipAllRepos" | "mdAllOperations" | "minifyAllOperations" | "publishAllOperations" | "removeAllFiles" | "removeAllFolders" | "removeAll" | "renameAll" | "runScriptEverywhere" | "setScriptEverywhere" | "exploreOperation" | "exploreProject" | "getExplorationType" | "getFileWithExtension" | "getFolderExplorationDetails" | "getFrontmattersMappedObject" | "getInstanceNames" | "getProjectRelativePaths" | "getTodoPages" | "getTodoPaths" | "hasSameProjectPath" | "getAllOperationSourcePaths" | "determineFileType" | "exploreGitRepoFolders" | "exploreMultiple" | "exploreOperationFolders" | "explorePreset" | "explore" | "findAllDocsFolderPaths" | "findAllDotGitFolders" | "findAllFoldersWithName" | "findAllPackages" | "findAllTodoFolderPaths" | "findFilesRecursively" | "getFolderTypescriptFiles" | "pathArrayIsOperation" | "deleteApp" | "listApps" | "logApp" | "logTableObject" | "pm2ConnectDisconnect" | "pm2Connect" | "restartApp" | "startApp" | "stopAllAppsExcept" | "stopApps" | "watchAll" | "exitIfOperationsChange" | "gitCommitAllCron" | "watchOperations" | "brigtnessFull" | "brigtnessZero" | "decreaseBrightness" | "increaseBrightness" | "macosSetup" | "fileExplorerOpen" | "importAppleNotes" | "importGhostBlogs" | "importGoogleKeep" | "isSystemBusy" | "getFolderNames" | "playMusic" | "generateRecurringReminders" | "remindMeAboutNextMinute" | "setRandomTimezone" | "disableDarkMode" | "enableDarkMode" | "setDarkmodeCommand" | "toggleDarkMode" | "disableScreenSleep2" | "disableScreenSleep" | "enableScreenSleep" | "downVolume" | "getVolume" | "setVolume" | "upVolume" | "getOpenableFilePath" | "vscodeOpen" | "watchMp3WithoutWav" | "watchMp4WithoutWav" | "watchWavToSpeakers" | "watchWavToSpeech" | "watchWavWithoutMp3" | "exploreBadNamingFiles" | "isBadName" | "renameAllBadlyNamedFiles" | "renameBadlyNamedFile" | "watchBadNaming" | "exploreAndRename" | "findJsonInMarkdown" | "getBetterFilename" | "getBetterLocation" | "makeMarkdownIndex" | "trimCodeblock" | "watchMarkdown" | "getRecordingType" | "transcriptionToGptChunks" | "watchMp3Transcriptions" | "getYoutubeVideoUrls" | "watchAppleMemos" | "createTranscriptionJson" | "isWav16bit" | "readTranscriptionCsv" | "whisperLocalCpp" | "whisper" | "loginToDevto" | "publishBlogOnDevTo" | "typeIntoTheField" | "facebookPostOnTheGroup" | "facebookPost" | "facebookTimeLinePost" | "getLatestFacebookPostUrl" | "sendFacebookMessage" | "searchAndDownloadGifs" | "buildQuery" | "errArrayLenZero" | "errFileSize" | "errFileType" | "errInvalidType" | "errTextLenZero" | "errTextOverflow" | "generateArrayFromJson" | "getStringForTranslation" | "launch" | "startTranslation" | "storeResult" | "translateText" | "sendMail" | "publishBlogOnMedium" | "publishBlogOnReddit" | "sendDailyAlarmSms" | "sendSms" | "youtubeSearchAndDownload" | "youtubeSearch" | "youtubeToMp4" | "getPort" | "isLocked" | "lock" | "unlock" | "getBundleSummary" | "getDbModelsForBundle" | "createBackup" | "getHumanReadableDate" | "createDistribution" | "filterInterfacesFromOperationNames" | "getDbModelsFromOperations" | "applyDataset" | "calculateBundleDependencies" | "calculateToPath" | "copyCodestories" | "copyDocsAndReadme" | "copyFromRepoToNiche" | "copyOperation" | "copyReadmesBeforeFolderToBundle" | "copyTodosIntoBundle" | "findAndCopyOperations" | "findInherited" | "generateAllBundles" | "generateBundle" | "generateBundles" | "getBundlePaths" | "getCompareFn" | "getDataset" | "getIndirectDependencies" | "getMatchingFilters" | "mergeBundleConfigs" | "syncInformation" | "syncNicheFolder" | "yarnInstall" | "installNodeModules" | "yarnInstallNewDistribution" | "detectLanguage" | "generateSimpleSentence" | "makeAudioCourse" | "sleep" | "createFolder" | "getAllMarkdownFiles" | "getFileInfo" | "getTranslatedWord" | "markdownStoreAndRecord" | "parseMarkdownWordByWord" | "recordMdFile" | "startMarkdownTranslator" | "translatedArrayToKeyValue" | "watchMdFile" | "createWordSimplificationMap" | "findBetterWords" | "getSynonymFrequencyDataset" | "preprocessSynonyms" | "preprocessWordFrequencies" | "createPaymentRequestWithContext" | "createPaymentTransactionWithContext" | "defaultResponse" | "fail" | "getPaymentWebPages" | "succeed" | "mapArrayJson" | "mapObjectJson" | "csvItemArrayToCsvString" | "tryParseCsv" | "compressConvert" | "compressImages" | "compressMp4" | "convertToMp3" | "convertToMp4" | "copyCopyPairs" | "copyReaderStaticAssets" | "findReaderStaticAssets" | "findStaticAssets" | "docToMd" | "docxToMd" | "addCodestoryToSection" | "addModelName" | "findCodestories" | "makeCodespanMappedObject" | "makeCodestory" | "mapChunkRecursively" | "mapMarkdownParseSections" | "writeAllCodestories" | "writeCodespanDetails" | "addDependantCount" | "bundleFolderWithMarkdown" | "bundleToBookMarkdown" | "bundleToMarkdown" | "createMinimizedSectionMarkdown" | "createMinimizedSection" | "deployToVercel" | "emailMarkdownParse" | "flattenNestedObject" | "generateStaticSite" | "getJsonSchemaSummary" | "getMarkdownContents" | "getMergedMarkdownOutlineUrl" | "getOperationSummary" | "getOutline" | "getPublicMarkdownNestedPathObject" | "getTitlesRecursively" | "getTypeDescriptorRecursive" | "isConventionFileStatement" | "isUpperCase" | "makeOutlineMarkdownString" | "makePropertiesTable" | "markdownChunkToMarkdownStringRecursive" | "markdownChunksToMarkdownStringRecursive" | "markdownToSayable" | "mdToPdf" | "mergeMarkdownParse" | "noNewlines" | "operationRadio" | "operationToMarkdown" | "printNestedTitles" | "print" | "projectToMarkdown" | "propertyToTableRow" | "sayablesToMp3" | "selectRandomOperation" | "simplifiedSchemaToMarkdownString" | "statementItemToMarkdown" | "tsFunctionToMarkdownString" | "tsInterfaceToMarkdownString" | "tsVariableToMarkdownString" | "upMarkdownChunkLevelRecursively" | "convertPdfToMd" | "tryParsePdf" | "findAudioWithViewsArray" | "markdownParseToShortMarkdown" | "shortMarkdownToMarkdownParse" | "augmentShortMarkdown" | "fetchVoices" | "generateAugmentedShortMarkdown" | "getOrGenerateShortMarkdown" | "parseDialogue" | "uberduckGetPath" | "uberduckSpeak" | "voiceCloneDialogue" | "convertCsvToJson" | "convertXlsToJson" | "readCsvFileSync" | "readCsvFile" | "readRawCsvFile" | "readJsonFileSync" | "readJsonFile" | "readProjectRelativeJsonFile" | "readKvmdFile" | "readMarkdownFileToModel" | "readMarkdownFile" | "getFolderTypescriptIndex" | "readTypescriptFile" | "generateCsvInstance" | "generateJsonSingleInstance" | "generateKvmdInstance" | "generateMarkdownInstance" | "generateSlugTestModel" | "getMergedQueryConfig" | "randomName" | "runModelEndToEndTest" | "testOperationModels" | "cacheLookup" | "calculateOperatingSystemBundle" | "deleteDbModelWithContext" | "getDatabaseMenu" | "getDbModelMetadataWithContext" | "getDbModelNames" | "getDbModelWithContext" | "getFunctionIndex" | "getNestedDatabaseMenu" | "getReferencableModelDataWithContext" | "getTsInterface" | "hasDataPermissions" | "hasDbRecipes" | "makeSrcRelativeFolder" | "tsInterfaceToDbMenu" | "upsertDbModelWithContext" | "validateInput" | "validateResult" | "addDefaultValues" | "alterAny" | "alterCsv" | "alterJsonMultiple" | "alterJsonSingle" | "alterKeyValueMarkdown" | "alterMarkdown" | "augmentItemWithReferencedDataRecursively" | "calculateOperationsObject" | "createDb" | "findParent" | "getAugmentedData" | "getDatabaseFiles" | "getDatabaseRootFolder" | "getDbFileLocation" | "getDbStorageMethodExtension" | "getDefaultLocationPattern" | "getItemModelLocation" | "getLength" | "getLocationPattern" | "getMergedConfigOperationPath" | "getParentSlug" | "getRootFolders" | "getWildcardDbFileLocations__OLD" | "getWildcardDbFileLocations" | "groupByFile" | "makeStoringItem" | "mergeConfigs" | "removeKeyValueMarkdown" | "removeMultiple" | "upsertItems" | "upsertKeyValueMarkdown" | "upsert" | "waitForLockfile" | "validateModel" | "validate" | "getFunctionExecutions" | "getFunctionQueryPaths" | "getPublicBundleConfig" | "getSrcRelativeFolderPath" | "getTsFunction" | "getAllOperations" | "getAllPackagesNames" | "getGithubPersonalAccessToken" | "getGithubRepoLastCommitInfo" | "getRepoNameFromRepositoryUrl" | "initializeGitOrUseExistingAndPull" | "operationGithubPull" | "operationGithubPush" | "pullMultipleOperations" | "pushMultipleOperations" | "readAndWriteToPackageJsonExample" | "updateAllOperationStatus" | "getAugmentedWordObject" | "getAugmentedWords" | "getBundleAugmentedWords" | "codestoriesGetPages" | "codestoriesGetStaticPaths" | "codestoriesGetStaticProps" | "docsGetPages" | "getMarkdownReaderPages" | "getPublicMarkdownFilePaths" | "removeExtensionsFromPath" | "removeNumberPrefix" | "shouldExposeMarkdownFile" | "stripReadmeFromFolder" | "copyStaticAssets" | "docsGetStaticPaths" | "docsGetStaticProps" | "getAllMarkdownReaderPages" | "getChildren" | "getFolderExplorationInfo" | "getMarkdownModelPages" | "getMarkdownPageInfo" | "getMarkdownReaderQueryPaths" | "getOperationPages" | "getReaderTodoPages" | "markdownReaderGetStaticPaths" | "markdownReaderGetStaticPropsFromPages" | "markdownReaderGetStaticProps" | "putReadmeOnTop" | "getQueryPath" | "addPeerMessage" | "addPeer" | "augmentDevice" | "deviceGetAppsCalculated" | "getAllAppOperations" | "getAugmentedPersons" | "getFirstEmoji" | "getNestedPathObject" | "getPeerMessages" | "getPeerPeople" | "getPeersFromPeersRecursively" | "getPublicFolderNestedPathObjectFromPeer" | "getPublicFolderNestedPathObject" | "getPublicPeers" | "isPortUsed" | "lateFetchPeerMessageSync" | "ping" | "proactivePushAddPeerMessage" | "removePeer" | "sortDevices" | "updatePeer" | "getPrimaryPersona" | "youtubeToPlayItem" | "getDayNumber" | "remindMe" | "getAllSearchResultsWithContext" | "getExplorableBasePathsWithContext" | "getPostableFrontmatterSchema" | "getFrontmatterSchema" | "getWriterWebPagesMenu" | "getWriterWebPages" | "getLight" | "getLocation" | "fetchWithTimeout" | "isOnline" | "calculateBbqAbility" | "calculateCloudyness" | "calculateCodeFromNatureAbility" | "calculateDresscode" | "calculateKiteability" | "calculateRainyness" | "calculateSunnyness" | "calculateWindyness" | "fetchWeatherStormGlass" | "fetchWeatherTommorowIOApi" | "getCustomWeatherData" | "cleanupTsDatabase" | "shouldDeleteTsModel" | "findAllDependencyOperations" | "findDependantsRecursively" | "findDependants" | "findDependenciesRecursively" | "findMonorepoExports" | "findMonorepoImports" | "findMonorepoModules" | "getDependencyObject" | "getDependencyTree" | "getOldDependencyTree" | "getOperationDependencyReasons" | "generateBunFile" | "generateBunMonopackage" | "generateBunTypes" | "generateBunVariables" | "getItemNewPath" | "generateNamedIndex" | "generateSimpleIndex" | "isTestFn" | "mapToImportStatement" | "generateDbSdk" | "generateEnvSdks" | "generateFunctionPathsSdk" | "generateFunctionSdks" | "generateInterfacePathsSdk" | "generateOperationsSdk" | "generateSdkApiWatcher" | "generateSdkApi" | "generateSdkOperations" | "getFunctionSdksContent" | "getSdkDescription" | "getSdkFunctionsPerClassification" | "isNonUiOperationBuild" | "newEnvSdk" | "newFunctionKeysSdkOperation" | "newFunctionSdkOperation" | "tsFunctionIsIndexable" | "tsFunctionIsSdkable" | "updateClassifications" | "getImportedDependencies" | "getPackage" | "isAbsoluteImport" | "calculatePackageJsonDependencies" | "findAndWriteImportsExports" | "getDefaultSymbolType" | "getExportSpecifierNames" | "getExportSymbolTypeRecursive" | "getImportSpecifiersWithNames" | "getImportsExports" | "getPackageNameFromAbsoluteImport" | "getSymbolTypeDeclarations" | "getTypeFromImportSpecifierRecursive" | "isAbsoluteImportBuiltin" | "isImportFromOptionalFile" | "writeResult" | "getMissingDependencies" | "findAndUpsertTsInterfaces" | "findCommentTypes" | "generateSchema" | "getAllComments" | "getDbStorageMethod" | "getFrontmatterDbStorageMethod" | "getFrontmatterFunctionParameters" | "getIndexId" | "getMaxIndentationDepth" | "getMinMaxValidation" | "getNumberOfLines" | "getParamSchema" | "getParametersFromInterfaces" | "getPossibleRefs" | "getSpecialExtensionDbStorageMethod" | "getTsStatements" | "getTypeInfo" | "getValidatedOperationPathParse" | "hasDefinition" | "hasTypescriptFileChanged" | "indexImportsExportsForFilePath" | "indexTypescriptFilePath" | "indexTypescriptFile" | "indexTypescript" | "isPrimitive" | "makeTsComment" | "removeTypescriptIndex" | "schemaToTsInterface" | "tryCreateSchema" | "typeToSchema" | "preIndexLint" | "minifyBuild" | "getAvailableOperationName" | "newOperationWithFiles" | "newOperation" | "newTemplate" | "buildPackage" | "installMissingMonorepoDependencies" | "obfucsate" | "testPackage" | "prettierOperation" | "clearTsDatabase" | "executeCommandQuietUnlessFail" | "exitIfProcessDependenciesChanged" | "generateJsonSchemas" | "getAllDbModels" | "getFileIds" | "getIndexFileIds" | "getSrcIds" | "isOperationBuildNeeded" | "isSdkOperation" | "rebuildAllOperations" | "rebuildOperation" | "shouldSkip" | "yarnBuild" | "renameOperation" | "createSimpleTypescriptFile" | "alterTypescriptFile" | "alterTypescriptInstance" | "buildEverythingInRightOrder" | "detectCircularDependencies" | "getOperationPathsRebuildRequired" | "getTypescriptData" | "operationGetDependencies" | "operationGetIndexedDependencies" | "reindexAllOperationsCircularDependencies" | "reindexCircularDependencies" | "setTypescriptData" | "runTestsForOperation" | "runTests" | "getAllTsMorphSourceFiles" | "getHasGeneric" | "getTsMorphProject" | "comparePassword" | "encryptPassword" | "calculateDeviceName" | "executeFunctionWithParameters" | "getAuthorizationInfo" | "isGetEndpoint" | "savePageVisit" | "storeFunctionExecution" | "upsertDevice" | "defaultMessage" | "getMeWithContext" | "getPublicPerson" | "getPublicPersons" | "isPhoneNumber" | "isValidPassword" | "loginConfirmWithContext" | "loginWithEmailOrPhone" | "logoutWithContext" | "signupBare" | "signupConfirmWithContext" | "signupWithEmailOrPhone" | "switchCurrentPersonWithContext" | "updateMeWithContext" | "sayDutch" | "sayLanguage" | "sayNepali" | "saySomething" | "textToMp3" | "askOk" | "getArgumentOrAsk" | "cliVersionUpdates" | "handleVersionUpdates" | "execAsync" | "spawnAsync" | "executeCommand" | "getCommand" | "isCommandPerOs" | "getDbPath" | "rawPolygonToPolygon" | "dev" | "chatGPTAuth" | "detectChatGptPage" | "openAIChat" | "checkAndGetSlackFileUrl" | "elementExists" | "getAllMessages" | "getLatestMessages" | "getSlackChannelMemberList" | "getSlackChannels" | "getSlackMessageFrom" | "getSlackWorkspaces" | "scrapeSlackMessage" | "scrollToTop" | "selectSlackChannel" | "selectSlackWorkspace" | "sendSlackMessage" | "slackLogin" | "storeAllSlackChannel" | "storeSlackChannelMember" | "detectTwitterPage" | "generateTweetsReply" | "getTwitterPostUrl" | "postTweetOnTwitter" | "replyTweet" | "scrapPersonTweets" | "sotreChatGPTTweetReply" | "startReplyTweet" | "startTwitterSraper" | "storeMediaChannelInformation" | "storePersonTweets" | "tweetPropmtTemplate" | "getAbsolutePathMdFileName" | "getAllPostables" | "getPersonDetails" | "getPersonsMenu" | "getSocialMediaChannelsMenu" | "getSocialMediaMenu" | "addSocialMediaCredential" | "canBePosted" | "createAllSocialMediaPost" | "createSocialMediaPost" | "devtoCotentAnalyzer" | "facebookContentAnalyzer" | "getSocialMediaCredentials" | "mediumCotentAnalyzer" | "postSocialMediaPostToDevto" | "postSocialMediaPostToFacebook" | "postSocialMediaPostToMedium" | "postSocialMediaPostToReddit" | "postSocialMediaPostToTwitter" | "redditContentAnalyzer" | "socialMediaPostPlanner" | "startSocialMediaController" | "twitterContentAnalyzer" | "updateSocialMediaPost" | "addToken" | "ensureToken" | "findAssetParametersRecursively" | "getConversionInfoFromType" | "getExtensionFromAsset" | "getNameFromRelativePath" | "getNameWithTokenFromRelativePath" | "getReferencedAssetApiUrl" | "getTypeFromUrlOrPath" | "readableSize" | "removeTokenIfPresent" | "getEncoding" | "isBinary" | "isText" | "canAccessSync" | "canAccess" | "canExecuteSync" | "canReadSync" | "canSeeSync" | "canSee" | "canWriteSync" | "canWrite" | "copyAllRelativeFiles" | "findFileNameCaseInsensitive" | "getAllFoldersUntilFolder" | "getFileName" | "getFirstAvailableFilename" | "getFolderSizeObject" | "getFolder" | "getLastFolder" | "getOneFolderUpPath" | "getPathCombinations" | "oneUp" | "parseMd" | "removeAllExcept" | "renameAndCreate" | "writeJsonToFile" | "writeStringToFile" | "writeToFiles" | "getTsConfig" | "byteCount" | "calculatePathMetaData" | "categorizeFiles" | "getFolderSummary" | "getPathMainComment" | "getSizeSummary" | "sumSizeSummary" | "makeFileType" | "findFolderWhereMatch" | "findOperationBasePathWithClassification" | "findOperationBasePath" | "getAllPackageJsonDependencies" | "getCommonAncestor" | "getOperationClassificationObject" | "getOperationClassification" | "getOperationPathParse" | "getOperationPath" | "getOperationRelativePath" | "getPathParse" | "getPathsWithOperations" | "getProjectRoot" | "getRelativeLinkPath" | "getRelativePath" | "getRootPath" | "getSrcRelativeFileId" | "getSubExtensions" | "hasDependency" | "isBundle" | "isOperation" | "isUiOperation" | "isWorkspaceRoot" | "packageCompilesTs" | "tsconfigCompilesEsm" | "getDependenciesSummary" | "getOperationMetaData" | "recalculateOperationIndexJson" | "getFileTypeFromPath" | "getWriterType" | "hasSubExtension" | "isGeneratedOperationName" | "isGeneratedOperation" | "isIndexableFileId" | "getAssetInputType" | "getParameterContentType" | "isCalculatedParameter" | "isGeneratedParameterName" | "jsonToMdString" | "jsonToSayString" | "getSimpleJsonString" | "flattenMarkdownChunks" | "getKvmdItemsRecursively" | "getParagraphsRecursively" | "kvmdDataMap" | "kvmdDataToString" | "kvmdParseToMarkdownString" | "markdownStringToKvmdParse" | "parseKvmdLine" | "chunkToStringRecursively" | "getChunkParagraphsRecursively" | "getImplicitId" | "getMarkdownIntro" | "getMarkdownParseParagraphs" | "getMarkdownReferencePaths" | "getMarkdownReferencesFromParagraph" | "markdownParseToMarkdownStringFromContent" | "markdownParseToMarkdownString" | "mdContentParseRecursively" | "mdToJsonParse" | "parseFrontmatterMarkdownString" | "parseMarkdownParagraph" | "parseMdToChunks" | "removeHeaderPrefix" | "findCodeblocks" | "findCodespans" | "findEmbeds" | "findLinks" | "flattenMarkdownString" | "flattenMarkedTokenRecursive" | "parsePrimitiveArray" | "parsePrimitiveBoolean" | "parsePrimitiveString" | "parsePrimitive" | "tryParseJson" | "bodyFromQueryString" | "getFirstQueryStrings" | "getQueryPart" | "isValidEntry" | "toQueryString" | "MatchingText" | "PathSearchResults" | "findSentenceMatches" | "searchRecursiveObjectArray" | "frontmatterParseToString" | "frontmatterToObject" | "getFrontmatterValueString" | "markdownModelTypeToMarkdownString" | "objectToFrontmatter" | "parseFrontmatterString" | "quotedOrNot" | "stringifyNewlines" | "getFunctionExersize" | "createInvoiceContactMarkdown" | "createInvoiceMarkdown" | "createKeyValueMarkdown" | "money" | "newInvoice" | "printDate" | "markdownParseToMarkdownModelType" | "parseMarkdownModelTimestamp" | "tryParseDate" | "generateId" | "generatePassword" | "generateRandomString" | "generateTime" | "isEmail" | "createUser" | "getBacktickContents" | "isInPeriod" | "isOutOfStock" | "kvmdToCredential" | "upcomingOutgoingFlights" | "whereShouldIgo" | "crudPageToWebPages" | "functionFormPageToWebPage" | "stripCommentEnd" | "stripCommentStart" | "stripComment" | "stripSlashes" | "stripStar" | "getCompileErrors" | "getTypescriptErrorsFromFiles" | "writeBuildErrors" | "findFirstCommentTypes" | "getDataParameterNames" | "getPossibleReferenceParameterNames" | "getProperties" | "getRefLink" | "getReferencableModels" | "getReferenceParameterInfo" | "getSchemaItems" | "getSchema" | "simplifiedSchemaToTypeDefinitionString" | "simplifySchema" | "getSimpleTypescriptFileString" | "jsonToString" | "parseRawSimpleTypescriptFile" | "isResultOfInterface" | "makeTest" | "getGetApiUrl" | "untypedApiFunction" | "makeArraysGetEndpoint" | "makeGetEndpoint" | "converse" | "executeSdkFunction" | "getCachedExportedFunctions" | "getMenu" | "getSdkFunctionPaths" | "objectStringToJson" | "parseIfJson" | "parsePrimitiveJson" | "stringToJson" | "BreadCrumbs" | "renderBreadCrumbs" | "ClickableIcon" | "errorToast" | "infoToast" | "showStandardResponse" | "successToast" | "warningToast" | "FancyLoader" | "getFileType" | "LabeledButton" | "getFullPath" | "getLastPathsChunk" | "usePath" | "Tabs" | "createCodeblockMarkdown" | "useCustomUrlStore" | "getKeysAtPathFromNestedObject" | "getMenuPagesObject" | "makeNestedObjectFromQueryPathObject" | "mapChildObjectRecursive" | "nestedObjectToChildObject" | "nestedPathObjectToNestedMenuRecursive" | "nestifyQueryPathObjectRecursive" | "queryPathsArrayToNestedPathObject" | "reduceQueryPathsRecursively" | "camelCase" | "capitalCase" | "capitaliseFirstLetter" | "convertCase" | "fileSlugify" | "getDelimiter" | "humanCase" | "kebabCase" | "lowerCaseArray" | "pascalCase" | "slugify" | "snakeCase" | "apply" | "createEnum" | "createMappedObject" | "destructureOptionalObject" | "findLastIndex" | "getObjectFromParamsString" | "getObjectKeysArray" | "getParameterAtLocation" | "getSubsetFromObject" | "groupByKey" | "hasAllLetters" | "insertAt" | "isAllTrue" | "isArrayEqual" | "makeArray" | "mapAsync" | "mapKeys" | "mapMany" | "mapValuesSync" | "mergeNestedObject" | "mergeObjectParameters" | "mergeObjectsArray" | "mergeObjects" | "noEmptyString" | "objectMapAsync" | "objectMapSync" | "objectValuesMap" | "omitUndefinedValues" | "onlyDuplicates" | "onlyUnique2" | "onlyUnique" | "pickRandomArrayItem" | "putIndexAtIndex" | "removeIndexFromArray" | "removeOptionalKeysFromObjectStrings" | "removeOptionalKeysFromObject" | "replaceLastOccurence" | "reverseString" | "sumAllKeys" | "sumObjectParameters" | "sum" | "takeFirst" | "trimSlashes" | "getCallerFileName" | "parseTitle" | "cleanupTimer" | "generateUniqueId" | "getNewPerformance" | "oneByOne" | "isPlural" | "isSingular" | "singularize" | "runChildProcess" | "createLinkedinPost" | "linkedinGroupPost" | "linkedinPost" | "loginLinkedin" | "makeApi" | "scrapeConnections" | "sendMessageLinkedin" | "signUpLinkedin" | "clickOnSpanTag" | "delay" | "facebookLogin" | "foundOrNotXpath" | "foundOrNot" | "getBrowserPageById" | "getBrowserTabs" | "getBrowser" | "getChromeExecutablePath" | "getConnectedBrowsers" | "getIdlePage" | "getNewPage" | "gmailLogin" | "isCaptchaExist" | "logConsoleIfDebug" | "openMultiTabs" | "openNewBrowserOnChildProcess" | "openNewBrowser" | "openPage" | "racePromises" | "retryClickAndWaitSelector" | "retryWaitSelector" | "setBrowserPageIdle" | "setBrowserSession" | "setInnerHtml" | "setInputValue" | "solveReptcha" | "trueClick" | "twitterLogin" | "typeInTheInputField" | "typeOnTheTargetWithXpathSelector" | "waitMilliseconds" | "getQueueStatus" | "getGroupOrPersonId" | "getAssetDirectlyApiUrl" | "createDownloadWithContext" | "downloadGetApi" | "findDownload" | "makeDownloadableFile" | "generateInstantResponseMessage" | "getChatMessageAnalysis" | "getSystemMessageOtherLanguage" | "getSystemMessage" | "jsonGpt" | "proactiveOutreach" | "processMessage" | "truncateMessages" | "weeklyMail" | "getFileCollectionPathsWithContext" | "getFileCollectionStatusWithContext" | "getFileCollectionWithContext" | "getFolderContents" | "getFolderFileCollections" | "getNavigationWithContext" | "getOpenFilesWithContext" | "getQueryInfo" | "removeInactiveOpenFiles" | "setOpenFileWithContext" | "getFileCollectionBasename" | "getMarkdownIndexPath" | "getMarkdownIndex" | "getOnlyUniqueFileCollectionsFromDirentsFilter" | "getPrimaryFileFromFileCollection" | "isFileCollection" | "onlyUniqueFileCollectionsFilter" | "readFolderFileCollections" | "renameFileCollectionWithContext" | "updateMarkdownIndex" | "getFsAuthorizationSingleFile" | "getFsAuthorizationTestables" | "getFsAuthorizationWithContext" | "fileExistsWithCaseSync" | "readFilePerLine" | "readFrontmatter" | "returnReadmePathFromFolder" | "getCommonAncestorMultiple" | "getFolderPath" | "executeWatcherOnFilepath" | "getQueueItems" | "getBatteryLevelPercentage" | "isSystemUsingBattery" | "clickToSpeak" | "cmdSpaceListener" | "watchAudioVideoDoc" | "getIsPrivate" | "getTranslationText" | "receiveTwilioMessageWithContextRaw" | "sendMessage" | "sendTwilioMessage" | "trySendMessage" | "calculateMessagesTokenCount" | "calculateOpenaiMessagesTokenCountSum" | "calculateOpenaiMessagesTokenCount" | "chatCompletion" | "chat" | "getOpenaiInstance" | "messagesToTokenableText" | "createNewStripePayment" | "receivePaymentUpdateWithContextRaw" | "youtubeToMp4_old" | "youtubeToMp4WithContext" | "exploreRenameFiles" | "exploreRenameFolders" | "fixName" | "isBadFilename" | "printPretty" | "exploreSubExtensions" | "getActionStatusFilePath" | "lockError" | "createClarityBundle" | "containsNumbers" | "getFinalDictionary" | "getMarkdownWordDictionaryForFolder" | "getPathDictionaryObject" | "halfDictionaryArray" | "sortDictionary" | "detectFolderLanguage" | "zipFiles" | "zipFolder" | "tsFunctionNameToMarkdownString" | "getAllGroupsIncludingInheritedRecursive" | "personAttachInheritedGroups" | "getFileFunctions" | "isPathParameter" | "getExplorableDbModels" | "getExplorableFilesWithContext" | "getFunctions" | "copyPathWithContext" | "deleteFileOrFolderWithContext" | "getFileContentsWithContext" | "movePathWithContext" | "newFileWithContext" | "newFolderWithContext" | "openFinder" | "processAssetUploadWithContext" | "renameFileOrFolderWithContext" | "saveFileContentsWithContext" | "trashFileOrFolderWithContext" | "updateFrontmatterWithContext" | "detectSwcDangles" | "findTypescriptFiles" | "fixImportsEverywhere" | "getDependencyLayerLevels" | "getSwcFunctions" | "getSwcImports" | "getSwcInterfaces" | "getSwcVariables" | "getTypescriptFileData" | "getTypescriptFileOperationName" | "organizeImports" | "recursiveImportFetchCode" | "splitTypescriptFile" | "trySwcParseFile" | "watchSrcFiles" | "getTestFunctionContext" | "isRawEndpoint">(functionName: TFunctionName_2, parameters: any[] | undefined, serverContext: import("server/typings/common").Context) => Promise<import("api-types").ApiReturnType<any>>;
    getAuthorizationInfo: (device: import("model-types").Storing<import("peer-types").Device>, fn: {
        (...parameters: any): any;
        [key: string]: any;
    }) => boolean;
    isGetEndpoint: (functionName: string) => boolean;
    isRawEndpoint: (functionName: string) => boolean;
    savePageVisit: (deviceId: string, ipInfo: import("peer-types").IPInfo, referer: string) => Promise<void>;
    storeFunctionExecution: (tsFunction: import("function-types").TsFunction, inputParameters: any[] | undefined, output: any, performance: import("measure-performance").PerformanceItem[], isResultFromCache: boolean, paymentInfo?: {
        cost?: number | undefined;
        personId?: string | undefined;
        groupId?: string | undefined;
    } | undefined) => Promise<void>;
    upsertDevice: (serverContext: import("server/typings/common").Context) => Promise<import("model-types").Storing<import("peer-types").Device> | undefined>;
    generateNamedIndex: ({ operationName, manualProjectRoot, }: {
        manualProjectRoot?: string | undefined;
        operationName: string;
    }) => Promise<void>;
    generateSimpleIndex: (config: {
        operationName: string;
        manualProjectRoot?: string | undefined;
    }) => Promise<string | undefined>;
    isTestFn: (x: import("generate-index").ImportStatement) => boolean;
    mapToImportStatement: (item: import("function-types").TsFunction | import("code-types").TsInterface | import("code-types").TsVariable, type: "function" | "interface" | "variable") => import("generate-index").ImportStatement;
    augmentMarkdown: <T_12 extends string | null | undefined>(markdown: T_12, config?: {
        augmentCode?: boolean | undefined;
        augmentWords?: boolean | undefined;
        augmentStatements?: boolean | undefined;
        augmentContextualPrompts?: boolean | undefined;
        augmentContextualPromptResults?: boolean | undefined;
        markdown_projectRelativeFilePath?: string | undefined;
        externalHost?: string | undefined;
    } | undefined) => Promise<{
        augmentedMarkdown: T_12;
        contextualPromptResults?: import("ai-types").ContextualPromptResult[] | null | undefined;
        contextualPromptsObject?: Omit<import("ai-types").ContextualPromptsObject, "databaseContextualPromptSlugs"> | undefined;
    }>;
    getContextualPromptResults: (config?: {
        prompt_projectRelativePath?: string | undefined;
        promptSlugs?: string[] | undefined;
    } | undefined) => Promise<import("ai-types").ContextualPromptResult[] | null>;
    getContextualPromptsArray: (scopeProjectRelativePath?: string | undefined) => Promise<{
        databaseResult: import("ai-types").ContextualPrompt[];
        scopeResult?: import("ai-types").ContextualPrompt[] | undefined;
    }>;
    getContextualPrompts: (contextType?: import("filename-conventions").FileType | undefined, scopeProjectRelativePath?: string | undefined) => Promise<import("ai-types").ContextualPromptsObject>;
    getFolderRelativeScopeDbFilePath: (filename?: string | undefined) => string;
    makeMarkdownLink: (text: string, url?: string | undefined, alt?: string | undefined) => string;
    getImportedDependencies: ({ operationFolderPath, }: {
        operationFolderPath: string;
    }) => string[] | undefined;
    getPackage: (absoluteModuleString: string) => string;
    isAbsoluteImport: (moduleString: string) => boolean;
    calculatePackageJsonDependencies: (dependencies: import("code-types").PackageInfoObject | undefined, imports: import("model-types").Creation<import("code-types").TsImport>[], operations: import("code-types").Operation[], operationName: string) => {
        newDependencies: import("code-types").PackageInfoObject;
        hasGeneratedDependenciesIndexed: boolean;
    };
    findAndWriteImportsExports: (operationBasePath: string, manualProjectRoot?: string | undefined) => Promise<void>;
    getDefaultSymbolType: (symbol: import("ts-morph").Symbol, debug?: boolean | undefined) => import("get-imports-exports").TypeSpecifier;
    getExportSpecifierNames: (symbol: import("ts-morph").Symbol) => string[];
    getExportSymbolTypeRecursive: (symbol: import("ts-morph").Symbol, sourceFile: import("ts-morph").SourceFile, debug?: boolean | undefined) => import("get-imports-exports").TypeSpecifier | undefined;
    getImportSpecifiersWithNames: (sourceFile: import("ts-morph").SourceFile, names: string[]) => import("ts-morph").ImportSpecifier[];
    getImportsExports: ({ sourceFiles, debug, manualProjectRoot, }: {
        sourceFiles: import("ts-morph").SourceFile[];
        debug?: boolean | undefined;
        manualProjectRoot?: string | undefined;
    }) => Promise<import("get-imports-exports").ImportsAndExports | undefined>;
    getPackageNameFromAbsoluteImport: (absoluteImportName: string) => string | undefined;
    getSymbolTypeDeclarations: (symbol: import("ts-morph").Symbol) => (import("ts-morph").TypeAliasDeclaration | import("ts-morph").InterfaceDeclaration)[];
    getTypeFromImportSpecifierRecursive: (importSpecifier: import("ts-morph").ImportSpecifier, debug?: boolean | undefined, fileStack?: string[] | undefined) => import("get-imports-exports").TypeSpecifier | undefined;
    isAbsoluteImportBuiltin: (absoluteImportName: string) => boolean;
    isImportFromOptionalFile: (tsImport: import("model-types").Creation<import("code-types").TsImport>) => boolean;
    writeResult: (options: {
        operationName: string;
        success: boolean;
        message: string;
        manualProjectRoot?: string | undefined;
    }) => Promise<false | undefined>;
    getOperationBins: (operationFolderPath: string) => Promise<string[]>;
    getOperationPackageName: (operationFolderPath: string) => Promise<string | undefined>;
    getPackageJson: (config: {
        operationFolderPath: string;
    }) => Promise<import("code-types").Operation | null>;
    getPackageSourcePaths: ({ operationBasePath, ignoreIndexFiles, allTypes, }: {
        operationBasePath: string;
        ignoreIndexFiles?: boolean | undefined;
        allTypes?: boolean | undefined;
    }) => Promise<string[]>;
    getAllOperations: () => Promise<import("code-types").Operation[]>;
    getAllPackagesNames: () => Promise<string[]>;
    getGithubPersonalAccessToken: () => Promise<string | undefined>;
    getGithubRepoLastCommitInfo: (repoName: string, personalAccessToken: string) => Promise<{
        isSuccessful: boolean;
        message: string;
        lastCommit?: import("code-types").CommitInfo | undefined;
    }>;
    getRepoNameFromRepositoryUrl: (url: string) => string | undefined;
    initializeGitOrUseExistingAndPull: (dir: string, remoteUrl: string) => Promise<void>;
    operationGithubPull: (operationName: string, personalAccessToken?: string | undefined) => Promise<{
        isSuccessful: boolean;
        message: string;
        operationName?: string | undefined;
    }>;
    operationGithubPush: (operationName: string) => Promise<import("github-operation-sync").PushOperationResult>;
    pullMultipleOperations: (operationNames: string[]) => Promise<{
        isSuccessful: boolean;
        message: string;
        results?: {
            isSuccessful: boolean;
            message: string;
            operationName?: string | undefined;
        }[] | undefined;
    }>;
    pushMultipleOperations: (operationNames: string[]) => Promise<import("github-operation-sync").PushOperationResult[]>;
    readAndWriteToPackageJsonExample: () => Promise<void>;
    updateAllOperationStatus: (dryrun?: boolean | undefined) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
    }>;
    huggingfaceSpeakerDiarization: (config: {
        absoluteAudioFilePath: string;
    }) => Promise<{
        isSuccessful: boolean;
        message: string;
    } | undefined>;
    request: (config: import("huggingface-wrapper").HuggingfaceConfig) => Promise<any>;
    findAndUpsertTsInterfaces: (config: {
        sourceFile?: import("ts-morph").SourceFile | undefined;
        operationName: string;
        filePath: string;
        projectRoot?: string | undefined;
    }) => Promise<import("model-types").Creation<import("code-types").TsInterface>[] | undefined>;
    findCommentTypes: (commentWithoutFrontmatter: string) => ("title" | "description" | "todo" | "discussion" | "idea" | "later" | "nb" | "section")[];
    generateSchema: (filePath: string, morphInterfaceInfo: import("index-typescript").MorphInterfaceInfo[], namedAbsoluteImportNames: string[]) => Promise<import("model-types").Creation<import("code-types").TsInterface>[]>;
    getAllComments: (tsMorphNode: import("ts-morph").VariableDeclaration | import("ts-morph").Statement<import("@ts-morph/common/lib/typescript").Statement> | import("ts-morph").Expression<import("@ts-morph/common/lib/typescript").Expression>, fileContent: string, operationRelativeTypescriptFilePath: string) => import("model-types").Creation<import("comment-types").TsComment>[];
    getDbStorageMethod: (config: {
        typeName: string;
        frontmatter: import("matter-types").Frontmatter;
        extensions?: string[] | undefined;
    }) => "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv" | undefined;
    getFrontmatterDbStorageMethod: (parameters: import("matter-types").Frontmatter | null) => "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv" | null | undefined;
    getFrontmatterFunctionParameters: (frontmatter: import("matter-types").Frontmatter) => {
        runEveryPeriod: "minute" | "midnight" | "quarter-hour" | "hour" | "5-minutes" | "6-hours" | "week" | "month" | "3-months" | "year" | undefined;
        isApiExposed: boolean;
    };
    getIndexId: (filePath: string, name: string) => Promise<import("model-types").TsIndexModelType | undefined>;
    getMaxIndentationDepth: (functionText: string) => number;
    getMinMaxValidation: (keyword: "min" | "max", type: string, value: number) => {};
    getNumberOfLines: (string: string) => number;
    getParamSchema: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>, decorators?: import("ts-morph").Decorator[] | undefined, prop?: import("ts-morph").Symbol | undefined) => import("index-typescript").SimpleJsonSchema | undefined;
    getParametersFromInterfaces: (functionName: string, interfaces: import("model-types").Creation<import("code-types").TsInterface>[]) => import("function-types").FunctionParameter[];
    getPossibleRefs: (interfaces: import("model-types").Creation<import("code-types").TsInterface>[]) => {
        name: string;
        schema: import("json-schema").JSONSchema7;
    }[];
    getSizeSummary: (string: string) => import("types").SizeSummary;
    getSpecialExtensionDbStorageMethod: (extensions?: string[] | undefined) => "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv" | undefined;
    getTsStatements: (sourceFile: import("ts-morph").SourceFile, tsInterfaces: import("model-types").Creation<import("code-types").TsInterface>[], operationRelativeTypescriptFilePath: string, fileContent: string) => Promise<{
        tsFunctions: import("model-types").Creation<import("function-types").TsFunction>[];
        tsVariables: import("model-types").Creation<import("code-types").TsVariable>[];
    }>;
    getTypeInfo: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>, schema?: import("json-schema").JSONSchema7 | undefined) => import("types").TypeInfo;
    getValidatedOperationPathParse: (filePath: string) => import("index-typescript").CompleteOperationPathParse | undefined;
    hasDefinition: typeof hasDefinition;
    hasTypescriptFileChanged: (eventName: import("function-types").WatchEventType, path: string) => boolean;
    indexImportsExportsForFilePath: import("function-types").ProjectWatcher<any>;
    indexTypescriptFilePath: import("function-types").ProjectWatcher<any>;
    indexTypescriptFile: (project: import("ts-morph").Project, file: import("index-typescript").CompleteOperationPathParse, projectRoot: string) => Promise<void>;
    indexTypescript: (props: {
        showLogging?: boolean | undefined;
        filePaths: string[];
        manualProjectRoot: string | null;
    }) => Promise<void>;
    isPrimitive: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>) => boolean;
    makeTsComment: (config: {
        operationRelativeTypescriptFilePath: string;
        commentRange: import("ts-morph").CommentRange;
        statementName: string | undefined;
        rawStatement: string;
        fileContent: string;
    }) => import("model-types").Creation<import("comment-types").TsComment>;
    removeTypescriptIndex: import("function-types").ProjectWatcher<any>;
    schemaToTsInterface: (filePath: string, typeName: string, schema: import("json-schema").JSONSchema7, morphInterfaceInfo: import("index-typescript").MorphInterfaceInfo | undefined) => Promise<import("model-types").Creation<import("code-types").TsInterface> | undefined>;
    tryCreateSchema: (config: import("ts-json-schema-generator").Config) => {
        schema?: import("json-schema").JSONSchema7 | undefined;
        error?: string | undefined;
    };
    typeToSchema: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>) => import("index-typescript").SimpleJsonSchema | undefined;
    fetchWithTimeout: (url: string, timeoutMs: number) => Promise<{
        isSuccessful: boolean;
        isConnected: boolean;
        response?: any;
        message: string;
    }>;
    isOnline: () => Promise<boolean>;
    isSystemBusy: () => Promise<boolean>;
    determineFileType: (filePath: string) => import("filename-conventions").FileType | null;
    exploreGitRepoFolders: (config: import("k-explore").BaseConfig) => Promise<string[]>;
    exploreMultiple: (searchConfigs: import("k-explore").SearchConfig[]) => Promise<import("markdown-types").TextJson[]>;
    exploreOperationFolders: (config: import("k-explore").BaseConfig) => Promise<string[]>;
    explorePreset: (preset: "git" | "markdown" | "todo" | "packages" | "docs" | "src", config?: import("k-explore").BaseConfig) => Promise<import("markdown-types").TextJson[]>;
    explore: ({ basePath, searchLevel, debug, ...other }: import("k-explore").SearchConfig) => Promise<import("markdown-types").TextJson[]>;
    findAllDocsFolderPaths: (ignoreOperations?: boolean | undefined, ignoreFolders?: string[] | undefined) => Promise<string[]>;
    findAllDotGitFolders: (config: import("k-explore").BaseConfig) => Promise<import("markdown-types").TextJson[]>;
    findAllFoldersWithName: (config: {
        basePath: string;
        folderName: string;
        ignoreOperations?: boolean | undefined;
        ignoreFolders?: string[] | undefined;
    }) => Promise<string[]>;
    findAllPackages: (config?: {
        basePath: string | string[] | undefined;
    } | undefined) => Promise<import("markdown-types").TextJson[]>;
    findAllTodoFolderPaths: (basePath: string, ignoreOperations?: boolean | undefined) => Promise<string[]>;
    findFilesRecursively: (config: Omit<import("k-explore").SearchConfig, "basePath"> & {
        basePath: string;
    }) => Promise<import("markdown-types").TextJson[]>;
    getFolderTypescriptFiles: (folderPath: string, includeStats: boolean) => Promise<import("markdown-types").TextJson[]>;
    pathArrayIsOperation: (pathArray: string[]) => boolean;
    runTestsForOperation: (operationName: string, writeResultsToIndex?: boolean | undefined, manualProjectRoot?: string | undefined) => Promise<boolean | undefined>;
    runTests: (test: import("k-test").Test, operationName?: string | undefined) => Promise<boolean>;
    preIndexLint: ({ operationFolderPath, }: {
        operationFolderPath: string;
    }) => Promise<string[]>;
    getActionStatusFilePath: (absoluteFilePath: string) => string;
    isLocked: (absolutePath: string) => boolean;
    lockError: (aboluteLockableFilePath: string, errorMessage: string, cleanupAt?: number | undefined, functionName?: string | undefined, parameters?: any[] | undefined) => Promise<void>;
    lock: (aboluteLockableFilePath: string, message: string, functionName?: string | undefined, parameters?: any[] | undefined) => Promise<void>;
    unlock: (absoluteLockedFilePath: string) => Promise<void> | undefined;
    addDependantCount: (type: "tsFunction" | "tsVariable" | "tsInterface", imports: import("code-types").TsImport[]) => (item: import("function-types").TsFunction | import("code-types").TsInterface | import("code-types").TsVariable) => Promise<import("markdown-parsings").DependantCountObject>;
    bundleFolderWithMarkdown: (outlineTitle: string, markdownStrings: string[], resultFileName?: string | undefined) => Promise<{
        markdownParse: import("markdown-types").MarkdownParse;
        outlineString: string;
    }>;
    bundleToBookMarkdown: (config: {
        bundleConfig: import("bundle-types").BundleConfig;
        title?: string | undefined;
        coverImagePath?: string | undefined;
        isModulesIncluded?: boolean | undefined;
        manualProjectRoot?: string | undefined;
    }) => Promise<void>;
    bundleToMarkdown: ({ bundleConfigId, includeModules, }: {
        bundleConfigId: string;
        includeModules?: boolean | undefined;
    }) => string;
    createMinimizedSectionMarkdown: (markdown: string, expandTitle: string) => string;
    createMinimizedSection: (markdown: string | undefined, title: string, expandTitle: string) => import("markdown-types").MarkdownParse | undefined;
    deployToVercel: () => void;
    emailMarkdownParse: () => void;
    flattenNestedObject: <T_13>(nestedObject: import("recursive-types").NestedObject<T_13>, isLeaf?: ((content: T_13 | import("recursive-types").NestedObject<T_13> | undefined) => boolean) | undefined) => void;
    generateStaticSite: ({ projectRelativeMdFilePath, singlePage, }: {
        singlePage?: boolean | undefined;
        projectRelativeMdFilePath?: string | undefined;
    }) => void;
    getJsonSchemaSummary: (schema: import("json-schema").JSONSchema7 | undefined, isMarkdown: boolean) => {
        typeDescriptor: string;
        description: string | undefined;
    } | undefined;
    getMarkdownContents: (absoluteFolderPath: string) => Promise<{
        content: string;
        relativePath: string;
    }[] | undefined>;
    getMergedMarkdownOutlineUrl: (title: string) => {
        title: string;
        hashtagPath: string;
    };
    getOperationSummary: (config: {
        operationName: string;
        manualProjectRoot?: string | undefined;
    }) => Promise<import("markdown-parsings").OperationSummary | undefined>;
    getOutline: (markdownParse: import("markdown-types").MarkdownParse) => string | undefined;
    getPublicMarkdownNestedPathObject: (absoluteFolderPath: string) => Promise<import("recursive-types").NestedObject<string>>;
    getTitlesRecursively: (chunk: import("markdown-types").MarkdownChunk) => import("markdown-parsings").NestedTitle[];
    getTypeDescriptorRecursive: (schema: import("json-schema").JSONSchema7, isMarkdown: boolean) => string;
    isConventionFileStatement: (item: import("function-types").TsFunction | import("code-types").TsInterface | import("code-types").TsVariable, conventionFile: "test" | "cli") => boolean;
    isUpperCase: (text: string) => boolean;
    makeOutlineMarkdownString: (title: string, urls: import("markdown-parsings").MergedMarkdownOutlineUrl[]) => string;
    makePropertiesTable: (properties: import("schema-types").SimplifiedSchemaProperty[] | undefined) => string;
    markdownChunkToMarkdownStringRecursive: (markdownChunk: import("markdown-types").MarkdownChunk) => string;
    markdownChunksToMarkdownStringRecursive: (markdownChunks: import("markdown-types").MarkdownChunk[]) => string;
    markdownToSayable: ({ markdown, markdownFilePath, }: {
        markdownFilePath: string;
        markdown: import("markdown-types").MarkdownParse;
    }) => import("markdown-parsings").Sayable[];
    mdToPdf: ({ absoluteFilePath, markdown, markdownParse, pdfAbsoluteFilePath, }: {
        absoluteFilePath?: string | undefined;
        markdown?: string | undefined;
        markdownParse?: import("markdown-types").MarkdownParse | undefined;
        pdfAbsoluteFilePath?: string | undefined;
    }) => void;
    mergeMarkdownParse: (markdownParses: import("markdown-types").MarkdownParse[], fileName?: string | undefined) => {
        merged: import("markdown-types").MarkdownParse;
        outline: import("markdown-parsings").MergedMarkdownOutlineUrl[];
    };
    noNewlines: (markdown: string | undefined) => string | undefined;
    operationRadio: () => void;
    operationToMarkdown: (config: {
        operationSummary: import("markdown-parsings").OperationSummary;
        returnType?: "string" | "parse" | "save" | undefined;
        includeDocs?: boolean | undefined;
        includeInfo?: boolean | undefined;
    }) => Promise<string | import("markdown-types").MarkdownParse | undefined>;
    printNestedTitles: (nestedTitles: import("markdown-parsings").NestedTitle[] | undefined, depth?: number | undefined) => string | undefined;
    print: ({ absoluteFilePath }: {
        absoluteFilePath: string;
    }) => void;
    projectToMarkdown: ({ includeTodo, }: {
        includeTodo?: boolean | undefined;
        includeOperationDetails?: boolean | undefined;
    }) => string;
    propertyToTableRow: (property: import("schema-types").SimplifiedSchemaProperty) => string;
    sayablesToMp3: (config: {
        destinationAbsoluteFilePath: string;
        sayables: import("markdown-parsings").Sayable[];
    }) => void;
    selectRandomOperation: (baseFolderPath?: string | undefined) => Promise<string>;
    simplifiedSchemaToMarkdownString: (simplifiedSchema: import("schema-types").SimplifiedSchema | undefined, name: string | undefined, isRequired: boolean, level?: number | undefined) => string;
    statementItemToMarkdown: (statementItem: import("markdown-parsings").StatementItem) => string | undefined;
    tsFunctionNameToMarkdownString: (name: string) => Promise<string | undefined>;
    tsFunctionToMarkdownString: (tsFunction: import("function-types").TsFunction) => string;
    tsInterfaceToMarkdownString: (tsInterface: import("code-types").TsInterface) => string;
    tsVariableToMarkdownString: (tsVariable: import("code-types").TsVariable) => string;
    upMarkdownChunkLevelRecursively: (markdownChunks: import("markdown-types").MarkdownChunk[] | undefined) => import("markdown-types").MarkdownChunk[] | undefined;
    getQueryPath: (parsedUrlQuery: import("next-types").ParsedUrlQuery | undefined) => string;
    minifyBuild: ({ operationName, buildFolderPath, }: {
        operationName?: string | undefined;
        buildFolderPath?: string | undefined;
    }) => Promise<true | undefined>;
    nodemon: (config: {
        isRestart?: boolean | undefined;
        operationName: string;
        cliFunctionName: string;
        vars?: string[] | undefined;
        restartVars?: string[] | undefined;
        manualProjectRoot?: string | undefined;
    }) => Promise<void>;
    convertPdfToMd: typeof convertPdfToMd;
    tryParsePdf: (inputPdfFilePath: string) => Promise<import("pdf-parse").Result | undefined>;
    addPeerMessage: (message: string, peerSlug: string) => Promise<import("fs-orm").DbQueryResult>;
    addPeer: (ip: string, authToken: string, peerName?: string | undefined, force?: boolean | undefined, isMe?: boolean | undefined) => Promise<{
        isSuccesful: boolean;
        message: string;
    } | undefined>;
    augmentDevice: (x: import("peer-types").Device) => import("peer-types").Device;
    deviceGetAppsCalculated: (device: import("peer-types").Device) => Promise<{
        lastOnlineAt: number;
        appOperationsCalculated: import("peer-types").AppOperation[] | undefined;
        authToken: string;
        userAgentString: string;
        name: string;
        hasPapi?: boolean | undefined;
        isOnlineCalculated?: boolean | undefined;
        isLocalIpCalculated?: boolean | undefined;
        isFavorite?: boolean | undefined;
        isPrivate?: boolean | undefined;
        lastSyncDatabaseAtObject?: {
            [modelName: string]: number;
        } | undefined;
        personIds?: string[] | undefined;
        persons?: import("peer-types").Person[] | undefined;
        currentPersonId?: string | undefined;
        currentPersonCalculated?: import("peer-types").Person | undefined;
        authenticationMethods: import("peer-types").AuthenticationMethod[];
        categoryStack?: import("model-types").CategoryStack | undefined;
        id: string;
        operationName: string | null;
        projectRelativePath: string;
        operationRelativePath?: string | undefined;
        createdAt: number;
        updatedAt: number;
        deletedAt: number;
        createdFirstAt: number;
        ip: string;
        city?: string | undefined;
        position?: import("geo-types").Position | undefined;
        positionRadiusKm?: number | undefined;
        country?: string | undefined;
        region?: string | undefined;
        timezone?: string | undefined;
    }>;
    getAllAppOperations: () => Promise<import("peer-types").AppOperation[]>;
    getAugmentedPersons: (devices: import("peer-types").Device[], config?: {
        onlyWithDevices?: boolean | undefined;
        onlyWithPapi?: boolean | undefined;
        onlyOnline?: boolean | undefined;
        withAppsCalculated?: boolean | undefined;
    } | undefined) => Promise<import("peer-types").Person[]>;
    getFirstEmoji: (text?: string | undefined) => string | undefined;
    getNestedPathObject: (baseFolderPath: string) => Promise<import("recursive-types").NestedPathObject>;
    getPeerMessages: () => Promise<import("peer-types").PeerMessage[]>;
    getPeerPeople: () => Promise<{
        success: boolean;
        peerPeople: import("peer-types").Person[];
    }>;
    getPeersFromPeersRecursively: () => void;
    getPublicFolderNestedPathObjectFromPeer: (peerSlug: string) => Promise<{
        peerApiResult: import("api-types").ApiReturnType<"getPublicFolderNestedPathObject">;
    } | undefined>;
    getPublicFolderNestedPathObject: () => Promise<import("recursive-types").NestedPathObject | undefined>;
    getPublicPeers: () => Promise<import("peer-types").Device[]>;
    lateFetchPeerMessageSync: () => Promise<{
        newMessagesAmount: number;
    }>;
    ping: {
        (): boolean;
        config: {
            isPublic: true;
        };
    };
    proactivePushAddPeerMessage: (message: string, peerSlug: string) => Promise<boolean>;
    removePeer: (id: string) => Promise<import("fs-orm").DbQueryResult>;
    sortDevices: (a: import("peer-types").Device, b: import("peer-types").Device) => 1 | -1;
    updatePeer: (slug: string, updatedValues: {
        name?: string | undefined;
        description?: string | undefined;
        authToken?: string | undefined;
        isFavorite?: boolean | undefined;
        isMe?: boolean | undefined;
    }) => Promise<{
        isSuccesful: boolean;
        message: string;
    }>;
    getAllGroupsIncludingInheritedRecursive: (groups: import("peer-types").Group[], groupSlugs: string[] | undefined) => import("peer-types").Group[];
    isPortUsed: (port: number) => Promise<boolean>;
    personAttachInheritedGroups: (person: import("peer-types").Person, groups: import("peer-types").Group[]) => import("peer-types").Person;
    getPersona: (where?: ((item: import("peer-types").Persona, primary: import("peer-types").Persona) => boolean) | undefined) => Promise<import("peer-types").FinalAssistantPersona | undefined>;
    deleteApp: (operationName: string) => Promise<{
        isSuccessful: boolean;
        error?: Error | undefined;
        proc?: import("pm2").Proc | undefined;
    }>;
    listApps: () => Promise<import("pm2-util").ListAppsResult>;
    logApp: (operationName: string) => Promise<void>;
    logTableObject: (object: {
        [key: string]: any;
    } | undefined) => {
        property: string;
        value: any;
    }[] | undefined;
    pm2ConnectDisconnect: <TResult extends {
        [key: string]: any;
        isSuccessful: boolean;
        error?: Error | undefined;
        proc?: import("pm2").Proc | undefined;
    }>(action: (resolve: (value: TResult) => void) => void) => Promise<{
        isSuccessful: boolean;
        error?: Error | undefined;
        proc?: import("pm2").Proc | undefined;
    }>;
    pm2Connect: () => Promise<{
        isSuccessful: boolean;
        error?: Error | undefined;
    }>;
    restartApp: (operationName: string) => Promise<{
        isSuccessful: boolean;
        error?: Error | undefined;
        proc?: import("pm2").Proc | undefined;
    }>;
    startApp: (operationName: string, isDev?: boolean | undefined) => Promise<{
        isSuccessful: boolean;
        error?: Error | undefined;
        proc?: import("pm2").Proc | undefined;
        message?: string | undefined;
    }>;
    stopAllAppsExcept: (ignore?: string[] | undefined) => Promise<void>;
    stopApps: (operationNames: string[]) => Promise<{
        isSuccessful: boolean;
        error?: Error | undefined;
        proc?: import("pm2").Proc | undefined;
    }>;
    readCsvFileSync: <T_14 extends import("csv-util").CsvItemType>(filePath: string) => T_14[] | null;
    readCsvFile: <T_15 extends import("csv-util").CsvItemType>(filePath: string | undefined) => Promise<T_15[] | null>;
    readRawCsvFile: (filePath: string) => Promise<(string | number)[][] | null>;
    readJsonFileSync: <T_16>(filePath: string) => T_16 | null;
    readJsonFile: <T_17>(filePath: string | undefined) => Promise<T_17 | null>;
    readProjectRelativeJsonFile: <T_18>(projectRelativePath: string) => Promise<T_18 | null>;
    readKvmdFile: (filePath: string, dbFileLocation: import("model-types").DbFileLocation) => Promise<import("model-types").KeyValueMarkdownParse | null>;
    readMarkdownFileToModel: (absoluteFilePath: string, webOperationName: string, markdownCallToActions: import("markdown-types").MarkdownCallToAction[]) => Promise<import("markdown-types").MarkdownIndex | null>;
    readMarkdownFile: (filePath: string) => Promise<import("markdown-types").MarkdownParse | null>;
    getFolderTypescriptIndex: ({ basePath, filter, sort, type, filePath, }: {
        filePath?: string | string[] | undefined;
        basePath?: string | string[] | undefined;
        type?: keyof import("code-types").IndexModels | null | undefined;
        filter?: import("read-typescript-file").IndexFilter | undefined;
        sort?: string | undefined;
    }) => Promise<import("code-types").TypescriptIndex | null>;
    readTypescriptFile: (filePath: string) => Promise<import("code-types").TypescriptIndex | null>;
    clearTsDatabase: (operationName: string | undefined) => Promise<void>;
    executeCommandQuietUnlessFail: (config: {
        command: string;
        cwd?: string | undefined;
        description?: string | undefined;
    }) => boolean;
    exitIfProcessDependenciesChanged: (operationName: string, manualProjectRoot?: string | undefined) => Promise<void>;
    generateJsonSchemas: (manualProjectRoot?: string | undefined, operationName?: string | undefined) => Promise<void>;
    getAllDbModels: (manualProjectRoot?: string | undefined, operationName?: string | undefined) => Promise<import("code-types").TsInterface[]>;
    getFileIds: ({ operationFolderPath, pathSuffix, extension, }: {
        operationFolderPath: string;
        extension?: string | string[] | undefined;
        pathSuffix: string;
    }) => Promise<string[]>;
    getIndexFileIds: (operationFolderPath: string) => Promise<string[]>;
    getSrcIds: (operationFolderPath: string) => Promise<string[]>;
    isOperationBuildNeeded: (operationBasePath: string) => boolean;
    isSdkOperation: (operationBasePath: string) => boolean;
    rebuildAllOperations: (isRebuildingProcessUpdated?: boolean | undefined, manualProjectRoot?: string | undefined) => Promise<void>;
    rebuildOperation: (config: {
        updatedAt?: number | undefined;
        typerepoManualProjectRoot?: string | undefined;
        operationManualProjectRoot?: string | undefined;
        operationBasePath: string;
        filePaths?: string[] | undefined;
        noUnresolvedRebuilding?: boolean | undefined;
        force?: boolean | undefined;
        debug?: boolean | undefined;
        noExit?: boolean | undefined;
        stack?: string[] | undefined;
    }) => Promise<boolean>;
    shouldSkip: (config: {
        operationBasePath: string;
        debug?: boolean | undefined;
        force?: boolean | undefined;
        operationManualProjectRoot?: string | undefined;
        rebuildUpdatedAt?: number | undefined;
    }) => Promise<boolean>;
    yarnBuild: (operationBasePath: string, config?: {
        rmFirst?: boolean | undefined;
        skipMinify?: boolean | undefined;
    } | undefined) => Promise<boolean>;
    sayDutch: (message: string) => void;
    sayLanguage: (message: string, language: import("say").SayLanguageEnum) => void;
    sayNepali: (message: string) => void;
    saySomething: (input: string | import("say").SayOptions) => Promise<void>;
    textToMp3: (options: Omit<import("say").SayOptions, "outputFilePath">, absoluteOutputFilePath: string) => Promise<string | undefined>;
    getAllSearchResultsWithContext: {
        (functionContext: import("function-types").FunctionContext, query: string | null): Promise<import("search-types").SearchResult[]>;
        config: {
            authorizations: {
                cfa: string;
                public: string;
            };
        };
    };
    getExplorableBasePathsWithContext: {
        (functionContext: import("function-types").FunctionContext): {
            projectRelativePath: string;
            name: string;
        }[];
        config: {
            isPublic: true;
        };
    };
    getExplorableDbModels: (query: string, groupSlugs: string[]) => Promise<import("search-types").SearchResult[]>;
    getExplorableFilesWithContext: {
        (functionContext: import("function-types").FunctionContext, query?: string | undefined): Promise<import("search-types").SearchResult[]>;
        config: {
            isPublic: false;
        };
    };
    getFunctions: (query: string, groupSlugs: string[]) => Promise<import("search-types").SearchResult[]>;
    defaultMessage: (otpCode: string) => string;
    getMeWithContext: {
        (functionContext: import("function-types").FunctionContext): Promise<{
            authorizations?: import("auth-types").Authorization[] | undefined;
            device: import("model-types").Storing<import("peer-types").Device>;
            groups?: import("peer-types").Group[] | undefined;
        }>;
        config: {
            isPublic: true;
        };
    };
    getPublicPerson: {
        (id?: string | undefined): Promise<import("peer-types").PublicPerson | undefined>;
        config: {
            isPublic: true;
        };
    };
    getPublicPersons: {
        (): Promise<import("peer-types").PublicPerson[]>;
        config: {
            isPublic: true;
        };
    };
    isPhoneNumber: (phoneNumber: string) => boolean;
    isValidPassword: (password: string) => boolean;
    loginConfirmWithContext: {
        (functionContext: import("function-types").FunctionContext, emailOrPhone: string, otp: string): Promise<{
            isSuccessful: boolean;
            message: string;
        }>;
        config: {
            isPublic: true;
        };
    };
    loginWithEmailOrPhone: {
        (emailOrPhone: string): Promise<{
            isSuccessful: boolean;
            message?: string | undefined;
            emailOrPhone?: string | undefined;
        }>;
        config: {
            isPublic: true;
        };
    };
    logoutWithContext: {
        (functionContext: import("function-types").FunctionContext, rememberAuthentication?: boolean | undefined): Promise<{
            isSuccessful: boolean | undefined;
            message: string;
        }>;
        config: {
            isPublic: true;
        };
    };
    signupBare: (config: {
        pictureImage?: import("asset-type").BackendAsset | undefined;
        emailOrPhone: string;
        fullName?: string | undefined;
        customEmail?: ((otpCode: string, email: string) => string) | undefined;
        customSms?: ((otpCode: string, phoneNumber: string) => string) | undefined;
        credit?: number | undefined;
    }) => Promise<{
        isSuccessful: boolean;
        message: string;
        emailOrPhone?: undefined;
    } | {
        isSuccessful: boolean;
        emailOrPhone: string;
        message: string;
    }>;
    signupConfirmWithContext: {
        (functionContext: import("function-types").FunctionContext, emailOrPhone: string, otp: string): Promise<{
            isSuccessful: boolean;
            message: string;
        }>;
        config: {
            isPublic: true;
        };
    };
    signupWithEmailOrPhone: {
        (emailOrPhone: string, fullName?: string | undefined, pictureImage?: import("asset-type").BackendAsset | undefined): Promise<{
            isSuccessful: boolean;
            message: string;
            emailOrPhone?: string | undefined;
        }>;
        config: {
            isPublic: true;
        };
    };
    switchCurrentPersonWithContext: (functionContext: import("function-types").FunctionContext, newCurentPersonId: string) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    updateMeWithContext: (functionContext: import("function-types").FunctionContext, details: import("peer-types").PersonProfileDetails) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    setJsonKey: ({ jsonPath, keyLocation, value, debug, }: {
        jsonPath: string;
        keyLocation: string;
        value: string;
        debug?: boolean | undefined;
    }) => Promise<void>;
    setKeyAtLocation: typeof setKeyAtLocation;
    findAudioWithViewsArray: (content: string, index: number, title?: string | undefined) => import("short-markdown-types").AudioWithViews[];
    markdownParseToShortMarkdown: (markdownParse: import("markdown-types").MarkdownParse) => import("short-markdown-types").ShortMarkdown | undefined;
    shortMarkdownToMarkdownParse: () => void;
    augmentShortMarkdown: (shortMarkdown: import("short-markdown-types").ShortMarkdown, projectRelativeFilePath: string) => Promise<import("short-markdown-types").ShortMarkdown | undefined>;
    fetchVoices: (dialogue: import("short-markdown-parser-node").DialogueSentence[]) => Promise<void>;
    generateAugmentedShortMarkdown: (projectRelativeMarkdownFilePath: string) => Promise<import("short-markdown-types").ShortMarkdown | undefined>;
    getOrGenerateShortMarkdown: (projectRelativeMarkdownFilePath: string) => Promise<import("short-markdown-types").ShortMarkdown | null>;
    parseDialogue: (textMarkdown: string) => {
        voice: string | undefined;
        sentence: string;
    }[];
    uberduckGetPath: (uuid: string) => string | undefined;
    uberduckSpeak: (uberduckVoice: string, text: string) => string | undefined;
    voiceCloneDialogue: (textContent: string) => Promise<{
        uuid: string | undefined;
        voice: string | undefined;
        sentence: string;
    }[]>;
    createNewStripePayment: (config: {
        defaultQuantity?: number | undefined;
        person: import("peer-types").Person;
        persona: import("peer-types").Persona;
        customSuccessMessage?: string | undefined;
        paymentReason?: "whatsapp-new-user-limit" | "whatsapp-ask-for-credit" | "whatsapp-insufficient-credit" | "whatsapp-too-many-dau" | undefined;
        priceCent?: number | undefined;
        isQuantityEditable?: boolean | undefined;
        productName?: string | undefined;
    }) => Promise<string | undefined>;
    receivePaymentUpdateWithContextRaw: (serverContext: import("server/typings/common").Context) => Promise<{
        isSuccessful: boolean;
        message: string;
    } | undefined>;
    getTestFunctionContext: (groupSlug: string) => Promise<import("function-types").FunctionContext | undefined>;
    time: () => {
        timeString: string;
        myTimeDate: Date;
        myTimeMs: number;
    };
    translate: (text: string, variables?: {
        [key: string]: string | number;
    } | undefined) => string;
    getAllTsMorphSourceFiles: (operationBasePath: string) => Promise<import("ts-morph").SourceFile[] | undefined>;
    getHasGeneric: (type: import("ts-morph").TypeAliasDeclaration | import("ts-morph").InterfaceDeclaration) => boolean;
    getTsMorphProject: (operationFolderPath: string) => import("ts-morph").Project | undefined;
    getOpenableFilePath: (file: import("vscode-open").OpenableFile) => Promise<string | undefined>;
    vscodeOpen: (config: {
        files?: import("vscode-open").OpenableFile[] | undefined;
    }) => Promise<{
        success: boolean;
        response: string;
    } | undefined>;
    writeToAssets: (filePath: string, data: any, assetsFileName?: string | undefined, hideLog?: boolean | undefined) => Promise<boolean | undefined>;
    copyPathWithContext: import("function-types").FileFunction<undefined, import("function-types").StandardResponse>;
    deleteFileOrFolderWithContext: import("function-types").FileFunction<undefined, import("function-types").StandardResponse>;
    getFileContentsWithContext: {
        (functionContext: import("function-types").FunctionContext, projectRelativeFilePath: string): Promise<{
            isSuccessful: boolean;
            message: string;
            fileContents?: string | undefined;
        }>;
        config: {
            isPublic: boolean;
        };
    };
    getFrontmatterSchema: (markdownModelName: string | number | symbol | undefined) => Promise<import("schema-types").SimplifiedSchema | undefined>;
    getWriterWebPagesMenu: () => Promise<import("webpage-types").MenuObjectType<import("webpage-types").FilePage>>;
    getWriterWebPages: () => Promise<import("webpage-types").FileWebPage[]>;
    movePathWithContext: import("function-types").FileFunction<string, import("function-types").StandardResponse>;
    newFileWithContext: import("function-types").FileFunction<undefined, import("function-types").StandardResponse>;
    newFolderWithContext: import("function-types").FileFunction<string, import("function-types").StandardResponse>;
    openFinder: (projectRelativePath: string) => Promise<void>;
    processAssetUploadWithContext: (functionContext: import("function-types").FunctionContext, projectRelativeFolderPath?: string | undefined, assets?: import("asset-type").BackendAsset[] | undefined) => Promise<{
        isSuccessful: boolean;
        message: string;
        processed?: import("asset-type").BackendAsset[] | undefined;
    }>;
    renameFileOrFolderWithContext: import("function-types").FileFunction<string, import("function-types").StandardResponse>;
    saveFileContentsWithContext: import("function-types").FileFunction<string, import("function-types").StandardResponse>;
    trashFileOrFolderWithContext: import("function-types").FileFunction<undefined, import("function-types").StandardResponse>;
    updateFrontmatterWithContext: import("function-types").FileFunction<{
        [key: string]: string;
    }, import("function-types").StandardResponse>;
    youtubeToMp4_old: (youtubeUrl: string, absoluteFolderPath: string) => Promise<import("function-types").StandardResponse & {
        projectRelativeFilePath?: string | undefined;
    }>;
    youtubeToMp4WithContext: (functionContext: import("function-types").FunctionContext, youtubeUrl: string, projectRelativeFolderPath: string) => Promise<import("function-types").StandardResponse>;
    youtubeToMp4: (link: string, config?: {
        isToMp3?: boolean | undefined;
        destinationFolderPath?: string | undefined;
        quality?: "low" | undefined;
    } | undefined) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
        mp3FilePath?: string | undefined;
        mp4FilePath?: string | undefined;
    }>;
    zipFiles: (projectRelativePaths: string[]) => Promise<import("function-types").StandardResponse & {
        projectRelativeZipPath?: string | undefined;
    }>;
    zipFolder: (absoluteFolderPath: string) => Promise<string | undefined>;
    zip: (config: {
        baseFolderPath: string;
        folderName: string;
        zipName: string;
        debug?: boolean | undefined;
        requirePassword?: boolean | undefined;
    }) => string;
    untypedApiFunction: (fnName: string, config: import("api-types").ApiConfig, ...parameters: any) => Promise<import("api-types").ApiReturnType<any>>;
    getGetApiUrl: (apiUrl: string | undefined, apiFunctionName: string, query: {
        [name: string]: string | string[] | undefined;
    }) => string | undefined;
    addToken: (name: string, previousToken?: string | undefined, attachTokenToFilename?: boolean | undefined) => string;
    ensureToken: (name: string, newToken?: string | undefined, attachTokenToFilename?: boolean | undefined) => string;
    findAssetParametersRecursively: (object: {
        [key: string]: any;
    }, stack?: string[] | undefined) => import("asset-functions-js").AssetParameter[];
    getAssetDirectlyApiUrl: (apiUrl: string | undefined, projectRelativeAssetPath: string, isDownload?: boolean | undefined) => string | undefined;
    getConversionInfoFromType: (uploadMimeType: string | undefined) => {
        uploadMimeType: string | undefined;
        targetFormat: string | undefined;
        isUnchecked?: boolean | undefined;
    };
    getExtensionFromAsset: (asset: import("asset-type").Asset) => string | undefined;
    getNameFromRelativePath: (relativePath: string) => string;
    getNameWithTokenFromRelativePath: (relativePath: string, attachTokenToFilename?: boolean | undefined, newToken?: string | undefined) => string;
    getReferencedAssetApiUrl: (apiUrl: string | undefined, projectRelativeReferencingFilePath: string, referencingFileRelativeAssetPath: string, isDownload?: boolean | undefined) => string | undefined;
    getTypeFromUrlOrPath: (urlOrPath: string) => import("asset-type").AssetType;
    readableSize: (sizeBytes: number) => string;
    removeTokenIfPresent: (name: string, attachTokenToFilename?: boolean | undefined) => {
        nameWithoutToken: string;
        token: string | undefined;
    };
    BreadCrumbs: (props: {
        path: string;
    }) => JSX.Element;
    renderBreadCrumbs: (chunks: string[]) => JSX.Element[] | null;
    ClickableIcon: (button: import("clickable-icon").ClickableIconType) => JSX.Element;
    stripCommentEnd: (trimmedLine: string) => string;
    stripCommentStart: (trimmedLine: string) => string;
    stripComment: (rawCommentString: string) => string;
    stripSlashes: (trimmedLine: string) => string;
    stripStar: (trimmedLine: string) => string;
    trim: (string: string) => string;
    getCompileErrors: (operationBasePath: string, onlyDependants?: boolean | undefined, manualProjectRoot?: string | undefined) => Promise<import("model-types").Creation<import("code-types").TsBuildError>[]>;
    getTypescriptErrorsFromFiles: typeof getTypescriptErrorsFromFiles;
    writeBuildErrors: (operationBasePath: string, operationManualProjectRoot?: string | undefined, typerepoManualProjectRoot?: string | undefined) => Promise<void>;
    camelCase: (text: string) => string;
    capitalCase: (text: string) => string;
    capitaliseFirstLetter: (word: string) => string;
    convertCase: (text: string, target: import("convert-case").Casing) => string;
    fileSlugify: typeof fileSlugify;
    getDelimiter: (target: import("convert-case").Casing) => "" | "-" | "_" | " ";
    humanCase: (text: string) => string;
    kebabCase: (text: string) => string;
    lowerCaseArray: (text: string) => string[];
    pascalCase: (text: string) => string;
    slugify: typeof slugify;
    snakeCase: (text: string) => string;
    errorToast: (message?: string | undefined) => void;
    infoToast: (message?: string | undefined) => void;
    showStandardResponse: (apiResult: import("api-types").StandardizedApiReturnType) => void;
    successToast: (message?: string | undefined) => void;
    warningToast: (message?: string | undefined) => void;
    FancyLoader: ({ big, medium, }: {
        big?: boolean | undefined;
        medium?: boolean | undefined;
    }) => JSX.Element;
    getFileType: (fullPath: string) => "function" | "other" | "folder" | "typescript" | "markdown" | "operation" | "operationFolder" | "interface" | "variable" | "javascript" | "json";
    MatchingText: (props: {
        text: string;
        search: string;
        defaultTextClassName: string;
        matchTextClassName: string;
        truncateLength?: number | undefined;
    }) => JSX.Element;
    PathSearchResults: (props: {
        paths: string[];
        search: string;
        augmentedWords?: import("augmented-word-types").AugmentedWord[] | undefined;
    }) => JSX.Element;
    getFileTypeFromPath: (path?: string | undefined) => import("filename-conventions").FileType | "other";
    getWriterType: (extension: string | undefined) => import("filename-conventions").WriterType;
    hasSubExtension: (srcRelativeFileId: string, subExtensions: string | string[], includeRootName?: boolean | undefined) => boolean;
    isGeneratedOperationName: (operationName: string) => boolean;
    isGeneratedOperation: (operationBasePath: string) => boolean;
    isIndexableFileId: (fileId: string) => boolean;
    frontmatterParseToString: (frontmatter: import("matter-types").Frontmatter) => string;
    frontmatterToObject: <TResult_1 extends import("matter-types").FrontmatterParse = import("matter-types").FrontmatterParse>(frontmatter: import("matter-types").Frontmatter, schema: import("schema-types").SimplifiedSchema) => TResult_1 | undefined;
    getFrontmatterValueString: (value: import("frontmatter-util").FrontmatterValue) => string | null;
    markdownModelTypeToMarkdownString: (markdownModelType: import("model-types").Storing<import("model-types").MarkdownModelType>) => string;
    objectToFrontmatter: (parse: import("matter-types").FrontmatterParse, schema: import("schema-types").SimplifiedSchema) => import("matter-types").Frontmatter;
    parseFrontmatterString: (value: string) => string;
    quotedOrNot: (string: string) => string;
    stringifyNewlines: (string: string) => string;
    canAccessSync: (p: import("fs").PathLike, mode: number) => boolean;
    canAccess: (p: import("fs").PathLike, mode: number) => Promise<boolean>;
    canExecuteSync: (p: import("fs").PathLike) => boolean;
    canExecute: (p: import("fs").PathLike) => Promise<boolean>;
    canReadSync: (p: import("fs").PathLike) => boolean;
    canRead: (p: import("fs").PathLike) => Promise<boolean>;
    canSeeSync: (p: import("fs").PathLike) => Promise<boolean>;
    canSee: (p: import("fs").PathLike) => Promise<boolean>;
    canWriteSync: (p: import("fs").PathLike) => boolean;
    canWrite: (p: import("fs").PathLike) => Promise<boolean>;
    copyAllRelativeFiles: (relativeFilePaths: string[], absoluteSourceRoot: string, absoluteDestinationRoot: string, force?: boolean | undefined) => Promise<boolean>;
    fileExistsWithCaseSync: typeof fileExistsWithCaseSync;
    findClosestAbsolutePath: (absolutePath: string) => Promise<string | undefined>;
    findFileNameCaseInsensitive: (folderPath: string, fileName: string) => Promise<string | undefined>;
    getAllFoldersUntilFolder: (folderPath: string) => string[];
    getFileName: (pathString: string) => string;
    getFirstAvailableFilename: (absoluteFilePath: string) => string;
    getFirstFile: (fullPath: string) => Promise<string | undefined>;
    getFolderSizeObject: {
        (absoluteFolderPath: string, minimumReportSizeMb?: number | undefined, ignoreGenerated?: boolean | undefined): Promise<import("recursive-types").ChildObject<{
            size: number;
            name: string;
        }>[]>;
        config: {
            isPublic: true;
        };
    };
    getFolder: (pathString: string) => string;
    getLastFolder: (pathString: string) => string;
    getOneFolderUpPath: (folderPath: string) => string;
    getPathCombinations: (...chunksSegments: (string | string[])[]) => string[];
    oneUp: (filename: string) => string;
    parseMd: (mdFilePath: string) => import("fs-util").Markdown;
    readFilePerLine: (absoluteFilePath: string, withLine: (line: string, close: () => void) => void) => Promise<void>;
    readFrontmatter: (absoluteFilePath: string) => Promise<import("matter-types").Frontmatter | undefined>;
    removeAllExcept: (folderPath: string, config?: {
        ignore?: string[] | undefined;
        typeToRemove?: "folder" | "file" | undefined;
    } | undefined) => Promise<{
        name: string;
        removed: boolean;
    }[]>;
    renameAndCreate: (oldPath: string, newPath: string) => Promise<void>;
    returnReadmePathFromFolder: (absoluteFolderPath: string) => Promise<string | undefined>;
    writeJsonToFile: <T_19>(p: string, data: T_19) => Promise<boolean>;
    writeStringToFile: (p: string, data: string) => Promise<boolean>;
    writeToFiles: (fileObject: {
        [absoluteFilePath: string]: any;
    }) => Promise<void>;
    getFunctionExersize: (functionId: string) => Promise<string>;
    converse: (searchMessage: string) => Promise<false | undefined>;
    executeSdkFunction: (operationString: string, parameters: string[] | undefined) => Promise<any>;
    getCachedExportedFunctions: () => Promise<import("function-types").TsFunction[]>;
    getMenu: () => Promise<{
        success: boolean;
        response: string;
        menu: {
            [x: string]: import("function-types").TsFunction[];
        };
    } | undefined>;
    getSdkFunctionPaths: () => Promise<false | import("function-util").FnMatch[]>;
    findFolderWhereMatch: <T_20>(fullSourcePath: string, matchFunction: (folderPath: string) => T_20) => {
        folderPath: string;
        matchResult: T_20;
    } | undefined;
    findOperationBasePathWithClassification: (startPath: string) => {
        folderPath: string;
        classification: "cjs" | "ts" | "esm" | "node-cjs" | "node-esm" | "node-ts" | "server-cjs" | "ui-web" | "ui-app" | "ui-ts" | "ui-cjs" | "ui-esm";
    } | undefined;
    findOperationBasePath: (startPath: string) => string | undefined;
    getAllPackageJsonDependencies: (operation: import("code-types").Operation) => string[];
    getCommonAncestorMultiple: (paths: string[]) => Promise<string | undefined>;
    getCommonAncestor: (path1: string, path2: string) => string;
    getFolderPath: (fileOrFolderPath: string) => Promise<string | undefined>;
    getOperationClassificationObject: () => Promise<import("get-path").OperationClassificationObject>;
    getOperationClassification: (folderPath: string) => "cjs" | "ts" | "esm" | "node-cjs" | "node-esm" | "node-ts" | "server-cjs" | "ui-web" | "ui-app" | "ui-ts" | "ui-cjs" | "ui-esm" | undefined;
    getOperationPathParse: (absolutePath: string) => import("code-types").OperationPathParse | undefined;
    getOperationPath: (operationName: string, config?: {
        manualProjectRoot?: string | undefined;
        notUseSdk?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    getOperationRelativePath: (absolutePath: string, operationBasePath: string) => string;
    getPathParse: (absolutePath: string) => import("code-types").PathParse | undefined;
    getPathsWithOperations: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => string[];
    getProjectRoot: (fullSourcePath?: string | undefined) => string | undefined;
    getRelativeLinkPath: (absoluteFromFilePath: string, absoluteToFilePath: string, debug?: boolean | undefined) => string;
    getRelativePath: (absolutePath: string, relativeFrom: "project-root") => string | undefined;
    getRootPath: (name?: "text" | "operations" | "assets" | "backups" | "bundled" | "cloned" | "distributions" | "knowledge" | "db" | undefined, config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => string | undefined;
    getSrcRelativeFileId: (operationRelativePath: string) => string;
    getSubExtensions: (absolutePath: string, config?: {
        allowAllSubExtensions?: boolean | undefined;
    } | undefined) => string[];
    hasDependency: (operation: import("code-types").Operation, dependency: string) => boolean;
    isBundle: (folderPath?: string | undefined) => boolean;
    isOperation: (absoluteFolderPath: string) => boolean;
    isUiOperation: (tsconfig: import("code-types").TsConfig | null, packageJson: import("code-types").Operation | null) => boolean;
    isWorkspaceRoot: (folderPath: string) => {
        isBundle: boolean;
        isWorkspaceRoot: boolean;
    } | undefined;
    packageCompilesTs: (packageJson: import("code-types").Operation | null) => boolean;
    tsconfigCompilesEsm: (tsconfig: import("code-types").TsConfig) => boolean;
    getTsConfig: (packageFolder: string) => Promise<import("code-types").TsConfig | null>;
    apply: <T_21>(functions: ((input: T_21) => T_21)[], value: T_21) => T_21;
    createEnum: <T_22 extends readonly string[]>(array: T_22) => { [K in T_22[number]]: K; };
    createMappedObject: <T_23 extends {
        [key: string]: any;
    }, U_2 = T_23>(array: T_23[], mapKey: keyof T_23, mapFn?: ((value: T_23, array: T_23[]) => U_2) | undefined) => import("js-util").MappedObject<U_2>;
    destructureOptionalObject: <T_24 extends {
        [key: string]: any;
    }>(object: T_24 | null | undefined) => Partial<T_24>;
    findLastIndex: <T_25>(array: T_25[], findFn: (item: T_25) => boolean) => number | undefined;
    getCurrentDate: (date?: Date | undefined) => string;
    getObjectFromParamsString: (paramsString: string) => {
        [x: string]: string;
    };
    getObjectKeysArray: <TObject extends {
        [key: string]: any;
    }>(object: TObject) => Extract<keyof TObject, string>[];
    getParameterAtLocation: <T_26 = any>(object: {
        [key: string]: any;
    }, location: string[]) => T_26;
    getSubsetFromObject: <T_27, K_1 extends readonly (keyof T_27)[]>(object: T_27, keys: K_1) => Pick<T_27, K_1[number]>;
    groupByKey: <T_28 extends {
        [key: string]: any;
    }>(array: T_28[], key: keyof T_28) => {
        [key: string]: T_28[];
    };
    hasAllLetters: (a: string, b: string) => boolean;
    insertAt: <T_29>(array: T_29[], items: T_29 | T_29[], beforeIndex: number) => T_29[];
    isAllTrue: (array: boolean[]) => boolean;
    isArrayEqual: (a: any[], b: any[]) => boolean;
    makeArray: <T_30>(...arrayOrNotArray: (T_30 | T_30[] | undefined)[]) => T_30[];
    mapAsync: <T_31, U_3>(array: T_31[], callback: (value: T_31, index: number, array: T_31[]) => Promise<U_3>) => Promise<Awaited<U_3>[]>;
    mapKeys: (object: {
        [key: string]: any;
    }, mapFn: (key: string) => string | Promise<string> | undefined) => Promise<{
        [x: string]: any;
    }>;
    mapMany: <T_32, U_4>(array: T_32[], mapFn: (item: T_32, index: number, array: T_32[]) => Promise<U_4>, limit?: number | undefined) => Promise<U_4[]>;
    mapValuesSync: <T_33, U_5>(object: {
        [key: string]: T_33;
    }, mapFn: (value: T_33) => U_5) => {
        [x: string]: U_5;
    };
    mergeNestedObject: <T_34 extends import("js-util").O>(object: T_34, otherObject: import("js-util").NestedPartial<T_34> | undefined) => T_34;
    mergeObjectParameters: <T_35>(config: T_35 | undefined, defaults: T_35 | undefined) => Partial<T_35>;
    mergeObjectsArray: <T_36 extends {
        [key: string]: any;
    }>(objectsArray: T_36[]) => T_36;
    mergeObjects: <T_37 extends {
        [key: string]: any;
    }>(...objects: (Partial<T_37> | undefined)[]) => T_37 | undefined;
    noEmptyString: (input: string | undefined) => string | undefined;
    notEmpty: typeof notEmpty;
    objectMapAsync: <TObject_1 extends {
        [key: string]: any;
    }, TResultValue, TResultObject extends { [key in keyof TObject_1]: TResultValue; }>(object: TObject_1, mapFn: (key: Extract<keyof TObject_1, string>, value: TObject_1[keyof TObject_1]) => Promise<TResultValue>) => Promise<TResultObject>;
    objectMapSync: <TObject_2 extends {
        [key: string]: any;
    }, TMapResult, TResultObject_1 extends { [key_1 in keyof TObject_2]: TMapResult; }>(object: TObject_2, mapFn: (key: keyof TObject_2, value: TObject_2[keyof TObject_2]) => TMapResult) => TResultObject_1;
    objectValuesMap: <T_38 extends {
        [key: string]: T_38[string];
    }, U_6 extends unknown>(object: T_38, mapFn: (key: string, value: T_38[string]) => U_6) => {
        [key: string]: U_6;
    };
    omitUndefinedValues: <T_39 extends {
        [key: string]: any;
    }>(object: T_39) => T_39;
    onlyDuplicates: <U_7>(isEqualFn?: ((a: U_7, b: U_7) => boolean) | undefined) => <T_40 extends U_7>(value: T_40, index: number, self: T_40[]) => boolean;
    onlyUnique2: <U_8>(isEqualFn?: ((a: U_8, b: U_8) => boolean) | undefined) => <T_41 extends U_8>(value: T_41, index: number, self: T_41[]) => boolean;
    onlyUnique: typeof onlyUnique;
    pickRandomArrayItem: <T_42>(array: T_42[]) => T_42;
    putIndexAtIndex: <T_43>(array: T_43[], index: number, toIndex: number) => T_43[];
    removeIndexFromArray: <T_44>(array: T_44[], index: number) => T_44[];
    removeOptionalKeysFromObjectStrings: <TObject_3 extends import("js-util").O>(object: TObject_3, keys: string[]) => TObject_3;
    removeOptionalKeysFromObject: <TObject_4 extends import("js-util").O>(object: TObject_4, keys: Exclude<Extract<keyof TObject_4, string>, Exclude<import("js-util").KeysOfType<TObject_4, Exclude<TObject_4[keyof TObject_4], undefined>>, undefined>>[]) => TObject_4;
    replaceLastOccurence: (string: string, searchValue: string, replaceValue: string) => string;
    reverseString: (string: string) => string;
    sumAllKeys: <T_45 extends {
        [key: string]: number | undefined;
    }>(objectArray: T_45[], keys: (keyof T_45)[]) => T_45;
    sumObjectParameters: <TObject_5 extends {
        [key: string]: number;
    }>(object1: TObject_5, object2: TObject_5) => TObject_5;
    sum: (items: number[]) => number;
    takeFirst: <T_46>(arrayOrNot: T_46 | T_46[]) => T_46;
    trimSlashes: (absoluteOrRelativePath: string) => string;
    getSimpleJsonString: (json: import("json-util").Json) => string | undefined;
    flattenMarkdownChunks: (markdownChunks: import("markdown-types").MarkdownChunk[]) => import("markdown-types").MarkdownParagraph[];
    getKvmdItemsRecursively: (chunk: import("markdown-types").MarkdownChunk, categoryStackUntilNow?: import("model-types").CategoryStack | undefined) => import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    getParagraphsRecursively: (chunk: import("markdown-types").MarkdownChunk, categoryStackUntilNow?: import("model-types").CategoryStack | undefined) => import("markdown-types").MarkdownParagraph[];
    kvmdDataMap: <T_47 extends {
        [key: string]: string | string[] | undefined;
    }>(data: import("model-types").KeyValueMarkdownModelType[], { keyName, valueName, categoryStackName, commentName, }: {
        keyName?: string | undefined;
        valueName?: string | undefined;
        commentName?: string | undefined;
        categoryStackName?: string | undefined;
    }) => T_47[];
    kvmdDataToString: (kvmdData: import("model-types").KeyValueMarkdownModelType, previous: import("model-types").KeyValueMarkdownModelType | undefined) => string;
    kvmdParseToMarkdownString: (keyValueMarkdownParse: import("model-types").KeyValueMarkdownParse) => string;
    markdownStringToKvmdParse: (kvMdString: string, dbFileLocation: import("model-types").DbFileLocation) => import("model-types").KeyValueMarkdownParse;
    parseKvmdLine: (string: string) => import("model-types").KvmdLine | undefined;
    LabeledButton: (button: import("labeled-button").LabeledButtonType, index: number) => JSX.Element;
    getCallerFileName: () => string | undefined;
    log: (message: string, config?: import("log").LogConfig | undefined, data?: any) => void;
    parseTitle: (markdown: string) => {
        title: string;
        rest: string;
    };
    isResultOfInterface: <TResult_2>(result: TResult_2, jsonSchema: unknown) => boolean;
    makeTest: <TResult_3>(testFunction: (() => Promise<TResult_3>) | (() => TResult_3), isValid?: ((result: TResult_3) => boolean) | undefined) => () => Promise<boolean>;
    chunkToStringRecursively: (chunk: import("markdown-types").MarkdownChunk) => string;
    getChunkParagraphsRecursively: (chunk: import("markdown-types").MarkdownChunk) => string[];
    getImplicitId: (title: string) => string;
    getMarkdownIntro: (markdownParse: import("markdown-types").MarkdownParse | null) => {
        title: string | undefined;
        firstParagraph: string | null;
    };
    getMarkdownParseParagraphs: (markdownParse: import("markdown-types").MarkdownParse) => string[];
    getMarkdownReferencePaths: (markdownString: string) => string[];
    getMarkdownReferencesFromParagraph: (paragraph: string) => import("markdown-parse-js").MarkdownReference[];
    markdownParseToMarkdownStringFromContent: (markdownParse: import("markdown-types").MarkdownParse) => string | undefined;
    markdownParseToMarkdownString: (markdownParse: import("markdown-types").MarkdownParse) => string;
    mdContentParseRecursively: (markdownString: string, level: number) => import("markdown-types").MarkdownChunk[];
    mdToJsonParse: (markdownString: string, fileName?: string | undefined, config?: import("markdown-parse-js").MarkdownParseConfig | undefined) => import("markdown-types").MarkdownParse;
    parseFrontmatterMarkdownString: (markdownWithFrontmatter: string, config?: import("markdown-parse-js").MarkdownParseConfig | undefined) => import("markdown-types").MarkdownParse;
    parseMarkdownParagraph: (paragraph: string) => import("markdown-parse-js").MarkdownParagraphChunk[];
    parseMdToChunks: (markdownString: string, level: number) => import("markdown-types").MarkdownChunk[];
    removeHeaderPrefix: (string: string) => string;
    markdownParseToMarkdownModelType: (markdownParse: import("markdown-types").MarkdownParse | null) => import("model-types").Storing<import("model-types").MarkdownModelType> | null;
    parseMarkdownModelTimestamp: (parameters: import("matter-types").Frontmatter, markdownParse: import("markdown-types").MarkdownParse, parameterName: "createdAt" | "updatedAt" | "deletedAt" | "createdFirstAt" | "openedAt") => number;
    tryParseDate: (dateString: string) => number | undefined;
    findCodeblocks: (markdownString: string) => string[];
    findCodespans: (markdownString: string) => string[];
    findEmbeds: (markdownString: string) => import("markdown-types").MarkdownEmbed[];
    findJsonInMarkdown: <T_48>(text?: string | undefined) => T_48 | undefined;
    findLinks: (markdownString: string) => import("markdown-types").MarkdownLink[];
    flattenMarkdownString: (markdownString: string, findFunction: (token: import("marked").marked.Token) => boolean) => import("marked").marked.Token[];
    flattenMarkedTokenRecursive: (token: import("marked").marked.Token, findFunction: (token: import("marked").marked.Token) => boolean) => import("marked").marked.Token[];
    trimCodeblock: (codeblock: string) => string;
    cleanupTimer: (uniqueId: string) => void;
    generateUniqueId: () => string;
    getNewPerformance: (label: string, uniqueId: string, isNew?: boolean | undefined) => import("measure-performance").PerformanceItem | undefined;
    generateId: () => string;
    generatePassword: typeof generatePassword;
    generateRandomString: (length: number) => string;
    generateTime: () => number;
    isEmail: typeof isEmail;
    getAssetInputType: (parameterName: string, valueType?: import("schema-types").SimplifiedSchemaType | undefined) => import("name-conventions").AssetInputType | undefined;
    getParameterContentType: (parameterName: string) => void;
    isCalculatedParameter: (parameterName: string) => boolean;
    isGeneratedParameterName: (parameterName: string) => void;
    getFullPath: (paths: string | string[] | undefined) => string;
    getLastPathsChunk: (paths: string | string[] | undefined) => string | undefined;
    usePath: () => {
        lastChunk: string | undefined;
        fullPath: string;
    };
    oneByOne: <T_49, U_9>(array: T_49[], callback: (instance: T_49, index: number) => Promise<U_9>) => Promise<U_9[]>;
    getDependenciesSummary: (operationName: string) => Promise<{
        coreDependencies: string[];
        operationDependencies: string[];
        packageDependencies: string[];
    }>;
    getOperationMetaData: (operationBasePath: string) => Promise<import("operation-util").OperationMetaData | undefined>;
    recalculateOperationIndexJson: (operationBasePath: string, manualProjectRoot?: string | undefined) => Promise<void>;
    parsePrimitiveArray: (string: string) => string[];
    parsePrimitiveBoolean: (string: string) => boolean | undefined;
    parsePrimitiveString: (string: string) => string;
    parsePrimitive: (string: string, simplifiedSchema?: any) => import("parse-primitive").PrimitiveResult;
    byteCount: typeof byteCount;
    calculatePathMetaData: (absolutePath: string) => Promise<import("code-types").PathMetaData | undefined>;
    categorizeFiles: ({ basePath, type, ignoreIndexFiles, }: {
        basePath: string | string[];
        ignoreIndexFiles?: boolean | undefined;
        type?: "code" | "data" | "text" | undefined;
    }) => Promise<import("code-types").CategorizedFilePaths>;
    getFolderSummary: (categorizedFiles: import("code-types").CategorizedFilePaths) => Promise<FolderSummary>;
    getPathMainComment: (absolutePath: string) => Promise<any>;
    sumSizeSummary: (filePaths: string[]) => Promise<SizeSummary>;
    isPlural: (parameterName: string) => boolean;
    isSingular: (parameterName: string) => boolean;
    pluralize: (parameterName: string) => string;
    singularize: (parameterName: string) => string;
    clickOnSpanTag: (props: {
        page: import("puppeteer-core").Page;
        spanText: string;
    }) => Promise<{
        success: boolean;
        message: string;
    } | undefined>;
    delay: (ms: number) => Promise<unknown>;
    facebookLogin: (props: import("puppeteer-utils").FacebookLoginPropsType) => Promise<void>;
    foundOrNotXpath: (props: {
        page: import("puppeteer-core").Page;
        selector: string;
    }) => Promise<{
        found: boolean;
        element?: any;
    }>;
    foundOrNot: (props: {
        page: import("puppeteer-core").Page;
        selector: string;
        timeoutMilliseconds?: number | undefined;
    }) => Promise<boolean>;
    getBrowserPageById: (browser: import("puppeteer").Browser, pageId: string) => Promise<import("puppeteer").Page | undefined>;
    getBrowserTabs: (browserInfo: import("browser-types").BrowserSession) => Promise<import("puppeteer-core").Page[]>;
    getBrowser: () => unknown;
    getChromeExecutablePath: () => "/usr/bin/google-chrome-stable" | "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    getConnectedBrowsers: () => Promise<import("browser-types").BrowserSession[]>;
    getIdlePage: (browser: import("puppeteer").Browser) => Promise<import("puppeteer").Page | undefined>;
    getNewPage: (browser: import("puppeteer").Browser) => Promise<import("puppeteer").Page | undefined>;
    gmailLogin: (props: import("puppeteer-utils").GmailLoginPropsType) => Promise<void>;
    isCaptchaExist: (page: import("puppeteer").Page) => Promise<{
        captchas: import("puppeteer-extra-plugin-recaptcha/dist/types").CaptchaInfo[];
    }>;
    logConsoleIfDebug: (props: {
        message: string;
        debug: boolean;
    }) => Promise<void>;
    openMultiTabs: (props: import("puppeteer-utils").OpenMultiTabProps) => Promise<void>;
    openNewBrowserOnChildProcess: () => Promise<void>;
    openNewBrowser: () => Promise<import("puppeteer").Browser | undefined>;
    openPage: (pageId?: string | undefined) => Promise<import("puppeteer").Page | undefined>;
    racePromises: (promises: Promise<any>[]) => Promise<number>;
    retryClickAndWaitSelector: (props: {
        page: any;
        selector: string | string[];
        selectorOptions?: any;
        selectorToClick: string;
        maxTime: number;
    }) => Promise<{
        success: boolean;
        found?: any;
    }>;
    retryWaitSelector: (props: {
        page: import("puppeteer-core").Page;
        selector: string;
        maxTime: number;
    }) => Promise<{
        success: boolean;
        found?: any;
    }>;
    setBrowserPageIdle: (pageId: string, status: boolean) => Promise<void>;
    setBrowserSession: (browser: import("puppeteer").Browser) => void;
    setInnerHtml: (props: {
        page: import("puppeteer-core").Page;
        selector: string;
        value: string;
    }) => Promise<void>;
    setInputValue: (params: {
        page: import("puppeteer-core").Page;
        selector: string;
        inputValue: string;
    }) => Promise<void>;
    solveReptcha: (page: import("puppeteer").Page) => Promise<import("puppeteer-extra-plugin-recaptcha/dist/types").SolveRecaptchasResult>;
    trueClick: (props: {
        page: import("puppeteer-core").Page;
        selector: string;
    }) => Promise<{
        success: boolean;
    }>;
    twitterLogin: (props: {
        page: import("puppeteer").Page;
    }) => Promise<void>;
    typeInTheInputField: (props: {
        page: import("puppeteer").Page;
        selector: string;
        value: string;
    }) => Promise<void>;
    typeOnTheTargetWithXpathSelector: (props: {
        page: import("puppeteer-core").Page;
        selector: string;
        text: string;
    }) => Promise<void>;
    waitMilliseconds: (milliseconds: number) => Promise<unknown>;
    getKeysAtPathFromNestedObject: <T_50 extends {
        [key: string]: any;
    }>(nestedObject: T_50, objectPath: string) => string[];
    getMenuPagesObject: <T_51>(flat: import("webpage-types").WebPage<T_51>[]) => import("webpage-types").MenuObjectType<T_51>;
    makeNestedObjectFromQueryPathObject: <T_52 extends import("recursive-util").QueryPathObject>(objectArray: T_52[], initialValue: import("recursive-types").NestedObject<T_52>) => import("recursive-types").NestedObject<T_52>;
    mapChildObjectRecursive: <T_53 extends {
        [key: string]: any;
    }, U_10 extends {
        [key: string]: any;
    }>(childObject: import("recursive-types").ChildObject<T_53>, mapFunction: (item: import("recursive-types").ChildObject<T_53>) => U_10) => import("recursive-types").ChildObject<U_10>;
    nestedObjectToChildObject: <T_54 extends {
        [key: string]: any;
    }>(nestedObject: import("recursive-types").NestedObject<T_54>, mapFolderToT: (nestedObject: import("recursive-types").NestedObject<T_54>, key: string) => T_54, stack?: string[] | undefined) => import("recursive-types").ChildObject<T_54>[];
    nestedPathObjectToNestedMenuRecursive: (nestedPathObject: import("recursive-types").NestedPathObject | null, pathStack?: string[] | undefined, config?: {
        target?: "_blank" | undefined;
        getHref?: ((fullPath: string) => string) | undefined;
    } | undefined) => import("nested-menu-types").MenuItemType[] | undefined;
    nestifyQueryPathObjectRecursive: <T_55 extends import("recursive-util").QueryPathObject>(queryPathObjects: T_55[], level?: number | undefined) => import("recursive-util").NestedQueryPathObject<T_55>[];
    queryPathsArrayToNestedPathObject: (queryPaths: string[]) => import("recursive-types").NestedPathObject;
    reduceQueryPathsRecursively: (queryPaths: string[], initialValue: import("recursive-types").NestedPathObject) => import("recursive-types").NestedPathObject;
    bodyFromQueryString: (query?: string | undefined) => import("rest-util").QueryableObject | undefined;
    getFirstQueryStrings: (query: import("rest-util").QueryableObject) => (string | undefined)[];
    getQueryPart: (strings: string[], queryKey: string) => string;
    isValidEntry: ([_, value]: [key: string, value: any]) => boolean;
    toQueryString: (query?: any) => string;
    runChildProcess: (config: {
        operationFolderName: string;
        scriptFileName: string;
        args?: (string | undefined)[] | undefined;
        isOverlapped?: boolean | undefined;
    }) => Promise<(string | null)[] | undefined>;
    findFirstCommentTypes: (strippedFullComment?: string | undefined) => import("comment-types").CommentTypeObject;
    getDataParameterNames: (item: import("model-types").AugmentedAnyModelType) => string[];
    getPossibleReferenceParameterNames: (parameterName: string) => string[];
    getProperties: (schema: import("json-schema").JSONSchema7 | undefined) => import("schema-util").SchemaProperty[];
    getRefLink: (ref?: string | undefined) => string | undefined;
    getReferencableModels: (simplifiedSchema?: import("schema-types").SimplifiedSchema | undefined) => import("schema-util").ReferenceParameterInfo[] | undefined;
    getReferenceParameterInfo: (parameterName: string) => import("schema-util").ReferenceParameterInfo;
    getSchemaItems: (schema: import("json-schema").JSONSchema7 | undefined) => import("json-schema").JSONSchema7[];
    getSchema: (maybeSchema: import("json-schema").JSONSchema7Definition | undefined) => import("json-schema").JSONSchema7 | undefined;
    simplifiedSchemaToTypeDefinitionString: (simplifiedSchema?: import("schema-types").SimplifiedSchema | undefined) => string;
    simplifySchema: (name: string | null, schema: import("json-schema").JSONSchema7, possibleRefs: {
        name: string;
        schema: import("json-schema").JSONSchema7;
    }[], rootStack: string[]) => import("schema-types").SimplifiedSchema | undefined;
    findSentenceMatches: <T_56>(searchMessage: string, array: T_56[], getSentence?: ((x: T_56) => string) | undefined) => T_56[];
    searchRecursiveObjectArray: <T_57 extends {
        children?: T_57[] | undefined;
    } & Object>(array: T_57[], baseMatcher: (item: T_57) => boolean, afterMapper?: ((item: T_57, isMatch: boolean, hasChildMatch: boolean) => T_57) | undefined) => T_57[];
    objectStringToJson: (string: string) => {
        [key: string]: import("string-to-json").JSONValue;
    };
    parseIfJson: (string: string) => any;
    parsePrimitiveJson: <TForceType extends "string" | "number" | "boolean">(value: string, forceType?: TForceType | undefined) => TForceType extends "string" ? string | null | undefined : TForceType extends "number" ? number | null | undefined : TForceType extends "boolean" ? boolean | null | undefined : string | number | boolean | null | undefined;
    stringToJson: (value: string, isObject?: boolean | undefined) => import("string-to-json").JSONValue;
    Tabs: (props: {
        title?: string | undefined;
        tabKey?: string | undefined;
        tabs: import("tabs").TabType[];
        isSmall?: boolean | undefined;
    }) => JSX.Element;
    getEncoding: typeof getEncoding;
    isBinary: typeof isBinary;
    isText: typeof isText;
    tryParseJson: <T_58>(text: string, logParseError?: boolean | undefined) => T_58 | null;
    createCodeblockMarkdown: (text: string, language?: string | null | undefined) => string;
    useCustomUrlStore: <T_59 extends string | number | boolean | string[] | boolean[] | number[] | undefined>(queryKey: string, config: import("use-url-store").CustomUrlStoreConfig) => [T_59, (newValue: T_59 | undefined) => Promise<boolean>];
    crudPageToWebPages: (pageData: import("webpage-types").CrudPage) => import("webpage-types").WebPage<import("webpage-types").CrudPage>[];
    functionFormPageToWebPage: (pageData: import("webpage-types").FunctionFormPage) => import("webpage-types").WebPage<import("webpage-types").FunctionFormPage>;
};
export type SdkType = typeof sdk;
//# sourceMappingURL=sdk-api.d.ts.map