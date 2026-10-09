"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { categories } from "@/data/salon";
import { sendBooking } from "@/lib/booking";
import { ClockIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Services() {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const cat = categories[index];

  function onKeyDown(e: KeyboardEvent, i: number) {
    const next = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? categories.length - 1 : null;
    if (next === null) return;
    e.preventDefault();
    const j = (next + categories.length) % categories.length;
    setIndex(j);
    tabs.current[j]?.focus();
  }

  return (
    <section id="services" className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Service menu" title="Everything under one roof" body="Pick a category, find your treatment and tap Book. Prices are shared after a quick consult, since every head of hair is different." />

        <div role="tablist" aria-label="Service categories" className="no-scrollbar reveal mt-10 flex gap-2 overflow-x-auto pb-2 lg:justify-center">
          {categories.map((c, i) => (
            <button
              key={c.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`tab-${c.id}`}
              type="button"
              role="tab"
              aria-selected={index === i}
              aria-controls="services-panel"
              tabIndex={index === i ? 0 : -1}
              onClick={() => setIndex(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                index === i ? "bg-ink text-cream" : "bg-white/70 text-stone-600 hover:text-rose"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div id="services-panel" role="tabpanel" aria-labelledby={`tab-${cat.id}`} className="mt-10 grid gap-8 lg:grid-cols-[2fr_3fr]">
          <div className="relative min-h-72 overflow-hidden rounded-[2rem] lg:min-h-0">
            <Image key={cat.img} src={cat.img} alt={`${cat.name} at Aurelia`} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-cream sm:p-8">
              <h3 className="font-display text-4xl font-medium">{cat.name}</h3>
              <p className="mt-2 max-w-sm text-sm text-cream/80">{cat.blurb}</p>
            </div>
          </div>

          <ul className="divide-y divide-ink/10 rounded-[2rem] bg-cream px-6 sm:px-8">
            {cat.services.map((s) => (
              <li key={s.name} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-display text-2xl font-semibold">{s.name}</h4>
                  <p className="mt-1 text-sm text-stone-600">{s.body}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                    <ClockIcon className="size-3.5" />
                    {s.duration}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => sendBooking({ service: s.name })}
                  className="shrink-0 self-start rounded-full border border-ink/20 px-5 py-2 text-sm font-bold transition hover:border-rose hover:bg-rose hover:text-cream sm:self-center"
                >
                  Book
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
