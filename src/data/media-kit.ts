import type { MediaKit } from "@/types/media-kit";

/**
 * Conteúdo do mídia kit da Gabí Vianna.
 *
 * Slots de imagem SEM `src` aparecem como blocos amarelos "IMAGEM PENDENTE"
 * na página. Para resolver: salve o arquivo no caminho indicado em `file`
 * e descomente o `src` correspondente.
 */
export const mediaKit: MediaKit = {
  site: {
    title: "Gabí Vianna | Mídia Kit de Moda e Beleza",
    description:
      "Mídia kit de Gabí Vianna, Fashion & Beauty Creator. Review, teste de produto, unboxing e live shop com curadoria de moda e beleza para marcas que buscam conexão e resultado.",
    keywords: [
      "Gabí Vianna",
      "bygabivianna",
      "mídia kit",
      "criadora de conteúdo",
      "fashion creator",
      "beauty creator",
      "moda",
      "beleza",
      "TikTok Shop",
      "influencer Rio de Janeiro",
    ],
  },

  nav: [
    { id: "sobre", label: "Sobre" },
    { id: "numeros", label: "Números" },
    { id: "publico", label: "Público" },
    { id: "curadoria", label: "Curadoria" },
    { id: "formatos", label: "Formatos" },
    { id: "contato", label: "Contato" },
  ],

  contact: {
    email: "bygabivianna@gmail.com",
    phone: "(21) 96739-0505",
    whatsappHref: "https://wa.me/5521967390505",
    socials: [
      {
        id: "instagram",
        label: "Instagram",
        handle: "@bygabivianna",
        href: "https://www.instagram.com/bygabivianna",
      },
      {
        id: "tiktok",
        label: "TikTok",
        handle: "@bygabivianna",
        href: "https://www.tiktok.com/@bygabivianna",
      },
    ],
  },

  hero: {
    kicker: "Mídia Kit · Edição 2026",
    name: "Gabí",
    surname: "Vianna",
    role: "Fashion & Beauty Creator",
    headline: "Estilo que inspira, beleza que conecta e conteúdo que transforma.",
    tagline:
      "Crio conteúdo de moda e beleza com curadoria, olhar estratégico e muita autenticidade, para marcas que querem conexão de verdade e resultado que aparece.",
    image: {
      alt: "Gabí Vianna, Fashion & Beauty Creator",
      aspect: "cover",
      src: "/media/hero/gabi-recorte.webp",
      label: "HERO · recorte da Gabí",
      hint: "Foto dela com FUNDO REMOVIDO (WebP/PNG transparente), do busto ou corpo inteiro, encostada embaixo. O arco rosa, o nome e os brilhos já são feitos pelo site. Boas fontes: 10-loreal, 12-loreal, 17-porta, 14-porta.",
      file: "public/media/hero/gabi-recorte.webp",
    },
  },

  about: {
    greeting: "Olá, sou a",
    title: "Gabí",
    paragraphs: [
      "Sou criadora de conteúdo de moda e beleza no TikTok e no Instagram. A moda sempre fez parte de quem eu sou, e no digital encontrei o espaço para transformar esse olhar em conteúdo que inspira e vende.",
      "Meu diferencial é unir curadoria de produtos, olhar apurado para a moda e visão estratégica: identifico peças com potencial, destaco o que cada uma tem de especial e apresento de forma autêntica para as consumidoras certas.",
      "Escolho com cuidado as marcas que entram no meu conteúdo, para construir parcerias que façam sentido para a minha audiência e gerem resultado de verdade.",
    ],
    image: {
      alt: "Gabí gravando conteúdo de maquiagem com o celular no tripé",
      aspect: "landscape",
      src: "/media/about/gabi-gravando.webp",
    },
  },

  profile: {
    title: "Os números",
    highlight: "que importam",
    subtitle: "Dados diretos das plataformas · set e out de 2026",
    results: [
      { value: "+120", label: "bolsas vendidas", hint: "nos últimos 30 dias" },
      { value: "+100", label: "scarpins vendidos", hint: "a partir dos meus conteúdos" },
      { value: "49", label: "marcas parceiras", hint: "moda, beleza e acessórios" },
      { value: "25h", label: "de Live Shop", hint: "ao vivo nos últimos 60 dias" },
    ],
    body: "Os números contam uma parte da história: o alcance mostra visibilidade, mas é a conexão que gera confiança. Meus conteúdos nascem de curadoria e performam pela relação que construí com a audiência. É isso que transforma visualização em desejo de compra.",
    tiktok: {
      views: { value: "295,5 mil", label: "Visualizações", hint: "dos meus vídeos no TikTok, com alta de 122% no período" },
      viewers: { value: "140,4 mil", label: "Espectadores" },
      visits: { value: "1,1 mil", label: "Visitas ao perfil" },
      interactions: {
        value: "4,4 mil",
        label: "Interações no TikTok",
        breakdown: [
          { value: "3,9 mil", label: "curtidas" },
          { value: "171", label: "comentários" },
          { value: "338", label: "compartilhamentos" },
        ],
      },
    },
    community: {
      total: { value: "8,6 mil", label: "Comunidade" },
      platforms: [
        { id: "tiktok", label: "TikTok", value: "7.213", share: 84 },
        { id: "instagram", label: "Instagram", value: "1.348", share: 16 },
      ],
    },
    instagram: {
      reach: { value: "7,3 mil", label: "Visualizações", hint: "no Instagram, com 1,3 mil contas alcançadas" },
      interactions: { value: "361", label: "interações" },
      mixTitle: "Visualizações por tipo de conteúdo",
      mix: [
        { id: "stories", label: "Stories", value: 4.2, suffix: "4,2 mil" },
        { id: "posts", label: "Posts", value: 1.8, suffix: "1,8 mil" },
        { id: "reels", label: "Reels", value: 1.2, suffix: "1,2 mil" },
      ],
    },
    live: {
      label: "Live Shop",
      period: "Últimos 60 dias",
      stats: [
        { value: "18,3 mil", label: "visualizações" },
        { value: "16,1 mil", label: "espectadores" },
        { value: "25h", label: "ao vivo" },
        { value: "636", label: "comentários" },
      ],
      note: "134 novos seguidores vindos das lives, com 71% de público feminino.",
    },
    platforms: {
      title: "Direto das plataformas",
      intro:
        "Prints reais dos painéis de análise do TikTok, do Instagram e das lives. Clique (ou toque) em uma imagem para ampliar.",
      tabs: [
        {
          id: "tiktok",
          label: "TikTok",
          period: "15 set a 12 out",
          items: [
            {
              src: "/media/prints/tiktok-visao-geral.webp",
              alt: "Painel de análise do TikTok, visão geral",
              title: "Visão geral",
              caption: "295,5 mil visualizações e 1,1 mil visitas ao perfil, com alta de 122% no período.",
            },
            {
              src: "/media/prints/tiktok-conteudo.webp",
              alt: "Painel de análise do TikTok, principais publicações",
              title: "Principais publicações",
              caption: "O vídeo de maior alcance passou de 57 mil visualizações em 28 dias.",
            },
            {
              src: "/media/prints/tiktok-origem.webp",
              alt: "Painel de análise do TikTok, origem do tráfego",
              title: "Origem do tráfego",
              caption: "83% das visualizações vêm da aba Para Você: alcance orgânico além de quem já me segue.",
            },
            {
              src: "/media/prints/tiktok-espectadores.webp",
              alt: "Painel de análise do TikTok, espectadores",
              title: "Espectadores",
              caption: "140,4 mil espectadores, dos quais 99,5 mil são novos: o conteúdo chega a gente nova.",
            },
            {
              src: "/media/prints/tiktok-publico.webp",
              alt: "Painel de análise do TikTok, gênero dos espectadores",
              title: "Gênero dos espectadores",
              caption: "68% de quem assiste é feminino, com pico de atividade nas segundas, entre 20h e 21h.",
            },
            {
              src: "/media/prints/tiktok-seguidores-idade.webp",
              alt: "Painel de análise do TikTok, idade dos seguidores",
              title: "Idade dos seguidores",
              caption: "67% dos seguidores têm entre 25 e 44 anos.",
            },
          ],
        },
        {
          id: "instagram",
          label: "Instagram",
          period: "14 set a 13 out",
          items: [
            {
              src: "/media/prints/instagram-desempenho.webp",
              alt: "Painel do Instagram, desempenho por tipo de conteúdo",
              title: "Desempenho por formato",
              caption: "Stories lideram com 4,2 mil visualizações, seguidos de Posts (1,8 mil) e Reels (1,2 mil).",
            },
            {
              src: "/media/prints/instagram-publico.webp",
              alt: "Painel do Instagram, gênero e faixa etária",
              title: "Gênero e idade",
              caption: "79,5% das seguidoras são mulheres e 66,8% têm entre 25 e 44 anos.",
            },
            {
              src: "/media/prints/instagram-horarios.webp",
              alt: "Painel do Instagram, horários de atividade dos seguidores",
              title: "Horários de atividade",
              caption: "Seguidores mais ativos das 18h às 21h, às segundas, terças e quintas.",
            },
          ],
        },
        {
          id: "live",
          label: "Lives",
          period: "60 dias",
          items: [
            {
              src: "/media/prints/live-geral.webp",
              alt: "Painel de análise de LIVE do TikTok, visão geral",
              title: "Visão geral das lives",
              caption: "18,3 mil visualizações, 25h ao vivo e 636 comentários, com 134 novos seguidores.",
            },
            {
              src: "/media/prints/live-espectadores.webp",
              alt: "Painel de análise de LIVE do TikTok, espectadores",
              title: "Quem assiste",
              caption: "71% de público feminino, 31% entre 25 e 34 anos e 99% no Brasil.",
            },
          ],
        },
      ],
    },
  },
  audience: {
    title: "Quem é meu",
    highlight: "público",
    paragraphs: [
      "Cerca de 70% da minha audiência é feminina, em sua maioria entre 18 e 44 anos. São mulheres que buscam conforto e estilo em scarpins e bolsas icônicas, além de maquiagens fáceis para o dia a dia.",
      "Elas me acompanham porque se identificam com as minhas escolhas. Quando apresento uma peça, enxergam como ela se encaixa na própria rotina, e é daí que nasce o interesse de compra.",
    ],
    photos: [
      {
        caption: "Scarpins",
        images: [
          {
            alt: "Gabí mostrando scarpins vermelho e azul",
            aspect: "portrait",
            src: "/media/audience/scarpins.webp",
          },
          {
            alt: "Gabí sentada no chão, com scarpins ao redor",
            aspect: "portrait",
            src: "/media/audience/scarpins-chao.webp",
          },
        ],
      },
      {
        caption: "Bolsas",
        images: [
          {
            alt: "Gabí mostrando uma bolsa caramelo, com outras bolsas ao fundo",
            aspect: "portrait",
            src: "/media/audience/bolsas.webp",
          },
        ],
      },
      {
        caption: "Maquiagem",
        images: [
          {
            alt: "Gabí mostrando três body mists coloridos",
            aspect: "portrait",
            src: "/media/audience/maquiagem-capsulas.webp",
          },
          {
            alt: "Gabí mostrando três produtos de maquiagem amarelos",
            aspect: "portrait",
            src: "/media/audience/maquiagem-produtos.webp",
          },
          {
            alt: "Gabí aplicando batom líquido",
            aspect: "portrait",
            src: "/media/audience/maquiagem.webp",
          },
        ],
      },
    ],
    chips: ["Classes B e C", "Brasil 95%+", "Dados das plataformas"],
    gender: { value: 68, label: "feminino", rest: "32% masculino e outros" },
    age: [
      { id: "18-24", label: "18–24", value: 32.3, suffix: "32%" },
      { id: "25-34", label: "25–34", value: 34.9, suffix: "35%" },
      { id: "35-44", label: "35–44", value: 18.3, suffix: "18%" },
      { id: "45-54", label: "45–54", value: 11.8, suffix: "12%" },
    ],
    locations: [
      { id: "sp", label: "São Paulo", value: 17, suffix: "17%" },
      { id: "rj", label: "Rio de Janeiro", value: 8, suffix: "8%" },
      { id: "bh", label: "Belo Horizonte", value: 5, suffix: "5%" },
      { id: "bsb", label: "Brasília", value: 4, suffix: "4%" },
      { id: "cwb", label: "Curitiba", value: 3, suffix: "3%" },
    ],
    locationsNote: "Cerca de 60% das localizações não são identificadas pela plataforma.",
  },

  curation: {
    title: "Curadoria que",
    highlight: "converte",
    paragraphs: [
      "Meu conteúdo parte de uma curadoria: escolho peças com potencial, destaco o que as torna especiais e mostro, de forma natural, como entram na rotina de quem assiste. Não é só apresentar um produto, é criar desejo com contexto.",
      "Review, teste de produto e unboxing são meus formatos favoritos. Com a experiência do TikTok Shop, uno criatividade e visão comercial para criar conteúdos que fortalecem o posicionamento da marca e têm potencial de gerar resultado.",
    ],
    photos: [
      { alt: "Gabí com bolsa creme e charm de coração", aspect: "portrait", src: "/media/lookbook/1.webp" },
      { alt: "Gabí de blusa branca e jeans, com a mão nos cabelos", aspect: "portrait", src: "/media/lookbook/2.webp" },
      { alt: "Gabí mostrando uma bolsa caramelo com alça transversal", aspect: "portrait", src: "/media/lookbook/3.webp" },
      { alt: "Gabí em close, com as mãos no rosto", aspect: "portrait", src: "/media/lookbook/4.webp" },
      { alt: "Gabí com bolsa caramelo", aspect: "portrait", src: "/media/lookbook/5.webp" },
      { alt: "Gabí com bolsa vinho e charm de cerejas", aspect: "portrait", src: "/media/lookbook/6.webp" },
    ],
    resultsTitle: "Meus maiores resultados",
    resultsBody:
      "Curadoria bem feita vira desejo, e desejo vira venda. Alguns dos resultados recentes dos meus conteúdos.",
    results: [
      {
        id: "bolsas",
        numeral: "+120",
        tag: "Bolsas",
        title: "Bolsas que saem do óbvio",
        stats: "bolsas vendidas nos últimos 30 dias",
      },
      {
        id: "scarpins",
        numeral: "+100",
        tag: "Calçados",
        title: "Scarpins confortáveis e com personalidade",
        stats: "scarpins vendidos a partir dos meus conteúdos",
      },
      {
        id: "lives",
        numeral: "25h",
        tag: "Live Shop",
        title: "Experiência em vendas ao vivo",
        stats: "ao vivo nos últimos 60 dias, com 18,3 mil visualizações e 636 comentários",
      },
    ],
  },

  brands: {
    title: "Marcas já",
    highlight: "atendidas",
    countLabel: "marcas parceiras",
    intro:
      "De grandes redes a marcas independentes, em moda, beleza e acessórios. Trabalho com quem conversa com o meu estilo e com a minha rotina, para construir parcerias consistentes e duradouras.",
    // Logos brancos (fundo transparente) em public/media/marcas, otimizados por `node scripts/prepare-logos.mjs`.
    items: [
      { id: "maybelline", name: "Maybelline New York", src: "/media/logos/1.webp", width: 560, height: 87 },
      { id: "toque-e-estilo", name: "Toque e Estilo Store", src: "/media/logos/2.webp", width: 490, height: 200 },
      { id: "up4you", name: "UP4YOU", src: "/media/logos/3.webp", width: 560, height: 97 },
      { id: "pini", name: "Pini Personalizados", src: "/media/logos/4.webp", width: 334, height: 200 },
      { id: "carrie-koller", name: "Carrie Koller", src: "/media/logos/5.webp", width: 560, height: 58 },
      { id: "simple", name: "Simple Organic", src: "/media/logos/6.webp", width: 560, height: 117 },
      { id: "maple-leaf", name: "Maple Leaf", src: "/media/logos/7.webp", width: 224, height: 200 },
      { id: "aura-beauty", name: "Aura Beauty", src: "/media/logos/8.webp", width: 480, height: 200 },
    ],
    pending: {
      alt: "Logos das marcas atendidas",
      aspect: "wide",
      label: "LOGOS · 8 marcas atendidas",
      hint: "Logos das marcas (incluindo Maybelline), em cor ou preto, fundo transparente, um arquivo por marca. Depois adicione em `brands.items`.",
      file: "public/media/logos/1.webp … 8.webp",
    },
    directoryTitle: "Marcas com quem já criei conteúdo e construí parcerias",
    categories: [
      {
        id: "beleza",
        title: "Beleza e cosméticos",
        brands: [
          "Maybelline",
          "L’Oréal",
          "Contém 1g",
          "Simple Organic",
          "Aura Beauty",
          "Vekka Cosmetics",
          "Elizavecca",
          "Ricca",
          "Sace Lady",
          "Betsy",
        ],
      },
      {
        id: "moda",
        title: "Moda, bolsas, calçados e acessórios",
        brands: [
          "Riachuelo",
          "C&A",
          "Saint Germain",
          "Maple Leaf",
          "Carrie Koller",
          "UP4YOU",
          "Toque Estilo",
          "PINI Personalizados",
          "Roccia Prime",
          "Bellamore",
          "DC Calçados",
          "Mova Bags",
          "Di Santini",
          "Tomi Mito",
          "Arcos Íris",
          "Toda Up",
          "Lorizze",
          "Yzzamello",
          "Heyoo Óculos",
          "JR Group Bolsas e Mochilas",
          "Lovely Bolsas",
          "Tizi Moda",
          "Layton Vívian Bolsas",
          "Bellamira",
          "Summer",
          "HG Calçados",
          "Rhode Jeans",
          "Bostanten",
          "Mossdoom",
          "Tudo Delas Bolsas",
          "Toda Missy",
          "BtwoB",
          "Closet Feminino",
          "Moda Top Calçados",
          "ModasRKelmy",
          "Vento Livre",
          "Romantic Crown",
          "Always Fit",
          "BettDow",
        ],
      },
    ],
  },

  // Sem feedbacks enviados ainda: a seção fica oculta enquanto `items` estiver vazio.
  feedbacks: {
    title: "Feedbacks",
    items: [],
  },

  formats: {
    title: "Formatos de",
    highlight: "entrega",
    footerNote:
      "Cada proposta é personalizada conforme a marca, o escopo e o volume de entregas. Valores e pacotes sob consulta.",
    expectation:
      "Você pode esperar uma parceria construída com estratégia, criatividade e autenticidade, com conteúdos que valorizam o produto, fortalecem a conexão com o público e têm potencial de gerar resultados reais.",
    items: [
      {
        id: "review",
        title: "Review & Teste",
        tags: "Reels · TikTok · Vertical",
        body: "Vídeo em que apresento o produto na prática: testo, mostro o resultado e destaco os diferenciais com a linguagem nativa da plataforma. É o formato em que a curadoria e a visão estratégica aparecem por inteiro.",
      },
      {
        id: "haul",
        title: "Unboxing & Haul",
        tags: "Reels · TikTok · Curadoria",
        body: "Abertura e apresentação de peças com olhar de quem escolhe: acabamento, detalhes, estilo e como usar no dia a dia. Ideal para lançamentos de bolsas, calçados e beleza.",
      },
      {
        id: "live-shop",
        title: "Live Shop",
        tags: "Ao vivo · Conversão direta",
        body: "Demonstração ao vivo, com dúvidas respondidas em tempo real e o produto mostrado na prática. É o formato mais próximo da decisão de compra.",
      },
      {
        id: "events",
        title: "Presença em eventos",
        tags: "Cobertura completa · Experiências de marca",
        body: "Cobertura de lançamentos e experiências de marca com storytelling autêntico e visual cuidado, entregue em múltiplos formatos: reels, stories e TikTok.",
      },
    ],
  },

  footer: {
    title: "Vamos criar",
    highlight: "juntas",
    body: "Cada proposta é personalizada de acordo com o briefing, os objetivos da marca e o formato escolhido. Me chama para conversarmos.",
    legal: "© 2026 Gabí Vianna · Todos os direitos reservados · Mídia Kit · Edição 2026",
    image: {
      alt: "Gabí em frente às letras da L’Oréal, de óculos escuros",
      aspect: "poster",
      src: "/media/footer/footer-loreal.webp",
    },
  },
};


