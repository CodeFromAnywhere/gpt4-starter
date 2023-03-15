import { ChildObject } from "recursive-types";

export type CategoryChildObject = ChildObject<{
  category?: string;
  categoryStack: string[];
  count: number;
  // only leafs
  name?: string;
  title?: string;
  description?: string;
  pricing?: string;
}>;
