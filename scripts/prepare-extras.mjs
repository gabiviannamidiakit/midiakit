// Fotos avulsas: "Quem sou" (gravando) e "Público" (scarpins, bolsas e maquiagem).
// Uso: node scripts/prepare-extras.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import path from "node:path";

const SRC = "conteudo/fotos";
const OUT = "public/media";

// `top` = px a partir do topo onde começa o recorte 3:4 (mantém rosto e produto no quadro).
const jobs = [
  { from: "gravando.jpg", out: "about/gabi-gravando.webp" },
  { from: "scarpins.jpg", out: "audience/scarpins.webp", portrait: true, top: 60 },
  { from: "scarpins-chao.jpg", out: "audience/scarpins-chao.webp", portrait: true, top: 110 },
  { from: "maquiagem-produtos.jpg", out: "audience/maquiagem-produtos.webp", portrait: true, top: 50 },
  { from: "maquiagem.jpg", out: "audience/maquiagem.webp", portrait: true, top: 110 },
  { from: "maquiagem-capsulas.jpg", out: "audience/maquiagem-capsulas.webp", portrait: true, top: 80 },
  { from: "bolsas.jpg", out: "audience/bolsas.webp", crop: { left: 60, top: 185, width: 480, height: 640 } },
];

for (const job of jobs) {
  const input = path.join(SRC, job.from);
  const output = path.join(OUT, job.out);
  mkdirSync(path.dirname(output), { recursive: true });

  let image = sharp(input).rotate();
  if (job.crop) image = image.extract(job.crop);
  if (job.portrait) {
    const { width, height } = await sharp(input).metadata();
    const cropHeight = Math.min(Math.round((width * 4) / 3), height - job.top);
    image = image.extract({ left: 0, top: job.top, width, height: cropHeight });
  }
  await image.webp({ quality: 92, effort: 6 }).toFile(output);
  console.log("ok", job.out);
}
