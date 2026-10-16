import { mediaKit } from "@/data/media-kit";
import { ContactButton } from "@/components/ui/ContactButton";
import { Columns, Donut } from "@/components/ui/Charts";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SplitHeading } from "@/components/ui/Section";

/**
 * Card padrão do bloco de público: título, área de gráfico com altura fixa
 * e rodapé alinhado na base. Assim os três cards ficam sempre do mesmo tamanho.
 */
function Panel({
  index,
  title,
  footer,
  children,
}: {
  index: string;
  title: string;
  footer: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-[2rem] bg-cream p-6 shadow-[0_20px_60px_-30px_rgba(74,18,38,0.35)] lg:p-8">
      <div className="flex items-baseline justify-between">
        <p className="text-[11px] font-medium uppercase tracking-[0.24em] opacity-70">
          {title}
        </p>
        <span className="font-serif text-sm italic opacity-40">{index}</span>
      </div>

      <div className="flex h-64 items-center justify-center py-6">{children}</div>

      <p className="mt-auto min-h-[3.25rem] border-t border-wine/10 pt-4 text-sm leading-relaxed opacity-65">
        {footer}
      </p>
    </div>
  );
}

export function Audience() {
  const { audience } = mediaKit;
  const topAge = audience.age.reduce((top, item) => (item.value > top.value ? item : top));

  return (
    <Section id="publico" className="bg-blush">
      <Container className="py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SplitHeading
              title={audience.title}
              highlight={audience.highlight}
            />
          </div>
          <div className="flex flex-col gap-6 text-lg leading-8 lg:col-span-5 lg:pt-4">
            {audience.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ul className="mt-12 flex flex-wrap gap-2">
          {audience.chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-wine/25 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em]"
            >
              {chip}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)] items-stretch gap-5 lg:grid-cols-3">
          <Reveal className="h-full">
            <Panel index="01" title="Gênero" footer={audience.gender.rest}>
              <Donut value={audience.gender.value} label={audience.gender.label} />
            </Panel>
          </Reveal>

          <Reveal className="h-full" delay={0.08}>
            <Panel
              index="02"
              title="Faixa etária"
              footer={`Maior concentração: ${topAge.label} anos (${topAge.suffix ?? `${topAge.value}%`}).`}
            >
              <Columns items={audience.age} className="mx-auto h-full w-full max-w-sm" />
            </Panel>
          </Reveal>

          <Reveal className="h-full" delay={0.16}>
            <Panel index="03" title="Principais cidades" footer={audience.locationsNote}>
              <ol className="mx-auto flex h-full w-full max-w-sm flex-col justify-between">
                {audience.locations.map((location, locationIndex) => (
                  <li
                    key={location.id}
                    className="flex items-baseline gap-3 border-b border-wine/10 pb-2 last:border-b-0 last:pb-0"
                  >
                    <span className="w-6 font-serif text-sm italic opacity-50">
                      {String(locationIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1 truncate">{location.label}</span>
                    <span className="font-serif text-2xl">{location.suffix}</span>
                  </li>
                ))}
              </ol>
            </Panel>
          </Reveal>
        </div>

        <div className="mt-14 flex justify-center">
          <ContactButton />
        </div>
      </Container>
    </Section>
  );
}
