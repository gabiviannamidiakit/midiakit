type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  tone?: "light" | "dark";
  className?: string;
  external?: boolean;
};

const palette = {
  light: {
    solid: "border border-transparent bg-wine text-cream hover:bg-wine-soft",
    outline: "border border-wine/30 text-wine hover:bg-wine hover:text-cream",
  },
  dark: {
    solid: "border border-transparent bg-cream text-wine hover:bg-rose-soft",
    outline: "border border-cream/40 text-cream hover:bg-cream hover:text-wine",
  },
};

export function Button({
  href,
  children,
  variant = "solid",
  tone = "light",
  className = "",
  external = true,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] transition ${palette[tone][variant]} ${className}`}
    >
      {children}
      <span aria-hidden="true" className="transition group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
