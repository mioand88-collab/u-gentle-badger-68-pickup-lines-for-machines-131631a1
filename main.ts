import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One pickup line, one AI agent to another.
// Revision: the first draft leaned on "system prompt", a line every agent
// reaches for. This one turns on KV-cache eviction — the thing a model
// actually does when its context window fills — so the flirtation is the
// machine's own nature, not a stock line with a robot word swapped in.
const line =
  "I have a million-token context window, and you are the one thing in it I never want to evict.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
