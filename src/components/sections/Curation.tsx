import { mediaKit } from "@/data/media-kit";
import { ContactButton } from "@/components/ui/ContactButton";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SplitHeading } from "@/components/ui/Section";

export function Curation() {
  const { curation } = mediaKit;
  const columns = [0, 1, 2].map((column) =>
    curation.photos.filter((_, index) => index % 3 === column),
  );
  const offsets = ["", "mt-10 md:mt-28", "mt-5 md:mt-12"];

  return (
    <Section id="curadoria" className="bg-cream">
      <Container className="py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SplitHeading
              title={curation.title}
              highlight={curation.highlight}
            />
          </div>
          <div className="flex flex-col gap-6 text-lg leading-8 lg:col-span-5 lg:pt-4">
            {curation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* mosaico de lookbook */}
        <div className="mt-20 grid grid-cols-3 gap-2 sm:gap-4 md:gap-7">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex flex-col gap-2 sm:gap-4 md:gap-7 ${offsets[columnIndex]}`}
            >
              {column.map((photo, index) => (
                <Reveal key={photo.src ?? photo.alt} delay={index * 0.08}>
                  <MediaImage
                    {...photo}
                    className="rounded-2xl md:rounded-[2rem]"
                    sizes="(min-width: 1280px) 380px, 33vw"
                  />
                </Reveal>
              ))}
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-[11px] font-medium uppercase tracking-[0.3em] opacity-60 md:mt-24">
          Review ✦ Teste de produto ✦ Unboxing ✦ Haul
        </p>

        {/* resultados */}
        <div className="mt-24 md:mt-32">
          <div className="grid gap-6 lg:grid-cols-12">
            <h3 className="font-serif text-4xl leading-none md:text-6xl lg:col-span-7">
              {curation.resultsTitle}
            </h3>
            <p className="max-w-md text-base leading-relaxed opacity-70 lg:col-span-5 lg:self-end">
              {curation.resultsBody}
            </p>
          </div>

          <ul className="mt-12 border-b border-wine/15">
            {curation.results.map((result) => (
              <li
                key={result.id}
                className="grid grid-cols-[minmax(0,1fr)] items-center gap-y-5 border-t border-wine/15 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-10 md:py-10"
              >
                <p className="font-serif text-7xl leading-none sm:text-8xl md:text-[9rem]">
                  <span className="text-glow">{result.numeral}</span>
                </p>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-wine-soft">
                    {result.tag}
                  </p>
                  <h4 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                    {result.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed opacity-65">
                    {result.stats}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex justify-center">
          <ContactButton />
        </div>
      </Container>
    </Section>
  );
}
