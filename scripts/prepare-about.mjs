import sharp from "sharp";
import { mkdirSync } from "node:fs";

const input = process.argv[2];
const output = "public/media/about/gabi-recorte.webp";

mkdirSync("public/media/about", { recursive: true });

const meta = await sharp(input).metadata();
console.log("origem:", meta.width, "x", meta.height, "alpha:", meta.hasAlpha);

// Remove a margem transparente para a foto encostar embaixo do arco.
const trimmed = await sharp(input)
  .ensureAlpha()
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 10 })
  .toBuffer({ resolveWithObject: true });
console.log("recorte:", trimmed.info.width, "x", trimmed.info.height);

// Folga transparente no topo: o arco arredonda o canto e não pode cortar a testa.
const headroom = Math.round(trimmed.info.width * 0.1);
const padded = await sharp(trimmed.data)
  .extend({ top: headroom, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

await sharp(padded).webp({ quality: 95, alphaQuality: 100 }).toFile(output);
console.log("ok:", output);
