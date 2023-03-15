import { db } from "database";
import { watchAll } from "./watchAll";

const test = async () => {
  const tsFunctions = await db.get("TsFunction");
  watchAll(tsFunctions);
};

test();
