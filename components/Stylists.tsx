"use client";

import Image from "next/image";
import { stylists } from "@/data/salon";
import { sendBooking } from "@/lib/booking";
import SectionHeading from "./SectionHeading";

export default function Stylists() {
  return (
    <section id="stylists" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Meet the team" title="Hands you can trust" body="Senior stylists who train every month, so the trend you saw last week is something we have already practised." />

      <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-6 lg:grid-cols-4">
        {stylists.map((s) => (
          <li key={s.name} className="reveal group">
            <div className="arch relative aspect-[3/4] overflow-hidden bg-sand">
              <Image src={s.img} alt={`Portrait of ${s.name}`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute right-3 top-1/4 rounded-full bg-cream/90 px-3 py-1 text-xs font-bold">{s.exp}</span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">{s.name}</h3>
            <p className="text-sm text-stone-600">{s.role}</p>
            <button
              type="button"
              onClick={() => sendBooking({ stylist: s.name })}
              className="mt-3 text-sm font-bold text-rose underline-offset-4 hover:underline"
            >
              Book with {s.name.split(" ")[0]} →
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
