import Image from "next/image";
import { mediaKit } from "@/data/media-kit";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section } from "@/components/ui/Section";
import type { Brand } from "@/types/media-kit";

/** Largura exibida: normaliza pela "área" para logos largos e quadrados terem peso visual parecido. */
function displayWidth(brand: Brand) {
  return Math.min(260, Math.round(Math.sqrt(9000 * (brand.width / brand.height))));
}

function MarqueeRow({ brands, reverse = false }: { brands: Brand[]; reverse?: boolean }) {
  // A lista é repetida duas vezes e a faixa anda -50%, o que dá o loop contínuo.
  const loop = [...brands, ...brands];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
      <ul
        className={`flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {loop.map((brand, index) => (
          <li
            key={`${brand.id}-${index}`}
            aria-hidden={index >= brands.length ? true : undefined}
            className="flex h-24 shrink-0 items-center pr-14 md:pr-20"
          >
            <Image
              src={brand.src}
              alt={index >= brands.length ? "" : brand.name}
              width={brand.width}
              height={brand.height}
              quality={100}
              sizes="260px"
              style={{ width: `calc(${displayWidth(brand)}px * var(--logo-scale))`, height: "auto" }}
              className="select-none opacity-90"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Brands() {
  const { brands } = mediaKit;
  const middle = Math.ceil(brands.items.length / 2);
  const firstRow = brands.items.slice(0, middle);
  const secondRow = brands.items.slice(middle);

  return (
    <Section
      id="marcas"
      className="overflow-hidden bg-gradient-to-br from-rose-soft via-cream-dark to-rose-soft"
    >
      <Container className="grid items-center gap-12 py-24 grid-cols-[minmax(0,1fr)] md:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="font-serif text-6xl italic leading-[0.95] md:text-8xl">
            <span className="text-glow">{brands.countLabel}</span>
          </p>
          <p className="mt-8 max-w-sm text-base leading-relaxed opacity-75">
            {brands.intro}
          </p>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <div
            role="group"
            aria-label="Marcas atendidas"
            className="group flex flex-col gap-4 rounded-3xl bg-wine py-8 text-cream shadow-[0_30px_70px_-35px_rgba(74,18,38,0.6)] [--logo-scale:0.7] sm:[--logo-scale:0.85] md:[--logo-scale:1]"
          >
            <MarqueeRow brands={firstRow} />
            <MarqueeRow brands={secondRow} reverse />
          </div>
        </div>

        <div className="min-w-0 lg:col-span-12 lg:mt-12">
          <h3 className="font-sans! text-[11px] font-medium uppercase tracking-[0.24em] opacity-60">
            {brands.directoryTitle}
          </h3>

          <div className="mt-6 border-b border-wine/25">
            {brands.categories.map((category, index) => (
              <Reveal
                key={category.id}
                delay={index * 0.08}
                className="grid grid-cols-[minmax(0,1fr)] gap-6 border-t border-wine/25 py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
              >
                <h4 className="font-serif text-2xl italic leading-tight md:text-3xl lg:col-span-3">
                  {category.title}
                </h4>

                <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 sm:gap-x-8 lg:col-span-9 lg:pt-2 xl:grid-cols-5">
                  {category.brands.map((name) => (
                    <li key={name} className="text-sm leading-snug">
                      {name}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
