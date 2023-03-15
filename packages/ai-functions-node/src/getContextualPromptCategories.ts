import { CategoryChildObject, ContextualPrompt } from "ai-types";
import { db } from "database";
import { isArrayEqual, notEmpty, omitUndefinedValues, sum } from "js-util";
export type StackCount = {
  [stack: string]: number;
};

export const getObjectForkKeyRecursively = (
  stackCount: StackCount,
  key: string,
  originalKey: string,
  items: ContextualPrompt[]
): CategoryChildObject | undefined => {
  const categoryStack = key.split(".");

  if (categoryStack.length !== 1) return;

  const firstCategory = categoryStack[0];

  //get all children:

  //1) find all keys that start with firstCategory
  const childrenKeys = Object.keys(stackCount).filter((key) =>
    key.startsWith(`${firstCategory}.`)
  );

  //2) remove the firstCategory from the keys
  const strippedKeys = childrenKeys.map((key) =>
    key.replace(`${firstCategory}.`, "")
  );

  // create strippedStackCount
  const strippedStackCount = strippedKeys.reduce((newStackCount, key) => {
    return { ...newStackCount, [key]: stackCount[`${firstCategory}.${key}`] };
  }, {} as StackCount);

  //3) insert into this same function
  const categoryChildren = strippedKeys
    .map((strippedKey, index) =>
      getObjectForkKeyRecursively(
        strippedStackCount,
        strippedKey,
        childrenKeys[index],
        items
      )
    )
    .filter(notEmpty);

  const itemChildren = items
    .filter(
      (x) =>
        x.categoryStack &&
        categoryStack[categoryStack.length - 1] ===
          x.categoryStack[x.categoryStack.length - 1]
    )
    .map((item) => {
      const { categoryStack, description, name, title, pricing } = item;
      const object: CategoryChildObject = omitUndefinedValues({
        categoryStack: categoryStack!,
        count: 1,
        description,
        name,
        title,
        pricing,
      });
      return object;
    });

  //  console.log({ itemChildren, categoryStack });

  const children = categoryChildren.concat(itemChildren);

  const object: CategoryChildObject = {
    category: firstCategory,
    categoryStack,
    count: stackCount[firstCategory],
  };

  if (children.length) object.children = children;

  return object;
};

/**
Pretty cool stuff!

I've shown a way to count all nested categories and make a child object based on that

TODO: 

- Currently, only supports unique category names due to not checking the full stack
- needs to be formalised, generalised

Another, possibly more direct way, would be to traverse the filesystem, in the case of `fs-orm`, because we have files for every item in json-single.


*/
export const getContextualPromptCategories = async () => {
  const contextualPrompts = await db.get("ContextualPrompt");

  const stackCount = contextualPrompts.reduce((stackCount, current) => {
    // get the stack for this contextualPrompt
    const stack: string[] | undefined = current.categoryStack;

    if (!stack || stack.length === 0) {
      const already = stackCount.__root;
      return {
        ...stackCount,
        __root: already ? already + 1 : 1,
      };
    }

    const everyStackPart: string[] = stack.map((_, index, array) => {
      const stackUntilHere = array.slice(0, index + 1).join(".");
      return stackUntilHere;
    });

    const newStackCount = everyStackPart.reduce((stackCount, stackPart) => {
      const already = stackCount[stackPart];
      return {
        ...stackCount,
        [stackPart]: already ? already + 1 : 1,
      };
    }, stackCount);

    return newStackCount;
  }, {} as StackCount);

  // now, let's make a childObject out of that

  const { __root, ...stackCountWithoutRoot } = stackCount;

  const categories = Object.keys(stackCountWithoutRoot)
    .map((key) =>
      getObjectForkKeyRecursively(stackCount, key, key, contextualPrompts)
    )
    .filter(notEmpty);

  const rootCategoryChildObject: CategoryChildObject = {
    category: "root",
    categoryStack: [],
    count: __root + sum(categories.map((x) => x.count)),
    children: categories,
  };

  return rootCategoryChildObject;
};
