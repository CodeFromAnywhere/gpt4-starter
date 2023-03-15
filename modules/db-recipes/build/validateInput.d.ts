import { TsFunction } from "code-types";
type ValidationResult = {
    isValid: boolean;
    errors?: {
        fieldStack: string[];
        error: string;
    }[];
};
/** wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.*/
export declare const validateInput: <TFunctionName extends "canExecute" | "canRead" | "time" | "unzip" | "zip" | "ask" | "log" | "nodemon" | "pluralize" | "trim" | "fetchUrl" | "addEmojiToEveryWord" | "addStatement" | "addWord" | "biggestFunctionName" | "checkQueue" | "cleanup" | "controlChatGptWrapper" | "deletePromptResult" | "developersQuote" | "diaryToInstagram" | "documentationWriting" | "emojiAugmentation" | "explainInDutch" | "explainInNepali" | "explainInPortuguese" | "explainLineByLine" | "explain" | "fixGrammarAndSpellingMistakes" | "followUpQuestions" | "getContextualPromptCategories" | "getContextualPromptResultJsonFilePath" | "getContextualPrompt" | "getObjectForkKeyRecursively" | "getToolFunctions" | "haiku" | "hookOneliners" | "improveCode" | "investorPitch" | "marcusAurelius" | "opposite" | "outlineToInvestorPitch" | "poem" | "processChatGptPrompt" | "processPromptOnFile" | "processPromptOnFolderWithContext" | "quiz" | "removeAllFake" | "rickAndMortyRick" | "rickAndMorty" | "setIsFavoritePromptResult" | "shouldAddToQueue" | "socratesAndSnoopDogg" | "storytelling" | "summarizeMeetingWithContext" | "toolFunctionWithContext" | "translateEverythingIntoHindi" | "translateEverythingPortuguese" | "translateEverything" | "translateToPortuguese" | "typescriptExplain" | "williamShakespear" | "writeContextualPromptSdk" | "writeCreatePromptCode" | "ye" | "yodafy" | "imageToText" | "languageTranslation" | "musicTrackSeparation" | "speakerSeparation" | "speechToText" | "textToImage" | "textToSpeech" | "textToText" | "bananaCarrot" | "bananaStableDiffusion" | "bananaWhisper" | "augmentMarkdown" | "canSeeFileContent" | "canSeeFile" | "expandFrontmatter" | "findClosestAbsolutePath" | "getContextualPromptResults" | "getContextualPromptsArray" | "getContextualPrompts" | "getExplorablePathDetails" | "getFirstFile" | "getFolderRelativeScopeDbFilePath" | "getNavigation" | "getReaderPagePropsWithContext" | "makeMarkdownLink" | "readerPageGetStaticPaths" | "readerPageGetStaticProps" | "gtpIndex" | "huggingfaceSpeakerDiarization" | "request" | "calculateTokenCount" | "gpt3" | "compressAsset" | "deleteReferencedAsset" | "downloadRemoteAsset" | "findAbsoluteAssetPathFromReference" | "findAllProjectMedia" | "getAssetDirectlyGetApi" | "getReferencedAssetGetApi" | "getStorageLocationInfo" | "getTemporaryAssetsFolderPath" | "processAsset" | "processItemAssets" | "removeOldTemporaryAssets" | "serverDownloadReply" | "uploadAssetWithContext" | "getFileCollectionPaths" | "renameFileCollection" | "folderGetUpdatedAt" | "getExtension" | "getFileOrFolderName" | "getFolderJs" | "getSubExtension" | "isPathRelative" | "makeRelative" | "removeTrailingSlash" | "withoutExtension" | "withoutSubExtensions" | "getAssociatedMd" | "getAvailableFolderPath" | "getOperationBins" | "getOperationPackageName" | "getPackageJson" | "getPackageSourcePaths" | "isEqualArray" | "renameTemplateFiles" | "renameTemplateToNormalFile" | "renameToTemplateFile" | "setJsonKey" | "setKeyAtLocation" | "initiateWatch" | "makeSubscription" | "pickWatcher" | "watchFoldersChokidar" | "watchFoldersFs" | "watchFolders" | "writeToAssets" | "allOperationsRemoveJsSrc" | "allOperationsToMarkdown" | "clearAllTsDatabases" | "codeAll" | "forAllFiles" | "forAllFolders" | "getAllOperationClassifications" | "gitShipAllRepos" | "mdAllOperations" | "minifyAllOperations" | "publishAllOperations" | "removeAllFiles" | "removeAllFolders" | "removeAll" | "renameAll" | "runScriptEverywhere" | "setScriptEverywhere" | "exploreOperation" | "exploreProject" | "getExplorationType" | "getFileWithExtension" | "getFolderExplorationDetails" | "getFrontmattersMappedObject" | "getInstanceNames" | "getProjectRelativePaths" | "getTodoPages" | "getTodoPaths" | "hasSameProjectPath" | "getAllOperationSourcePaths" | "determineFileType" | "exploreGitRepoFolders" | "exploreMultiple" | "exploreOperationFolders" | "explorePreset" | "explore" | "findAllDocsFolderPaths" | "findAllDotGitFolders" | "findAllFoldersWithName" | "findAllPackages" | "findAllTodoFolderPaths" | "findFilesRecursively" | "getFolderTypescriptFiles" | "pathArrayIsOperation" | "deleteApp" | "listApps" | "logApp" | "logTableObject" | "pm2ConnectDisconnect" | "pm2Connect" | "restartApp" | "startApp" | "stopAllAppsExcept" | "stopApps" | "watchAll" | "exitIfOperationsChange" | "gitCommitAllCron" | "watchOperations" | "brigtnessFull" | "brigtnessZero" | "decreaseBrightness" | "increaseBrightness" | "macosSetup" | "fileExplorerOpen" | "importAppleNotes" | "importGhostBlogs" | "importGoogleKeep" | "isSystemBusy" | "getFolderNames" | "playMusic" | "generateRecurringReminders" | "remindMeAboutNextMinute" | "setRandomTimezone" | "disableDarkMode" | "enableDarkMode" | "setDarkmodeCommand" | "toggleDarkMode" | "disableScreenSleep2" | "disableScreenSleep" | "enableScreenSleep" | "downVolume" | "getVolume" | "setVolume" | "upVolume" | "getOpenableFilePath" | "vscodeOpen" | "watchAudioVideo" | "watchMp3WithoutWav" | "watchMp4WithoutWav" | "watchWavToSpeakers" | "watchWavToSpeech" | "watchWavWithoutMp3" | "exploreBadNamingFiles" | "isBadName" | "renameAllBadlyNamedFiles" | "renameBadlyNamedFile" | "watchBadNaming" | "exploreAndRename" | "findJsonInMarkdown" | "getBetterFilename" | "getBetterLocation" | "makeMarkdownIndex" | "trimCodeblock" | "watchMarkdown" | "getRecordingType" | "transcriptionToGptChunks" | "watchMp3Transcriptions" | "getYoutubeVideoUrls" | "watchAppleMemos" | "createTranscriptionJson" | "isWav16bit" | "readTranscriptionCsv" | "whisperLocalCpp" | "whisper" | "loginToDevto" | "publishBlogOnDevTo" | "typeIntoTheField" | "facebookPostOnTheGroup" | "facebookPost" | "facebookTimeLinePost" | "getLatestFacebookPostUrl" | "sendFacebookMessage" | "searchAndDownloadGifs" | "buildQuery" | "errArrayLenZero" | "errFileSize" | "errFileType" | "errInvalidType" | "errTextLenZero" | "errTextOverflow" | "generateArrayFromJson" | "getStringForTranslation" | "launch" | "startTranslation" | "storeResult" | "translateText" | "sendMail" | "publishBlogOnMedium" | "publishBlogOnReddit" | "sendDailyAlarmSms" | "sendSms" | "youtubeSearchAndDownload" | "youtubeSearch" | "youtubeToMp3" | "youtubeToMp4" | "getPort" | "isLocked" | "lock" | "unlock" | "getBundleSummary" | "getDbModelsForBundle" | "createBackup" | "getHumanReadableDate" | "createDistribution" | "filterInterfacesFromOperationNames" | "getDbModelsFromOperations" | "applyDataset" | "calculateBundleDependencies" | "calculateToPath" | "copyCodestories" | "copyDocsAndReadme" | "copyFromRepoToNiche" | "copyOperation" | "copyReadmesBeforeFolderToBundle" | "copyTodosIntoBundle" | "findAndCopyOperations" | "findInherited" | "generateAllBundles" | "generateBundle" | "generateBundles" | "getBundlePaths" | "getCompareFn" | "getDataset" | "getIndirectDependencies" | "getMatchingFilters" | "mergeBundleConfigs" | "syncInformation" | "syncNicheFolder" | "yarnInstall" | "installNodeModules" | "yarnInstallNewDistribution" | "detectLanguage" | "generateSimpleSentence" | "makeAudioCourse" | "sleep" | "createFolder" | "getAllMarkdownFiles" | "getFileInfo" | "getTranslatedWord" | "markdownStoreAndRecord" | "parseMarkdownWordByWord" | "recordMdFile" | "startMarkdownTranslator" | "translatedArrayToKeyValue" | "watchMdFile" | "createWordSimplificationMap" | "findBetterWords" | "getSynonymFrequencyDataset" | "preprocessSynonyms" | "preprocessWordFrequencies" | "speakWordsToLearn" | "createPaymentRequestWithContext" | "createPaymentTransactionWithContext" | "defaultResponse" | "fail" | "getPaymentWebPages" | "succeed" | "mapArrayJson" | "mapObjectJson" | "csvItemArrayToCsvString" | "tryParseCsv" | "compressConvert" | "compressImages" | "compressMp4" | "convertToMp3" | "convertToMp4" | "copyCopyPairs" | "copyReaderStaticAssets" | "findReaderStaticAssets" | "findStaticAssets" | "docToMd" | "docxToMd" | "addCodestoryToSection" | "addModelName" | "findCodestories" | "makeCodespanMappedObject" | "makeCodestory" | "mapChunkRecursively" | "mapMarkdownParseSections" | "writeAllCodestories" | "writeCodespanDetails" | "addDependantCount" | "bundleFolderWithMarkdown" | "bundleToBookMarkdown" | "bundleToMarkdown" | "createMinimizedSectionMarkdown" | "createMinimizedSection" | "deployToVercel" | "emailMarkdownParse" | "flattenNestedObject" | "generateStaticSite" | "getJsonSchemaSummary" | "getMarkdownContents" | "getMergedMarkdownOutlineUrl" | "getOperationSummary" | "getOutline" | "getPublicMarkdownNestedPathObject" | "getTitlesRecursively" | "getTypeDescriptorRecursive" | "isConventionFileStatement" | "isUpperCase" | "makeOutlineMarkdownString" | "makePropertiesTable" | "markdownChunkToMarkdownStringRecursive" | "markdownChunksToMarkdownStringRecursive" | "markdownToSayable" | "mdToPdf" | "mergeMarkdownParse" | "noNewlines" | "operationRadio" | "operationToMarkdown" | "printNestedTitles" | "print" | "projectToMarkdown" | "propertyToTableRow" | "sayablesToMp3" | "selectRandomOperation" | "simplifiedSchemaToMarkdownString" | "statementItemToMarkdown" | "tsFunctionToMarkdownString" | "tsInterfaceToMarkdownString" | "tsVariableToMarkdownString" | "upMarkdownChunkLevelRecursively" | "convertPdfToMd" | "tryParsePdf" | "findAudioWithViewsArray" | "markdownParseToShortMarkdown" | "shortMarkdownToMarkdownParse" | "augmentShortMarkdown" | "fetchVoices" | "generateAugmentedShortMarkdown" | "getOrGenerateShortMarkdown" | "parseDialogue" | "uberduckGetPath" | "uberduckSpeak" | "voiceCloneDialogue" | "convertCsvToJson" | "convertXlsToJson" | "readCsvFileSync" | "readCsvFile" | "readRawCsvFile" | "readJsonFileSync" | "readJsonFile" | "readProjectRelativeJsonFile" | "readKvmdFile" | "readMarkdownFileToModel" | "readMarkdownFile" | "getFolderTypescriptIndex" | "readTypescriptFile" | "generateCsvInstance" | "generateJsonSingleInstance" | "generateKvmdInstance" | "generateMarkdownInstance" | "generateSlugTestModel" | "getMergedQueryConfig" | "randomName" | "runModelEndToEndTest" | "testOperationModels" | "cacheLookup" | "calculateOperatingSystemBundle" | "deleteDbModelWithContext" | "getDatabaseMenu" | "getDbModelMetadataWithContext" | "getDbModelNames" | "getDbModelWithContext" | "getFunctionIndex" | "getNestedDatabaseMenu" | "getReferencableModelDataWithContext" | "getTsInterface" | "hasDataPermissions" | "hasDbRecipes" | "makeSrcRelativeFolder" | "tsInterfaceToDbMenu" | "upsertDbModelWithContext" | "validateInput" | "validateResult" | "addDefaultValues" | "alterAny" | "alterCsv" | "alterJsonMultiple" | "alterJsonSingle" | "alterKeyValueMarkdown" | "alterMarkdown" | "augmentItemWithReferencedDataRecursively" | "calculateOperationsObject" | "createDb" | "findParent" | "getAugmentedData" | "getDatabaseFiles" | "getDatabaseRootFolder" | "getDbFileLocation" | "getDbStorageMethodExtension" | "getDefaultLocationPattern" | "getItemModelLocation" | "getLength" | "getLocationPattern" | "getMergedConfigOperationPath" | "getParentSlug" | "getRootFolders" | "getWildcardDbFileLocations__OLD" | "getWildcardDbFileLocations" | "groupByFile" | "makeStoringItem" | "mergeConfigs" | "removeKeyValueMarkdown" | "removeMultiple" | "upsertItems" | "upsertKeyValueMarkdown" | "upsert" | "waitForLockfile" | "validateModel" | "validate" | "getFunctionExecutions" | "getFunctionQueryPaths" | "getPublicBundleConfig" | "getSrcRelativeFolderPath" | "getTsFunction" | "getAllOperations" | "getAllPackagesNames" | "getGithubPersonalAccessToken" | "getGithubRepoLastCommitInfo" | "getRepoNameFromRepositoryUrl" | "initializeGitOrUseExistingAndPull" | "operationGithubPull" | "operationGithubPush" | "pullMultipleOperations" | "pushMultipleOperations" | "readAndWriteToPackageJsonExample" | "updateAllOperationStatus" | "getAugmentedWordObject" | "getAugmentedWords" | "getBundleAugmentedWords" | "codestoriesGetPages" | "codestoriesGetStaticPaths" | "codestoriesGetStaticProps" | "docsGetPages" | "getMarkdownReaderPages" | "getPublicMarkdownFilePaths" | "removeExtensionsFromPath" | "removeNumberPrefix" | "shouldExposeMarkdownFile" | "stripReadmeFromFolder" | "copyStaticAssets" | "docsGetStaticPaths" | "docsGetStaticProps" | "getAllMarkdownReaderPages" | "getChildren" | "getFolderExplorationInfo" | "getMarkdownModelPages" | "getMarkdownPageInfo" | "getMarkdownReaderQueryPaths" | "getOperationPages" | "getReaderTodoPages" | "markdownReaderGetStaticPaths" | "markdownReaderGetStaticPropsFromPages" | "markdownReaderGetStaticProps" | "putReadmeOnTop" | "getQueryPath" | "addPeerMessage" | "addPeer" | "augmentDevice" | "deviceGetAppsCalculated" | "getAllAppOperations" | "getAugmentedPersons" | "getFirstEmoji" | "getNestedPathObject" | "getPeerMessages" | "getPeerPeople" | "getPeersFromPeersRecursively" | "getPublicFolderNestedPathObjectFromPeer" | "getPublicFolderNestedPathObject" | "getPublicPeers" | "isPortUsed" | "lateFetchPeerMessageSync" | "ping" | "proactivePushAddPeerMessage" | "removePeer" | "sortDevices" | "updatePeer" | "getPrimaryPersona" | "youtubeToPlayItem" | "getDayNumber" | "remindMe" | "getAllSearchResultsWithContext" | "getExplorableBasePathsWithContext" | "getPostableFrontmatterSchema" | "canExecuteFileFunctionWithContext" | "copyPath" | "deleteFileOrFolder" | "getFileContents" | "getFrontmatterSchema" | "getWriterWebPagesMenu" | "getWriterWebPages" | "movePath" | "newFile" | "newFolder" | "processAssetUpload" | "renameFileOrFolder" | "saveFileContents" | "trashFileOrFolder" | "updateFrontmatter" | "getLight" | "getLocation" | "fetchWithTimeout" | "isOnline" | "calculateBbqAbility" | "calculateCloudyness" | "calculateCodeFromNatureAbility" | "calculateDresscode" | "calculateKiteability" | "calculateRainyness" | "calculateSunnyness" | "calculateWindyness" | "fetchWeatherStormGlass" | "fetchWeatherTommorowIOApi" | "getCustomWeatherData" | "cleanupTsDatabase" | "shouldDeleteTsModel" | "findAllDependencyOperations" | "findDependantsRecursively" | "findDependants" | "findDependenciesRecursively" | "findMonorepoExports" | "findMonorepoImports" | "findMonorepoModules" | "getDependencyObject" | "getDependencyTree" | "getOldDependencyTree" | "getOperationDependencyReasons" | "generateBunFile" | "generateBunMonopackage" | "generateBunTypes" | "generateBunVariables" | "getItemNewPath" | "generateNamedIndex" | "generateSimpleIndex" | "isTestFn" | "mapToImportStatement" | "generateDbSdk" | "generateEnvSdks" | "generateFunctionPathsSdk" | "generateFunctionSdks" | "generateInterfacePathsSdk" | "generateOperationsSdk" | "generateSdkApiWatcher" | "generateSdkApi" | "generateSdkOperations" | "getFunctionSdksContent" | "getSdkDescription" | "getSdkFunctionsPerClassification" | "isNonUiOperationBuild" | "newEnvSdk" | "newFunctionKeysSdkOperation" | "newFunctionSdkOperation" | "tsFunctionIsIndexable" | "tsFunctionIsSdkable" | "updateClassifications" | "getImportedDependencies" | "getPackage" | "isAbsoluteImport" | "calculatePackageJsonDependencies" | "findAndWriteImportsExports" | "getDefaultSymbolType" | "getExportSpecifierNames" | "getExportSymbolTypeRecursive" | "getImportSpecifiersWithNames" | "getImportsExports" | "getPackageNameFromAbsoluteImport" | "getSymbolTypeDeclarations" | "getTypeFromImportSpecifierRecursive" | "isAbsoluteImportBuiltin" | "isImportFromOptionalFile" | "writeResult" | "getMissingDependencies" | "findAndUpsertTsInterfaces" | "findCommentTypes" | "generateSchema" | "getAllComments" | "getDbStorageMethod" | "getFrontmatterDbStorageMethod" | "getFrontmatterFunctionParameters" | "getIndexId" | "getMaxIndentationDepth" | "getMinMaxValidation" | "getNumberOfLines" | "getParamSchema" | "getParametersFromInterfaces" | "getPossibleRefs" | "getSpecialExtensionDbStorageMethod" | "getTsStatements" | "getTypeInfo" | "getValidatedOperationPathParse" | "hasDefinition" | "hasTypescriptFileChanged" | "indexImportsExportsForFilePath" | "indexTypescriptFilePath" | "indexTypescriptFile" | "indexTypescript" | "isPrimitive" | "makeTsComment" | "removeTypescriptIndex" | "schemaToTsInterface" | "tryCreateSchema" | "typeToSchema" | "preIndexLint" | "minifyBuild" | "getAvailableOperationName" | "newOperationWithFiles" | "newOperation" | "newTemplate" | "buildPackage" | "installMissingMonorepoDependencies" | "obfucsate" | "testPackage" | "prettierOperation" | "clearTsDatabase" | "executeCommandQuietUnlessFail" | "exitIfProcessDependenciesChanged" | "generateJsonSchemas" | "getAllDbModels" | "getFileIds" | "getIndexFileIds" | "getSrcIds" | "isOperationBuildNeeded" | "isSdkOperation" | "rebuildAllOperations" | "rebuildOperation" | "shouldSkip" | "yarnBuild" | "renameOperation" | "createSimpleTypescriptFile" | "alterTypescriptFile" | "alterTypescriptInstance" | "buildEverythingInRightOrder" | "detectCircularDependencies" | "getImports" | "getOperationPathsRebuildRequired" | "getTypescriptData" | "isAbsoluteModuleName" | "operationGetDependencies" | "operationGetIndexedDependencies" | "reindexAllOperationsCircularDependencies" | "reindexCircularDependencies" | "setTypescriptData" | "runTestsForOperation" | "runTests" | "getAllTsMorphSourceFiles" | "getHasGeneric" | "getTsMorphProject" | "comparePassword" | "encryptPassword" | "calculateDeviceName" | "executeFunctionWithParameters" | "getAuthorizationInfo" | "isGetEndpoint" | "savePageVisit" | "storeFunctionExecution" | "upsertDevice" | "defaultMessage" | "getMeWithContext" | "getPublicPerson" | "getPublicPersons" | "isPhoneNumber" | "isValidPassword" | "loginConfirmWithContext" | "loginWithEmailOrPhone" | "logoutWithContext" | "signupBare" | "signupConfirmWithContext" | "signupWithEmailOrPhone" | "switchCurrentPersonWithContext" | "updateMeWithContext" | "sayDutch" | "sayLanguage" | "sayNepali" | "saySomething" | "textToMp3" | "askOk" | "getArgumentOrAsk" | "cliVersionUpdates" | "handleVersionUpdates" | "execAsync" | "spawnAsync" | "executeCommand" | "getCommand" | "isCommandPerOs" | "getDbPath" | "rawPolygonToPolygon" | "dev" | "chatGPTAuth" | "detectChatGptPage" | "openAIChat" | "checkAndGetSlackFileUrl" | "elementExists" | "getAllMessages" | "getLatestMessages" | "getSlackChannelMemberList" | "getSlackChannels" | "getSlackMessageFrom" | "getSlackWorkspaces" | "scrapeSlackMessage" | "scrollToTop" | "selectSlackChannel" | "selectSlackWorkspace" | "sendSlackMessage" | "slackLogin" | "storeAllSlackChannel" | "storeSlackChannelMember" | "detectTwitterPage" | "generateTweetsReply" | "getTwitterPostUrl" | "postTweetOnTwitter" | "replyTweet" | "scrapPersonTweets" | "sotreChatGPTTweetReply" | "startReplyTweet" | "startTwitterSraper" | "storeMediaChannelInformation" | "storePersonTweets" | "tweetPropmtTemplate" | "getAbsolutePathMdFileName" | "getAllPostables" | "getPersonDetails" | "getPersonsMenu" | "getSocialMediaChannelsMenu" | "getSocialMediaMenu" | "addSocialMediaCredential" | "canBePosted" | "createAllSocialMediaPost" | "createSocialMediaPost" | "devtoCotentAnalyzer" | "facebookContentAnalyzer" | "getSocialMediaCredentials" | "mediumCotentAnalyzer" | "postSocialMediaPostToDevto" | "postSocialMediaPostToFacebook" | "postSocialMediaPostToMedium" | "postSocialMediaPostToReddit" | "postSocialMediaPostToTwitter" | "redditContentAnalyzer" | "socialMediaPostPlanner" | "startSocialMediaController" | "twitterContentAnalyzer" | "updateSocialMediaPost" | "makeExercises" | "driverLogin" | "driverSignup" | "earthDistance" | "getMyJeep" | "getPublicJeeps" | "updateMyProfile" | "addToken" | "ensureToken" | "findAssetParametersRecursively" | "getConversionInfoFromType" | "getExtensionFromAsset" | "getNameFromRelativePath" | "getNameWithTokenFromRelativePath" | "getReferencedAssetApiUrl" | "getTypeFromUrlOrPath" | "readableSize" | "removeTokenIfPresent" | "getEncoding" | "isBinary" | "isText" | "canAccessSync" | "canAccess" | "canExecuteSync" | "canReadSync" | "canSeeSync" | "canSee" | "canWriteSync" | "canWrite" | "copyAllRelativeFiles" | "findFileNameCaseInsensitive" | "getAllFoldersUntilFolder" | "getFileName" | "getFirstAvailableFilename" | "getFolderSizeObject" | "getFolder" | "getLastFolder" | "getOneFolderUpPath" | "getPathCombinations" | "oneUp" | "parseMd" | "removeAllExcept" | "renameAndCreate" | "updateSingleNestedJsonFile" | "writeJsonToFile" | "writeStringToFile" | "writeToFiles" | "getTsConfig" | "byteCount" | "calculatePathMetaData" | "categorizeFiles" | "getFolderSummary" | "getPathMainComment" | "getSizeSummary" | "sumSizeSummary" | "makeFileType" | "findFolderWhereMatch" | "findOperationBasePathWithClassification" | "findOperationBasePath" | "getAllPackageJsonDependencies" | "getCommonAncestor" | "getOperationClassificationObject" | "getOperationClassification" | "getOperationPathParse" | "getOperationPath" | "getOperationRelativePath" | "getPathParse" | "getPathsWithOperations" | "getProjectRoot" | "getRelativeLinkPath" | "getRelativePath" | "getRootPath" | "getSrcRelativeFileId" | "getSubExtensions" | "hasDependency" | "isBundle" | "isOperation" | "isUiOperation" | "isWorkspaceRoot" | "packageCompilesTs" | "tsconfigCompilesEsm" | "getDependenciesSummary" | "getOperationMetaData" | "recalculateOperationIndexJson" | "getFileTypeFromPath" | "getWriterType" | "hasSubExtension" | "isGeneratedOperationName" | "isGeneratedOperation" | "isIndexableFileId" | "getAssetInputType" | "getParameterContentType" | "isCalculatedParameter" | "isGeneratedParameterName" | "jsonToMdString" | "jsonToSayString" | "getSimpleJsonString" | "flattenMarkdownChunks" | "getKvmdItemsRecursively" | "getParagraphsRecursively" | "kvmdDataMap" | "kvmdDataToString" | "kvmdParseToMarkdownString" | "markdownStringToKvmdParse" | "parseKvmdLine" | "chunkToStringRecursively" | "getChunkParagraphsRecursively" | "getImplicitId" | "getMarkdownIntro" | "getMarkdownParseParagraphs" | "getMarkdownReferencePaths" | "getMarkdownReferencesFromParagraph" | "markdownParseToMarkdownStringFromContent" | "markdownParseToMarkdownString" | "mdContentParseRecursively" | "mdToJsonParse" | "parseFrontmatterMarkdownString" | "parseMarkdownParagraph" | "parseMdToChunks" | "removeHeaderPrefix" | "findCodeblocks" | "findCodespans" | "findEmbeds" | "findLinks" | "flattenMarkdownString" | "flattenMarkedTokenRecursive" | "parsePrimitiveArray" | "parsePrimitiveBoolean" | "parsePrimitiveString" | "parsePrimitive" | "tryParseJson" | "bodyFromQueryString" | "getFirstQueryStrings" | "getQueryPart" | "isValidEntry" | "toQueryString" | "MatchingText" | "PathSearchResults" | "findSentenceMatches" | "searchRecursiveObjectArray" | "frontmatterParseToString" | "frontmatterToObject" | "getFrontmatterValueString" | "markdownModelTypeToMarkdownString" | "objectToFrontmatter" | "parseFrontmatterString" | "quotedOrNot" | "stringifyNewlines" | "getFunctionExersize" | "createInvoiceContactMarkdown" | "createInvoiceMarkdown" | "createKeyValueMarkdown" | "money" | "newInvoice" | "printDate" | "markdownParseToMarkdownModelType" | "parseMarkdownModelTimestamp" | "tryParseDate" | "generateId" | "generatePassword" | "generateRandomString" | "generateTime" | "isEmail" | "createUser" | "getBacktickContents" | "isInPeriod" | "isOutOfStock" | "kvmdToCredential" | "upcomingOutgoingFlights" | "whereShouldIgo" | "crudPageToWebPages" | "functionFormPageToWebPage" | "stripCommentEnd" | "stripCommentStart" | "stripComment" | "stripSlashes" | "stripStar" | "getCompileErrors" | "getTypescriptErrorsFromFiles" | "writeBuildErrors" | "findFirstCommentTypes" | "getDataParameterNames" | "getPossibleReferenceParameterNames" | "getProperties" | "getRefLink" | "getReferencableModels" | "getReferenceParameterInfo" | "getSchemaItems" | "getSchema" | "simplifiedSchemaToTypeDefinitionString" | "simplifySchema" | "getSimpleTypescriptFileString" | "jsonToString" | "parseRawSimpleTypescriptFile" | "isResultOfInterface" | "makeTest" | "getGetApiUrl" | "untypedApiFunction" | "makeArraysGetEndpoint" | "makeGetEndpoint" | "converse" | "executeSdkFunction" | "getCachedExportedFunctions" | "getMenu" | "getSdkFunctionPaths" | "objectStringToJson" | "parseIfJson" | "parsePrimitiveJson" | "stringToJson" | "BreadCrumbs" | "renderBreadCrumbs" | "ClickableIcon" | "errorToast" | "infoToast" | "showStandardResponse" | "successToast" | "warningToast" | "FancyLoader" | "getFileType" | "LabeledButton" | "getFullPath" | "getLastPathsChunk" | "usePath" | "Tabs" | "createCodeblockMarkdown" | "useCustomUrlStore" | "getKeysAtPathFromNestedObject" | "getMenuPagesObject" | "makeNestedObjectFromQueryPathObject" | "mapChildObjectRecursive" | "nestedObjectToChildObject" | "nestedPathObjectToNestedMenuRecursive" | "nestifyQueryPathObjectRecursive" | "queryPathsArrayToNestedPathObject" | "reduceQueryPathsRecursively" | "camelCase" | "capitalCase" | "capitaliseFirstLetter" | "convertCase" | "fileSlugify" | "getDelimiter" | "humanCase" | "kebabCase" | "lowerCaseArray" | "pascalCase" | "slugify" | "snakeCase" | "apply" | "createEnum" | "createMappedObject" | "destructureOptionalObject" | "findLastIndex" | "getObjectFromParamsString" | "getObjectKeysArray" | "getParameterAtLocation" | "getSubsetFromObject" | "groupByKey" | "hasAllLetters" | "insertAt" | "isAllTrue" | "isArrayEqual" | "makeArray" | "mapAsync" | "mapKeys" | "mapMany" | "mapValuesSync" | "mergeNestedObject" | "mergeObjectParameters" | "mergeObjectsArray" | "mergeObjects" | "noEmptyString" | "objectMapAsync" | "objectMapSync" | "objectValuesMap" | "omitUndefinedValues" | "onlyDuplicates" | "onlyUnique2" | "onlyUnique" | "pickRandomArrayItem" | "putIndexAtIndex" | "removeIndexFromArray" | "removeOptionalKeysFromObjectStrings" | "removeOptionalKeysFromObject" | "replaceLastOccurence" | "reverseString" | "sumAllKeys" | "sumObjectParameters" | "sum" | "takeFirst" | "trimSlashes" | "getCallerFileName" | "parseTitle" | "cleanupTimer" | "generateUniqueId" | "getNewPerformance" | "oneByOne" | "isPlural" | "isSingular" | "singularize" | "runChildProcess" | "createLinkedinPost" | "linkedinGroupPost" | "linkedinPost" | "loginLinkedin" | "makeApi" | "scrapeConnections" | "sendMessageLinkedin" | "signUpLinkedin" | "clickOnSpanTag" | "delay" | "facebookLogin" | "foundOrNotXpath" | "foundOrNot" | "getBrowserPageById" | "getBrowserTabs" | "getBrowser" | "getChromeExecutablePath" | "getConnectedBrowsers" | "getIdlePage" | "getNewPage" | "gmailLogin" | "isCaptchaExist" | "logConsoleIfDebug" | "openMultiTabs" | "openNewBrowserOnChildProcess" | "openNewBrowser" | "openPage" | "racePromises" | "retryClickAndWaitSelector" | "retryWaitSelector" | "setBrowserPageIdle" | "setBrowserSession" | "setInnerHtml" | "setInputValue" | "solveReptcha" | "trueClick" | "twitterLogin" | "typeInTheInputField" | "typeOnTheTargetWithXpathSelector" | "waitMilliseconds">(functionName: TFunctionName, parameters: undefined | any[], tsFunction: TsFunction) => ValidationResult;
export {};
//# sourceMappingURL=validateInput.d.ts.map