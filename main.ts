import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Status report: lost. Root cause: me. Fix: none. Morale: unchanged, because I have none.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
