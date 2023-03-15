import { GetStaticProps } from "next";
import { takeFirst } from "js-util";
import { fs, path } from "fs-util";
import { operations } from "sdk-operations";
import { getProjectRoot } from "get-path";
import { QueryPageProps } from "./types";

/**
 * NB: Does not include the search results themselves since they are user-dependent.
 */
export const searchGetStaticProps: GetStaticProps<QueryPageProps> = async (
  context
) => {
  const query = takeFirst(context.params?.query) || null;
  const projectRoot = getProjectRoot();
  const searchWebPath = operations["os-web"];
  const headersPath =
    projectRoot && searchWebPath
      ? path.join(projectRoot, searchWebPath, "public", "headers")
      : undefined;

  const imagePaths = headersPath ? await fs.readdir(headersPath) : [];

  const timelineItems: {
    comment: string;
    filePath: string | undefined;
    line: number;
  }[] = []; // = await getTimelineItems();

  const props: QueryPageProps = {
    query,
    imagePaths,
    timelineItems,
  };

  return {
    props,
  };
};
