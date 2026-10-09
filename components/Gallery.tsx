"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "@/data/salon";
import SectionHeading from "./SectionHeading";

// Spans for a gap-free 12-cell mosaic in both the 2- and 4-column grids.
const tile = ["row-span-2", "", "", "row-span-2", "col-span-2", "", "", "col-span-2"];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const isOpen = active !== null;
  const close = useCallback(() => setActive(null), []);
  const step = useCallback((d: number) => setActive((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)), []);

  // Move focus into the lightbox while it's open, and back to the photo that opened it after.
  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => opener?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "Tab") {
        // Keep keyboard focus inside the dialog.
        const buttons = [...document.querySelectorAll<HTMLButtonElement>("[data-lightbox] button")];
        const i = buttons.indexOf(document.activeElement as HTMLButtonElement);
        e.preventDefault();
        buttons[(i + (e.shiftKey ? -1 : 1) + buttons.length) % buttons.length]?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, step]);

  return (
    <section id="lookbook" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Lookbook" title="Fresh from the chair" body="Real work from our floor this season. Tap any photo to see it larger." />
        <div className="mt-12 grid grid-flow-dense auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
          {gallery.map((g, i) => (
            <button
              key={g.img}
              type="button"
              onClick={() => setActive(i)}
              className={`reveal group relative overflow-hidden rounded-2xl bg-sand ${tile[i]}`}
              aria-label={`Open photo: ${g.alt}`}
            >
              <Image src={g.img} alt={g.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={gallery[active].alt}
          data-lightbox
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 text-cream backdrop-blur"
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <div className="relative h-[80svh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={gallery[active].img} alt={gallery[active].alt} fill sizes="100vw" className="object-contain" />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-cream/80">
            {gallery[active].alt} · {active + 1}/{gallery.length}
          </p>
          {[
            { d: -1, label: "Previous photo", cls: "left-3 sm:left-6", path: "M15 6l-6 6 6 6" },
            { d: 1, label: "Next photo", cls: "right-3 sm:right-6", path: "M9 6l6 6-6 6" },
          ].map((b) => (
            <button
              key={b.d}
              type="button"
              aria-label={b.label}
              onClick={(e) => {
                e.stopPropagation();
                step(b.d);
              }}
              className={`absolute top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 transition hover:bg-rose hover:text-cream ${b.cls}`}
            >
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={b.path} />
              </svg>
            </button>
          ))}
          <button ref={closeRef} type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-white/10 text-2xl hover:bg-rose hover:text-cream">
            ×
          </button>
        </div>
      )}
    </section>
  );
}
