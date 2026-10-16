import { mediaKit } from "@/data/media-kit";
import { ContactButton } from "@/components/ui/ContactButton";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { ArchFrame, Container, Section } from "@/components/ui/Section";

export function About() {
  const { about } = mediaKit;
  const [first, ...rest] = about.paragraphs;

  return (
    <Section id="sobre" className="bg-cream">
      <Container className="grid gap-14 py-24 md:py-32 lg:grid-cols-12 lg:gap-20">
        <div className="self-start lg:sticky lg:top-28 lg:col-span-5">
          <blockquote className="font-serif text-4xl italic leading-[1.05] md:text-6xl">
            “{about.quote}”
          </blockquote>
          <Reveal className="mt-12">
            <ArchFrame className="w-full text-wine md:max-w-md lg:w-[82%] lg:max-w-none">
              <MediaImage
                {...about.image}
                quality={100}
                className="bg-gradient-to-b from-rose-soft via-rose to-wine-soft"
                imgClassName="object-cover object-top"
                sizes="(min-width: 1024px) 420px, 80vw"
              />
            </ArchFrame>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <Reveal>
            <h2 className="font-serif text-6xl leading-none tracking-tight md:text-8xl">
              <span className="text-2xl italic opacity-60 md:text-3xl">
                {about.greeting}
              </span>
              <br />
              <em className="font-normal">
                <span className="text-glow">{about.title}.</span>
              </em>
            </h2>
          </Reveal>

          <div className="mt-12 flex max-w-2xl flex-col gap-6 text-lg leading-8">
            <Reveal>
              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-8xl first-letter:leading-[0.8] first-letter:text-rose">
                {first}
              </p>
            </Reveal>
            {rest.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <ul className="mt-16 grid grid-cols-1 divide-y divide-wine/15 border-y border-wine/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {about.anchors.map((anchor) => (
              <li key={anchor.label} className="py-8 sm:px-6 sm:first:pl-0">
                <p className="font-serif text-6xl leading-none">
                  <span className="text-glow">{anchor.value}</span>
                </p>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em]">
                  {anchor.label}
                </p>
                <p className="mt-1 text-sm opacity-60">{anchor.hint}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex justify-center md:justify-start">
            <ContactButton />
          </div>
        </div>
      </Container>
    </Section>
  );
}
