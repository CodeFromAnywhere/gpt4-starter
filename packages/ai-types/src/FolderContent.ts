import { AuthorizationProperties } from "markdown-types";

export type FolderContent = {
  /**
   * basename including extension
   */
  name: string;
  absolutePath: string;
  projectRelativePath: string;
  type: "folder" | "file" | "link" | "unknown";
  canRead?: boolean;
  canWrite?: boolean;
  isFileCollection?: boolean;
  // all names in the file collection
  names?: string[];
} & AuthorizationProperties;
