// Cloudflare's connected-Git build is configured to call this established file.
// Build V2 directly: the workspace-only build wrapper requires ChatGPT runtime
// variables that do not exist in Cloudflare's production build environment.
import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

// The GitHub browser upload flattened these existing SVGs. Restore them to
// the public paths used by the live About page before Cloudflare builds.
const toolLogos = [
  "visualstudiocode", "shopify", "openai", "python", "amazon", "github",
  "cloudflare", "tiktok", "framer", "google", "etsy", "microsoft", "figma", "canva",
];
const toolLogoDirectory = resolve("public/assets/tool-logos");
mkdirSync(toolLogoDirectory, { recursive: true });
for (const name of toolLogos) {
  const source = resolve(`${name}.svg`);
  if (!existsSync(source)) throw new Error(`Required tool logo is missing: ${name}.svg`);
  copyFileSync(source, resolve(toolLogoDirectory, `${name}.svg`));
}

const node = process.execPath;
const build = spawnSync(node, ["node_modules/vinext/dist/cli.js", "build"], {
  stdio: "inherit",
});

if (build.status !== 0) process.exit(build.status ?? 1);
