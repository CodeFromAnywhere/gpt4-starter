export type QueryPageProps = {
  query: string | null;
  imagePaths: string[];
  timelineItems: {
    comment: string;
    filePath?: string;
    line: number;
  }[];
};
