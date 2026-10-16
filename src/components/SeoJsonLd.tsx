import { mediaKit } from "@/data/media-kit";
import { mediaKitUrl, siteImage, siteName, siteUrl } from "@/lib/site";

export function SeoJsonLd() {
  const { site, contact, hero } = mediaKit;
  const image = `${siteUrl}${siteImage.share}`;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    alternateName: ["bygabivianna", "Gabriela Casqueiro Vianna"],
    description: site.description,
    image,
    jobTitle: "Fashion & Beauty Creator",
    email: contact.email,
    telephone: "+55-21-96739-0505",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    sameAs: contact.socials.map((social) => social.href),
    knowsAbout: ["moda", "beleza", "bolsas", "scarpins", "conteúdo para marcas"],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: site.title,
    description: site.description,
    url: mediaKitUrl,
    inLanguage: "pt-BR",
    headline: hero.headline,
    primaryImageOfPage: image,
    mainEntity: {
      "@type": "Person",
      name: siteName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
    </>
  );
}
