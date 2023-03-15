import type { AiDataset } from "ai-types";
import type { AiDemoApp } from "ai-types";
import type { AiModel } from "ai-types";
import type { ContextualPrompt } from "ai-types";
import type { ContextualPromptResult } from "ai-types";
import type { GptIdeasUser } from "ai-types";
import type { Download } from "asset-type";
import type { OpenFile } from "asset-type";
import type { AuthorizationModel } from "auth-types";
import type { BrowserPage } from "browser-types";
import type { BrowserSession } from "browser-types";
import type { BundleConfig } from "bundle-types";
import type { FrontBackBundle } from "bundle-types";
import type { Dataset } from "code-types";
import type { Operation } from "code-types";
import type { TsBuildError } from "code-types";
import type { TsConfig } from "code-types";
import type { TsExport } from "code-types";
import type { TsImport } from "code-types";
import type { TsInterface } from "code-types";
import type { TsLintWarning } from "code-types";
import type { TsVariable } from "code-types";
import type { TypescriptFile } from "code-types";
import type { TsComment } from "comment-types";
import type { FunctionExecution } from "function-types";
import type { TsFunction } from "function-types";
import type { Address } from "geo-types";
import type { Area } from "geo-types";
import type { City } from "geo-types";
import type { Country } from "geo-types";
import type { Location } from "geo-types";
import type { KvmdWord } from "language-types";
import type { MarkdownWord } from "language-types";
import type { NepaliEnglishTranslationMatrix } from "language-types";
import type { Statement } from "language-types";
import type { TokiPonaMatrix } from "language-types";
import type { Translation } from "language-types";
import type { Word } from "language-types";
import type { WordCategory } from "language-types";
import type { WordCombination } from "language-types";
import type { WordMatrix } from "language-types";
import type { MarkdownCallToAction } from "markdown-types";
import type { SlugModelType } from "model-types";
import type { PaymentCoupon } from "payment-types";
import type { PaymentEvent } from "payment-types";
import type { PaymentPlan } from "payment-types";
import type { PaymentRequest } from "payment-types";
import type { PaymentSubscription } from "payment-types";
import type { PaymentTransaction } from "payment-types";
import type { Device } from "peer-types";
import type { Group } from "peer-types";
import type { PageVisit } from "peer-types";
import type { PeerMessage } from "peer-types";
import type { Person } from "peer-types";
import type { Persona } from "peer-types";
import type { PersonInformation } from "peer-types";
import type { PersonInformationValue } from "peer-types";
import type { PersonPlatformConnection } from "peer-types";
import type { Platform } from "peer-types";
import type { Queue } from "queue-types";
import type { ChatMessage } from "social-media-types";
import type { Interest } from "social-media-types";
import type { MediaChannel } from "social-media-types";
import type { MediaCredential } from "social-media-types";
import type { MediaPost } from "social-media-types";
import type { SelfSprintReview } from "todo-types";
import type { TodoFile } from "todo-types";
import type { TodoOffer } from "todo-types";
export type DbModels = {
    AiDataset: AiDataset;
    AiDemoApp: AiDemoApp;
    AiModel: AiModel;
    ContextualPrompt: ContextualPrompt;
    ContextualPromptResult: ContextualPromptResult;
    GptIdeasUser: GptIdeasUser;
    Download: Download;
    OpenFile: OpenFile;
    AuthorizationModel: AuthorizationModel;
    BrowserPage: BrowserPage;
    BrowserSession: BrowserSession;
    BundleConfig: BundleConfig;
    FrontBackBundle: FrontBackBundle;
    Dataset: Dataset;
    Operation: Operation;
    TsBuildError: TsBuildError;
    TsConfig: TsConfig;
    TsExport: TsExport;
    TsImport: TsImport;
    TsInterface: TsInterface;
    TsLintWarning: TsLintWarning;
    TsVariable: TsVariable;
    TypescriptFile: TypescriptFile;
    TsComment: TsComment;
    FunctionExecution: FunctionExecution;
    TsFunction: TsFunction;
    Address: Address;
    Area: Area;
    City: City;
    Country: Country;
    Location: Location;
    KvmdWord: KvmdWord;
    MarkdownWord: MarkdownWord;
    NepaliEnglishTranslationMatrix: NepaliEnglishTranslationMatrix;
    Statement: Statement;
    TokiPonaMatrix: TokiPonaMatrix;
    Translation: Translation;
    Word: Word;
    WordCategory: WordCategory;
    WordCombination: WordCombination;
    WordMatrix: WordMatrix;
    MarkdownCallToAction: MarkdownCallToAction;
    SlugModelType: SlugModelType;
    PaymentCoupon: PaymentCoupon;
    PaymentEvent: PaymentEvent;
    PaymentPlan: PaymentPlan;
    PaymentRequest: PaymentRequest;
    PaymentSubscription: PaymentSubscription;
    PaymentTransaction: PaymentTransaction;
    Device: Device;
    Group: Group;
    PageVisit: PageVisit;
    PeerMessage: PeerMessage;
    Person: Person;
    Persona: Persona;
    PersonInformation: PersonInformation;
    PersonInformationValue: PersonInformationValue;
    PersonPlatformConnection: PersonPlatformConnection;
    Platform: Platform;
    Queue: Queue;
    ChatMessage: ChatMessage;
    Interest: Interest;
    MediaChannel: MediaChannel;
    MediaCredential: MediaCredential;
    MediaPost: MediaPost;
    SelfSprintReview: SelfSprintReview;
    TodoFile: TodoFile;
    TodoOffer: TodoOffer;
};
export declare const dbModelKeys: readonly ["AiDataset", "AiDemoApp", "AiModel", "ContextualPrompt", "ContextualPromptResult", "GptIdeasUser", "Download", "OpenFile", "AuthorizationModel", "BrowserPage", "BrowserSession", "BundleConfig", "FrontBackBundle", "Dataset", "Operation", "TsBuildError", "TsConfig", "TsExport", "TsImport", "TsInterface", "TsLintWarning", "TsVariable", "TypescriptFile", "TsComment", "FunctionExecution", "TsFunction", "Address", "Area", "City", "Country", "Location", "KvmdWord", "MarkdownWord", "NepaliEnglishTranslationMatrix", "Statement", "TokiPonaMatrix", "Translation", "Word", "WordCategory", "WordCombination", "WordMatrix", "MarkdownCallToAction", "SlugModelType", "PaymentCoupon", "PaymentEvent", "PaymentPlan", "PaymentRequest", "PaymentSubscription", "PaymentTransaction", "Device", "Group", "PageVisit", "PeerMessage", "Person", "Persona", "PersonInformation", "PersonInformationValue", "PersonPlatformConnection", "Platform", "Queue", "ChatMessage", "Interest", "MediaChannel", "MediaCredential", "MediaPost", "SelfSprintReview", "TodoFile", "TodoOffer"];
export type DbModelEnum = typeof dbModelKeys[number];
export declare const modelQueryConfig: {
    AiDataset: {
        dbStorageMethod: string;
    };
    AiDemoApp: {
        dbStorageMethod: string;
    };
    AiModel: {
        dbStorageMethod: string;
    };
    ContextualPrompt: {
        dbStorageMethod: string;
    };
    ContextualPromptResult: {
        dbStorageMethod: string;
    };
    GptIdeasUser: {
        dbStorageMethod: string;
    };
    Download: {
        dbStorageMethod: string;
    };
    OpenFile: {
        dbStorageMethod: string;
    };
    AuthorizationModel: {
        dbStorageMethod: string;
    };
    BrowserPage: {
        dbStorageMethod: string;
    };
    BrowserSession: {
        dbStorageMethod: string;
    };
    BundleConfig: {
        dbStorageMethod: string;
    };
    FrontBackBundle: {
        dbStorageMethod: string;
    };
    Dataset: {
        dbStorageMethod: string;
    };
    Operation: {
        operationName: string;
        dbStorageMethod: string;
        operationRelativePath: string;
    };
    TsBuildError: {
        operationName: string;
        dbStorageMethod: string;
    };
    TsConfig: {
        operationName: string;
        dbStorageMethod: string;
        operationRelativePath: string;
    };
    TsExport: {
        operationName: string;
        dbStorageMethod: string;
    };
    TsImport: {
        operationName: string;
        dbStorageMethod: string;
    };
    TsInterface: {
        operationName: string;
        dbStorageMethod: string;
    };
    TsLintWarning: {
        operationName: string;
        dbStorageMethod: string;
    };
    TsVariable: {
        operationName: string;
        dbStorageMethod: string;
    };
    TypescriptFile: {
        dbStorageMethod: string;
    };
    TsComment: {
        operationName: string;
        dbStorageMethod: string;
    };
    FunctionExecution: {
        dbStorageMethod: string;
    };
    TsFunction: {
        operationName: string;
        dbStorageMethod: string;
    };
    Address: {
        dbStorageMethod: string;
    };
    Area: {
        dbStorageMethod: string;
    };
    City: {
        dbStorageMethod: string;
    };
    Country: {
        dbStorageMethod: string;
    };
    Location: {
        dbStorageMethod: string;
    };
    KvmdWord: {
        dbStorageMethod: string;
    };
    MarkdownWord: {
        dbStorageMethod: string;
    };
    NepaliEnglishTranslationMatrix: {
        dbStorageMethod: string;
    };
    Statement: {
        dbStorageMethod: string;
    };
    TokiPonaMatrix: {
        dbStorageMethod: string;
    };
    Translation: {
        dbStorageMethod: string;
    };
    Word: {
        dbStorageMethod: string;
    };
    WordCategory: {
        dbStorageMethod: string;
    };
    WordCombination: {
        dbStorageMethod: string;
    };
    WordMatrix: {
        dbStorageMethod: string;
    };
    MarkdownCallToAction: {
        dbStorageMethod: string;
    };
    SlugModelType: {
        dbStorageMethod: string;
    };
    PaymentCoupon: {
        dbStorageMethod: string;
    };
    PaymentEvent: {
        dbStorageMethod: string;
    };
    PaymentPlan: {
        dbStorageMethod: string;
    };
    PaymentRequest: {
        dbStorageMethod: string;
    };
    PaymentSubscription: {
        dbStorageMethod: string;
    };
    PaymentTransaction: {
        dbStorageMethod: string;
    };
    Device: {
        dbStorageMethod: string;
    };
    Group: {
        dbStorageMethod: string;
    };
    PageVisit: {
        dbStorageMethod: string;
    };
    PeerMessage: {
        dbStorageMethod: string;
    };
    Person: {
        projectRelativePath: string;
        dbStorageMethod: string;
    };
    Persona: {
        dbStorageMethod: string;
    };
    PersonInformation: {
        dbStorageMethod: string;
    };
    PersonInformationValue: {
        dbStorageMethod: string;
    };
    PersonPlatformConnection: {
        dbStorageMethod: string;
    };
    Platform: {
        dbStorageMethod: string;
    };
    Queue: {
        dbStorageMethod: string;
    };
    ChatMessage: {
        dbStorageMethod: string;
    };
    Interest: {
        dbStorageMethod: string;
    };
    MediaChannel: {
        dbStorageMethod: string;
    };
    MediaCredential: {
        dbStorageMethod: string;
    };
    MediaPost: {
        dbStorageMethod: string;
    };
    SelfSprintReview: {
        dbStorageMethod: string;
    };
    TodoFile: {
        dbStorageMethod: string;
    };
    TodoOffer: {
        dbStorageMethod: string;
    };
};
//# sourceMappingURL=sdk-db.d.ts.map