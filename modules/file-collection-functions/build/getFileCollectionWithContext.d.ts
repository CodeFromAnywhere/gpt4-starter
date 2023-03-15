import { FileCollectionFile } from "file-collection-util";
import { ActionStatus } from "filename-conventions";
import { FunctionContext } from "function-types";
import { MarkdownIndex } from "markdown-types";
/**
Returns a file collection as an array of files with either the raw string or a path to download a blob



TODO: put this back, only for markdown files (they can be augmented). Is this the right place though?

```ts

  const augmentedResult = await augmentMarkdown(fileContentString, {
    // for now no code yet, it's too slow
    augmentCode: false,
    augmentContextualPrompts: false,
    augmentContextualPromptResults: true,
    augmentStatements: true,
    augmentWords: true,
    externalHost: undefined,
    markdown_projectRelativeFilePath: makeRelative(
      finalAbsolutePath,
      projectRoot
    ),
  });
```

*/
export declare const getFileCollectionWithContext: {
    (functionContext: FunctionContext, queryPath: string): Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
        files?: FileCollectionFile[] | undefined;
        markdownIndex?: MarkdownIndex | undefined;
        actionStatus?: ActionStatus | undefined;
        queryIsFolder?: boolean | undefined;
        projectRelativeFilePath?: string | undefined;
        projectRelativeFolderPath?: string | undefined;
    }>;
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=getFileCollectionWithContext.d.ts.map