// Gera a imagem do rodapé (poster 2:3) a partir da foto original em conteudo/fotos.
// Uso: node scripts/prepare-footer.mjs [caminho-da-imagem]
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const input = process.argv[2] ?? "conteudo/fotos/footer-loreal.jpg";
const output = "public/media/footer/footer-loreal.webp";

mkdirSync("public/media/footer", { recursive: true });

const image = sharp(input).rotate();
const { width, height } = await image.metadata();

// Poster 2:3. Foto mais larga: corta as laterais e mantém o corpo inteiro.
// Foto mais alta: corta um pouco do topo, porque o arco cobre o céu.
const targetRatio = 2 / 3;
let extract;
if (width / height > targetRatio) {
  const cropWidth = Math.round(height * targetRatio);
  extract = {
    left: Math.round((width - cropWidth) / 2),
    top: 0,
    width: cropWidth,
    height,
  };
} else {
  const cropHeight = Math.min(Math.round(width / targetRatio), height);
  extract = {
    left: 0,
    top: Math.min(140, height - cropHeight),
    width,
    height: cropHeight,
  };
}

await image.extract(extract).webp({ quality: 92, effort: 6 }).toFile(output);

console.log("ok", output, `${extract.width}x${extract.height}`, extract);
