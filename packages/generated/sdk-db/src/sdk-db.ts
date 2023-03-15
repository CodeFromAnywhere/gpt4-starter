// THIS FILE HAS BEEN GENERATED

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


export type DbModels = { AiDataset: AiDataset,AiDemoApp: AiDemoApp,AiModel: AiModel,ContextualPrompt: ContextualPrompt,ContextualPromptResult: ContextualPromptResult,GptIdeasUser: GptIdeasUser,Download: Download,OpenFile: OpenFile,AuthorizationModel: AuthorizationModel,BrowserPage: BrowserPage,BrowserSession: BrowserSession,BundleConfig: BundleConfig,FrontBackBundle: FrontBackBundle,Dataset: Dataset,Operation: Operation,TsBuildError: TsBuildError,TsConfig: TsConfig,TsExport: TsExport,TsImport: TsImport,TsInterface: TsInterface,TsLintWarning: TsLintWarning,TsVariable: TsVariable,TypescriptFile: TypescriptFile,TsComment: TsComment,FunctionExecution: FunctionExecution,TsFunction: TsFunction,Address: Address,Area: Area,City: City,Country: Country,Location: Location,KvmdWord: KvmdWord,MarkdownWord: MarkdownWord,NepaliEnglishTranslationMatrix: NepaliEnglishTranslationMatrix,Statement: Statement,TokiPonaMatrix: TokiPonaMatrix,Translation: Translation,Word: Word,WordCategory: WordCategory,WordCombination: WordCombination,WordMatrix: WordMatrix,MarkdownCallToAction: MarkdownCallToAction,SlugModelType: SlugModelType,PaymentCoupon: PaymentCoupon,PaymentEvent: PaymentEvent,PaymentPlan: PaymentPlan,PaymentRequest: PaymentRequest,PaymentSubscription: PaymentSubscription,PaymentTransaction: PaymentTransaction,Device: Device,Group: Group,PageVisit: PageVisit,PeerMessage: PeerMessage,Person: Person,Persona: Persona,PersonInformation: PersonInformation,PersonInformationValue: PersonInformationValue,PersonPlatformConnection: PersonPlatformConnection,Platform: Platform,Queue: Queue,ChatMessage: ChatMessage,Interest: Interest,MediaChannel: MediaChannel,MediaCredential: MediaCredential,MediaPost: MediaPost,SelfSprintReview: SelfSprintReview,TodoFile: TodoFile,TodoOffer: TodoOffer };
export const dbModelKeys = [ "AiDataset","AiDemoApp","AiModel","ContextualPrompt","ContextualPromptResult","GptIdeasUser","Download","OpenFile","AuthorizationModel","BrowserPage","BrowserSession","BundleConfig","FrontBackBundle","Dataset","Operation","TsBuildError","TsConfig","TsExport","TsImport","TsInterface","TsLintWarning","TsVariable","TypescriptFile","TsComment","FunctionExecution","TsFunction","Address","Area","City","Country","Location","KvmdWord","MarkdownWord","NepaliEnglishTranslationMatrix","Statement","TokiPonaMatrix","Translation","Word","WordCategory","WordCombination","WordMatrix","MarkdownCallToAction","SlugModelType","PaymentCoupon","PaymentEvent","PaymentPlan","PaymentRequest","PaymentSubscription","PaymentTransaction","Device","Group","PageVisit","PeerMessage","Person","Persona","PersonInformation","PersonInformationValue","PersonPlatformConnection","Platform","Queue","ChatMessage","Interest","MediaChannel","MediaCredential","MediaPost","SelfSprintReview","TodoFile","TodoOffer" ] as const;
export type DbModelEnum = typeof dbModelKeys[number];
export const modelQueryConfig = {
    AiDataset: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
AiDemoApp: {
          
          
          dbStorageMethod: "jsonSingle",
          
        },
AiModel: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
ContextualPrompt: {
          
          
          dbStorageMethod: "jsonSingle",
          
        },
ContextualPromptResult: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
GptIdeasUser: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Download: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
OpenFile: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
AuthorizationModel: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
BrowserPage: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
BrowserSession: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
BundleConfig: {
          
          
          dbStorageMethod: "jsonSingle",
          
        },
FrontBackBundle: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Dataset: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Operation: {
          operationName: "*",
          
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "package.json",
        },
TsBuildError: {
          operationName: "*",
          
          dbStorageMethod: "jsonMultiple",
          
        },
TsConfig: {
          operationName: "*",
          
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "tsconfig.json",
        },
TsExport: {
          operationName: "*",
          
          dbStorageMethod: "jsonMultiple",
          
        },
TsImport: {
          operationName: "*",
          
          dbStorageMethod: "jsonMultiple",
          
        },
TsInterface: {
          operationName: "*",
          
          dbStorageMethod: "jsonSingle",
          
        },
TsLintWarning: {
          operationName: "*",
          
          dbStorageMethod: "jsonMultiple",
          
        },
TsVariable: {
          operationName: "*",
          
          dbStorageMethod: "jsonSingle",
          
        },
TypescriptFile: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
TsComment: {
          operationName: "*",
          
          dbStorageMethod: "jsonMultiple",
          
        },
FunctionExecution: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
TsFunction: {
          operationName: "*",
          
          dbStorageMethod: "jsonSingle",
          
        },
Address: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Area: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
City: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Country: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Location: {
          
          
          dbStorageMethod: "keyValueMarkdown",
          
        },
KvmdWord: {
          
          
          dbStorageMethod: "keyValueMarkdown",
          
        },
MarkdownWord: {
          
          
          dbStorageMethod: "markdown",
          
        },
NepaliEnglishTranslationMatrix: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Statement: {
          
          
          dbStorageMethod: "jsonSingle",
          
        },
TokiPonaMatrix: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Translation: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Word: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
WordCategory: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
WordCombination: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
WordMatrix: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
MarkdownCallToAction: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
SlugModelType: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
PaymentCoupon: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
PaymentEvent: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
PaymentPlan: {
          
          
          dbStorageMethod: "markdown",
          
        },
PaymentRequest: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
PaymentSubscription: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
PaymentTransaction: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Device: {
          
          
          dbStorageMethod: "jsonSingle",
          
        },
Group: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
PageVisit: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
PeerMessage: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Person: {
          
          projectRelativePath: "operations/tools/purpose/p2p/peer-types/src/person/persons.json",
          dbStorageMethod: "jsonMultiple",
          
        },
Persona: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
PersonInformation: {
          
          
          dbStorageMethod: "keyValueMarkdown",
          
        },
PersonInformationValue: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
PersonPlatformConnection: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Platform: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Queue: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
ChatMessage: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
Interest: {
          
          
          dbStorageMethod: "keyValueMarkdown",
          
        },
MediaChannel: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
MediaCredential: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        },
MediaPost: {
          
          
          dbStorageMethod: "markdown",
          
        },
SelfSprintReview: {
          
          
          dbStorageMethod: "jsonSingle",
          
        },
TodoFile: {
          
          
          dbStorageMethod: "markdown",
          
        },
TodoOffer: {
          
          
          dbStorageMethod: "jsonMultiple",
          
        }
  };
// THANK YOU
