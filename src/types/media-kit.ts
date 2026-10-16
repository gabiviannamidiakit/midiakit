export type AspectRatio =
  | "square"
  | "story"
  | "portrait"
  | "landscape"
  | "wide"
  | "poster"
  | "cover";

/**
 * Um slot de imagem do mídia kit.
 *
 * - Com `src`: a imagem é exibida normalmente.
 * - SEM `src`: o slot vira um bloco AMARELO destacado ("imagem pendente"),
 *   mostrando `label`, `hint`, o tamanho ideal e o caminho (`file`) onde o
 *   arquivo final deve ser salvo. Basta preencher `src` para ele sumir.
 */
export type ImageAsset = {
  alt: string;
  aspect: AspectRatio;
  src?: string;
  /** Título curto do que falta (aparece no bloco pendente). */
  label?: string;
  /** Instrução do que desenvolver (aparece no bloco pendente). */
  hint?: string;
  /** Caminho sugerido para salvar o arquivo final. */
  file?: string;
};

export type NavItem = { id: string; label: string };

export type SocialLink = {
  id: "instagram" | "tiktok";
  label: string;
  handle: string;
  href: string;
};

export type Contact = {
  email: string;
  phone: string;
  whatsappHref: string;
  socials: SocialLink[];
};

export type Stat = {
  value: string;
  label: string;
  hint?: string;
};

export type BarDatum = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
};

export type HeroContent = {
  kicker: string;
  name: string;
  surname: string;
  role: string;
  headline: string;
  tagline: string;
  /** Recorte da Gabí (PNG/WebP com fundo transparente). */
  image: ImageAsset;
  highlights: Stat[];
};

export type AboutContent = {
  greeting: string;
  title: string;
  quote: string;
  anchors: Stat[];
  paragraphs: string[];
  image: ImageAsset;
};

export type ProfileContent = {
  title: string;
  highlight: string;
  subtitle: string;
  body: string;
  tiktok: {
    views: Stat;
    viewers: Stat;
    visits: Stat;
    interactions: Stat & { breakdown: Stat[] };
  };
  community: {
    total: Stat;
    platforms: { id: string; label: string; value: string; share: number }[];
  };
  instagram: {
    reach: Stat;
    interactions: Stat;
    mixTitle: string;
    mix: BarDatum[];
  };
  live: {
    label: string;
    period: string;
    stats: Stat[];
    note: string;
  };
  platforms: PlatformsContent;
};

/** Print real de uma plataforma, com legenda explicando o que ele mostra. */
export type PrintItem = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

export type PlatformTab = {
  id: string;
  label: string;
  period: string;
  items: PrintItem[];
};

export type PlatformsContent = {
  title: string;
  intro: string;
  tabs: PlatformTab[];
};

export type AudienceContent = {
  title: string;
  highlight: string;
  paragraphs: string[];
  chips: string[];
  gender: { value: number; label: string; rest: string };
  age: BarDatum[];
  locations: BarDatum[];
  locationsNote: string;
};

export type ResultItem = {
  id: string;
  numeral: string;
  tag: string;
  title: string;
  stats: string;
};

export type CurationContent = {
  title: string;
  highlight: string;
  paragraphs: string[];
  photos: ImageAsset[];
  resultsTitle: string;
  resultsBody: string;
  results: ResultItem[];
};

export type Brand = {
  id: string;
  name: string;
  /** Logo branco com fundo transparente (sem margens). */
  src: string;
  width: number;
  height: number;
};

export type BrandsContent = {
  title: string;
  highlight: string;
  countLabel: string;
  intro: string;
  /** Quando vazio, a seção mostra um slot pendente para os logos. */
  items: Brand[];
  pending: ImageAsset;
};

export type Feedback = {
  id: string;
  quote?: string;
  author: string;
  image?: ImageAsset;
};

export type FeedbacksContent = {
  title: string;
  /** Quando vazio, a seção inteira fica oculta. */
  items: Feedback[];
};

export type Format = {
  id: string;
  title: string;
  tags: string;
  body: string;
};

export type FormatsContent = {
  title: string;
  highlight: string;
  footerNote: string;
  expectation: string;
  items: Format[];
};

export type FooterContent = {
  title: string;
  highlight: string;
  body: string;
  legal: string;
  image: ImageAsset;
};

export type SiteMeta = {
  title: string;
  description: string;
  keywords: string[];
};

export type MediaKit = {
  site: SiteMeta;
  nav: NavItem[];
  contact: Contact;
  hero: HeroContent;
  about: AboutContent;
  profile: ProfileContent;
  audience: AudienceContent;
  curation: CurationContent;
  brands: BrandsContent;
  feedbacks: FeedbacksContent;
  formats: FormatsContent;
  footer: FooterContent;
};
