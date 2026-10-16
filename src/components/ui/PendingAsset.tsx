import type { ImageAsset } from "@/types/media-kit";
import { ASPECT_CLASS, ASPECT_PIXELS } from "@/lib/placeholder";

type PendingAssetProps = Pick<
  ImageAsset,
  "alt" | "aspect" | "label" | "hint" | "file"
> & {
  className?: string;
  /** Preenche o container pai em vez de usar a proporção do `aspect`. */
  unconstrained?: boolean;
};

/**
 * Slot de imagem que ainda precisa ser desenvolvido.
 * É AMARELO e listrado de propósito: impossível de passar batido.
 */
export function PendingAsset({
  alt,
  aspect,
  label,
  hint,
  file,
  className = "",
  unconstrained = false,
}: PendingAssetProps) {
  const { width, height } = ASPECT_PIXELS[aspect];
  const frameClass = unconstrained ? "h-full w-full" : ASPECT_CLASS[aspect];

  return (
    <div
      role="img"
      aria-label={`Imagem pendente: ${alt}`}
      data-pending-asset=""
      className={`@container relative w-full overflow-hidden ${frameClass} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 border-2 border-dashed border-pending-ink bg-[repeating-linear-gradient(135deg,var(--pending)_0_14px,var(--pending-stripe)_14px_28px)] p-2 text-center text-pending-ink @[10rem]:gap-2 @[10rem]:p-4 @[20rem]:gap-3 @[20rem]:p-8">
        <span className="rounded-full bg-pending-ink px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-pending @[10rem]:px-3 @[10rem]:py-1 @[10rem]:text-[10px] @[20rem]:text-xs">
          ⚠ Imagem pendente
        </span>

        {label ? (
          <p className="font-sans text-[10px] font-bold uppercase leading-tight tracking-wide @[10rem]:text-xs @[20rem]:text-base @[40rem]:text-xl">
            {label}
          </p>
        ) : null}

        <p className="font-mono text-[9px] font-semibold @[10rem]:text-[11px] @[20rem]:text-sm">
          {width} × {height} px
        </p>

        {hint ? (
          <p className="hidden max-w-xl font-sans text-[11px] leading-snug @[14rem]:block @[28rem]:text-sm">
            {hint}
          </p>
        ) : null}

        {file ? (
          <p className="hidden max-w-full break-all rounded bg-pending-ink/10 px-2 py-1 font-mono text-[10px] @[14rem]:block @[28rem]:text-xs">
            {file}
          </p>
        ) : null}
      </div>
    </div>
  );
}
