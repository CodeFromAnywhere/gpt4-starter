import {
  ContextualPromptResult,
  ProcessPromptFunctionResult,
  fileTypePerExtension,
} from "ai-types";
import { alterJsonMultiple, upsert } from "fs-orm";
import { fs, path } from "fs-util";
import { getProjectRoot } from "get-path";
import { makeRelative } from "fs-util-js";

import { openAIChat } from "chatgpt-controller";
import { generateId, Storing } from "model-types";
import { getContextualPrompt } from "./getContextualPrompt";
import { getContextualPromptResultJsonFilePath } from "./getContextualPromptResultJsonFilePath";
import { FileType } from "filename-conventions";

export type ProcessPromptProps = {
  contextContent?: string | null;
  selectionContent?: string | null;
  contextualPromptSlug?: string;
  anyContext?: string;
  /**
   * DESCRIPTION: These variables can be used: %context will be replaced by your context, %selection will be replaced by your selection. Provide a good prompt that combines that in a specific format
   */
  customPromptContent?: string;
  saveNewPromptWithName?: string | null;
  isHeadless?: boolean;
  prompt_projectRelativePath?: string;
  thread?: string;
  /**
   * If true, it'll just validate if this will be executed, it won't return the actual result but will execute the result in the background
   */
  isDeferred?: boolean;
};

export const controlChatGptWrapper = async (
  prompt: string,
  isHeadless: boolean | undefined,
  thread: string | undefined,
  controller: "playwright" | "puppeteer" | "faker"
): Promise<ProcessPromptFunctionResult> => {
  const result: ProcessPromptFunctionResult =
    controller === "playwright"
      ? { isSuccessful: false, message: "Playwright is disabled atm" } //controlChatGpt(prompt, isHeadless)
      : controller === "puppeteer"
      ? await openAIChat({ prompt, isHeadless, thread })
      : {
          isSuccessful: true,
          message: "Done test",
          result: {
            text: "Lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum",
            thread: "",
          },
        };

  return result;
};

export const processChatGptPrompt = async (
  config: ProcessPromptProps
): Promise<ProcessPromptFunctionResult> => {
  const {
    //context
    contextContent,
    prompt_projectRelativePath,
    selectionContent,
    //existing or new
    contextualPromptSlug,
    customPromptContent,
    saveNewPromptWithName,
    // config
    isHeadless,
    isDeferred,
    thread,
  } = config;

  const extension = prompt_projectRelativePath
    ? path.parse(prompt_projectRelativePath).ext.slice(1)
    : undefined;

  const contextType = fileTypePerExtension[
    extension as keyof typeof fileTypePerExtension
  ] as FileType | undefined;

  const projectRoot = getProjectRoot();
  if (!projectRoot) return { isSuccessful: false, message: "no projectroot" };
  const prompt_absolutePath = prompt_projectRelativePath
    ? path.join(projectRoot, prompt_projectRelativePath)
    : undefined;

  const exists = prompt_absolutePath
    ? fs.existsSync(prompt_absolutePath)
    : undefined;

  if (prompt_absolutePath && !exists) {
    return {
      isSuccessful: false,
      message: `You gave a path that doesn't exist:${prompt_absolutePath}`,
    };
  }

  const contextualPrompt = await getContextualPrompt(
    contextualPromptSlug,
    customPromptContent,
    saveNewPromptWithName || null,
    contextType
  );
  if (!contextualPrompt) {
    return {
      isSuccessful: false,
      message: "Couldn't create or find a contextual prompt",
    };
  }

  /**
ensure `%context, %selection, %comment` are all valid variables in the prompt

TODO: replace this with javascrpit-alike syntax (e.g. ${variableName})
*/

  const finalPrompt = { ...contextualPrompt }.promptContent
    .replaceAll("%context", contextContent || "")
    .replaceAll("%selection", selectionContent || "")
    .replaceAll("%any", selectionContent || contextContent || "");

  /**
   * Disable this for now
   */
  const useChatGpt = true;

  /**
send it to the processor, which sends response back after a few seconds
*/
  const promiseResult = controlChatGptWrapper(
    finalPrompt,
    isHeadless,
    thread,
    "puppeteer"
  ).then(async (promptFunctionResult) => {
    const newResult: Storing<ContextualPromptResult> = {
      createdAt: Date.now(),
      updatedAt: Date.now(),
      createdFirstAt: Date.now(),
      deletedAt: 0,
      id: generateId(),
      resultAssets: [],
      resultText: promptFunctionResult.result?.text,
      prompt: finalPrompt,
      selectionString: selectionContent || undefined,
      prompt_projectRelativePath,
      thread: promptFunctionResult.result?.thread,
      contextualPromptSlug: contextualPrompt.slug,
      isFake: !useChatGpt,
    };

    // NB: insert into .index

    const contextualPromptResultsJsonPath =
      await getContextualPromptResultJsonFilePath(prompt_projectRelativePath);

    const upsertResult = contextualPromptResultsJsonPath
      ? await alterJsonMultiple(
          {
            absolutePath: contextualPromptResultsJsonPath,
            modelName: "ContextualPromptResult",
            operationName: null,
            projectRelativePath: makeRelative(
              contextualPromptResultsJsonPath,
              projectRoot
            ),
          },
          (storedData) => {
            const result = upsert(storedData, newResult);
            return result;
          }
        )
      : undefined;

    return {
      upsertResult,
      promptFunctionResult: promptFunctionResult?.result,
    };
  });

  const processPromptFunctionResult = isDeferred
    ? undefined
    : await promiseResult;

  const result =
    isDeferred || !processPromptFunctionResult
      ? undefined
      : processPromptFunctionResult.promptFunctionResult;

  return {
    isSuccessful: isDeferred ? true : !!result?.text || false,
    message: isDeferred
      ? "Prompt is now being executed"
      : processPromptFunctionResult?.upsertResult?.message || "WentWrong",
    result,
  };
};
