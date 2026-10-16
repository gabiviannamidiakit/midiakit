import { mediaKit } from "@/data/media-kit";
import { ContactButton } from "@/components/ui/ContactButton";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SplitHeading } from "@/components/ui/Section";

export function Formats() {
  const { formats } = mediaKit;

  return (
    <Section id="formatos" className="overflow-hidden bg-wine text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(228,138,168,0.25),transparent_65%)]"
      />
      <Container className="relative py-24 md:py-32">
        <SplitHeading
          title={formats.title}
          highlight={formats.highlight}
          tone="dark"
        />

        <ul className="mt-16 border-b border-cream/15">
          {formats.items.map((item, index) => (
            <li key={item.id} className="border-t border-cream/15">
              <Reveal>
                <article className="grid grid-cols-[minmax(0,1fr)] gap-x-10 gap-y-5 py-10 md:py-12 lg:grid-cols-12 lg:items-start">
                  <div className="flex items-baseline gap-5 lg:col-span-6">
                    <span className="w-8 shrink-0 font-serif text-lg italic text-rose-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-4xl italic leading-tight md:text-6xl">
                      <span className="text-glow-light">{item.title}</span>
                    </h3>
                  </div>

                  <div className="pl-13 lg:col-span-6 lg:pl-0 lg:pt-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-rose-soft">
                      {item.tags}
                    </p>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-8 pt-4 lg:grid-cols-12">
          <p className="max-w-md text-sm leading-relaxed text-cream/60 lg:col-span-4">
            {formats.footerNote}
          </p>
          <p className="font-serif text-2xl italic leading-snug md:text-4xl lg:col-span-8">
            {formats.expectation}
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <ContactButton tone="dark" />
        </div>
      </Container>
    </Section>
  );
}
