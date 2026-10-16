// Gera a imagem do rodapé (poster 2:3) a partir da foto original em conteudo/fotos.
// Uso: node scripts/prepare-footer.mjs [caminho-da-imagem]
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const input = process.argv[2] ?? "conteudo/fotos/footer-porta.png";
const output = "public/media/footer/footer-porta.webp";

mkdirSync("public/media/footer", { recursive: true });

const { width, height } = await sharp(input).metadata();
const cropHeight = Math.round((width * 3) / 2);
// Começa um pouco abaixo do topo para os scarpins ficarem dentro do quadro.
const top = Math.min(130, height - cropHeight);

await sharp(input)
  .flatten({ background: "#ffffff" })
  .extract({ left: 0, top, width, height: cropHeight })
  .webp({ quality: 92, effort: 6 })
  .toFile(output);

console.log("ok", output, `${width}x${cropHeight}`);
