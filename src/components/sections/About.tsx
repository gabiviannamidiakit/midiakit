import { mediaKit } from "@/data/media-kit";
import { ContactButton } from "@/components/ui/ContactButton";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section } from "@/components/ui/Section";

export function About() {
  const { about } = mediaKit;
  const [first, ...rest] = about.paragraphs;

  return (
    <Section id="sobre" className="bg-cream">
      <Container className="pb-24 pt-10 md:pb-32 md:pt-14">
        <Reveal>
          <h2 className="font-serif text-6xl leading-none tracking-tight md:text-8xl">
            <span className="text-2xl italic opacity-60 md:text-3xl">{about.greeting}</span>
            <br />
            <em className="font-normal">
              <span className="text-glow">{about.title}.</span>
            </em>
          </h2>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 md:mt-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="aspect-[3/2]">
              <MediaImage
                {...about.image}
                unconstrained
                className="rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(74,18,38,0.45)]"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="flex max-w-2xl flex-col gap-6 text-lg leading-8">
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

            <div className="mt-10 flex justify-center md:justify-start">
              <ContactButton />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
