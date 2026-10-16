type Tone = "light" | "dark";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-16 ${className}`}>
      {children}
    </section>
  );
}

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

type SplitHeadingProps = {
  title: string;
  highlight?: string;
  tone?: Tone;
  className?: string;
};

export function SplitHeading({
  title,
  highlight,
  tone = "light",
  className = "",
}: SplitHeadingProps) {
  return (
    <h2
      className={`font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[5.75rem] ${className}`}
    >
      {title}
      {highlight ? (
        <>
          <br />
          <em
            className={`font-normal ${tone === "dark" ? "text-glow-light" : "text-glow"}`}
          >
            {highlight}
          </em>
        </>
      ) : null}
    </h2>
  );
}

/** Moldura em arco, assinatura visual do mídia kit. */
export function ArchFrame({
  children,
  className = "",
  outline = true,
}: {
  children: React.ReactNode;
  className?: string;
  outline?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      {outline ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-2xl border border-current opacity-30"
        />
      ) : null}
      <div className="relative overflow-hidden rounded-t-[999px] rounded-b-2xl">
        {children}
      </div>
    </div>
  );
}
