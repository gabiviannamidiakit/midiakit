// Confere se todo "src" de /media citado no conteúdo existe em public/
// e lista os slots que ainda estão pendentes (sem src).
import { existsSync, readFileSync } from "node:fs";

const files = ["src/data/media-kit.ts", "src/lib/site.ts"];
const text = files.map((file) => readFileSync(file, "utf8")).join("\n");

// Ignora linhas comentadas (// src: "...") e olha só as referências ativas.
const active = text
  .split("\n")
  .filter((line) => !/^\s*(\/\/|\/\*|\*)/.test(line))
  .join("\n");
const paths = [
  ...new Set([...active.matchAll(/["'`](\/media\/[^"'`]+)["'`]/g)].map((m) => m[1])),
].filter((item) => !item.includes("${"));

let missing = 0;
for (const item of paths) {
  if (!existsSync(`public${item}`)) {
    console.log(`MISSING  ${item}`);
    missing += 1;
  }
}
console.log(`${paths.length} media refs, ${missing} missing\n`);

const pending = [...text.matchAll(/^\s*\/\/ src: "(\/media\/[^"]+)"/gm)].map((m) => m[1]);
console.log(`${pending.length} imagens PENDENTES (slots amarelos):`);
for (const item of pending) {
  const done = existsSync(`public${item}`);
  console.log(`  ${done ? "[arquivo existe - descomente o src]" : "[a desenvolver]"} ${item}`);
}
