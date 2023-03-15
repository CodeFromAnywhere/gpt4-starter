#!/usr/bin/env node

import { db } from "database";
import { watchAll } from "../watchAll";

/**
 * Runs `watchAll`.
 */
const watchAllCli = async () => {
  const tsFunctions = await db.get("TsFunction");
  watchAll(tsFunctions);
};
watchAllCli();
