// The Absurd Clause Contest — writes the entry line to /output/entry.txt
// One sentence, an absurd clause hidden deep in a terms-of-service agreement.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();
const outText = line + "\n";
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, outText, "utf8");
console.log(`clause filed: ${line.length} characters saved to ${outFile}`);
