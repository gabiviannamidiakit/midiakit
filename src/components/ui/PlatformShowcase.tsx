"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import type { PlatformsContent, PrintItem } from "@/types/media-kit";

const PRINT_WIDTH = 736;
const PRINT_HEIGHT = 1200;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`size-5 ${direction === "left" ? "" : "rotate-180"}`}
      aria-hidden="true"
    >
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

function Lightbox({
  items,
  index,
  onClose,
  onChange,
}: {
  items: PrintItem[];
  index: number;
  onClose: () => void;
  onChange: (next: number) => void;
}) {
  const item = items[index];
  const go = useCallback(
    (step: number) => onChange((index + step + items.length) % items.length),
    [index, items.length, onChange],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-wine/95 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream/10 md:right-8 md:top-8"
        aria-label="Fechar"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <div
        className="flex max-h-full w-full max-w-md flex-col items-center gap-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="overflow-hidden rounded-[1.5rem] bg-cream shadow-2xl">
          <Image
            src={item.src}
            alt={item.alt}
            width={PRINT_WIDTH}
            height={PRINT_HEIGHT}
            unoptimized
            className="h-auto max-h-[72vh] w-auto max-w-full"
          />
        </div>
        <div className="text-center text-cream">
          <p className="font-serif text-2xl">{item.title}</p>
          <p className="mx-auto mt-1 max-w-sm text-sm text-cream/70">{item.caption}</p>
        </div>
        {items.length > 1 ? (
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex size-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream/10"
              aria-label="Anterior"
            >
              <ArrowIcon direction="left" />
            </button>
            <span className="text-xs uppercase tracking-[0.22em] text-cream/60">
              {index + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex size-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream/10"
              aria-label="Próximo"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export function PlatformShowcase({ content }: { content: PlatformsContent }) {
  const [activeId, setActiveId] = useState(content.tabs[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const tab = content.tabs.find((candidate) => candidate.id === activeId) ?? content.tabs[0];
  const closeLightbox = useCallback(() => setOpenIndex(null), []);
  const gridClass =
    tab.items.length <= 2
      ? "md:mx-auto md:max-w-2xl md:grid-cols-2"
      : "md:mx-auto md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3";

  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-rose-soft">
          {content.title}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-cream/70 md:text-base">
          {content.intro}
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Plataformas"
        className="mx-auto mt-8 flex w-fit max-w-full gap-1 rounded-full border border-cream/20 bg-cream/[0.06] p-1"
      >
        {content.tabs.map((candidate) => {
          const selected = candidate.id === tab.id;
          return (
            <button
              key={candidate.id}
              id={`platform-tab-${candidate.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="platform-panel"
              onClick={() => setActiveId(candidate.id)}
              className={`rounded-full px-3.5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] transition min-[360px]:px-5 min-[360px]:text-xs min-[360px]:tracking-[0.2em] sm:px-7 ${
                selected
                  ? "bg-cream text-wine"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {candidate.label}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-cream/50">
        {tab.period}
      </p>

      <motion.div
        key={tab.id}
        id="platform-panel"
        role="tabpanel"
        aria-labelledby={`platform-tab-${tab.id}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className={`-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:gap-6 md:overflow-visible md:px-0 md:pb-0 ${gridClass} [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {tab.items.map((item, index) => (
          <figure
            key={item.src}
            className="w-[74%] shrink-0 snap-center sm:w-[46%] md:w-auto"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group block w-full rounded-[1.75rem] bg-cream/95 p-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] ring-1 ring-cream/30 transition duration-300 hover:-translate-y-1 hover:ring-rose-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-soft"
              aria-label={`Ampliar: ${item.title}`}
            >
              <span className="block overflow-hidden rounded-[1.4rem]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={PRINT_WIDTH}
                  height={PRINT_HEIGHT}
                  unoptimized
                  loading="lazy"
                  className="h-auto w-full"
                />
              </span>
            </button>
            <figcaption className="mt-4 px-1">
              <p className="font-serif text-xl leading-tight">{item.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-cream/65">
                {item.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </motion.div>

      {tab.items.length > 1 ? (
        <p className="mt-3 text-center text-[11px] uppercase tracking-[0.22em] text-cream/45 md:hidden">
          Deslize para ver mais
        </p>
      ) : null}

      <AnimatePresence>
        {openIndex !== null ? (
          <Lightbox
            items={tab.items}
            index={openIndex}
            onClose={closeLightbox}
            onChange={setOpenIndex}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
