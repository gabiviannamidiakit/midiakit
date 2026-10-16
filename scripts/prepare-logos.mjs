// Otimiza os logos das marcas (public/media/marcas/*.png, brancos com fundo transparente):
// remove as margens transparentes e gera public/media/logos/N.webp.
// Uso: node scripts/prepare-logos.mjs
import sharp from "sharp";
import { mkdirSync, readdirSync } from "node:fs";

const SRC = "public/media/marcas";
const OUT = "public/media/logos";
mkdirSync(OUT, { recursive: true });

const files = readdirSync(SRC)
  .filter((name) => /^\d+\.png$/i.test(name))
  .sort((a, b) => parseInt(a) - parseInt(b));

for (const file of files) {
  const n = parseInt(file);
  const { data, info } = await sharp(`${SRC}/${file}`)
    .ensureAlpha()
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 5 })
    .resize({ width: 560, height: 200, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 95, alphaQuality: 100, effort: 6 })
    .toBuffer({ resolveWithObject: true });

  await sharp(data).toFile(`${OUT}/${n}.webp`);
  console.log(`${n}: ${info.width}x${info.height}`);
}
