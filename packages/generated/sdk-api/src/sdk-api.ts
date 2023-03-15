import { addEmojiToEveryWord } from "ai-functions-node";
import { addStatement } from "ai-functions-node";
import { addWord } from "ai-functions-node";
import { biggestFunctionName } from "ai-functions-node";
import { checkQueue } from "ai-functions-node";
import { cleanup } from "ai-functions-node";
import { controlChatGptWrapper } from "ai-functions-node";
import { deletePromptResult } from "ai-functions-node";
import { developersQuote } from "ai-functions-node";
import { diaryToInstagram } from "ai-functions-node";
import { documentationWriting } from "ai-functions-node";
import { emojiAugmentation } from "ai-functions-node";
import { explainInDutch } from "ai-functions-node";
import { explainInNepali } from "ai-functions-node";
import { explainInPortuguese } from "ai-functions-node";
import { explainLineByLine } from "ai-functions-node";
import { explain } from "ai-functions-node";
import { fixGrammarAndSpellingMistakes } from "ai-functions-node";
import { followUpQuestions } from "ai-functions-node";
import { getContextualPromptCategories } from "ai-functions-node";
import { getContextualPromptResultJsonFilePath } from "ai-functions-node";
import { getContextualPrompt } from "ai-functions-node";
import { getObjectForkKeyRecursively } from "ai-functions-node";
import { getQueueStatus } from "ai-functions-node";
import { getToolFunctions } from "ai-functions-node";
import { haiku } from "ai-functions-node";
import { hookOneliners } from "ai-functions-node";
import { improveCode } from "ai-functions-node";
import { investorPitch } from "ai-functions-node";
import { marcusAurelius } from "ai-functions-node";
import { opposite } from "ai-functions-node";
import { outlineToInvestorPitch } from "ai-functions-node";
import { poem } from "ai-functions-node";
import { processChatGptPrompt } from "ai-functions-node";
import { processPromptOnFile } from "ai-functions-node";
import { processPromptOnFolderWithContext } from "ai-functions-node";
import { quiz } from "ai-functions-node";
import { removeAllFake } from "ai-functions-node";
import { rickAndMortyRick } from "ai-functions-node";
import { rickAndMorty } from "ai-functions-node";
import { setIsFavoritePromptResult } from "ai-functions-node";
import { shouldAddToQueue } from "ai-functions-node";
import { socratesAndSnoopDogg } from "ai-functions-node";
import { storytelling } from "ai-functions-node";
import { summarizeMeetingWithContext } from "ai-functions-node";
import { toolFunctionWithContext } from "ai-functions-node";
import { translateEverythingIntoHindi } from "ai-functions-node";
import { translateEverythingPortuguese } from "ai-functions-node";
import { translateEverything } from "ai-functions-node";
import { translateToPortuguese } from "ai-functions-node";
import { typescriptExplain } from "ai-functions-node";
import { williamShakespear } from "ai-functions-node";
import { writeContextualPromptSdk } from "ai-functions-node";
import { writeCreatePromptCode } from "ai-functions-node";
import { ye } from "ai-functions-node";
import { yodafy } from "ai-functions-node";
import { getGroupOrPersonId } from "ai-models";
import { imageToText } from "ai-models";
import { languageTranslation } from "ai-models";
import { musicTrackSeparation } from "ai-models";
import { speakerSeparation } from "ai-models";
import { speechToText } from "ai-models";
import { textToImage } from "ai-models";
import { textToSpeech } from "ai-models";
import { textToText } from "ai-models";
import { copyCopyPairs } from "collect-static-assets";
import { copyReaderStaticAssets } from "collect-static-assets";
import { findReaderStaticAssets } from "collect-static-assets";
import { findStaticAssets } from "collect-static-assets";
import { receiveTwilioMessageWithContextRaw } from "communication-wrapper";
import { sendMail } from "communication-wrapper";
import { sendMessage } from "communication-wrapper";
import { sendSms } from "communication-wrapper";
import { sendTwilioMessage } from "communication-wrapper";
import { trySendMessage } from "communication-wrapper";
import { calculateMessagesTokenCount } from "openai-wrapper";
import { calculateOpenaiMessagesTokenCountSum } from "openai-wrapper";
import { calculateOpenaiMessagesTokenCount } from "openai-wrapper";
import { calculateTokenCount } from "openai-wrapper";
import { chatCompletion } from "openai-wrapper";
import { chat } from "openai-wrapper";
import { getOpenaiInstance } from "openai-wrapper";
import { gpt3 } from "openai-wrapper";
import { messagesToTokenableText } from "openai-wrapper";
import { whisper } from "openai-wrapper";
import { executeWatcherOnFilepath } from "watch-all";
import { getQueueItems } from "watch-all";
import { watchAll } from "watch-all";
import { watchAudioVideoDoc } from "watch-audio-video-doc";
import { watchMp3WithoutWav } from "watch-audio-video-doc";
import { watchMp4WithoutWav } from "watch-audio-video-doc";
import { watchWavToSpeakers } from "watch-audio-video-doc";
import { watchWavToSpeech } from "watch-audio-video-doc";
import { watchWavWithoutMp3 } from "watch-audio-video-doc";
import { exploreBadNamingFiles } from "watch-bad-naming";
import { isBadName } from "watch-bad-naming";
import { renameAllBadlyNamedFiles } from "watch-bad-naming";
import { renameBadlyNamedFile } from "watch-bad-naming";
import { watchBadNaming } from "watch-bad-naming";
import { getBetterLocation } from "watch-markdown";
import { getIsPrivate } from "watch-markdown";
import { makeMarkdownIndex } from "watch-markdown";
import { watchMarkdown } from "watch-markdown";
import { getRecordingType } from "watch-mp3-transcriptions";
import { transcriptionToGptChunks } from "watch-mp3-transcriptions";
import { watchMp3Transcriptions } from "watch-mp3-transcriptions";
import { getYoutubeVideoUrls } from "watch-system-recordings";
import { watchAppleMemos } from "watch-system-recordings";
import { createTranscriptionJson } from "whisper-local";
import { getTranslationText } from "whisper-local";
import { isWav16bit } from "whisper-local";
import { readTranscriptionCsv } from "whisper-local";
import { whisperLocalCpp } from "whisper-local";
import { allOperationsRemoveJsSrc } from "all";
import { allOperationsToMarkdown } from "all";
import { clearAllTsDatabases } from "all";
import { codeAll } from "all";
import { forAllFiles } from "all";
import { forAllFolders } from "all";
import { getAllOperationClassifications } from "all";
import { gitShipAllRepos } from "all";
import { mdAllOperations } from "all";
import { minifyAllOperations } from "all";
import { publishAllOperations } from "all";
import { removeAllFiles } from "all";
import { removeAllFolders } from "all";
import { removeAll } from "all";
import { renameAll } from "all";
import { runScriptEverywhere } from "all";
import { setScriptEverywhere } from "all";
import { askOk } from "ask";
import { ask } from "ask";
import { getArgumentOrAsk } from "ask";
import { compressAsset } from "asset-functions-node";
import { createDownloadWithContext } from "asset-functions-node";
import { deleteReferencedAsset } from "asset-functions-node";
import { downloadGetApi } from "asset-functions-node";
import { downloadRemoteAsset } from "asset-functions-node";
import { findAbsoluteAssetPathFromReference } from "asset-functions-node";
import { findAllProjectMedia } from "asset-functions-node";
import { findDownload } from "asset-functions-node";
import { getAssetDirectlyGetApi } from "asset-functions-node";
import { getReferencedAssetGetApi } from "asset-functions-node";
import { getStorageLocationInfo } from "asset-functions-node";
import { getTemporaryAssetsFolderPath } from "asset-functions-node";
import { makeDownloadableFile } from "asset-functions-node";
import { processAsset } from "asset-functions-node";
import { processItemAssets } from "asset-functions-node";
import { removeOldTemporaryAssets } from "asset-functions-node";
import { serverDownloadReply } from "asset-functions-node";
import { uploadAssetWithContext } from "asset-functions-node";
import { getAugmentedWordObject } from "augmented-word-node";
import { getAugmentedWords } from "augmented-word-node";
import { getBundleAugmentedWords } from "augmented-word-node";
import { bananaCarrot } from "bananadev-wrapper";
import { bananaStableDiffusion } from "bananadev-wrapper";
import { bananaWhisper } from "bananadev-wrapper";
import { getBatteryLevelPercentage } from "battery";
import { isSystemUsingBattery } from "battery";
import { getBundleSummary } from "bundle-util";
import { getDbModelsForBundle } from "bundle-util";
import { generateInstantResponseMessage } from "chat";
import { getChatMessageAnalysis } from "chat";
import { getCostPerMessageCredit } from "chat";
import { getCredit } from "chat";
import { getMessageLimitInfo } from "chat";
import { getMessagesAmountCheap } from "chat";
import { getMessagesAmountMore } from "chat";
import { getMinimumCredit } from "chat";
import { getPaywallResult } from "chat";
import { getPersonaStatistics } from "chat";
import { getSystemMessageOtherLanguage } from "chat";
import { getSystemMessage } from "chat";
import { jsonGpt } from "chat";
import { proactiveOutreach } from "chat";
import { processMessage } from "chat";
import { sendChatAiStatsUpdate } from "chat";
import { sendDailyAlarmSms } from "chat";
import { truncateMessages } from "chat";
import { weeklyMail } from "chat";
import { getChatMessagesPath } from "chat-message-orm";
import { getChatMessages } from "chat-message-orm";
import { getPersonPath } from "chat-message-orm";
import { getPersonSlug } from "chat-message-orm";
import { getPerson } from "chat-message-orm";
import { insertChatMessages } from "chat-message-orm";
import { setPerson } from "chat-message-orm";
import { chatGPTAuth } from "chatgpt-controller";
import { detectChatGptPage } from "chatgpt-controller";
import { openAIChat } from "chatgpt-controller";
import { execAsync } from "child-process-helper";
import { spawnAsync } from "child-process-helper";
import { cleanupTsDatabase } from "cleanup-typescript-database";
import { shouldDeleteTsModel } from "cleanup-typescript-database";
import { csvItemArrayToCsvString } from "csv-util";
import { tryParseCsv } from "csv-util";
import { generateCsvInstance } from "database";
import { generateJsonSingleInstance } from "database";
import { generateKvmdInstance } from "database";
import { generateMarkdownInstance } from "database";
import { generateSlugTestModel } from "database";
import { getMergedQueryConfig } from "database";
import { randomName } from "database";
import { runModelEndToEndTest } from "database";
import { testOperationModels } from "database";
import { cacheLookup } from "db-recipes";
import { calculateOperatingSystemBundle } from "db-recipes";
import { deleteDbModelWithContext } from "db-recipes";
import { getDatabaseMenu } from "db-recipes";
import { getDbModelMetadataWithContext } from "db-recipes";
import { getDbModelNames } from "db-recipes";
import { getDbModelWithContext } from "db-recipes";
import { getFunctionIndex } from "db-recipes";
import { getNestedDatabaseMenu } from "db-recipes";
import { getReferencableModelDataWithContext } from "db-recipes";
import { getTsInterface } from "db-recipes";
import { hasDataPermissions } from "db-recipes";
import { hasDbRecipes } from "db-recipes";
import { makeSrcRelativeFolder } from "db-recipes";
import { tsInterfaceToDbMenu } from "db-recipes";
import { upsertDbModelWithContext } from "db-recipes";
import { validateInput } from "db-recipes";
import { validateResult } from "db-recipes";
import { filterInterfacesFromOperationNames } from "db-util";
import { getDbModelsFromOperations } from "db-util";
import { detectFolderLanguage } from "detect-language";
import { detectLanguage } from "detect-language";
import { docToMd } from "doc-to-md";
import { docxToMd } from "doc-to-md";
import { docsGetPages } from "docs-get-pages";
import { getMarkdownReaderPages } from "docs-get-pages";
import { getPublicMarkdownFilePaths } from "docs-get-pages";
import { removeExtensionsFromPath } from "docs-get-pages";
import { removeNumberPrefix } from "docs-get-pages";
import { shouldExposeMarkdownFile } from "docs-get-pages";
import { stripReadmeFromFolder } from "docs-get-pages";
import { mapArrayJson } from "edit-json-file";
import { mapObjectJson } from "edit-json-file";
import { exploreOperation } from "explore-project";
import { exploreProject } from "explore-project";
import { getExplorationType } from "explore-project";
import { getFileWithExtension } from "explore-project";
import { getFolderExplorationDetails } from "explore-project";
import { getFrontmattersMappedObject } from "explore-project";
import { getInstanceNames } from "explore-project";
import { getProjectRelativePaths } from "explore-project";
import { getTodoPages } from "explore-project";
import { getTodoPaths } from "explore-project";
import { hasSameProjectPath } from "explore-project";
import { compressConvert } from "ffmpeg-util";
import { compressImages } from "ffmpeg-util";
import { compressMp4 } from "ffmpeg-util";
import { convertToMp3 } from "ffmpeg-util";
import { convertToMp4 } from "ffmpeg-util";
import { getFileCollectionPathsWithContext } from "file-collection-functions";
import { getFileCollectionStatusWithContext } from "file-collection-functions";
import { getFileCollectionWithContext } from "file-collection-functions";
import { getFolderContents } from "file-collection-functions";
import { getFolderFileCollections } from "file-collection-functions";
import { getNavigationWithContext } from "file-collection-functions";
import { getOpenFilesWithContext } from "file-collection-functions";
import { getQueryInfo } from "file-collection-functions";
import { removeInactiveOpenFiles } from "file-collection-functions";
import { setOpenFileWithContext } from "file-collection-functions";
import { getFileCollectionBasename } from "file-collection-util";
import { getFileCollectionPaths } from "file-collection-util";
import { getMarkdownIndexPath } from "file-collection-util";
import { getMarkdownIndex } from "file-collection-util";
import { getOnlyUniqueFileCollectionsFromDirentsFilter } from "file-collection-util";
import { getPrimaryFileFromFileCollection } from "file-collection-util";
import { isFileCollection } from "file-collection-util";
import { onlyUniqueFileCollectionsFilter } from "file-collection-util";
import { readFolderFileCollections } from "file-collection-util";
import { renameFileCollectionWithContext } from "file-collection-util";
import { renameFileCollection } from "file-collection-util";
import { updateMarkdownIndex } from "file-collection-util";
import { fileExplorerOpen } from "file-explorer-open";
import { findAllDependencyOperations } from "find-all-dependency-operations";
import { findDependantsRecursively } from "find-all-dependency-operations";
import { findDependants } from "find-all-dependency-operations";
import { findDependenciesRecursively } from "find-all-dependency-operations";
import { findMonorepoExports } from "find-all-dependency-operations";
import { findMonorepoImports } from "find-all-dependency-operations";
import { findMonorepoModules } from "find-all-dependency-operations";
import { getDependencyObject } from "find-all-dependency-operations";
import { getDependencyTree } from "find-all-dependency-operations";
import { getOldDependencyTree } from "find-all-dependency-operations";
import { getOperationDependencyReasons } from "find-all-dependency-operations";
import { folderGetUpdatedAt } from "folder-get-updated-at";
import { getFsAuthorizationSingleFile } from "fs-authorization";
import { getFsAuthorizationTestables } from "fs-authorization";
import { getFsAuthorizationWithContext } from "fs-authorization";
import { addDefaultValues } from "fs-orm";
import { alterAny } from "fs-orm";
import { alterCsv } from "fs-orm";
import { alterJsonMultiple } from "fs-orm";
import { alterJsonSingle } from "fs-orm";
import { alterKeyValueMarkdown } from "fs-orm";
import { alterMarkdown } from "fs-orm";
import { augmentItemWithReferencedDataRecursively } from "fs-orm";
import { calculateOperationsObject } from "fs-orm";
import { createDb } from "fs-orm";
import { findParent } from "fs-orm";
import { getAugmentedData } from "fs-orm";
import { getDatabaseFiles } from "fs-orm";
import { getDatabaseRootFolder } from "fs-orm";
import { getDbFileLocation } from "fs-orm";
import { getDbStorageMethodExtension } from "fs-orm";
import { getDefaultLocationPattern } from "fs-orm";
import { getItemModelLocation } from "fs-orm";
import { getLength } from "fs-orm";
import { getLocationPattern } from "fs-orm";
import { getMergedConfigOperationPath } from "fs-orm";
import { getParentSlug } from "fs-orm";
import { getRootFolders } from "fs-orm";
import { getWildcardDbFileLocations__OLD } from "fs-orm";
import { getWildcardDbFileLocations } from "fs-orm";
import { groupByFile } from "fs-orm";
import { makeStoringItem } from "fs-orm";
import { mergeConfigs } from "fs-orm";
import { removeKeyValueMarkdown } from "fs-orm";
import { removeMultiple } from "fs-orm";
import { upsertItems } from "fs-orm";
import { upsertKeyValueMarkdown } from "fs-orm";
import { upsert } from "fs-orm";
import { waitForLockfile } from "fs-orm";
import { getExtension } from "fs-util-js";
import { getFileOrFolderName } from "fs-util-js";
import { getFolderJs } from "fs-util-js";
import { getSubExtension } from "fs-util-js";
import { isPathRelative } from "fs-util-js";
import { makeRelative } from "fs-util-js";
import { removeTrailingSlash } from "fs-util-js";
import { withoutExtension } from "fs-util-js";
import { withoutSubExtensions } from "fs-util-js";
import { getFileFunctions } from "function-functions-node";
import { getFunctionExecutions } from "function-functions-node";
import { getFunctionQueryPaths } from "function-functions-node";
import { getPublicBundleConfig } from "function-functions-node";
import { getSrcRelativeFolderPath } from "function-functions-node";
import { getTsFunction } from "function-functions-node";
import { isPathParameter } from "function-functions-node";
import { calculateDeviceName } from "function-server-endpoints";
import { executeFunctionWithParameters } from "function-server-endpoints";
import { getAuthorizationInfo } from "function-server-endpoints";
import { isGetEndpoint } from "function-server-endpoints";
import { isRawEndpoint } from "function-server-endpoints";
import { savePageVisit } from "function-server-endpoints";
import { storeFunctionExecution } from "function-server-endpoints";
import { upsertDevice } from "function-server-endpoints";
import { generateNamedIndex } from "generate-index";
import { generateSimpleIndex } from "generate-index";
import { isTestFn } from "generate-index";
import { mapToImportStatement } from "generate-index";
import { augmentMarkdown } from "generative-functions-node";
import { getContextualPromptResults } from "generative-functions-node";
import { getContextualPromptsArray } from "generative-functions-node";
import { getContextualPrompts } from "generative-functions-node";
import { getFolderRelativeScopeDbFilePath } from "generative-functions-node";
import { makeMarkdownLink } from "generative-functions-node";
import { getImportedDependencies } from "get-imported-dependencies";
import { getPackage } from "get-imported-dependencies";
import { isAbsoluteImport } from "get-imported-dependencies";
import { calculatePackageJsonDependencies } from "get-imports-exports";
import { findAndWriteImportsExports } from "get-imports-exports";
import { getDefaultSymbolType } from "get-imports-exports";
import { getExportSpecifierNames } from "get-imports-exports";
import { getExportSymbolTypeRecursive } from "get-imports-exports";
import { getImportSpecifiersWithNames } from "get-imports-exports";
import { getImportsExports } from "get-imports-exports";
import { getPackageNameFromAbsoluteImport } from "get-imports-exports";
import { getSymbolTypeDeclarations } from "get-imports-exports";
import { getTypeFromImportSpecifierRecursive } from "get-imports-exports";
import { isAbsoluteImportBuiltin } from "get-imports-exports";
import { isImportFromOptionalFile } from "get-imports-exports";
import { writeResult } from "get-imports-exports";
import { getOperationBins } from "get-package-json";
import { getOperationPackageName } from "get-package-json";
import { getPackageJson } from "get-package-json";
import { getPackageSourcePaths } from "get-package-source-paths";
import { getAllOperations } from "github-operation-sync";
import { getAllPackagesNames } from "github-operation-sync";
import { getGithubPersonalAccessToken } from "github-operation-sync";
import { getGithubRepoLastCommitInfo } from "github-operation-sync";
import { getRepoNameFromRepositoryUrl } from "github-operation-sync";
import { initializeGitOrUseExistingAndPull } from "github-operation-sync";
import { operationGithubPull } from "github-operation-sync";
import { operationGithubPush } from "github-operation-sync";
import { pullMultipleOperations } from "github-operation-sync";
import { pushMultipleOperations } from "github-operation-sync";
import { readAndWriteToPackageJsonExample } from "github-operation-sync";
import { updateAllOperationStatus } from "github-operation-sync";
import { huggingfaceSpeakerDiarization } from "huggingface-wrapper";
import { request } from "huggingface-wrapper";
import { findAndUpsertTsInterfaces } from "index-typescript";
import { findCommentTypes } from "index-typescript";
import { generateSchema } from "index-typescript";
import { getAllComments } from "index-typescript";
import { getDbStorageMethod } from "index-typescript";
import { getFrontmatterDbStorageMethod } from "index-typescript";
import { getFrontmatterFunctionParameters } from "index-typescript";
import { getIndexId } from "index-typescript";
import { getMaxIndentationDepth } from "index-typescript";
import { getMinMaxValidation } from "index-typescript";
import { getNumberOfLines } from "index-typescript";
import { getParamSchema } from "index-typescript";
import { getParametersFromInterfaces } from "index-typescript";
import { getPossibleRefs } from "index-typescript";
import { getSizeSummary } from "index-typescript";
import { getSpecialExtensionDbStorageMethod } from "index-typescript";
import { getTsStatements } from "index-typescript";
import { getTypeInfo } from "index-typescript";
import { getValidatedOperationPathParse } from "index-typescript";
import { hasDefinition } from "index-typescript";
import { hasTypescriptFileChanged } from "index-typescript";
import { indexImportsExportsForFilePath } from "index-typescript";
import { indexTypescriptFilePath } from "index-typescript";
import { indexTypescriptFile } from "index-typescript";
import { indexTypescript } from "index-typescript";
import { isPrimitive } from "index-typescript";
import { makeTsComment } from "index-typescript";
import { removeTypescriptIndex } from "index-typescript";
import { schemaToTsInterface } from "index-typescript";
import { tryCreateSchema } from "index-typescript";
import { typeToSchema } from "index-typescript";
import { fetchWithTimeout } from "is-online";
import { isOnline } from "is-online";
import { isSystemBusy } from "is-system-busy";
import { determineFileType } from "k-explore";
import { exploreGitRepoFolders } from "k-explore";
import { exploreMultiple } from "k-explore";
import { exploreOperationFolders } from "k-explore";
import { explorePreset } from "k-explore";
import { explore } from "k-explore";
import { findAllDocsFolderPaths } from "k-explore";
import { findAllDotGitFolders } from "k-explore";
import { findAllFoldersWithName } from "k-explore";
import { findAllPackages } from "k-explore";
import { findAllTodoFolderPaths } from "k-explore";
import { findFilesRecursively } from "k-explore";
import { getFolderTypescriptFiles } from "k-explore";
import { pathArrayIsOperation } from "k-explore";
import { runTestsForOperation } from "k-test";
import { runTests } from "k-test";
import { preIndexLint } from "lint";
import { getActionStatusFilePath } from "lock-util";
import { isLocked } from "lock-util";
import { lockError } from "lock-util";
import { lock } from "lock-util";
import { unlock } from "lock-util";
import { addDependantCount } from "markdown-parsings";
import { bundleFolderWithMarkdown } from "markdown-parsings";
import { bundleToBookMarkdown } from "markdown-parsings";
import { bundleToMarkdown } from "markdown-parsings";
import { createMinimizedSectionMarkdown } from "markdown-parsings";
import { createMinimizedSection } from "markdown-parsings";
import { deployToVercel } from "markdown-parsings";
import { emailMarkdownParse } from "markdown-parsings";
import { flattenNestedObject } from "markdown-parsings";
import { generateStaticSite } from "markdown-parsings";
import { getJsonSchemaSummary } from "markdown-parsings";
import { getMarkdownContents } from "markdown-parsings";
import { getMergedMarkdownOutlineUrl } from "markdown-parsings";
import { getOperationSummary } from "markdown-parsings";
import { getOutline } from "markdown-parsings";
import { getPublicMarkdownNestedPathObject } from "markdown-parsings";
import { getTitlesRecursively } from "markdown-parsings";
import { getTypeDescriptorRecursive } from "markdown-parsings";
import { isConventionFileStatement } from "markdown-parsings";
import { isUpperCase } from "markdown-parsings";
import { makeOutlineMarkdownString } from "markdown-parsings";
import { makePropertiesTable } from "markdown-parsings";
import { markdownChunkToMarkdownStringRecursive } from "markdown-parsings";
import { markdownChunksToMarkdownStringRecursive } from "markdown-parsings";
import { markdownToSayable } from "markdown-parsings";
import { mdToPdf } from "markdown-parsings";
import { mergeMarkdownParse } from "markdown-parsings";
import { noNewlines } from "markdown-parsings";
import { operationRadio } from "markdown-parsings";
import { operationToMarkdown } from "markdown-parsings";
import { printNestedTitles } from "markdown-parsings";
import { print } from "markdown-parsings";
import { projectToMarkdown } from "markdown-parsings";
import { propertyToTableRow } from "markdown-parsings";
import { sayablesToMp3 } from "markdown-parsings";
import { selectRandomOperation } from "markdown-parsings";
import { simplifiedSchemaToMarkdownString } from "markdown-parsings";
import { statementItemToMarkdown } from "markdown-parsings";
import { tsFunctionNameToMarkdownString } from "markdown-parsings";
import { tsFunctionToMarkdownString } from "markdown-parsings";
import { tsInterfaceToMarkdownString } from "markdown-parsings";
import { tsVariableToMarkdownString } from "markdown-parsings";
import { upMarkdownChunkLevelRecursively } from "markdown-parsings";
import { getQueryPath } from "markdown-reader-functions-js";
import { minifyBuild } from "minify-build";
import { nodemon } from "nodemon";
import { convertPdfToMd } from "pdf-to-md";
import { tryParsePdf } from "pdf-to-md";
import { addPeerMessage } from "peer-functions";
import { addPeer } from "peer-functions";
import { augmentDevice } from "peer-functions";
import { deviceGetAppsCalculated } from "peer-functions";
import { getAllAppOperations } from "peer-functions";
import { getAugmentedPersons } from "peer-functions";
import { getFirstEmoji } from "peer-functions";
import { getNestedPathObject } from "peer-functions";
import { getPeerMessages } from "peer-functions";
import { getPeerPeople } from "peer-functions";
import { getPeersFromPeersRecursively } from "peer-functions";
import { getPublicFolderNestedPathObjectFromPeer } from "peer-functions";
import { getPublicFolderNestedPathObject } from "peer-functions";
import { getPublicPeers } from "peer-functions";
import { lateFetchPeerMessageSync } from "peer-functions";
import { ping } from "peer-functions";
import { proactivePushAddPeerMessage } from "peer-functions";
import { removePeer } from "peer-functions";
import { sortDevices } from "peer-functions";
import { updatePeer } from "peer-functions";
import { getAllGroupsIncludingInheritedRecursive } from "person-util";
import { isPortUsed } from "person-util";
import { personAttachInheritedGroups } from "person-util";
import { getPersona } from "persona-functions-node";
import { deleteApp } from "pm2-util";
import { listApps } from "pm2-util";
import { logApp } from "pm2-util";
import { logTableObject } from "pm2-util";
import { pm2ConnectDisconnect } from "pm2-util";
import { pm2Connect } from "pm2-util";
import { restartApp } from "pm2-util";
import { startApp } from "pm2-util";
import { stopAllAppsExcept } from "pm2-util";
import { stopApps } from "pm2-util";
import { readCsvFileSync } from "read-csv-file";
import { readCsvFile } from "read-csv-file";
import { readRawCsvFile } from "read-csv-file";
import { readJsonFileSync } from "read-json-file";
import { readJsonFile } from "read-json-file";
import { readProjectRelativeJsonFile } from "read-json-file";
import { readKvmdFile } from "read-kvmd-file";
import { readMarkdownFileToModel } from "read-markdown-file";
import { readMarkdownFile } from "read-markdown-file";
import { getFolderTypescriptIndex } from "read-typescript-file";
import { readTypescriptFile } from "read-typescript-file";
import { clearTsDatabase } from "rebuild-operation";
import { executeCommandQuietUnlessFail } from "rebuild-operation";
import { exitIfProcessDependenciesChanged } from "rebuild-operation";
import { generateJsonSchemas } from "rebuild-operation";
import { getAllDbModels } from "rebuild-operation";
import { getFileIds } from "rebuild-operation";
import { getIndexFileIds } from "rebuild-operation";
import { getSrcIds } from "rebuild-operation";
import { isOperationBuildNeeded } from "rebuild-operation";
import { isSdkOperation } from "rebuild-operation";
import { rebuildAllOperations } from "rebuild-operation";
import { rebuildOperation } from "rebuild-operation";
import { shouldSkip } from "rebuild-operation";
import { yarnBuild } from "rebuild-operation";
import { sayDutch } from "say";
import { sayLanguage } from "say";
import { sayNepali } from "say";
import { saySomething } from "say";
import { textToMp3 } from "say";
import { getAllSearchResultsWithContext } from "search-fs";
import { getExplorableBasePathsWithContext } from "search-fs";
import { getExplorableDbModels } from "search-fs";
import { getExplorableFilesWithContext } from "search-fs";
import { getFunctions } from "search-fs";
import { defaultMessage } from "server-login";
import { getMeWithContext } from "server-login";
import { getPublicPerson } from "server-login";
import { getPublicPersons } from "server-login";
import { isPhoneNumber } from "server-login";
import { isValidPassword } from "server-login";
import { loginConfirmWithContext } from "server-login";
import { loginWithEmailOrPhone } from "server-login";
import { logoutWithContext } from "server-login";
import { signupBare } from "server-login";
import { signupConfirmWithContext } from "server-login";
import { signupWithEmailOrPhone } from "server-login";
import { switchCurrentPersonWithContext } from "server-login";
import { updateMeWithContext } from "server-login";
import { setJsonKey } from "set-json-key";
import { setKeyAtLocation } from "set-json-key";
import { findAudioWithViewsArray } from "short-markdown-parser-js";
import { markdownParseToShortMarkdown } from "short-markdown-parser-js";
import { shortMarkdownToMarkdownParse } from "short-markdown-parser-js";
import { augmentShortMarkdown } from "short-markdown-parser-node";
import { fetchVoices } from "short-markdown-parser-node";
import { generateAugmentedShortMarkdown } from "short-markdown-parser-node";
import { getOrGenerateShortMarkdown } from "short-markdown-parser-node";
import { parseDialogue } from "short-markdown-parser-node";
import { uberduckGetPath } from "short-markdown-parser-node";
import { uberduckSpeak } from "short-markdown-parser-node";
import { voiceCloneDialogue } from "short-markdown-parser-node";
import { createNewStripePayment } from "stripe-wrapper";
import { receivePaymentUpdateWithContextRaw } from "stripe-wrapper";
import { getTestFunctionContext } from "test-util";
import { time } from "time";
import { getAllTsMorphSourceFiles } from "ts-morph-util";
import { getHasGeneric } from "ts-morph-util";
import { getTsMorphProject } from "ts-morph-util";
import { getOpenableFilePath } from "vscode-open";
import { vscodeOpen } from "vscode-open";
import { writeToAssets } from "write-to-assets";
import { copyPathWithContext } from "writer-functions";
import { deleteFileOrFolderWithContext } from "writer-functions";
import { getFileContentsWithContext } from "writer-functions";
import { getFrontmatterSchema } from "writer-functions";
import { getWriterWebPagesMenu } from "writer-functions";
import { getWriterWebPages } from "writer-functions";
import { movePathWithContext } from "writer-functions";
import { newFileWithContext } from "writer-functions";
import { newFolderWithContext } from "writer-functions";
import { openFinder } from "writer-functions";
import { processAssetUploadWithContext } from "writer-functions";
import { renameFileOrFolderWithContext } from "writer-functions";
import { saveFileContentsWithContext } from "writer-functions";
import { trashFileOrFolderWithContext } from "writer-functions";
import { updateFrontmatterWithContext } from "writer-functions";
import { youtubeToMp4_old } from "youtube-to-mp3";
import { youtubeToMp4WithContext } from "youtube-to-mp3";
import { youtubeToMp4 } from "youtube-to-mp3";
import { zipFiles } from "zip";
import { zipFolder } from "zip";
import { zip } from "zip";
import { untypedApiFunction } from "api";
import { getGetApiUrl } from "api-js";
import { addToken } from "asset-functions-js";
import { ensureToken } from "asset-functions-js";
import { findAssetParametersRecursively } from "asset-functions-js";
import { getAssetDirectlyApiUrl } from "asset-functions-js";
import { getConversionInfoFromType } from "asset-functions-js";
import { getExtensionFromAsset } from "asset-functions-js";
import { getNameFromRelativePath } from "asset-functions-js";
import { getNameWithTokenFromRelativePath } from "asset-functions-js";
import { getReferencedAssetApiUrl } from "asset-functions-js";
import { getTypeFromUrlOrPath } from "asset-functions-js";
import { readableSize } from "asset-functions-js";
import { removeTokenIfPresent } from "asset-functions-js";
import { BreadCrumbs } from "breadcrumbs";
import { renderBreadCrumbs } from "breadcrumbs";
import { ClickableIcon } from "clickable-icon";
import { stripCommentEnd } from "comment-util";
import { stripCommentStart } from "comment-util";
import { stripComment } from "comment-util";
import { stripSlashes } from "comment-util";
import { stripStar } from "comment-util";
import { trim } from "comment-util";
import { getCompileErrors } from "compile-typescript";
import { getTypescriptErrorsFromFiles } from "compile-typescript";
import { writeBuildErrors } from "compile-typescript";
import { camelCase } from "convert-case";
import { capitalCase } from "convert-case";
import { capitaliseFirstLetter } from "convert-case";
import { convertCase } from "convert-case";
import { fileSlugify } from "convert-case";
import { getDelimiter } from "convert-case";
import { humanCase } from "convert-case";
import { kebabCase } from "convert-case";
import { lowerCaseArray } from "convert-case";
import { pascalCase } from "convert-case";
import { slugify } from "convert-case";
import { snakeCase } from "convert-case";
import { errorToast } from "cool-toast";
import { infoToast } from "cool-toast";
import { showStandardResponse } from "cool-toast";
import { successToast } from "cool-toast";
import { warningToast } from "cool-toast";
import { FancyLoader } from "fancy-loader";
import { getFileType } from "file-icons";
import { MatchingText } from "file-search";
import { PathSearchResults } from "file-search";
import { getFileTypeFromPath } from "filename-conventions";
import { getWriterType } from "filename-conventions";
import { hasSubExtension } from "filename-conventions";
import { isGeneratedOperationName } from "filename-conventions";
import { isGeneratedOperation } from "filename-conventions";
import { isIndexableFileId } from "filename-conventions";
import { frontmatterParseToString } from "frontmatter-util";
import { frontmatterToObject } from "frontmatter-util";
import { getFrontmatterValueString } from "frontmatter-util";
import { markdownModelTypeToMarkdownString } from "frontmatter-util";
import { objectToFrontmatter } from "frontmatter-util";
import { parseFrontmatterString } from "frontmatter-util";
import { quotedOrNot } from "frontmatter-util";
import { stringifyNewlines } from "frontmatter-util";
import { canAccessSync } from "fs-util";
import { canAccess } from "fs-util";
import { canExecuteSync } from "fs-util";
import { canExecute } from "fs-util";
import { canReadSync } from "fs-util";
import { canRead } from "fs-util";
import { canSeeSync } from "fs-util";
import { canSee } from "fs-util";
import { canWriteSync } from "fs-util";
import { canWrite } from "fs-util";
import { copyAllRelativeFiles } from "fs-util";
import { fileExistsWithCaseSync } from "fs-util";
import { findClosestAbsolutePath } from "fs-util";
import { findFileNameCaseInsensitive } from "fs-util";
import { getAllFoldersUntilFolder } from "fs-util";
import { getFileName } from "fs-util";
import { getFirstAvailableFilename } from "fs-util";
import { getFirstFile } from "fs-util";
import { getFolderSizeObject } from "fs-util";
import { getFolder } from "fs-util";
import { getLastFolder } from "fs-util";
import { getOneFolderUpPath } from "fs-util";
import { getPathCombinations } from "fs-util";
import { oneUp } from "fs-util";
import { parseMd } from "fs-util";
import { readFilePerLine } from "fs-util";
import { readFrontmatter } from "fs-util";
import { removeAllExcept } from "fs-util";
import { renameAndCreate } from "fs-util";
import { returnReadmePathFromFolder } from "fs-util";
import { writeJsonToFile } from "fs-util";
import { writeStringToFile } from "fs-util";
import { writeToFiles } from "fs-util";
import { getFunctionExersize } from "function-types";
import { converse } from "function-util";
import { executeSdkFunction } from "function-util";
import { getCachedExportedFunctions } from "function-util";
import { getMenu } from "function-util";
import { getSdkFunctionPaths } from "function-util";
import { findFolderWhereMatch } from "get-path";
import { findOperationBasePathWithClassification } from "get-path";
import { findOperationBasePath } from "get-path";
import { getAllPackageJsonDependencies } from "get-path";
import { getCommonAncestorMultiple } from "get-path";
import { getCommonAncestor } from "get-path";
import { getFolderPath } from "get-path";
import { getOperationClassificationObject } from "get-path";
import { getOperationClassification } from "get-path";
import { getOperationPathParse } from "get-path";
import { getOperationPath } from "get-path";
import { getOperationRelativePath } from "get-path";
import { getPathParse } from "get-path";
import { getPathsWithOperations } from "get-path";
import { getProjectRoot } from "get-path";
import { getRelativeLinkPath } from "get-path";
import { getRelativePath } from "get-path";
import { getRootPath } from "get-path";
import { getSrcRelativeFileId } from "get-path";
import { getSubExtensions } from "get-path";
import { hasDependency } from "get-path";
import { isBundle } from "get-path";
import { isOperation } from "get-path";
import { isUiOperation } from "get-path";
import { isWorkspaceRoot } from "get-path";
import { packageCompilesTs } from "get-path";
import { tsconfigCompilesEsm } from "get-path";
import { getTsConfig } from "get-ts-config";
import { apply } from "js-util";
import { createEnum } from "js-util";
import { createMappedObject } from "js-util";
import { destructureOptionalObject } from "js-util";
import { findLastIndex } from "js-util";
import { getCurrentDate } from "js-util";
import { getObjectFromParamsString } from "js-util";
import { getObjectKeysArray } from "js-util";
import { getParameterAtLocation } from "js-util";
import { getSubsetFromObject } from "js-util";
import { groupByKey } from "js-util";
import { hasAllLetters } from "js-util";
import { insertAt } from "js-util";
import { isAllTrue } from "js-util";
import { isArrayEqual } from "js-util";
import { makeArray } from "js-util";
import { mapAsync } from "js-util";
import { mapKeys } from "js-util";
import { mapMany } from "js-util";
import { mapValuesSync } from "js-util";
import { mergeNestedObject } from "js-util";
import { mergeObjectParameters } from "js-util";
import { mergeObjectsArray } from "js-util";
import { mergeObjects } from "js-util";
import { noEmptyString } from "js-util";
import { notEmpty } from "js-util";
import { objectMapAsync } from "js-util";
import { objectMapSync } from "js-util";
import { objectValuesMap } from "js-util";
import { omitUndefinedValues } from "js-util";
import { onlyDuplicates } from "js-util";
import { onlyUnique2 } from "js-util";
import { onlyUnique } from "js-util";
import { pickRandomArrayItem } from "js-util";
import { putIndexAtIndex } from "js-util";
import { removeIndexFromArray } from "js-util";
import { removeOptionalKeysFromObjectStrings } from "js-util";
import { removeOptionalKeysFromObject } from "js-util";
import { replaceLastOccurence } from "js-util";
import { reverseString } from "js-util";
import { sumAllKeys } from "js-util";
import { sumObjectParameters } from "js-util";
import { sum } from "js-util";
import { takeFirst } from "js-util";
import { trimSlashes } from "js-util";
import { getSimpleJsonString } from "json-util";
import { flattenMarkdownChunks } from "key-value-markdown-js";
import { getKvmdItemsRecursively } from "key-value-markdown-js";
import { getParagraphsRecursively } from "key-value-markdown-js";
import { kvmdDataMap } from "key-value-markdown-js";
import { kvmdDataToString } from "key-value-markdown-js";
import { kvmdParseToMarkdownString } from "key-value-markdown-js";
import { markdownStringToKvmdParse } from "key-value-markdown-js";
import { parseKvmdLine } from "key-value-markdown-js";
import { LabeledButton } from "labeled-button";
import { getCallerFileName } from "log";
import { log } from "log";
import { parseTitle } from "log";
import { isResultOfInterface } from "make-test";
import { makeTest } from "make-test";
import { chunkToStringRecursively } from "markdown-parse-js";
import { getChunkParagraphsRecursively } from "markdown-parse-js";
import { getImplicitId } from "markdown-parse-js";
import { getMarkdownIntro } from "markdown-parse-js";
import { getMarkdownParseParagraphs } from "markdown-parse-js";
import { getMarkdownReferencePaths } from "markdown-parse-js";
import { getMarkdownReferencesFromParagraph } from "markdown-parse-js";
import { markdownParseToMarkdownStringFromContent } from "markdown-parse-js";
import { markdownParseToMarkdownString } from "markdown-parse-js";
import { mdContentParseRecursively } from "markdown-parse-js";
import { mdToJsonParse } from "markdown-parse-js";
import { parseFrontmatterMarkdownString } from "markdown-parse-js";
import { parseMarkdownParagraph } from "markdown-parse-js";
import { parseMdToChunks } from "markdown-parse-js";
import { removeHeaderPrefix } from "markdown-parse-js";
import { markdownParseToMarkdownModelType } from "markdown-types";
import { parseMarkdownModelTimestamp } from "markdown-types";
import { tryParseDate } from "markdown-types";
import { findCodeblocks } from "marked-util";
import { findCodespans } from "marked-util";
import { findEmbeds } from "marked-util";
import { findJsonInMarkdown } from "marked-util";
import { findLinks } from "marked-util";
import { flattenMarkdownString } from "marked-util";
import { flattenMarkedTokenRecursive } from "marked-util";
import { trimCodeblock } from "marked-util";
import { cleanupTimer } from "measure-performance";
import { generateUniqueId } from "measure-performance";
import { getNewPerformance } from "measure-performance";
import { generateId } from "model-types";
import { generatePassword } from "model-types";
import { generateRandomString } from "model-types";
import { generateTime } from "model-types";
import { isEmail } from "model-types";
import { getAssetInputType } from "name-conventions";
import { getParameterContentType } from "name-conventions";
import { isCalculatedParameter } from "name-conventions";
import { isGeneratedParameterName } from "name-conventions";
import { getFullPath } from "next-paths";
import { getLastPathsChunk } from "next-paths";
import { usePath } from "next-paths";
import { oneByOne } from "one-by-one";
import { getDependenciesSummary } from "operation-util";
import { getOperationMetaData } from "operation-util";
import { recalculateOperationIndexJson } from "operation-util";
import { parsePrimitiveArray } from "parse-primitive";
import { parsePrimitiveBoolean } from "parse-primitive";
import { parsePrimitiveString } from "parse-primitive";
import { parsePrimitive } from "parse-primitive";
import { byteCount } from "path-util";
import { calculatePathMetaData } from "path-util";
import { categorizeFiles } from "path-util";
import { getFolderSummary } from "path-util";
import { getPathMainComment } from "path-util";
import { sumSizeSummary } from "path-util";
import { isPlural } from "pluralize";
import { isSingular } from "pluralize";
import { pluralize } from "pluralize";
import { singularize } from "pluralize";
import { clickOnSpanTag } from "puppeteer-utils";
import { delay } from "puppeteer-utils";
import { facebookLogin } from "puppeteer-utils";
import { foundOrNotXpath } from "puppeteer-utils";
import { foundOrNot } from "puppeteer-utils";
import { getBrowserPageById } from "puppeteer-utils";
import { getBrowserTabs } from "puppeteer-utils";
import { getBrowser } from "puppeteer-utils";
import { getChromeExecutablePath } from "puppeteer-utils";
import { getConnectedBrowsers } from "puppeteer-utils";
import { getIdlePage } from "puppeteer-utils";
import { getNewPage } from "puppeteer-utils";
import { gmailLogin } from "puppeteer-utils";
import { isCaptchaExist } from "puppeteer-utils";
import { logConsoleIfDebug } from "puppeteer-utils";
import { openMultiTabs } from "puppeteer-utils";
import { openNewBrowserOnChildProcess } from "puppeteer-utils";
import { openNewBrowser } from "puppeteer-utils";
import { openPage } from "puppeteer-utils";
import { racePromises } from "puppeteer-utils";
import { retryClickAndWaitSelector } from "puppeteer-utils";
import { retryWaitSelector } from "puppeteer-utils";
import { setBrowserPageIdle } from "puppeteer-utils";
import { setBrowserSession } from "puppeteer-utils";
import { setInnerHtml } from "puppeteer-utils";
import { setInputValue } from "puppeteer-utils";
import { solveReptcha } from "puppeteer-utils";
import { trueClick } from "puppeteer-utils";
import { twitterLogin } from "puppeteer-utils";
import { typeInTheInputField } from "puppeteer-utils";
import { typeOnTheTargetWithXpathSelector } from "puppeteer-utils";
import { waitMilliseconds } from "puppeteer-utils";
import { getKeysAtPathFromNestedObject } from "recursive-util";
import { getMenuPagesObject } from "recursive-util";
import { makeNestedObjectFromQueryPathObject } from "recursive-util";
import { mapChildObjectRecursive } from "recursive-util";
import { nestedObjectToChildObject } from "recursive-util";
import { nestedPathObjectToNestedMenuRecursive } from "recursive-util";
import { nestifyQueryPathObjectRecursive } from "recursive-util";
import { queryPathsArrayToNestedPathObject } from "recursive-util";
import { reduceQueryPathsRecursively } from "recursive-util";
import { bodyFromQueryString } from "rest-util";
import { getFirstQueryStrings } from "rest-util";
import { getQueryPart } from "rest-util";
import { isValidEntry } from "rest-util";
import { toQueryString } from "rest-util";
import { runChildProcess } from "run-child-process";
import { findFirstCommentTypes } from "schema-util";
import { getDataParameterNames } from "schema-util";
import { getPossibleReferenceParameterNames } from "schema-util";
import { getProperties } from "schema-util";
import { getRefLink } from "schema-util";
import { getReferencableModels } from "schema-util";
import { getReferenceParameterInfo } from "schema-util";
import { getSchemaItems } from "schema-util";
import { getSchema } from "schema-util";
import { simplifiedSchemaToTypeDefinitionString } from "schema-util";
import { simplifySchema } from "schema-util";
import { findSentenceMatches } from "search";
import { searchRecursiveObjectArray } from "search";
import { objectStringToJson } from "string-to-json";
import { parseIfJson } from "string-to-json";
import { parsePrimitiveJson } from "string-to-json";
import { stringToJson } from "string-to-json";
import { Tabs } from "tabs";
import { getEncoding } from "text-or-binary";
import { isBinary } from "text-or-binary";
import { isText } from "text-or-binary";
import { tryParseJson } from "try-parse-json";
import { createCodeblockMarkdown } from "ui-util";
import { useCustomUrlStore } from "use-url-store";
import { crudPageToWebPages } from "webpage-types";
import { functionFormPageToWebPage } from "webpage-types";

export const sdk = { addEmojiToEveryWord,
addStatement,
addWord,
biggestFunctionName,
checkQueue,
cleanup,
controlChatGptWrapper,
deletePromptResult,
developersQuote,
diaryToInstagram,
documentationWriting,
emojiAugmentation,
explainInDutch,
explainInNepali,
explainInPortuguese,
explainLineByLine,
explain,
fixGrammarAndSpellingMistakes,
followUpQuestions,
getContextualPromptCategories,
getContextualPromptResultJsonFilePath,
getContextualPrompt,
getObjectForkKeyRecursively,
getQueueStatus,
getToolFunctions,
haiku,
hookOneliners,
improveCode,
investorPitch,
marcusAurelius,
opposite,
outlineToInvestorPitch,
poem,
processChatGptPrompt,
processPromptOnFile,
processPromptOnFolderWithContext,
quiz,
removeAllFake,
rickAndMortyRick,
rickAndMorty,
setIsFavoritePromptResult,
shouldAddToQueue,
socratesAndSnoopDogg,
storytelling,
summarizeMeetingWithContext,
toolFunctionWithContext,
translateEverythingIntoHindi,
translateEverythingPortuguese,
translateEverything,
translateToPortuguese,
typescriptExplain,
williamShakespear,
writeContextualPromptSdk,
writeCreatePromptCode,
ye,
yodafy,
getGroupOrPersonId,
imageToText,
languageTranslation,
musicTrackSeparation,
speakerSeparation,
speechToText,
textToImage,
textToSpeech,
textToText,
copyCopyPairs,
copyReaderStaticAssets,
findReaderStaticAssets,
findStaticAssets,
receiveTwilioMessageWithContextRaw,
sendMail,
sendMessage,
sendSms,
sendTwilioMessage,
trySendMessage,
calculateMessagesTokenCount,
calculateOpenaiMessagesTokenCountSum,
calculateOpenaiMessagesTokenCount,
calculateTokenCount,
chatCompletion,
chat,
getOpenaiInstance,
gpt3,
messagesToTokenableText,
whisper,
executeWatcherOnFilepath,
getQueueItems,
watchAll,
watchAudioVideoDoc,
watchMp3WithoutWav,
watchMp4WithoutWav,
watchWavToSpeakers,
watchWavToSpeech,
watchWavWithoutMp3,
exploreBadNamingFiles,
isBadName,
renameAllBadlyNamedFiles,
renameBadlyNamedFile,
watchBadNaming,
getBetterLocation,
getIsPrivate,
makeMarkdownIndex,
watchMarkdown,
getRecordingType,
transcriptionToGptChunks,
watchMp3Transcriptions,
getYoutubeVideoUrls,
watchAppleMemos,
createTranscriptionJson,
getTranslationText,
isWav16bit,
readTranscriptionCsv,
whisperLocalCpp,
allOperationsRemoveJsSrc,
allOperationsToMarkdown,
clearAllTsDatabases,
codeAll,
forAllFiles,
forAllFolders,
getAllOperationClassifications,
gitShipAllRepos,
mdAllOperations,
minifyAllOperations,
publishAllOperations,
removeAllFiles,
removeAllFolders,
removeAll,
renameAll,
runScriptEverywhere,
setScriptEverywhere,
askOk,
ask,
getArgumentOrAsk,
compressAsset,
createDownloadWithContext,
deleteReferencedAsset,
downloadGetApi,
downloadRemoteAsset,
findAbsoluteAssetPathFromReference,
findAllProjectMedia,
findDownload,
getAssetDirectlyGetApi,
getReferencedAssetGetApi,
getStorageLocationInfo,
getTemporaryAssetsFolderPath,
makeDownloadableFile,
processAsset,
processItemAssets,
removeOldTemporaryAssets,
serverDownloadReply,
uploadAssetWithContext,
getAugmentedWordObject,
getAugmentedWords,
getBundleAugmentedWords,
bananaCarrot,
bananaStableDiffusion,
bananaWhisper,
getBatteryLevelPercentage,
isSystemUsingBattery,
getBundleSummary,
getDbModelsForBundle,
generateInstantResponseMessage,
getChatMessageAnalysis,
getCostPerMessageCredit,
getCredit,
getMessageLimitInfo,
getMessagesAmountCheap,
getMessagesAmountMore,
getMinimumCredit,
getPaywallResult,
getPersonaStatistics,
getSystemMessageOtherLanguage,
getSystemMessage,
jsonGpt,
proactiveOutreach,
processMessage,
sendChatAiStatsUpdate,
sendDailyAlarmSms,
truncateMessages,
weeklyMail,
getChatMessagesPath,
getChatMessages,
getPersonPath,
getPersonSlug,
getPerson,
insertChatMessages,
setPerson,
chatGPTAuth,
detectChatGptPage,
openAIChat,
execAsync,
spawnAsync,
cleanupTsDatabase,
shouldDeleteTsModel,
csvItemArrayToCsvString,
tryParseCsv,
generateCsvInstance,
generateJsonSingleInstance,
generateKvmdInstance,
generateMarkdownInstance,
generateSlugTestModel,
getMergedQueryConfig,
randomName,
runModelEndToEndTest,
testOperationModels,
cacheLookup,
calculateOperatingSystemBundle,
deleteDbModelWithContext,
getDatabaseMenu,
getDbModelMetadataWithContext,
getDbModelNames,
getDbModelWithContext,
getFunctionIndex,
getNestedDatabaseMenu,
getReferencableModelDataWithContext,
getTsInterface,
hasDataPermissions,
hasDbRecipes,
makeSrcRelativeFolder,
tsInterfaceToDbMenu,
upsertDbModelWithContext,
validateInput,
validateResult,
filterInterfacesFromOperationNames,
getDbModelsFromOperations,
detectFolderLanguage,
detectLanguage,
docToMd,
docxToMd,
docsGetPages,
getMarkdownReaderPages,
getPublicMarkdownFilePaths,
removeExtensionsFromPath,
removeNumberPrefix,
shouldExposeMarkdownFile,
stripReadmeFromFolder,
mapArrayJson,
mapObjectJson,
exploreOperation,
exploreProject,
getExplorationType,
getFileWithExtension,
getFolderExplorationDetails,
getFrontmattersMappedObject,
getInstanceNames,
getProjectRelativePaths,
getTodoPages,
getTodoPaths,
hasSameProjectPath,
compressConvert,
compressImages,
compressMp4,
convertToMp3,
convertToMp4,
getFileCollectionPathsWithContext,
getFileCollectionStatusWithContext,
getFileCollectionWithContext,
getFolderContents,
getFolderFileCollections,
getNavigationWithContext,
getOpenFilesWithContext,
getQueryInfo,
removeInactiveOpenFiles,
setOpenFileWithContext,
getFileCollectionBasename,
getFileCollectionPaths,
getMarkdownIndexPath,
getMarkdownIndex,
getOnlyUniqueFileCollectionsFromDirentsFilter,
getPrimaryFileFromFileCollection,
isFileCollection,
onlyUniqueFileCollectionsFilter,
readFolderFileCollections,
renameFileCollectionWithContext,
renameFileCollection,
updateMarkdownIndex,
fileExplorerOpen,
findAllDependencyOperations,
findDependantsRecursively,
findDependants,
findDependenciesRecursively,
findMonorepoExports,
findMonorepoImports,
findMonorepoModules,
getDependencyObject,
getDependencyTree,
getOldDependencyTree,
getOperationDependencyReasons,
folderGetUpdatedAt,
getFsAuthorizationSingleFile,
getFsAuthorizationTestables,
getFsAuthorizationWithContext,
addDefaultValues,
alterAny,
alterCsv,
alterJsonMultiple,
alterJsonSingle,
alterKeyValueMarkdown,
alterMarkdown,
augmentItemWithReferencedDataRecursively,
calculateOperationsObject,
createDb,
findParent,
getAugmentedData,
getDatabaseFiles,
getDatabaseRootFolder,
getDbFileLocation,
getDbStorageMethodExtension,
getDefaultLocationPattern,
getItemModelLocation,
getLength,
getLocationPattern,
getMergedConfigOperationPath,
getParentSlug,
getRootFolders,
getWildcardDbFileLocations__OLD,
getWildcardDbFileLocations,
groupByFile,
makeStoringItem,
mergeConfigs,
removeKeyValueMarkdown,
removeMultiple,
upsertItems,
upsertKeyValueMarkdown,
upsert,
waitForLockfile,
getExtension,
getFileOrFolderName,
getFolderJs,
getSubExtension,
isPathRelative,
makeRelative,
removeTrailingSlash,
withoutExtension,
withoutSubExtensions,
getFileFunctions,
getFunctionExecutions,
getFunctionQueryPaths,
getPublicBundleConfig,
getSrcRelativeFolderPath,
getTsFunction,
isPathParameter,
calculateDeviceName,
executeFunctionWithParameters,
getAuthorizationInfo,
isGetEndpoint,
isRawEndpoint,
savePageVisit,
storeFunctionExecution,
upsertDevice,
generateNamedIndex,
generateSimpleIndex,
isTestFn,
mapToImportStatement,
augmentMarkdown,
getContextualPromptResults,
getContextualPromptsArray,
getContextualPrompts,
getFolderRelativeScopeDbFilePath,
makeMarkdownLink,
getImportedDependencies,
getPackage,
isAbsoluteImport,
calculatePackageJsonDependencies,
findAndWriteImportsExports,
getDefaultSymbolType,
getExportSpecifierNames,
getExportSymbolTypeRecursive,
getImportSpecifiersWithNames,
getImportsExports,
getPackageNameFromAbsoluteImport,
getSymbolTypeDeclarations,
getTypeFromImportSpecifierRecursive,
isAbsoluteImportBuiltin,
isImportFromOptionalFile,
writeResult,
getOperationBins,
getOperationPackageName,
getPackageJson,
getPackageSourcePaths,
getAllOperations,
getAllPackagesNames,
getGithubPersonalAccessToken,
getGithubRepoLastCommitInfo,
getRepoNameFromRepositoryUrl,
initializeGitOrUseExistingAndPull,
operationGithubPull,
operationGithubPush,
pullMultipleOperations,
pushMultipleOperations,
readAndWriteToPackageJsonExample,
updateAllOperationStatus,
huggingfaceSpeakerDiarization,
request,
findAndUpsertTsInterfaces,
findCommentTypes,
generateSchema,
getAllComments,
getDbStorageMethod,
getFrontmatterDbStorageMethod,
getFrontmatterFunctionParameters,
getIndexId,
getMaxIndentationDepth,
getMinMaxValidation,
getNumberOfLines,
getParamSchema,
getParametersFromInterfaces,
getPossibleRefs,
getSizeSummary,
getSpecialExtensionDbStorageMethod,
getTsStatements,
getTypeInfo,
getValidatedOperationPathParse,
hasDefinition,
hasTypescriptFileChanged,
indexImportsExportsForFilePath,
indexTypescriptFilePath,
indexTypescriptFile,
indexTypescript,
isPrimitive,
makeTsComment,
removeTypescriptIndex,
schemaToTsInterface,
tryCreateSchema,
typeToSchema,
fetchWithTimeout,
isOnline,
isSystemBusy,
determineFileType,
exploreGitRepoFolders,
exploreMultiple,
exploreOperationFolders,
explorePreset,
explore,
findAllDocsFolderPaths,
findAllDotGitFolders,
findAllFoldersWithName,
findAllPackages,
findAllTodoFolderPaths,
findFilesRecursively,
getFolderTypescriptFiles,
pathArrayIsOperation,
runTestsForOperation,
runTests,
preIndexLint,
getActionStatusFilePath,
isLocked,
lockError,
lock,
unlock,
addDependantCount,
bundleFolderWithMarkdown,
bundleToBookMarkdown,
bundleToMarkdown,
createMinimizedSectionMarkdown,
createMinimizedSection,
deployToVercel,
emailMarkdownParse,
flattenNestedObject,
generateStaticSite,
getJsonSchemaSummary,
getMarkdownContents,
getMergedMarkdownOutlineUrl,
getOperationSummary,
getOutline,
getPublicMarkdownNestedPathObject,
getTitlesRecursively,
getTypeDescriptorRecursive,
isConventionFileStatement,
isUpperCase,
makeOutlineMarkdownString,
makePropertiesTable,
markdownChunkToMarkdownStringRecursive,
markdownChunksToMarkdownStringRecursive,
markdownToSayable,
mdToPdf,
mergeMarkdownParse,
noNewlines,
operationRadio,
operationToMarkdown,
printNestedTitles,
print,
projectToMarkdown,
propertyToTableRow,
sayablesToMp3,
selectRandomOperation,
simplifiedSchemaToMarkdownString,
statementItemToMarkdown,
tsFunctionNameToMarkdownString,
tsFunctionToMarkdownString,
tsInterfaceToMarkdownString,
tsVariableToMarkdownString,
upMarkdownChunkLevelRecursively,
getQueryPath,
minifyBuild,
nodemon,
convertPdfToMd,
tryParsePdf,
addPeerMessage,
addPeer,
augmentDevice,
deviceGetAppsCalculated,
getAllAppOperations,
getAugmentedPersons,
getFirstEmoji,
getNestedPathObject,
getPeerMessages,
getPeerPeople,
getPeersFromPeersRecursively,
getPublicFolderNestedPathObjectFromPeer,
getPublicFolderNestedPathObject,
getPublicPeers,
lateFetchPeerMessageSync,
ping,
proactivePushAddPeerMessage,
removePeer,
sortDevices,
updatePeer,
getAllGroupsIncludingInheritedRecursive,
isPortUsed,
personAttachInheritedGroups,
getPersona,
deleteApp,
listApps,
logApp,
logTableObject,
pm2ConnectDisconnect,
pm2Connect,
restartApp,
startApp,
stopAllAppsExcept,
stopApps,
readCsvFileSync,
readCsvFile,
readRawCsvFile,
readJsonFileSync,
readJsonFile,
readProjectRelativeJsonFile,
readKvmdFile,
readMarkdownFileToModel,
readMarkdownFile,
getFolderTypescriptIndex,
readTypescriptFile,
clearTsDatabase,
executeCommandQuietUnlessFail,
exitIfProcessDependenciesChanged,
generateJsonSchemas,
getAllDbModels,
getFileIds,
getIndexFileIds,
getSrcIds,
isOperationBuildNeeded,
isSdkOperation,
rebuildAllOperations,
rebuildOperation,
shouldSkip,
yarnBuild,
sayDutch,
sayLanguage,
sayNepali,
saySomething,
textToMp3,
getAllSearchResultsWithContext,
getExplorableBasePathsWithContext,
getExplorableDbModels,
getExplorableFilesWithContext,
getFunctions,
defaultMessage,
getMeWithContext,
getPublicPerson,
getPublicPersons,
isPhoneNumber,
isValidPassword,
loginConfirmWithContext,
loginWithEmailOrPhone,
logoutWithContext,
signupBare,
signupConfirmWithContext,
signupWithEmailOrPhone,
switchCurrentPersonWithContext,
updateMeWithContext,
setJsonKey,
setKeyAtLocation,
findAudioWithViewsArray,
markdownParseToShortMarkdown,
shortMarkdownToMarkdownParse,
augmentShortMarkdown,
fetchVoices,
generateAugmentedShortMarkdown,
getOrGenerateShortMarkdown,
parseDialogue,
uberduckGetPath,
uberduckSpeak,
voiceCloneDialogue,
createNewStripePayment,
receivePaymentUpdateWithContextRaw,
getTestFunctionContext,
time,
getAllTsMorphSourceFiles,
getHasGeneric,
getTsMorphProject,
getOpenableFilePath,
vscodeOpen,
writeToAssets,
copyPathWithContext,
deleteFileOrFolderWithContext,
getFileContentsWithContext,
getFrontmatterSchema,
getWriterWebPagesMenu,
getWriterWebPages,
movePathWithContext,
newFileWithContext,
newFolderWithContext,
openFinder,
processAssetUploadWithContext,
renameFileOrFolderWithContext,
saveFileContentsWithContext,
trashFileOrFolderWithContext,
updateFrontmatterWithContext,
youtubeToMp4_old,
youtubeToMp4WithContext,
youtubeToMp4,
zipFiles,
zipFolder,
zip,
untypedApiFunction,
getGetApiUrl,
addToken,
ensureToken,
findAssetParametersRecursively,
getAssetDirectlyApiUrl,
getConversionInfoFromType,
getExtensionFromAsset,
getNameFromRelativePath,
getNameWithTokenFromRelativePath,
getReferencedAssetApiUrl,
getTypeFromUrlOrPath,
readableSize,
removeTokenIfPresent,
BreadCrumbs,
renderBreadCrumbs,
ClickableIcon,
stripCommentEnd,
stripCommentStart,
stripComment,
stripSlashes,
stripStar,
trim,
getCompileErrors,
getTypescriptErrorsFromFiles,
writeBuildErrors,
camelCase,
capitalCase,
capitaliseFirstLetter,
convertCase,
fileSlugify,
getDelimiter,
humanCase,
kebabCase,
lowerCaseArray,
pascalCase,
slugify,
snakeCase,
errorToast,
infoToast,
showStandardResponse,
successToast,
warningToast,
FancyLoader,
getFileType,
MatchingText,
PathSearchResults,
getFileTypeFromPath,
getWriterType,
hasSubExtension,
isGeneratedOperationName,
isGeneratedOperation,
isIndexableFileId,
frontmatterParseToString,
frontmatterToObject,
getFrontmatterValueString,
markdownModelTypeToMarkdownString,
objectToFrontmatter,
parseFrontmatterString,
quotedOrNot,
stringifyNewlines,
canAccessSync,
canAccess,
canExecuteSync,
canExecute,
canReadSync,
canRead,
canSeeSync,
canSee,
canWriteSync,
canWrite,
copyAllRelativeFiles,
fileExistsWithCaseSync,
findClosestAbsolutePath,
findFileNameCaseInsensitive,
getAllFoldersUntilFolder,
getFileName,
getFirstAvailableFilename,
getFirstFile,
getFolderSizeObject,
getFolder,
getLastFolder,
getOneFolderUpPath,
getPathCombinations,
oneUp,
parseMd,
readFilePerLine,
readFrontmatter,
removeAllExcept,
renameAndCreate,
returnReadmePathFromFolder,
writeJsonToFile,
writeStringToFile,
writeToFiles,
getFunctionExersize,
converse,
executeSdkFunction,
getCachedExportedFunctions,
getMenu,
getSdkFunctionPaths,
findFolderWhereMatch,
findOperationBasePathWithClassification,
findOperationBasePath,
getAllPackageJsonDependencies,
getCommonAncestorMultiple,
getCommonAncestor,
getFolderPath,
getOperationClassificationObject,
getOperationClassification,
getOperationPathParse,
getOperationPath,
getOperationRelativePath,
getPathParse,
getPathsWithOperations,
getProjectRoot,
getRelativeLinkPath,
getRelativePath,
getRootPath,
getSrcRelativeFileId,
getSubExtensions,
hasDependency,
isBundle,
isOperation,
isUiOperation,
isWorkspaceRoot,
packageCompilesTs,
tsconfigCompilesEsm,
getTsConfig,
apply,
createEnum,
createMappedObject,
destructureOptionalObject,
findLastIndex,
getCurrentDate,
getObjectFromParamsString,
getObjectKeysArray,
getParameterAtLocation,
getSubsetFromObject,
groupByKey,
hasAllLetters,
insertAt,
isAllTrue,
isArrayEqual,
makeArray,
mapAsync,
mapKeys,
mapMany,
mapValuesSync,
mergeNestedObject,
mergeObjectParameters,
mergeObjectsArray,
mergeObjects,
noEmptyString,
notEmpty,
objectMapAsync,
objectMapSync,
objectValuesMap,
omitUndefinedValues,
onlyDuplicates,
onlyUnique2,
onlyUnique,
pickRandomArrayItem,
putIndexAtIndex,
removeIndexFromArray,
removeOptionalKeysFromObjectStrings,
removeOptionalKeysFromObject,
replaceLastOccurence,
reverseString,
sumAllKeys,
sumObjectParameters,
sum,
takeFirst,
trimSlashes,
getSimpleJsonString,
flattenMarkdownChunks,
getKvmdItemsRecursively,
getParagraphsRecursively,
kvmdDataMap,
kvmdDataToString,
kvmdParseToMarkdownString,
markdownStringToKvmdParse,
parseKvmdLine,
LabeledButton,
getCallerFileName,
log,
parseTitle,
isResultOfInterface,
makeTest,
chunkToStringRecursively,
getChunkParagraphsRecursively,
getImplicitId,
getMarkdownIntro,
getMarkdownParseParagraphs,
getMarkdownReferencePaths,
getMarkdownReferencesFromParagraph,
markdownParseToMarkdownStringFromContent,
markdownParseToMarkdownString,
mdContentParseRecursively,
mdToJsonParse,
parseFrontmatterMarkdownString,
parseMarkdownParagraph,
parseMdToChunks,
removeHeaderPrefix,
markdownParseToMarkdownModelType,
parseMarkdownModelTimestamp,
tryParseDate,
findCodeblocks,
findCodespans,
findEmbeds,
findJsonInMarkdown,
findLinks,
flattenMarkdownString,
flattenMarkedTokenRecursive,
trimCodeblock,
cleanupTimer,
generateUniqueId,
getNewPerformance,
generateId,
generatePassword,
generateRandomString,
generateTime,
isEmail,
getAssetInputType,
getParameterContentType,
isCalculatedParameter,
isGeneratedParameterName,
getFullPath,
getLastPathsChunk,
usePath,
oneByOne,
getDependenciesSummary,
getOperationMetaData,
recalculateOperationIndexJson,
parsePrimitiveArray,
parsePrimitiveBoolean,
parsePrimitiveString,
parsePrimitive,
byteCount,
calculatePathMetaData,
categorizeFiles,
getFolderSummary,
getPathMainComment,
sumSizeSummary,
isPlural,
isSingular,
pluralize,
singularize,
clickOnSpanTag,
delay,
facebookLogin,
foundOrNotXpath,
foundOrNot,
getBrowserPageById,
getBrowserTabs,
getBrowser,
getChromeExecutablePath,
getConnectedBrowsers,
getIdlePage,
getNewPage,
gmailLogin,
isCaptchaExist,
logConsoleIfDebug,
openMultiTabs,
openNewBrowserOnChildProcess,
openNewBrowser,
openPage,
racePromises,
retryClickAndWaitSelector,
retryWaitSelector,
setBrowserPageIdle,
setBrowserSession,
setInnerHtml,
setInputValue,
solveReptcha,
trueClick,
twitterLogin,
typeInTheInputField,
typeOnTheTargetWithXpathSelector,
waitMilliseconds,
getKeysAtPathFromNestedObject,
getMenuPagesObject,
makeNestedObjectFromQueryPathObject,
mapChildObjectRecursive,
nestedObjectToChildObject,
nestedPathObjectToNestedMenuRecursive,
nestifyQueryPathObjectRecursive,
queryPathsArrayToNestedPathObject,
reduceQueryPathsRecursively,
bodyFromQueryString,
getFirstQueryStrings,
getQueryPart,
isValidEntry,
toQueryString,
runChildProcess,
findFirstCommentTypes,
getDataParameterNames,
getPossibleReferenceParameterNames,
getProperties,
getRefLink,
getReferencableModels,
getReferenceParameterInfo,
getSchemaItems,
getSchema,
simplifiedSchemaToTypeDefinitionString,
simplifySchema,
findSentenceMatches,
searchRecursiveObjectArray,
objectStringToJson,
parseIfJson,
parsePrimitiveJson,
stringToJson,
Tabs,
getEncoding,
isBinary,
isText,
tryParseJson,
createCodeblockMarkdown,
useCustomUrlStore,
crudPageToWebPages,
functionFormPageToWebPage};

export type SdkType = typeof sdk;