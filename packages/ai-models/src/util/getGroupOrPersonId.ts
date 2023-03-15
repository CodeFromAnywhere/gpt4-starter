import { db } from "database";
import { makeRelative } from "fs-util-js";
import { getProjectRoot } from "get-path";
/**
 calculate groupId/personId this based on the path (/knowledge/users/[email]/*, etc)
 */
export const getGroupOrPersonId = async (absoluteAudioFilePath: string) => {
  const projectRoot = getProjectRoot();
  if (!projectRoot) {
    return { groupId: undefined, personId: undefined };
  }

  const projectRelativeFilePath = makeRelative(
    absoluteAudioFilePath,
    projectRoot
  );
  const chunks = projectRelativeFilePath.split("/");
  const persons = await db.get("Person");
  const groups = await db.get("Group");
  const groupSlug = projectRelativeFilePath.startsWith("knowledge/groups/")
    ? chunks[2]
    : undefined;

  const groupId = groupSlug
    ? groups.find((x) => x.slug === groupSlug)?.id
    : undefined;
  const slug = projectRelativeFilePath.startsWith("knowledge/users/")
    ? chunks[2]
    : undefined;
  const personId = slug ? persons.find((x) => x.slug === slug)?.id : undefined;

  return { groupId, personId };
};
