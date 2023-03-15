import { path, writeJsonToFile } from "fs-util";
import { MarkdownIndex } from "markdown-types";
import { readMarkdownFile } from "read-markdown-file";
import { textToText } from "ai-models";
import { notEmpty, omitUndefinedValues } from "js-util";
import { isLocked, lock, lockError, unlock } from "lock-util";
import { getUpdatedTimeObject } from "model-types";
import { calculateTokenCount } from "openai-wrapper";
import { getIsPrivate } from "./getIsPrivate";

/**
 * Creates `MarkdownIndex` using GPT and other things.
 
 */
export const makeMarkdownIndex = async (absoluteMarkdownFilePath: string) => {
  if (isLocked(absoluteMarkdownFilePath)) {
    return;
  }

  await lock(
    absoluteMarkdownFilePath,
    "making markdown index",
    "makeMarkdownIndex",
    [absoluteMarkdownFilePath]
  );

  const pathParse = path.parse(absoluteMarkdownFilePath);
  const markdownParse = await readMarkdownFile(absoluteMarkdownFilePath);
  if (!markdownParse) {
    await lockError(
      absoluteMarkdownFilePath,
      "Can't find file",
      undefined,
      "makeMarkdownIndex",
      [absoluteMarkdownFilePath]
    );
    return;
  }

  const contents = markdownParse.raw;

  if (calculateTokenCount(contents) > 1024) {
    console.log("FILE TOO LONG, FOR NOW.");
    lockError(
      absoluteMarkdownFilePath,
      "file too long, for now",
      undefined,
      "makeMarkdownIndex",
      [absoluteMarkdownFilePath]
    );

    return;
  }
  const title = (
    await textToText(`Please describe the contents of this file in just a few words:
    
  \`\`\`
  ${contents}
  \`\`\``)
  )?.result;

  const seoTitle = (
    await textToText(`Can you come up with a good SEO title for this webpage?
    
  \`\`\`
  ${contents}
  \`\`\``)
  )?.result;

  const keywords = (
    await textToText(`Can you come up with some keywords for this file?
    
  \`\`\`
  ${contents}
  \`\`\``)
  )?.result?.split(",");

  const seoKeywords = (
    await textToText(`Can you come up with some SEO keywords for this webpage?
    
  \`\`\`
  ${contents}
  \`\`\``)
  )?.result
    ?.split(",")
    .map((x) => x.trim());

  const imagePromptDescriptions = (
    await textToText(`Can you come up with a list of visual descriptions for images that would present this content well?
      
    \`\`\`
    ${contents}
    \`\`\``)
  )?.result?.split("\n");
  const socialMediaPost = (
    await textToText(`What would be a good social media post about this information?
      
    \`\`\`
    ${contents}
    \`\`\``)
  )?.result;

  const socialMediaPosts = socialMediaPost ? [socialMediaPost] : [];

  const summary = (
    await textToText(`Summarize this piece of text:
    
  \`\`\`
  ${contents}
  \`\`\``)
  )?.result;

  const takeAways = (
    await textToText(`What are the main take-aways from this text?
      
    \`\`\`
    ${contents}
    \`\`\``)
  )?.result?.split("\n");

  const statements = (
    await textToText(`Can you list the most important statements made in this piece of text?
      
    \`\`\`
    ${contents}
    \`\`\``)
  )?.result?.split("\n");
  /*

  const snippet = (
    await textToText(`Can you provide me a snippet of this file that would be a good standalone piece of content? If there is none, no problem.
    
  \`\`\`
  ${contents}
  \`\`\``)
  )?.result;

  const snippets = [
    snippet
      ? {
          firstLine: snippet.split("\n")[0],
          lastLine: snippet.split("\n").pop()!,
        }
      : undefined,
  ].filter(notEmpty);
*/

  const isPrivate = (await getIsPrivate(contents))?.isPrivate;
  /**
   * TODO: make much more here. super important
   */
  const markdownIndex: MarkdownIndex = omitUndefinedValues({
    ...getUpdatedTimeObject(),
    isSource: false,
    isPrivate,
    source: "makeMarkdownIndex v1",
    createdAt: Date.now(),
    title,
    keywords,
    imagePromptDescriptions,
    seoKeywords,
    seoTitle,
    socialMediaPosts,
    summary,
    takeAways,
    statements,
    // later
    suggestedLocation: undefined,
  });

  const indexPath = path.join(
    pathParse.dir,
    `${pathParse.name}.MarkdownIndex.json`
  );

  const isSuccessful = await writeJsonToFile(indexPath, markdownIndex);

  await unlock(absoluteMarkdownFilePath);
};
