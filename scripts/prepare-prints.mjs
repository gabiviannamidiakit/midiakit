/**
 * Trata os prints de Instagram/TikTok em `referencias/` e gera os arquivos
 * usados pelo site em `public/media/prints`, `public/media/formats/live.webp`
 * e `public/media/content/resultado-live-maybelline.webp`.
 *
 * - remove a barra de status do celular (hora, 5G, bateria);
 * - padroniza o enquadramento (largura 736 x altura 1200);
 * - DESFOCA a área "Recompensas estimadas" (valor financeiro pessoal).
 *
 * Uso: npm run media:prints
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const REF = path.join(ROOT, "referencias");
const OUT = path.join(ROOT, "public", "media");

const W = 736;
const H = 1200;

const TT = (name) => path.join(REF, "Tiktok", `WhatsApp Image 2026-10-14 at ${name}.jpeg`);
const IG = (name) => path.join(REF, "Instagram", `WhatsApp Image 2026-10-14 at ${name}.jpeg`);

/**
 * header: faixa fixa do app (título + abas) colada no topo, quando o print
 *         foi rolado. y0: onde começa o corpo do conteúdo.
 */
const recipes = [
  // TikTok
  { out: "prints/tiktok-visao-geral", src: TT("10.41.48"), y0: 100,
    blur: [{ left: 372, top: 765, width: 330, height: 180 }] },
  { out: "prints/tiktok-conteudo", src: TT("10.41.48 (2)"), y0: 100 },
  { out: "prints/tiktok-origem", src: TT("10.41.48 (1)"), y0: 100 },
  { out: "prints/tiktok-espectadores", src: TT("10.41.49"), y0: 100 },
  { out: "prints/tiktok-publico", src: TT("10.41.49 (1)"), y0: 100 },
  { out: "prints/tiktok-seguidores-idade", src: TT("10.41.50 (1)"), y0: 100 },
  // Instagram
  { out: "prints/instagram-desempenho", src: IG("10.38.32 (2)"), header: [100, 300], y0: 330 },
  {
    out: "prints/instagram-publico",
    src: IG("10.38.31 (2)"),
    header: [100, 300],
    sections: [
      { src: IG("10.38.31 (2)"), y: 975, h: 300 },
      { src: IG("10.38.31 (3)"), y: 380, h: 700 },
    ],
  },
  { out: "prints/instagram-horarios", src: IG("10.38.32 (1)"), header: [100, 300], y0: 470 },
  // LIVE
  { out: "prints/live-geral", src: TT("10.41.51"), y0: 100 },
  { out: "prints/live-espectadores", src: TT("10.41.51 (2)"), header: [100, 270], y0: 300 },
];

async function bgColor(file) {
  const { data } = await sharp(file)
    .extract({ left: 6, top: 1585, width: 1, height: 1 })
    .raw()
    .toBuffer({ resolveWithObject: true });
  return { r: data[0], g: data[1], b: data[2], alpha: 1 };
}

async function loadWithBlur(recipe) {
  let img = sharp(recipe.src);
  if (!recipe.blur) return img.toBuffer();
  const base = await img.toBuffer();
  const overlays = [];
  for (const area of recipe.blur) {
    const piece = await sharp(base).extract(area).blur(22).toBuffer();
    overlays.push({ input: piece, left: area.left, top: area.top });
  }
  return sharp(base).composite(overlays).toBuffer();
}

async function build(recipe) {
  const base = await loadWithBlur(recipe);
  const background = await bgColor(recipe.src);
  const parts = [];
  let cursor = 0;

  if (recipe.header) {
    const [hy, hy2] = recipe.header;
    const headerH = hy2 - hy;
    parts.push({
      input: await sharp(base).extract({ left: 0, top: hy, width: W, height: headerH }).toBuffer(),
      left: 0,
      top: 0,
    });
    cursor = headerH;
  }

  if (recipe.sections) {
    for (const s of recipe.sections) {
      parts.push({
        input: await sharp(s.src).extract({ left: 0, top: s.y, width: W, height: s.h }).toBuffer(),
        left: 0,
        top: cursor,
      });
      cursor += s.h;
    }
  } else {
    const available = Math.min(H - cursor, 1600 - recipe.y0);
    parts.push({
      input: await sharp(base).extract({ left: 0, top: recipe.y0, width: W, height: available }).toBuffer(),
      left: 0,
      top: cursor,
    });
  }

  const file = path.join(OUT, `${recipe.out}.webp`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  await sharp({ create: { width: W, height: H, channels: 3, background } })
    .composite(parts)
    .webp({ quality: 88 })
    .toFile(file);
  console.log("ok", recipe.out);
}

async function extras() {
  // Capa do resultado "live Maybelline": miniatura do corte da live
  const cover = path.join(OUT, "content", "resultado-live-maybelline.webp");
  fs.mkdirSync(path.dirname(cover), { recursive: true });
  await sharp(TT("10.41.51 (2)"))
    .extract({ left: 270, top: 320, width: 194, height: 240 })
    .resize({ width: 388, kernel: "lanczos3" })
    .webp({ quality: 90 })
    .toFile(cover);
  console.log("ok content/resultado-live-maybelline");
}

for (const recipe of recipes) await build(recipe);
await extras();


