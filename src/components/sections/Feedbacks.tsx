import { mediaKit } from "@/data/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";
import { Container, Section, SplitHeading } from "@/components/ui/Section";

export function Feedbacks() {
  const { feedbacks } = mediaKit;

  // Sem feedbacks cadastrados: a seção inteira fica oculta.
  if (feedbacks.items.length === 0) return null;

  return (
    <Section id="feedbacks" className="bg-cream">
      <Container className="py-24 md:py-32">
        <SplitHeading title={feedbacks.title} />
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {feedbacks.items.map((item) => (
            <li key={item.id}>
              {item.image ? (
                <MediaImage
                  {...item.image}
                  className="rounded-3xl"
                  sizes="(min-width: 768px) 360px, 90vw"
                />
              ) : item.quote ? (
                <p className="font-serif text-3xl italic leading-snug">“{item.quote}”</p>
              ) : null}
              <p className="mt-4 text-[11px] uppercase tracking-[0.22em] opacity-60">
                {item.author}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
