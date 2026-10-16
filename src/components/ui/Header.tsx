"use client";

import { useEffect, useState } from "react";
import { mediaKit } from "@/data/media-kit";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu aberto: trava a rolagem da página, fecha com Esc e ao voltar para desktop.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
          open
            ? "text-cream"
            : scrolled
              ? "border-b border-wine/10 bg-cream/85 text-wine backdrop-blur-md"
              : "text-wine"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="font-serif text-2xl italic"
            aria-label="Início"
          >
            Gabí<span className="text-rose">.</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Seções">
            {mediaKit.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[11px] font-medium uppercase tracking-[0.22em] opacity-70 transition hover:opacity-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={mediaKit.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition ${
                open
                  ? "border-cream/40 hover:bg-cream hover:text-wine"
                  : "border-wine/30 hover:bg-wine hover:text-cream"
              }`}
            >
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="relative flex size-11 items-center justify-center rounded-full border border-current/30 lg:hidden"
            >
              <span
                aria-hidden="true"
                className={`absolute h-px w-5 bg-current transition duration-300 ${
                  open ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-px w-5 bg-current transition duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-px w-5 bg-current transition duration-300 ${
                  open ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu-mobile"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-wine px-5 pb-10 pt-28 text-cream transition duration-300 md:px-10 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(228,138,168,0.3),transparent_65%)]"
        />
        <nav aria-label="Seções" className="relative">
          <ul className="flex flex-col">
            {mediaKit.nav.map((item, index) => (
              <li key={item.id} className="border-b border-cream/15">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="flex items-baseline gap-4 py-4 font-serif text-4xl transition hover:text-rose-soft sm:text-5xl"
                >
                  <span className="w-8 text-base italic text-rose-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="relative mt-10 text-sm text-cream/70">
          <p className="uppercase tracking-[0.22em]">
            {mediaKit.contact.socials[0].handle} · Instagram e TikTok
          </p>
          <p className="mt-2">{mediaKit.contact.email}</p>
        </div>
      </div>
    </>
  );
}
