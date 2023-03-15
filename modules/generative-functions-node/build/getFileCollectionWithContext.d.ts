import { FunctionContext } from "function-context-type";
import { FileCollectionFile } from "./FileCollectionFile";
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
    (functionContext: FunctionContext, projectRelativeFilePath: string): Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
        files?: FileCollectionFile[] | undefined;
    }>;
    config: {
        isPublic: true;
    };
};
//# sourceMappingURL=getFileCollectionWithContext.d.ts.map