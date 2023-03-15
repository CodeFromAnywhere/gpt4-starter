import { ContextualPrompt } from "ai-types";
import { db } from "database";
import { Creation, generateId } from "model-types";
import { slugify } from "convert-case";
import { FileType } from "filename-conventions";
export const getContextualPrompt = async (
  contextualPromptSlug: string | undefined,
  customPromptContent: string | undefined,
  saveNewPromptWithName: string | null,
  contextType: FileType | undefined
): Promise<(Creation<ContextualPrompt> & { slug: string }) | undefined> => {
  if (contextualPromptSlug) {
    const contextualPrompts = await db.get("ContextualPrompt");

    const contextualPrompt = contextualPrompts.find(
      (x) => x.slug === contextualPromptSlug
    );

    if (!contextualPrompt) {
      return undefined;
    }

    return contextualPrompt;
  }

  if (!customPromptContent || customPromptContent.length === 0) {
    return undefined;
  }

  const isNew = saveNewPromptWithName && saveNewPromptWithName.length > 0;

  // console.log({ saveNewPromptWithName, isNew });
  const name = isNew ? saveNewPromptWithName : generateId();
  const newContextualPrompt: Creation<ContextualPrompt> & { slug: string } = {
    name,
    slug: slugify(name),
    promptContent: customPromptContent,
    contextType: [contextType || "text"],
    model: "chat-gpt",
    usesContext: customPromptContent?.includes("%context"),
    usesSelection: customPromptContent?.includes("%selection"),
    usesAnyContext: customPromptContent?.includes("%any"),
  };

  if (isNew) {
    await db.upsert("ContextualPrompt", newContextualPrompt);
  }

  return newContextualPrompt;
};
/*
See this quote:

"%selection"

How could you change this quote to target it to developers? Please provide 3 examples.*/
