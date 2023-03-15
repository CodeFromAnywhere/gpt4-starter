import { makeMarkdownIndex } from "./makeMarkdownIndex";

const makeMarkdownIndexCli = () => {
  const [absoluteMarkdownFilePath] = process.argv.slice(2);
  makeMarkdownIndex(absoluteMarkdownFilePath);
};
makeMarkdownIndexCli();
