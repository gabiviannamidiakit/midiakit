// Gera a imagem do rodapé (poster 2:3) a partir da foto original em conteudo/fotos.
// Uso: node scripts/prepare-footer.mjs [caminho-da-imagem]
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const input = process.argv[2] ?? "conteudo/fotos/footer-loreal.jpg";
const output = "public/media/footer/footer-loreal.webp";

mkdirSync("public/media/footer", { recursive: true });

const image = sharp(input).rotate();
const { width, height } = await image.metadata();
const cropHeight = Math.min(Math.round((width * 3) / 2), height);
// Um pouco abaixo do topo: o arco do frame cobre o céu e os pés entram no quadro.
const top = Math.min(140, height - cropHeight);

await image
  .extract({ left: 0, top, width, height: cropHeight })
  .webp({ quality: 92, effort: 6 })
  .toFile(output);

console.log("ok", output, `${width}x${cropHeight} top=${top}`);
