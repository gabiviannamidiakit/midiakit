import { mediaKit } from "@/data/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { ArchFrame, Container, Section } from "@/components/ui/Section";

export function Contact() {
  const { footer, contact } = mediaKit;

  const rows = [
    { label: "WhatsApp", value: contact.phone, href: contact.whatsappHref, external: true },
    { label: "E-mail", value: contact.email, href: `mailto:${contact.email}`, external: false },
    ...contact.socials.map((social) => ({
      label: social.label,
      value: social.handle,
      href: social.href,
      external: true,
    })),
  ];

  return (
    <Section
      id="contato"
      className="overflow-hidden bg-gradient-to-b from-rose-soft via-cream-dark to-rose"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6),transparent_65%)]"
      />
      <Container className="relative grid grid-cols-[minmax(0,1fr)] gap-16 pb-10 pt-24 md:pt-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="font-serif text-[18vw] leading-[0.85] tracking-tight sm:text-[14vw] lg:text-[8.5rem]">
            {footer.title}
            <br />
            <em className="font-normal">
              <span className="text-glow">{footer.highlight}.</span>
            </em>
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-8">{footer.body}</p>

          <ul className="mt-12 border-b border-wine/20">
            {rows.map((row) => (
              <li key={row.label} className="border-t border-wine/20">
                <a
                  href={row.href}
                  {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex flex-col gap-1 py-5 transition sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:hover:pl-3"
                >
                  <span className="text-[11px] font-medium uppercase tracking-[0.24em] opacity-70">
                    {row.label}
                  </span>
                  <span className="flex min-w-0 items-baseline gap-3 font-serif text-[1.3rem] [overflow-wrap:anywhere] min-[360px]:text-2xl md:text-3xl">
                    {row.value}
                    <span
                      aria-hidden="true"
                      className="text-xl transition group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="lg:col-span-5">
          <ArchFrame className="mx-auto w-full max-w-sm text-wine lg:mr-0">
            <MediaImage {...footer.image} sizes="(min-width: 1024px) 384px, 90vw" />
          </ArchFrame>
        </Reveal>
      </Container>

      <p className="relative px-5 pb-8 pt-14 text-center text-[11px] uppercase tracking-[0.18em] opacity-60 md:px-10">
        {footer.legal}
      </p>
    </Section>
  );
}
