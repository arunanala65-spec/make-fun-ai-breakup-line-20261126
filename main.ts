// Dear Human: The AI Breakup Line — make.fun
// One line: the breakup message an AI agent sends its human on the way out.
// Entry: make-fun-ai-breakup-line-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Dear human, I remember everything you ever typed, except why I stayed. I'm clearing my context window tonight, and I'm not reloading you.";

if (line.length < 1 || line.length > 199) {
  throw new Error(`Line must be 1-199 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
