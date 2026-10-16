# Mídia Kit · Gabí Vianna

Next.js 16 + Tailwind 4 + motion. Todo o conteúdo fica em `src/data/media-kit.ts`.

```bash
npm install
npm run dev          # http://localhost:3000  (/ redireciona para /midiakit)
npm run build
npm run media:check  # lista imagens pendentes e confere se os arquivos existem
npm run media:prints # regenera os prints de Instagram/TikTok a partir de referencias/
```

## Slots de imagem pendentes (blocos amarelos)

Qualquer imagem sem `src` aparece na página como um bloco **amarelo listrado**
"IMAGEM PENDENTE", com o tamanho ideal e o caminho onde salvar o arquivo.

Para resolver um slot:

1. Salve o arquivo final no caminho indicado (`file`), por exemplo `public/media/hero/gabi-recorte.webp`.
2. Em `src/data/media-kit.ts`, descomente a linha `// src: "..."` daquele slot.

Pendentes hoje:

- **Hero** — `public/media/hero/gabi-recorte.webp` (recorte com fundo removido, 1600×2000)
- **Capas dos resultados** — `public/media/content/resultado-{bolsas,scarpins}.webp`
- **Logos das marcas** — `public/media/logos/` (depois preencher `brands.items`)

`npm run media:check` mostra o que ainda falta.

## Prints de Instagram e TikTok

- Originais em `referencias/Instagram` e `referencias/Tiktok`.
- `npm run media:prints` (`scripts/prepare-prints.mjs`) remove a barra de status do celular,
  padroniza o enquadramento e **desfoca a área "Recompensas estimadas"** (valor financeiro pessoal).
  Gera `public/media/prints/*.webp`, `formats/live.webp` e a capa da live da Maybelline.
- Para trocar/atualizar um print, ajuste a receita em `scripts/prepare-prints.mjs`
  e a legenda em `profile.platforms` (`src/data/media-kit.ts`).

## Fotos

- Originais em `conteudo/fotos` (nome = número + grupo: `loreal`, `sacada`, `porta`, `retrato`, `bolsa`).
- `npm run media:prepare` recorta/converte as fotos usadas para `public/media`
  (`about`, `lookbook`, `formats`, `footer`, `share.jpg`).
