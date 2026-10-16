import Image from "next/image";
import type { ImageAsset } from "@/types/media-kit";
import { ASPECT_CLASS } from "@/lib/placeholder";
import { PendingAsset } from "@/components/ui/PendingAsset";

type MediaImageProps = ImageAsset & {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  unconstrained?: boolean;
  quality?: number;
  unoptimized?: boolean;
};

export function MediaImage({
  aspect,
  alt,
  src,
  label,
  hint,
  file,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "100vw",
  unconstrained = false,
  quality = 90,
  unoptimized,
}: MediaImageProps) {
  if (!src) {
    return (
      <PendingAsset
        alt={alt}
        aspect={aspect}
        label={label}
        hint={hint}
        file={file}
        className={className}
        unconstrained={unconstrained}
      />
    );
  }

  const frameClass = unconstrained ? "h-full w-full" : ASPECT_CLASS[aspect];

  return (
    <div className={`relative w-full overflow-hidden ${frameClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        quality={quality}
        unoptimized={unoptimized}
        className={`${/\bobject-(cover|contain|fill|none|scale-down)\b/.test(imgClassName) ? "" : "object-cover"} ${imgClassName}`}
      />
    </div>
  );
}
