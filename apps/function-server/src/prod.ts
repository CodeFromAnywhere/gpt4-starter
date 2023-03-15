import { execSync, spawnSync } from "child_process";
import { path } from "fs-util";
import { getProjectRoot } from "get-path";
import { operations } from "sdk-operations";
/**
`ship` command/function should simply rerun yarn prod for `os-web` and `function-server`
 */
export const prod = () => {
  const projectRoot = getProjectRoot();
  if (!projectRoot) {
    return;
  }

  const functionServerFolder = operations["function-server"];
  const osWebFolder = (operations as any)["os-web"];
  if (!osWebFolder) {
    return;
  }
  const absoluteFunctionServerFolder = path.join(
    projectRoot,
    functionServerFolder
  );
  const absoluteOsWebFolder = path.join(projectRoot, osWebFolder);

  spawnSync("yarn prod", {
    cwd: absoluteFunctionServerFolder,
    shell: true,
    stdio: "inherit",
  });
  spawnSync("yarn prod", {
    cwd: absoluteOsWebFolder,
    shell: true,
    stdio: "inherit",
  });
};
