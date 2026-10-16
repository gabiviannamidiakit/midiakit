import { mediaKit } from "@/data/media-kit";
import { ContactButton } from "@/components/ui/ContactButton";
import { Columns } from "@/components/ui/Charts";
import { PlatformShowcase } from "@/components/ui/PlatformShowcase";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SplitHeading } from "@/components/ui/Section";

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-cream/10 bg-cream/[0.05] p-7 md:p-9 ${className}`}
    >
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-rose-soft">
      {children}
    </p>
  );
}

export function Numbers() {
  const { profile } = mediaKit;
  const { tiktok, community, instagram } = profile;

  return (
    <Section id="numeros" className="overflow-hidden bg-wine text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(228,138,168,0.28),transparent_65%)]"
      />
      <Container className="relative py-24 md:py-32">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SplitHeading
              title={profile.title}
              highlight={profile.highlight}
              tone="dark"
            />
          </div>
          <p className="text-sm uppercase tracking-[0.22em] text-cream/60 lg:col-span-4 lg:text-right">
            {profile.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-6">
          {/* destaque */}
          <Reveal className="md:col-span-4 md:row-span-2">
            <Card className="flex h-full min-h-[17rem] flex-col md:min-h-[22rem] justify-between bg-gradient-to-br from-rose/25 via-cream/[0.05] to-transparent">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 size-80 rounded-full border border-cream/10"
              />
              <div
                aria-hidden="true"
                className="absolute -right-40 -top-40 size-[34rem] rounded-full border border-cream/10"
              />
              <Label>{tiktok.views.label}</Label>
              <div>
                <p className="font-serif whitespace-nowrap text-[3.2rem] leading-none min-[375px]:text-[3.9rem] min-[400px]:text-[4.5rem] sm:text-[8rem] md:text-[9.5rem]">
                  <span className="text-glow-light">{tiktok.views.value}</span>
                </p>
                <p className="mt-4 text-sm text-cream/70">{tiktok.views.hint}</p>
              </div>
            </Card>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.05}>
            <Card className="flex h-full min-h-[10.5rem] flex-col justify-between">
              <Label>{tiktok.viewers.label}</Label>
              <p className="whitespace-nowrap font-serif text-5xl leading-none sm:text-6xl">{tiktok.viewers.value}</p>
            </Card>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.1}>
            <Card className="flex h-full min-h-[10.5rem] flex-col justify-between">
              <Label>{tiktok.visits.label}</Label>
              <p className="whitespace-nowrap font-serif text-5xl leading-none sm:text-6xl">{tiktok.visits.value}</p>
            </Card>
          </Reveal>

          {/* interações */}
          <Reveal className="md:col-span-3">
            <Card className="h-full">
              <Label>{tiktok.interactions.label}</Label>
              <p className="mt-6 font-serif text-6xl leading-none sm:text-7xl">
                {tiktok.interactions.value}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {tiktok.interactions.breakdown.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-full border border-cream/20 px-4 py-2 text-sm"
                  >
                    <span className="font-serif text-lg">{item.value}</span>{" "}
                    <span className="text-cream/60">{item.label}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* comunidade */}
          <Reveal className="md:col-span-3" delay={0.05}>
            <Card className="h-full">
              <Label>{community.total.label}</Label>
              <p className="mt-6 font-serif text-6xl leading-none sm:text-7xl">
                {community.total.value}
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {community.platforms.map((platform) => (
                  <li key={platform.id}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-cream/70">{platform.label}</span>
                      <span className="font-medium">{platform.value}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-cream/15">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-rose to-rose-soft"
                        style={{ width: `${platform.share}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* instagram */}
          <Reveal className="md:col-span-6">
            <Card className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-end">
              <div>
                <Label>{instagram.reach.label}</Label>
                <p className="mt-6 font-serif text-6xl leading-none sm:text-7xl md:text-8xl">
                  {instagram.reach.value}
                </p>
                <p className="mt-4 text-sm text-cream/70">
                  {instagram.reach.hint} · {instagram.interactions.value}{" "}
                  {instagram.interactions.label}
                </p>
              </div>
              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-cream/60">
                  {instagram.mixTitle}
                </p>
                <Columns items={instagram.mix} tone="dark" className="h-48" />
              </div>
            </Card>
          </Reveal>

          {/* lives */}
          <Reveal className="md:col-span-6">
            <Card className="bg-gradient-to-r from-rose/20 via-cream/[0.05] to-transparent">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <Label>{profile.live.label}</Label>
                <p className="text-[11px] uppercase tracking-[0.22em] text-cream/50">
                  {profile.live.period}
                </p>
              </div>
              <ul className="mt-8 grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-6 gap-y-8 lg:grid-cols-4">
                {profile.live.stats.map((stat) => (
                  <li key={stat.label}>
                    <p className="whitespace-nowrap font-serif text-[1.75rem] leading-none min-[360px]:text-[2rem] min-[390px]:text-4xl sm:text-5xl md:text-6xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-cream/65">{stat.label}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-cream/15 pt-5 text-sm text-cream/70">
                {profile.live.note}
              </p>
            </Card>
          </Reveal>
        </div>

        {/* prints reais das plataformas */}
        <div className="mt-20">
          <Reveal>
            <PlatformShowcase content={profile.platforms} />
          </Reveal>
        </div>

        <p className="mx-auto mt-20 max-w-3xl text-center font-serif text-2xl italic leading-snug md:text-3xl">
          {profile.body}
        </p>
        <div className="mt-12 flex justify-center">
          <ContactButton tone="dark" />
        </div>
      </Container>
    </Section>
  );
}
