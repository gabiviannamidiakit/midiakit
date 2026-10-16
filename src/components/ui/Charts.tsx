import type { BarDatum } from "@/types/media-kit";

/** Anel de porcentagem (ex.: 70% feminino). */
export function Donut({
  value,
  label,
  className = "",
}: {
  value: number;
  label: string;
  className?: string;
}) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[220px] ${className}`}>
      <svg viewBox="0 0 140 140" className="size-full -rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id="donut-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4a1226" />
            <stop offset="100%" stopColor="#e48aa8" />
          </linearGradient>
        </defs>
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="14"
        />
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="url(#donut-gradient)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={`${(circumference * value) / 100} ${circumference}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-5xl leading-none">{value}%</span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.22em] opacity-60">
          {label}
        </span>
      </div>
    </div>
  );
}

/** Colunas verticais com topo arredondado. */
export function Columns({
  items,
  tone = "light",
  className = "h-56",
}: {
  items: BarDatum[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const max = Math.max(...items.map((item) => item.value));
  const fill =
    tone === "dark"
      ? "from-rose/30 to-rose-soft"
      : "from-wine to-rose";

  return (
    <ul className={`flex items-end gap-3 ${className}`}>
      {items.map((item) => (
        <li
          key={item.id}
          className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
        >
          <span className="text-sm font-medium">{item.suffix ?? `${item.value}%`}</span>
          <div
            className={`w-full rounded-t-full bg-gradient-to-t ${fill}`}
            style={{ height: `${(item.value / max) * 78}%` }}
          />
          <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.12em] opacity-60 sm:tracking-[0.18em]">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
