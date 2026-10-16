// Gera os arquivos de public/media a partir das fotos originais em conteudo/fotos.
// Uso: npm run media:prepare
import { mkdir, readdir, readFile, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const photosDir = path.resolve("conteudo/fotos");
const mediaDir = path.resolve("public/media");
const files = await readdir(photosDir);

function source(number) {
  // Aceita o nome exato do arquivo (ex.: "WhatsApp Image ... .jpeg") ou o número da foto.
  if (typeof number === "string") return path.join(photosDir, number);
  const prefix = String(number).padStart(2, "0");
  const file = files.find((name) => name.startsWith(`${prefix}-`));
  if (!file) throw new Error(`Foto ${prefix} não encontrada em conteudo/fotos`);
  return path.join(photosDir, file);
}

const webp = { quality: 90, effort: 6, smartSubsample: true };

// Só limpa o que este script gera (nunca hero/, profile/, content/, logos/ etc.,
// que são arquivos que você adiciona à mão).
await rm(path.join(mediaDir, "lookbook"), { recursive: true, force: true });
await rm(path.join(mediaDir, "footer", "footer.webp"), { force: true });
// A seção Formatos não usa mais imagens.
await rm(path.join(mediaDir, "formats"), { recursive: true, force: true });
await rm(path.join(mediaDir, "about", "gabi.webp"), { force: true });

// Lookbook (mosaico 3:4). `top` = quantos px cortar do topo antes do recorte 3:4
// (as fotos de bolsa/cereja precisam de um pouco de ar acima para não cortar o charm).
const lookbook = [
  { from: 32 },
  { from: "WhatsApp Image 2026-10-07 at 13.19.50 (1).jpeg" },
  { from: "WhatsApp Image 2026-10-07 at 13.19.50.jpeg", top: 100 },
  { from: "WhatsApp Image 2026-10-07 at 13.19.55.jpeg" },
  { from: 31 },
  { from: "WhatsApp Image 2026-10-07 at 13.19.57.jpeg", top: 120 },
];

const jobs = [
  // Lookbook (mosaico 3:4)
  ...lookbook.map((item, index) => ({
    from: item.from,
    out: `lookbook/${index + 1}.webp`,
    resize: [900, 1200],
    fromTop: item.top ?? 0,
  })),
  // Rodapé: gerado por `node scripts/prepare-footer.mjs` (não é mais criado aqui)
  // Imagem de compartilhamento (1200x630) - TROCAR pela arte final quando existir
  {
    from: 12,
    out: "share.jpg",
    crop: { left: 0, top: 330, width: 1200, height: 630 },
    jpeg: true,
  },
];

for (const job of jobs) {
  const output = path.join(mediaDir, job.out);
  await mkdir(path.dirname(output), { recursive: true });

  let image = sharp(source(job.from), { failOn: "none" }).rotate();
  if (job.crop) image = image.extract(job.crop);
  if (job.fromTop) {
    // Recorte 3:4 começando `fromTop` px abaixo do topo, na largura original.
    const { width, height } = await sharp(source(job.from), { failOn: "none" })
      .rotate()
      .metadata();
    const cropHeight = Math.min(Math.round((width * 4) / 3), height - job.fromTop);
    image = image.extract({ left: 0, top: job.fromTop, width, height: cropHeight });
  }
  if (job.resize) {
    image = image.resize(job.resize[0], job.resize[1], {
      fit: "cover",
      position: "top",
    });
  }
  image = job.jpeg ? image.jpeg({ quality: 88, mozjpeg: true }) : image.webp(webp);

  await image.toFile(output);
  console.log(`ok  public/media/${job.out}`);
}

// apple-icon a partir do icon.svg
const svg = await readFile(path.resolve("src/app/icon.svg"));
await sharp(svg, { density: 384 })
  .resize(180, 180)
  .png()
  .toFile(path.resolve("src/app/apple-icon.png"));
console.log("ok  src/app/apple-icon.png");
