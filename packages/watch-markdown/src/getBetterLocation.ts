import { textToText } from "ai-models";

/**
 * holy grail of LLM's: data structurisation
 */
export const getBetterLocation = async (config: {
  fileName: string;
  shortDescription: string;
  projectRelativePath: string;
  folderStructure: string;
}) => {
  const { fileName, folderStructure, projectRelativePath, shortDescription } =
    config;

  const locationResult = await textToText(`Consider this file: ${fileName}.
This is what it contains: ${shortDescription}
This is the file's current location in the file system: ${projectRelativePath}
This is the folder structure of my file system:
\`\`\`
${folderStructure}
\`\`\`


Is \`${projectRelativePath}\` a good location? Give me your top 5 locations you think this file should be located, with a weight (0-1) for each location.`);

  console.log({ locationResult });
};
