import { mediaKit } from "@/data/media-kit";
import { Button } from "@/components/ui/Button";
import { Container, ArchFrame } from "@/components/ui/Section";
import { MediaImage } from "@/components/ui/MediaImage";

export function Hero() {
  const { hero, contact } = mediaKit;
  const instagram = contact.socials.find((social) => social.id === "instagram");

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-cream pt-24 md:pt-28"
    >
      {/* brilhos de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[44rem] rounded-full bg-[radial-gradient(circle,rgba(228,138,168,0.55),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-40 -left-56 -z-10 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(246,188,205,0.7),transparent_65%)]"
      />

      <Container className="grid items-center gap-10 pb-16 lg:grid-cols-12 lg:gap-0 lg:pb-20">
        <div className="relative z-10 lg:col-span-7 lg:-mr-16">
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em]">
            <span className="size-1.5 rounded-full bg-rose" />
            {hero.kicker}
          </p>

          <h1 className="mt-6 font-serif leading-[0.8] tracking-tight">
            <span className="block text-[26vw] sm:text-[21vw] lg:text-[9.5rem] xl:text-[12rem]">
              {hero.name}
            </span>
            <em className="block text-[26vw] font-normal sm:text-[21vw] lg:ml-24 lg:text-[9.5rem] xl:ml-32 xl:text-[12rem]">
              <span className="text-glow">{hero.surname}</span>
            </em>
            <span className="sr-only"> · {hero.role}</span>
          </h1>

          <p className="mt-10 max-w-xl font-serif text-2xl italic leading-snug md:text-4xl">
            {hero.headline}
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed opacity-75 md:text-base">
            {hero.tagline}
          </p>

          <div className="mx-auto mt-10 grid w-fit gap-3 sm:mx-0 sm:flex sm:w-auto sm:flex-wrap">
            <Button href={contact.whatsappHref}>Falar no WhatsApp</Button>
            {instagram ? (
              <Button href={instagram.href} variant="outline">
                {instagram.handle}
              </Button>
            ) : null}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <ArchFrame className="mx-auto w-full max-w-md text-wine lg:mr-0">
            <MediaImage
              {...hero.image}
              priority
              quality={100}
              className="bg-gradient-to-b from-rose-soft via-rose to-wine-soft"
              imgClassName="object-contain object-bottom"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </ArchFrame>

          {/* selo giratório */}
          <div className="absolute bottom-20 left-0 hidden size-32 items-center justify-center md:flex lg:-left-8">
            <svg
              viewBox="0 0 120 120"
              className="absolute size-full animate-spin-slow"
              aria-hidden="true"
            >
              <defs>
                <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <circle cx="60" cy="60" r="58" fill="#4a1226" />
              <text fill="#f6bccd" fontSize="9.5" letterSpacing="3.2" fontFamily="var(--font-jost)">
                <textPath href="#badge-circle">
                  FASHION · BEAUTY · CREATOR ·
                </textPath>
              </text>
            </svg>
            <span className="relative font-serif text-4xl italic text-rose-soft">G</span>
          </div>
        </div>
      </Container>

      {/* linhas de capa */}
      <div className="border-t border-wine/15">
        <Container className="grid grid-cols-1 divide-y divide-wine/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {hero.highlights.map((item) => (
            <div key={item.label} className="flex items-baseline gap-4 py-6 sm:px-8 sm:first:pl-0">
              <span className="whitespace-nowrap font-serif text-4xl md:text-5xl">{item.value}</span>
              <span className="text-[11px] uppercase tracking-[0.2em] opacity-60">
                {item.label}
              </span>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
