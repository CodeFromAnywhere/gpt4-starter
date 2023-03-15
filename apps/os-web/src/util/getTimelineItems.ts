import { db } from "database";
import { path } from "fs-util";
import { operations } from "sdk-operations";

export const getTimelineItems = async () => {
  const comments = await db.get("TsComment");

  const items = comments
    .filter((x) => x.types.includes("todo"))
    .map((x) => {
      const isMultiLine = x.firstLine !== x.lastLine;

      const operationPath =
        operations[x.operationName as keyof typeof operations];

      const comment = isMultiLine
        ? `/**\n${x.comment}\n*/\n\n${x.rawStatement}`
        : `// ${x.comment} \n ${x.rawStatement}`;

      const filePath = operationPath
        ? path.join(operationPath, x.operationRelativeTypescriptFilePath)
        : undefined;
      return {
        comment,
        filePath,
        line: x.firstLine,
      };
    });

  return items;
};
