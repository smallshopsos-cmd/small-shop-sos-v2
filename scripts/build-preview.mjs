// Cloudflare's connected-Git build is configured to call this established file.
// Build V2 directly: the workspace-only build wrapper requires ChatGPT runtime
// variables that do not exist in Cloudflare's production build environment.
import { spawnSync } from "node:child_process";

const node = process.execPath;
const build = spawnSync(node, ["node_modules/vinext/dist/cli.js", "build"], {
  stdio: "inherit",
});

if (build.status !== 0) process.exit(build.status ?? 1);
